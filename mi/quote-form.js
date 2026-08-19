const { Select, Input, Button, SectionLabel, Badge } = window.JOJOInternationalDesignSystem_e58ef5;

function QuoteForm({ floating = true }) {
  const d = window.MI_DATA;
  const [q, setQ] = React.useState({ from: "", to: "", cargo: "", qty: "", date: "" });
  const set = (k) => (e) => setQ((s) => ({ ...s, [k]: e.target.value }));

  const message =
    "Hi MI Logistics, I need a transport quote." +
    (q.from ? " Pickup: " + q.from + "." : "") +
    (q.to ? " Drop-off: " + q.to + "." : "") +
    (q.cargo ? " Cargo: " + q.cargo + "." : "") +
    (q.qty ? " Quantity/weight: " + q.qty + "." : "") +
    (q.date ? " Preferred date: " + q.date + "." : "");
  const href = "https://wa.me/" + d.whatsapp + "?text=" + encodeURIComponent(message);

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      style={{
        background: "var(--surface-card)",
        border: "1px solid " + (floating ? "var(--border-soft)" : "var(--border-hairline)"),
        borderRadius: "var(--radius-lg)",
        boxShadow: floating ? "var(--shadow-float)" : "var(--shadow-card)",
        padding: "var(--card-pad-lg)",
        display: "grid", gap: "var(--space-5)",
      }}
    >
      <div style={{ display: "grid", gap: 12 }}>
        <SectionLabel>Get a quote</SectionLabel>
        <h3 style={{ margin: 0, font: "var(--type-h4)", letterSpacing: "var(--track-h4)", color: "var(--text-strong)" }}>Where is it going?</h3>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-4)" }}>
        <Select label="Pickup city" options={d.cities} placeholder="Select city" value={q.from} onChange={set("from")} />
        <Select label="Drop-off city" options={d.cities} placeholder="Select city" value={q.to} onChange={set("to")} />
        <Select label="Cargo type" options={d.cargoTypes} placeholder="Select type" value={q.cargo} onChange={set("cargo")} style={{ gridColumn: "1 / -1" }} />
        <Input label="Vehicles / weight" placeholder="e.g. 2 cars, or 12 tonnes" value={q.qty} onChange={set("qty")} />
        <Input label="Preferred date" type="date" value={q.date} onChange={set("date")} />
      </div>

      <div style={{ display: "grid", gap: 12 }}>
        <Button icon="message-circle" href={href} target="_blank" fullWidth>Send on WhatsApp</Button>
        <p style={{ margin: 0, font: "var(--type-meta)", color: "var(--text-subtle)", lineHeight: 1.6 }}>
          This opens WhatsApp with your route pre-filled. Rates depend on route, load and date, so we
          quote per job rather than showing a table we'd have to keep correcting.
        </p>
      </div>
      <Badge tone="muted" size="sm">Placeholder rate policy — confirm before launch</Badge>
    </form>
  );
}

Object.assign(window, { QuoteForm });
