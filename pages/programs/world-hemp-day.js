export default function WorldHempDay() {
  const whatsappHref = "https://wa.me/919999659994";

  return (
    <main style={{ padding: 40, fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial' }}>
      <h1 style={{ fontSize: 32, color: "#235d35", marginBottom: 8 }}>World Hemp Day 2025</h1>
      <p style={{ color: "#555", maxWidth: 760 }}>
        Celebrating the power of hemp for people, planet, and prosperity.  
        Join the Indian Hemp Association’s national campaign on <b>June 26, 2025</b> —  
        bringing together innovators, farmers, and changemakers for a regenerative India.
      </p>

      {/* Highlights */}
      <section style={section}>
        <h2 style={h2}>Highlights for 2025</h2>
        <ul style={ul}>
          <li>🌿 Nationwide workshops on hemp farming & innovation</li>
          <li>🤝 IHA Awards — recognising sustainable entrepreneurs</li>
          <li>📊 “Hemp for Climate” report & policy brief release</li>
          <li>🎨 Art, design & youth innovation challenges</li>
          <li>🎥 Livestream sessions with global partners</li>
        </ul>
      </section>

      {/* How to Participate */}
      <section style={section}>
        <h2 style={h2}>Get Involved</h2>
        <p style={{ color: "#444" }}>
          Anyone can host or join a World Hemp Day event. Register your initiative and we’ll list it on the IHA interactive map.
        </p>

        <form
          action="mailto:info@indianhempassociation.com?subject=World%20Hemp%20Day%202025%20Participation"
          method="POST"
          encType="text/plain"
          style={{ display: "grid", gap: 12, maxWidth: 560 }}
        >
          <input required placeholder="Name / Organisation" style={input}/>
          <input required type="email" placeholder="Email" style={input}/>
          <input required placeholder="City / State" style={input}/>
          <select required style={input}>
            <option value="">Role</option>
            <option value="host">Host an event</option>
            <option value="partner">Partner / Sponsor</option>
            <option value="volunteer">Volunteer</option>
            <option value="participant">Attend / Promote</option>
          </select>
          <textarea rows={5} placeholder="Describe your planned activity or interest…" style={{ ...input, height: 120 }}/>
          <button type="submit" style={buttonPrimary}>Send Participation Form</button>
        </form>

        <p style={{ marginTop: 12, color: "#666" }}>
          Prefer WhatsApp?{" "}
          <a href={whatsappHref + "?text=World%20Hemp%20Day%20Participation%20—%20Name%2C%20City%2C%20Role"} style={link}>
            Chat with IHA Team
          </a>
        </p>
      </section>

      {/* Partners & Collaborations */}
      <section style={section}>
        <h2 style={h2}>Collaborating Partners</h2>
        <ul style={ul}>
          <li>• Research & incubation partners (Pusa Krishi, NIIST, NECTAR, etc.)</li>
          <li>• Farmer networks & FPOs in Uttarakhand, Punjab, and Telangana</li>
          <li>• Global associations (EIHA, NHGA, IFCHA)</li>
          <li>• Design & sustainability universities</li>
          <li>• CSR, circular economy, and climate ventures</li>
        </ul>
      </section>

      {/* Countdown + CTA */}
      <section style={section}>
        <h2 style={h2}>Countdown to June 26, 2025</h2>
        <p style={{ fontSize: 18, fontWeight: 700, color: "#235d35" }}>Let’s make India lead the global hemp revolution.</p>
        <a href="mailto:info@indianhempassociation.com?subject=World%20Hemp%20Day%20Partnership" style={buttonPrimary}>Partner with IHA</a>
      </section>
    </main>
  );
}

/* styles */
const section = { marginTop: 22, background: "#fff", borderRadius: 14, padding: 16, boxShadow: "0 1px 3px rgba(0,0,0,0.06)" };
const h2 = { margin: 0, fontSize: 20, color: "#235d35" };
const ul = { margin: "10px 0 0 16px", color: "#444", lineHeight: 1.6 };
const input = { border: "1px solid #ddd", borderRadius: 12, padding: "10px 12px", fontSize: 14 };
const buttonPrimary = { background: "#235d35", color: "#fff", border: "none", padding: "10px 14px", borderRadius: 12, fontWeight: 700, cursor: "pointer", textDecoration: "none" };
const link = { color: "#235d35", textDecoration: "none", fontWeight: 600 };
