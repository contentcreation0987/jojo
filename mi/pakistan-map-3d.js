/* <pakistan-map-3d> — draggable 3D extruded map of Pakistan.

   Geometry is REAL: Natural Earth 110m country borders via world-atlas
   (public domain), projected with d3-geo. Nothing here is hand-drawn.

   The extrusion is a stack of identical SVG silhouettes offset along Z inside a
   preserve-3d container, so the whole thing is DOM + CSS transforms — no WebGL,
   no extra megabyte on a marketing page. Drag to rotate; it idles with a slow
   turn until you touch it.

   Requires d3 and topojson-client (pinned tags in the page head). Loads its
   geometry only when scrolled near, so it costs nothing above the fold. */

const ATLAS = "https://cdn.jsdelivr.net/npm/world-atlas@2.0.2/countries-110m.json";
const PAKISTAN_ID = "586";

/* Real coordinates [lon, lat]. Matches the city list in data.js. */
const CITIES = [
  { name: "Karachi", lon: 67.0011, lat: 24.8607, hub: true },
  { name: "Hyderabad", lon: 68.3737, lat: 25.396 },
  { name: "Sukkur", lon: 68.8574, lat: 27.7052 },
  { name: "Quetta", lon: 67.0099, lat: 30.1798 },
  { name: "Multan", lon: 71.5249, lat: 30.1575 },
  { name: "Faisalabad", lon: 73.0791, lat: 31.4504 },
  { name: "Lahore", lon: 74.3587, lat: 31.5204, hub: true },
  { name: "Islamabad", lon: 73.0479, lat: 33.6844, hub: true },
  { name: "Rawalpindi", lon: 73.0169, lat: 33.5651 },
  { name: "Peshawar", lon: 71.5785, lat: 34.0151 },
];

let atlasPromise = null;
function loadPakistan() {
  if (atlasPromise) return atlasPromise;
  /* Time the fetch out rather than sitting on "Loading…" indefinitely when the
     CDN is blocked or offline. */
  const ctl = typeof AbortController !== "undefined" ? new AbortController() : null;
  const bail = setTimeout(() => ctl && ctl.abort(), 8000);
  atlasPromise = fetch(ATLAS, ctl ? { signal: ctl.signal } : undefined)
    .then((r) => { clearTimeout(bail); if (!r.ok) throw new Error("HTTP " + r.status); return r.json(); })
    .then((topo) => {
      const fc = window.topojson.feature(topo, topo.objects.countries);
      const pk = fc.features.find(
        (d) => String(d.id) === PAKISTAN_ID || (d.properties && d.properties.name === "Pakistan")
      );
      if (!pk) throw new Error("Pakistan not found in atlas");
      return pk;
    });
  return atlasPromise;
}

const LAYERS = 18;
const STEP = 2.1;

class PakistanMap3D extends HTMLElement {
  connectedCallback() {
    if (this._init) return;
    this._init = true;
    this.style.display = "block";
    this.style.position = "relative";

    this._rx = 56;
    this._rz = -16;
    this._idle = true;

    this.innerHTML = `
      <div data-stage style="position:absolute;inset:0;display:grid;place-items:center;overflow:hidden;cursor:grab;touch-action:none">
        <div data-scene style="position:relative;transform-style:preserve-3d;will-change:transform"></div>
      </div>
      <div data-status style="position:absolute;inset:0;display:grid;place-items:center;gap:6px;text-align:center;padding:20px;font:var(--type-meta);color:var(--text-subtle)">
        Loading real border geometry&hellip;
      </div>
      <div data-hint style="position:absolute;left:14px;bottom:12px;display:none;align-items:center;gap:7px;font:var(--type-label);letter-spacing:var(--track-label);text-transform:uppercase;color:var(--text-subtle);pointer-events:none">
        Drag to rotate
      </div>`;

    this._stage = this.querySelector("[data-stage]");
    this._scene = this.querySelector("[data-scene]");
    this._status = this.querySelector("[data-status]");
    this._hint = this.querySelector("[data-hint]");

    /* Lazy-init when the map nears the viewport. Rect math, not IntersectionObserver:
       IO callbacks proved unreliable in embedded/preview contexts and left the
       component permanently uninitialised. A failsafe builds it regardless. */
    let built = false;
    const build = () => {
      if (built) return;
      built = true;
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
      clearTimeout(failsafe);
      this._build();
    };
    const check = () => {
      const b = this.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight || 0;
      if (b.top < vh + 300 && b.bottom > -300) build();
    };
    const failsafe = setTimeout(build, 3000);
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    check();
  }

  async _build() {
    if (!window.d3 || !window.topojson) {
      this._status.textContent = "Map libraries did not load.";
      return;
    }
    let pk;
    try {
      pk = await loadPakistan();
    } catch (err) {
      this._status.textContent = "Could not load border geometry.";
      return;
    }

    const box = this.getBoundingClientRect();
    /* leave headroom: the projected footprint grows as the slab rotates */
    const w = Math.max(200, Math.round(box.width) - 96);
    const h = Math.max(180, Math.round(box.height) - 132);

    const projection = window.d3.geoMercator().fitSize([w, h], pk);
    const path = window.d3.geoPath(projection);
    const d = path(pk);

    const scene = this._scene;
    scene.style.width = w + "px";
    scene.style.height = h + "px";
    scene.innerHTML = "";

    /* extruded body: identical silhouettes stacked along Z, dark at the base */
    for (let i = 0; i < LAYERS; i++) {
      const t = i / (LAYERS - 1);
      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.setAttribute("width", w);
      svg.setAttribute("height", h);
      svg.setAttribute("viewBox", `0 0 ${w} ${h}`);
      svg.style.cssText = `position:absolute;inset:0;transform:translateZ(${(i - LAYERS + 1) * STEP}px);overflow:visible`;
      const p = document.createElementNS("http://www.w3.org/2000/svg", "path");
      p.setAttribute("d", d);
      const isTop = i === LAYERS - 1;
      p.setAttribute("fill", isTop ? "#243A7A" : `rgb(${9 + t * 14},${13 + t * 26},${34 + t * 62})`);
      if (isTop) {
        p.setAttribute("stroke", "#6CBDB4");
        p.setAttribute("stroke-width", "1.2");
      }
      svg.appendChild(p);
      scene.appendChild(svg);
    }

    /* top face: route lines out of Karachi, then city markers */
    const face = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    face.setAttribute("width", w);
    face.setAttribute("height", h);
    face.setAttribute("viewBox", `0 0 ${w} ${h}`);
    face.style.cssText = `position:absolute;inset:0;transform:translateZ(${0.6}px);overflow:visible`;

    const pts = CITIES.map((c) => {
      const xy = projection([c.lon, c.lat]);
      return { ...c, x: xy[0], y: xy[1] };
    });
    const karachi = pts[0];

    pts.slice(1).forEach((c) => {
      const line = document.createElementNS("http://www.w3.org/2000/svg", "path");
      const mx = (karachi.x + c.x) / 2 + (c.y - karachi.y) * 0.1;
      const my = (karachi.y + c.y) / 2 - (c.x - karachi.x) * 0.1;
      line.setAttribute("d", `M${karachi.x},${karachi.y} Q${mx},${my} ${c.x},${c.y}`);
      line.setAttribute("fill", "none");
      line.setAttribute("stroke", "#4E74FF");
      line.setAttribute("stroke-width", "1");
      line.setAttribute("stroke-opacity", "0.45");
      line.setAttribute("stroke-dasharray", "3 4");
      face.appendChild(line);
    });

    pts.forEach((c) => {
      const dot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      dot.setAttribute("cx", c.x);
      dot.setAttribute("cy", c.y);
      dot.setAttribute("r", c.hub ? 4.2 : 2.6);
      dot.setAttribute("fill", c.hub ? "#6CBDB4" : "#9FB2D9");
      face.appendChild(dot);
      if (c.hub) {
        const ring = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        ring.setAttribute("cx", c.x);
        ring.setAttribute("cy", c.y);
        ring.setAttribute("r", 4.2);
        ring.setAttribute("fill", "none");
        ring.setAttribute("stroke", "#6CBDB4");
        ring.setAttribute("stroke-width", "1.1");
        ring.innerHTML = `<animate attributeName="r" values="4.2;13;4.2" dur="2.8s" repeatCount="indefinite"/><animate attributeName="stroke-opacity" values="0.75;0;0.75" dur="2.8s" repeatCount="indefinite"/>`;
        face.appendChild(ring);
      }
    });
    scene.appendChild(face);

    /* city labels ride flat above the slab so they stay readable while rotating */
    const labels = document.createElement("div");
    labels.style.cssText = "position:absolute;inset:0;transform:translateZ(16px);transform-style:preserve-3d;pointer-events:none";
    pts.filter((c) => c.hub).forEach((c) => {
      const el = document.createElement("span");
      el.textContent = c.name;
      el.style.cssText = `position:absolute;left:${c.x}px;top:${c.y}px;transform:translate(-50%,-160%) rotateZ(var(--label-un-z,16deg)) rotateX(var(--label-un-x,-56deg));transform-origin:center;white-space:nowrap;padding:2px 7px;border-radius:var(--radius-pill,999px);background:rgba(8,12,26,0.8);font:var(--type-label);letter-spacing:var(--track-label);color:#E8EEFB`;
      labels.appendChild(el);
    });
    scene.appendChild(labels);
    this._labels = labels;

    this._status.remove();
    this._hint.style.display = "flex";
    this._wire();
    this._apply();
    this._loop();
  }

  _apply() {
    this._stage.style.perspective = "1100px";
    this._scene.style.transform = `rotateX(${this._rx}deg) rotateZ(${this._rz}deg)`;
    if (this._labels) {
      this._labels.style.setProperty("--label-un-z", -this._rz + "deg");
      this._labels.style.setProperty("--label-un-x", -this._rx + "deg");
    }
  }

  _loop() {
    const tick = () => {
      if (this._idle) {
        this._rz -= 0.055;
        this._apply();
      }
      this._raf = requestAnimationFrame(tick);
    };
    this._raf = requestAnimationFrame(tick);
  }

  _wire() {
    const stage = this._stage;
    let dragging = false, lx = 0, ly = 0;

    stage.addEventListener("pointerdown", (e) => {
      dragging = true;
      this._idle = false;
      lx = e.clientX; ly = e.clientY;
      stage.style.cursor = "grabbing";
      stage.setPointerCapture(e.pointerId);
    });
    stage.addEventListener("pointermove", (e) => {
      if (!dragging) return;
      this._rz += (e.clientX - lx) * 0.4;
      this._rx = Math.max(14, Math.min(84, this._rx - (e.clientY - ly) * 0.3));
      lx = e.clientX; ly = e.clientY;
      this._apply();
    });
    const end = () => {
      if (!dragging) return;
      dragging = false;
      stage.style.cursor = "grab";
      clearTimeout(this._idleTimer);
      this._idleTimer = setTimeout(() => { this._idle = true; }, 4000);
    };
    stage.addEventListener("pointerup", end);
    stage.addEventListener("pointercancel", end);
  }

  disconnectedCallback() {
    cancelAnimationFrame(this._raf);
  }
}

/* Guarded: the host re-evaluates page scripts, and a bare define() would throw
   NotSupportedError on the second pass and abort everything below it. */
if (!customElements.get("pakistan-map-3d")) {
  customElements.define("pakistan-map-3d", PakistanMap3D);
}
