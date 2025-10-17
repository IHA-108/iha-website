export default function Register() {
  const whatsappHref = "https://wa.me/919999659994";
  return (
    <main style={{ padding: 40, fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial' }}>
      <h1 style={{ margin: 0, fontSize: 28, color: "#235d35" }}>IHA Registration</h1>
      <p style={{ color: "#555", marginTop: 8 }}>
        Welcome! Use this quick form to express interest in joining the Indian Hemp Association.
      </p>

      <form
        action="mailto:info@indianhempassociation.com?subject=IHA%20Registration%20Form"
        method="POST"
        encType="text/plain"
        style={{ marginTop: 24, display: "grid", gap: 12, maxWidth: 500 }}
      >
        <input placeholder="Full Name" required style={inputStyle} />
        <input placeholder="Email" required type="email" style={inputStyle} />
        <input placeholder="Phone Number" required style={inputStyle} />
        <select style={inputStyle} required>
          <option value="">Select Category</option>
          <option value="Farmer">Farmer</option>
          <option value="Processor">Processor</option>
          <option value="Patient">Patient</option>
          <option value="Partner">Partner / Investor</option>
        </select>
        <textarea
          rows={5}
          placeholder="Describe your interest, location, and background..."
          style={{ ...inputStyle, height: 120 }}
        />
        <button
          type="submit"
          style={{
            background: "#235d35",
            color: "#fff",
            border: "none",
            padding: "10px 14px",
            borderRadius: 12,
            fontWeight: 700,
            cursor: "pointer",
          }}
        >
          Submit via Email
        </button>
      </form>

      <p style={{ marginTop: 20, color: "#666" }}>
        Or reach us instantly on WhatsApp:&nbsp;
        <a href={whatsappHref} style={{ color: "#235d35", textDecoration: "none", fontWeight: 600 }}>
          Chat with IHA Team
        </a>
      </p>
    </main>
  );
}

const inputStyle = {
  border: "1px solid #ddd",
  borderRadius: 12,
  padding: "10px 12px",
  fontSize: 14,
};
