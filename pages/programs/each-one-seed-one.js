import Head from 'next/head';
import { useEffect, useState } from 'react';

export default function EachOneSeedOne() {
  const COMMUNITY_BASELINE = 1200; // demo count
  const [myPledges, setMyPledges] = useState(0);

  useEffect(() => {
    const saved = Number(localStorage.getItem('iha_seed_pledges') || 0);
    setMyPledges(saved);
  }, []);

  const addPledge = (n) => {
    const next = myPledges + n;
    setMyPledges(next);
    localStorage.setItem('iha_seed_pledges', String(next));
  };

  const totalDisplay = (COMMUNITY_BASELINE + myPledges).toLocaleString('en-IN');

  const mail = (count) =>
    `mailto:info@indianhempassociation.com?subject=Each%20One%20Seed%20One%20Pledge&body=Hello%20IHA,%0A%0AI%20pledge%20to%20plant%20${count}%20seed(s).%0AName:%20%0AState/City:%20%0AWhen:%20%0ANotes:%20`;

  const wa = (count) =>
    `https://wa.me/919999659994?text=I%20pledge%20to%20plant%20${count}%20seed(s)%20with%20IHA%20(Each%20One%20Seed%20One)!`;

  return (
    <>
      <Head>
        <title>Each One Seed One — Indian Hemp Association</title>
        <meta
          name="description"
          content="Join IHA’s movement to plant at scale. Pledge seeds, learn best practices, and track impact."
        />
        <link rel="canonical" href="https://www.indianhempassociation.com/programs/each-one-seed-one" />
      </Head>

      <main style={{ padding: "32px 16px", fontFamily: "system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial" }}>
        <header style={{ maxWidth: 900, margin: "0 auto 16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <a href="/programs" style={{ color: "#235d35", textDecoration: "none", fontWeight: 700 }}>← All Programs</a>
          <a href="/" style={{ color: "#111", textDecoration: "none" }}>Home</a>
        </header>

        <section style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ borderRadius: 20, padding: "24px 20px", color: "#fff", background: "linear-gradient(135deg,#235d35 0%, #0d6e57 60%, #0b5a4a 100%)" }}>
            <h1 style={{ margin: 0, fontSize: 28 }}>Each One Seed One 🌱</h1>
            <p style={{ marginTop: 6, opacity: 0.95 }}>
              A citizen movement to plant hemp and climate-positive crops.  
              Pledge seeds, learn best practices, and join India’s regenerative future.
            </p>
          </div>

          {/* COUNTER SECTION */}
          <div style={{ marginTop: 16, display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 12 }}>
            <div style={{ background: "#fff", borderRadius: 16, padding: 18, boxShadow: "0 1px 3px rgba(0,0,0,0.06)", textAlign: "center" }}>
              <div style={{ fontSize: 13, color: "#666" }}>Community Pledges</div>
              <div style={{ fontSize: 32, fontWeight: 800, color: "#235d35" }}>{totalDisplay}</div>
            </div>
            <div style={{ background: "#fff", borderRadius: 16, padding: 18, boxShadow: "0 1px 3px rgba(0,0,0,0.06)", textAlign: "center" }}>
              <div style={{ fontSize: 13, color: "#666" }}>My Pledges</div>
              <div style={{ fontSize: 28, fontWeight: 800 }}>{myPledges}</div>
              <div style={{ marginTop: 10, display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap" }}>
                <button onClick={() => addPledge(1)} style={{ border: "1px solid #235d35", color: "#235d35", background: "#fff", padding: "8px 12px", borderRadius: 10, fontWeight: 700 }}>+1</button>
                <button onClick={() => addPledge(5)} style={{ border: "1px solid #235d35", color: "#235d35", background: "#fff", padding: "8px 12px", borderRadius: 10, fontWeight: 700 }}>+5</button>
                <button onClick={() => addPledge(10)} style={{ border: "1px solid #235d35", color: "#235d35", background: "#fff", padding: "8px 12px", borderRadius: 10, fontWeight: 700 }}>+10</button>
                <button onClick={() => { localStorage.removeItem('iha_seed_pledges'); setMyPledges(0); }} style={{ border: "1px solid #ddd", color: "#333", background: "#fff", padding: "8px 12px", borderRadius: 10 }}>Reset</button>
              </div>
            </div>
          </div>

          {/* PLEDGE ACTIONS */}
          <div style={{ marginTop: 16, background: "#fff", borderRadius: 16, padding: 18, boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}>
            <div style={{ fontWeight: 700, marginBottom: 8 }}>Make your pledge official</div>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <a href={mail(myPledges || 1)} style={{ background: "#235d35", color: "#fff", padding: "10px 12px", borderRadius: 12, textDecoration: "none", fontWeight: 700 }}>Email my pledge</a>
              <a href={wa(myPledges || 1)} style={{ border: "1px solid #235d35", color: "#235d35", padding: "10px 12px", borderRadius: 12, textDecoration: "none", fontWeight: 700 }}>WhatsApp my pledge</a>
              <a href="/programs/adopt-a-farm" style={{ border: "1px solid #e5e7eb", color: "#111", padding: "10px 12px", borderRadius: 12, textDecoration: "none", fontWeight: 700 }}>Prefer to sponsor a farm?</a>
            </div>
            <div style={{ fontSize: 12, color: "#666", marginTop: 8 }}>
              This is a demo counter (no login). Verified registry launching soon.
            </div>
          </div>

          {/* EDUCATION SECTION */}
          <div style={{ marginTop: 16, background: "#fff", borderRadius: 16, padding: 18, boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}>
            <div style={{ fontWeight: 700, marginBottom: 8 }}>Best-practice planting tips</div>
            <ul style={{ margin: 0, paddingLeft: 18, color: "#555", lineHeight: 1.7 }}>
              <li>Choose locally approved varieties and follow state rules.</li>
              <li>Use minimal tillage, rotate with legumes, and avoid waterlogging.</li>
              <li>Plant in early season for maximum fiber yield.</li>
              <li>Share photos and data for IHA’s climate registry.</li>
            </ul>
          </div>
        </section>

        <footer style={{ maxWidth: 900, margin: "24px auto 0", padding: "12px 0", borderTop: "1px solid #eee", fontSize: 12, color: "#666", textAlign: "center" }}>
          © {new Date().getFullYear()} Indian Hemp Association — Each One Seed One.
        </footer>
      </main>
    </>
  );
}
