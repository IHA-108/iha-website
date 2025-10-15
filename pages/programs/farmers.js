import Head from 'next/head';

export default function FarmerRegistration() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const lines = [
      `Name: ${data.name || ""}`,
      `Phone: ${data.phone || ""}`,
      `Email: ${data.email || ""}`,
      `State: ${data.state || ""}`,
      `District: ${data.district || ""}`,
      `Village: ${data.village || ""}`,
      `Land Area (acres): ${data.area || ""}`,
      `Intended Use: ${data.use || ""}`,
      `Need Buy-Back?: ${data.buyback || ""}`,
      `Need Carbon Program?: ${data.carbon || ""}`,
      `Notes: ${data.notes || ""}`
    ].join("%0A");

    // Email fallback (opens email client)
    window.location.href =
      `mailto:info@indianhempassociation.com?subject=New%20Farmer%20Registration&body=${lines}`;

    // WhatsApp quick contact (optional second click)
    window.open(`https://wa.me/919999659994?text=IHA%20Farmer%20Registration:%0A${lines}`, "_blank");
  };

  const Field = ({ label, name, type = "text", ...rest }) => (
    <label style={{ display: "grid", gap: 6 }}>
      <span style={{ fontSize: 13, color: "#333", fontWeight: 600 }}>{label}</span>
      <input
        name={name}
        type={type}
        required={name === "name" || name === "phone" || name === "state"}
        style={{ border: "1px solid #ddd", borderRadius: 12, padding: "10px 12px" }}
        {...rest}
      />
    </label>
  );

  const YesNo = ({ label, name }) => (
    <label style={{ display: "grid", gap: 6 }}>
      <span style={{ fontSize: 13, color: "#333", fontWeight: 600 }}>{label}</span>
      <select name={name} style={{ border: "1px solid #ddd", borderRadius: 12, padding: "10px 12px" }}>
        <option value="No">No</option>
        <option value="Yes">Yes</option>
      </select>
    </label>
  );

  return (
    <>
      <Head>
        <title>Farmer Registration — Indian Hemp Association</title>
        <meta
          name="description"
          content="Register as a hemp farmer with the Indian Hemp Association. Get guidance for licensing, buy-back, and carbon credit programs."
        />
        <link rel="canonical" href="https://www.indianhempassociation.com/programs/farmer" />
      </Head>

      <main style={{ padding: "32px 16px", fontFamily: "system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial" }}>
        <header style={{ maxWidth: 900, margin: "0 auto 16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <a href="/programs" style={{ color: "#235d35", textDecoration: "none", fontWeight: 700 }}>← All Programs</a>
          <a href="/" style={{ color: "#111", textDecoration: "none" }}>Home</a>
        </header>

        <section style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ borderRadius: 20, padding: "24px 20px", color: "#fff",
            background: "linear-gradient(135deg,#235d35 0%, #0d6e57 60%, #0b5a4a 100%)" }}>
            <h1 style={{ margin: 0, fontSize: 28 }}>Hemp Farmer Registration (2025)</h1>
            <p style={{ marginTop: 6, opacity: 0.95 }}>
              Tell us about your farm. In phase 1, we’ll confirm details and guide licensing. You can also request buy-back and carbon participation.
            </p>
          </div>

          <form onSubmit={handleSubmit}
                style={{ marginTop: 16, background: "#fff", borderRadius: 16, padding: 18, boxShadow: "0 1px 3px rgba(0,0,0,0.06)", display: "grid", gap: 12 }}>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 12 }}>
              <Field label="Full Name" name="name" />
              <Field label="Phone (WhatsApp preferred)" name="phone" />
              <Field label="Email (optional)" name="email" type="email" />
              <Field label="State" name="state" />
              <Field label="District" name="district" />
              <Field label="Village / Taluka" name="village" />
              <Field label="Land Area (acres)" name="area" type="number" step="0.1" />
              <Field label="Primary Intended Use (fiber/seed/biomass)" name="use" />
              <YesNo label="Interested in Buy-Back Program?" name="buyback" />
              <YesNo label="Interested in Carbon Program?" name="carbon" />
            </div>

            <label style={{ display: "grid", gap: 6 }}>
              <span style={{ fontSize: 13, color: "#333", fontWeight: 600 }}>Notes / Questions</span>
              <textarea name="notes" rows={5}
                        placeholder="Anything else we should know…"
                        style={{ border: "1px solid #ddd", borderRadius: 12, padding: "10px 12px" }} />
            </label>

            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 4 }}>
              <button type="submit" style={{ background: "#235d35", color: "#fff", padding: "10px 14px", borderRadius: 12, border: 0, fontWeight: 700 }}>
                Submit Registration
              </button>
              <a href="https://wa.me/919999659994?text=I%20want%20to%20register%20as%20a%20hemp%20farmer%20with%20IHA"
                 style={{ border: "1px solid #235d35", color: "#235d35", padding: "10px 14px", borderRadius: 12, textDecoration: "none", fontWeight: 700 }}>
                Chat on WhatsApp
              </a>
            </div>

            <div style={{ fontSize: 12, color: "#666" }}>
              Submitting will open your email with details pre-filled for <b>info@indianhempassociation.com</b> and also launch a WhatsApp tab to contact IHA.
            </div>
          </form>
        </section>

        <footer style={{ maxWidth: 900, margin: "24px auto 0", padding: "12px 0", borderTop: "1px solid #eee", fontSize: 12, color: "#666", textAlign: "center" }}>
          © {new Date().getFullYear()} Indian Hemp Association — Farmer Program.
        </footer>
      </main>
    </>
  );
}
