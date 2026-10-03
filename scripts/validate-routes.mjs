import { readFileSync } from 'node:fs';

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');
const assert = (condition, message) => {
  if (!condition) throw new Error(message);
};

const body = read('src/Layouts/Body.jsx');
const header = read('src/Layouts/Header.jsx');
const data = read('src/data/portfolio.js');
const redirects = read('public/_redirects').trim();
const netlify = read('netlify.toml');
const vercel = JSON.parse(read('vercel.json'));

const requiredRoutes = ['/', '/projects', '/projects/:slug', '/experience', '/about', '/services', '/skills', '/contact'];
for (const route of requiredRoutes) {
  assert(body.includes(`path="${route}"`), `Falta la ruta React Router: ${route}`);
}

const navRoutes = ['/', '/projects', '/experience', '/skills', '/about', '/contact'];
for (const route of navRoutes) {
  assert(header.includes(`path: '${route}'`), `El Header apunta a una ruta no validada: ${route}`);
}

assert(redirects === '/* /index.html 200', 'public/_redirects no contiene el fallback SPA esperado para Netlify.');
assert(netlify.includes('from = "/*"') && netlify.includes('to = "/index.html"') && netlify.includes('status = 200'), 'netlify.toml no contiene el fallback SPA.');
assert(vercel.rewrites?.some((r) => r.source === '/(.*)' && r.destination === '/index.html'), 'vercel.json no contiene el fallback SPA hacia /index.html.');

const slugs = [...data.matchAll(/slug:\s*'([^']+)'/g)].map((match) => match[1]);
assert(slugs.length > 0, 'No se encontraron slugs de proyectos para validar rutas dinámicas.');
assert(new Set(slugs).size === slugs.length, 'Hay slugs de proyectos duplicados.');

console.log(`✓ React Router: ${requiredRoutes.length} rutas principales validadas.`);
console.log(`✓ Navegación: ${navRoutes.length} enlaces principales validados.`);
console.log(`✓ Proyectos: ${slugs.length} slugs únicos preparados para /projects/:slug.`);
console.log('✓ Netlify: fallback SPA /* -> /index.html (200).');
console.log('✓ Vercel: fallback SPA /(.*) -> /index.html.');
console.log('✓ Las rutas directas pueden refrescar sin devolver 404 del hosting.');
