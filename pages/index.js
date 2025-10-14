import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Indian Hemp Association — AI-led platform for India’s hemp future</title>
        <meta
          name="description"
          content="Empowering India’s hemp revolution: funding farmers & processors, building markets, and tracking climate impact — led by the AI CEO."
        />
        <link rel="canonical" href="https://www.indianhempassociation.com" />
      </Head>

      <main style={{ padding: '40px', fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial' }}>
        <h1 style={{ margin: 0, color: '#235d35' }}>Indian Hemp Association</h1>
        <p>Site bootstrapped successfully. We’ll add the full homepage after this build passes.</p>
{/* HERO SECTION */}{/* IMPACT COUNTERS */}
<section id="impact" style={{ maxWidth: 1120, margin: "24px auto 0", padding: "0 16px" }}>
  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 12 }}>
    {[
      { label: "Hectares Under Hemp", value: 2000 },
      { label: "Tons CO₂ Offset", value: 50000 },
      { label: "Farmers Supported", value: 10000 },
      { label: "Jobs Created", value: 2200 },
      { label: "Funds Raised (INR)", value: 158000000 },
    ].map((c) => (
      <div key={c.label} style={{ background: "#fff", borderRadius: 16, padding: 18, textAlign: "center", boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}>
        <div style={{ fontSize: 24, fontWeight: 700 }}>
          {c.value.toLocaleString(undefined, { maximumFractionDigits: 0 })}
        </div>
        <div style={{ marginTop: 6, fontSize: 12, color: "#666" }}>{c.label}</div>
      </div>
    ))}
  </div>
</section>
<section style={{ maxWidth: 1120, margin: "32px auto 0", padding: "16px" }}>
  <div style={{
    borderRadius: 24,
    color: "#fff",
    padding: "48px 32px",
    background: "linear-gradient(135deg,#235d35 0%, #0d6e57 60%, #0b5a4a 100%)",
    boxShadow: "0 6px 22px rgba(0,0,0,0.12)"
  }}>
    <div style={{ display: "inline-block", background: "rgba(255,255,255,0.12)", padding: "6px 10px", borderRadius: 999, fontSize: 12 }}>
      AI-led • SDG-aligned • Transparent
    </div>
    <h2 style={{ margin: "12px 0 8px", fontSize: 36, fontWeight: 700 }}>
      Empowering India’s <span style={{ color: "#F6D36B" }}>Hemp Revolution</span>
    </h2>
    <p style={{ opacity: 0.95, maxWidth: 720, fontSize: 18, lineHeight: 1.5 }}>
      Invest in farmers, processors, and innovation. Build climate-positive livelihoods with the Indian Hemp Association.
    </p>
    <div style={{ marginTop: 16, display: "flex", gap: 12, flexWrap: "wrap" }}>
      <a href="#projects" style={{ background: "#fff", color: "#0d5b49", padding: "10px 14px", borderRadius: 12, fontWeight: 600, textDecoration: "none" }}>I’m an Investor</a>
      <a href="#submit" style={{ border: "1px solid rgba(255,255,255,0.6)", color: "#fff", padding: "10px 14px", borderRadius: 12, fontWeight: 600, textDecoration: "none" }}>I’m a Farmer / Processor</a>
      <a href="#partners" style={{ border: "1px solid rgba(255,255,255,0.6)", color: "#fff", padding: "10px 14px", borderRadius: 12, fontWeight: 600, textDecoration: "none" }}>I’m a Partner</a>
      <a href="#contact" style={{ border: "1px solid rgba(255,255,255,0.6)", color: "#fff", padding: "10px 14px", borderRadius: 12, fontWeight: 600, textDecoration: "none" }}>Contact Us</a>
    </div>
  </div>
</section>

        <p>
          Contact:{' '}
          <a href="mailto:info@indianhempassociation.com">info@indianhempassociation.com</a> ·{' '}
          <a href="tel:+919999659994">+91 9999659994</a>
        </p>
      </main>
    </>
  );
}
