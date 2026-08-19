/* @ds-bundle: {"format":4,"namespace":"JOJOInternationalDesignSystem_e58ef5","components":[{"name":"Accordion","sourcePath":"components/content/Accordion.jsx"},{"name":"CarCard","sourcePath":"components/content/CarCard.jsx"},{"name":"CheckList","sourcePath":"components/content/CheckList.jsx"},{"name":"CompanyCard","sourcePath":"components/content/CompanyCard.jsx"},{"name":"SplitSection","sourcePath":"components/content/SplitSection.jsx"},{"name":"StepCard","sourcePath":"components/content/StepCard.jsx"},{"name":"TestimonialCard","sourcePath":"components/content/TestimonialCard.jsx"},{"name":"TimelineStep","sourcePath":"components/content/TimelineStep.jsx"},{"name":"WindowFrame","sourcePath":"components/content/WindowFrame.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"SectionLabel","sourcePath":"components/core/SectionLabel.jsx"},{"name":"MetaTable","sourcePath":"components/data/MetaTable.jsx"},{"name":"StatBadge","sourcePath":"components/data/StatBadge.jsx"},{"name":"StatBar","sourcePath":"components/data/StatBar.jsx"},{"name":"StatCounter","sourcePath":"components/data/StatCounter.jsx"},{"name":"TrustRow","sourcePath":"components/data/TrustRow.jsx"},{"name":"CarFinder","sourcePath":"components/forms/CarFinder.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"LeadForm","sourcePath":"components/forms/LeadForm.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"InfoStrip","sourcePath":"components/navigation/InfoStrip.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"}],"sourceHashes":{"components/content/Accordion.jsx":"b222a7f074f7","components/content/CarCard.jsx":"158c75e21bf2","components/content/CheckList.jsx":"2d9ee5f0f8c6","components/content/CompanyCard.jsx":"1f6a0744eb4b","components/content/SplitSection.jsx":"91ca865836a4","components/content/StepCard.jsx":"0616791bae94","components/content/TestimonialCard.jsx":"2accf6c8dc32","components/content/TimelineStep.jsx":"e5a36dfad6b2","components/content/WindowFrame.jsx":"9ebc7c75119e","components/core/Badge.jsx":"6f3a79e286ba","components/core/Button.jsx":"96be760c1906","components/core/Icon.jsx":"d2d26ec745f5","components/core/IconButton.jsx":"debfb65d6e59","components/core/SectionLabel.jsx":"4ccca5dd2ac9","components/data/MetaTable.jsx":"822ca9e450ed","components/data/StatBadge.jsx":"b7992aef0406","components/data/StatBar.jsx":"45a22ed494d3","components/data/StatCounter.jsx":"f9df195f01d1","components/data/TrustRow.jsx":"d7e5f99dfa82","components/forms/CarFinder.jsx":"27e2fde5f5fe","components/forms/Input.jsx":"ae948daf7f72","components/forms/LeadForm.jsx":"19deda752fee","components/forms/Select.jsx":"bc4c9b88575b","components/navigation/InfoStrip.jsx":"6221afcce9f7","components/navigation/NavBar.jsx":"23822731cfd5","site/app/about.jsx":"305a74f0d1ac","site/app/contact.jsx":"c1c70b65137a","site/app/data.js":"23340f987717","site/app/featured-cars.jsx":"826c5b14ae25","site/app/footer.jsx":"37b6afc4926e","site/app/home.jsx":"d5aeded608b2","site/app/how-it-works.jsx":"d2335841bb49","site/app/shell.jsx":"a715182c4721","site/mi/coverage.jsx":"5c844739c0ff","site/mi/data.js":"c20392c4db2d","site/mi/pakistan-map-3d.js":"8cdc847dd9ae","site/mi/quote-form.jsx":"4157ff067a72","site/mi/quote-tool.jsx":"72afbe10b15f","site/motion.js":"762345198d3a","ui_kits/mi-logistics/Coverage.jsx":"5c844739c0ff","ui_kits/mi-logistics/QuoteForm.jsx":"4157ff067a72","ui_kits/mi-logistics/QuoteTool.jsx":"3fbb89c2e439","ui_kits/mi-logistics/data.js":"c20392c4db2d","ui_kits/mi-logistics/pakistan-map-3d.js":"8cdc847dd9ae","ui_kits/shared/motion.js":"762345198d3a","ui_kits/website/About.jsx":"305a74f0d1ac","ui_kits/website/Contact.jsx":"c1c70b65137a","ui_kits/website/FeaturedCars.jsx":"826c5b14ae25","ui_kits/website/Footer.jsx":"d2a50d829531","ui_kits/website/Home.jsx":"cc1f06cc607e","ui_kits/website/HowItWorks.jsx":"d2335841bb49","ui_kits/website/Shell.jsx":"d7a985dcd5c3","ui_kits/website/data.js":"23340f987717"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.JOJOInternationalDesignSystem_e58ef5 = window.JOJOInternationalDesignSystem_e58ef5 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/WindowFrame.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Mini window frame with its own title-bar strip. Gives technical content an
 * "engineered and organised" feel — the brief's device for process/spec blocks.
 */
function WindowFrame({
  title,
  meta,
  children,
  tone = "card",
  padded = true,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: tone === "inset" ? "var(--surface-inset)" : "var(--surface-card)",
      border: "1px solid var(--border-hairline)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-card)",
      overflow: "hidden",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-3)",
      height: 40,
      padding: "0 var(--space-4)",
      background: "var(--surface-page-alt)",
      borderBottom: "1px solid var(--border-hairline)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      gap: 5,
      flex: "0 0 auto"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: "50%",
      background: "var(--border-strong)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: "50%",
      background: "var(--border-soft)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: "50%",
      background: "var(--border-soft)"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-meta)",
      letterSpacing: "var(--track-meta)",
      textTransform: "uppercase",
      color: "var(--text-subtle)"
    }
  }, title), meta ? /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: "auto",
      font: "var(--type-meta)",
      color: "var(--text-subtle)"
    }
  }, meta) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: padded ? "var(--card-pad)" : 0
    }
  }, children));
}
Object.assign(__ds_scope, { WindowFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/WindowFrame.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const LUCIDE_URL = "https://unpkg.com/lucide@0.544.0/dist/umd/lucide.js";

/* One shared loader so a page with 40 icons fetches Lucide once. */
let lucidePromise = null;
function loadLucide() {
  if (typeof window === "undefined") return Promise.resolve(null);
  if (window.lucide) return Promise.resolve(window.lucide);
  if (lucidePromise) return lucidePromise;
  lucidePromise = new Promise(resolve => {
    const existing = document.querySelector('script[data-lucide-loader]');
    if (existing) {
      existing.addEventListener("load", () => resolve(window.lucide || null));
      return;
    }
    const s = document.createElement("script");
    s.src = LUCIDE_URL;
    s.async = true;
    s.setAttribute("data-lucide-loader", "");
    s.onload = () => resolve(window.lucide || null);
    s.onerror = () => resolve(null);
    document.head.appendChild(s);
  });
  return lucidePromise;
}
function toPascal(name) {
  return String(name).split(/[-_\s]+/).filter(Boolean).map(p => p.charAt(0).toUpperCase() + p.slice(1)).join("");
}

/**
 * Line icon. Wraps Lucide so stroke weight, box size and colour behaviour
 * are defined in exactly one place across the brand.
 */
function Icon({
  name,
  size = 24,
  strokeWidth = 1.75,
  color = "currentColor",
  label,
  style,
  ...rest
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    let cancelled = false;
    loadLucide().then(lucide => {
      const host = ref.current;
      if (cancelled || !host) return;
      host.innerHTML = "";
      const node = lucide && lucide.icons && lucide.icons[toPascal(name)];
      if (!node || !lucide.createElement) return;
      const svg = lucide.createElement(node);
      svg.setAttribute("width", size);
      svg.setAttribute("height", size);
      svg.setAttribute("stroke-width", strokeWidth);
      svg.setAttribute("aria-hidden", "true");
      svg.style.display = "block";
      host.appendChild(svg);
    });
    return () => {
      cancelled = true;
    };
  }, [name, size, strokeWidth]);
  return /*#__PURE__*/React.createElement("span", _extends({
    ref: ref,
    role: label ? "img" : undefined,
    "aria-label": label || undefined,
    "aria-hidden": label ? undefined : "true",
    style: {
      display: "inline-flex",
      flex: "0 0 auto",
      width: size,
      height: size,
      color,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/content/Accordion.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** FAQ accordion. Height + opacity, 520ms — no bounce. */
function Accordion({
  items = [],
  defaultOpen = 0,
  allowMultiple = false,
  style,
  ...rest
}) {
  const [open, setOpen] = React.useState(defaultOpen === null ? [] : [defaultOpen]);
  const toggle = i => setOpen(cur => {
    const isOpen = cur.includes(i);
    if (allowMultiple) return isOpen ? cur.filter(x => x !== i) : cur.concat(i);
    return isOpen ? [] : [i];
  });
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "grid",
      gap: "var(--space-3)",
      ...style
    }
  }, rest), items.map((item, i) => {
    const isOpen = open.includes(i);
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        background: "var(--surface-card)",
        border: "1px solid " + (isOpen ? "var(--border-soft)" : "var(--border-hairline)"),
        borderRadius: "var(--radius-lg)",
        overflow: "hidden",
        transition: "border-color var(--dur-fast) var(--ease-out)"
      }
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: () => toggle(i),
      "aria-expanded": isOpen,
      style: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "var(--space-4)",
        padding: "var(--space-5) var(--card-pad)",
        background: "none",
        border: 0,
        cursor: "pointer",
        textAlign: "left",
        font: "var(--type-h4)",
        fontSize: 17,
        letterSpacing: "var(--track-h4)",
        color: isOpen ? "var(--text-strong)" : "var(--text-body)",
        minHeight: "var(--tap-min)"
      }
    }, /*#__PURE__*/React.createElement("span", null, item.question), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "grid",
        placeItems: "center",
        flex: "0 0 auto",
        transform: isOpen ? "rotate(180deg)" : "none",
        transition: "transform var(--dur-base) var(--ease-out)"
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "chevron-down",
      size: 20,
      color: isOpen ? "var(--blue-300)" : "var(--text-subtle)"
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateRows: isOpen ? "1fr" : "0fr",
        opacity: isOpen ? 1 : 0,
        transition: "grid-template-rows var(--dur-slow) var(--ease-in-out), opacity var(--dur-base) var(--ease-in-out)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "0 var(--card-pad) var(--space-5)",
        font: "var(--type-body)",
        color: "var(--text-muted)",
        maxWidth: "68ch"
      }
    }, item.answer))));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/content/CheckList.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Tick list for split sections and trust pillars. */
function CheckList({
  items = [],
  columns = 1,
  icon = "check",
  tone = "accent",
  style,
  ...rest
}) {
  const color = tone === "accent" ? "var(--blue-300)" : tone === "success" ? "var(--status-success)" : "var(--text-muted)";
  return /*#__PURE__*/React.createElement("ul", _extends({
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      display: "grid",
      gridTemplateColumns: "repeat(" + columns + ", minmax(0, 1fr))",
      gap: "var(--space-3) var(--space-6)",
      ...style
    }
  }, rest), items.map((item, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "grid",
      placeItems: "center",
      width: 22,
      height: 22,
      marginTop: 2,
      borderRadius: "var(--radius-pill)",
      background: "var(--blue-tint-08)",
      border: "1px solid var(--blue-tint-24)",
      flex: "0 0 auto"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 13,
    color: color
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body)",
      color: "var(--text-body)"
    }
  }, item))));
}
Object.assign(__ds_scope, { CheckList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/CheckList.jsx", error: String((e && e.message) || e) }); }

// components/content/CompanyCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Group-company card — MI Logistics, JOJO Techzone. */
function CompanyCard({
  logo,
  logoHeight = 44,
  name,
  tagline,
  children,
  linkLabel,
  href,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const Tag = href || onClick ? "a" : "div";
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "grid",
      gap: "var(--space-5)",
      alignContent: "start",
      padding: "var(--card-pad-lg)",
      background: hover ? "var(--surface-card-hover)" : "var(--surface-card)",
      border: "1px solid " + (hover ? "var(--border-soft)" : "var(--border-hairline)"),
      borderRadius: "var(--radius-lg)",
      boxShadow: hover ? "var(--shadow-card-hover)" : "var(--shadow-card)",
      transform: hover ? "translateY(var(--hover-lift))" : "none",
      transition: "background var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out)",
      textDecoration: "none",
      color: "inherit",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      height: logoHeight,
      display: "flex",
      alignItems: "center"
    }
  }, logo ? /*#__PURE__*/React.createElement("img", {
    src: logo,
    alt: name,
    style: {
      height: logoHeight,
      width: "auto"
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-h4)",
      letterSpacing: "var(--track-h4)",
      color: "var(--text-strong)"
    }
  }, name)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-2)"
    }
  }, tagline ? /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-label)",
      letterSpacing: "var(--track-label)",
      textTransform: "uppercase",
      color: "var(--text-subtle)"
    }
  }, tagline) : null, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: "var(--type-sm)",
      color: "var(--text-muted)",
      lineHeight: 1.65
    }
  }, children)), linkLabel ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      font: "var(--type-sm)",
      fontWeight: "var(--weight-semibold)",
      color: hover ? "var(--blue-200)" : "var(--blue-300)"
    }
  }, linkLabel, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-right",
    size: 16
  })) : null);
}
Object.assign(__ds_scope, { CompanyCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/CompanyCard.jsx", error: String((e && e.message) || e) }); }

// components/content/StepCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** One of the four How-It-Works cards. Icon tile, step number, title, 2–3 lines. */
function StepCard({
  index,
  icon,
  title,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "grid",
      gap: "var(--space-4)",
      alignContent: "start",
      padding: "var(--card-pad)",
      background: hover ? "var(--surface-card-hover)" : "var(--surface-card)",
      border: "1px solid " + (hover ? "var(--border-soft)" : "var(--border-hairline)"),
      borderRadius: "var(--radius-lg)",
      boxShadow: hover ? "var(--shadow-card-hover)" : "var(--shadow-card)",
      transform: hover ? "translateY(var(--hover-lift))" : "none",
      transition: "background var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "grid",
      placeItems: "center",
      width: 44,
      height: 44,
      borderRadius: "var(--radius-md)",
      background: "var(--blue-tint-08)",
      border: "1px solid var(--blue-tint-24)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 22,
    color: "var(--blue-300)"
  })), index ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-label)",
      letterSpacing: "var(--track-label)",
      color: "var(--text-subtle)"
    }
  }, index) : null), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      font: "var(--type-h4)",
      letterSpacing: "var(--track-h4)",
      color: "var(--text-strong)"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: "var(--type-sm)",
      color: "var(--text-muted)",
      lineHeight: 1.65
    }
  }, children));
}
Object.assign(__ds_scope, { StepCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/StepCard.jsx", error: String((e && e.message) || e) }); }

// components/content/TimelineStep.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** One step of the vertical How-It-Works timeline. */
function TimelineStep({
  index,
  icon,
  title,
  children,
  aside,
  last = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "grid",
      gridTemplateColumns: "72px 1fr",
      gap: "var(--space-6)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      justifyItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "grid",
      placeItems: "center",
      width: 56,
      height: 56,
      borderRadius: "var(--radius-pill)",
      background: "var(--surface-card)",
      border: "1px solid var(--blue-tint-24)",
      boxShadow: "var(--shadow-card)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 24,
    color: "var(--blue-300)"
  })), !last ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 1,
      flex: 1,
      minHeight: 48,
      height: "100%",
      background: "linear-gradient(180deg, var(--border-soft), transparent)"
    }
  }) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: last ? 0 : "var(--space-12)",
      display: "grid",
      gap: "var(--space-3)",
      alignContent: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-label)",
      letterSpacing: "var(--track-label)",
      textTransform: "uppercase",
      color: "var(--text-subtle)"
    }
  }, "Step ", index), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      font: "var(--type-h3)",
      letterSpacing: "var(--track-h3)",
      color: "var(--text-strong)"
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-body)",
      color: "var(--text-body)",
      maxWidth: "58ch"
    }
  }, children), aside ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 4,
      padding: "12px 16px",
      background: "var(--surface-inset)",
      border: "1px solid var(--border-hairline)",
      borderRadius: "var(--radius-sm)",
      font: "var(--type-meta)",
      color: "var(--text-muted)",
      lineHeight: 1.7
    }
  }, aside) : null));
}
Object.assign(__ds_scope, { TimelineStep });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/TimelineStep.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Small pill tag. The "gradient" tone is the logo gradient and is the brand's
 * scarcest ink — one visible gradient element per viewport.
 */
function Badge({
  children,
  tone = "outline",
  size = "md",
  icon,
  style,
  ...rest
}) {
  const dims = size === "sm" ? {
    height: 22,
    padX: 9,
    font: 10.5,
    icon: 12
  } : {
    height: 28,
    padX: 12,
    font: "var(--size-xs)",
    icon: 14
  };
  const tones = {
    outline: {
      background: "transparent",
      border: "1px solid var(--border-strong)",
      color: "var(--text-body)"
    },
    soft: {
      background: "var(--blue-tint-14)",
      border: "1px solid var(--blue-tint-24)",
      color: "var(--blue-200)"
    },
    solid: {
      background: "var(--action-primary)",
      border: "1px solid transparent",
      color: "var(--white)"
    },
    gradient: {
      background: "var(--gradient-warm)",
      border: "1px solid transparent",
      color: "var(--text-on-accent)"
    },
    muted: {
      background: "var(--surface-inset)",
      border: "1px solid var(--border-hairline)",
      color: "var(--text-subtle)"
    },
    success: {
      background: "rgba(63,191,143,0.14)",
      border: "1px solid rgba(63,191,143,0.4)",
      color: "var(--status-success)"
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      height: dims.height,
      padding: "0 " + dims.padX + "px",
      borderRadius: "var(--radius-pill)",
      fontFamily: "var(--font-body)",
      fontSize: dims.font,
      fontWeight: "var(--weight-semibold)",
      lineHeight: 1,
      whiteSpace: "nowrap",
      ...(tones[tone] || tones.outline),
      ...style
    }
  }, rest), icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: dims.icon
  }) : null, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/content/TestimonialCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Client quote card. Country and car model carry more weight than a name. */
function TestimonialCard({
  quote,
  name,
  country,
  car,
  sample = false,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("figure", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      margin: 0,
      display: "grid",
      gap: "var(--space-5)",
      alignContent: "space-between",
      padding: "var(--card-pad)",
      background: hover ? "var(--surface-card-hover)" : "var(--surface-card)",
      border: "1px solid " + (hover ? "var(--border-soft)" : "var(--border-hairline)"),
      borderRadius: "var(--radius-lg)",
      boxShadow: hover ? "var(--shadow-card-hover)" : "var(--shadow-card)",
      transition: "background var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      font: "var(--weight-black) 40px / 0.6 var(--font-display)",
      color: "var(--border-strong)"
    }
  }, "\u201C"), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      font: "var(--type-body)",
      color: "var(--text-body)",
      textWrap: "pretty"
    }
  }, quote)), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      display: "grid",
      gap: 8,
      paddingTop: "var(--space-4)",
      borderTop: "1px solid var(--border-hairline)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-sm)",
      fontWeight: "var(--weight-semibold)",
      color: "var(--text-strong)"
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      flexWrap: "wrap",
      font: "var(--type-meta)",
      color: "var(--text-subtle)"
    }
  }, country ? /*#__PURE__*/React.createElement("span", null, country) : null, country && car ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "\xB7") : null, car ? /*#__PURE__*/React.createElement("span", null, car) : null), sample ? /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "muted",
    size: "sm"
  }, "Sample copy \u2014 replace before launch") : null));
}
Object.assign(__ds_scope, { TestimonialCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/TestimonialCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    height: "var(--control-h-sm)",
    padX: 18,
    font: "var(--size-xs)",
    icon: 16
  },
  md: {
    height: "var(--control-h)",
    padX: 24,
    font: "var(--size-sm)",
    icon: 18
  },
  lg: {
    height: 54,
    padX: 30,
    font: "var(--size-body)",
    icon: 20
  }
};
function surface(variant, state) {
  if (variant === "primary") {
    return {
      background: state === "press" ? "var(--action-primary-press)" : state === "hover" ? "var(--action-primary-hover)" : "var(--action-primary)",
      color: "var(--action-primary-text)",
      border: "1px solid transparent",
      boxShadow: state === "hover" ? "var(--shadow-accent-glow)" : state === "press" ? "var(--shadow-press)" : "none"
    };
  }
  if (variant === "ghost") {
    return {
      background: state === "hover" ? "var(--blue-tint-08)" : "transparent",
      color: state === "idle" ? "var(--text-muted)" : "var(--text-strong)",
      border: "1px solid transparent",
      boxShadow: "none"
    };
  }
  return {
    background: state === "press" ? "var(--blue-tint-14)" : state === "hover" ? "var(--action-outline-hover-bg)" : "transparent",
    color: "var(--text-strong)",
    border: "1px solid " + (state === "idle" ? "var(--action-outline-border)" : "var(--action-outline-hover-border)"),
    boxShadow: "none"
  };
}

/**
 * The brand's pill button. Primary and outline are designed to sit side by side —
 * that pairing is the JOJO CTA pattern and appears in every hero and section footer.
 */
function Button({
  children,
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "left",
  href,
  target,
  onClick,
  disabled = false,
  fullWidth = false,
  type = "button",
  style,
  ...rest
}) {
  const [state, setState] = React.useState("idle");
  const s = SIZES[size] || SIZES.md;
  const skin = surface(variant, disabled ? "idle" : state);
  const styles = {
    display: fullWidth ? "flex" : "inline-flex",
    width: fullWidth ? "100%" : undefined,
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    height: s.height,
    minHeight: "var(--tap-min)",
    padding: "0 " + s.padX + "px",
    borderRadius: "var(--radius-pill)",
    fontFamily: "var(--font-body)",
    fontSize: s.font,
    fontWeight: "var(--weight-semibold)",
    letterSpacing: "-0.002em",
    lineHeight: 1,
    textDecoration: "none",
    whiteSpace: "nowrap",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.4 : 1,
    transform: !disabled && state === "press" ? "scale(var(--press-scale))" : "none",
    transition: "background var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out), transform var(--dur-base) var(--ease-out)",
    ...skin,
    ...style
  };
  const handlers = disabled ? {} : {
    onMouseEnter: () => setState("hover"),
    onMouseLeave: () => setState("idle"),
    onMouseDown: () => setState("press"),
    onMouseUp: () => setState("hover"),
    onFocus: () => setState("hover"),
    onBlur: () => setState("idle"),
    onClick
  };
  const glyph = icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: s.icon
  }) : null;
  const content = /*#__PURE__*/React.createElement(React.Fragment, null, iconPosition === "left" ? glyph : null, /*#__PURE__*/React.createElement("span", null, children), iconPosition === "right" ? glyph : null);
  if (href && !disabled) {
    return /*#__PURE__*/React.createElement("a", _extends({
      href: href,
      target: target,
      rel: target === "_blank" ? "noopener noreferrer" : undefined,
      style: styles
    }, handlers, rest), content);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    style: styles
  }, handlers, rest), content);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/content/CarCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Featured-car card. Photo, model, year/spec tags, indicative price, one CTA that
 * opens WhatsApp. All cards in a grid share height and padding by design.
 */
function CarCard({
  image,
  model,
  year,
  priceRange,
  tags = [],
  note,
  refNo,
  specs,
  listingHref,
  fit = "contain",
  ctaLabel = "Ask about this car",
  whatsappNumber = "923000000000",
  onAsk,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const message = "Hi JOJO International, I'm interested in the " + [year, model].filter(Boolean).join(" ") + (refNo ? " (BeForward ref " + refNo + ")" : "") + ". Is it still available?";
  const href = "https://wa.me/" + whatsappNumber + "?text=" + encodeURIComponent(message);
  return /*#__PURE__*/React.createElement("article", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "flex",
      flexDirection: "column",
      background: hover ? "var(--surface-card-hover)" : "var(--surface-card)",
      border: "1px solid " + (hover ? "var(--border-soft)" : "var(--border-hairline)"),
      borderRadius: "var(--radius-lg)",
      boxShadow: hover ? "var(--shadow-card-hover)" : "var(--shadow-card)",
      transform: hover ? "translateY(var(--hover-lift))" : "none",
      transition: "background var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out)",
      overflow: "hidden",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 168,
      background: "var(--surface-inset)",
      display: "grid",
      gridTemplateRows: "minmax(0, 1fr)",
      placeItems: "center",
      padding: fit === "cover" ? 0 : "var(--space-4)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--scrim-grade)",
      zIndex: 1,
      pointerEvents: "none"
    }
  }), image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: [year, model].filter(Boolean).join(" "),
    style: {
      width: "100%",
      height: "100%",
      objectFit: fit,
      position: "relative"
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-meta)",
      color: "var(--text-subtle)",
      position: "relative"
    }
  }, "Car photo"), refNo ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 12,
      top: 12,
      zIndex: 2,
      padding: "4px 9px",
      borderRadius: "var(--radius-pill)",
      background: "rgba(8,12,26,0.78)",
      backdropFilter: "blur(6px)",
      font: "var(--type-label)",
      letterSpacing: "var(--track-label)",
      color: "var(--text-muted)"
    }
  }, "Ref ", refNo) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--card-pad)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)",
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 8,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      font: "var(--type-h4)",
      letterSpacing: "var(--track-h4)",
      color: "var(--text-strong)"
    }
  }, model), year ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-meta)",
      color: "var(--text-subtle)"
    }
  }, year) : null), tags.length ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 6
    }
  }, tags.map((t, i) => /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    key: i,
    tone: "soft",
    size: "sm"
  }, t))) : null, specs && specs.length ? /*#__PURE__*/React.createElement("dl", {
    style: {
      margin: "2px 0 0",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "8px 12px"
    }
  }, specs.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "grid",
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("dt", {
    style: {
      font: "var(--type-label)",
      letterSpacing: "var(--track-label)",
      textTransform: "uppercase",
      color: "var(--text-subtle)"
    }
  }, s.key), /*#__PURE__*/React.createElement("dd", {
    style: {
      margin: 0,
      font: "var(--type-sm)",
      color: "var(--text-body)"
    }
  }, s.value)))) : null, priceRange ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 2,
      marginTop: 2,
      paddingTop: "var(--space-3)",
      borderTop: "1px solid var(--border-hairline)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-label)",
      letterSpacing: "var(--track-label)",
      textTransform: "uppercase",
      color: "var(--text-subtle)"
    }
  }, "BeForward FOB"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--weight-bold) var(--size-h4) / 1.2 var(--font-display)",
      letterSpacing: "var(--track-h4)",
      color: "var(--text-body)"
    }
  }, priceRange)) : null, note ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: "var(--type-meta)",
      color: "var(--text-subtle)",
      lineHeight: 1.6
    }
  }, note) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      paddingTop: "var(--space-3)",
      display: "grid",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    icon: "message-circle",
    href: href,
    target: "_blank",
    fullWidth: true,
    onClick: onAsk
  }, ctaLabel), listingHref ? /*#__PURE__*/React.createElement("a", {
    href: listingHref,
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      font: "var(--type-meta)",
      color: "var(--text-subtle)",
      textDecoration: "none",
      textAlign: "center"
    }
  }, "View on BeForward \u2192") : null)));
}
Object.assign(__ds_scope, { CarCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/CarCard.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: 38,
  md: 44,
  lg: 52
};

/**
 * Square-ish icon-only pill. The nav's permanent WhatsApp affordance and the
 * mobile menu toggle both use this.
 */
function IconButton({
  icon,
  label,
  variant = "primary",
  size = "md",
  href,
  target,
  onClick,
  iconColor,
  disabled = false,
  style,
  ...rest
}) {
  const [state, setState] = React.useState("idle");
  const box = SIZES[size] || SIZES.md;
  const skins = {
    primary: {
      background: state === "press" ? "var(--action-primary-press)" : state === "hover" ? "var(--action-primary-hover)" : "var(--action-primary)",
      border: "1px solid transparent",
      color: "var(--white)",
      boxShadow: state === "hover" ? "var(--shadow-accent-glow)" : "none"
    },
    outline: {
      background: state === "idle" ? "transparent" : "var(--action-outline-hover-bg)",
      border: "1px solid " + (state === "idle" ? "var(--action-outline-border)" : "var(--action-outline-hover-border)"),
      color: "var(--text-strong)",
      boxShadow: "none"
    },
    glass: {
      background: state === "idle" ? "var(--surface-glass)" : "var(--surface-raised)",
      border: "1px solid var(--border-hairline)",
      color: "var(--text-strong)",
      backdropFilter: "blur(var(--blur-glass))",
      boxShadow: "none"
    },
    bare: {
      background: state === "hover" ? "var(--blue-tint-08)" : "transparent",
      border: "1px solid transparent",
      color: state === "idle" ? "var(--text-muted)" : "var(--text-strong)",
      boxShadow: "none"
    }
  };
  const styles = {
    display: "inline-grid",
    placeItems: "center",
    width: box,
    height: box,
    borderRadius: "var(--radius-pill)",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.4 : 1,
    transform: !disabled && state === "press" ? "scale(var(--press-scale))" : "none",
    transition: "background var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out), transform var(--dur-base) var(--ease-out)",
    ...(skins[variant] || skins.primary),
    ...style
  };
  const handlers = disabled ? {} : {
    onMouseEnter: () => setState("hover"),
    onMouseLeave: () => setState("idle"),
    onMouseDown: () => setState("press"),
    onMouseUp: () => setState("hover"),
    onClick
  };
  const glyph = /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: Math.round(box * 0.45),
    color: iconColor
  });
  if (href && !disabled) {
    return /*#__PURE__*/React.createElement("a", _extends({
      href: href,
      target: target,
      rel: target === "_blank" ? "noopener noreferrer" : undefined,
      "aria-label": label,
      title: label,
      style: styles
    }, handlers, rest), glyph);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    disabled: disabled,
    style: styles
  }, handlers, rest), glyph);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionLabel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Monospace bracket label — ">> HOW IT WORKS". The only all-caps display text
 * in the system, and the device that gives JOJO sections their engineered feel.
 */
function SectionLabel({
  children,
  tone = "accent",
  rule = false,
  index,
  style,
  ...rest
}) {
  const colors = {
    accent: "var(--blue-300)",
    muted: "var(--text-subtle)",
    strong: "var(--text-body)"
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "grid",
      gap: 10,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-label)",
      letterSpacing: "var(--track-label)",
      textTransform: "uppercase",
      color: colors[tone] || colors.accent,
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--border-strong)"
    }
  }, ">>"), index ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-subtle)"
    }
  }, index) : null, /*#__PURE__*/React.createElement("span", null, children)), rule ? /*#__PURE__*/React.createElement("div", {
    style: {
      height: 2,
      background: "var(--gradient-hairline)"
    }
  }) : null);
}
Object.assign(__ds_scope, { SectionLabel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionLabel.jsx", error: String((e && e.message) || e) }); }

// components/content/SplitSection.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * The brand's workhorse section: media one side, copy the other, alternating
 * side down the page. Optional 72px diagonal corner cut on the media.
 */
function SplitSection({
  label,
  title,
  children,
  media,
  mediaSrc,
  mediaAlt = "",
  mediaCaption,
  reverse = false,
  diagonal = false,
  mediaHeight = 420,
  background = "var(--surface-page)",
  actions,
  aside,
  style,
  ...rest
}) {
  const mediaBlock = /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      height: mediaHeight,
      background: "var(--surface-card)",
      border: diagonal ? "none" : "1px solid var(--border-hairline)",
      borderRadius: diagonal ? 0 : "var(--radius-xl)",
      clipPath: diagonal ? reverse ? "var(--clip-diagonal-bl)" : "var(--clip-diagonal-tr)" : undefined
    }
  }, media ? media : mediaSrc ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("img", {
    src: mediaSrc,
    alt: mediaAlt,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--scrim-grade)"
    }
  })) : /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 16,
      display: "grid",
      placeItems: "center",
      gap: 6,
      border: "1.5px dashed var(--border-soft)",
      borderRadius: "var(--radius-lg)",
      background: "var(--surface-inset)",
      textAlign: "center",
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-label)",
      letterSpacing: "var(--track-label)",
      textTransform: "uppercase",
      color: "var(--text-subtle)"
    }
  }, "Photo needed"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-meta)",
      color: "var(--text-subtle)",
      maxWidth: "34ch",
      lineHeight: 1.7
    }
  }, mediaAlt || "Real photograph required — no stock substitute."))), mediaCaption ? /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-meta)",
      color: "var(--text-subtle)"
    }
  }, mediaCaption) : null);
  const copyBlock = /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-5)",
      alignContent: "center"
    }
  }, label ? /*#__PURE__*/React.createElement(__ds_scope.SectionLabel, null, label) : null, title ? /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      font: "var(--type-h2)",
      letterSpacing: "var(--track-h2)",
      color: "var(--text-strong)"
    }
  }, title) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-body-lg)",
      color: "var(--text-body)",
      maxWidth: "52ch",
      display: "grid",
      gap: "var(--space-4)"
    }
  }, children), aside, actions ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "var(--inline-gap)",
      marginTop: 4
    }
  }, actions) : null);
  return /*#__PURE__*/React.createElement("section", _extends({
    style: {
      background,
      padding: "var(--section-y) 0",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      maxWidth: "var(--container)",
      margin: "0 auto",
      padding: "0 var(--gutter)",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-16)",
      alignItems: "center"
    }
  }, reverse ? /*#__PURE__*/React.createElement(React.Fragment, null, copyBlock, mediaBlock) : /*#__PURE__*/React.createElement(React.Fragment, null, mediaBlock, copyBlock)));
}
Object.assign(__ds_scope, { SplitSection });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/SplitSection.jsx", error: String((e && e.message) || e) }); }

// components/data/MetaTable.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Small mono meta table — "Since / Based in / Trade". Borrowed from the brief's
 * "Client / Services / Year" reference note.
 */
function MetaTable({
  rows = [],
  layout = "rows",
  style,
  ...rest
}) {
  if (layout === "inline") {
    return /*#__PURE__*/React.createElement("div", _extends({
      style: {
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        gap: "var(--space-6)",
        ...style
      }
    }, rest), rows.map((r, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: "grid",
        gap: 5
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: "var(--type-label)",
        letterSpacing: "var(--track-label)",
        textTransform: "uppercase",
        color: "var(--text-subtle)"
      }
    }, r.key), /*#__PURE__*/React.createElement("span", {
      style: {
        font: "var(--type-sm)",
        color: "var(--text-body)"
      }
    }, r.value))));
  }
  return /*#__PURE__*/React.createElement("dl", _extends({
    style: {
      margin: 0,
      display: "grid",
      gap: 0,
      ...style
    }
  }, rest), rows.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "grid",
      gridTemplateColumns: "140px 1fr",
      gap: "var(--space-4)",
      padding: "12px 0",
      borderTop: i === 0 ? "1px solid var(--border-hairline)" : "none",
      borderBottom: "1px solid var(--border-hairline)"
    }
  }, /*#__PURE__*/React.createElement("dt", {
    style: {
      font: "var(--type-label)",
      letterSpacing: "var(--track-label)",
      textTransform: "uppercase",
      color: "var(--text-subtle)",
      alignSelf: "center"
    }
  }, r.key), /*#__PURE__*/React.createElement("dd", {
    style: {
      margin: 0,
      font: "var(--type-sm)",
      color: "var(--text-body)"
    }
  }, r.value))));
}
Object.assign(__ds_scope, { MetaTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/MetaTable.jsx", error: String((e && e.message) || e) }); }

// components/data/StatBadge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Floating stat badge that overlaps a hero photo's corner. Borrowed device from
 * the brief — a small card whose whole job is to make one number loud.
 */
function StatBadge({
  value,
  label,
  sublabel,
  icon,
  gradient = true,
  align = "left",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "inline-grid",
      gap: 6,
      minWidth: 172,
      padding: "18px 22px",
      background: "var(--surface-glass)",
      backdropFilter: "blur(var(--blur-glass))",
      border: "1px solid var(--border-soft)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-badge)",
      textAlign: align,
      ...style
    }
  }, rest), icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 18,
    color: "var(--blue-300)",
    style: {
      marginBottom: 2
    }
  }) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--weight-black) var(--size-stat-sm) / 1 var(--font-display)",
      letterSpacing: "var(--track-stat)",
      fontStretch: "82%",
      ...(gradient ? {
        background: "var(--gradient-brand)",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        color: "transparent"
      } : {
        color: "var(--text-strong)"
      })
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-label)",
      letterSpacing: "var(--track-label)",
      textTransform: "uppercase",
      color: "var(--text-body)"
    }
  }, label), sublabel ? /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-meta)",
      color: "var(--text-subtle)"
    }
  }, sublabel) : null);
}
Object.assign(__ds_scope, { StatBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/StatBadge.jsx", error: String((e && e.message) || e) }); }

// components/data/StatCounter.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function useCountUp(target, duration, active) {
  const [n, setN] = React.useState(0);
  React.useEffect(() => {
    if (!active) return;
    const ms = parseInt(duration, 10) || 1600;
    if (ms === 0) {
      setN(target);
      return;
    }
    const start = Date.now();
    const id = setInterval(() => {
      const p = Math.min(1, (Date.now() - start) / ms);
      setN(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p >= 1) clearInterval(id);
    }, 32);
    return () => clearInterval(id);
  }, [target, duration, active]);
  return n;
}

/** A single trust statistic. Counts up once, on first view. */
function StatCounter({
  value,
  prefix = "",
  suffix = "",
  label,
  size = "md",
  gradient = false,
  animate = true,
  style,
  ...rest
}) {
  const ref = React.useRef(null);
  const [seen, setSeen] = React.useState(!animate);
  React.useEffect(() => {
    if (seen) return;
    const el = ref.current;
    if (!el) { setSeen(true); return; }
    const cleanup = () => {
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
      clearTimeout(failsafe);
    };
    function check() {
      const b = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight || 0;
      if (b.top < vh * 0.92 && b.bottom > 0) { cleanup(); setSeen(true); }
    }
    const failsafe = setTimeout(() => { cleanup(); setSeen(true); }, 2500);
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    check();
    return cleanup;
  }, [seen]);
  const numeric = typeof value === "number";
  const counted = useCountUp(numeric ? value : 0, 1600, seen && numeric && animate);
  const shown = numeric ? animate ? counted : value : value;
  const numberStyle = {
    font: size === "sm" ? "var(--weight-black) var(--size-stat-sm) / var(--lh-stat) var(--font-display)" : "var(--type-stat)",
    letterSpacing: "var(--track-stat)",
    fontStretch: "82%",
    color: "var(--text-strong)",
    ...(gradient ? {
      background: "var(--gradient-brand)",
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      color: "transparent"
    } : null)
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: ref,
    style: {
      display: "grid",
      gap: 8,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: numberStyle
  }, prefix, shown, suffix), label ? /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-label)",
      letterSpacing: "var(--track-label)",
      textTransform: "uppercase",
      color: "var(--text-subtle)"
    }
  }, label) : null);
}
Object.assign(__ds_scope, { StatCounter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/StatCounter.jsx", error: String((e && e.message) || e) }); }

// components/data/StatBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Row of 3–4 counters with hairline dividers — the trust bar under the hero. */
function StatBar({
  stats = [],
  variant = "band",
  columns,
  style,
  ...rest
}) {
  const cols = columns || Math.max(1, stats.length);
  const shells = {
    band: {
      background: "var(--surface-page-alt)",
      borderBlock: "1px solid var(--border-hairline)",
      padding: "var(--space-12) var(--gutter)"
    },
    card: {
      background: "var(--surface-card)",
      border: "1px solid var(--border-hairline)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-card)",
      padding: "var(--card-pad-lg)"
    },
    bare: {
      padding: 0
    }
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      ...(shells[variant] || shells.band),
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      maxWidth: variant === "band" ? "var(--container)" : undefined,
      margin: variant === "band" ? "0 auto" : undefined,
      display: "grid",
      gridTemplateColumns: "repeat(" + cols + ", 1fr)",
      gap: "var(--space-8)"
    }
  }, stats.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      paddingLeft: i === 0 ? 0 : "var(--space-8)",
      borderLeft: i === 0 ? "none" : "1px solid var(--border-hairline)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.StatCounter, s)))));
}
Object.assign(__ds_scope, { StatBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/StatBar.jsx", error: String((e && e.message) || e) }); }

// components/data/TrustRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Muted trust row — authorization badge plus partner/brand marks, de-saturated
 * so it reads as evidence rather than advertising.
 */
function TrustRow({
  note,
  items = [],
  variant = "text",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      alignItems: "center",
      flexWrap: "wrap",
      gap: "var(--space-6)",
      rowGap: "var(--space-4)",
      padding: "var(--space-5) 0",
      borderTop: "1px solid var(--border-hairline)",
      borderBottom: "1px solid var(--border-hairline)",
      ...style
    }
  }, rest), note ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-label)",
      letterSpacing: "var(--track-label)",
      textTransform: "uppercase",
      color: "var(--text-subtle)",
      flex: "0 0 auto"
    }
  }, note) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      flexWrap: "wrap",
      gap: "var(--space-6)",
      marginLeft: note ? "auto" : 0
    }
  }, items.map((item, i) => variant === "logo" && item.src ? /*#__PURE__*/React.createElement("img", {
    key: i,
    src: item.src,
    alt: item.label || "",
    style: {
      height: item.height || 26,
      width: "auto",
      opacity: 0.55,
      filter: "grayscale(1)"
    }
  }) : /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      font: "var(--type-sm)",
      color: "var(--text-muted)"
    }
  }, item.icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: item.icon,
    size: 16,
    color: "var(--text-subtle)"
  }) : null, item.label))));
}
Object.assign(__ds_scope, { TrustRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/TrustRow.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Text field. Dark inset well, hairline border, blue border + ring on focus. */
function Input({
  label,
  placeholder,
  value,
  onChange,
  type = "text",
  icon,
  hint,
  error,
  name,
  id,
  required = false,
  disabled = false,
  style,
  inputStyle,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const fieldId = id || name || (label ? "in-" + String(label).toLowerCase().replace(/\W+/g, "-") : undefined);
  const borderColor = error ? "var(--status-danger)" : focus ? "var(--border-accent)" : "var(--border-hairline)";
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      display: "grid",
      gap: 8,
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-label)",
      letterSpacing: "var(--track-label)",
      textTransform: "uppercase",
      color: focus ? "var(--blue-300)" : "var(--text-subtle)",
      transition: "color var(--dur-fast) var(--ease-out)"
    }
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--status-danger)"
    }
  }, " *") : null) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      height: "var(--control-h)",
      padding: "0 var(--control-pad-x)",
      background: "var(--surface-inset)",
      border: "1px solid " + borderColor,
      borderRadius: "var(--radius-sm)",
      boxShadow: focus ? "var(--focus-ring)" : "none",
      opacity: disabled ? 0.5 : 1,
      transition: "border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)"
    }
  }, icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 18,
    color: focus ? "var(--blue-300)" : "var(--text-subtle)"
  }) : null, /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    name: name,
    type: type,
    value: value,
    placeholder: placeholder,
    onChange: onChange,
    disabled: disabled,
    required: required,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      minWidth: 0,
      background: "none",
      border: 0,
      outline: "none",
      color: "var(--text-body)",
      font: "var(--type-body)",
      ...inputStyle
    }
  }, rest))), error || hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-meta)",
      color: error ? "var(--status-danger)" : "var(--text-subtle)"
    }
  }, error || hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Native select in brand skin. Used by the car finder and quote tools. */
function Select({
  label,
  options = [],
  value,
  onChange,
  placeholder = "Any",
  name,
  id,
  hint,
  error,
  disabled = false,
  required = false,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const fieldId = id || name || (label ? "sel-" + String(label).toLowerCase().replace(/\W+/g, "-") : undefined);
  const borderColor = error ? "var(--status-danger)" : focus ? "var(--border-accent)" : "var(--border-hairline)";
  const items = options.map(o => typeof o === "string" ? {
    value: o,
    label: o
  } : o);
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      display: "grid",
      gap: 8,
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-label)",
      letterSpacing: "var(--track-label)",
      textTransform: "uppercase",
      color: focus ? "var(--blue-300)" : "var(--text-subtle)",
      transition: "color var(--dur-fast) var(--ease-out)"
    }
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--status-danger)"
    }
  }, " *") : null) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "flex",
      alignItems: "center",
      height: "var(--control-h)",
      background: "var(--surface-inset)",
      border: "1px solid " + borderColor,
      borderRadius: "var(--radius-sm)",
      boxShadow: focus ? "var(--focus-ring)" : "none",
      opacity: disabled ? 0.5 : 1,
      transition: "border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)"
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: fieldId,
    name: name,
    value: value,
    onChange: onChange,
    disabled: disabled,
    required: required,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      appearance: "none",
      WebkitAppearance: "none",
      flex: 1,
      minWidth: 0,
      height: "100%",
      padding: "0 40px 0 var(--control-pad-x)",
      background: "none",
      border: 0,
      outline: "none",
      color: value ? "var(--text-body)" : "var(--text-subtle)",
      font: "var(--type-body)",
      cursor: disabled ? "not-allowed" : "pointer"
    }
  }, rest), /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder), items.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      right: 14,
      display: "grid",
      placeItems: "center",
      pointerEvents: "none"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 18,
    color: focus ? "var(--blue-300)" : "var(--text-subtle)"
  }))), error || hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-meta)",
      color: error ? "var(--status-danger)" : "var(--text-subtle)"
    }
  }, error || hint) : null);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/CarFinder.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const DEFAULT_FIELDS = [{
  id: "make",
  label: "Make",
  options: ["Toyota", "Lexus", "Mercedes-Benz"]
}, {
  id: "body",
  label: "Body type",
  options: ["Sedan", "Hatchback", "SUV", "Pickup"]
}, {
  id: "budget",
  label: "Budget",
  options: ["Under $5,000", "$5,000 – $10,000", "$10,000 – $20,000", "$20,000+"]
}];
function buildMessage(fields, values) {
  const parts = fields.filter(f => values[f.id]).map(f => f.label.toLowerCase() + ": " + values[f.id]);
  if (!parts.length) return "Hi JOJO International, I'm looking for a car from Japan. Can you help?";
  return "Hi JOJO International, I'm looking for a car — " + parts.join(", ") + ". What can you source?";
}

/**
 * Looks like a search, behaves like a conversation starter. Picking values and
 * pressing the button opens WhatsApp with the request pre-filled — JOJO doesn't
 * hold the stock, so there is nothing to search.
 */
function CarFinder({
  label = "Find your car",
  title = "Tell us what you're looking for",
  fields = DEFAULT_FIELDS,
  whatsappNumber = "923000000000",
  submitLabel = "Ask on WhatsApp",
  note = "This opens WhatsApp with your request pre-filled. Full stock lives on BeForward.",
  floating = false,
  onSubmit,
  style,
  ...rest
}) {
  const [values, setValues] = React.useState({});
  const message = buildMessage(fields, values);
  const href = "https://wa.me/" + whatsappNumber + "?text=" + encodeURIComponent(message);
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: floating ? "var(--surface-glass)" : "var(--surface-card)",
      backdropFilter: floating ? "blur(var(--blur-glass))" : undefined,
      border: "1px solid var(--border-hairline)",
      borderRadius: "var(--radius-lg)",
      boxShadow: floating ? "var(--shadow-float)" : "var(--shadow-card)",
      padding: "var(--card-pad-lg)",
      display: "grid",
      gap: "var(--space-5)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.SectionLabel, null, label), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      font: "var(--type-h4)",
      letterSpacing: "var(--track-h4)",
      color: "var(--text-strong)"
    }
  }, title)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
      gap: "var(--space-4)"
    }
  }, fields.map(field => /*#__PURE__*/React.createElement(__ds_scope.Select, {
    key: field.id,
    label: field.label,
    options: field.options,
    value: values[field.id] || "",
    onChange: e => setValues(v => ({
      ...v,
      [field.id]: e.target.value
    }))
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    icon: "message-circle",
    href: href,
    target: "_blank",
    fullWidth: true,
    onClick: onSubmit ? () => onSubmit(values, message) : undefined
  }, submitLabel), note ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: "var(--type-meta)",
      color: "var(--text-subtle)",
      lineHeight: 1.6
    }
  }, note) : null));
}
Object.assign(__ds_scope, { CarFinder });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/CarFinder.jsx", error: String((e && e.message) || e) }); }

// components/forms/LeadForm.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Floating lead card — name, WhatsApp number, car, budget. Submits to WhatsApp,
 * not to an inbox, because that's where the sale actually happens.
 */
function LeadForm({
  label = "Get started",
  title = "Tell us what you need",
  budgetOptions = ["Under $5,000", "$5,000 – $10,000", "$10,000 – $20,000", "$20,000+"],
  whatsappNumber = "923000000000",
  submitLabel = "Send on WhatsApp",
  note = "No account, no forms to chase. We reply on WhatsApp, usually within a few hours.",
  floating = true,
  onSubmit,
  style,
  ...rest
}) {
  const [form, setForm] = React.useState({
    name: "",
    phone: "",
    car: "",
    budget: ""
  });
  const set = k => e => setForm(f => ({
    ...f,
    [k]: e.target.value
  }));
  const message = "Hi JOJO International." + (form.name ? " I'm " + form.name + "." : "") + (form.car ? " I'm interested in a " + form.car + "." : " I'm looking for a car from Japan.") + (form.budget ? " Budget: " + form.budget + "." : "") + (form.phone ? " You can reach me on " + form.phone + "." : "");
  const href = "https://wa.me/" + whatsappNumber + "?text=" + encodeURIComponent(message);
  return /*#__PURE__*/React.createElement("form", _extends({
    onSubmit: e => {
      e.preventDefault();
      if (onSubmit) onSubmit(form, message);
    },
    style: {
      background: "var(--surface-card)",
      border: "1px solid " + (floating ? "var(--border-soft)" : "var(--border-hairline)"),
      borderRadius: "var(--radius-lg)",
      boxShadow: floating ? "var(--shadow-float)" : "var(--shadow-card)",
      padding: "var(--card-pad-lg)",
      display: "grid",
      gap: "var(--space-5)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.SectionLabel, null, label), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      font: "var(--type-h4)",
      letterSpacing: "var(--track-h4)",
      color: "var(--text-strong)"
    }
  }, title)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Input, {
    label: "Your name",
    placeholder: "Full name",
    value: form.name,
    onChange: set("name"),
    required: true
  }), /*#__PURE__*/React.createElement(__ds_scope.Input, {
    label: "WhatsApp number",
    type: "tel",
    placeholder: "+27 82 000 0000",
    value: form.phone,
    onChange: set("phone"),
    required: true
  }), /*#__PURE__*/React.createElement(__ds_scope.Input, {
    label: "Car you want",
    placeholder: "e.g. Toyota Prado 2019",
    value: form.car,
    onChange: set("car"),
    style: {
      gridColumn: "1 / -1"
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Select, {
    label: "Budget",
    options: budgetOptions,
    value: form.budget,
    onChange: set("budget"),
    style: {
      gridColumn: "1 / -1"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    type: "submit",
    icon: "message-circle",
    href: href,
    target: "_blank",
    fullWidth: true
  }, submitLabel), note ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: "var(--type-meta)",
      color: "var(--text-subtle)",
      lineHeight: 1.6
    }
  }, note) : null));
}
Object.assign(__ds_scope, { LeadForm });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/LeadForm.jsx", error: String((e && e.message) || e) }); }

// components/navigation/InfoStrip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const DEFAULT_ITEMS = [{
  icon: "message-circle",
  text: "+92 3XX XXX XXXX",
  href: "https://wa.me/923000000000"
}, {
  icon: "mail",
  text: "sales@jojointernational.com",
  href: "mailto:sales@jojointernational.com"
}, {
  icon: "clock",
  text: "Mon–Sat · 9am–7pm PKT"
}];

/** Thin utility strip above the nav — WhatsApp number, email, office hours. */
function InfoStrip({
  items = DEFAULT_ITEMS,
  right,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: "var(--surface-page-alt)",
      borderBottom: "1px solid var(--border-hairline)",
      minHeight: "var(--infostrip-h)",
      display: "flex",
      alignItems: "center",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      maxWidth: "var(--container)",
      margin: "0 auto",
      padding: "0 var(--gutter)",
      display: "flex",
      alignItems: "center",
      gap: "var(--space-6)",
      flexWrap: "wrap",
      rowGap: 6
    }
  }, items.map((item, i) => {
    const inner = /*#__PURE__*/React.createElement(React.Fragment, null, item.icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: item.icon,
      size: 13,
      color: "var(--text-subtle)"
    }) : null, /*#__PURE__*/React.createElement("span", null, item.text));
    const base = {
      display: "inline-flex",
      alignItems: "center",
      gap: 7,
      font: "var(--type-meta)",
      letterSpacing: "var(--track-meta)",
      color: "var(--text-muted)",
      textDecoration: "none",
      padding: "6px 0"
    };
    return item.href ? /*#__PURE__*/React.createElement("a", {
      key: i,
      href: item.href,
      style: base
    }, inner) : /*#__PURE__*/React.createElement("span", {
      key: i,
      style: base
    }, inner);
  }), right ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto",
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, right) : null));
}
Object.assign(__ds_scope, { InfoStrip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/InfoStrip.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const DEFAULT_LINKS = [{
  label: "Home",
  href: "#home"
}, {
  label: "How it works",
  href: "#how-it-works"
}, {
  label: "Featured cars",
  href: "#featured"
}, {
  label: "About",
  href: "#about"
}, {
  label: "Contact",
  href: "#contact"
}];

/** Sticky glass nav. Logo left, links centre-right, permanent WhatsApp CTA right. */
function NavBar({
  logoSrc = "assets/logo/jojo-international-white.png",
  logoAlt = "JOJO International",
  logoHeight = 34,
  links = DEFAULT_LINKS,
  activeHref,
  ctaLabel = "Chat on WhatsApp",
  ctaHref = "https://wa.me/923000000000",
  sticky = true,
  onNavigate,
  style,
  ...rest
}) {
  const [open, setOpen] = React.useState(false);
  const [hovered, setHovered] = React.useState(null);
  const linkStyle = (link, i) => {
    const active = activeHref ? link.href === activeHref : false;
    const hot = hovered === i;
    return {
      font: "var(--type-sm)",
      fontWeight: active ? "var(--weight-semibold)" : "var(--weight-medium)",
      color: active ? "var(--text-strong)" : hot ? "var(--text-body)" : "var(--text-muted)",
      textDecoration: "none",
      padding: "10px 2px",
      borderBottom: "2px solid " + (active ? "var(--blue-400)" : "transparent"),
      transition: "color var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out)",
      whiteSpace: "nowrap"
    };
  };
  const handleClick = link => e => {
    setOpen(false);
    if (onNavigate) {
      e.preventDefault();
      onNavigate(link);
    }
  };
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      position: sticky ? "sticky" : "relative",
      top: 0,
      zIndex: 40,
      background: "var(--surface-glass)",
      backdropFilter: "blur(var(--blur-nav))",
      borderBottom: "1px solid var(--border-hairline)",
      boxShadow: "var(--shadow-nav)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      maxWidth: "var(--container)",
      margin: "0 auto",
      padding: "0 var(--gutter)",
      height: "var(--nav-h)",
      display: "flex",
      alignItems: "center",
      gap: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: links[0] ? links[0].href : "#",
    onClick: links[0] ? handleClick(links[0]) : undefined,
    style: {
      display: "flex",
      alignItems: "center",
      flex: "0 0 auto"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: logoAlt,
    style: {
      height: logoHeight,
      width: "auto",
      display: "block"
    }
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-7)",
      marginLeft: "auto"
    },
    "data-jojo-nav-links": true
  }, links.map((link, i) => /*#__PURE__*/React.createElement("a", {
    key: link.href + i,
    href: link.href,
    style: linkStyle(link, i),
    onMouseEnter: () => setHovered(i),
    onMouseLeave: () => setHovered(null),
    onClick: handleClick(link)
  }, link.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      flex: "0 0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    "data-jojo-nav-cta": true
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    icon: "message-circle",
    href: ctaHref,
    target: "_blank"
  }, ctaLabel)), /*#__PURE__*/React.createElement("div", {
    "data-jojo-nav-toggle": true,
    style: {
      display: "none"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: open ? "x" : "menu",
    label: "Menu",
    variant: "bare",
    onClick: () => setOpen(o => !o)
  })))), open ? /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--border-hairline)",
      background: "var(--surface-section)",
      padding: "var(--space-4) var(--gutter)",
      display: "grid",
      gap: 4
    }
  }, links.map((link, i) => /*#__PURE__*/React.createElement("a", {
    key: link.href + i,
    href: link.href,
    onClick: handleClick(link),
    style: {
      font: "var(--type-body)",
      color: "var(--text-body)",
      textDecoration: "none",
      padding: "12px 0",
      borderBottom: "1px solid var(--border-hairline)"
    }
  }, link.label))) : null);
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// site/app/about.jsx
try { (() => {
const {
  Button,
  SectionLabel,
  SplitSection,
  StepCard,
  MetaTable,
  CheckList,
  StatBar,
  TestimonialCard,
  WindowFrame
} = window.JOJOInternationalDesignSystem_e58ef5;
const PILLARS = [{
  index: "001",
  icon: "globe",
  title: "Sourcing breadth",
  body: "Full access to BeForward's Japanese auction stock — not a fixed lot of cars we happen to own."
}, {
  index: "002",
  icon: "shield-check",
  title: "Inspection first",
  body: "Third-party inspection report and photos in your hands before any money moves."
}, {
  index: "003",
  icon: "ship",
  title: "Shipping we book ourselves",
  body: "Direct relationships with freight forwarders on the Karachi–Africa lanes, so sailings don't sit."
}, {
  index: "004",
  icon: "message-circle",
  title: "One thread, one person",
  body: "The person who answers your first question sends your bill of lading. No handoffs."
}];
function About({
  onNavigate
}) {
  const d = window.JOJO_DATA;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHero, {
    label: "About us",
    title: "Ten years of moving Japanese cars out of Karachi.",
    meta: /*#__PURE__*/React.createElement(MetaTable, {
      style: {
        marginTop: "var(--space-6)",
        maxWidth: 640
      },
      rows: [{
        key: "Trading since",
        value: "2016"
      }, {
        key: "Founder / CEO",
        value: d.founder
      }, {
        key: "Based in",
        value: d.address
      }, {
        key: "Authorization",
        value: "BeForward authorized sales agent"
      }, {
        key: "Markets",
        value: "South Africa · Zambia · Zimbabwe · Botswana · Tanzania"
      }, {
        key: "Group",
        value: "JOJO International · MI Logistics · JOJO Techzone"
      }]
    })
  }, "Not a marketplace and not a dealership. We're the people on the other end of the WhatsApp thread when someone in Johannesburg or Lusaka decides to import a car from Japan."), /*#__PURE__*/React.createElement(SplitSection, {
    label: "Our story",
    title: "It started with one agency and a lot of questions.",
    background: "var(--surface-page)",
    mediaSrc: "https://jojo-international.com/assets/images/message-by-ceo-founder-image.png",
    mediaAlt: "Message by CEO / Founder",
    mediaHeight: 440,
    aside: /*#__PURE__*/React.createElement("blockquote", {
      style: {
        margin: 0,
        padding: "var(--space-5)",
        background: "var(--surface-inset)",
        border: "1px solid var(--border-hairline)",
        borderRadius: "var(--radius-lg)",
        font: "var(--type-body)",
        color: "var(--text-body)",
        fontStyle: "italic"
      }
    }, "\"We have a vision to be the best Sales & Marketing company across our markets. We want to build a company that creates shareholder value and delivers sustainable long-term growth. In order to do that, we have a clear roadmap.\"", /*#__PURE__*/React.createElement("span", {
      style: {
        display: "block",
        marginTop: 10,
        fontStyle: "normal",
        font: "var(--type-meta)",
        color: "var(--text-subtle)"
      }
    }, "\u2014 ", d.founder, ", CEO & Founder")),
    actions: /*#__PURE__*/React.createElement(Button, {
      icon: "message-circle",
      href: "https://wa.me/" + d.whatsapp,
      target: "_blank"
    }, "Chat on WhatsApp")
  }, /*#__PURE__*/React.createElement("p", null, "JOJO International is a specialised automotive communications agency. Since 2016 we have helped car exporting companies increase sales \u2014 and provided the after-sales service that usually goes missing once the money has moved."), /*#__PURE__*/React.createElement("p", null, "Today we work as BeForward Japan's authorized agent in Pakistan, selling into Africa and the Caribbean from a sales floor in North Nazimabad. Alongside cars we handle agricultural machinery and tractors.")), /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-section)",
      borderBlock: "1px solid var(--border-hairline)",
      padding: "var(--section-y) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "jojo-container",
    style: {
      display: "grid",
      gap: "var(--space-10)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 14,
      maxWidth: "46ch"
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    rule: true
  }, "Why us"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      font: "var(--type-h2)",
      letterSpacing: "var(--track-h2)",
      color: "var(--text-strong)"
    }
  }, "Four things we're actually better at.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "var(--card-gap)"
    }
  }, PILLARS.map(p => /*#__PURE__*/React.createElement(StepCard, {
    key: p.index,
    index: p.index,
    icon: p.icon,
    title: p.title
  }, p.body))))), /*#__PURE__*/React.createElement(StatBar, {
    stats: d.stats
  }), /*#__PURE__*/React.createElement(SplitSection, {
    label: "Office & team",
    title: "Real people, at real desks, in Karachi.",
    reverse: true,
    background: "var(--surface-page)",
    mediaSrc: "https://jojo-international.com/assets/images/about-us-image.png",
    mediaAlt: "JOJO International team",
    mediaHeight: 420,
    aside: /*#__PURE__*/React.createElement(CheckList, {
      columns: 1,
      items: ["Highly trained sales staff", "Fully equipped sales floor", "Capital in place to keep expanding the desk"]
    })
  }, /*#__PURE__*/React.createElement("p", null, "You can visit. The office is Building A-314 in Block J, North Nazimabad, and if you're in Karachi we'd rather show you the operation than describe it."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-sm)",
      color: "var(--text-subtle)"
    }
  }, "Note for the build: these photographs are hot-linked from the current live site. Download them into ", /*#__PURE__*/React.createElement("code", null, "assets/"), ", and replace any that are stock rather than real.")), /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-page-alt)",
      borderTop: "1px solid var(--border-hairline)",
      padding: "var(--section-y) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "jojo-container",
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-12)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(WindowFrame, {
    title: "Vision",
    tone: "inset"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: "var(--type-body)",
      color: "var(--text-body)"
    }
  }, "To achieve 100% customer satisfaction by delivering quality products and services at an affordable cost \u2014 and to become pioneers of the sales and customer service industry.")), /*#__PURE__*/React.createElement(WindowFrame, {
    title: "Mission",
    tone: "inset"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: "var(--type-body)",
      color: "var(--text-body)"
    }
  }, "To earn the reputation of a quality, high-standard and reliable service provider. For our scope of improvement the sky is the limit, and we are always ready to take our achievements to the next level.")))), /*#__PURE__*/React.createElement(CtaBand, {
    title: "Want to see if we're a fit?",
    body: "Ask us anything \u2014 including the questions you'd rather not put in an email.",
    primary: "Chat on WhatsApp",
    secondary: "How it works",
    secondaryHref: "#how-it-works"
  }));
}
Object.assign(window, {
  About
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/app/about.jsx", error: String((e && e.message) || e) }); }

// site/app/contact.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Button,
  Badge,
  SectionLabel,
  LeadForm,
  MetaTable,
  Icon,
  TrustRow,
  TestimonialCard
} = window.JOJOInternationalDesignSystem_e58ef5;
function ContactLine({
  icon,
  label,
  value,
  href,
  tint
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      alignItems: "flex-start",
      padding: "var(--space-4) 0",
      borderBottom: "1px solid var(--border-hairline)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "grid",
      placeItems: "center",
      width: 40,
      height: 40,
      borderRadius: "var(--radius-md)",
      background: "var(--blue-tint-08)",
      border: "1px solid var(--blue-tint-24)",
      flex: "0 0 auto"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 19,
    color: tint || "var(--blue-300)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 3
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-label)",
      letterSpacing: "var(--track-label)",
      textTransform: "uppercase",
      color: "var(--text-subtle)"
    }
  }, label), href ? /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      font: "var(--type-body)",
      color: "var(--text-body)",
      textDecoration: "none"
    }
  }, value) : /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body)",
      color: "var(--text-body)"
    }
  }, value)));
}
function Contact() {
  const d = window.JOJO_DATA;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHero, {
    label: "Contact",
    title: "Skip the form. Message us.",
    meta: /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: "var(--inline-gap)",
        flexWrap: "wrap",
        marginTop: "var(--space-4)"
      }
    }, /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      icon: "message-circle",
      href: "https://wa.me/" + d.whatsapp,
      target: "_blank"
    }, "Chat on WhatsApp"), /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      variant: "outline",
      icon: "phone",
      href: "tel:" + d.phoneDisplay.replace(/\s/g, "")
    }, "Call the office"))
  }, "Every deal we've ever done started as a WhatsApp message. The form below works too \u2014 it just opens WhatsApp when you send it."), /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-page)",
      padding: "var(--section-y) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "jojo-container",
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-16)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(LeadForm, {
    whatsappNumber: d.whatsapp
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    rule: true
  }, "Direct"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      font: "var(--type-h3)",
      letterSpacing: "var(--track-h3)",
      color: "var(--text-strong)"
    }
  }, "Reach us without the form.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ContactLine, {
    icon: "message-circle",
    label: "WhatsApp \xB7 fastest",
    value: d.phoneDisplay,
    href: "https://wa.me/" + d.whatsapp,
    tint: "var(--whatsapp-green)"
  }), /*#__PURE__*/React.createElement(ContactLine, {
    icon: "phone",
    label: "Office line",
    value: d.phoneDisplay,
    href: "tel:" + d.phoneDisplay.replace(/\s/g, "")
  }), /*#__PURE__*/React.createElement(ContactLine, {
    icon: "mail",
    label: "Email",
    value: d.email,
    href: "mailto:" + d.email
  }), /*#__PURE__*/React.createElement(ContactLine, {
    icon: "map-pin",
    label: "Office",
    value: d.address,
    href: "https://goo.gl/maps/c7VKa2SddTGENLuX8"
  }), /*#__PURE__*/React.createElement(ContactLine, {
    icon: "clock",
    label: "Hours",
    value: d.hours
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, d.social.map(s => /*#__PURE__*/React.createElement("a", {
    key: s.label,
    href: s.href,
    target: "_blank",
    rel: "noopener noreferrer",
    "aria-label": s.label,
    title: s.label,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      padding: "8px 13px",
      borderRadius: "var(--radius-pill)",
      background: "var(--blue-tint-08)",
      border: "1px solid var(--blue-tint-24)",
      font: "var(--type-sm)",
      color: "var(--text-muted)",
      textDecoration: "none"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s.icon,
    size: 15
  }), s.label)))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-section)",
      borderBlock: "1px solid var(--border-hairline)",
      padding: "var(--section-y-tight) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "jojo-container",
    style: {
      display: "grid",
      gap: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement(TrustRow, {
    note: "What happens next",
    items: [{
      icon: "message-circle",
      label: "We reply on WhatsApp, usually within a few hours"
    }, {
      icon: "car",
      label: "We shortlist cars that match your budget"
    }, {
      icon: "file-text",
      label: "You get an itemised landed-price quote"
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "var(--card-gap)"
    }
  }, d.testimonials.map(t => /*#__PURE__*/React.createElement(TestimonialCard, _extends({
    key: t.name
  }, t, {
    sample: true
  })))))), /*#__PURE__*/React.createElement(CtaBand, {
    title: "One message is enough.",
    body: "Tell us the car and your port. We'll take it from there.",
    primary: "Chat on WhatsApp"
  }));
}
Object.assign(window, {
  Contact,
  ContactLine
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/app/contact.jsx", error: String((e && e.message) || e) }); }

// site/app/data.js
try { (() => {
/* JOJO website kit content.
   Contact details, socials, founder name and office address are REAL, read from
   https://www.jojo-international.com (Aug 2026).
   Featured cars are REAL live BeForward listings (Toyota Prius, stocklist make=1/model=225,
   read Aug 2026) — ref numbers, FOB prices, mileage, engine, transmission, stock location
   and photography all come from those listings.
   Stats and testimonials are still placeholders — marked below. */
window.JOJO_DATA = {
  whatsapp: "923168301723",
  phoneDisplay: "+92 316 830 1723",
  email: "info@jojo-international.com",
  hours: "Mon – Sat · 24 hour service",
  address: "Building A-314, Ground Floor, Block J, North Nazimabad, Karachi",
  founder: "Shahzaib Saleem",
  social: [{
    icon: "facebook",
    label: "Facebook",
    href: "https://www.facebook.com/jojointl"
  }, {
    icon: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/jojo-international/"
  }
  /* Instagram and X/Twitter icons on the live site link to the platform root, not to a
     JOJO profile — i.e. they are broken. Omitted until real handles exist. */],
  links: [{
    label: "Home",
    href: "#home"
  }, {
    label: "How it works",
    href: "#how-it-works"
  }, {
    label: "Featured cars",
    href: "#featured"
  }, {
    label: "About",
    href: "#about"
  }, {
    label: "Contact",
    href: "#contact"
  }],
  /* PLACEHOLDER — real figures needed. "Since 2016" is confirmed from the live site. */
  stats: [{
    value: "2016",
    label: "Trading since",
    animate: false
  }, {
    value: 500,
    suffix: "+",
    label: "Cars delivered"
  }, {
    value: 12,
    label: "Countries served"
  }, {
    value: "24h",
    label: "Quote turnaround",
    animate: false
  }],
  steps: [{
    index: "001",
    icon: "car",
    title: "Choose your car",
    body: "Browse BeForward's 540,000-car stock, or just tell us the model, year and budget you have in mind."
  }, {
    index: "002",
    icon: "message-circle",
    title: "Message us",
    body: "Send the ref number on WhatsApp. We confirm availability and quote you a landed price for your port."
  }, {
    index: "003",
    icon: "file-text",
    title: "Payment & paperwork",
    body: "You pay BeForward Japan directly. We prepare inspection, export and shipping documents."
  }, {
    index: "004",
    icon: "ship",
    title: "Shipped & delivered",
    body: "We book the sailing, send you the bill of lading, and stay on the thread until it's in your hands."
  }],
  /* REAL BeForward listings — refreshed Aug 2026. Re-pull weekly. */
  cars: [{
    refNo: "CE450479",
    model: "Toyota Prius 2.0Z",
    year: "2023",
    image: "https://image-cdn.beforward.jp/medium/202608/16333715/CE450479_20e2c3d2.jpg?w=400",
    listingHref: "https://www.beforward.jp/toyota/prius/ce450479/id/16333715/",
    priceRange: "$18,560",
    tags: ["Hybrid", "AT", "2WD"],
    specs: [{
      key: "Mileage",
      value: "38,000 km"
    }, {
      key: "Engine",
      value: "2,000cc"
    }, {
      key: "Stock",
      value: "Nagoya, Japan"
    }]
  }, {
    refNo: "CE450317",
    model: "Toyota Prius 1.8U",
    year: "2023",
    image: "https://image-cdn.beforward.jp/medium/202608/16333553/CE450317_20e2a6af.jpg?w=400",
    listingHref: "https://www.beforward.jp/toyota/prius/ce450317/id/16333553/",
    priceRange: "$16,380",
    tags: ["Hybrid", "AT", "2WD"],
    specs: [{
      key: "Mileage",
      value: "9,000 km"
    }, {
      key: "Engine",
      value: "1,800cc"
    }, {
      key: "Stock",
      value: "Yokohama, Japan"
    }]
  }, {
    refNo: "CE327822",
    model: "Toyota Prius 1.8A",
    year: "2016",
    image: "https://image-cdn.beforward.jp/medium/202608/16209968/CE327822_20e28b4f.jpg?w=400",
    listingHref: "https://www.beforward.jp/toyota/prius/ce327822/id/16209968/",
    priceRange: "$11,620",
    tags: ["Hybrid", "AT", "2WD"],
    specs: [{
      key: "Mileage",
      value: "80,000 km"
    }, {
      key: "Engine",
      value: "1,800cc"
    }, {
      key: "Stock",
      value: "Nagoya, Japan"
    }]
  }, {
    refNo: "CE450072",
    model: "Toyota Prius 1.8A",
    year: "2026",
    image: "https://image-cdn.beforward.jp/medium/202608/16333305/CE450072_20e2606d.jpg?w=400",
    listingHref: "https://www.beforward.jp/toyota/prius/ce450072/id/16333305/",
    priceRange: "$7,770",
    tags: ["Hybrid", "CVT", "2WD"],
    specs: [{
      key: "Mileage",
      value: "13,832 km"
    }, {
      key: "Engine",
      value: "1,790cc"
    }, {
      key: "Stock",
      value: "Nagoya, Japan"
    }]
  }, {
    refNo: "CE450337",
    model: "Toyota Prius",
    year: "2012",
    image: "https://image-cdn.beforward.jp/medium/202608/16333573/CE450337_20e2aa76.JPG?w=400",
    listingHref: "https://www.beforward.jp/toyota/prius/ce450337/id/16333573/",
    priceRange: "$5,140",
    tags: ["Hybrid", "AT"],
    specs: [{
      key: "Mileage",
      value: "47,766 km"
    }, {
      key: "Engine",
      value: "1,797cc"
    }, {
      key: "Stock",
      value: "Yokohama, Japan"
    }]
  }, {
    refNo: "CE450018",
    model: "Toyota Prius",
    year: "2009",
    image: "https://image-cdn.beforward.jp/medium/202608/16333251/CE450018_20e24b6e.jpg?w=400",
    listingHref: "https://www.beforward.jp/toyota/prius/ce450018/id/16333251/",
    priceRange: "$3,590",
    tags: ["Hybrid", "CVT", "2WD"],
    specs: [{
      key: "Mileage",
      value: "89,471 km"
    }, {
      key: "Engine",
      value: "1,790cc"
    }, {
      key: "Stock",
      value: "Yokohama, Japan"
    }]
  }],
  /* PLACEHOLDER — real client quotes needed before launch. */
  testimonials: [{
    quote: "The Prado landed in Durban exactly when they said it would. Photos at every stage is what made me comfortable paying up front.",
    name: "T. Mokoena",
    country: "South Africa",
    car: "2021 Land Cruiser Prado"
  }, {
    quote: "I asked about a Corolla on a Tuesday and had the invoice and inspection report by Thursday. No chasing, no forms.",
    name: "B. Chirwa",
    country: "Zambia",
    car: "2020 Corolla"
  }, {
    quote: "They told me up front that the payment goes to BeForward, not to them. That one sentence is why I trusted the rest.",
    name: "S. Ndlovu",
    country: "Zimbabwe",
    car: "2019 Prius"
  }],
  faqs: [{
    question: "Who do I actually pay?",
    answer: "BeForward Japan, directly. JOJO never holds your money — we source the car, handle the paperwork and arrange shipping around your purchase."
  }, {
    question: "What does the price on a card mean?",
    answer: "It's BeForward's FOB price — the car, free on board in Japan. Your landed cost adds ocean freight, insurance, certification and your own import duty, and depends on your port. We quote that per conversation."
  }, {
    question: "How long does delivery take?",
    answer: "Typically 6–10 weeks from payment to your port, depending on sailing schedules and clearing at your end. We tell you the vessel and ETA as soon as it's booked."
  }, {
    question: "Which countries do you ship to?",
    answer: "Most of southern and eastern Africa, plus the Caribbean. Tell us your port on WhatsApp and we'll confirm."
  }, {
    question: "Can I see the car before I pay?",
    answer: "You get the BeForward listing photos plus the third-party inspection report. If you want specific angles or a video, we ask the yard for them."
  }, {
    question: "Do you sell cars you don't have?",
    answer: "We don't hold stock at all — that's the point. BeForward Japan holds over 540,000 vehicles, and we're their authorized agent in Pakistan. So there's no live catalogue here: you tell us what you want and we source it."
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/app/data.js", error: String((e && e.message) || e) }); }

// site/app/featured-cars.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Button,
  Badge,
  CarCard,
  CarFinder,
  WindowFrame,
  SectionLabel,
  TrustRow
} = window.JOJOInternationalDesignSystem_e58ef5;
function FeaturedCars() {
  const d = window.JOJO_DATA;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHero, {
    label: "Featured cars",
    title: "Live BeForward listings we can quote today.",
    meta: /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 10,
        flexWrap: "wrap",
        marginTop: "var(--space-2)"
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "muted",
      size: "sm"
    }, "Pulled from BeForward \xB7 refresh weekly"), /*#__PURE__*/React.createElement(Badge, {
      tone: "soft",
      size: "sm"
    }, "FOB Japan \xB7 your landed price on request"))
  }, "Real cars, real reference numbers, real prices \u2014 read straight off BeForward's stock list. We don't hold any of it, so treat this as a shortlist rather than a catalogue. Send us a ref number and we'll confirm it's still there."), /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-page)",
      padding: "var(--section-y) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "jojo-container",
    style: {
      display: "grid",
      gap: "var(--space-12)"
    }
  }, /*#__PURE__*/React.createElement(CarFinder, {
    whatsappNumber: d.whatsapp,
    label: "Nothing here fits?",
    title: "Tell us what you're looking for instead",
    note: "This opens WhatsApp with your request pre-filled \u2014 it isn't a live stock search, because we don't hold the stock."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "var(--card-gap)"
    }
  }, d.cars.map(c => /*#__PURE__*/React.createElement(CarCard, _extends({
    key: c.refNo
  }, c, {
    fit: "cover",
    whatsappNumber: d.whatsapp,
    note: "FOB Japan. Subject to availability on BeForward."
  })))), /*#__PURE__*/React.createElement(WindowFrame, {
    title: "How to read these prices",
    meta: "FOB, not landed"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 10,
      font: "var(--type-sm)",
      color: "var(--text-muted)",
      lineHeight: 1.7
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "The figure on each card is BeForward's ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--text-body)"
    }
  }, "FOB price"), " \u2014 the car, free on board in Japan. It is the real listed number on the day we pulled it."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "Your ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--text-body)"
    }
  }, "landed"), " cost adds ocean freight, marine insurance, certification and your own import duty and clearing \u2014 all of which depend on your port. That's the number we work out with you on WhatsApp, and it's why we don't print a single price here and pretend it covers everything."))), /*#__PURE__*/React.createElement(TrustRow, {
    note: "Every car ships with",
    items: [{
      icon: "shield-check",
      label: "Third-party inspection report"
    }, {
      icon: "file-text",
      label: "Export certificate & bill of lading"
    }, {
      icon: "ship",
      label: "Insured ocean freight"
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "outline",
    icon: "arrow-right",
    iconPosition: "right",
    href: "https://www.beforward.jp",
    target: "_blank"
  }, "Browse full BeForward stock")))), /*#__PURE__*/React.createElement(CtaBand, {
    title: "Seen one you like?",
    body: "Send us the model and year. We'll confirm availability and quote a landed price for your port.",
    primary: "Ask on WhatsApp"
  }));
}
Object.assign(window, {
  FeaturedCars
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/app/featured-cars.jsx", error: String((e && e.message) || e) }); }

// site/app/footer.jsx
try { (() => {
const {
  Icon,
  Badge
} = window.JOJOInternationalDesignSystem_e58ef5;
function FooterColumn({
  title,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 14,
      alignContent: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-label)",
      letterSpacing: "var(--track-label)",
      textTransform: "uppercase",
      color: "var(--text-subtle)"
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 10
    }
  }, children));
}
function FooterLink({
  children,
  href,
  onClick
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      font: "var(--type-sm)",
      color: hover ? "var(--text-strong)" : "var(--text-muted)",
      textDecoration: "none",
      transition: "color var(--dur-fast) var(--ease-out)"
    }
  }, children);
}
function Footer({
  onNavigate
}) {
  const d = window.JOJO_DATA;
  const go = link => e => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(link);
    }
  };
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--surface-page-alt)",
      borderTop: "1px solid var(--border-hairline)",
      paddingTop: "var(--section-y-tight)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "jojo-container",
    style: {
      display: "grid",
      gridTemplateColumns: "1.4fr 1fr 1fr 1.2fr",
      gap: "var(--space-12)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 18,
      alignContent: "start"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/logo/jojo-international-white.png",
    alt: "JOJO International",
    style: {
      height: 34,
      width: "auto"
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: "var(--type-sm)",
      color: "var(--text-muted)",
      maxWidth: "34ch"
    }
  }, "Authorized BeForward sales agent, exporting Japanese cars out of Karachi to buyers across Africa since 2016."), /*#__PURE__*/React.createElement(Badge, {
    tone: "gradient",
    size: "sm",
    icon: "shield-check",
    style: {
      justifySelf: "start"
    }
  }, "BeForward Authorized Agent")), /*#__PURE__*/React.createElement(FooterColumn, {
    title: "Pages"
  }, d.links.map(l => /*#__PURE__*/React.createElement(FooterLink, {
    key: l.href,
    href: l.href,
    onClick: go(l)
  }, l.label))), /*#__PURE__*/React.createElement(FooterColumn, {
    title: "Group"
  }, /*#__PURE__*/React.createElement(FooterLink, {
    href: "logistics.html"
  }, "MI Logistics"), /*#__PURE__*/React.createElement(FooterLink, {
    href: "http://jojotechzone.com/"
  }, "JOJO Techzone \u2197"), /*#__PURE__*/React.createElement(FooterLink, {
    href: "https://www.beforward.jp"
  }, "BeForward stock \u2197")), /*#__PURE__*/React.createElement(FooterColumn, {
    title: "Talk to us"
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://wa.me/" + d.whatsapp,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 9,
      font: "var(--type-sm)",
      color: "var(--text-body)",
      textDecoration: "none"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "message-circle",
    size: 16,
    color: "var(--whatsapp-green)"
  }), d.phoneDisplay), /*#__PURE__*/React.createElement("a", {
    href: "mailto:" + d.email,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 9,
      font: "var(--type-sm)",
      color: "var(--text-body)",
      textDecoration: "none"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "mail",
    size: 16,
    color: "var(--text-subtle)"
  }), d.email), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 9,
      font: "var(--type-sm)",
      color: "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin",
    size: 16,
    color: "var(--text-subtle)"
  }), d.address), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 9,
      font: "var(--type-sm)",
      color: "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "clock",
    size: 16,
    color: "var(--text-subtle)"
  }), d.hours), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginTop: 4
    }
  }, d.social.map(s => /*#__PURE__*/React.createElement("a", {
    key: s.label,
    href: s.href,
    target: "_blank",
    rel: "noopener noreferrer",
    "aria-label": s.label,
    title: s.label,
    style: {
      display: "grid",
      placeItems: "center",
      width: 34,
      height: 34,
      borderRadius: "var(--radius-md)",
      background: "var(--blue-tint-08)",
      border: "1px solid var(--blue-tint-24)",
      color: "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s.icon,
    size: 16
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--section-y-tight)",
      borderTop: "1px solid var(--border-hairline)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "jojo-container",
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 16,
      alignItems: "center",
      padding: "var(--space-5) var(--gutter)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-meta)",
      color: "var(--text-subtle)"
    }
  }, "\xA9 2026 JOJO International \xB7 Karachi, Pakistan"), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: "auto",
      font: "var(--type-meta)",
      color: "var(--text-subtle)"
    }
  }, "Not a live inventory. All cars subject to availability on BeForward Japan."))));
}
Object.assign(window, {
  Footer,
  FooterColumn,
  FooterLink
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/app/footer.jsx", error: String((e && e.message) || e) }); }

// site/app/home.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Button,
  SectionLabel,
  Badge,
  StatBar,
  StatBadge,
  StepCard,
  CarCard,
  CarFinder,
  TestimonialCard,
  CompanyCard,
  CheckList,
  TrustRow,
  SplitSection,
  Icon
} = window.JOJOInternationalDesignSystem_e58ef5;
function Hero({
  onNavigate
}) {
  const d = window.JOJO_DATA;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      overflow: "hidden",
      background: "var(--surface-page)",
      paddingTop: "var(--space-20)",
      paddingBottom: "var(--space-24)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: -180,
      right: -120,
      width: 780,
      height: 780,
      borderRadius: "50%",
      background: "radial-gradient(circle, rgba(78,116,255,0.20) 0%, rgba(78,116,255,0) 62%)",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "jojo-container",
    style: {
      position: "relative",
      display: "grid",
      gridTemplateColumns: "1.05fr 1fr",
      gap: "var(--space-12)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    rule: true
  }, "Japanese cars \xB7 Karachi \u2192 Africa"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      font: "var(--type-hero)",
      letterSpacing: "var(--track-hero)",
      color: "var(--text-strong)"
    }
  }, "Japanese cars, delivered to your port."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: "var(--type-body-lg)",
      color: "var(--text-body)",
      maxWidth: "48ch"
    }
  }, "We're an authorized BeForward sales agent in Karachi. Tell us the car you want on WhatsApp and we handle sourcing, inspection, paperwork and shipping \u2014 over 500 cars delivered since 2016."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--inline-gap)",
      flexWrap: "wrap",
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    icon: "message-circle",
    href: "https://wa.me/" + d.whatsapp,
    target: "_blank"
  }, "Chat on WhatsApp"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "outline",
    href: "#how-it-works",
    onClick: e => {
      e.preventDefault();
      onNavigate({
        href: "#how-it-works"
      });
    }
  }, "See how it works")), /*#__PURE__*/React.createElement(TrustRow, {
    note: "Authorized & verified",
    style: {
      marginTop: "var(--space-4)"
    },
    items: [{
      icon: "shield-check",
      label: "BeForward authorized agent"
    }, {
      icon: "ship",
      label: "Durban · Dar es Salaam · Mombasa"
    }, {
      icon: "file-text",
      label: "Export documents handled"
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 380,
      borderRadius: "var(--radius-xl)",
      overflow: "hidden",
      background: "linear-gradient(158deg, var(--navy-700), var(--navy-900))",
      border: "1px solid var(--border-hairline)",
      display: "grid",
      placeItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--scrim-grade)"
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: "assets/cars/toyota-land-cruiser-prado.png",
    alt: "Toyota Land Cruiser Prado",
    style: {
      position: "relative",
      width: "92%",
      objectFit: "contain"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 20,
      top: 18,
      font: "var(--type-meta)",
      color: "var(--text-subtle)"
    }
  }, "Placeholder \u2014 real hero photograph or 15s loop goes here")), /*#__PURE__*/React.createElement(StatBadge, {
    value: "500+",
    label: "Cars delivered",
    sublabel: "Since 2016",
    style: {
      position: "absolute",
      right: -18,
      bottom: -26
    }
  }))));
}
function HowItWorksPreview({
  onNavigate
}) {
  const d = window.JOJO_DATA;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-page)",
      padding: "var(--section-y) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "jojo-container",
    style: {
      display: "grid",
      gap: "var(--space-10)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "var(--space-8)",
      alignItems: "flex-end",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 14,
      maxWidth: "44ch"
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    rule: true
  }, "How it works"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      font: "var(--type-h2)",
      letterSpacing: "var(--track-h2)",
      color: "var(--text-strong)"
    }
  }, "Four steps between you and a Japanese car.")), /*#__PURE__*/React.createElement("a", {
    href: "#how-it-works",
    onClick: e => {
      e.preventDefault();
      onNavigate({
        href: "#how-it-works"
      });
    },
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      font: "var(--type-sm)",
      fontWeight: "var(--weight-semibold)",
      color: "var(--blue-300)",
      textDecoration: "none"
    }
  }, "See the full process ", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 16
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "var(--card-gap)"
    }
  }, d.steps.map(s => /*#__PURE__*/React.createElement(StepCard, {
    key: s.index,
    index: s.index,
    icon: s.icon,
    title: s.title
  }, s.body)))));
}
function FeaturedPreview({
  onNavigate
}) {
  const d = window.JOJO_DATA;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-section)",
      borderBlock: "1px solid var(--border-hairline)",
      padding: "var(--section-y) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "jojo-container",
    style: {
      display: "grid",
      gap: "var(--space-12)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 420px",
      gap: "var(--space-12)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 16,
      maxWidth: "46ch"
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    rule: true
  }, "Featured this week"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      font: "var(--type-h2)",
      letterSpacing: "var(--track-h2)",
      color: "var(--text-strong)"
    }
  }, "Six cars we can quote today."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: "var(--type-body-lg)",
      color: "var(--text-muted)"
    }
  }, "A hand-picked selection, updated weekly. The full stock lives on BeForward \u2014 ask about any car and we'll confirm availability within 24 hours."), /*#__PURE__*/React.createElement(Badge, {
    tone: "muted",
    size: "sm"
  }, "Not a live catalogue")), /*#__PURE__*/React.createElement(CarFinder, {
    floating: true,
    whatsappNumber: d.whatsapp
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "var(--card-gap)"
    }
  }, d.cars.slice(0, 6).map(c => /*#__PURE__*/React.createElement(CarCard, _extends({
    key: c.refNo
  }, c, {
    fit: "cover",
    whatsappNumber: d.whatsapp,
    note: "FOB Japan. Subject to availability on BeForward."
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      gap: "var(--inline-gap)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    icon: "arrow-right",
    iconPosition: "right",
    href: "https://www.beforward.jp",
    target: "_blank"
  }, "Browse full BeForward stock"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => onNavigate({
      href: "#featured"
    })
  }, "See our weekly picks"))));
}
function Testimonials() {
  const d = window.JOJO_DATA;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-page)",
      padding: "var(--section-y) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "jojo-container",
    style: {
      display: "grid",
      gap: "var(--space-10)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 14,
      maxWidth: "46ch"
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, null, "What buyers say"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      font: "var(--type-h2)",
      letterSpacing: "var(--track-h2)",
      color: "var(--text-strong)"
    }
  }, "Three threads that ended in a delivery.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "var(--card-gap)"
    }
  }, d.testimonials.map(t => /*#__PURE__*/React.createElement(TestimonialCard, _extends({
    key: t.name
  }, t, {
    sample: true
  }))))));
}
function GroupCompanies() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-page-alt)",
      borderTop: "1px solid var(--border-hairline)",
      padding: "var(--section-y) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "jojo-container",
    style: {
      display: "grid",
      gap: "var(--space-10)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 14,
      maxWidth: "46ch"
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    tone: "muted"
  }, "Group companies"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      font: "var(--type-h2)",
      letterSpacing: "var(--track-h2)",
      color: "var(--text-strong)"
    }
  }, "The rest of the group.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--card-gap)"
    }
  }, /*#__PURE__*/React.createElement(CompanyCard, {
    logo: "assets/logo/mi-logistics-trimmed.png",
    logoHeight: 40,
    name: "MI Logistics",
    tagline: "Domestic transport \xB7 Pakistan",
    linkLabel: "Get a freight quote",
    href: "logistics.html"
  }, "Our sister company moves vehicles and cargo inside Pakistan \u2014 port clearing, upcountry delivery and fleet transport, city to city."), /*#__PURE__*/React.createElement(CompanyCard, {
    logo: "https://jojo-international.com/assets/images/clients/logo-1.png",
    logoHeight: 44,
    name: "JOJO Techzone",
    tagline: "Technology arm",
    linkLabel: "Visit jojotechzone.com",
    href: "http://jojotechzone.com/",
    target: "_blank"
  }, "The group's technology company. Logo hot-linked from the live JOJO site \u2014 download it into ", /*#__PURE__*/React.createElement("code", null, "assets/logo/"), " before launch."))));
}
function Home({
  onNavigate
}) {
  const d = window.JOJO_DATA;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Hero, {
    onNavigate: onNavigate
  }), /*#__PURE__*/React.createElement(StatBar, {
    stats: d.stats
  }), /*#__PURE__*/React.createElement(HowItWorksPreview, {
    onNavigate: onNavigate
  }), /*#__PURE__*/React.createElement(SplitSection, {
    label: "Who we are",
    title: "A Karachi office, a Japanese supply chain, one WhatsApp thread.",
    background: "var(--surface-page)",
    diagonal: true,
    mediaSrc: "https://jojo-international.com/assets/images/who-we-are-image.png",
    mediaAlt: "JOJO International sales floor",
    aside: /*#__PURE__*/React.createElement(CheckList, {
      items: ["Authorized BeForward sales agent since 2016", "Inspection report and photos before you pay", "Export paperwork and shipping handled end to end", "One WhatsApp thread from first question to delivery"]
    }),
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      icon: "message-circle",
      href: "https://wa.me/" + d.whatsapp,
      target: "_blank"
    }, "Chat on WhatsApp"), /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      onClick: () => onNavigate({
        href: "#about"
      })
    }, "About us"))
  }, /*#__PURE__*/React.createElement("p", null, "We started in 2016 with one office in North Nazimabad and a BeForward agency. Today most of our buyers are in South Africa, Zambia and Zimbabwe \u2014 people importing their first car and understandably nervous about sending money to another continent."), /*#__PURE__*/React.createElement("p", null, "So we do the boring things properly: inspection photos before payment, documents checked twice, and one person on your thread from the first question to the bill of lading.")), /*#__PURE__*/React.createElement(FeaturedPreview, {
    onNavigate: onNavigate
  }), /*#__PURE__*/React.createElement(Testimonials, null), /*#__PURE__*/React.createElement(GroupCompanies, null), /*#__PURE__*/React.createElement(CtaBand, {
    secondary: "See how it works",
    secondaryHref: "#how-it-works"
  }));
}
Object.assign(window, {
  Home,
  Hero,
  HowItWorksPreview,
  FeaturedPreview,
  Testimonials,
  GroupCompanies
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/app/home.jsx", error: String((e && e.message) || e) }); }

// site/app/how-it-works.jsx
try { (() => {
const {
  Button,
  SectionLabel,
  TimelineStep,
  Accordion,
  WindowFrame,
  CheckList,
  MetaTable,
  StatBar
} = window.JOJOInternationalDesignSystem_e58ef5;
function HowItWorks({
  onNavigate
}) {
  const d = window.JOJO_DATA;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHero, {
    label: "How it works",
    title: "Want to import your first car? Here's the whole process.",
    meta: /*#__PURE__*/React.createElement(MetaTable, {
      layout: "inline",
      style: {
        marginTop: "var(--space-4)"
      },
      rows: [{
        key: "Typical timeline",
        value: "6–10 weeks, payment to port"
      }, {
        key: "You pay",
        value: "BeForward Japan, directly"
      }, {
        key: "We handle",
        value: "Sourcing, inspection, documents, shipping"
      }]
    })
  }, "No jargon and nothing hidden. Four steps, what each one costs you in time, and who holds your money at every stage."), /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-page)",
      padding: "var(--section-y) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "jojo-container",
    style: {
      display: "grid",
      gridTemplateColumns: "1.4fr 1fr",
      gap: "var(--space-16)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(TimelineStep, {
    index: "01",
    icon: "car",
    title: "Choose your car",
    aside: "Don't know the model yet? Send your budget and what you need it for \u2014 school runs, long-distance, load-carrying \u2014 and we'll shortlist three options."
  }, "Browse BeForward's Japanese stock and send us the listing link, or just describe what you want. We check the auction grade, mileage and service history before we quote."), /*#__PURE__*/React.createElement(TimelineStep, {
    index: "02",
    icon: "message-circle",
    title: "Message us on WhatsApp",
    aside: "No account, no forms, no callbacks you have to wait for. One thread, one person."
  }, "We confirm the car is still available and quote you a landed price for your port \u2014 car, inland transport in Japan, ocean freight and documents, itemised."), /*#__PURE__*/React.createElement(TimelineStep, {
    index: "03",
    icon: "file-text",
    title: "Payment and paperwork",
    aside: "Your payment goes to BeForward Japan directly \u2014 never to JOJO. We are their authorized agent, not a middleman holding your funds."
  }, "Once you're happy, you pay BeForward for the car. We prepare and check everything around it: export certificate, third-party inspection report, deregistration papers and the bill of lading."), /*#__PURE__*/React.createElement(TimelineStep, {
    index: "04",
    icon: "ship",
    title: "Shipping, customs, delivery",
    last: true,
    aside: "We stay on the thread until the car is in your hands \u2014 including the awkward days when the vessel is late."
  }, "We book the sailing and send you the vessel name and ETA. When it berths, your clearing agent takes over \u2014 and we hand across every document they'll ask for.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-6)",
      position: "sticky",
      top: "calc(var(--nav-h) + var(--space-6))"
    }
  }, /*#__PURE__*/React.createElement(WindowFrame, {
    title: "Export document set",
    meta: "handled by JOJO"
  }, /*#__PURE__*/React.createElement(CheckList, {
    items: ["Export certificate", "Third-party inspection report", "Deregistration papers", "Bill of lading", "Commercial invoice"]
  })), /*#__PURE__*/React.createElement(WindowFrame, {
    title: "What you handle",
    meta: "at your end"
  }, /*#__PURE__*/React.createElement(CheckList, {
    tone: "muted",
    icon: "minus",
    items: ["Import duty and clearing fees", "A local clearing agent", "Roadworthy / registration"]
  }))))), /*#__PURE__*/React.createElement(StatBar, {
    stats: [{
      value: "6–10",
      label: "Weeks, payment to port",
      animate: false
    }, {
      value: 5,
      label: "Documents we prepare"
    }, {
      value: "24h",
      label: "Quote turnaround",
      animate: false
    }]
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-page)",
      padding: "var(--section-y) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "jojo-container",
    style: {
      display: "grid",
      gap: "var(--space-10)",
      maxWidth: 900
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    rule: true
  }, "Questions"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      font: "var(--type-h2)",
      letterSpacing: "var(--track-h2)",
      color: "var(--text-strong)"
    }
  }, "The things buyers actually ask.")), /*#__PURE__*/React.createElement(Accordion, {
    items: d.faqs
  }))), /*#__PURE__*/React.createElement(CtaBand, {
    title: "Still have a question?",
    body: "Ask it on WhatsApp. We'd rather answer it now than have you guess.",
    primary: "Ask on WhatsApp",
    secondary: "Browse featured cars",
    secondaryHref: "#featured"
  }));
}
Object.assign(window, {
  HowItWorks
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/app/how-it-works.jsx", error: String((e && e.message) || e) }); }

// site/app/shell.jsx
try { (() => {
const {
  InfoStrip,
  NavBar,
  Badge,
  Button,
  SectionLabel
} = window.JOJOInternationalDesignSystem_e58ef5;

/** Site chrome: info strip, sticky nav, page body, footer. */
function Shell({
  page,
  onNavigate,
  children
}) {
  const d = window.JOJO_DATA;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100%",
      background: "var(--surface-page)"
    }
  }, /*#__PURE__*/React.createElement(InfoStrip, {
    items: [{
      icon: "message-circle",
      text: d.phoneDisplay,
      href: "https://wa.me/" + d.whatsapp
    }, {
      icon: "mail",
      text: d.email,
      href: "mailto:" + d.email
    }, {
      icon: "clock",
      text: d.hours
    }],
    right: /*#__PURE__*/React.createElement(Badge, {
      tone: "gradient",
      size: "sm",
      icon: "shield-check"
    }, "BeForward Authorized Agent")
  }), /*#__PURE__*/React.createElement(NavBar, {
    logoSrc: "assets/logo/jojo-international-white.png",
    logoHeight: 36,
    links: d.links,
    activeHref: page,
    ctaHref: "https://wa.me/" + d.whatsapp,
    onNavigate: onNavigate
  }), /*#__PURE__*/React.createElement("main", null, children), /*#__PURE__*/React.createElement(Footer, {
    onNavigate: onNavigate
  }));
}

/** Small page banner used by every page except Home. */
function PageHero({
  label,
  title,
  children,
  meta
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-section)",
      borderBottom: "1px solid var(--border-hairline)",
      padding: "var(--space-20) 0 var(--space-16)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "jojo-container",
    style: {
      display: "grid",
      gap: "var(--space-5)",
      maxWidth: 900
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    rule: true
  }, label), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      font: "var(--type-h1)",
      letterSpacing: "var(--track-h1)",
      color: "var(--text-strong)"
    }
  }, title), children ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: "var(--type-body-lg)",
      color: "var(--text-muted)",
      maxWidth: "58ch"
    }
  }, children) : null, meta));
}

/** Repeating conversion band. Every page ends with one. */
function CtaBand({
  title = "Ready to ask about a car?",
  body = "Send us the model and your budget. We reply on WhatsApp, usually within a few hours.",
  primary = "Chat on WhatsApp",
  secondary,
  secondaryHref
}) {
  const d = window.JOJO_DATA;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-page-alt)",
      borderTop: "1px solid var(--border-hairline)",
      padding: "var(--section-y) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "jojo-container",
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "var(--space-10)",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 12,
      maxWidth: "48ch"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      font: "var(--type-h2)",
      letterSpacing: "var(--track-h2)",
      color: "var(--text-strong)"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: "var(--type-body-lg)",
      color: "var(--text-muted)"
    }
  }, body)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--inline-gap)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    icon: "message-circle",
    href: "https://wa.me/" + d.whatsapp,
    target: "_blank"
  }, primary), secondary ? /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "outline",
    href: secondaryHref,
    icon: "arrow-right",
    iconPosition: "right"
  }, secondary) : null)));
}
Object.assign(window, {
  Shell,
  PageHero,
  CtaBand
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/app/shell.jsx", error: String((e && e.message) || e) }); }

// site/mi/coverage.jsx
try { (() => {
const {
  SectionLabel,
  StepCard,
  CheckList,
  WindowFrame,
  TrustRow,
  Badge
} = window.JOJOInternationalDesignSystem_e58ef5;
function Coverage() {
  const d = window.MI_DATA;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-section)",
      borderBlock: "1px solid var(--border-hairline)",
      padding: "var(--section-y) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "jojo-container",
    style: {
      display: "grid",
      gap: "var(--space-12)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 14,
      maxWidth: "46ch"
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    rule: true
  }, "Coverage & fleet"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      font: "var(--type-h2)",
      letterSpacing: "var(--track-h2)",
      color: "var(--text-strong)"
    }
  }, "Karachi port to anywhere upcountry.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-12)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: "var(--radius-lg)",
      border: "1px solid var(--border-hairline)",
      background: "var(--surface-inset)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "radial-gradient(circle at 50% 68%, rgba(78,116,255,0.16) 0%, rgba(78,116,255,0) 66%)",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 16,
      top: 14,
      zIndex: 2,
      display: "grid",
      gap: 3
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-label)",
      letterSpacing: "var(--track-label)",
      textTransform: "uppercase",
      color: "var(--text-subtle)"
    }
  }, "Coverage"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-sm)",
      color: "var(--text-body)"
    }
  }, "Karachi port \u2192 upcountry")), /*#__PURE__*/React.createElement("pakistan-map-3d", {
    style: {
      display: "block",
      height: 400
    }
  })), /*#__PURE__*/React.createElement(WindowFrame, {
    title: "Cities served",
    meta: d.cities.length + " routes"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 8
    }
  }, d.cities.map(c => /*#__PURE__*/React.createElement(Badge, {
    key: c,
    tone: "soft",
    size: "sm"
  }, c))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--card-gap)"
    }
  }, d.fleet.map(item => /*#__PURE__*/React.createElement(StepCard, {
    key: item.title,
    icon: item.icon,
    title: item.title
  }, item.body)), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 190,
      borderRadius: "var(--radius-lg)",
      border: "1.5px dashed var(--border-soft)",
      background: "var(--surface-inset)",
      display: "grid",
      placeItems: "center",
      gap: 6,
      textAlign: "center",
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-label)",
      letterSpacing: "var(--track-label)",
      textTransform: "uppercase",
      color: "var(--text-subtle)"
    }
  }, "Fleet photo"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-meta)",
      color: "var(--text-subtle)",
      maxWidth: "38ch",
      lineHeight: 1.7
    }
  }, "Real photograph of an MI Logistics carrier \u2014 no stock truck.")))), /*#__PURE__*/React.createElement(TrustRow, {
    note: "Every job includes",
    items: d.promises
  })));
}
Object.assign(window, {
  Coverage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/mi/coverage.jsx", error: String((e && e.message) || e) }); }

// site/mi/data.js
try { (() => {
window.MI_DATA = {
  whatsapp: "923000000000",
  phoneDisplay: "+92 3XX XXX XXXX",
  email: "quotes@milogistics.co",
  hours: "Mon–Sat · 9am–8pm PKT",
  cities: ["Karachi", "Hyderabad", "Sukkur", "Multan", "Lahore", "Faisalabad", "Islamabad", "Rawalpindi", "Peshawar", "Quetta"],
  cargoTypes: ["Vehicle (single)", "Vehicle (multiple)", "General cargo", "Containerised", "Heavy machinery"],
  fleet: [{
    icon: "truck",
    title: "Car carriers",
    body: "Single-deck and double-deck carriers for 2–8 vehicles per trip."
  }, {
    icon: "container",
    title: "Flatbed & container",
    body: "20ft and 40ft container haulage from Karachi port upcountry."
  }, {
    icon: "package",
    title: "General freight",
    body: "Palletised and loose cargo, part-load or full-truck."
  }],
  promises: [{
    icon: "shield-check",
    label: "Cargo insured in transit"
  }, {
    icon: "map-pin",
    label: "Port clearing at Karachi"
  }, {
    icon: "clock",
    label: "Upcountry delivery in 2–4 days"
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/mi/data.js", error: String((e && e.message) || e) }); }

// site/mi/pakistan-map-3d.js
try { (() => {
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
const CITIES = [{
  name: "Karachi",
  lon: 67.0011,
  lat: 24.8607,
  hub: true
}, {
  name: "Hyderabad",
  lon: 68.3737,
  lat: 25.396
}, {
  name: "Sukkur",
  lon: 68.8574,
  lat: 27.7052
}, {
  name: "Quetta",
  lon: 67.0099,
  lat: 30.1798
}, {
  name: "Multan",
  lon: 71.5249,
  lat: 30.1575
}, {
  name: "Faisalabad",
  lon: 73.0791,
  lat: 31.4504
}, {
  name: "Lahore",
  lon: 74.3587,
  lat: 31.5204,
  hub: true
}, {
  name: "Islamabad",
  lon: 73.0479,
  lat: 33.6844,
  hub: true
}, {
  name: "Rawalpindi",
  lon: 73.0169,
  lat: 33.5651
}, {
  name: "Peshawar",
  lon: 71.5785,
  lat: 34.0151
}];
let atlasPromise = null;
function loadPakistan() {
  if (atlasPromise) return atlasPromise;
  atlasPromise = fetch(ATLAS).then(r => r.json()).then(topo => {
    const fc = window.topojson.feature(topo, topo.objects.countries);
    const pk = fc.features.find(d => String(d.id) === PAKISTAN_ID || d.properties && d.properties.name === "Pakistan");
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
    const io = new IntersectionObserver(entries => {
      if (entries.some(e => e.isIntersecting)) {
        io.disconnect();
        this._build();
      }
    }, {
      rootMargin: "300px"
    });
    io.observe(this);
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
    const pts = CITIES.map(c => {
      const xy = projection([c.lon, c.lat]);
      return {
        ...c,
        x: xy[0],
        y: xy[1]
      };
    });
    const karachi = pts[0];
    pts.slice(1).forEach(c => {
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
    pts.forEach(c => {
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
    pts.filter(c => c.hub).forEach(c => {
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
    let dragging = false,
      lx = 0,
      ly = 0;
    stage.addEventListener("pointerdown", e => {
      dragging = true;
      this._idle = false;
      lx = e.clientX;
      ly = e.clientY;
      stage.style.cursor = "grabbing";
      stage.setPointerCapture(e.pointerId);
    });
    stage.addEventListener("pointermove", e => {
      if (!dragging) return;
      this._rz += (e.clientX - lx) * 0.4;
      this._rx = Math.max(14, Math.min(84, this._rx - (e.clientY - ly) * 0.3));
      lx = e.clientX;
      ly = e.clientY;
      this._apply();
    });
    const end = () => {
      if (!dragging) return;
      dragging = false;
      stage.style.cursor = "grab";
      clearTimeout(this._idleTimer);
      this._idleTimer = setTimeout(() => {
        this._idle = true;
      }, 4000);
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
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/mi/pakistan-map-3d.js", error: String((e && e.message) || e) }); }

// site/mi/quote-form.jsx
try { (() => {
const {
  Select,
  Input,
  Button,
  SectionLabel,
  Badge
} = window.JOJOInternationalDesignSystem_e58ef5;
function QuoteForm({
  floating = true
}) {
  const d = window.MI_DATA;
  const [q, setQ] = React.useState({
    from: "",
    to: "",
    cargo: "",
    qty: "",
    date: ""
  });
  const set = k => e => setQ(s => ({
    ...s,
    [k]: e.target.value
  }));
  const message = "Hi MI Logistics, I need a transport quote." + (q.from ? " Pickup: " + q.from + "." : "") + (q.to ? " Drop-off: " + q.to + "." : "") + (q.cargo ? " Cargo: " + q.cargo + "." : "") + (q.qty ? " Quantity/weight: " + q.qty + "." : "") + (q.date ? " Preferred date: " + q.date + "." : "");
  const href = "https://wa.me/" + d.whatsapp + "?text=" + encodeURIComponent(message);
  return /*#__PURE__*/React.createElement("form", {
    onSubmit: e => e.preventDefault(),
    style: {
      background: "var(--surface-card)",
      border: "1px solid " + (floating ? "var(--border-soft)" : "var(--border-hairline)"),
      borderRadius: "var(--radius-lg)",
      boxShadow: floating ? "var(--shadow-float)" : "var(--shadow-card)",
      padding: "var(--card-pad-lg)",
      display: "grid",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, null, "Get a quote"), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      font: "var(--type-h4)",
      letterSpacing: "var(--track-h4)",
      color: "var(--text-strong)"
    }
  }, "Where is it going?")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(Select, {
    label: "Pickup city",
    options: d.cities,
    placeholder: "Select city",
    value: q.from,
    onChange: set("from")
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Drop-off city",
    options: d.cities,
    placeholder: "Select city",
    value: q.to,
    onChange: set("to")
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Cargo type",
    options: d.cargoTypes,
    placeholder: "Select type",
    value: q.cargo,
    onChange: set("cargo"),
    style: {
      gridColumn: "1 / -1"
    }
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Vehicles / weight",
    placeholder: "e.g. 2 cars, or 12 tonnes",
    value: q.qty,
    onChange: set("qty")
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Preferred date",
    type: "date",
    value: q.date,
    onChange: set("date")
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    icon: "message-circle",
    href: href,
    target: "_blank",
    fullWidth: true
  }, "Send on WhatsApp"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: "var(--type-meta)",
      color: "var(--text-subtle)",
      lineHeight: 1.6
    }
  }, "This opens WhatsApp with your route pre-filled. Rates depend on route, load and date, so we quote per job rather than showing a table we'd have to keep correcting.")), /*#__PURE__*/React.createElement(Badge, {
    tone: "muted",
    size: "sm"
  }, "Placeholder rate policy \u2014 confirm before launch"));
}
Object.assign(window, {
  QuoteForm
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/mi/quote-form.jsx", error: String((e && e.message) || e) }); }

// site/mi/quote-tool.jsx
try { (() => {
const {
  Button,
  Badge,
  SectionLabel,
  StatBar,
  Icon,
  Accordion,
  WindowFrame,
  InfoStrip,
  Input
} = window.JOJOInternationalDesignSystem_e58ef5;
function MiHeader() {
  const d = window.MI_DATA;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(InfoStrip, {
    items: [{
      icon: "message-circle",
      text: d.phoneDisplay,
      href: "https://wa.me/" + d.whatsapp
    }, {
      icon: "mail",
      text: d.email,
      href: "mailto:" + d.email
    }, {
      icon: "clock",
      text: d.hours
    }],
    right: /*#__PURE__*/React.createElement(Badge, {
      tone: "muted",
      size: "sm"
    }, "A JOJO International group company")
  }), /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 40,
      background: "var(--surface-glass)",
      backdropFilter: "blur(var(--blur-nav))",
      borderBottom: "1px solid var(--border-hairline)",
      boxShadow: "var(--shadow-nav)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "jojo-container",
    "data-mi-bar": true,
    style: {
      minHeight: "var(--nav-h)",
      display: "flex",
      alignItems: "center",
      gap: "var(--space-6)",
      flexWrap: "wrap",
      paddingBlock: 10
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/logo/mi-logistics-trimmed.png",
    alt: "MI Logistics",
    style: {
      height: 36,
      width: "auto"
    }
  }), /*#__PURE__*/React.createElement("nav", {
    "data-mi-nav": true,
    style: {
      marginLeft: "auto",
      display: "flex",
      gap: "var(--space-7)"
    }
  }, ["Quote", "Coverage", "Fleet", "Tracking"].map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#" + l.toLowerCase(),
    style: {
      font: "var(--type-sm)",
      fontWeight: "var(--weight-medium)",
      color: "var(--text-muted)",
      textDecoration: "none"
    }
  }, l))), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    icon: "message-circle",
    href: "https://wa.me/" + window.MI_DATA.whatsapp,
    target: "_blank"
  }, "Get a quote"))));
}
function TrackingBlock() {
  return /*#__PURE__*/React.createElement("section", {
    id: "tracking",
    style: {
      background: "var(--surface-page-alt)",
      borderTop: "1px solid var(--border-hairline)",
      padding: "var(--section-y) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "jojo-container",
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-16)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 16,
      maxWidth: "44ch"
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    tone: "muted"
  }, "Tracking"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      font: "var(--type-h2)",
      letterSpacing: "var(--track-h2)",
      color: "var(--text-strong)"
    }
  }, "Shipment tracking is a phase-two feature."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: "var(--type-body-lg)",
      color: "var(--text-muted)"
    }
  }, "The brief lists this as optional and later. Until it exists, ask for a status on WhatsApp and you'll get a photo, not a status code."), /*#__PURE__*/React.createElement(Badge, {
    tone: "muted",
    size: "sm"
  }, "Not built \u2014 shown disabled on purpose")), /*#__PURE__*/React.createElement(WindowFrame, {
    title: "Track a shipment",
    meta: "phase 2"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-4)",
      opacity: 0.5,
      pointerEvents: "none"
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Reference number",
    placeholder: "MI-00000",
    icon: "search"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    fullWidth: true,
    disabled: true
  }, "Check status")))));
}
function QuoteTool() {
  const d = window.MI_DATA;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-page)",
      minHeight: "100%"
    }
  }, /*#__PURE__*/React.createElement(MiHeader, null), /*#__PURE__*/React.createElement("section", {
    id: "quote",
    style: {
      position: "relative",
      overflow: "hidden",
      padding: "var(--space-20) 0 var(--section-y)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: -200,
      left: -140,
      width: 720,
      height: 720,
      borderRadius: "50%",
      background: "radial-gradient(circle, rgba(78,116,255,0.16) 0%, rgba(78,116,255,0) 62%)",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "jojo-container",
    style: {
      position: "relative",
      display: "grid",
      gridTemplateColumns: "1fr 460px",
      gap: "var(--space-12)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/logo/mi-logistics-trimmed.png",
    alt: "MI Logistics",
    style: {
      height: 66,
      width: "auto",
      justifySelf: "start"
    }
  }), /*#__PURE__*/React.createElement(SectionLabel, {
    rule: true
  }, "Domestic transport \xB7 Pakistan"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      font: "var(--type-h1)",
      letterSpacing: "var(--track-h1)",
      color: "var(--text-strong)"
    }
  }, "We carry your trust, city to city."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: "var(--type-body-lg)",
      color: "var(--text-body)",
      maxWidth: "50ch"
    }
  }, "MI Logistics moves vehicles and cargo inside Pakistan \u2014 Karachi port clearing, upcountry delivery and fleet transport. Tell us the route and we'll quote it on WhatsApp."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--inline-gap)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    icon: "message-circle",
    href: "https://wa.me/" + d.whatsapp,
    target: "_blank"
  }, "Get a quote on WhatsApp"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "outline",
    href: "#coverage"
  }, "See coverage"))), /*#__PURE__*/React.createElement(QuoteForm, null))), /*#__PURE__*/React.createElement(StatBar, {
    stats: [{
      value: 10,
      label: "Cities served"
    }, {
      value: "2–4",
      label: "Days upcountry",
      animate: false
    }, {
      value: 100,
      suffix: "%",
      label: "Cargo insured"
    }]
  }), /*#__PURE__*/React.createElement("div", {
    id: "coverage"
  }, /*#__PURE__*/React.createElement(Coverage, null)), /*#__PURE__*/React.createElement(TrackingBlock, null), /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-page)",
      padding: "var(--section-y) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "jojo-container",
    style: {
      display: "grid",
      gap: "var(--space-10)",
      maxWidth: 860
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    rule: true
  }, "Questions"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      font: "var(--type-h2)",
      letterSpacing: "var(--track-h2)",
      color: "var(--text-strong)"
    }
  }, "Before you book.")), /*#__PURE__*/React.createElement(Accordion, {
    items: [{
      question: "How is a rate worked out?",
      answer: "Route distance, load type, weight and how urgently you need it. Vehicle carriers price per unit; general freight prices per tonne or per truck."
    }, {
      question: "Do you clear cargo at Karachi port?",
      answer: "Yes — port clearing and onward haulage in one job, which is usually cheaper than arranging them separately."
    }, {
      question: "Is my cargo insured?",
      answer: "Transit insurance is included on every job. Declared value determines the cover, so tell us what it's worth."
    }, {
      question: "How does this relate to JOJO International?",
      answer: "Same group. JOJO handles Japanese car exports to international buyers; MI Logistics handles transport inside Pakistan."
    }]
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-page-alt)",
      borderTop: "1px solid var(--border-hairline)",
      padding: "var(--section-y) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "jojo-container",
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "var(--space-10)",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 12,
      maxWidth: "46ch"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      font: "var(--type-h2)",
      letterSpacing: "var(--track-h2)",
      color: "var(--text-strong)"
    }
  }, "Got a load to move this week?"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: "var(--type-body-lg)",
      color: "var(--text-muted)"
    }
  }, "Send the route and the date. We'll come back with a number.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--inline-gap)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    icon: "message-circle",
    href: "https://wa.me/" + d.whatsapp,
    target: "_blank"
  }, "Get a quote on WhatsApp"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "outline",
    icon: "arrow-right",
    iconPosition: "right",
    href: "index.html"
  }, "JOJO International")))), /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--surface-page)",
      borderTop: "1px solid var(--border-hairline)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "jojo-container",
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 16,
      alignItems: "center",
      padding: "var(--space-6) var(--gutter)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/logo/mi-logistics-trimmed.png",
    alt: "MI Logistics",
    style: {
      height: 34
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-meta)",
      color: "var(--text-subtle)"
    }
  }, "\xA9 2026 MI Logistics \xB7 A JOJO International group company"), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: "auto",
      font: "var(--type-meta)",
      color: "var(--text-subtle)"
    }
  }, "Domestic transport across Pakistan \xB7 Karachi port clearing"))));
}
Object.assign(window, {
  QuoteTool,
  MiHeader,
  TrackingBlock
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/mi/quote-tool.jsx", error: String((e && e.message) || e) }); }

// site/motion.js
try { (() => {
/* Scroll-reveal + intro splash teardown. ~1KB, no dependencies.

   Reveal is opt-in from JS only: the hiding rule is scoped to html.jojo-reveal,
   which this file adds. If JS never runs, every section stays visible. */
(function () {
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---- intro splash ---- */
  var splash = document.getElementById("jojo-splash");
  if (splash) {
    if (reduce) splash.remove();else {
      var kill = function () {
        splash && splash.remove();
        splash = null;
      };
      splash.addEventListener("animationend", function (e) {
        if (e.target === splash) kill();
      });
      setTimeout(kill, 2000); /* belt and braces */
    }
  }
  if (reduce) return;

  /* ---- scroll reveal ---- */
  var MAX = 160;
  var tagged = 0;
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (!en.isIntersecting) return;
      en.target.setAttribute("data-revealed", "");
      io.unobserve(en.target);
    });
  }, {
    rootMargin: "0px 0px -6% 0px",
    threshold: 0.04
  });
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
        el.style.setProperty("--reveal-delay", Math.min(i, 5) * 55 + "ms");
        io.observe(el);
        if (++tagged > MAX) return;
      }
    }
  }
  document.documentElement.classList.add("jojo-reveal");
  var root = document.getElementById("root") || document.body;
  new MutationObserver(function () {
    tag();
  }).observe(root, {
    childList: true,
    subtree: true
  });
  tag();
  requestAnimationFrame(tag);
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/motion.js", error: String((e && e.message) || e) }); }

// ui_kits/mi-logistics/Coverage.jsx
try { (() => {
const {
  SectionLabel,
  StepCard,
  CheckList,
  WindowFrame,
  TrustRow,
  Badge
} = window.JOJOInternationalDesignSystem_e58ef5;
function Coverage() {
  const d = window.MI_DATA;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-section)",
      borderBlock: "1px solid var(--border-hairline)",
      padding: "var(--section-y) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "jojo-container",
    style: {
      display: "grid",
      gap: "var(--space-12)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 14,
      maxWidth: "46ch"
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    rule: true
  }, "Coverage & fleet"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      font: "var(--type-h2)",
      letterSpacing: "var(--track-h2)",
      color: "var(--text-strong)"
    }
  }, "Karachi port to anywhere upcountry.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-12)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: "var(--radius-lg)",
      border: "1px solid var(--border-hairline)",
      background: "var(--surface-inset)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "radial-gradient(circle at 50% 68%, rgba(78,116,255,0.16) 0%, rgba(78,116,255,0) 66%)",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 16,
      top: 14,
      zIndex: 2,
      display: "grid",
      gap: 3
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-label)",
      letterSpacing: "var(--track-label)",
      textTransform: "uppercase",
      color: "var(--text-subtle)"
    }
  }, "Coverage"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-sm)",
      color: "var(--text-body)"
    }
  }, "Karachi port \u2192 upcountry")), /*#__PURE__*/React.createElement("pakistan-map-3d", {
    style: {
      display: "block",
      height: 400
    }
  })), /*#__PURE__*/React.createElement(WindowFrame, {
    title: "Cities served",
    meta: d.cities.length + " routes"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 8
    }
  }, d.cities.map(c => /*#__PURE__*/React.createElement(Badge, {
    key: c,
    tone: "soft",
    size: "sm"
  }, c))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--card-gap)"
    }
  }, d.fleet.map(item => /*#__PURE__*/React.createElement(StepCard, {
    key: item.title,
    icon: item.icon,
    title: item.title
  }, item.body)), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 190,
      borderRadius: "var(--radius-lg)",
      border: "1.5px dashed var(--border-soft)",
      background: "var(--surface-inset)",
      display: "grid",
      placeItems: "center",
      gap: 6,
      textAlign: "center",
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-label)",
      letterSpacing: "var(--track-label)",
      textTransform: "uppercase",
      color: "var(--text-subtle)"
    }
  }, "Fleet photo"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-meta)",
      color: "var(--text-subtle)",
      maxWidth: "38ch",
      lineHeight: 1.7
    }
  }, "Real photograph of an MI Logistics carrier \u2014 no stock truck.")))), /*#__PURE__*/React.createElement(TrustRow, {
    note: "Every job includes",
    items: d.promises
  })));
}
Object.assign(window, {
  Coverage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mi-logistics/Coverage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mi-logistics/QuoteForm.jsx
try { (() => {
const {
  Select,
  Input,
  Button,
  SectionLabel,
  Badge
} = window.JOJOInternationalDesignSystem_e58ef5;
function QuoteForm({
  floating = true
}) {
  const d = window.MI_DATA;
  const [q, setQ] = React.useState({
    from: "",
    to: "",
    cargo: "",
    qty: "",
    date: ""
  });
  const set = k => e => setQ(s => ({
    ...s,
    [k]: e.target.value
  }));
  const message = "Hi MI Logistics, I need a transport quote." + (q.from ? " Pickup: " + q.from + "." : "") + (q.to ? " Drop-off: " + q.to + "." : "") + (q.cargo ? " Cargo: " + q.cargo + "." : "") + (q.qty ? " Quantity/weight: " + q.qty + "." : "") + (q.date ? " Preferred date: " + q.date + "." : "");
  const href = "https://wa.me/" + d.whatsapp + "?text=" + encodeURIComponent(message);
  return /*#__PURE__*/React.createElement("form", {
    onSubmit: e => e.preventDefault(),
    style: {
      background: "var(--surface-card)",
      border: "1px solid " + (floating ? "var(--border-soft)" : "var(--border-hairline)"),
      borderRadius: "var(--radius-lg)",
      boxShadow: floating ? "var(--shadow-float)" : "var(--shadow-card)",
      padding: "var(--card-pad-lg)",
      display: "grid",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, null, "Get a quote"), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      font: "var(--type-h4)",
      letterSpacing: "var(--track-h4)",
      color: "var(--text-strong)"
    }
  }, "Where is it going?")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(Select, {
    label: "Pickup city",
    options: d.cities,
    placeholder: "Select city",
    value: q.from,
    onChange: set("from")
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Drop-off city",
    options: d.cities,
    placeholder: "Select city",
    value: q.to,
    onChange: set("to")
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Cargo type",
    options: d.cargoTypes,
    placeholder: "Select type",
    value: q.cargo,
    onChange: set("cargo"),
    style: {
      gridColumn: "1 / -1"
    }
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Vehicles / weight",
    placeholder: "e.g. 2 cars, or 12 tonnes",
    value: q.qty,
    onChange: set("qty")
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Preferred date",
    type: "date",
    value: q.date,
    onChange: set("date")
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    icon: "message-circle",
    href: href,
    target: "_blank",
    fullWidth: true
  }, "Send on WhatsApp"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: "var(--type-meta)",
      color: "var(--text-subtle)",
      lineHeight: 1.6
    }
  }, "This opens WhatsApp with your route pre-filled. Rates depend on route, load and date, so we quote per job rather than showing a table we'd have to keep correcting.")), /*#__PURE__*/React.createElement(Badge, {
    tone: "muted",
    size: "sm"
  }, "Placeholder rate policy \u2014 confirm before launch"));
}
Object.assign(window, {
  QuoteForm
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mi-logistics/QuoteForm.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mi-logistics/QuoteTool.jsx
try { (() => {
const {
  Button,
  Badge,
  SectionLabel,
  StatBar,
  Icon,
  Accordion,
  WindowFrame,
  InfoStrip,
  Input
} = window.JOJOInternationalDesignSystem_e58ef5;
function MiHeader() {
  const d = window.MI_DATA;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(InfoStrip, {
    items: [{
      icon: "message-circle",
      text: d.phoneDisplay,
      href: "https://wa.me/" + d.whatsapp
    }, {
      icon: "mail",
      text: d.email,
      href: "mailto:" + d.email
    }, {
      icon: "clock",
      text: d.hours
    }],
    right: /*#__PURE__*/React.createElement(Badge, {
      tone: "muted",
      size: "sm"
    }, "A JOJO International group company")
  }), /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 40,
      background: "var(--surface-glass)",
      backdropFilter: "blur(var(--blur-nav))",
      borderBottom: "1px solid var(--border-hairline)",
      boxShadow: "var(--shadow-nav)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "jojo-container",
    "data-mi-bar": true,
    style: {
      minHeight: "var(--nav-h)",
      display: "flex",
      alignItems: "center",
      gap: "var(--space-6)",
      flexWrap: "wrap",
      paddingBlock: 10
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo/mi-logistics-trimmed.png",
    alt: "MI Logistics",
    style: {
      height: 36,
      width: "auto"
    }
  }), /*#__PURE__*/React.createElement("nav", {
    "data-mi-nav": true,
    style: {
      marginLeft: "auto",
      display: "flex",
      gap: "var(--space-7)"
    }
  }, ["Quote", "Coverage", "Fleet", "Tracking"].map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#" + l.toLowerCase(),
    style: {
      font: "var(--type-sm)",
      fontWeight: "var(--weight-medium)",
      color: "var(--text-muted)",
      textDecoration: "none"
    }
  }, l))), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    icon: "message-circle",
    href: "https://wa.me/" + window.MI_DATA.whatsapp,
    target: "_blank"
  }, "Get a quote"))));
}
function TrackingBlock() {
  return /*#__PURE__*/React.createElement("section", {
    id: "tracking",
    style: {
      background: "var(--surface-page-alt)",
      borderTop: "1px solid var(--border-hairline)",
      padding: "var(--section-y) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "jojo-container",
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-16)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 16,
      maxWidth: "44ch"
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    tone: "muted"
  }, "Tracking"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      font: "var(--type-h2)",
      letterSpacing: "var(--track-h2)",
      color: "var(--text-strong)"
    }
  }, "Shipment tracking is a phase-two feature."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: "var(--type-body-lg)",
      color: "var(--text-muted)"
    }
  }, "The brief lists this as optional and later. Until it exists, ask for a status on WhatsApp and you'll get a photo, not a status code."), /*#__PURE__*/React.createElement(Badge, {
    tone: "muted",
    size: "sm"
  }, "Not built \u2014 shown disabled on purpose")), /*#__PURE__*/React.createElement(WindowFrame, {
    title: "Track a shipment",
    meta: "phase 2"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-4)",
      opacity: 0.5,
      pointerEvents: "none"
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Reference number",
    placeholder: "MI-00000",
    icon: "search"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    fullWidth: true,
    disabled: true
  }, "Check status")))));
}
function QuoteTool() {
  const d = window.MI_DATA;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-page)",
      minHeight: "100%"
    }
  }, /*#__PURE__*/React.createElement(MiHeader, null), /*#__PURE__*/React.createElement("section", {
    id: "quote",
    style: {
      position: "relative",
      overflow: "hidden",
      padding: "var(--space-20) 0 var(--section-y)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: -200,
      left: -140,
      width: 720,
      height: 720,
      borderRadius: "50%",
      background: "radial-gradient(circle, rgba(78,116,255,0.16) 0%, rgba(78,116,255,0) 62%)",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "jojo-container",
    style: {
      position: "relative",
      display: "grid",
      gridTemplateColumns: "1fr 460px",
      gap: "var(--space-12)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo/mi-logistics-trimmed.png",
    alt: "MI Logistics",
    style: {
      height: 66,
      width: "auto",
      justifySelf: "start"
    }
  }), /*#__PURE__*/React.createElement(SectionLabel, {
    rule: true
  }, "Domestic transport \xB7 Pakistan"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      font: "var(--type-h1)",
      letterSpacing: "var(--track-h1)",
      color: "var(--text-strong)"
    }
  }, "We carry your trust, city to city."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: "var(--type-body-lg)",
      color: "var(--text-body)",
      maxWidth: "50ch"
    }
  }, "MI Logistics moves vehicles and cargo inside Pakistan \u2014 Karachi port clearing, upcountry delivery and fleet transport. Tell us the route and we'll quote it on WhatsApp."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--inline-gap)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    icon: "message-circle",
    href: "https://wa.me/" + d.whatsapp,
    target: "_blank"
  }, "Get a quote on WhatsApp"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "outline",
    href: "#coverage"
  }, "See coverage"))), /*#__PURE__*/React.createElement(QuoteForm, null))), /*#__PURE__*/React.createElement(StatBar, {
    stats: [{
      value: 10,
      label: "Cities served"
    }, {
      value: "2–4",
      label: "Days upcountry",
      animate: false
    }, {
      value: 100,
      suffix: "%",
      label: "Cargo insured"
    }]
  }), /*#__PURE__*/React.createElement("div", {
    id: "coverage"
  }, /*#__PURE__*/React.createElement(Coverage, null)), /*#__PURE__*/React.createElement(TrackingBlock, null), /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-page)",
      padding: "var(--section-y) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "jojo-container",
    style: {
      display: "grid",
      gap: "var(--space-10)",
      maxWidth: 860
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    rule: true
  }, "Questions"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      font: "var(--type-h2)",
      letterSpacing: "var(--track-h2)",
      color: "var(--text-strong)"
    }
  }, "Before you book.")), /*#__PURE__*/React.createElement(Accordion, {
    items: [{
      question: "How is a rate worked out?",
      answer: "Route distance, load type, weight and how urgently you need it. Vehicle carriers price per unit; general freight prices per tonne or per truck."
    }, {
      question: "Do you clear cargo at Karachi port?",
      answer: "Yes — port clearing and onward haulage in one job, which is usually cheaper than arranging them separately."
    }, {
      question: "Is my cargo insured?",
      answer: "Transit insurance is included on every job. Declared value determines the cover, so tell us what it's worth."
    }, {
      question: "How does this relate to JOJO International?",
      answer: "Same group. JOJO handles Japanese car exports to international buyers; MI Logistics handles transport inside Pakistan."
    }]
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-page-alt)",
      borderTop: "1px solid var(--border-hairline)",
      padding: "var(--section-y) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "jojo-container",
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "var(--space-10)",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 12,
      maxWidth: "46ch"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      font: "var(--type-h2)",
      letterSpacing: "var(--track-h2)",
      color: "var(--text-strong)"
    }
  }, "Got a load to move this week?"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: "var(--type-body-lg)",
      color: "var(--text-muted)"
    }
  }, "Send the route and the date. We'll come back with a number.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--inline-gap)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    icon: "message-circle",
    href: "https://wa.me/" + d.whatsapp,
    target: "_blank"
  }, "Get a quote on WhatsApp"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "outline",
    icon: "arrow-right",
    iconPosition: "right",
    href: "../website/index.html"
  }, "JOJO International")))), /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--surface-page)",
      borderTop: "1px solid var(--border-hairline)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "jojo-container",
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 16,
      alignItems: "center",
      padding: "var(--space-6) var(--gutter)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo/mi-logistics-trimmed.png",
    alt: "MI Logistics",
    style: {
      height: 34
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-meta)",
      color: "var(--text-subtle)"
    }
  }, "\xA9 2026 MI Logistics \xB7 A JOJO International group company"), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: "auto",
      font: "var(--type-meta)",
      color: "var(--text-subtle)"
    }
  }, "Domestic transport across Pakistan \xB7 Karachi port clearing"))));
}
Object.assign(window, {
  QuoteTool,
  MiHeader,
  TrackingBlock
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mi-logistics/QuoteTool.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mi-logistics/data.js
try { (() => {
window.MI_DATA = {
  whatsapp: "923000000000",
  phoneDisplay: "+92 3XX XXX XXXX",
  email: "quotes@milogistics.co",
  hours: "Mon–Sat · 9am–8pm PKT",
  cities: ["Karachi", "Hyderabad", "Sukkur", "Multan", "Lahore", "Faisalabad", "Islamabad", "Rawalpindi", "Peshawar", "Quetta"],
  cargoTypes: ["Vehicle (single)", "Vehicle (multiple)", "General cargo", "Containerised", "Heavy machinery"],
  fleet: [{
    icon: "truck",
    title: "Car carriers",
    body: "Single-deck and double-deck carriers for 2–8 vehicles per trip."
  }, {
    icon: "container",
    title: "Flatbed & container",
    body: "20ft and 40ft container haulage from Karachi port upcountry."
  }, {
    icon: "package",
    title: "General freight",
    body: "Palletised and loose cargo, part-load or full-truck."
  }],
  promises: [{
    icon: "shield-check",
    label: "Cargo insured in transit"
  }, {
    icon: "map-pin",
    label: "Port clearing at Karachi"
  }, {
    icon: "clock",
    label: "Upcountry delivery in 2–4 days"
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mi-logistics/data.js", error: String((e && e.message) || e) }); }

// ui_kits/mi-logistics/pakistan-map-3d.js
try { (() => {
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
const CITIES = [{
  name: "Karachi",
  lon: 67.0011,
  lat: 24.8607,
  hub: true
}, {
  name: "Hyderabad",
  lon: 68.3737,
  lat: 25.396
}, {
  name: "Sukkur",
  lon: 68.8574,
  lat: 27.7052
}, {
  name: "Quetta",
  lon: 67.0099,
  lat: 30.1798
}, {
  name: "Multan",
  lon: 71.5249,
  lat: 30.1575
}, {
  name: "Faisalabad",
  lon: 73.0791,
  lat: 31.4504
}, {
  name: "Lahore",
  lon: 74.3587,
  lat: 31.5204,
  hub: true
}, {
  name: "Islamabad",
  lon: 73.0479,
  lat: 33.6844,
  hub: true
}, {
  name: "Rawalpindi",
  lon: 73.0169,
  lat: 33.5651
}, {
  name: "Peshawar",
  lon: 71.5785,
  lat: 34.0151
}];
let atlasPromise = null;
function loadPakistan() {
  if (atlasPromise) return atlasPromise;
  atlasPromise = fetch(ATLAS).then(r => r.json()).then(topo => {
    const fc = window.topojson.feature(topo, topo.objects.countries);
    const pk = fc.features.find(d => String(d.id) === PAKISTAN_ID || d.properties && d.properties.name === "Pakistan");
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
    const io = new IntersectionObserver(entries => {
      if (entries.some(e => e.isIntersecting)) {
        io.disconnect();
        this._build();
      }
    }, {
      rootMargin: "300px"
    });
    io.observe(this);
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
    const pts = CITIES.map(c => {
      const xy = projection([c.lon, c.lat]);
      return {
        ...c,
        x: xy[0],
        y: xy[1]
      };
    });
    const karachi = pts[0];
    pts.slice(1).forEach(c => {
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
    pts.forEach(c => {
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
    pts.filter(c => c.hub).forEach(c => {
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
    let dragging = false,
      lx = 0,
      ly = 0;
    stage.addEventListener("pointerdown", e => {
      dragging = true;
      this._idle = false;
      lx = e.clientX;
      ly = e.clientY;
      stage.style.cursor = "grabbing";
      stage.setPointerCapture(e.pointerId);
    });
    stage.addEventListener("pointermove", e => {
      if (!dragging) return;
      this._rz += (e.clientX - lx) * 0.4;
      this._rx = Math.max(14, Math.min(84, this._rx - (e.clientY - ly) * 0.3));
      lx = e.clientX;
      ly = e.clientY;
      this._apply();
    });
    const end = () => {
      if (!dragging) return;
      dragging = false;
      stage.style.cursor = "grab";
      clearTimeout(this._idleTimer);
      this._idleTimer = setTimeout(() => {
        this._idle = true;
      }, 4000);
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
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mi-logistics/pakistan-map-3d.js", error: String((e && e.message) || e) }); }

// ui_kits/shared/motion.js
try { (() => {
/* Scroll-reveal + intro splash teardown. ~1KB, no dependencies.

   Reveal is opt-in from JS only: the hiding rule is scoped to html.jojo-reveal,
   which this file adds. If JS never runs, every section stays visible. */
(function () {
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---- intro splash ---- */
  var splash = document.getElementById("jojo-splash");
  if (splash) {
    if (reduce) splash.remove();else {
      var kill = function () {
        splash && splash.remove();
        splash = null;
      };
      splash.addEventListener("animationend", function (e) {
        if (e.target === splash) kill();
      });
      setTimeout(kill, 2000); /* belt and braces */
    }
  }
  if (reduce) return;

  /* ---- scroll reveal ---- */
  var MAX = 160;
  var tagged = 0;
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (!en.isIntersecting) return;
      en.target.setAttribute("data-revealed", "");
      io.unobserve(en.target);
    });
  }, {
    rootMargin: "0px 0px -6% 0px",
    threshold: 0.04
  });
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
        el.style.setProperty("--reveal-delay", Math.min(i, 5) * 55 + "ms");
        io.observe(el);
        if (++tagged > MAX) return;
      }
    }
  }
  document.documentElement.classList.add("jojo-reveal");
  var root = document.getElementById("root") || document.body;
  new MutationObserver(function () {
    tag();
  }).observe(root, {
    childList: true,
    subtree: true
  });
  tag();
  requestAnimationFrame(tag);
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/shared/motion.js", error: String((e && e.message) || e) }); }

// ui_kits/website/About.jsx
try { (() => {
const {
  Button,
  SectionLabel,
  SplitSection,
  StepCard,
  MetaTable,
  CheckList,
  StatBar,
  TestimonialCard,
  WindowFrame
} = window.JOJOInternationalDesignSystem_e58ef5;
const PILLARS = [{
  index: "001",
  icon: "globe",
  title: "Sourcing breadth",
  body: "Full access to BeForward's Japanese auction stock — not a fixed lot of cars we happen to own."
}, {
  index: "002",
  icon: "shield-check",
  title: "Inspection first",
  body: "Third-party inspection report and photos in your hands before any money moves."
}, {
  index: "003",
  icon: "ship",
  title: "Shipping we book ourselves",
  body: "Direct relationships with freight forwarders on the Karachi–Africa lanes, so sailings don't sit."
}, {
  index: "004",
  icon: "message-circle",
  title: "One thread, one person",
  body: "The person who answers your first question sends your bill of lading. No handoffs."
}];
function About({
  onNavigate
}) {
  const d = window.JOJO_DATA;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHero, {
    label: "About us",
    title: "Ten years of moving Japanese cars out of Karachi.",
    meta: /*#__PURE__*/React.createElement(MetaTable, {
      style: {
        marginTop: "var(--space-6)",
        maxWidth: 640
      },
      rows: [{
        key: "Trading since",
        value: "2016"
      }, {
        key: "Founder / CEO",
        value: d.founder
      }, {
        key: "Based in",
        value: d.address
      }, {
        key: "Authorization",
        value: "BeForward authorized sales agent"
      }, {
        key: "Markets",
        value: "South Africa · Zambia · Zimbabwe · Botswana · Tanzania"
      }, {
        key: "Group",
        value: "JOJO International · MI Logistics · JOJO Techzone"
      }]
    })
  }, "Not a marketplace and not a dealership. We're the people on the other end of the WhatsApp thread when someone in Johannesburg or Lusaka decides to import a car from Japan."), /*#__PURE__*/React.createElement(SplitSection, {
    label: "Our story",
    title: "It started with one agency and a lot of questions.",
    background: "var(--surface-page)",
    mediaSrc: "https://jojo-international.com/assets/images/message-by-ceo-founder-image.png",
    mediaAlt: "Message by CEO / Founder",
    mediaHeight: 440,
    aside: /*#__PURE__*/React.createElement("blockquote", {
      style: {
        margin: 0,
        padding: "var(--space-5)",
        background: "var(--surface-inset)",
        border: "1px solid var(--border-hairline)",
        borderRadius: "var(--radius-lg)",
        font: "var(--type-body)",
        color: "var(--text-body)",
        fontStyle: "italic"
      }
    }, "\"We have a vision to be the best Sales & Marketing company across our markets. We want to build a company that creates shareholder value and delivers sustainable long-term growth. In order to do that, we have a clear roadmap.\"", /*#__PURE__*/React.createElement("span", {
      style: {
        display: "block",
        marginTop: 10,
        fontStyle: "normal",
        font: "var(--type-meta)",
        color: "var(--text-subtle)"
      }
    }, "\u2014 ", d.founder, ", CEO & Founder")),
    actions: /*#__PURE__*/React.createElement(Button, {
      icon: "message-circle",
      href: "https://wa.me/" + d.whatsapp,
      target: "_blank"
    }, "Chat on WhatsApp")
  }, /*#__PURE__*/React.createElement("p", null, "JOJO International is a specialised automotive communications agency. Since 2016 we have helped car exporting companies increase sales \u2014 and provided the after-sales service that usually goes missing once the money has moved."), /*#__PURE__*/React.createElement("p", null, "Today we work as BeForward Japan's authorized agent in Pakistan, selling into Africa and the Caribbean from a sales floor in North Nazimabad. Alongside cars we handle agricultural machinery and tractors.")), /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-section)",
      borderBlock: "1px solid var(--border-hairline)",
      padding: "var(--section-y) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "jojo-container",
    style: {
      display: "grid",
      gap: "var(--space-10)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 14,
      maxWidth: "46ch"
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    rule: true
  }, "Why us"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      font: "var(--type-h2)",
      letterSpacing: "var(--track-h2)",
      color: "var(--text-strong)"
    }
  }, "Four things we're actually better at.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "var(--card-gap)"
    }
  }, PILLARS.map(p => /*#__PURE__*/React.createElement(StepCard, {
    key: p.index,
    index: p.index,
    icon: p.icon,
    title: p.title
  }, p.body))))), /*#__PURE__*/React.createElement(StatBar, {
    stats: d.stats
  }), /*#__PURE__*/React.createElement(SplitSection, {
    label: "Office & team",
    title: "Real people, at real desks, in Karachi.",
    reverse: true,
    background: "var(--surface-page)",
    mediaSrc: "https://jojo-international.com/assets/images/about-us-image.png",
    mediaAlt: "JOJO International team",
    mediaHeight: 420,
    aside: /*#__PURE__*/React.createElement(CheckList, {
      columns: 1,
      items: ["Highly trained sales staff", "Fully equipped sales floor", "Capital in place to keep expanding the desk"]
    })
  }, /*#__PURE__*/React.createElement("p", null, "You can visit. The office is Building A-314 in Block J, North Nazimabad, and if you're in Karachi we'd rather show you the operation than describe it."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-sm)",
      color: "var(--text-subtle)"
    }
  }, "Note for the build: these photographs are hot-linked from the current live site. Download them into ", /*#__PURE__*/React.createElement("code", null, "assets/"), ", and replace any that are stock rather than real.")), /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-page-alt)",
      borderTop: "1px solid var(--border-hairline)",
      padding: "var(--section-y) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "jojo-container",
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-12)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(WindowFrame, {
    title: "Vision",
    tone: "inset"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: "var(--type-body)",
      color: "var(--text-body)"
    }
  }, "To achieve 100% customer satisfaction by delivering quality products and services at an affordable cost \u2014 and to become pioneers of the sales and customer service industry.")), /*#__PURE__*/React.createElement(WindowFrame, {
    title: "Mission",
    tone: "inset"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: "var(--type-body)",
      color: "var(--text-body)"
    }
  }, "To earn the reputation of a quality, high-standard and reliable service provider. For our scope of improvement the sky is the limit, and we are always ready to take our achievements to the next level.")))), /*#__PURE__*/React.createElement(CtaBand, {
    title: "Want to see if we're a fit?",
    body: "Ask us anything \u2014 including the questions you'd rather not put in an email.",
    primary: "Chat on WhatsApp",
    secondary: "How it works",
    secondaryHref: "#how-it-works"
  }));
}
Object.assign(window, {
  About
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/About.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Contact.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Button,
  Badge,
  SectionLabel,
  LeadForm,
  MetaTable,
  Icon,
  TrustRow,
  TestimonialCard
} = window.JOJOInternationalDesignSystem_e58ef5;
function ContactLine({
  icon,
  label,
  value,
  href,
  tint
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      alignItems: "flex-start",
      padding: "var(--space-4) 0",
      borderBottom: "1px solid var(--border-hairline)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "grid",
      placeItems: "center",
      width: 40,
      height: 40,
      borderRadius: "var(--radius-md)",
      background: "var(--blue-tint-08)",
      border: "1px solid var(--blue-tint-24)",
      flex: "0 0 auto"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 19,
    color: tint || "var(--blue-300)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 3
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-label)",
      letterSpacing: "var(--track-label)",
      textTransform: "uppercase",
      color: "var(--text-subtle)"
    }
  }, label), href ? /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      font: "var(--type-body)",
      color: "var(--text-body)",
      textDecoration: "none"
    }
  }, value) : /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body)",
      color: "var(--text-body)"
    }
  }, value)));
}
function Contact() {
  const d = window.JOJO_DATA;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHero, {
    label: "Contact",
    title: "Skip the form. Message us.",
    meta: /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: "var(--inline-gap)",
        flexWrap: "wrap",
        marginTop: "var(--space-4)"
      }
    }, /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      icon: "message-circle",
      href: "https://wa.me/" + d.whatsapp,
      target: "_blank"
    }, "Chat on WhatsApp"), /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      variant: "outline",
      icon: "phone",
      href: "tel:" + d.phoneDisplay.replace(/\s/g, "")
    }, "Call the office"))
  }, "Every deal we've ever done started as a WhatsApp message. The form below works too \u2014 it just opens WhatsApp when you send it."), /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-page)",
      padding: "var(--section-y) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "jojo-container",
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-16)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(LeadForm, {
    whatsappNumber: d.whatsapp
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    rule: true
  }, "Direct"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      font: "var(--type-h3)",
      letterSpacing: "var(--track-h3)",
      color: "var(--text-strong)"
    }
  }, "Reach us without the form.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ContactLine, {
    icon: "message-circle",
    label: "WhatsApp \xB7 fastest",
    value: d.phoneDisplay,
    href: "https://wa.me/" + d.whatsapp,
    tint: "var(--whatsapp-green)"
  }), /*#__PURE__*/React.createElement(ContactLine, {
    icon: "phone",
    label: "Office line",
    value: d.phoneDisplay,
    href: "tel:" + d.phoneDisplay.replace(/\s/g, "")
  }), /*#__PURE__*/React.createElement(ContactLine, {
    icon: "mail",
    label: "Email",
    value: d.email,
    href: "mailto:" + d.email
  }), /*#__PURE__*/React.createElement(ContactLine, {
    icon: "map-pin",
    label: "Office",
    value: d.address,
    href: "https://goo.gl/maps/c7VKa2SddTGENLuX8"
  }), /*#__PURE__*/React.createElement(ContactLine, {
    icon: "clock",
    label: "Hours",
    value: d.hours
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, d.social.map(s => /*#__PURE__*/React.createElement("a", {
    key: s.label,
    href: s.href,
    target: "_blank",
    rel: "noopener noreferrer",
    "aria-label": s.label,
    title: s.label,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      padding: "8px 13px",
      borderRadius: "var(--radius-pill)",
      background: "var(--blue-tint-08)",
      border: "1px solid var(--blue-tint-24)",
      font: "var(--type-sm)",
      color: "var(--text-muted)",
      textDecoration: "none"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s.icon,
    size: 15
  }), s.label)))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-section)",
      borderBlock: "1px solid var(--border-hairline)",
      padding: "var(--section-y-tight) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "jojo-container",
    style: {
      display: "grid",
      gap: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement(TrustRow, {
    note: "What happens next",
    items: [{
      icon: "message-circle",
      label: "We reply on WhatsApp, usually within a few hours"
    }, {
      icon: "car",
      label: "We shortlist cars that match your budget"
    }, {
      icon: "file-text",
      label: "You get an itemised landed-price quote"
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "var(--card-gap)"
    }
  }, d.testimonials.map(t => /*#__PURE__*/React.createElement(TestimonialCard, _extends({
    key: t.name
  }, t, {
    sample: true
  })))))), /*#__PURE__*/React.createElement(CtaBand, {
    title: "One message is enough.",
    body: "Tell us the car and your port. We'll take it from there.",
    primary: "Chat on WhatsApp"
  }));
}
Object.assign(window, {
  Contact,
  ContactLine
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/FeaturedCars.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Button,
  Badge,
  CarCard,
  CarFinder,
  WindowFrame,
  SectionLabel,
  TrustRow
} = window.JOJOInternationalDesignSystem_e58ef5;
function FeaturedCars() {
  const d = window.JOJO_DATA;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHero, {
    label: "Featured cars",
    title: "Live BeForward listings we can quote today.",
    meta: /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 10,
        flexWrap: "wrap",
        marginTop: "var(--space-2)"
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "muted",
      size: "sm"
    }, "Pulled from BeForward \xB7 refresh weekly"), /*#__PURE__*/React.createElement(Badge, {
      tone: "soft",
      size: "sm"
    }, "FOB Japan \xB7 your landed price on request"))
  }, "Real cars, real reference numbers, real prices \u2014 read straight off BeForward's stock list. We don't hold any of it, so treat this as a shortlist rather than a catalogue. Send us a ref number and we'll confirm it's still there."), /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-page)",
      padding: "var(--section-y) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "jojo-container",
    style: {
      display: "grid",
      gap: "var(--space-12)"
    }
  }, /*#__PURE__*/React.createElement(CarFinder, {
    whatsappNumber: d.whatsapp,
    label: "Nothing here fits?",
    title: "Tell us what you're looking for instead",
    note: "This opens WhatsApp with your request pre-filled \u2014 it isn't a live stock search, because we don't hold the stock."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "var(--card-gap)"
    }
  }, d.cars.map(c => /*#__PURE__*/React.createElement(CarCard, _extends({
    key: c.refNo
  }, c, {
    fit: "cover",
    whatsappNumber: d.whatsapp,
    note: "FOB Japan. Subject to availability on BeForward."
  })))), /*#__PURE__*/React.createElement(WindowFrame, {
    title: "How to read these prices",
    meta: "FOB, not landed"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 10,
      font: "var(--type-sm)",
      color: "var(--text-muted)",
      lineHeight: 1.7
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "The figure on each card is BeForward's ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--text-body)"
    }
  }, "FOB price"), " \u2014 the car, free on board in Japan. It is the real listed number on the day we pulled it."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "Your ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--text-body)"
    }
  }, "landed"), " cost adds ocean freight, marine insurance, certification and your own import duty and clearing \u2014 all of which depend on your port. That's the number we work out with you on WhatsApp, and it's why we don't print a single price here and pretend it covers everything."))), /*#__PURE__*/React.createElement(TrustRow, {
    note: "Every car ships with",
    items: [{
      icon: "shield-check",
      label: "Third-party inspection report"
    }, {
      icon: "file-text",
      label: "Export certificate & bill of lading"
    }, {
      icon: "ship",
      label: "Insured ocean freight"
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "outline",
    icon: "arrow-right",
    iconPosition: "right",
    href: "https://www.beforward.jp",
    target: "_blank"
  }, "Browse full BeForward stock")))), /*#__PURE__*/React.createElement(CtaBand, {
    title: "Seen one you like?",
    body: "Send us the model and year. We'll confirm availability and quote a landed price for your port.",
    primary: "Ask on WhatsApp"
  }));
}
Object.assign(window, {
  FeaturedCars
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/FeaturedCars.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
const {
  Icon,
  Badge
} = window.JOJOInternationalDesignSystem_e58ef5;
function FooterColumn({
  title,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 14,
      alignContent: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-label)",
      letterSpacing: "var(--track-label)",
      textTransform: "uppercase",
      color: "var(--text-subtle)"
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 10
    }
  }, children));
}
function FooterLink({
  children,
  href,
  onClick
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      font: "var(--type-sm)",
      color: hover ? "var(--text-strong)" : "var(--text-muted)",
      textDecoration: "none",
      transition: "color var(--dur-fast) var(--ease-out)"
    }
  }, children);
}
function Footer({
  onNavigate
}) {
  const d = window.JOJO_DATA;
  const go = link => e => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(link);
    }
  };
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--surface-page-alt)",
      borderTop: "1px solid var(--border-hairline)",
      paddingTop: "var(--section-y-tight)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "jojo-container",
    style: {
      display: "grid",
      gridTemplateColumns: "1.4fr 1fr 1fr 1.2fr",
      gap: "var(--space-12)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 18,
      alignContent: "start"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo/jojo-international-white.png",
    alt: "JOJO International",
    style: {
      height: 34,
      width: "auto"
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: "var(--type-sm)",
      color: "var(--text-muted)",
      maxWidth: "34ch"
    }
  }, "Authorized BeForward sales agent, exporting Japanese cars out of Karachi to buyers across Africa since 2016."), /*#__PURE__*/React.createElement(Badge, {
    tone: "gradient",
    size: "sm",
    icon: "shield-check",
    style: {
      justifySelf: "start"
    }
  }, "BeForward Authorized Agent")), /*#__PURE__*/React.createElement(FooterColumn, {
    title: "Pages"
  }, d.links.map(l => /*#__PURE__*/React.createElement(FooterLink, {
    key: l.href,
    href: l.href,
    onClick: go(l)
  }, l.label))), /*#__PURE__*/React.createElement(FooterColumn, {
    title: "Group"
  }, /*#__PURE__*/React.createElement(FooterLink, {
    href: "../mi-logistics/index.html"
  }, "MI Logistics"), /*#__PURE__*/React.createElement(FooterLink, {
    href: "http://jojotechzone.com/"
  }, "JOJO Techzone \u2197"), /*#__PURE__*/React.createElement(FooterLink, {
    href: "https://www.beforward.jp"
  }, "BeForward stock \u2197")), /*#__PURE__*/React.createElement(FooterColumn, {
    title: "Talk to us"
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://wa.me/" + d.whatsapp,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 9,
      font: "var(--type-sm)",
      color: "var(--text-body)",
      textDecoration: "none"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "message-circle",
    size: 16,
    color: "var(--whatsapp-green)"
  }), d.phoneDisplay), /*#__PURE__*/React.createElement("a", {
    href: "mailto:" + d.email,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 9,
      font: "var(--type-sm)",
      color: "var(--text-body)",
      textDecoration: "none"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "mail",
    size: 16,
    color: "var(--text-subtle)"
  }), d.email), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 9,
      font: "var(--type-sm)",
      color: "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin",
    size: 16,
    color: "var(--text-subtle)"
  }), d.address), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 9,
      font: "var(--type-sm)",
      color: "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "clock",
    size: 16,
    color: "var(--text-subtle)"
  }), d.hours), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginTop: 4
    }
  }, d.social.map(s => /*#__PURE__*/React.createElement("a", {
    key: s.label,
    href: s.href,
    target: "_blank",
    rel: "noopener noreferrer",
    "aria-label": s.label,
    title: s.label,
    style: {
      display: "grid",
      placeItems: "center",
      width: 34,
      height: 34,
      borderRadius: "var(--radius-md)",
      background: "var(--blue-tint-08)",
      border: "1px solid var(--blue-tint-24)",
      color: "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s.icon,
    size: 16
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--section-y-tight)",
      borderTop: "1px solid var(--border-hairline)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "jojo-container",
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 16,
      alignItems: "center",
      padding: "var(--space-5) var(--gutter)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-meta)",
      color: "var(--text-subtle)"
    }
  }, "\xA9 2026 JOJO International \xB7 Karachi, Pakistan"), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: "auto",
      font: "var(--type-meta)",
      color: "var(--text-subtle)"
    }
  }, "Not a live inventory. All cars subject to availability on BeForward Japan."))));
}
Object.assign(window, {
  Footer,
  FooterColumn,
  FooterLink
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Button,
  SectionLabel,
  Badge,
  StatBar,
  StatBadge,
  StepCard,
  CarCard,
  CarFinder,
  TestimonialCard,
  CompanyCard,
  CheckList,
  TrustRow,
  SplitSection,
  Icon
} = window.JOJOInternationalDesignSystem_e58ef5;
function Hero({
  onNavigate
}) {
  const d = window.JOJO_DATA;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      overflow: "hidden",
      background: "var(--surface-page)",
      paddingTop: "var(--space-20)",
      paddingBottom: "var(--space-24)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: -180,
      right: -120,
      width: 780,
      height: 780,
      borderRadius: "50%",
      background: "radial-gradient(circle, rgba(78,116,255,0.20) 0%, rgba(78,116,255,0) 62%)",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "jojo-container",
    style: {
      position: "relative",
      display: "grid",
      gridTemplateColumns: "1.05fr 1fr",
      gap: "var(--space-12)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    rule: true
  }, "Japanese cars \xB7 Karachi \u2192 Africa"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      font: "var(--type-hero)",
      letterSpacing: "var(--track-hero)",
      color: "var(--text-strong)"
    }
  }, "Japanese cars, delivered to your port."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: "var(--type-body-lg)",
      color: "var(--text-body)",
      maxWidth: "48ch"
    }
  }, "We're an authorized BeForward sales agent in Karachi. Tell us the car you want on WhatsApp and we handle sourcing, inspection, paperwork and shipping \u2014 over 500 cars delivered since 2016."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--inline-gap)",
      flexWrap: "wrap",
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    icon: "message-circle",
    href: "https://wa.me/" + d.whatsapp,
    target: "_blank"
  }, "Chat on WhatsApp"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "outline",
    href: "#how-it-works",
    onClick: e => {
      e.preventDefault();
      onNavigate({
        href: "#how-it-works"
      });
    }
  }, "See how it works")), /*#__PURE__*/React.createElement(TrustRow, {
    note: "Authorized & verified",
    style: {
      marginTop: "var(--space-4)"
    },
    items: [{
      icon: "shield-check",
      label: "BeForward authorized agent"
    }, {
      icon: "ship",
      label: "Durban · Dar es Salaam · Mombasa"
    }, {
      icon: "file-text",
      label: "Export documents handled"
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 380,
      borderRadius: "var(--radius-xl)",
      overflow: "hidden",
      background: "linear-gradient(158deg, var(--navy-700), var(--navy-900))",
      border: "1px solid var(--border-hairline)",
      display: "grid",
      placeItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--scrim-grade)"
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/cars/toyota-land-cruiser-prado.png",
    alt: "Toyota Land Cruiser Prado",
    style: {
      position: "relative",
      width: "92%",
      objectFit: "contain"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 20,
      top: 18,
      font: "var(--type-meta)",
      color: "var(--text-subtle)"
    }
  }, "Placeholder \u2014 real hero photograph or 15s loop goes here")), /*#__PURE__*/React.createElement(StatBadge, {
    value: "500+",
    label: "Cars delivered",
    sublabel: "Since 2016",
    style: {
      position: "absolute",
      right: -18,
      bottom: -26
    }
  }))));
}
function HowItWorksPreview({
  onNavigate
}) {
  const d = window.JOJO_DATA;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-page)",
      padding: "var(--section-y) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "jojo-container",
    style: {
      display: "grid",
      gap: "var(--space-10)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "var(--space-8)",
      alignItems: "flex-end",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 14,
      maxWidth: "44ch"
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    rule: true
  }, "How it works"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      font: "var(--type-h2)",
      letterSpacing: "var(--track-h2)",
      color: "var(--text-strong)"
    }
  }, "Four steps between you and a Japanese car.")), /*#__PURE__*/React.createElement("a", {
    href: "#how-it-works",
    onClick: e => {
      e.preventDefault();
      onNavigate({
        href: "#how-it-works"
      });
    },
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      font: "var(--type-sm)",
      fontWeight: "var(--weight-semibold)",
      color: "var(--blue-300)",
      textDecoration: "none"
    }
  }, "See the full process ", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 16
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "var(--card-gap)"
    }
  }, d.steps.map(s => /*#__PURE__*/React.createElement(StepCard, {
    key: s.index,
    index: s.index,
    icon: s.icon,
    title: s.title
  }, s.body)))));
}
function FeaturedPreview({
  onNavigate
}) {
  const d = window.JOJO_DATA;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-section)",
      borderBlock: "1px solid var(--border-hairline)",
      padding: "var(--section-y) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "jojo-container",
    style: {
      display: "grid",
      gap: "var(--space-12)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 420px",
      gap: "var(--space-12)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 16,
      maxWidth: "46ch"
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    rule: true
  }, "Featured this week"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      font: "var(--type-h2)",
      letterSpacing: "var(--track-h2)",
      color: "var(--text-strong)"
    }
  }, "Six cars we can quote today."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: "var(--type-body-lg)",
      color: "var(--text-muted)"
    }
  }, "A hand-picked selection, updated weekly. The full stock lives on BeForward \u2014 ask about any car and we'll confirm availability within 24 hours."), /*#__PURE__*/React.createElement(Badge, {
    tone: "muted",
    size: "sm"
  }, "Not a live catalogue")), /*#__PURE__*/React.createElement(CarFinder, {
    floating: true,
    whatsappNumber: d.whatsapp
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "var(--card-gap)"
    }
  }, d.cars.slice(0, 6).map(c => /*#__PURE__*/React.createElement(CarCard, _extends({
    key: c.refNo
  }, c, {
    fit: "cover",
    whatsappNumber: d.whatsapp,
    note: "FOB Japan. Subject to availability on BeForward."
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      gap: "var(--inline-gap)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    icon: "arrow-right",
    iconPosition: "right",
    href: "https://www.beforward.jp",
    target: "_blank"
  }, "Browse full BeForward stock"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => onNavigate({
      href: "#featured"
    })
  }, "See our weekly picks"))));
}
function Testimonials() {
  const d = window.JOJO_DATA;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-page)",
      padding: "var(--section-y) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "jojo-container",
    style: {
      display: "grid",
      gap: "var(--space-10)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 14,
      maxWidth: "46ch"
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, null, "What buyers say"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      font: "var(--type-h2)",
      letterSpacing: "var(--track-h2)",
      color: "var(--text-strong)"
    }
  }, "Three threads that ended in a delivery.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "var(--card-gap)"
    }
  }, d.testimonials.map(t => /*#__PURE__*/React.createElement(TestimonialCard, _extends({
    key: t.name
  }, t, {
    sample: true
  }))))));
}
function GroupCompanies() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-page-alt)",
      borderTop: "1px solid var(--border-hairline)",
      padding: "var(--section-y) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "jojo-container",
    style: {
      display: "grid",
      gap: "var(--space-10)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 14,
      maxWidth: "46ch"
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    tone: "muted"
  }, "Group companies"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      font: "var(--type-h2)",
      letterSpacing: "var(--track-h2)",
      color: "var(--text-strong)"
    }
  }, "The rest of the group.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--card-gap)"
    }
  }, /*#__PURE__*/React.createElement(CompanyCard, {
    logo: "../../assets/logo/mi-logistics-trimmed.png",
    logoHeight: 40,
    name: "MI Logistics",
    tagline: "Domestic transport \xB7 Pakistan",
    linkLabel: "Get a freight quote",
    href: "../mi-logistics/index.html"
  }, "Our sister company moves vehicles and cargo inside Pakistan \u2014 port clearing, upcountry delivery and fleet transport, city to city."), /*#__PURE__*/React.createElement(CompanyCard, {
    logo: "https://jojo-international.com/assets/images/clients/logo-1.png",
    logoHeight: 44,
    name: "JOJO Techzone",
    tagline: "Technology arm",
    linkLabel: "Visit jojotechzone.com",
    href: "http://jojotechzone.com/",
    target: "_blank"
  }, "The group's technology company. Logo hot-linked from the live JOJO site \u2014 download it into ", /*#__PURE__*/React.createElement("code", null, "assets/logo/"), " before launch."))));
}
function Home({
  onNavigate
}) {
  const d = window.JOJO_DATA;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Hero, {
    onNavigate: onNavigate
  }), /*#__PURE__*/React.createElement(StatBar, {
    stats: d.stats
  }), /*#__PURE__*/React.createElement(HowItWorksPreview, {
    onNavigate: onNavigate
  }), /*#__PURE__*/React.createElement(SplitSection, {
    label: "Who we are",
    title: "A Karachi office, a Japanese supply chain, one WhatsApp thread.",
    background: "var(--surface-page)",
    diagonal: true,
    mediaSrc: "https://jojo-international.com/assets/images/who-we-are-image.png",
    mediaAlt: "JOJO International sales floor",
    aside: /*#__PURE__*/React.createElement(CheckList, {
      items: ["Authorized BeForward sales agent since 2016", "Inspection report and photos before you pay", "Export paperwork and shipping handled end to end", "One WhatsApp thread from first question to delivery"]
    }),
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      icon: "message-circle",
      href: "https://wa.me/" + d.whatsapp,
      target: "_blank"
    }, "Chat on WhatsApp"), /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      onClick: () => onNavigate({
        href: "#about"
      })
    }, "About us"))
  }, /*#__PURE__*/React.createElement("p", null, "We started in 2016 with one office in North Nazimabad and a BeForward agency. Today most of our buyers are in South Africa, Zambia and Zimbabwe \u2014 people importing their first car and understandably nervous about sending money to another continent."), /*#__PURE__*/React.createElement("p", null, "So we do the boring things properly: inspection photos before payment, documents checked twice, and one person on your thread from the first question to the bill of lading.")), /*#__PURE__*/React.createElement(FeaturedPreview, {
    onNavigate: onNavigate
  }), /*#__PURE__*/React.createElement(Testimonials, null), /*#__PURE__*/React.createElement(GroupCompanies, null), /*#__PURE__*/React.createElement(CtaBand, {
    secondary: "See how it works",
    secondaryHref: "#how-it-works"
  }));
}
Object.assign(window, {
  Home,
  Hero,
  HowItWorksPreview,
  FeaturedPreview,
  Testimonials,
  GroupCompanies
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HowItWorks.jsx
try { (() => {
const {
  Button,
  SectionLabel,
  TimelineStep,
  Accordion,
  WindowFrame,
  CheckList,
  MetaTable,
  StatBar
} = window.JOJOInternationalDesignSystem_e58ef5;
function HowItWorks({
  onNavigate
}) {
  const d = window.JOJO_DATA;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHero, {
    label: "How it works",
    title: "Want to import your first car? Here's the whole process.",
    meta: /*#__PURE__*/React.createElement(MetaTable, {
      layout: "inline",
      style: {
        marginTop: "var(--space-4)"
      },
      rows: [{
        key: "Typical timeline",
        value: "6–10 weeks, payment to port"
      }, {
        key: "You pay",
        value: "BeForward Japan, directly"
      }, {
        key: "We handle",
        value: "Sourcing, inspection, documents, shipping"
      }]
    })
  }, "No jargon and nothing hidden. Four steps, what each one costs you in time, and who holds your money at every stage."), /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-page)",
      padding: "var(--section-y) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "jojo-container",
    style: {
      display: "grid",
      gridTemplateColumns: "1.4fr 1fr",
      gap: "var(--space-16)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(TimelineStep, {
    index: "01",
    icon: "car",
    title: "Choose your car",
    aside: "Don't know the model yet? Send your budget and what you need it for \u2014 school runs, long-distance, load-carrying \u2014 and we'll shortlist three options."
  }, "Browse BeForward's Japanese stock and send us the listing link, or just describe what you want. We check the auction grade, mileage and service history before we quote."), /*#__PURE__*/React.createElement(TimelineStep, {
    index: "02",
    icon: "message-circle",
    title: "Message us on WhatsApp",
    aside: "No account, no forms, no callbacks you have to wait for. One thread, one person."
  }, "We confirm the car is still available and quote you a landed price for your port \u2014 car, inland transport in Japan, ocean freight and documents, itemised."), /*#__PURE__*/React.createElement(TimelineStep, {
    index: "03",
    icon: "file-text",
    title: "Payment and paperwork",
    aside: "Your payment goes to BeForward Japan directly \u2014 never to JOJO. We are their authorized agent, not a middleman holding your funds."
  }, "Once you're happy, you pay BeForward for the car. We prepare and check everything around it: export certificate, third-party inspection report, deregistration papers and the bill of lading."), /*#__PURE__*/React.createElement(TimelineStep, {
    index: "04",
    icon: "ship",
    title: "Shipping, customs, delivery",
    last: true,
    aside: "We stay on the thread until the car is in your hands \u2014 including the awkward days when the vessel is late."
  }, "We book the sailing and send you the vessel name and ETA. When it berths, your clearing agent takes over \u2014 and we hand across every document they'll ask for.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-6)",
      position: "sticky",
      top: "calc(var(--nav-h) + var(--space-6))"
    }
  }, /*#__PURE__*/React.createElement(WindowFrame, {
    title: "Export document set",
    meta: "handled by JOJO"
  }, /*#__PURE__*/React.createElement(CheckList, {
    items: ["Export certificate", "Third-party inspection report", "Deregistration papers", "Bill of lading", "Commercial invoice"]
  })), /*#__PURE__*/React.createElement(WindowFrame, {
    title: "What you handle",
    meta: "at your end"
  }, /*#__PURE__*/React.createElement(CheckList, {
    tone: "muted",
    icon: "minus",
    items: ["Import duty and clearing fees", "A local clearing agent", "Roadworthy / registration"]
  }))))), /*#__PURE__*/React.createElement(StatBar, {
    stats: [{
      value: "6–10",
      label: "Weeks, payment to port",
      animate: false
    }, {
      value: 5,
      label: "Documents we prepare"
    }, {
      value: "24h",
      label: "Quote turnaround",
      animate: false
    }]
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-page)",
      padding: "var(--section-y) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "jojo-container",
    style: {
      display: "grid",
      gap: "var(--space-10)",
      maxWidth: 900
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    rule: true
  }, "Questions"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      font: "var(--type-h2)",
      letterSpacing: "var(--track-h2)",
      color: "var(--text-strong)"
    }
  }, "The things buyers actually ask.")), /*#__PURE__*/React.createElement(Accordion, {
    items: d.faqs
  }))), /*#__PURE__*/React.createElement(CtaBand, {
    title: "Still have a question?",
    body: "Ask it on WhatsApp. We'd rather answer it now than have you guess.",
    primary: "Ask on WhatsApp",
    secondary: "Browse featured cars",
    secondaryHref: "#featured"
  }));
}
Object.assign(window, {
  HowItWorks
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HowItWorks.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Shell.jsx
try { (() => {
const {
  InfoStrip,
  NavBar,
  Badge,
  Button,
  SectionLabel
} = window.JOJOInternationalDesignSystem_e58ef5;

/** Site chrome: info strip, sticky nav, page body, footer. */
function Shell({
  page,
  onNavigate,
  children
}) {
  const d = window.JOJO_DATA;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100%",
      background: "var(--surface-page)"
    }
  }, /*#__PURE__*/React.createElement(InfoStrip, {
    items: [{
      icon: "message-circle",
      text: d.phoneDisplay,
      href: "https://wa.me/" + d.whatsapp
    }, {
      icon: "mail",
      text: d.email,
      href: "mailto:" + d.email
    }, {
      icon: "clock",
      text: d.hours
    }],
    right: /*#__PURE__*/React.createElement(Badge, {
      tone: "gradient",
      size: "sm",
      icon: "shield-check"
    }, "BeForward Authorized Agent")
  }), /*#__PURE__*/React.createElement(NavBar, {
    logoSrc: "../../assets/logo/jojo-international-white.png",
    logoHeight: 36,
    links: d.links,
    activeHref: page,
    ctaHref: "https://wa.me/" + d.whatsapp,
    onNavigate: onNavigate
  }), /*#__PURE__*/React.createElement("main", null, children), /*#__PURE__*/React.createElement(Footer, {
    onNavigate: onNavigate
  }));
}

/** Small page banner used by every page except Home. */
function PageHero({
  label,
  title,
  children,
  meta
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-section)",
      borderBottom: "1px solid var(--border-hairline)",
      padding: "var(--space-20) 0 var(--space-16)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "jojo-container",
    style: {
      display: "grid",
      gap: "var(--space-5)",
      maxWidth: 900
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    rule: true
  }, label), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      font: "var(--type-h1)",
      letterSpacing: "var(--track-h1)",
      color: "var(--text-strong)"
    }
  }, title), children ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: "var(--type-body-lg)",
      color: "var(--text-muted)",
      maxWidth: "58ch"
    }
  }, children) : null, meta));
}

/** Repeating conversion band. Every page ends with one. */
function CtaBand({
  title = "Ready to ask about a car?",
  body = "Send us the model and your budget. We reply on WhatsApp, usually within a few hours.",
  primary = "Chat on WhatsApp",
  secondary,
  secondaryHref
}) {
  const d = window.JOJO_DATA;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-page-alt)",
      borderTop: "1px solid var(--border-hairline)",
      padding: "var(--section-y) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "jojo-container",
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "var(--space-10)",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 12,
      maxWidth: "48ch"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      font: "var(--type-h2)",
      letterSpacing: "var(--track-h2)",
      color: "var(--text-strong)"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: "var(--type-body-lg)",
      color: "var(--text-muted)"
    }
  }, body)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--inline-gap)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    icon: "message-circle",
    href: "https://wa.me/" + d.whatsapp,
    target: "_blank"
  }, primary), secondary ? /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "outline",
    href: secondaryHref,
    icon: "arrow-right",
    iconPosition: "right"
  }, secondary) : null)));
}
Object.assign(window, {
  Shell,
  PageHero,
  CtaBand
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Shell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/data.js
try { (() => {
/* JOJO website kit content.
   Contact details, socials, founder name and office address are REAL, read from
   https://www.jojo-international.com (Aug 2026).
   Featured cars are REAL live BeForward listings (Toyota Prius, stocklist make=1/model=225,
   read Aug 2026) — ref numbers, FOB prices, mileage, engine, transmission, stock location
   and photography all come from those listings.
   Stats and testimonials are still placeholders — marked below. */
window.JOJO_DATA = {
  whatsapp: "923168301723",
  phoneDisplay: "+92 316 830 1723",
  email: "info@jojo-international.com",
  hours: "Mon – Sat · 24 hour service",
  address: "Building A-314, Ground Floor, Block J, North Nazimabad, Karachi",
  founder: "Shahzaib Saleem",
  social: [{
    icon: "facebook",
    label: "Facebook",
    href: "https://www.facebook.com/jojointl"
  }, {
    icon: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/jojo-international/"
  }
  /* Instagram and X/Twitter icons on the live site link to the platform root, not to a
     JOJO profile — i.e. they are broken. Omitted until real handles exist. */],
  links: [{
    label: "Home",
    href: "#home"
  }, {
    label: "How it works",
    href: "#how-it-works"
  }, {
    label: "Featured cars",
    href: "#featured"
  }, {
    label: "About",
    href: "#about"
  }, {
    label: "Contact",
    href: "#contact"
  }],
  /* PLACEHOLDER — real figures needed. "Since 2016" is confirmed from the live site. */
  stats: [{
    value: "2016",
    label: "Trading since",
    animate: false
  }, {
    value: 500,
    suffix: "+",
    label: "Cars delivered"
  }, {
    value: 12,
    label: "Countries served"
  }, {
    value: "24h",
    label: "Quote turnaround",
    animate: false
  }],
  steps: [{
    index: "001",
    icon: "car",
    title: "Choose your car",
    body: "Browse BeForward's 540,000-car stock, or just tell us the model, year and budget you have in mind."
  }, {
    index: "002",
    icon: "message-circle",
    title: "Message us",
    body: "Send the ref number on WhatsApp. We confirm availability and quote you a landed price for your port."
  }, {
    index: "003",
    icon: "file-text",
    title: "Payment & paperwork",
    body: "You pay BeForward Japan directly. We prepare inspection, export and shipping documents."
  }, {
    index: "004",
    icon: "ship",
    title: "Shipped & delivered",
    body: "We book the sailing, send you the bill of lading, and stay on the thread until it's in your hands."
  }],
  /* REAL BeForward listings — refreshed Aug 2026. Re-pull weekly. */
  cars: [{
    refNo: "CE450479",
    model: "Toyota Prius 2.0Z",
    year: "2023",
    image: "https://image-cdn.beforward.jp/medium/202608/16333715/CE450479_20e2c3d2.jpg?w=400",
    listingHref: "https://www.beforward.jp/toyota/prius/ce450479/id/16333715/",
    priceRange: "$18,560",
    tags: ["Hybrid", "AT", "2WD"],
    specs: [{
      key: "Mileage",
      value: "38,000 km"
    }, {
      key: "Engine",
      value: "2,000cc"
    }, {
      key: "Stock",
      value: "Nagoya, Japan"
    }]
  }, {
    refNo: "CE450317",
    model: "Toyota Prius 1.8U",
    year: "2023",
    image: "https://image-cdn.beforward.jp/medium/202608/16333553/CE450317_20e2a6af.jpg?w=400",
    listingHref: "https://www.beforward.jp/toyota/prius/ce450317/id/16333553/",
    priceRange: "$16,380",
    tags: ["Hybrid", "AT", "2WD"],
    specs: [{
      key: "Mileage",
      value: "9,000 km"
    }, {
      key: "Engine",
      value: "1,800cc"
    }, {
      key: "Stock",
      value: "Yokohama, Japan"
    }]
  }, {
    refNo: "CE327822",
    model: "Toyota Prius 1.8A",
    year: "2016",
    image: "https://image-cdn.beforward.jp/medium/202608/16209968/CE327822_20e28b4f.jpg?w=400",
    listingHref: "https://www.beforward.jp/toyota/prius/ce327822/id/16209968/",
    priceRange: "$11,620",
    tags: ["Hybrid", "AT", "2WD"],
    specs: [{
      key: "Mileage",
      value: "80,000 km"
    }, {
      key: "Engine",
      value: "1,800cc"
    }, {
      key: "Stock",
      value: "Nagoya, Japan"
    }]
  }, {
    refNo: "CE450072",
    model: "Toyota Prius 1.8A",
    year: "2026",
    image: "https://image-cdn.beforward.jp/medium/202608/16333305/CE450072_20e2606d.jpg?w=400",
    listingHref: "https://www.beforward.jp/toyota/prius/ce450072/id/16333305/",
    priceRange: "$7,770",
    tags: ["Hybrid", "CVT", "2WD"],
    specs: [{
      key: "Mileage",
      value: "13,832 km"
    }, {
      key: "Engine",
      value: "1,790cc"
    }, {
      key: "Stock",
      value: "Nagoya, Japan"
    }]
  }, {
    refNo: "CE450337",
    model: "Toyota Prius",
    year: "2012",
    image: "https://image-cdn.beforward.jp/medium/202608/16333573/CE450337_20e2aa76.JPG?w=400",
    listingHref: "https://www.beforward.jp/toyota/prius/ce450337/id/16333573/",
    priceRange: "$5,140",
    tags: ["Hybrid", "AT"],
    specs: [{
      key: "Mileage",
      value: "47,766 km"
    }, {
      key: "Engine",
      value: "1,797cc"
    }, {
      key: "Stock",
      value: "Yokohama, Japan"
    }]
  }, {
    refNo: "CE450018",
    model: "Toyota Prius",
    year: "2009",
    image: "https://image-cdn.beforward.jp/medium/202608/16333251/CE450018_20e24b6e.jpg?w=400",
    listingHref: "https://www.beforward.jp/toyota/prius/ce450018/id/16333251/",
    priceRange: "$3,590",
    tags: ["Hybrid", "CVT", "2WD"],
    specs: [{
      key: "Mileage",
      value: "89,471 km"
    }, {
      key: "Engine",
      value: "1,790cc"
    }, {
      key: "Stock",
      value: "Yokohama, Japan"
    }]
  }],
  /* PLACEHOLDER — real client quotes needed before launch. */
  testimonials: [{
    quote: "The Prado landed in Durban exactly when they said it would. Photos at every stage is what made me comfortable paying up front.",
    name: "T. Mokoena",
    country: "South Africa",
    car: "2021 Land Cruiser Prado"
  }, {
    quote: "I asked about a Corolla on a Tuesday and had the invoice and inspection report by Thursday. No chasing, no forms.",
    name: "B. Chirwa",
    country: "Zambia",
    car: "2020 Corolla"
  }, {
    quote: "They told me up front that the payment goes to BeForward, not to them. That one sentence is why I trusted the rest.",
    name: "S. Ndlovu",
    country: "Zimbabwe",
    car: "2019 Prius"
  }],
  faqs: [{
    question: "Who do I actually pay?",
    answer: "BeForward Japan, directly. JOJO never holds your money — we source the car, handle the paperwork and arrange shipping around your purchase."
  }, {
    question: "What does the price on a card mean?",
    answer: "It's BeForward's FOB price — the car, free on board in Japan. Your landed cost adds ocean freight, insurance, certification and your own import duty, and depends on your port. We quote that per conversation."
  }, {
    question: "How long does delivery take?",
    answer: "Typically 6–10 weeks from payment to your port, depending on sailing schedules and clearing at your end. We tell you the vessel and ETA as soon as it's booked."
  }, {
    question: "Which countries do you ship to?",
    answer: "Most of southern and eastern Africa, plus the Caribbean. Tell us your port on WhatsApp and we'll confirm."
  }, {
    question: "Can I see the car before I pay?",
    answer: "You get the BeForward listing photos plus the third-party inspection report. If you want specific angles or a video, we ask the yard for them."
  }, {
    question: "Do you sell cars you don't have?",
    answer: "We don't hold stock at all — that's the point. BeForward Japan holds over 540,000 vehicles, and we're their authorized agent in Pakistan. So there's no live catalogue here: you tell us what you want and we source it."
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.CarCard = __ds_scope.CarCard;

__ds_ns.CheckList = __ds_scope.CheckList;

__ds_ns.CompanyCard = __ds_scope.CompanyCard;

__ds_ns.SplitSection = __ds_scope.SplitSection;

__ds_ns.StepCard = __ds_scope.StepCard;

__ds_ns.TestimonialCard = __ds_scope.TestimonialCard;

__ds_ns.TimelineStep = __ds_scope.TimelineStep;

__ds_ns.WindowFrame = __ds_scope.WindowFrame;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.SectionLabel = __ds_scope.SectionLabel;

__ds_ns.MetaTable = __ds_scope.MetaTable;

__ds_ns.StatBadge = __ds_scope.StatBadge;

__ds_ns.StatBar = __ds_scope.StatBar;

__ds_ns.StatCounter = __ds_scope.StatCounter;

__ds_ns.TrustRow = __ds_scope.TrustRow;

__ds_ns.CarFinder = __ds_scope.CarFinder;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.LeadForm = __ds_scope.LeadForm;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.InfoStrip = __ds_scope.InfoStrip;

__ds_ns.NavBar = __ds_scope.NavBar;

})();
