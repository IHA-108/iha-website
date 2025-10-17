import Head from 'next/head';

export default function Home() {
  const phoneDisplay = '+91 99996 59994';
  const phoneHref = 'tel:+919999659994';
  const whatsappHref = 'https://wa.me/919999659994';

  // helper to hide logo if image missing
  const hideIfBroken = (e) => {
    e.currentTarget.style.display = 'none';
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
