const { SectionLabel, StepCard, CheckList, WindowFrame, TrustRow, Badge } = window.JOJOInternationalDesignSystem_e58ef5;

function Coverage() {
  const d = window.MI_DATA;
  return (
    <section style={{ background: "var(--surface-section)", borderBlock: "1px solid var(--border-hairline)", padding: "var(--section-y) 0" }}>
      <div className="jojo-container" style={{ display: "grid", gap: "var(--space-12)" }}>
        <div style={{ display: "grid", gap: 14, maxWidth: "46ch" }}>
          <SectionLabel rule>Coverage & fleet</SectionLabel>
          <h2 style={{ margin: 0, font: "var(--type-h2)", letterSpacing: "var(--track-h2)", color: "var(--text-strong)" }}>Karachi port to anywhere upcountry.</h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-12)", alignItems: "start" }}>
          <div style={{ display: "grid", gap: "var(--space-5)" }}>
            <div style={{ position: "relative", borderRadius: "var(--radius-lg)", border: "1px solid var(--border-hairline)", background: "var(--surface-inset)", overflow: "hidden" }}>
              <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 50% 68%, rgba(78,116,255,0.16) 0%, rgba(78,116,255,0) 66%)", pointerEvents: "none" }} />
              <div style={{ position: "absolute", left: 16, top: 14, zIndex: 2, display: "grid", gap: 3 }}>
                <span style={{ font: "var(--type-label)", letterSpacing: "var(--track-label)", textTransform: "uppercase", color: "var(--text-subtle)" }}>Coverage</span>
                <span style={{ font: "var(--type-sm)", color: "var(--text-body)" }}>Karachi port &rarr; upcountry</span>
              </div>
              <pakistan-map-3d style={{ display: "block", height: 400 }}></pakistan-map-3d>
            </div>
            <WindowFrame title="Cities served" meta={d.cities.length + " routes"}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {d.cities.map((c) => <Badge key={c} tone="soft" size="sm">{c}</Badge>)}
              </div>
            </WindowFrame>
          </div>

          <div style={{ display: "grid", gap: "var(--card-gap)" }}>
            {d.fleet.map((item) => <StepCard key={item.title} icon={item.icon} title={item.title}>{item.body}</StepCard>)}
            <div style={{ height: 190, borderRadius: "var(--radius-lg)", border: "1.5px dashed var(--border-soft)", background: "var(--surface-inset)", display: "grid", placeItems: "center", gap: 6, textAlign: "center", padding: 20 }}>
              <span style={{ font: "var(--type-label)", letterSpacing: "var(--track-label)", textTransform: "uppercase", color: "var(--text-subtle)" }}>Fleet photo</span>
              <span style={{ font: "var(--type-meta)", color: "var(--text-subtle)", maxWidth: "38ch", lineHeight: 1.7 }}>Real photograph of an MI Logistics carrier — no stock truck.</span>
            </div>
          </div>
        </div>

        <TrustRow note="Every job includes" items={d.promises} />
      </div>
    </section>
  );
}

Object.assign(window, { Coverage });
