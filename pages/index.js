import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Indian Hemp Association</title>
        <meta name="description" content="AI-led ecosystem — site bootstrapped successfully." />
      </Head>

      <main style={{ padding: 40, fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial' }}>
        <header
          style={{
            maxWidth: 1120,
            margin: '0 auto',
            padding: '12px 16px 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <div style={{ fontWeight: 700, fontSize: 18, color: '#235d35' }}>Indian Hemp Association</div>

          <nav style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a href="/programs" style={{ color: '#333', textDecoration: 'none' }}>Programs</a>
            <a href="/programs/register" style={{ color: '#333', textDecoration: 'none' }}>Register</a>
            <a
              href="mailto:info@indianhempassociation.com?subject=Join%20IHA"
              style={{ background: '#235d35', color: '#fff', padding: '8px 14px', borderRadius: 12, textDecoration: 'none', fontWeight: 600 }}
            >
              Join IHA
            </a>
          </nav>
        </header>

        <section style={{ maxWidth: 1120, margin: '0 auto' }}>
          <h1 style={{ fontSize: 32, margin: 0 }}>AI-led ecosystem — site bootstrapped successfully.</h1>
          <p style={{ marginTop: 8, color: '#555' }}>
            This is a safe minimal homepage to fix the build. After it compiles cleanly, we’ll restore the full sections.
          </p>
        </section>
      </main>
    </>
  );
}
