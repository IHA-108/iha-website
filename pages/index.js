import Head from 'next/head';

export default function Home() {
  const phoneDisplay = '+91 99996 59994';
  const phoneHref = 'tel:+919999659994';
  const whatsappHref = 'https://wa.me/919999659994';

  // helper to hide logo if image missing
  const hideIfBroken = (e) => {
    e.currentTarget.style.display = 'none';
  };

  // contact form styles
  const ihaInput = {
    border: '1px solid #ddd',
    borderRadius: 12,
    padding: '10px 12px',
    fontSize: 14,
  };
  const ihaBtnPrimary = {
    background: '#235d35',
    color: '#fff',
    border: 'none',
    padding: '10px 14px',
    borderRadius: 12,
    fontWeight: 700,
    cursor: 'pointer',
  };

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

      <main
        style={{
          padding: 40,
          fontFamily:
            'system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial',
          background: '#fafafa',
        }}
      >
        {/* HEADER / NAVBAR */}
        <header
          style={{
            maxWidth: 1120,
            margin: '0 auto',
            padding: '12px 16px 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            rowGap: 8,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <img
              src="/logo.png"
              alt="Indian Hemp Association"
              onError={hideIfBroken}
              style={{ height: 36, width: 'auto' }}
            />
            <span
              style={{
                fontWeight: 700,
                fontSize: 18,
                color: '#235d35',
              }}
            >
              Indian Hemp Association
            </span>
          </div>

          <nav style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a href="#about" style={{ color: '#333', textDecoration: 'none' }}>
              About
            </a>
            <a
              href="#projects"
              style={{ color: '#333', textDecoration: 'none' }}
            >
              Projects
            </a>
            <a
              href="#partners"
              style={{ color: '#333', textDecoration: 'none' }}
            >
              Partners
            </a>
            <a
              href="/programs"
              style={{ color: '#333', textDecoration: 'none' }}
            >
              Programs
            </a>
            <a
              href="mailto:info@indianhempassociation.com?subject=Join%20IHA"
              style={{
                background: '#235d35',
                color: '#fff',
                padding: '8px 14px',
                borderRadius: 12,
                textDecoration: 'none',
                fontWeight: 600,
              }}
            >
              Join IHA
            </a>
          </nav>
        </header>

        {/* HERO SECTION */}
        <section
          style={{
            maxWidth: 1120,
            margin: '0 auto',
            padding: '24px 16px',
            borderRadius: 24,
            color: '#fff',
            background:
              'linear-gradient(135deg,#235d35 0%, #0d6e57 60%, #0b5a4a 100%)',
            boxShadow: '0 6px 22px rgba(0,0,0,0.12)',
          }}
        >
          <div
            style={{
              background: 'rgba(255,255,255,0.12)',
              padding: '6px 10px',
              borderRadius: 999,
              fontSize: 12,
              display: 'inline-block',
            }}
          >
            AI-led • SDG-aligned • Transparent
          </div>

          <h2 style={{ margin: '12px 0 8px', fontSize: 36, fontWeight: 700 }}>
            Empowering India’s{' '}
            <span style={{ color: '#F6D36B' }}>Hemp Revolution</span>
          </h2>

          <p
            style={{
              opacity: 0.95,
              maxWidth: 720,
              fontSize: 18,
              lineHeight: 1.5,
            }}
          >
            Invest in farmers, processors, and innovation. Build
            climate-positive livelihoods with the Indian Hemp Association.
          </p>

          <div style={{ marginTop: 16, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a
              href="#projects"
              style={{
                background: '#fff',
                color: '#0d5b49',
                padding: '10px 14px',
                borderRadius: 12,
                fontWeight: 600,
                textDecoration: 'none',
              }}
            >
              I’m an Investor
            </a>
            <a
              href="#submit"
              style={{
                border: '1px solid rgba(255,255,255,0.6)',
                color: '#fff',
                padding: '10px 14px',
                borderRadius: 12,
                fontWeight: 600,
                textDecoration: 'none',
              }}
            >
              I’m a Farmer / Processor
            </a>
          </div>
        </section>

        {/* CONTACT (Spam-protected, no backend) */}
        <section
          id="contact"
          style={{
            maxWidth: 1120,
            margin: '20px auto 0',
            padding: '0 16px'
          }}
        >
          <div
            style={{
              background: '#fff',
              borderRadius: 16,
              padding: 20,
              boxShadow: '0 1px 3px rgba(0,0,0,0.06)'
            }}
          >
            <h2 style={{ margin: 0, fontSize: 26, color: '#235d35' }}>Contact IHA</h2>
            <p style={{ color: '#555', marginTop: 6 }}>
              Questions, partnerships, or program applications? Send us a note.
            </p>

            <form
              onSubmit={(e) => {
                const bot = e.currentTarget.querySelector('#iha_hp')?.value?.trim();
                if (bot) { e.preventDefault(); return; } // silently drop bots
                e.preventDefault();
                const name = encodeURIComponent(e.currentTarget.name.value);
                const email = encodeURIComponent(e.currentTarget.email.value);
                const topic = encodeURIComponent(e.currentTarget.topic.value);
                const message = encodeURIComponent(e.currentTarget.message.value);
                const subject = encodeURIComponent(`IHA Contact — ${topic}`);
                const body = encodeURIComponent(
                  `Name: ${name}\nEmail: ${email}\nTopic: ${topic}\n\n${message}`
                );
                window.location.href = `mailto:info@indianhempassociation.com?subject=${subject}&body=${body}`;
              }}
              style={{ display: 'grid', gap: 12, maxWidth: 600, marginTop: 12 }}
            >
              {/* Honeypot (hidden field; bots fill it) */}
              <input
                id="iha_hp"
                name="company"
                tabIndex={-1}
                autoComplete="off"
                style={{ position: 'absolute', left: '-10000px', width: 1, height: 1 }}
                placeholder="Leave this field empty"
              />

              <input name="name" required placeholder="Your Name" style={ihaInput} />
              <input name="email" required type="email" placeholder="Your Email" style={ihaInput} />
              <select name="topic" required style={ihaInput}>
                <option value="">Topic</option>
                <option value="Programs">Programs</option>
                <option value="Farmer / Processor">Farmer / Processor</option>
                <option value="Patient Guidance">Patient Guidance</option>
                <option value="Partnership">Partnership</option>
                <option value="Media / Speaking">Media / Speaking</option>
                <option value="Other">Other</option>
              </select>
              <textarea name="message" rows={5} required placeholder="Your message…" style={{ ...ihaInput, height: 120 }} />
              <button type="submit" style={ihaBtnPrimary}>Send Email</button>
            </form>

            <div style={{ marginTop: 10, fontSize: 14, color: '#666' }}>
              Or reach us directly: <a href="mailto:info@indianhempassociation.com" style={{ color: '#235d35', textDecoration: 'none' }}>info@indianhempassociation.com</a>
            </div>
          </div>
        </section>

        {/* VISION & MISSION */}
        <section
          id="vision"
          style={{
            maxWidth: 1120,
            margin: '20px auto 0',
            padding: '0 16px',
          }}
        >
          <div
            style={{
              background: '#fff',
              borderRadius: 16,
              padding: 20,
              boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: 14,
              alignItems: 'start'
            }}
          >
            <div>
              <div style={{ fontSize: 12, letterSpacing: 0.5, color: '#0d6e57', fontWeight: 700, textTransform: 'uppercase' }}>
                Our Vision 2030
              </div>
              <h2 style={{ margin: '6px 0 8px', fontSize: 26, color: '#235d35' }}>
                India’s hemp ecosystem as a climate-positive growth engine
              </h2>
              <p style={{ color: '#444', lineHeight: 1.6 }}>
                By 2030, IHA aims to enable inclusive livelihoods, circular industries, and measurable climate impact
                across India’s hemp value chains — aligned to the UN SDGs.
              </p>
            </div>

            <div>
              <div style={{ fontSize: 12, letterSpacing: 0.5, color: '#0d6e57', fontWeight: 700, textTransform: 'uppercase' }}>
                Our Mission
              </div>
              <ul style={{ margin: '8px 0 0 16px', color: '#444', lineHeight: 1.6 }}>
                <li>Build farmer-first supply chains with fair contracts & training.</li>
                <li>Scale processing capacity and export-grade quality standards.</li>
                <li>Mobilise funding for projects via transparent crowdfunding.</li>
                <li>Advance research, compliance, and policy collaboration.</li>
                <li>Measure impact with open data on jobs, yields, and CO₂e.</li>
              </ul>
            </div>

            <div
              style={{
                background: '#f7faf8',
                border: '1px solid #e6efe9',
                borderRadius: 14,
                padding: 14
              }}
            >
              <div style={{ fontWeight: 800, color: '#235d35', marginBottom: 6 }}>Focus 2025</div>
              <ul style={{ margin: '0 0 0 16px', color: '#444', lineHeight: 1.6 }}>
                <li>Pilot 3–5 farmer clusters with assured buy-back</li>
                <li>Operationalise processor network in 3 states</li>
                <li>Launch World Hemp Day India program (June 26)</li>
                <li>Publish “Hemp for Climate” brief & open data counters</li>
              </ul>
              <div style={{ marginTop: 10, display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                <a href="/programs/vision-mission" style={{ color: '#235d35', textDecoration: 'none', fontWeight: 700 }}>
                  Read our full Vision & Mission →
                </a>
                <a href="#projects" style={{ color: '#0d6e57', textDecoration: 'none' }}>
                  Explore current projects
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer
          style={{
            borderTop: '1px solid #eee',
            marginTop: 40,
            paddingTop: 24,
            textAlign: 'center',
            color: '#666',
            fontSize: 14,
          }}
        >
          <p>
            © {new Date().getFullYear()} Indian Hemp Association — AI-led
            ecosystem for India’s hemp future.
          </p>
          <p>
            <a
              href="mailto:info@indianhempassociation.com"
              style={{ color: '#235d35', textDecoration: 'none' }}
            >
              info@indianhempassociation.com
            </a>{' '}
            |{' '}
            <a
              href={whatsappHref}
              style={{ color: '#235d35', textDecoration: 'none' }}
            >
              WhatsApp
            </a>{' '}
            |{' '}
            <a
              href={phoneHref}
              style={{ color: '#235d35', textDecoration: 'none' }}
            >
              {phoneDisplay}
            </a>
          </p>
        </footer>
      </main>
    </>
  );
}
