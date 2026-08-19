const { Button, Badge, SectionLabel, StatBar, Icon, Accordion, WindowFrame, InfoStrip, Input } = window.JOJOInternationalDesignSystem_e58ef5;

function MiHeader() {
  const d = window.MI_DATA;
  return (
    <>
      <InfoStrip
        data-jojo-infostrip=""
        items={[
          { icon: "message-circle", text: d.phoneDisplay, href: "https://wa.me/" + d.whatsapp },
          { icon: "clock", text: d.hours },
        ]}
        right={<Badge tone="muted" size="sm">A JOJO International group company</Badge>}
      />
      <header style={{ position: "sticky", top: 0, zIndex: 40, background: "var(--surface-glass)", backdropFilter: "blur(var(--blur-nav))", borderBottom: "1px solid var(--border-hairline)", boxShadow: "var(--shadow-nav)" }}>
        <div className="jojo-container" data-mi-bar style={{ minHeight: "var(--nav-h)", display: "flex", alignItems: "center", gap: "var(--space-6)", flexWrap: "wrap", paddingBlock: 10 }}>
          <img src="assets/logo/mi-logistics-trimmed.png" alt="MI Logistics" style={{ height: 36, width: "auto" }} />
          <nav data-mi-nav style={{ marginLeft: "auto", display: "flex", gap: "var(--space-7)" }}>
            {["Quote", "Coverage", "Fleet", "Tracking"].map((l) => (
              <a key={l} href={"#" + l.toLowerCase()} style={{ font: "var(--type-sm)", fontWeight: "var(--weight-medium)", color: "var(--text-muted)", textDecoration: "none" }}>{l}</a>
            ))}
          </nav>
          <Button size="sm" icon="message-circle" href={"https://wa.me/" + window.MI_DATA.whatsapp} target="_blank">Get a quote</Button>
        </div>
      </header>
    </>
  );
}

function TrackingBlock() {
  return (
    <section id="tracking" style={{ background: "var(--surface-page-alt)", borderTop: "1px solid var(--border-hairline)", padding: "var(--section-y) 0" }}>
      <div className="jojo-container" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-16)", alignItems: "center" }}>
        <div style={{ display: "grid", gap: 16, maxWidth: "44ch" }}>
          <SectionLabel tone="muted">Tracking</SectionLabel>
          <h2 style={{ margin: 0, font: "var(--type-h2)", letterSpacing: "var(--track-h2)", color: "var(--text-strong)" }}>Shipment tracking is a phase-two feature.</h2>
          <p style={{ margin: 0, font: "var(--type-body-lg)", color: "var(--text-muted)" }}>
            The brief lists this as optional and later. Until it exists, ask for a status on WhatsApp
            and you'll get a photo, not a status code.
          </p>
          <Badge tone="muted" size="sm">Not built — shown disabled on purpose</Badge>
        </div>
        <WindowFrame title="Track a shipment" meta="phase 2">
          <div style={{ display: "grid", gap: "var(--space-4)", opacity: 0.5, pointerEvents: "none" }}>
            <Input label="Reference number" placeholder="MI-00000" icon="search" />
            <Button variant="outline" fullWidth disabled>Check status</Button>
          </div>
        </WindowFrame>
      </div>
    </section>
  );
}

function QuoteTool() {
  const d = window.MI_DATA;
  return (
    <div style={{ background: "var(--surface-page)", minHeight: "100%" }}>
      <MiHeader />

      <section id="quote" style={{ position: "relative", overflow: "hidden", padding: "var(--space-20) 0 var(--section-y)" }}>
        <div style={{ position: "absolute", top: -200, left: -140, width: 720, height: 720, borderRadius: "50%", background: "radial-gradient(circle, rgba(78,116,255,0.16) 0%, rgba(78,116,255,0) 62%)", pointerEvents: "none" }} />
        <div className="jojo-container" style={{ position: "relative", display: "grid", gridTemplateColumns: "1fr 460px", gap: "var(--space-12)", alignItems: "center" }}>
          <div style={{ display: "grid", gap: "var(--space-6)" }}>
            <img src="assets/logo/mi-logistics-trimmed.png" alt="MI Logistics" style={{ height: 66, width: "auto", justifySelf: "start" }} />
            <SectionLabel rule>Domestic transport · Pakistan</SectionLabel>
            <h1 style={{ margin: 0, font: "var(--type-h1)", letterSpacing: "var(--track-h1)", color: "var(--text-strong)" }}>
              We carry your trust, city to city.
            </h1>
            <p style={{ margin: 0, font: "var(--type-body-lg)", color: "var(--text-body)", maxWidth: "50ch" }}>
              MI Logistics moves vehicles and cargo inside Pakistan — Karachi port clearing, upcountry
              delivery and fleet transport. Tell us the route and we'll quote it on WhatsApp.
            </p>
            <div style={{ display: "flex", gap: "var(--inline-gap)", flexWrap: "wrap" }}>
              <Button size="lg" icon="message-circle" href={"https://wa.me/" + d.whatsapp} target="_blank">Get a quote on WhatsApp</Button>
              <Button size="lg" variant="outline" href="#coverage">See coverage</Button>
            </div>
          </div>
          <QuoteForm />
        </div>
      </section>

      <StatBar stats={[
        { value: 10, label: "Cities served" },
        { value: "2–4", label: "Days upcountry", animate: false },
        { value: 100, suffix: "%", label: "Cargo insured" },
      ]} />

      <div id="coverage"><Coverage /></div>
      <TrackingBlock />

      <section style={{ background: "var(--surface-page)", padding: "var(--section-y) 0" }}>
        <div className="jojo-container" style={{ display: "grid", gap: "var(--space-10)", maxWidth: 860 }}>
          <div style={{ display: "grid", gap: 14 }}>
            <SectionLabel rule>Questions</SectionLabel>
            <h2 style={{ margin: 0, font: "var(--type-h2)", letterSpacing: "var(--track-h2)", color: "var(--text-strong)" }}>Before you book.</h2>
          </div>
          <Accordion items={[
            { question: "How is a rate worked out?", answer: "Route distance, load type, weight and how urgently you need it. Vehicle carriers price per unit; general freight prices per tonne or per truck." },
            { question: "Do you clear cargo at Karachi port?", answer: "Yes — port clearing and onward haulage in one job, which is usually cheaper than arranging them separately." },
            { question: "Is my cargo insured?", answer: "Transit insurance is included on every job. Declared value determines the cover, so tell us what it's worth." },
            { question: "How does this relate to JOJO International?", answer: "Same group. JOJO handles Japanese car exports to international buyers; MI Logistics handles transport inside Pakistan." },
          ]} />
        </div>
      </section>

      <section style={{ background: "var(--surface-page-alt)", borderTop: "1px solid var(--border-hairline)", padding: "var(--section-y) 0" }}>
        <div className="jojo-container" style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-10)", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "grid", gap: 12, maxWidth: "46ch" }}>
            <h2 style={{ margin: 0, font: "var(--type-h2)", letterSpacing: "var(--track-h2)", color: "var(--text-strong)" }}>Got a load to move this week?</h2>
            <p style={{ margin: 0, font: "var(--type-body-lg)", color: "var(--text-muted)" }}>Send the route and the date. We'll come back with a number.</p>
          </div>
          <div style={{ display: "flex", gap: "var(--inline-gap)", flexWrap: "wrap" }}>
            <Button size="lg" icon="message-circle" href={"https://wa.me/" + d.whatsapp} target="_blank">Get a quote on WhatsApp</Button>
            <Button size="lg" variant="outline" icon="arrow-right" iconPosition="right" href="index.html">JOJO International</Button>
          </div>
        </div>
      </section>

      <footer style={{ background: "var(--surface-page)", borderTop: "1px solid var(--border-hairline)" }}>
        <div className="jojo-container" style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center", padding: "var(--space-6) var(--gutter)" }}>
          <img src="assets/logo/mi-logistics-trimmed.png" alt="MI Logistics" style={{ height: 34 }} />
          <span style={{ font: "var(--type-meta)", color: "var(--text-subtle)" }}>© 2026 MI Logistics · A JOJO International group company</span>
          <span style={{ marginLeft: "auto", font: "var(--type-meta)", color: "var(--text-subtle)" }}>Domestic transport across Pakistan · Karachi port clearing</span>
        </div>
      </footer>
    </div>
  );
}

Object.assign(window, { QuoteTool, MiHeader, TrackingBlock });
