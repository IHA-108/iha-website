const LASTMOD = '2025-10-16';

const urls = [
  { loc: 'https://www.indianhempassociation.com/', priority: '1.0' },
  { loc: 'https://www.indianhempassociation.com/programs', priority: '0.9' },
  { loc: 'https://www.indianhempassociation.com/programs/farmer', priority: '0.8' },
  { loc: 'https://www.indianhempassociation.com/programs/processor', priority: '0.8' },
  { loc: 'https://www.indianhempassociation.com/programs/patient', priority: '0.8' },
  { loc: 'https://www.indianhempassociation.com/programs/adopt-a-farm', priority: '0.8' },
  { loc: 'https://www.indianhempassociation.com/programs/each-one-seed-one', priority: '0.8' },
  { loc: 'https://www.indianhempassociation.com/programs/world-hemp-day', priority: '0.8' },
  { loc: 'https://www.indianhempassociation.com/programs/vision-mission', priority: '0.8' }
];

function buildXml() {
  const items = urls.map(
    u => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${LASTMOD}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  ).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${items}
</urlset>`;
}

export async function getServerSideProps({ res }) {
  const xml = buildXml();
  res.setHeader('Content-Type', 'application/xml; charset=utf-8');
  res.write(xml);
  res.end();
  return { props: {} };
}

export default function SitemapXml() { return null; }
