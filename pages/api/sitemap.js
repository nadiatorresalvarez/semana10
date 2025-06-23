export default async function handler(req, res) {
  // Simula obtener rutas dinámicas desde una base de datos o CMS
  const posts = [
    { id: '1' },
    { id: '2' },
    { id: 'ejemplo-post' },
  ];

  const staticPages = [
    '',
    'about',
    'contact',
  ];

  const siteUrl = 'https://nadiator.vercel.app';

  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  sitemap += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  staticPages.forEach(page => {
    sitemap += `  <url>\n    <loc>${siteUrl}/${page}</loc>\n  </url>\n`;
  });

  posts.forEach(post => {
    sitemap += `  <url>\n    <loc>${siteUrl}/blog/${post.id}</loc>\n  </url>\n`;
  });

  sitemap += `</urlset>`;

  res.setHeader('Content-Type', 'application/xml');
  res.status(200).send(sitemap);
}