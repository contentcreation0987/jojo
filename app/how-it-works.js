const { Button, SectionLabel, TimelineStep, Accordion, WindowFrame, CheckList, MetaTable, StatBar } = window.JOJOInternationalDesignSystem_e58ef5;

function HowItWorks({ onNavigate }) {
  const d = window.JOJO_DATA;
  return (
    <>
      <PageHero label="How it works" title="Want to import your first car? Here's the whole process." meta={
        <MetaTable layout="inline" style={{ marginTop: "var(--space-4)" }} rows={[
          { key: "Typical timeline", value: "6–10 weeks, payment to port" },
          { key: "You pay", value: "BeForward Japan, directly" },
          { key: "We handle", value: "Sourcing, inspection, documents, shipping" },
        ]} />
      }>
        No jargon and nothing hidden. Four steps, what each one costs you in time, and who holds
        your money at every stage.
      </PageHero>

      <section style={{ background: "var(--surface-page)", padding: "var(--section-y) 0" }}>
        <div className="jojo-container" style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: "var(--space-16)", alignItems: "start" }}>
          <div>
            <TimelineStep index="01" icon="car" title="Choose your car"
              aside="Don't know the model yet? Send your budget and what you need it for — school runs, long-distance, load-carrying — and we'll shortlist three options.">
              Browse BeForward's Japanese stock and send us the listing link, or just describe what
              you want. We check the auction grade, mileage and service history before we quote.
            </TimelineStep>
            <TimelineStep index="02" icon="message-circle" title="Message us on WhatsApp"
              aside="No account, no forms, no callbacks you have to wait for. One thread, one person.">
              We confirm the car is still available and quote you a landed price for your port —
              car, inland transport in Japan, ocean freight and documents, itemised.
            </TimelineStep>
            <TimelineStep index="03" icon="file-text" title="Payment and paperwork"
              aside="Your payment goes to BeForward Japan directly — never to JOJO. We are their authorized agent, not a middleman holding your funds.">
              Once you're happy, you pay BeForward for the car. We prepare and check everything
              around it: export certificate, third-party inspection report, deregistration papers
              and the bill of lading.
            </TimelineStep>
            <TimelineStep index="04" icon="ship" title="Shipping, customs, delivery" last
              aside="We stay on the thread until the car is in your hands — including the awkward days when the vessel is late.">
              We book the sailing and send you the vessel name and ETA. When it berths, your clearing
              agent takes over — and we hand across every document they'll ask for.
            </TimelineStep>
          </div>

          <div style={{ display: "grid", gap: "var(--space-6)", position: "sticky", top: "calc(var(--nav-h) + var(--space-6))" }}>
            <WindowFrame title="Export document set" meta="handled by JOJO">
              <CheckList items={["Export certificate", "Third-party inspection report", "Deregistration papers", "Bill of lading", "Commercial invoice"]} />
            </WindowFrame>
            <WindowFrame title="What you handle" meta="at your end">
              <CheckList tone="muted" icon="minus" items={["Import duty and clearing fees", "A local clearing agent", "Roadworthy / registration"]} />
            </WindowFrame>
          </div>
        </div>
      </section>

      <StatBar stats={[
        { value: "6–10", label: "Weeks, payment to port", animate: false },
        { value: 5, label: "Documents we prepare" },
        { value: "24h", label: "Quote turnaround", animate: false },
      ]} />

      <section style={{ background: "var(--surface-page)", padding: "var(--section-y) 0" }}>
        <div className="jojo-container" style={{ display: "grid", gap: "var(--space-10)", maxWidth: 900 }}>
          <div style={{ display: "grid", gap: 14 }}>
            <SectionLabel rule>Questions</SectionLabel>
            <h2 style={{ margin: 0, font: "var(--type-h2)", letterSpacing: "var(--track-h2)", color: "var(--text-strong)" }}>The things buyers actually ask.</h2>
          </div>
          <Accordion items={d.faqs} />
        </div>
      </section>

      <CtaBand title="Still have a question?" body="Ask it on WhatsApp. We'd rather answer it now than have you guess." primary="Ask on WhatsApp" secondary="Browse featured cars" secondaryHref="#featured" />
    </>
  );
}

Object.assign(window, { HowItWorks });
