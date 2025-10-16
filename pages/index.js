import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Indian Hemp Association</title>
        <meta name="description" content="Minimal page to clear JSX error." />
        <link rel="canonical" href="https://www.indianhempassociation.com" />
      </Head>

      <main style={{ padding: 40, fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial' }}>
        <h1 style={{ fontSize: 28, color: '#235d35', margin: 0 }}>Indian Hemp Association</h1>
        <p style={{ marginTop: 8, color: '#555' }}>
          Clean index in place — no header/nav yet. <!-- redeploy --> confirms the build is using the new file.
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
