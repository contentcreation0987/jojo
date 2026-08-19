const { Button, SectionLabel, SplitSection, StepCard, MetaTable, CheckList, StatBar, TestimonialCard, WindowFrame } = window.JOJOInternationalDesignSystem_e58ef5;

const PILLARS = [
  { index: "001", icon: "globe", title: "Sourcing breadth", body: "Full access to BeForward's Japanese auction stock — not a fixed lot of cars we happen to own." },
  { index: "002", icon: "shield-check", title: "Inspection first", body: "Third-party inspection report and photos in your hands before any money moves." },
  { index: "003", icon: "ship", title: "Shipping we book ourselves", body: "Direct relationships with freight forwarders on the Karachi–Africa lanes, so sailings don't sit." },
  { index: "004", icon: "message-circle", title: "One thread, one person", body: "The person who answers your first question sends your bill of lading. No handoffs." },
];

function About({ onNavigate }) {
  const d = window.JOJO_DATA;
  return (
    <>
      <PageHero label="About us" title="Ten years of moving Japanese cars out of Karachi." meta={
        <MetaTable style={{ marginTop: "var(--space-6)", maxWidth: 640 }} rows={[
          { key: "Trading since", value: "2016" },
          { key: "Founder / CEO", value: d.founder },
          { key: "Based in", value: d.address },
          { key: "Authorization", value: "BeForward authorized sales agent" },
          { key: "Markets", value: "South Africa · Zambia · Zimbabwe · Botswana · Tanzania" },
          { key: "Group", value: "JOJO International · MI Logistics · JOJO Techzone" },
        ]} />
      }>
        Not a marketplace and not a dealership. We're the people on the other end of the WhatsApp
        thread when someone in Johannesburg or Lusaka decides to import a car from Japan.
      </PageHero>

      <SplitSection
        label="Our story" title="It started with one agency and a lot of questions."
        background="var(--surface-page)"
        mediaSrc="https://jojo-international.com/assets/images/message-by-ceo-founder-image.png"
        mediaAlt="Message by CEO / Founder"
        mediaHeight={440}
        aside={<blockquote style={{ margin: 0, padding: "var(--space-5)", background: "var(--surface-inset)", border: "1px solid var(--border-hairline)", borderRadius: "var(--radius-lg)", font: "var(--type-body)", color: "var(--text-body)", fontStyle: "italic" }}>
          "We have a vision to be the best Sales &amp; Marketing company across our markets. We want
          to build a company that creates shareholder value and delivers sustainable long-term
          growth. In order to do that, we have a clear roadmap."
          <span style={{ display: "block", marginTop: 10, fontStyle: "normal", font: "var(--type-meta)", color: "var(--text-subtle)" }}>— {d.founder}, CEO &amp; Founder</span>
        </blockquote>}
        actions={<Button icon="message-circle" href={"https://wa.me/" + d.whatsapp} target="_blank">Chat on WhatsApp</Button>}
      >
        <p>
          JOJO International is a specialised automotive communications agency. Since 2016 we have
          helped car exporting companies increase sales — and provided the after-sales service that
          usually goes missing once the money has moved.
        </p>
        <p>
          Today we work as BeForward Japan's authorized agent in Pakistan, selling into Africa and
          the Caribbean from a sales floor in North Nazimabad. Alongside cars we handle agricultural
          machinery and tractors.
        </p>
      </SplitSection>

      <section style={{ background: "var(--surface-section)", borderBlock: "1px solid var(--border-hairline)", padding: "var(--section-y) 0" }}>
        <div className="jojo-container" style={{ display: "grid", gap: "var(--space-10)" }}>
          <div style={{ display: "grid", gap: 14, maxWidth: "46ch" }}>
            <SectionLabel rule>Why us</SectionLabel>
            <h2 style={{ margin: 0, font: "var(--type-h2)", letterSpacing: "var(--track-h2)", color: "var(--text-strong)" }}>Four things we're actually better at.</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "var(--card-gap)" }}>
            {PILLARS.map((p) => <StepCard key={p.index} index={p.index} icon={p.icon} title={p.title}>{p.body}</StepCard>)}
          </div>
        </div>
      </section>

      <StatBar stats={d.stats} />

      <SplitSection
        label="Office & team" title="Real people, at real desks, in Karachi." reverse
        background="var(--surface-page)"
        mediaSrc="https://jojo-international.com/assets/images/about-us-image.png"
        mediaAlt="JOJO International team"
        mediaHeight={420}
        aside={<CheckList columns={1} items={[
          "Highly trained sales staff",
          "Fully equipped sales floor",
          "Capital in place to keep expanding the desk",
        ]} />}
      >
        <p>
          You can visit. The office is Building A-314 in Block J, North Nazimabad, and if you're in
          Karachi we'd rather show you the operation than describe it.
        </p>
        <p style={{ font: "var(--type-sm)", color: "var(--text-subtle)" }}>
          Note for the build: these photographs are hot-linked from the current live site. Download
          them into <code>assets/</code>, and replace any that are stock rather than real.
        </p>
      </SplitSection>

      <section style={{ background: "var(--surface-page-alt)", borderTop: "1px solid var(--border-hairline)", padding: "var(--section-y) 0" }}>
        <div className="jojo-container" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-12)", alignItems: "start" }}>
          <WindowFrame title="Vision" tone="inset">
            <p style={{ margin: 0, font: "var(--type-body)", color: "var(--text-body)" }}>
              To achieve 100% customer satisfaction by delivering quality products and services at an
              affordable cost — and to become pioneers of the sales and customer service industry.
            </p>
          </WindowFrame>
          <WindowFrame title="Mission" tone="inset">
            <p style={{ margin: 0, font: "var(--type-body)", color: "var(--text-body)" }}>
              To earn the reputation of a quality, high-standard and reliable service provider. For
              our scope of improvement the sky is the limit, and we are always ready to take our
              achievements to the next level.
            </p>
          </WindowFrame>
        </div>
      </section>

      <CtaBand title="Want to see if we're a fit?" body="Ask us anything — including the questions you'd rather not put in an email." primary="Chat on WhatsApp" secondary="How it works" secondaryHref="#how-it-works" />
    </>
  );
}

Object.assign(window, { About });
