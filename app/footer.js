const { Icon, Badge } = window.JOJOInternationalDesignSystem_e58ef5;

function FooterColumn({ title, children }) {
  return (
    <div style={{ display: "grid", gap: 14, alignContent: "start" }}>
      <div style={{ font: "var(--type-label)", letterSpacing: "var(--track-label)", textTransform: "uppercase", color: "var(--text-subtle)" }}>{title}</div>
      <div style={{ display: "grid", gap: 10 }}>{children}</div>
    </div>
  );
}

function FooterLink({ children, href, onClick }) {
  const [hover, setHover] = React.useState(false);
  return (
    <a href={href} onClick={onClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ font: "var(--type-sm)", color: hover ? "var(--text-strong)" : "var(--text-muted)", textDecoration: "none", transition: "color var(--dur-fast) var(--ease-out)" }}>
      {children}
    </a>
  );
}

function Footer({ onNavigate }) {
  const d = window.JOJO_DATA;
  const go = (link) => (e) => { if (onNavigate) { e.preventDefault(); onNavigate(link); } };
  return (
    <footer style={{ background: "var(--surface-page-alt)", borderTop: "1px solid var(--border-hairline)", paddingTop: "var(--section-y-tight)" }}>
      <div className="jojo-container" style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1.2fr", gap: "var(--space-12)" }}>
        <div style={{ display: "grid", gap: 18, alignContent: "start" }}>
          <img src="assets/logo/jojo-international-white.png" alt="JOJO International" style={{ height: 34, width: "auto" }} />
          <p style={{ margin: 0, font: "var(--type-sm)", color: "var(--text-muted)", maxWidth: "34ch" }}>
            Authorized BeForward sales agent, exporting Japanese cars out of Karachi to buyers across Africa since 2016.
          </p>
          <Badge tone="gradient" size="sm" icon="shield-check" style={{ justifySelf: "start" }}>BeForward Authorized Agent</Badge>
        </div>

        <FooterColumn title="Pages">
          {d.links.map((l) => <FooterLink key={l.href} href={l.href} onClick={go(l)}>{l.label}</FooterLink>)}
        </FooterColumn>

        <FooterColumn title="Group">
          <FooterLink href="logistics.html">MI Logistics</FooterLink>
          <FooterLink href="http://jojotechzone.com/">JOJO Techzone ↗</FooterLink>
          <FooterLink href="https://www.beforward.jp" >BeForward stock ↗</FooterLink>
        </FooterColumn>

        <FooterColumn title="Talk to us">
          <a href={"https://wa.me/" + d.whatsapp} style={{ display: "inline-flex", alignItems: "center", gap: 9, font: "var(--type-sm)", color: "var(--text-body)", textDecoration: "none" }}>
            <Icon name="message-circle" size={16} color="var(--whatsapp-green)" />{d.phoneDisplay}
          </a>
          <a href={"mailto:" + d.email} style={{ display: "inline-flex", alignItems: "center", gap: 9, font: "var(--type-sm)", color: "var(--text-body)", textDecoration: "none" }}>
            <Icon name="mail" size={16} color="var(--text-subtle)" />{d.email}
          </a>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 9, font: "var(--type-sm)", color: "var(--text-muted)" }}>
            <Icon name="map-pin" size={16} color="var(--text-subtle)" />{d.address}
          </span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 9, font: "var(--type-sm)", color: "var(--text-muted)" }}>
            <Icon name="clock" size={16} color="var(--text-subtle)" />{d.hours}
          </span>
          <div style={{ display: "flex", gap: 8, marginTop: 4 }}>
            {d.social.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                title={s.label}
                style={{ display: "grid", placeItems: "center", width: 34, height: 34, borderRadius: "var(--radius-md)", background: "var(--blue-tint-08)", border: "1px solid var(--blue-tint-24)", color: "var(--text-muted)" }}>
                <Icon name={s.icon} size={16} />
              </a>
            ))}
          </div>
        </FooterColumn>
      </div>

      <div style={{ marginTop: "var(--section-y-tight)", borderTop: "1px solid var(--border-hairline)" }}>
        <div className="jojo-container" style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center", padding: "var(--space-5) var(--gutter)" }}>
          <span style={{ font: "var(--type-meta)", color: "var(--text-subtle)" }}>© 2026 JOJO International · Karachi, Pakistan</span>
          <span style={{ marginLeft: "auto", font: "var(--type-meta)", color: "var(--text-subtle)" }}>Not a live inventory. All cars subject to availability on BeForward Japan.</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Footer, FooterColumn, FooterLink });
