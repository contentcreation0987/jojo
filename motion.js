/* Scroll-reveal + intro splash teardown. ~1KB, no dependencies.

   Reveal is opt-in from JS only: the hiding rule is scoped to html.jojo-reveal,
   which this file adds. If JS never runs, every section stays visible.

   Visibility is decided by getBoundingClientRect, not IntersectionObserver —
   IO silently failed to deliver callbacks on the logistics page and left the
   whole layout at opacity 0. A sweep is a few hundred cheap reads and always runs. */
(function () {
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---- intro splash ----
     Held until the app has actually painted, so the logo animation is seen on a
     slow phone instead of fading out over a blank screen. Capped so a failed
     render can never leave the splash up. */
  var splash = document.getElementById("jojo-splash");
  if (splash) {
    if (reduce) splash.remove();
    else {
      var t0 = Date.now();
      var kill = function () { splash && splash.remove(); splash = null; };
      var dismissed = false;
      var dismiss = function () {
        if (dismissed || !splash) return;
        dismissed = true;
        setTimeout(function () {
          if (!splash) return;
          splash.classList.add("go");
          setTimeout(kill, 620);
        }, Math.max(0, 950 - (Date.now() - t0)));
      };
      var app = document.getElementById("root");
      if (app) {
        if (app.children.length) dismiss();
        else {
          var mo = new MutationObserver(function () {
            if (app.children.length) { mo.disconnect(); dismiss(); }
          });
          mo.observe(app, { childList: true });
        }
      }
      setTimeout(dismiss, 4000); /* belt and braces */
    }
  }

  if (reduce) return;

  /* ---- scroll reveal ---- */
  var MAX = 160;
  var tagged = 0;
  var pending = [];
  var queued = false;

  function sweep() {
    queued = false;
    var vh = window.innerHeight || document.documentElement.clientHeight || 0;
    var keep = [];
    for (var i = 0; i < pending.length; i++) {
      var el = pending[i];
      var b = el.getBoundingClientRect();
      if (b.top < vh * 0.94 && b.bottom > 0) el.setAttribute("data-revealed", "");
      else keep.push(el);
    }
    pending = keep;
  }

  /* setTimeout, not requestAnimationFrame: rAF is throttled to zero in
     background tabs and some embedded frames, which left content invisible. */
  function schedule() {
    if (queued) return;
    queued = true;
    setTimeout(sweep, 16);
  }

  function tag() {
    if (tagged > MAX) return;
    var hosts = document.querySelectorAll(".jojo-container");
    for (var h = 0; h < hosts.length; h++) {
      var kids = hosts[h].children;
      for (var i = 0; i < kids.length; i++) {
        var el = kids[i];
        if (el.hasAttribute("data-reveal")) continue;
        var pos = getComputedStyle(el).position;
        if (pos === "absolute" || pos === "fixed" || pos === "sticky") continue;
        el.setAttribute("data-reveal", "");
        el.style.setProperty("--reveal-delay", (Math.min(i, 5) * 55) + "ms");
        pending.push(el);
        if (++tagged > MAX) break;
      }
    }
    schedule();
  }

  document.documentElement.classList.add("jojo-reveal");
  var root = document.getElementById("root") || document.body;
  new MutationObserver(function () { tag(); }).observe(root, { childList: true, subtree: true });
  addEventListener("scroll", schedule, { passive: true });
  addEventListener("resize", schedule);
  addEventListener("load", function () { tag(); schedule(); });
  tag();
  setTimeout(tag, 0);

  /* failsafe — nothing on screen may stay invisible, whatever went wrong above */
  setTimeout(function () { sweep(); }, 2500);
})();
