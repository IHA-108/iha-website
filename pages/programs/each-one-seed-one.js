export default function EachOneSeedOne() {
  const whatsappHref = "https://wa.me/919999659994";

  return (
    <main style={{ padding: 40, fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial' }}>
      <h1 style={{ margin: 0, fontSize: 28, color: "#235d35" }}>Each One • Seed One</h1>
      <p style={{ color: "#555", marginTop: 8 }}>
        A simple, scalable movement: every supporter helps at least one new person start their journey with industrial hemp —
        from seeds and skills to market linkages. Build awareness, skills, and livelihoods together.
      </p>

      {/* What is it */}
      <section style={section}>
        <h2 style={h2}>How the Movement Works</h2>
        <ol style={ol}>
          <li><b>Seed:</b> Sponsor a starter kit or awareness session for one new participant.</li>
          <li><b>Support:</b> Connect them to IHA resources — training, programs, and mentors.</li>
          <li><b>Scale:</b> Each new participant pledges to “seed” at least one more person.</li>
        </ol>
      </section>

      {/* Who can join */}
      <section style={section}>
        <h2 style={h2}>Who Can Join</h2>
        <ul style={ul}>
          <li>• Farmers, FPOs, and rural youth</li>
          <li>• Processors and small manufacturers</li>
          <li>• Colleges/Incubators & community organisations</li>
          <li>• CSR, investors, and well-wishers</li>
        </ul>
      </section>

      {/* Pledge */}
      <section style={section}>
        <h2 style={h2}>Make the Pledge</h2>
        <p style={{ color: "#444" }}>
          Pledge to help at least one person get started — sponsor seeds/training or run an awareness talk with IHA support.
        </p>

        <form
          action="mailto:info@indianhempassociation.com?subject=Each%20One%20•%20Seed%20One%20—%20Pledge"
          method="POST"
          encType="text/plain"
          style={{ display: "grid", gap: 12, maxWidth: 560 }}
        >
          <input required placeholder="Your Name / Organisation" style={input}/>
          <input required type="email" placeholder="Email" style={input}/>
          <input required placeholder="Phone" style={input}/>
          <select required style={input}>
            <option value="">I want to</option>
            <option value="sponsor">Sponsor starter kits / session</option>
            <option value="host">Host an awareness session</option>
            <option value="mentor">Mentor a participant/team</option>
            <option value="other">Other (share below)</option>
          </select>
          <textarea rows={5} placeholder="City/State, how you’d like to contribute, timeline…" style={{ ...input, height: 120 }}/>
          <button type="submit" style={buttonPrimary}>Send my Pledge (Email)</button>
        </form>

        <p style={{ marginTop: 12, color: "#666" }}>
          Prefer WhatsApp?{" "}
          <a href={whatsappHref + "?text=Each%20One%20Seed%20One%20Pledge%20—%20Name%2C%20City%2C%20How%20I%20can%20help"} style={link}>
            Chat with IHA Team
          </a>
        </p>
      </section>

      {/* Use of Support */}
      <section style={section}>
        <h2 style={h2}>Where Your Support Goes</h2>
        <ul style={ul}>
          <li>• Starter kits / demo plots / awareness materials</li>
          <li>• Training sessions & field support</li>
          <li>• Connecting to processors and market pathways</li>
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
