import Head from 'next/head';

export default function Programs() {
  const Card = ({ title, desc, href = "#" }) => (
    <div style={{ background: "#fff", borderRadius: 16, padding: 18, boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}>
      <div style={{ fontWeight: 700, fontSize: 18 }}>{title}</div>
      <p style={{ fontSize: 14, color: "#555", lineHeight: 1.6, marginTop: 6 }}>{desc}</p>
      <a href={href} style={{ display: "inline-block", background: "#235d35", color: "#fff", padding: "10px 12px", borderRadius: 12, textDecoration: "none", fontWeight: 600 }}>Learn More</a>
    </div>
  );

  return (
    <>
      <Head>
        <title>IHA Programs — Indian Hemp Association</title>
        <meta name="description" content="Explore IHA programs: Farmer Licensing, Adopt-a-Farm, Carbon Credits, Buy-Back, Patient–Doctor, Each One Seed One, Processor Onboarding, Skill & Innovation, World Hemp Day, Vision & Mission." />
      </Head>

      <main style={{ padding: '40px 16px', fontFamily: 'system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial' }}>
        <header style={{ maxWidth: 1120, margin: "0 auto 16px", paddingBottom: 12, borderBottom: "1px solid #eee", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <a href="/" style={{ textDecoration: "none", color: "#235d35", fontWeight: 800 }}>← Home</a>
          <a href="mailto:info@indianhempassociation.com?subject=IHA%20Programs" style={{ background: "#235d35", color: "#fff", padding: "8px 12px", borderRadius: 12, textDecoration: "none", fontWeight: 700 }}>Contact IHA</a>
        </header>

        <section style={{ maxWidth: 1120, margin: "0 auto" }}>
          <h1 style={{ margin: 0, fontSize: 32, color: "#235d35" }}>IHA Programs Overview</h1>
          <p style={{ color: "#444", maxWidth: 860 }}>A unified, AI-led ecosystem to onboard farmers and processors, enable buy-backs, measure carbon, connect patients and doctors, and mobilize citizens.</p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 16, marginTop: 16 }}>
            <Card title="Adopt a Farm" desc="Sponsor seeds, irrigation, and training for hemp farms." href="/programs/adopt-a-farm" />
            <Card title="Farmer Licensing & Registration" desc="Compliant onboarding with state-wise guidance." href="/programs/farmer" />
            <Card title="Buy-Back & Contract Farming" desc="Fair-trade contracts linking farmers to processors." href="/programs/buy-back" />
            <Card title="Carbon Credit & Regenerative Hemp" desc="Track CO₂ benefits and build credit eligibility." href="/programs/carbon" />
            <Card title="Processor & Industry Onboarding" desc="Register MSMEs; connect supply and demand." href="/programs/processor" />
            <Card title="Each One Seed One" desc="Citizen campaign to plant at scale; pledge now." href="/programs/each-one-seed-one" />
            <Card title="Patient & Doctor Registration" desc="Collect patient interest; Phase 2: doctor link." href="/programs/patient" />
            <Card title="Skill & Innovation Hub" desc="Training, certification, and R&D fellowships." href="/programs/skill" />
            <Card title="World Hemp Day" desc="Annual global event; collaborations and policy." href="/programs/world-hemp-day" />
            <Card title="Vision & Mission (2030 Roadmap)" desc="Farmers, climate, industry and jobs — SDG aligned." href="/programs/vision-mission" />
          </div>
        </section>
      </main>
    </>
  );
}
