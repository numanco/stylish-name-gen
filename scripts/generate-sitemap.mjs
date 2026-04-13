import fs from 'node:fs';
import path from 'node:path';

const SITE_URL = 'https://stylish-name-gen.in';
const seoDataPath = path.resolve('src/lib/seo-data.ts');
const outputPath = path.resolve('public/sitemap.xml');

const seoSource = fs.readFileSync(seoDataPath, 'utf8');

const staticSlugs = [...seoSource.matchAll(/slug:\s*'([^']+)'/g)].map((match) => match[1]);
const alphabetSlugs = 'abcdefghijklmnopqrstuvwxyz'.split('').map((letter) => `${letter}-stylish-name`);

const routes = ['/', '/generator', '/sitemap', ...new Set([...staticSlugs, ...alphabetSlugs]).values()].map((route) =>
  route === '/' ? SITE_URL : `${SITE_URL}/${route}`.replace(/([^:]\/)\/+/, '$1')
);

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (url) => `  <url>
    <loc>${url}</loc>
    <changefreq>weekly</changefreq>
    <priority>${url === SITE_URL ? '1.0' : '0.8'}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

fs.writeFileSync(outputPath, xml, 'utf8');
console.log(`Generated sitemap with ${routes.length} URLs at ${outputPath}`);