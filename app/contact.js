const { Button, Badge, SectionLabel, LeadForm, MetaTable, Icon, TrustRow, TestimonialCard } = window.JOJOInternationalDesignSystem_e58ef5;

function ContactLine({ icon, label, value, href, tint }) {
  return (
    <div style={{ display: "flex", gap: 14, alignItems: "flex-start", padding: "var(--space-4) 0", borderBottom: "1px solid var(--border-hairline)" }}>
      <span style={{ display: "grid", placeItems: "center", width: 40, height: 40, borderRadius: "var(--radius-md)", background: "var(--blue-tint-08)", border: "1px solid var(--blue-tint-24)", flex: "0 0 auto" }}>
        <Icon name={icon} size={19} color={tint || "var(--blue-300)"} />
      </span>
      <div style={{ display: "grid", gap: 3 }}>
        <span style={{ font: "var(--type-label)", letterSpacing: "var(--track-label)", textTransform: "uppercase", color: "var(--text-subtle)" }}>{label}</span>
        {href
          ? <a href={href} style={{ font: "var(--type-body)", color: "var(--text-body)", textDecoration: "none" }}>{value}</a>
          : <span style={{ font: "var(--type-body)", color: "var(--text-body)" }}>{value}</span>}
      </div>
    </div>
  );
}

function Contact() {
  const d = window.JOJO_DATA;
  return (
    <>
      <PageHero label="Contact" title="Skip the form. Message us." meta={
        <div style={{ display: "flex", gap: "var(--inline-gap)", flexWrap: "wrap", marginTop: "var(--space-4)" }}>
          <Button size="lg" icon="message-circle" href={"https://wa.me/" + d.whatsapp} target="_blank">Chat on WhatsApp</Button>
          <Button size="lg" variant="outline" icon="phone" href={"tel:" + d.phoneDisplay.replace(/\s/g, "")}>Call the office</Button>
        </div>
      }>
        Every deal we've ever done started as a WhatsApp message. The form below works too — it just
        opens WhatsApp when you send it.
      </PageHero>

      <section style={{ background: "var(--surface-page)", padding: "var(--section-y) 0" }}>
        <div className="jojo-container" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-16)", alignItems: "start" }}>
          <LeadForm whatsappNumber={d.whatsapp} />

          <div style={{ display: "grid", gap: "var(--space-8)" }}>
            <div style={{ display: "grid", gap: 14 }}>
              <SectionLabel rule>Direct</SectionLabel>
              <h2 style={{ margin: 0, font: "var(--type-h3)", letterSpacing: "var(--track-h3)", color: "var(--text-strong)" }}>Reach us without the form.</h2>
            </div>
            <div>
              <ContactLine icon="message-circle" label="WhatsApp · fastest" value={d.phoneDisplay} href={"https://wa.me/" + d.whatsapp} tint="var(--whatsapp-green)" />
              <ContactLine icon="phone" label="Office line" value={d.phoneDisplay} href={"tel:" + d.phoneDisplay.replace(/\s/g, "")} />
              <ContactLine icon="mail" label="Email" value={d.email} href={"mailto:" + d.email} />
              <ContactLine icon="map-pin" label="Office" value={d.address} href="https://goo.gl/maps/c7VKa2SddTGENLuX8" />
              <ContactLine icon="clock" label="Hours" value={d.hours} />
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              {d.social.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} title={s.label}
                  style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 13px", borderRadius: "var(--radius-pill)", background: "var(--blue-tint-08)", border: "1px solid var(--blue-tint-24)", font: "var(--type-sm)", color: "var(--text-muted)", textDecoration: "none" }}>
                  <Icon name={s.icon} size={15} />{s.label}
                </a>
              ))}
            </div>

          </div>
        </div>
      </section>

      <section style={{ background: "var(--surface-section)", borderBlock: "1px solid var(--border-hairline)", padding: "var(--section-y-tight) 0" }}>
        <div className="jojo-container" style={{ display: "grid", gap: "var(--space-8)" }}>
          <TrustRow note="What happens next" items={[
            { icon: "message-circle", label: "We reply on WhatsApp, usually within a few hours" },
            { icon: "car", label: "We shortlist cars that match your budget" },
            { icon: "file-text", label: "You get an itemised landed-price quote" },
          ]} />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "var(--card-gap)" }}>
            {d.testimonials.map((t) => <TestimonialCard key={t.name} {...t} sample />)}
          </div>
        </div>
      </section>

      <CtaBand title="One message is enough." body="Tell us the car and your port. We'll take it from there." primary="Chat on WhatsApp" />
    </>
  );
}

Object.assign(window, { Contact, ContactLine });
