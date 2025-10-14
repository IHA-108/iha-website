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

        <p>
          Contact:{' '}
          <a href="mailto:info@indianhempassociation.com">info@indianhempassociation.com</a> ·{' '}
          <a href="tel:+919818093120">+91 98180 93120</a>
        </p>
      </main>
    </>
  );
}
