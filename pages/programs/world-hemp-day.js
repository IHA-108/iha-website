import Head from 'next/head';
import { useEffect, useState } from 'react';

export default function WorldHempDay() {
  // 🔁 Set/adjust the target date here (UTC YYYY-MM-DDTHH:mm:ssZ)
  const TARGET_ISO = '2026-06-05T00:00:00Z'; // World Hemp Day (example date)

  const [remaining, setRemaining] = useState({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    const tick = () => {
      const now = new Date().getTime();
      const target = new Date(TARGET_ISO).getTime();
      const diff = Math.max(0, target - now);
      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const m = Math.floor((diff / (1000 * 60)) % 60);
      const s = Math.floor((diff / 1000) % 60);
      setRemaining({ d, h, m, s });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const mail = (subject) =>
    `mailto:info@indianhempassociation.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      "Hello IHA,\n\nWe would like to participate in World Hemp Day.\n\nOrganization:\nContact Person:\nPhone/Email:\nCity/Country:\nProposed Contribution (event, talk, MoU, showcase, CSR):\nNotes:\n"
    )}`;

  const wa = (text) =>
    `https://wa.me/919999659994?text=${encodeURIComponent(text)}`;

  const Stat = ({ label, value }) => (
    <div style={{ textAlign: 'center', background: '#fff', borderRadius: 16, padding: 16, boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
      <div style={{ fontSize: 28, fontWeight: 800, color: '#235d35' }}>{value}</div>
      <div style={{ fontSize: 12, color: '#666', marginTop: 4 }}>{label}</div>
    </div>
  );

  const Badge = ({ children }) => (
    <span style={{ fontSize: 12, background: '#f3f4f6', padding: '4px 10px', borderRadius: 999, marginRight: 6 }}>
      {children}
    </span>
  );

  return (
    <>
      <Head>
        <title>World Hemp Day — Indian Hemp Association</title>
        <meta
          name="description"
          content="Join IHA and global partners for World Hemp Day — events, MoUs, innovation showcases, and farmer-first collaborations."
        />
        <link rel="canonical" href="https://www.indianhempassociation.com/programs/world-hemp-day" />
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
            <h1 style={{ margin: 0, fontSize: 28 }}>World Hemp Day — Global Collaboration</h1>
            <p style={{ marginTop: 6, opacity: 0.95 }}>
              A worldwide celebration of hemp’s potential — uniting associations, farmers, processors, researchers, investors,
              and policymakers. Let’s sign MoUs, launch pilots, and showcase innovation.
            </p>
            <div style={{ marginTop: 10 }}>
              <Badge>AI-led</Badge><Badge>Farmer-first</Badge><Badge>SDG-aligned</Badge><Badge>Open Collaboration</Badge>
            </div>
          </div>

          {/* Countdown */}
          <div style={{ marginTop: 16, display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(160px,1fr))', gap: 12 }}>
            <Stat label="Days" value={remaining.d} />
            <Stat label="Hours" value={remaining.h} />
            <Stat label="Minutes" value={remaining.m} />
            <Stat label="Seconds" value={remaining.s} />
          </div>

          {/* Get involved */}
          <div style={{ marginTop: 16, background: '#fff', borderRadius: 16, padding: 18, boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
            <div style={{ fontWeight: 800, marginBottom: 6 }}>Get Involved</div>
            <p style={{ color: '#555', marginTop: 0 }}>
              We welcome partners for: association MoUs, policy roundtables, innovation demos, community events,
              farmer trainings, and CSR-backed pilots.
            </p>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <a href={mail('World Hemp Day — Partnership')}
                 style={{ background: '#235d35', color: '#fff', padding: '10px 12px', borderRadius: 12, textDecoration: 'none', fontWeight: 700 }}>
                Partner with IHA (Email)
              </a>
              <a href={wa('World Hemp Day — I want to partner with IHA')}
                 style={{ border: '1px solid #235d35', color: '#235d35', padding: '10px 12px', borderRadius: 12, textDecoration: 'none', fontWeight: 700 }}>
                WhatsApp IHA
              </a>
            </div>
          </div>

          {/* Program tracks */}
          <div style={{ marginTop: 16, display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 14 }}>
            {[
              { title: 'Policy & Standards', desc: 'Joint statements, state-level frameworks, and standards exchange.' },
              { title: 'Farmer & Co-op Track', desc: 'Licensing guidance, training camps, and buy-back sign-ups.' },
              { title: 'Innovation & R&D', desc: 'Demos across fiber, hempcrete, food, and biocomposites.' },
              { title: 'Finance & Markets', desc: 'Investor connect, export linkages, CSR pilots.' },
              { title: 'Climate & Carbon', desc: 'MRV pilots, carbon registry roadmap, regenerative practices.' },
              { title: 'Public Events', desc: 'Exhibitions, meetups, and youth challenges under “Each One Seed One”.' }
            ].map((t) => (
              <div key={t.title} style={{ background: '#fff', borderRadius: 16, padding: 18, boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
                <div style={{ fontWeight: 800, marginBottom: 6 }}>{t.title}</div>
                <div style={{ color: '#555' }}>{t.desc}</div>
              </div>
            ))}
          </div>

          {/* Host / City interest */}
          <div style={{ marginTop: 16, background: '#fff', borderRadius: 16, padding: 18, boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
            <div style={{ fontWeight: 800, marginBottom: 6 }}>Host a city event or campus chapter</div>
            <p style={{ color: '#555', marginTop: 0 }}>
              Universities, incubators, and local bodies can host satellite events. We’ll share the playbook and branding kit.
            </p>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <a href={mail('World Hemp Day — Host City/Campus')}
                 style={{ background: '#111', color: '#fff', padding: '10px 12px', borderRadius: 12, textDecoration: 'none', fontWeight: 700 }}>
                Apply to Host (Email)
              </a>
              <a href={wa('World Hemp Day — We want to host a city/campus event')}
                 style={{ border: '1px solid #111', color: '#111', padding: '10px 12px', borderRadius: 12, textDecoration: 'none', fontWeight: 700 }}>
                WhatsApp to Apply
              </a>
            </div>
          </div>
        </section>

        <footer style={{ maxWidth: 900, margin: '24px auto 0', padding: '12px 0', borderTop: '1px solid #eee', fontSize: 12, color: '#666', textAlign: 'center' }}>
          © {new Date().getFullYear()} Indian Hemp Association — World Hemp Day.
        </footer>
      </main>
    </>
  );
}


