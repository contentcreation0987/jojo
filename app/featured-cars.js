const { Button, Badge, CarCard, CarFinder, WindowFrame, SectionLabel, TrustRow } = window.JOJOInternationalDesignSystem_e58ef5;

function FeaturedCars() {
  const d = window.JOJO_DATA;
  return (
    <>
      <PageHero label="Featured cars" title="Live BeForward listings we can quote today." meta={
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: "var(--space-2)" }}>
          <Badge tone="muted" size="sm">Pulled from BeForward · refresh weekly</Badge>
          <Badge tone="soft" size="sm">FOB Japan · your landed price on request</Badge>
        </div>
      }>
        Real cars, real reference numbers, real prices — read straight off BeForward's stock list.
        We don't hold any of it, so treat this as a shortlist rather than a catalogue. Send us a ref
        number and we'll confirm it's still there.
      </PageHero>

      <section style={{ background: "var(--surface-page)", padding: "var(--section-y) 0" }}>
        <div className="jojo-container" style={{ display: "grid", gap: "var(--space-12)" }}>
          <CarFinder
            whatsappNumber={d.whatsapp}
            label="Nothing here fits?"
            title="Tell us what you're looking for instead"
            note="This opens WhatsApp with your request pre-filled — it isn't a live stock search, because we don't hold the stock."
          />

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "var(--card-gap)" }}>
            {d.cars.map((c) => <CarCard key={c.refNo} {...c} fit="cover" whatsappNumber={d.whatsapp} note="FOB Japan. Subject to availability on BeForward." />)}
          </div>

          <WindowFrame title="How to read these prices" meta="FOB, not landed">
            <div style={{ display: "grid", gap: 10, font: "var(--type-sm)", color: "var(--text-muted)", lineHeight: 1.7 }}>
              <p style={{ margin: 0 }}>
                The figure on each card is BeForward's <strong style={{ color: "var(--text-body)" }}>FOB price</strong> — the
                car, free on board in Japan. It is the real listed number on the day we pulled it.
              </p>
              <p style={{ margin: 0 }}>
                Your <strong style={{ color: "var(--text-body)" }}>landed</strong> cost adds ocean freight,
                marine insurance, certification and your own import duty and clearing — all of which
                depend on your port. That's the number we work out with you on WhatsApp, and it's why
                we don't print a single price here and pretend it covers everything.
              </p>
            </div>
          </WindowFrame>

          <TrustRow note="Every car ships with" items={[
            { icon: "shield-check", label: "Third-party inspection report" },
            { icon: "file-text", label: "Export certificate & bill of lading" },
            { icon: "ship", label: "Insured ocean freight" },
          ]} />

          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button size="lg" variant="outline" icon="arrow-right" iconPosition="right" href="https://www.beforward.jp" target="_blank">Browse full BeForward stock</Button>
          </div>
        </div>
      </section>

      <CtaBand title="Seen one you like?" body="Send us the model and year. We'll confirm availability and quote a landed price for your port." primary="Ask on WhatsApp" />
    </>
  );
}

Object.assign(window, { FeaturedCars });
