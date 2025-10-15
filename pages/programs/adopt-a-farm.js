import Head from 'next/head';

export default function AdoptAFarm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const lines = [
      `Sponsor Name/Org: ${data.name || ""}`,
      `Contact Phone: ${data.phone || ""}`,
      `Email: ${data.email || ""}`,
      `Tier Selected: ${data.tier || ""}`,
      `State/Region (preferred): ${data.region || ""}`,
      `Farm Size to Support (acres): ${data.acres || ""}`,
      `Recurring Support: ${data.recurring || ""}`,
      `Notes: ${data.notes || ""}`
    ].join("%0A");

    window.location.href = `mailto:info@indianhempassociation.com?subject=Adopt-a-Farm%20Pledge&body=${lines}`;
    window.open(`https://wa.me/919999659994?text=IHA%20Adopt-a-Farm%20Pledge:%0A${lines}`, "_blank");
  };

  const Field = ({ label, name, type = "text", required=false, ...rest }) => (
    <label style={{ display: "grid", gap: 6 }}>
      <span style={{ fontSize: 13, color: "#333", fontWeight: 600 }}>{label}</span>
      <input name={name} type={type} required={required}
             style={{ border: "1px solid #ddd", borderRadius: 12, padding: "10px 12px" }} {...rest} />
    </label>
  );

  return (
    <>
      <Head>
        <title>Adopt-a-Farm — Indian Hemp Association</title>
        <meta name="description" content="Sponsor seeds, irrigation, and training for hemp farms. CSR and individual pledges welcome." />
        <link rel="canonical" href="https://www.indianhempassociation.com/programs/adopt-a-farm" />
      </Head>

      <main style={{ padding: "32px 16px", fontFamily: "system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial" }}>
        <header style={{ maxWidth: 900, margin: "0 auto 16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <a href="/programs" style={{ color: "#235d35", textDecoration: "none", fontWeight: 700 }}>← All Programs</a>
          <a href="/" style={{ color: "#111", textDecoration: "none" }}>Home</a>
        </header>

        <section style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ borderRadius: 20, padding: "24px 20px", color: "#fff",
            background: "linear-gradient(135deg,#235d35 0%, #0d6e57 60%, #0b5a4a 100%)" }}>
            <h1 style={{ margin: 0, fontSize: 28 }}>Adopt-a-Farm (Sponsor a Hemp Farm)</h1>
            <p style={{ marginTop: 6, opacity: 0.95 }}>
              Support farmers with seeds, irrigation, training, and market linkages. Choose a tier below and we’ll match you to a farm cluster.
            </p>
          </div>

          {/* TIERS */}
          <div style={{ marginTop: 16, display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 12 }}>
            <div style={{ background:"#fff", borderRadius:16, padding:16, boxShadow:"0 1px 3px rgba(0,0,0,0.06)" }}>
              <div style={{ fontWeight:800 }}>Seed Tier</div>
              <div style={{ color:"#555", fontSize:14, margin:"6px 0" }}>Starter inputs & training</div>
              <div style={{ fontWeight:700 }}>₹5,000+</div>
            </div>
            <div style={{ background:"#fff", borderRadius:16, padding:16, boxShadow:"0 1px 3px rgba(0,0,0,0.06)" }}>
              <div style={{ fontWeight:800 }}>Irrigation Tier</div>
              <div style={{ color:"#555", fontSize:14, margin:"6px 0" }}>Drip/irrigation support</div>
              <div style={{ fontWeight:700 }}>₹50,000+</div>
            </div>
            <div style={{ background:"#fff", borderRadius:16, padding:16, boxShadow:"0 1px 3px rgba(0,0,0,0.06)" }}>
              <div style={{ fontWeight:800 }}>Training Tier</div>
              <div style={{ color:"#555", fontSize:14, margin:"6px 0" }}>Farmer cohort training</div>
              <div style={{ fontWeight:700 }}>₹1,00,000+</div>
            </div>
            <div style={{ background:"#fff", borderRadius:16, padding:16, boxShadow:"0 1px 3px rgba(0,0,0,0.06)" }}>
              <div style={{ fontWeight:800 }}>Custom / CSR</div>
              <div style={{ color:"#555", fontSize:14, margin:"6px 0" }}>Cluster or district-level</div>
              <div style={{ fontWeight:700 }}>₹5,00,000+</div>
            </div>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit}
                style={{ marginTop: 16, background: "#fff", borderRadius: 16, padding: 18,
                         boxShadow: "0 1px 3px rgba(0,0,0,0.06)", display: "grid", gap: 12 }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 12 }}>
              <Field label="Your Name / Organization" name="name" required />
              <Field label="Phone (WhatsApp preferred)" name="phone" required />
              <Field label="Email" name="email" type="email" />
              <Field label="Preferred State / Region" name="region" />
              <Field label="Farm Size to Support (acres)" name="acres" type="number" step="0.1" />
              <label style={{ display: "grid", gap: 6 }}>
                <span style={{ fontSize: 13, color: "#333", fontWeight: 600 }}>Choose a Tier</span>
                <select name="tier" style={{ border: "1px solid #ddd", borderRadius: 12, padding: "10px 12px" }}>
                  <option value="Seed (₹5,000+)">Seed (₹5,000+)</option>
                  <option value="Irrigation (₹50,000+)">Irrigation (₹50,000+)</option>
                  <option value="Training (₹1,00,000+)">Training (₹1,00,000+)</option>
                  <option value="Custom / CSR (₹5,00,000+)">Custom / CSR (₹5,00,000+)</option>
                </select>
              </label>
              <label style={{ display: "grid", gap: 6 }}>
                <span style={{ fontSize: 13, color: "#333", fontWeight: 600 }}>Recurring Support?</span>
                <select name="recurring" style={{ border: "1px solid #ddd", borderRadius: 12, padding: "10px 12px" }}>
                  <option value="Monthly">Monthly</option>
                  <option value="Quarterly">Quarterly</option>
                  <option value="One-time">One-time</option>
                </select>
              </label>
            </div>

            <label style={{ display: "grid", gap: 6 }}>
              <span style={{ fontSize: 13, color: "#333", fontWeight: 600 }}>Notes / Message</span>
              <textarea name="notes" rows={4}
                        placeholder="Anything else (CSR objectives, geography preference, etc.)"
                        style={{ border: "1px solid #ddd", borderRadius: 12, padding: "10px 12px" }} />
            </label>

            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 4 }}>
              <button type="submit" style={{ background: "#235d35", color: "#fff", padding: "10px 14px",
                borderRadius: 12, border: 0, fontWeight: 700 }}>
                Pledge Support
              </button>
              <a href="https://wa.me/919999659994?text=I%20want%20to%20Adopt-a-Farm%20with%20IHA"
                 style={{ border: "1px solid #235d35", color: "#235d35", padding: "10px 14px",
                          borderRadius: 12, textDecoration: "none", fontWeight: 700 }}>
                Chat on WhatsApp
              </a>
            </div>

            <div style={{ fontSize: 12, color: "#666" }}>
              Submitting opens a pre-filled email to <b>info@indianhempassociation.com</b> and a WhatsApp tab to contact IHA.
            </div>
          </form>
        </section>

        <footer style={{ maxWidth: 900, margin: "24px auto 0", padding: "12px 0",
                         borderTop: "1px solid #eee", fontSize: 12, color: "#666", textAlign: "center" }}>
          © {new Date().getFullYear()} Indian Hemp Association — Adopt-a-Farm.
        </footer>
      </main>
    </>
  );
}
