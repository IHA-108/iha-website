export default function VisionMission() {
  return (
    <main style={{ padding: 40, fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial' }}>
      <a href="/programs" style={{ textDecoration: 'none', color: '#235d35' }}>← Programs</a>

      <h1 style={{ margin: '8px 0 0', fontSize: 32, color: '#235d35' }}>Vision & Mission</h1>
      <p style={{ color: '#555', maxWidth: 800 }}>
        The Indian Hemp Association (IHA) exists to accelerate India’s hemp ecosystem — farmer-first, climate-positive,
        and market-ready. We convene growers, processors, researchers, investors, and policymakers to unlock jobs,
        income, and measurable impact.
      </p>

      {/* Vision */}
      <section style={section}>
        <h2 style={h2}>Vision 2030</h2>
        <p style={{ color: '#444' }}>
          India’s hemp ecosystem becomes a climate-positive growth engine — regenerating soils, creating livelihoods,
          and building circular industries aligned to national priorities and the UN Sustainable Development Goals.
        </p>
        <ul style={ul}>
          <li>Enable <b>10,000+</b> farmers across regional clusters</li>
          <li>Operationalise <b>50+</b> processing/value-add units</li>
          <li>Reach <b>1 Mt CO₂e</b> avoided/removed (cumulative) via materials & rotations</li>
          <li>Generate <b>25,000</b> direct & indirect livelihoods</li>
        </ul>
      </section>

      {/* Mission */}
      <section style={section}>
        <h2 style={h2}>Mission</h2>
        <ul style={ul}>
          <li>Build farmer-first supply chains with fair contracts, training, and quality SOPs.</li>
          <li>Scale processing capacity and export-grade standards with traceability.</li>
          <li>Mobilise transparent funding via project listings and partnerships.</li>
          <li>Advance research, compliance, and policy collaboration with institutions.</li>
          <li>Measure outcomes with open counters on jobs, yields, and CO₂e.</li>
        </ul>
      </section>

      {/* SDG alignment */}
      <section style={section}>
        <h2 style={h2}>UN SDG Alignment</h2>
        <div style={grid}>
          {[
            ['SDG 1 — No Poverty', 'Rural incomes via offtake & value-add.'],
            ['SDG 2 — Zero Hunger', 'Rotations improve soil & farm resilience.'],
            ['SDG 8 — Decent Work', 'Enterprise & cluster jobs across value chains.'],
            ['SDG 9 — Industry & Innovation', 'Processing hubs, materials R&D, exports.'],
            ['SDG 12 — Responsible Consumption', 'Bio-based products & circularity.'],
            ['SDG 13 — Climate Action', 'CO₂e avoidance/removal, MRV-ready data.'],
            ['SDG 15 — Life on Land', 'Soil health and landscape regeneration.'],
          ].map(([title, desc]) => (
            <div key={title} style={card}>
              <div style={{ fontWeight: 700 }}>{title}</div>
              <div style={{ color: '#555', marginTop: 6 }}>{desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 2025 Focus */}
      <section style={section}>
        <h2 style={h2}>Focus 2025</h2>
        <ul style={ul}>
          <li>Pilot <b>3–5 farmer clusters</b> with assured buy-back MoUs</li>
          <li>Operationalise processor network across <b>3 states</b></li>
          <li>Launch <b>World Hemp Day India</b> (June 26, 2025)</li>
          <li>Publish “Hemp for Climate” brief & open impact counters</li>
        </ul>
      </section>

      {/* KPIs */}
      <section style={section}>
        <h2 style={h2}>Key KPIs</h2>
        <div style={grid}>
          {[
            ['Farmers Onboarded', 'Target 2,000 (2025)'],
            ['Procurement to Processors', '≥ 70% of planned volumes'],
            ['QA/Traceability Adoption', '≥ 90% of partner units'],
            ['CO₂e Impact (indicative)', '≥ 80,000 tCO₂e (2025)'],
            ['Funds Facilitated', '₹ 20+ Cr into pilots & hubs'],
            ['Partnerships Signed', '15+ research/market partners'],
          ].map(([k, v]) => (
            <div key={k} style={kpi}>
              <div style={{ fontSize: 12, color: '#666' }}>{k}</div>
              <div style={{ fontWeight: 800, fontSize: 20, color: '#0d6e57', marginTop: 4 }}>{v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to action */}
      <section style={ctaWrap}>
        <div style={cta}>
          <div>
            <div style={{ fontWeight: 800, fontSize: 18, color: '#235d35' }}>Join the IHA mission</div>
            <div style={{ color: '#444', marginTop: 6 }}>
              Farmers, processors, researchers, investors, policy partners — let’s build India’s hemp future together.
            </div>
          </div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <a href="/programs/register" style={btnPrimary}>Register Interest</a>
            <a href="mailto:info@indianhempassociation.com?subject=IHA%20Partnership" style={btnGhost}>Partner with IHA</a>
          </div>
        </div>
      </section>
    </main>
  );
}

/* styles */
const section = { marginTop: 22, background: '#fff', borderRadius: 14, padding: 16, boxShadow: '0 1px 3px rgba(0,0,0,0.06)' };
const h2 = { margin: 0, fontSize: 22, color: '#235d35' };
const ul = { margin: '10px 0 0 16px', color: '#444', lineHeight: 1.6, maxWidth: 820 };
const grid = { marginTop: 12, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 14 };
const card = { background: '#f8faf9', border: '1px solid #e6efe9', borderRadius: 12, padding: 14 };
const kpi = { background: '#fff', border: '1px solid #eee', borderRadius: 12, padding: 14, boxShadow: '0 1px 3px rgba(0,0,0,0.04)' };
const ctaWrap = { marginTop: 22 };
const cta = { background: '#f7faf8', border: '1px solid #e6efe9', borderRadius: 14, padding: 16, display: 'flex', gap: 16, alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' };
const btnPrimary = { background: '#235d35', color: '#fff', padding: '10px 14px', borderRadius: 12, textDecoration: 'none', fontWeight: 700 };
const btnGhost = { color: '#235d35', padding: '10px 14px', borderRadius: 12, textDecoration: 'none', border: '1px solid #235d35', fontWeight: 700 };
