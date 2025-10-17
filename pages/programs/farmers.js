export default function FarmerProgram() {
  const whatsappHref = "https://wa.me/919999659994";

  return (
    <main style={{ padding: 40, fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial' }}>
      <h1 style={{ margin: 0, fontSize: 28, color: "#235d35" }}>Adopt-a-Farm (Farmers)</h1>
      <p style={{ color: "#555", marginTop: 8 }}>
        Join IHA’s farmer network to grow industrial hemp with training, inputs support,
        licensing guidance, assured market linkages, and optional buy-back & carbon-credit readiness.
      </p>

      {/* Key Benefits */}
      <section style={section}>
        <h2 style={h2}>What You Get</h2>
        <ul style={ul}>
          <li>✅ Agronomy training & cultivation SOPs (seed rate, spacing, IPM, harvest)</li>
          <li>✅ Guidance on state permissions / licensing compliance (where applicable)</li>
          <li>✅ Input support & quality standards (fiber/seed/dual-purpose cultivars)</li>
          <li>✅ Assured procurement via IHA processor network (buy-back MoU)</li>
          <li>✅ Farm-gate QA + traceability onboarding</li>
          <li>✅ Carbon-readiness (data, MRV templates, rotation planning)</li>
        </ul>
      </section>

      {/* Eligibility */}
      <section style={section}>
        <h2 style={h2}>Eligibility</h2>
        <ul style={ul}>
          <li>• Landholding (owned/leased) suitable for pilot: 0.5–5 hectares to start</li>
          <li>• Access to irrigation (as per local recommendation) & basic storage</li>
          <li>• Willingness to follow IHA SOPs and quality standards</li>
          <li>• Readiness to work with IHA field officers / partner FPOs</li>
        </ul>
      </section>

      {/* How it Works */}
      <section style={section}>
        <h2 style={h2}>How It Works</h2>
        <ol style={ol}>
          <li><b>Apply:</b> Fill the quick interest form below.</li>
          <li><b>Screening:</b> IHA team verifies location, season window, and permissions.</li>
          <li><b>Onboard:</b> Sign SOP & (optional) buy-back MoU; receive training & inputs plan.</li>
          <li><b>Cultivate:</b> IHA agronomy support through the season; farm-gate QA.</li>
          <li><b>Sell:</b> Deliver to linked processor/buyer; settlements as per MoU.</li>
          <li><b>Carbon readiness (optional):</b> Record field data using IHA templates for future credits.</li>
        </ol>
      </section>

      {/* Quick Interest Form (email) */}
      <section style={section}>
        <h2 style={h2}>Apply — Farmer Interest</h2>
        <form
          action="mailto:info@indianhempassociation.com?subject=Farmer%20Application%20—%20Adopt-a-Farm"
          method="POST"
          encType="text/plain"
          style={{ display: "grid", gap: 12, maxWidth: 560 }}
        >
          <input required placeholder="Full Name" style={input}/>
          <input required placeholder="Phone" style={input}/>
          <input required type="email" placeholder="Email" style={input}/>
          <input required placeholder="Village / District / State" style={input}/>
          <input required placeholder="Land Area (hectares)" style={input}/>
          <select required style={input}>
            <option value="">Cultivar focus</option>
            <option value="fiber">Fiber</option>
            <option value="seed">Seed / Grain</option>
            <option value="dual">Dual-purpose</option>
          </select>
          <textarea rows={5} placeholder="Brief: soil/irrigation, season window, prior crops…" style={{ ...input, height: 120 }}/>
          <label style={{ fontSize: 13, color: "#444" }}>
            <input type="checkbox" required style={{ marginRight: 8 }}/>
            I agree to follow IHA SOPs and quality standards.
          </label>
          <button type="submit" style={buttonPrimary}>Submit via Email</button>
        </form>

        <p style={{ marginTop: 12, color: "#666" }}>
          Prefer WhatsApp?{" "}
          <a href={whatsappHref + "?text=Farmer%20Application%20Adopt-a-Farm%20—%20Name%2C%20State%2C%20Area"} style={link}>
            Chat with IHA Team
          </a>
        </p>
      </section>

      {/* Documents / Next */}
      <section style={section}>
        <h2 style={h2}>What to Keep Ready</h2>
        <ul style={ul}>
          <li>• ID & land docs (ownership/lease), bank details for settlements</li>
          <li>• Basic soil/irrigation info and prior cropping pattern</li>
          <li>• Local permissions (if applicable) — we’ll guide you</li>
        </ul>
        <p style={{ color: "#555" }}>
          After submission, IHA will contact you with next steps and local season timelines.
        </p>
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
