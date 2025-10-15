import Head from 'next/head';

export default function VisionMission() {
  const Badge = ({ children }) => (
    <span style={{ fontSize: 12, background: '#f3f4f6', padding: '4px 10px', borderRadius: 999, marginRight: 6 }}>
      {children}
    </span>
  );

  const Stat = ({ label, value }) => (
    <div style={{ textAlign: 'center', background: '#fff', borderRadius: 16, padding: 18, boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
      <div style={{ fontSize: 28, fontWeight: 800, color: '#235d35' }}>{value}</div>
      <div style={{ fontSize: 12, color: '#666', marginTop: 4 }}>{label}</div>
    </div>
  );

  return (
    <>
      <Head>
        <title>Vision & Mission (2030) — Indian Hemp Association</title>
        <meta
          name="description"
          content="IHA Vision 2030: farmer incomes, climate action, industry jobs, and global collaboration — AI-led and SDG-aligned."
        />
        <link rel="canonical" href="https://www.indianhempassociation.com/programs/vision-mission" />
      </Head>

      <main style={{ padding: '32px 16px', fontFamily: 'system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial' }}>
        {/* Top bar */}
        <header style={{ maxWidth: 900, margin: '0 auto 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <a href="/programs" style={{ color: '#235d35', textDecoration: 'none', fontWeight: 700 }}>← All Programs</a>
          <a href="/" style={{ color: '#111', textDecoration: 'none' }}>Home</a>
        </header>

        {/* Hero */}
        <section style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ borderRadius: 20, padding: '24px 20px', color: '#fff',
            background: 'linear-gradient(135deg,#235d35 0%, #0d6e57 60%, #0b5a4a 100%)' }}>
            <h1 style={{ margin: 0, fontSize: 28 }}>IHA Vision & Mission — 2030 Roadmap</h1>
            <p style={{ marginTop: 6, opacity: 0.95 }}>
              An AI-led, farmer-first ecosystem: licensing, markets, carbon, health, skills, and global collaboration —
              aligned with India’s growth story and the UN SDGs.
            </p>
            <div style={{ marginTop: 8 }}>
              <Badge>AI-led</Badge><Badge>Farmer-first</Badge><Badge>SDG-aligned</Badge><Badge>Open Collaboration</Badge>
            </div>
          </div>

          {/* Vision targets (illustrative) */}
          <div style={{ marginTop: 16, display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(160px,1fr))', gap: 12 }}>
            <Stat label="Farmers Supported" value="10,000+" />
            <Stat label="Tons CO₂e Impact" value="1,000,000" />
            <Stat label="Processing Units" value="50+" />
            <Stat label="Jobs & Livelihoods" value="25,000" />
          </div>

          {/* Mission blocks */}
          <div style={{ marginTop: 16, display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 14 }}>
            {[
              { title: 'Farmer Licensing & Co-ops', desc: 'State-wise compliant onboarding, training, and co-op mapping for scale.' },
              { title: 'Fair Market Linkages', desc: 'Buy-back contracts, grading, and export pathways for sustainable incomes.' },
              { title: 'Climate & Carbon Registry', desc: 'MRV for biomass, hempcrete, and rotations; credits-ready projects.' },
              { title: 'Skill & Innovation', desc: 'Youth skilling, artisan certifications, grants, and R&D fellowships.' },
              { title: 'Health & Patient Pathways', desc: 'Ethical intake and doctor facilitation under compliant frameworks.' },
              { title: 'Global Partnerships', desc: 'MoUs with associations, investors, and universities (World Hemp Day hub).' }
            ].map((b) => (
              <div key={b.title} style={{ background: '#fff', borderRadius: 16, padding: 18, boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
                <div style={{ fontWeight: 800, marginBottom: 6 }}>{b.title}</div>
                <div style={{ color: '#555' }}>{b.desc}</div>
              </div>
            ))}
          </div>

          {/* SDG anchors */}
          <div style={{ marginTop: 16, background: '#fff', borderRadius: 16, padding: 18, boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
            <div style={{ fontWeight: 800, marginBottom: 8 }}>UN SDG Alignment</div>
            <ul style={{ margin: 0, paddingLeft: 18, color: '#555', lineHeight: 1.7 }}>
              <li><b>SDG 1 — No Poverty:</b> higher net income via fair contracts and market access.</li>
              <li><b>SDG 8 — Decent Work & Growth:</b> rural livelihoods and MSME capacity.</li>
              <li><b>SDG 9 — Industry, Innovation & Infrastructure:</b> decortication hubs, hempcrete pilots.</li>
              <li><b>SDG 12 — Responsible Consumption & Production:</b> fiber/textile circularity.</li>
              <li><b>SDG 13 — Climate Action:</b> carbon MRV and low-carbon construction.</li>
              <li><b>SDG 15 — Life on Land:</b> regenerative rotations and soil health.</li>
            </ul>
          </div>

          {/* Call to action */}
          <div style={{ marginTop: 16, background: '#fff', borderRadius: 16, padding: 18, boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap' }}>
            <div style={{ fontWeight: 800, color: '#235d35' }}>Join the 2030 mission — build India’s hemp future.</div>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <a href="mailto:info@indianhempassociation.com?subject=Join%20IHA%20Vision%202030"
                 style={{ background: '#235d35', color: '#fff', padding: '10px 14px', borderRadius: 12, textDecoration: 'none', fontWeight: 700 }}>
                Email IHA
              </a>
              <a href="https://wa.me/919999659994?text=I%20want%20to%20join%20IHA%20Vision%202030"
                 style={{ border: '1px solid #235d35', color: '#235d35', padding: '10px 14px', borderRadius: 12, textDecoration: 'none', fontWeight: 700 }}>
                WhatsApp IHA
              </a>
            </div>
          </div>
        </section>

        <footer style={{ maxWidth: 900, margin: '24px auto 0', padding: '12px 0', borderTop: '1px solid #eee', fontSize: 12, color: '#666', textAlign: 'center' }}>
          © {new Date().getFullYear()} Indian Hemp Association — Vision & Mission 2030.
        </footer>
      </main>
    </>
  );
}

