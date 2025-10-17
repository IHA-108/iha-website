export default function ProcessorProgram() {
  const whatsappHref = "https://wa.me/919999659994";

  return (
    <main style={{ padding: 40, fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial' }}>
      <h1 style={{ margin: 0, fontSize: 28, color: "#235d35" }}>Processor Network</h1>
      <p style={{ color: "#555", marginTop: 8 }}>
        Join IHA’s national processor network for steady raw material pipelines, quality standards,
        compliance guidance, and export-grade buyer linkages.
      </p>

      {/* Value Proposition */}
      <section style={section}>
        <h2 style={h2}>What You Get</h2>
        <ul style={ul}>
          <li>✅ Aggregated raw material supply (fiber / seed / dual-purpose) via IHA farmer clusters</li>
          <li>✅ QA & grading SOPs + traceability onboarding</li>
          <li>✅ Buyer introductions (domestic & export) and market intelligence</li>
          <li>✅ Compliance templates (FSSAI/AYUSH/local permits as applicable)</li>
          <li>✅ Co-development of standards with global associations</li>
        </ul>
      </section>

      {/* Requirements */}
      <section style={section}>
        <h2 style={h2}>Eligibility & Requirements</h2>
        <ul style={ul}>
          <li>• Registered processing unit or unit under setup with basic machinery and storage</li>
          <li>• Readiness to adopt IHA quality benchmarks and data sharing for traceability</li>
          <li>• Transparent pricing and timely settlements with farmers (via IHA/FPO MoUs)</li>
        </ul>
      </section>

      {/* How it Works */}
      <section style={section}>
        <h2 style={h2}>How It Works</h2>
        <ol style={ol}>
          <li><b>Apply:</b> Share capacity, product focus, and compliance status.</li>
          <li><b>Qualify:</b> IHA team evaluates QA readiness and procurement plan.</li>
          <li><b>Onboard:</b> Sign processor MoU; receive supply calendar and SOPs.</li>
          <li><b>Operate:</b> Procure from IHA clusters; implement QA, traceability, settlements.</li>
          <li><b>Grow:</b> Access new buyers; co-develop products and export pipelines.</li>
        </ol>
      </section>

      {/* Quick Interest Form */}
      <section style={section}>
        <h2 style={h2}>Apply — Processor Interest</h2>
        <form
          action="mailto:info@indianhempassociation.com?subject=Processor%20Application%20—%20IHA%20Network"
          method="POST"
          encType="text/plain"
          style={{ display: "grid", gap: 12, maxWidth: 560 }}
        >
          <input required placeholder="Company Name" style={input}/>
          <input required placeholder="Contact Name" style={input}/>
          <input required type="email" placeholder="Email" style={input}/>
          <input required placeholder="Phone" style={input}/>
          <input required placeholder="Location (City / State)" style={input}/>
          <select required style={input}>
            <option value="">Product Focus</option>
            <option value="fiber">Fiber / Textiles</option>
            <option value="hurd">Hurd / Hempcrete</option>
            <option value="seed">Seed / Oil / Food</option>
            <option value="extracts">Extracts (where compliant)</option>
          </select>
          <textarea rows={5} placeholder="Capacity, certifications, current buyers, and any compliance notes…"
            style={{ ...input, height: 120 }}/>
          <button type="submit" style={buttonPrimary}>Submit via Email</button>
        </form>

        <p style={{ marginTop: 12, color: "#666" }}>
          Prefer WhatsApp?{" "}
          <a href={whatsappHref + "?text=Processor%20Application%20—%20Name%2C%20City%2C%20Product%20Focus"} style={link}>
            Chat with IHA Team
          </a>
        </p>
      </section>

      {/* Documents */}
      <section style={section}>
        <h2 style={h2}>What to Keep Ready</h2>
        <ul style={ul}>
          <li>• Company registration, GST, basic permits</li>
          <li>• QA process notes and any certifications</li>
          <li>• Indicative capacity and monthly procurement plan</li>
        </ul>
      </section>
    </main>
  );
}

/* styles */
const section = { marginTop: 22, background: "#fff", borderRadius: 14, padding: 16, boxShadow: "0 1px 3px rgba(0,0,0,0.06)" };
const h2 = { margin: 0, fontSize: 20, color: "#235d35" };
const ul = { margin: "10px 0 0 16px", color: "#444", lineHeight: 1.6 };
const ol = { margin: "10px 0 0 16px", color: "#444", lineHeight: 1.6 };
const input = { border: "1px solid #ddd", borderRadius: 12, padding: "10px 12px", fontSize: 14 };
const buttonPrimary = { background: "#235d35", color: "#fff", border: "none", padding: "10px 14px", borderRadius: 12, fontWeight: 700, cursor: "pointer" };
const link = { color: "#235d35", textDecoration: "none", fontWeight: 600 };
