import Head from 'next/head';

export default function PatientRegistration() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const lines = [
      `Name: ${data.name || ""}`,
      `Age: ${data.age || ""}`,
      `Phone: ${data.phone || ""}`,
      `Email: ${data.email || ""}`,
      `State: ${data.state || ""}`,
      `City: ${data.city || ""}`,
      `Condition / Symptoms: ${data.condition || ""}`,
      `Current Medications: ${data.meds || ""}`,
      `Doctor Preference: ${data.doctor || ""}`, // Online tele-consult / In-person (Phase 2)
      `Notes: ${data.notes || ""}`,
      `Consent to be contacted: ${data.consent ? "Yes" : "No"}`
    ].join("%0A");

    // Email (prefilled)
    window.location.href =
      `mailto:info@indianhempassociation.com?subject=New%20Patient%20Registration&body=${lines}`;

    // WhatsApp quick contact
    window.open(
      `https://wa.me/919999659994?text=IHA%20Patient%20Registration:%0A${lines}`,
      "_blank"
    );
  };

  const Field = ({ label, name, type = "text", required=false, ...rest }) => (
    <label style={{ display: "grid", gap: 6 }}>
      <span style={{ fontSize: 13, color: "#333", fontWeight: 600 }}>{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        style={{ border: "1px solid #ddd", borderRadius: 12, padding: "10px 12px" }}
        {...rest}
      />
    </label>
  );

  return (
    <>
      <Head>
        <title>Patient Registration — Indian Hemp Association</title>
        <meta
          name="description"
          content="Register interest for cannabinoid therapy guidance. Phase 1: intake & triage; Phase 2: connect to certified doctors."
        />
        <link rel="canonical" href="https://www.indianhempassociation.com/programs/patient" />
      </Head>

      <main style={{ padding: "32px 16px", fontFamily: "system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial" }}>
        <header style={{ maxWidth: 900, margin: "0 auto 16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <a href="/programs" style={{ color: "#235d35", textDecoration: "none", fontWeight: 700 }}>← All Programs</a>
          <a href="/" style={{ color: "#111", textDecoration: "none" }}>Home</a>
        </header>

        <section style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ borderRadius: 20, padding: "24px 20px", color: "#fff",
            background: "linear-gradient(135deg,#235d35 0%, #0d6e57 60%, #0b5a4a 100%)" }}>
            <h1 style={{ margin: 0, fontSize: 28 }}>Patient Registration (Phase-1)</h1>
            <p style={{ marginTop: 6, opacity: 0.95 }}>
              Share basic details to help us triage your case and guide you to certified doctors.
              Medical decisions are between you and your doctor. (Phase 2 will enable secure online/offline bookings.)
            </p>
          </div>

          <form onSubmit={handleSubmit}
                style={{ marginTop: 16, background: "#fff", borderRadius: 16, padding: 18,
                         boxShadow: "0 1px 3px rgba(0,0,0,0.06)", display: "grid", gap: 12 }}>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 12 }}>
              <Field label="Full Name" name="name" required />
              <Field label="Age" name="age" type="number" />
              <Field label="Phone (WhatsApp preferred)" name="phone" required />
              <Field label="Email (optional)" name="email" type="email" />
              <Field label="State" name="state" required />
              <Field label="City" name="city" />
            </div>

            <label style={{ display: "grid", gap: 6 }}>
              <span style={{ fontSize: 13, color: "#333", fontWeight: 600 }}>Condition / Symptoms</span>
              <textarea name="condition" rows={4}
                        placeholder="Briefly describe your condition/symptoms…"
                        style={{ border: "1px solid #ddd", borderRadius: 12, padding: "10px 12px" }} />
            </label>

            <label style={{ display: "grid", gap: 6 }}>
              <span style={{ fontSize: 13, color: "#333", fontWeight: 600 }}>Current Medications (if any)</span>
              <textarea name="meds" rows={3}
                        placeholder="List any current medications / allergies…"
                        style={{ border: "1px solid #ddd", borderRadius: 12, padding: "10px 12px" }} />
            </label>

            <label style={{ display: "grid", gap: 6 }}>
              <span style={{ fontSize: 13, color: "#333", fontWeight: 600 }}>Doctor Preference</span>
              <select name="doctor" style={{ border: "1px solid #ddd", borderRadius: 12, padding: "10px 12px" }}>
                <option value="Tele-consult (online)">Tele-consult (online)</option>
                <option value="In-person (offline)">In-person (offline)</option>
                <option value="Either">Either</option>
              </select>
            </label>

            <label style={{ display: "grid", gap: 6 }}>
              <span style={{ fontSize: 13, color: "#333", fontWeight: 600 }}>Notes / Questions</span>
              <textarea name="notes" rows={4}
                        placeholder="Anything else we should know…"
                        style={{ border: "1px solid #ddd", borderRadius: 12, padding: "10px 12px" }} />
            </label>

            <label style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <input type="checkbox" name="consent" />
              <span style={{ fontSize: 12, color: "#444" }}>
                I consent to be contacted by IHA for guidance and next steps.
              </span>
            </label>

            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 4 }}>
              <button type="submit" style={{ background: "#235d35", color: "#fff", padding: "10px 14px",
                borderRadius: 12, border: 0, fontWeight: 700 }}>
                Submit Registration
              </button>
              <a href="https://wa.me/919999659994?text=I%20want%20to%20register%20as%20a%20patient%20with%20IHA"
                 style={{ border: "1px solid #235d35", color: "#235d35", padding: "10px 14px",
                          borderRadius: 12, textDecoration: "none", fontWeight: 700 }}>
                Chat on WhatsApp
              </a>
            </div>

            <div style={{ fontSize: 12, color: "#666" }}>
              Submitting opens a pre-filled email to <b>info@indianhempassociation.com</b> and a WhatsApp tab to contact IHA.  
              <br />This is **not** medical advice; consult certified doctors for all treatment decisions.
            </div>
          </form>
        </section>

        <footer style={{ maxWidth: 900, margin: "24px auto 0", padding: "12px 0",
                         borderTop: "1px solid #eee", fontSize: 12, color: "#666", textAlign: "center" }}>
          © {new Date().getFullYear()} Indian Hemp Association — Patient Program.
        </footer>
      </main>
    </>
  );
}
