const {
  Button, SectionLabel, Badge, StatBar, StatBadge, StepCard, CarCard, CarFinder,
  TestimonialCard, CompanyCard, CheckList, TrustRow, SplitSection, Icon,
} = window.JOJOInternationalDesignSystem_e58ef5;

function Hero({ onNavigate }) {
  const d = window.JOJO_DATA;
  return (
    <section style={{ position: "relative", overflow: "hidden", background: "var(--surface-page)", paddingTop: "var(--space-20)", paddingBottom: "var(--space-24)" }}>
      <div style={{ position: "absolute", top: -180, right: -120, width: 780, height: 780, borderRadius: "50%", background: "radial-gradient(circle, rgba(78,116,255,0.20) 0%, rgba(78,116,255,0) 62%)", pointerEvents: "none" }} />
      <div className="jojo-container" style={{ position: "relative", display: "grid", gridTemplateColumns: "1.05fr 1fr", gap: "var(--space-12)", alignItems: "center" }}>
        <div style={{ display: "grid", gap: "var(--space-6)" }}>
          <SectionLabel rule>Japanese cars · Karachi → Africa</SectionLabel>
          <h1 style={{ margin: 0, font: "var(--type-hero)", letterSpacing: "var(--track-hero)", color: "var(--text-strong)" }}>
            Japanese cars, delivered to your port.
          </h1>
          <p style={{ margin: 0, font: "var(--type-body-lg)", color: "var(--text-body)", maxWidth: "48ch" }}>
            We're an authorized BeForward sales agent in Karachi. Tell us the car you want on
            WhatsApp and we handle sourcing, inspection, paperwork and shipping — over 500 cars
            delivered since 2016.
          </p>
          <div style={{ display: "flex", gap: "var(--inline-gap)", flexWrap: "wrap", marginTop: 4 }}>
            <Button size="lg" icon="message-circle" href={"https://wa.me/" + d.whatsapp} target="_blank">Chat on WhatsApp</Button>
            <Button size="lg" variant="outline" href="#how-it-works" onClick={(e) => { e.preventDefault(); onNavigate({ href: "#how-it-works" }); }}>See how it works</Button>
          </div>
          <TrustRow
            note="Authorized & verified"
            style={{ marginTop: "var(--space-4)" }}
            items={[
              { icon: "shield-check", label: "BeForward authorized agent" },
              { icon: "ship", label: "Durban · Dar es Salaam · Mombasa" },
              { icon: "file-text", label: "Export documents handled" },
            ]}
          />
        </div>

        <div style={{ position: "relative" }}>
          <div style={{ position: "relative", height: 380, borderRadius: "var(--radius-xl)", overflow: "hidden", background: "linear-gradient(158deg, var(--navy-700), var(--navy-900))", border: "1px solid var(--border-hairline)", display: "grid", placeItems: "center" }}>
            <div style={{ position: "absolute", inset: 0, background: "var(--scrim-grade)" }} />
            <img src="assets/cars/toyota-land-cruiser-prado.png" alt="Toyota Land Cruiser Prado" style={{ position: "relative", width: "92%", objectFit: "contain" }} />
            <div style={{ position: "absolute", left: 20, top: 18, font: "var(--type-meta)", color: "var(--text-subtle)" }}>
              Placeholder — real hero photograph or 15s loop goes here
            </div>
          </div>
          <StatBadge value="500+" label="Cars delivered" sublabel="Since 2016" style={{ position: "absolute", right: -18, bottom: -26 }} />
        </div>
      </div>
    </section>
  );
}

function HowItWorksPreview({ onNavigate }) {
  const d = window.JOJO_DATA;
  return (
    <section style={{ background: "var(--surface-page)", padding: "var(--section-y) 0" }}>
      <div className="jojo-container" style={{ display: "grid", gap: "var(--space-10)" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-8)", alignItems: "flex-end", justifyContent: "space-between" }}>
          <div style={{ display: "grid", gap: 14, maxWidth: "44ch" }}>
            <SectionLabel rule>How it works</SectionLabel>
            <h2 style={{ margin: 0, font: "var(--type-h2)", letterSpacing: "var(--track-h2)", color: "var(--text-strong)" }}>Four steps between you and a Japanese car.</h2>
          </div>
          <a href="#how-it-works" onClick={(e) => { e.preventDefault(); onNavigate({ href: "#how-it-works" }); }}
            style={{ display: "inline-flex", alignItems: "center", gap: 8, font: "var(--type-sm)", fontWeight: "var(--weight-semibold)", color: "var(--blue-300)", textDecoration: "none" }}>
            See the full process <Icon name="arrow-right" size={16} />
          </a>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "var(--card-gap)" }}>
          {d.steps.map((s) => <StepCard key={s.index} index={s.index} icon={s.icon} title={s.title}>{s.body}</StepCard>)}
        </div>
      </div>
    </section>
  );
}

function FeaturedPreview({ onNavigate }) {
  const d = window.JOJO_DATA;
  return (
    <section style={{ background: "var(--surface-section)", borderBlock: "1px solid var(--border-hairline)", padding: "var(--section-y) 0" }}>
      <div className="jojo-container" style={{ display: "grid", gap: "var(--space-12)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 420px", gap: "var(--space-12)", alignItems: "center" }}>
          <div style={{ display: "grid", gap: 16, maxWidth: "46ch" }}>
            <SectionLabel rule>Featured this week</SectionLabel>
            <h2 style={{ margin: 0, font: "var(--type-h2)", letterSpacing: "var(--track-h2)", color: "var(--text-strong)" }}>Six cars we can quote today.</h2>
            <p style={{ margin: 0, font: "var(--type-body-lg)", color: "var(--text-muted)" }}>
              A hand-picked selection, updated weekly. The full stock lives on BeForward — ask about
              any car and we'll confirm availability within 24 hours.
            </p>
            <Badge tone="muted" size="sm">Not a live catalogue</Badge>
          </div>
          <CarFinder floating whatsappNumber={d.whatsapp} />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "var(--card-gap)" }}>
          {d.cars.slice(0, 6).map((c) => <CarCard key={c.refNo} {...c} fit="cover" whatsappNumber={d.whatsapp} note="FOB Japan. Subject to availability on BeForward." />)}
        </div>

        <div style={{ display: "flex", justifyContent: "center", gap: "var(--inline-gap)", flexWrap: "wrap" }}>
          <Button variant="outline" icon="arrow-right" iconPosition="right" href="https://www.beforward.jp" target="_blank">Browse full BeForward stock</Button>
          <Button variant="ghost" onClick={() => onNavigate({ href: "#featured" })}>See our weekly picks</Button>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const d = window.JOJO_DATA;
  return (
    <section style={{ background: "var(--surface-page)", padding: "var(--section-y) 0" }}>
      <div className="jojo-container" style={{ display: "grid", gap: "var(--space-10)" }}>
        <div style={{ display: "grid", gap: 14, maxWidth: "46ch" }}>
          <SectionLabel>What buyers say</SectionLabel>
          <h2 style={{ margin: 0, font: "var(--type-h2)", letterSpacing: "var(--track-h2)", color: "var(--text-strong)" }}>Three threads that ended in a delivery.</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "var(--card-gap)" }}>
          {d.testimonials.map((t) => <TestimonialCard key={t.name} {...t} sample />)}
        </div>
      </div>
    </section>
  );
}

function GroupCompanies() {
  return (
    <section style={{ background: "var(--surface-page-alt)", borderTop: "1px solid var(--border-hairline)", padding: "var(--section-y) 0" }}>
      <div className="jojo-container" style={{ display: "grid", gap: "var(--space-10)" }}>
        <div style={{ display: "grid", gap: 14, maxWidth: "46ch" }}>
          <SectionLabel tone="muted">Group companies</SectionLabel>
          <h2 style={{ margin: 0, font: "var(--type-h2)", letterSpacing: "var(--track-h2)", color: "var(--text-strong)" }}>The rest of the group.</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--card-gap)" }}>
          <CompanyCard logo="assets/logo/mi-logistics-trimmed.png" logoHeight={40} name="MI Logistics" tagline="Domestic transport · Pakistan" linkLabel="Get a freight quote" href="logistics.html">
            Our sister company moves vehicles and cargo inside Pakistan — port clearing, upcountry
            delivery and fleet transport, city to city.
          </CompanyCard>
          <CompanyCard logo="https://jojo-international.com/assets/images/clients/logo-1.png" logoHeight={44} name="JOJO Techzone" tagline="Technology arm" linkLabel="Visit jojotechzone.com" href="http://jojotechzone.com/" target="_blank">
            The group's technology company. Logo hot-linked from the live JOJO site — download it
            into <code>assets/logo/</code> before launch.
          </CompanyCard>
        </div>
      </div>
    </section>
  );
}

function Home({ onNavigate }) {
  const d = window.JOJO_DATA;
  return (
    <>
      <Hero onNavigate={onNavigate} />
      <StatBar stats={d.stats} />
      <HowItWorksPreview onNavigate={onNavigate} />
      <SplitSection
        label="Who we are"
        title="A Karachi office, a Japanese supply chain, one WhatsApp thread."
        background="var(--surface-page)"
        diagonal
        mediaSrc="https://jojo-international.com/assets/images/who-we-are-image.png"
        mediaAlt="JOJO International sales floor"
        aside={<CheckList items={[
          "Authorized BeForward sales agent since 2016",
          "Inspection report and photos before you pay",
          "Export paperwork and shipping handled end to end",
          "One WhatsApp thread from first question to delivery",
        ]} />}
        actions={<>
          <Button icon="message-circle" href={"https://wa.me/" + d.whatsapp} target="_blank">Chat on WhatsApp</Button>
          <Button variant="outline" onClick={() => onNavigate({ href: "#about" })}>About us</Button>
        </>}
      >
        <p>
          We started in 2016 with one office in North Nazimabad and a BeForward agency. Today most of
          our buyers are in South Africa, Zambia and Zimbabwe — people importing their first car and
          understandably nervous about sending money to another continent.
        </p>
        <p>
          So we do the boring things properly: inspection photos before payment, documents checked
          twice, and one person on your thread from the first question to the bill of lading.
        </p>
      </SplitSection>
      <FeaturedPreview onNavigate={onNavigate} />
      <Testimonials />
      <GroupCompanies />
      <CtaBand secondary="See how it works" secondaryHref="#how-it-works" />
    </>
  );
}

Object.assign(window, { Home, Hero, HowItWorksPreview, FeaturedPreview, Testimonials, GroupCompanies });
