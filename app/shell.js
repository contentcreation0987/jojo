const { InfoStrip, NavBar, Badge, Button, SectionLabel } = window.JOJOInternationalDesignSystem_e58ef5;

/** Site chrome: info strip, sticky nav, page body, footer. */
function Shell({ page, onNavigate, children }) {
  const d = window.JOJO_DATA;
  return (
    <div style={{ minHeight: "100%", background: "var(--surface-page)" }}>
      <InfoStrip
        data-jojo-infostrip=""
        items={[
          { icon: "message-circle", text: d.phoneDisplay, href: "https://wa.me/" + d.whatsapp },
          { icon: "mail", text: d.email, href: "mailto:" + d.email },
          { icon: "clock", text: d.hours },
        ]}
        right={<Badge tone="gradient" size="sm" icon="shield-check">BeForward Authorized Agent</Badge>}
      />
      <NavBar
        logoSrc="assets/logo/jojo-international-white.png"
        logoHeight={36}
        links={d.links}
        activeHref={page}
        ctaHref={"https://wa.me/" + d.whatsapp}
        onNavigate={onNavigate}
      />
      <main>{children}</main>
      <Footer onNavigate={onNavigate} />
    </div>
  );
}

/** Small page banner used by every page except Home. */
function PageHero({ label, title, children, meta }) {
  return (
    <section style={{ background: "var(--surface-section)", borderBottom: "1px solid var(--border-hairline)", padding: "var(--space-20) 0 var(--space-16)" }}>
      <div className="jojo-container" style={{ display: "grid", gap: "var(--space-5)", maxWidth: 900 }}>
        <SectionLabel rule>{label}</SectionLabel>
        <h1 style={{ margin: 0, font: "var(--type-h1)", letterSpacing: "var(--track-h1)", color: "var(--text-strong)" }}>{title}</h1>
        {children ? <p style={{ margin: 0, font: "var(--type-body-lg)", color: "var(--text-muted)", maxWidth: "58ch" }}>{children}</p> : null}
        {meta}
      </div>
    </section>
  );
}

/** Repeating conversion band. Every page ends with one. */
function CtaBand({ title = "Ready to ask about a car?", body = "Send us the model and your budget. We reply on WhatsApp, usually within a few hours.", primary = "Chat on WhatsApp", secondary, secondaryHref }) {
  const d = window.JOJO_DATA;
  return (
    <section style={{ background: "var(--surface-page-alt)", borderTop: "1px solid var(--border-hairline)", padding: "var(--section-y) 0" }}>
      <div className="jojo-container" style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-10)", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "grid", gap: 12, maxWidth: "48ch" }}>
          <h2 style={{ margin: 0, font: "var(--type-h2)", letterSpacing: "var(--track-h2)", color: "var(--text-strong)" }}>{title}</h2>
          <p style={{ margin: 0, font: "var(--type-body-lg)", color: "var(--text-muted)" }}>{body}</p>
        </div>
        <div style={{ display: "flex", gap: "var(--inline-gap)", flexWrap: "wrap" }}>
          <Button size="lg" icon="message-circle" href={"https://wa.me/" + d.whatsapp} target="_blank">{primary}</Button>
          {secondary ? <Button size="lg" variant="outline" href={secondaryHref} icon="arrow-right" iconPosition="right">{secondary}</Button> : null}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Shell, PageHero, CtaBand });
