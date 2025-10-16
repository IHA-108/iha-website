import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Indian Hemp Association</title>
        <meta name="description" content="AI-led ecosystem — site bootstrapped successfully." />
        <link rel="canonical" href="https://www.indianhempassociation.com" />
      </Head>

      <main style={{ padding: 40, fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial' }}>
        <h1 style={{ fontSize: 32, margin: 0, color: '#235d35' }}>
          Indian Hemp Association
        </h1>
        <p style={{ marginTop: 8, color: '#555' }}>
          Minimal homepage is live. We removed the broken JSX line and will restore the full layout next.
        </p>
        <p style={{ marginTop: 8 }}>
          <a href="/programs" style={{ color: '#235d35', textDecoration: 'none', fontWeight: 700 }}>
            → Go to Programs
          </a>
        </p>
      </main>
    </>
  );
}
