export default function NotFound() {
  return (
    <main style={{ padding: 40, fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial', textAlign: 'center' }}>
      <h1 style={{ fontSize: 36, margin: 0, color: '#235d35' }}>Page Not Found</h1>
      <p style={{ color: '#555', marginTop: 8 }}>That page doesn’t exist. Let’s get you back on track.</p>
      <div style={{ marginTop: 16, display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
        <a href="/" style={{ background: '#235d35', color: '#fff', padding: '10px 14px', borderRadius: 12, textDecoration: 'none', fontWeight: 700 }}>← Home</a>
        <a href="/programs" style={{ border: '1px solid #235d35', color: '#235d35', padding: '10px 14px', borderRadius: 12, textDecoration: 'none', fontWeight: 700 }}>Browse Programs</a>
      </div>
    </main>
  );
}

