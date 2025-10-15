import Head from 'next/head';

export default function RegisterHub() {
  const Card = ({ title, desc, href, cta = "Open" }) => (
    <a href={href} style={{
      background: "#fff", borderRadius: 16, padding: 18, boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
      color: "#111", textDecoration: "none", display: "grid", gap: 8
    }}>
      <div style={{ fontWeight: 800 }}>{title}</div>
      <div style={{ color: "#555", fontSize: 14 }}>{desc}</div>
      <div style={{
        marginTop: 4, justifySelf: "start", background: "#235d35", color: "#fff",
        padding: "8px 12px", borderRadius: 12, fontWeight: 700
      }}>{cta}</div>
    </a>
  );

  return (
    <>
      <Head>
        <title>Program Registration — Indian Hemp Association</title>
        <meta name="description" content="Central hub for IHA registrations: farmers, processors, patients, pledges." />
        <link rel="canonical" href="https://www.indianhempassociation.com/programs/register" />
      </Head>

      <main style={{ padding: "32px 16px", fontFamily: "system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial" }}>
        <header style={{ maxWidth: 900, margin: "0 auto 16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <a href="/programs" style={{ color: "#235d35", textDecoration: "none", fontWeight: 700 }}>← All Programs</a>
          <a href="/" style={{ color: "#111", textDecoration: "none" }}>Home</a>
        </header>

        <section style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ borderRadius: 20, padding: "24px 20px", color: "#fff",
            background: "linear-gradient(135deg,#235d35 0%, #0d6e57 60%, #0b5a4a 100%)" }}>
            <h1 style={{ margin: 0, fontSize: 28 }}>IHA Registration Hub</h1>
            <p style={{ marginTop: 6, opacity: 0.95 }}>
              Choose your path to join the Indian Hemp Association ecosystem.
            </p>
          </div>

          <div style={{ marginTop: 16, display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 14 }}>
            <Card title="Farmer Registration" desc="Onboarding, licensing guidance, buy-back & carbon interest." href="/programs/farmer" cta="Register as Farmer" />
            <Card title="Processor / Industry" desc="Decorticators, textile, biocomposites — supply & standards." href="/programs/processor" cta="Register Unit" />
            <Card title="Patient Registration (Phase 1)" desc="Intake to prepare doctor pathways (Phase 2: consults)." href="/programs/patient" cta="Register as Patient" />
            <Card title="Each One Seed One" desc="Citizen pledge to plant at scale. Track your pledge." href="/programs/each-one-seed-one" cta="Pledge Seeds" />
            <Card title="Adopt-a-Farm" desc="Sponsor seeds, inputs & training for smallholders." href="/programs/adopt-a-farm" cta="Sponsor a Farm" />
            <Card title="World Hemp Day" desc="Partner for events, MoUs, demos and CSR-backed pilots." href="/programs/world-hemp-day" cta="Partner Now" />
          </div>
        </section>
      </main>
    </>
  );
}
