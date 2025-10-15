export async function getServerSideProps({ res }) {
  const content = `User-agent: *
Allow: /

Sitemap: https://www.indianhempassociation.com/sitemap.xml
`;

  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.write(content);
  res.end();

  return { props: {} };
}

export default function RobotsTxt() { return null; }

