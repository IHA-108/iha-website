export default function PatientProgram() {
  const whatsappHref = "https://wa.me/919999659994";

  return (
    <main style={{ padding: 40, fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial' }}>
      <h1 style={{ margin: 0, fontSize: 28, color: "#235d35" }}>Patient Guidance</h1>
      <p style={{ color: "#555", marginTop: 8 }}>
        IHA facilitates safe access pathways for eligible patients by connecting them with licensed doctors
        and compliant partner clinics. Phase-1 is online coordination; Phase-2 expands to offline support.
      </p>

      {/* What We Do */}
      <section style={section}>
        <h2 style={h2}>What We Help With</h2>
        <ul style={ul}>
          <li>✅ Understand regulations and eligible indications (state & clinician dependent)</li>
          <li>✅ Connect with licensed doctors/clinics for consultation</li>
          <li>✅ Support with prescription fulfillment via compliant partners</li>
          <li>✅ Patient education on safe use and follow-up</li>
        </ul>
      </section>

      {/* How It Works */}
      <section style={section}>
        <h2 style={h2}>How It Works</h2>
        <ol style={ol}>
          <li><b>Submit interest:</b> Fill the quick form below with your condition and city.</li>
          <li><b>Triage & match:</b> Our team matches you to a licensed doctor or partner clinic.</li>
          <li><b>Consultation:</b> Doctor reviews eligibility and issues advice/prescription if appropriate.</li>
          <li><b>Follow-up:</b> We support scheduling and general guidance (non-medical).</li>
        </ol>
      </section>

      {/* Quick Intake Form (email) */}
      <section style={section}>
        <h2 style={h2}>Patient Intake — Request a Doctor Consultation</h2>
        <form
          action="mailto:info@indianhempassociation.com?subject=Patient%20Intake%20—%20Doctor%20Consultation%20Request"
          method="POST"
          encType="text/plain"
          style={{ display: "grid", gap: 12, maxWidth: 560 }}
        >
          <input required placeholder="Full Name" style={input}/>
          <input required type="email" placeholder="Email" style={input}/>
          <input required placeholder="Phone" style={input}/>
          <input required placeholder="City / State" style={input}/>
          <select required style={input}>
            <option value="">Consultation Type</option>
            <option value="online">Online (Video)</option>
            <option value="offline">Offline (Clinic)</option>
          </select>
          <textarea rows={5} placeholder="Briefly describe your condition and current medications (if any)…" style={{ ...input, height: 120 }}/>
          <label style={{ fontSize: 13, color: "#444" }}>
            <input type="checkbox" required style={{ marginRight: 8 }}/>
            I consent to share my details with IHA’s partner clinicians for consultation coordination.
          </label>
          <button type="submit" style={buttonPrimary}>Submit via Email</button>
        </form>

        <p style={{ marginTop: 12, color: "#666" }}>
          Prefer WhatsApp?{" "}
          <a href={whatsappHref + "?text=Patient%20Consultation%20Request%20—%20Name%2C%20City%2C%20Online/Offline"} style={link}>
            Chat with IHA Team
          </a>
        </p>
      </section>

      {/* Notes / Disclaimer */}
      <section style={section}>
        <h2 style={h2}>Important Notes</h2>
        <ul style={ul}>
          <li>• IHA does not offer medical advice. All medical decisions are made by licensed clinicians.</li>
          <li>• Access and products are subject to local laws and clinic/doctor discretion.</li>
          <li>• Keep your ID and prior prescriptions available for the consultation.</li>
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
