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
</section> {/* PROJECTS / CROWDFUNDING */}
<section id="projects" style={{ maxWidth: 1120, margin: "32px auto 0", padding: "0 16px" }}>
  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
    <h2 style={{ fontSize: 28, fontWeight: 700, color: "#235d35" }}>Crowdfunding Hub</h2>
    <div style={{ fontSize: 14, color: "#666" }}>Filters (coming soon)</div>
  </div>

  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
    {[
      {
        id: "p1",
        title: "Hempcrete Micro-Block Unit — Uttarakhand",
        region: "India / North",
        impact: ["Carbon", "Housing", "Jobs"],
        goalINR: 12000000,
        raisedINR: 4200000,
        desc: "Decentralized hempcrete micro-block manufacturing unit; local jobs and reduced cement emissions.",
      },
      {
        id: "p2",
        title: "Regenerative Hemp Farming Co-op — Punjab",
        region: "India / North-West",
        impact: ["Soil", "Carbon", "Farmer Income"],
        goalINR: 8000000,
        raisedINR: 2600000,
        desc: "120-farmer co-op transitioning to hemp rotations, soil restoration, and fiber-market linkages.",
      },
      {
        id: "p3",
        title: "Fiber Processing & Decortication Hub — Telangana",
        region: "India / South",
        impact: ["Industry", "Jobs"],
        goalINR: 25000000,
        raisedINR: 9000000,
        desc: "Regional decortication hub linked to export-grade fiber buyers.",
      },
    ].map((p) => {
      const progress = Math.min(100, Math.round((p.raisedINR / p.goalINR) * 100));
      const formatINR = (n) =>
        new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(n);
      return (
        <div key={p.id} style={{ background: "#fff", borderRadius: 16, padding: 18, boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}>
          <div style={{ fontWeight: 700, marginBottom: 6 }}>
            <a href="#invest" style={{ color:"#111", textDecoration:"none" }}>{p.title}</a>
          </div>
          <div style={{ fontSize: 12, color: "#666", marginBottom: 8 }}>{p.region}</div>
          <p style={{ fontSize: 14, lineHeight: 1.5 }}>{p.desc}</p>

          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 8 }}>
            {p.impact.map((t) => (
              <span key={t} style={{ fontSize: 12, background: "#f3f4f6", padding: "4px 10px", borderRadius: 999 }}>{t}</span>
            ))}
          </div>

          <div style={{ marginTop: 10 }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12 }}>
              <span>{formatINR(p.raisedINR)} raised</span>
              <span style={{ fontWeight: 600 }}>{progress}%</span>
            </div>
            <div style={{ width: "100%", height: 8, background: "#eee", borderRadius: 999, overflow: "hidden", marginTop: 6 }}>
              <div style={{ width: `${progress}%`, height: "100%", background: "#0d6e57" }} />
            </div>
            <div style={{ fontSize: 12, color: "#666", marginTop: 4 }}>Goal: {formatINR(p.goalINR)}</div>
          </div>

          <a href="mailto:info@indianhempassociation.com?subject=IHA%20Project%20Backing%20Enquiry:%20"
             style={{ display: "block", textAlign: "center", marginTop: 12, background: "#235d35", color: "#fff",
                      padding: "10px 12px", borderRadius: 12, textDecoration: "none" }}>
            Invest / Back this Project
          </a>
        </div>
      );
    })}
  </div>
</section>
    {/* SUBMIT YOUR PROJECT */}
<section id="submit" style={{ maxWidth: 1120, margin: "32px auto 0", padding: "0 16px" }}>
  <div style={{ background: "#fff", borderRadius: 16, padding: 18, boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}>
    <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 12 }}>Submit Your Project (AI-assisted)</h3>

    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 10 }}>
      <input placeholder="Project Title" style={{ border: "1px solid #ddd", borderRadius: 12, padding: "10px 12px" }} />
      <input placeholder="Region (State / District)" style={{ border: "1px solid #ddd", borderRadius: 12, padding: "10px 12px" }} />
      <input placeholder="Funding Goal (INR)" type="number" style={{ border: "1px solid #ddd", borderRadius: 12, padding: "10px 12px" }} />
      <input placeholder="Primary Impact (e.g., Carbon)" style={{ border: "1px solid #ddd", borderRadius: 12, padding: "10px 12px" }} />
    </div>

    <textarea rows={5} placeholder="Describe your project, team, market linkages, and timeline..." style={{ border: "1px solid #ddd", borderRadius: 12, padding: "10px 12px", width: "100%", marginTop: 10 }} />

    <div style={{ display: "flex", gap: 10, marginTop: 10, flexWrap: "wrap" }}>
      <a href="mailto:info@indianhempassociation.com?subject=IHA%20Project%20Submission&body=Please%20attach%20a%20one-pager%20and%20your%20contacts."
         style={{ background: "#111", color: "#fff", padding: "10px 12px", borderRadius: 12, textDecoration: "none" }}>
        Send Submission (Email)
      </a>
      <a href="https://wa.me/919818093120?text=I%20want%20to%20submit%20a%20hemp%20project%20to%20IHA"
         style={{ background: "#235d35", color: "#fff", padding: "10px 12px", borderRadius: 12, textDecoration: "none" }}>
        Chat on WhatsApp
      </a>
    </div>

    <div style={{ fontSize: 12, color: "#666", marginTop: 6 }}>
      MVP preview. We’ll hook this to an AI form + review workflow soon.
    </div>
  </div>
</section>{/* GLOBAL COLLABORATION */}
<section id="partners" style={{ maxWidth: 1120, margin: "32px auto 40px", padding: "0 16px" }}>
  <h2 style={{ fontSize: 28, fontWeight: 700, color: "#235d35", marginBottom: 12 }}>Global Collaboration</h2>
  <p style={{ color: "#555", marginBottom: 16 }}>
    We partner with leading hemp associations worldwide to exchange standards, open markets, and align on UN SDGs.
  </p>
  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
    <div style={{ background: "#fff", borderRadius: 16, padding: 18, boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}>
      <div style={{ fontWeight: 700 }}>EIHA (Europe)</div>
      <p style={{ fontSize: 14, color: "#555", marginTop: 6 }}>
        Policy & standards exchange, cross-market access, and joint research pipelines.
      </p>
      <a href="#contact" style={{ fontSize: 14, color: "#235d35", textDecoration: "none" }}>Explore collaboration →</a>
    </div>
    <div style={{ background: "#fff", borderRadius: 16, padding: 18, boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}>
      <div style={{ fontWeight: 700 }}>HIA / NHGA (North America)</div>
      <p style={{ fontSize: 14, color: "#555", marginTop: 6 }}>
        Farmer representation, market development, and compliance insights.
      </p>
      <a href="#contact" style={{ fontSize: 14, color: "#235d35", textDecoration: "none" }}>Explore collaboration →</a>
    </div>
    <div style={{ background: "#fff", borderRadius: 16, padding: 18, boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}>
      <div style={{ fontWeight: 700 }}>IFCHA (Global)</div>
      <p style={{ fontSize: 14, color: "#555", marginTop: 6 }}>
        International coordination, UN-aligned advocacy, and multi-country projects.
      </p>
      <a href="#contact" style={{ fontSize: 14, color: "#235d35", textDecoration: "none" }}>Explore collaboration →</a>
    </div>
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
        </p> {/* FOOTER */}
<footer style={{ borderTop: "1px solid #eee", marginTop: 40 }}>
  <div style={{
    maxWidth: 1120,
    margin: "0 auto",
    padding: "24px 16px",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: 16,
    fontSize: 14
  }}>
    <div>
      <div style={{ fontWeight: 700, color: "#235d35" }}>Indian Hemp Association</div>
      <p style={{ color: "#666", marginTop: 6 }}>
        AI-led ecosystem for India’s hemp future — advocacy, knowledge,
        collaboration, and transparent project funding.
      </p>
    </div>

    <div>
      <div style={{ fontWeight: 700, marginBottom: 8 }}>Explore</div>
      <div><a href="#projects" style={{ color: "#333", textDecoration: "none" }}>Projects</a></div>
      <div><a href="#impact" style={{ color: "#333", textDecoration: "none" }}>Impact</a></div>
      <div><a href="#partners" style={{ color: "#333", textDecoration: "none" }}>Partners</a></div>
    </div>

    <div>
      <div style={{ fontWeight: 700, marginBottom: 8 }}>Legal</div>
      <div><a href="/terms" style={{ color: "#333", textDecoration: "none" }}>Terms of Use</a></div>
      <div><a href="/privacy" style={{ color: "#333", textDecoration: "none" }}>Privacy Policy</a></div>
      <div><a href="/funding" style={{ color: "#333", textDecoration: "none" }}>Funding Disclosures</a></div>
    </div>

    <div id="contact">
      <div style={{ fontWeight: 700, marginBottom: 8 }}>Contact</div>
      <div>
        <a href="mailto:info@indianhempassociation.com" style={{ color: "#235d35", textDecoration: "none" }}>
          info@indianhempassociation.com
        </a>
      </div>
      <div style={{ marginTop: 8 }}>
        <a href="tel:+919818093120" style={{ color: "#333", textDecoration: "none" }}>
          📞 +91 98180 93120
        </a>
      </div>
      <div style={{ marginTop: 4 }}>
        <a href="https://wa.me/919818093120" style={{ color: "#333", textDecoration: "none" }}>
          💬 Chat on WhatsApp
        </a>
      </div>
    </div>
  </div>

  <div style={{ textAlign: "center", fontSize: 12, color: "#666", paddingBottom: 24 }}>
    © {new Date().getFullYear()} Indian Hemp Association. All rights reserved.
  </div>
</footer>

      </main>
    </>
  );
}
