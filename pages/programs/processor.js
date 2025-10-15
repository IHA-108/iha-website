import Head from 'next/head';

export default function ProcessorRegistration() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const lines = [
      `Company: ${data.company || ""}`,
      `Contact Name: ${data.name || ""}`,
      `Phone: ${data.phone || ""}`,
      `Email: ${data.email || ""}`,
      `State: ${data.state || ""}`,
      `City: ${data.city || ""}`,
      `GST / Reg No: ${data.gst || ""}`,
      `Unit Type: ${data.type || ""}`,
      `Capacity (monthly): ${data.capacity || ""}`,
      `Raw Material Need: ${data.need || ""}`,
      `Buy-Back Interest: ${data.buyback || ""}`,
      `Notes: ${data.notes || ""}`
    ].join("%0A");

    window.location.href = `mailto:info@indianhempassociation.com?subject=New%20Processor%20Registration&body=${lines}`;
    window.open(`https://wa.me/919999659994?text=IHA%20Processor%20Registration:%0A${lines}`, "_blank");
  };

  const Field = ({ label, name, type = "text", required=false }) => (
    <label style={{ display: "grid", gap: 6 }}>
      <span style={{ fontSize: 13, color: "#333", fontWeight: 600 }}>{label}</span>
      <input name={name} type={type} required={required}
             style={{ border: "1px solid #ddd", borderRadius: 12, padding: "10px 12px" }} />
    </label>
  );

  return (
    <>
      <Head>
        <title>Processor Registration — Indian Hemp Association</title>
        <meta name="description" content="Register decorticators and hemp processing units with IHA to access buy-back, supply linkages, and standards." />
        <link rel="canonical" href="https://www.indianhempassociation.com/programs/processor" />
      </Head>

      <main style={{ padding: "32px 16px", fontFamily: "system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial" }}>
        <header style={{ maxWidth: 900, margin: "0 auto 16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <a href="/programs" style={{ color: "#235d35", textDecoration: "none", fontWeight: 700 }}>← All Programs</a>
          <a href="/" style={{ color: "#111", textDecoration: "none" }}>Home</a>
        </header>

        <section style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ borderRadius: 20, padding: "24px 20px", color: "#fff",
            background: "linear-gradient(135deg,#235d35 0%, #0d6e57 60%, #0b5a4a 100%)" }}>
            <h1 style={{ margin: 0, fontSize: 28 }}>Processor & Industry Registration (2025)</h1>
            <p style={{ marginTop: 6, opacity: 0.95 }}>
              Register your processing unit to join IHA’s verified supply chain. Get matched to farmer co-ops and fair buy-back programs.
            </p>
          </div>

          <form onSubmit={handleSubmit}
                style={{ marginTop: 16, background: "#fff", borderRadius: 16, padding: 18, boxShadow: "0 1px 3px rgba(0,0,0,0.06)", display: "grid", gap: 12 }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 12 }}>
              <Field label="Company / Unit Name" name="company" required />
              <Field label="Contact Person" name="name" required />
              <Field label="Phone (WhatsApp preferred)" name="phone" required />
              <Field label="Email" name="email" type="email" />
              <Field label="State" name="state" required />
              <Field label="City" name="city" />
              <Field label="GST / Registration No." name="gst" />
              <Field label="Unit Type (decortication / textile / biocomposite / other)" name="type" required />
              <Field label="Installed Capacity (per month)" name="capacity" />
              <Field label="Raw Material Need (grade, tons/month)" name="need" />
            </div>

            <label style={{ display: "grid", gap: 6 }}>
              <span style={{ fontSize: 13, color: "#333", fontWeight: 600 }}>Interested in IHA Buy-Back Contracts?</span>
              <select name="buyback" style={{ border: "1px solid #ddd", borderRadius: 12, padding: "10px 12px" }}>
                <option value="Yes">Yes</option>
                <option value="Maybe">Maybe</option>
                <option value="No">No</option>
              </select>
            </label>

            <label style={{ display: "grid", gap: 6 }}>
              <span style={{ fontSize: 13, color: "#333", fontWeight: 600 }}>Notes / Questions</span>
              <textarea name="notes" rows={5}
                        placeholder="Quality specs, certifications, export focus, etc."
                        style={{ border: "1px solid #ddd", borderRadius: 12, padding: "10px 12px" }} />
            </label>

            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 4 }}>
              <button type="submit" style={{ background: "#235d35", color: "#fff", padding: "10px 14px", borderRadius: 12, border: 0, fontWeight: 700 }}>
                Submit Registration
              </button>
              <a href="https://wa.me/919999659994?text=I%20want%20to%20register%20our%20hemp%20processing%20unit%20with%20IHA"
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
          © {new Date().getFullYear()} Indian Hemp Association — Processor Program.
        </footer>
      </main>
    </>
  );
}

