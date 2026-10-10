import { readdir, readFile, stat } from 'node:fs/promises';
import { extname, join, relative, resolve } from 'node:path';

const distDir = resolve('dist');
const siteOrigin = 'https://jichangjiance.com';
const requiredFiles = [
  'index.html',
  '404.html',
  'robots.txt',
  'sitemap-index.xml',
  'feed.xml',
  'llms.txt',
  '_headers',
  'favicon-jc-warm.svg',
  'og-default.png'
];

const errors = [];
const warnings = [];
let checkedReferences = 0;

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await walk(path));
    else files.push(path);
  }
  return files;
}

async function exists(path) {
  try {
    return (await stat(path)).isFile();
  } catch {
    return false;
  }
}

function routeForHtml(file) {
  const rel = relative(distDir, file).replaceAll('\\', '/');
  if (rel === 'index.html') return '/';
  if (rel === '404.html') return '/404.html';
  return `/${rel.replace(/index\.html$/, '')}`;
}

async function resolveInternalReference(value, pageRoute) {
  if (!value || /^(?:https?:|mailto:|tel:|data:|javascript:|#)/i.test(value)) return true;

  let pathname;
  try {
    pathname = new URL(value, `${siteOrigin}${pageRoute}`).pathname;
    pathname = decodeURIComponent(pathname);
  } catch {
    return false;
  }

  const normalized = pathname.replace(/^\/+/, '');
  const base = join(distDir, normalized);
  const candidates = pathname.endsWith('/')
    ? [join(base, 'index.html')]
    : extname(pathname)
      ? [base]
      : [base, `${base}.html`, join(base, 'index.html')];

  for (const candidate of candidates) {
    if (await exists(candidate)) return true;
  }
  return false;
}

for (const required of requiredFiles) {
  if (!await exists(join(distDir, required))) errors.push(`Missing required output: ${required}`);
}

const files = await walk(distDir);
const htmlFiles = files.filter((file) => file.endsWith('.html'));
const canonicalOwners = new Map();

for (const file of htmlFiles) {
  const rel = relative(distDir, file).replaceAll('\\', '/');
  const route = routeForHtml(file);
  const html = await readFile(file, 'utf8');

  if (!/<html\b[^>]*\blang=["']zh-CN["']/i.test(html)) errors.push(`${rel}: missing html lang=zh-CN`);
  if (!/<title>[^<]+<\/title>/i.test(html)) errors.push(`${rel}: missing title`);
  if (!/<meta\b[^>]*name=["']description["'][^>]*content=["'][^"']+["']/i.test(html)) errors.push(`${rel}: missing meta description`);
  if (!/<meta\b[^>]*name=["']robots["'][^>]*content=["'][^"']+["']/i.test(html)) errors.push(`${rel}: missing robots meta`);
  if (!/<h1\b/i.test(html)) warnings.push(`${rel}: no h1 found`);

  const canonical = html.match(/<link\b[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["']/i)?.[1];
  if (!canonical) {
    errors.push(`${rel}: missing canonical`);
  } else if (!canonical.startsWith(`${siteOrigin}/`)) {
    errors.push(`${rel}: canonical does not use ${siteOrigin}: ${canonical}`);
  } else if (canonicalOwners.has(canonical)) {
    errors.push(`${rel}: duplicate canonical also used by ${canonicalOwners.get(canonical)}: ${canonical}`);
  } else {
    canonicalOwners.set(canonical, rel);
  }

  for (const tag of html.match(/<img\b[^>]*>/gi) ?? []) {
    if (!/\balt=["'][^"']*["']/i.test(tag)) errors.push(`${rel}: img without alt attribute`);
  }

  const references = [...html.matchAll(/\b(?:href|src)=["']([^"']+)["']/gi)].map((match) => match[1]);
  for (const reference of references) {
    // Ignore JavaScript template placeholders emitted inside inline scripts.
    if (reference.includes('${')) continue;
    checkedReferences += 1;
    if (!await resolveInternalReference(reference, route)) errors.push(`${rel}: broken internal reference ${reference}`);
  }
}

const sitemap = await readFile(join(distDir, 'sitemap-index.xml'), 'utf8').catch(() => '');
if (sitemap && !sitemap.includes(siteOrigin)) errors.push('sitemap-index.xml does not use the production domain');

const robots = await readFile(join(distDir, 'robots.txt'), 'utf8').catch(() => '');
if (robots && !robots.includes(`${siteOrigin}/sitemap-index.xml`)) errors.push('robots.txt does not reference the production sitemap');

if (warnings.length) {
  console.warn(`\nWarnings (${warnings.length}):`);
  for (const warning of warnings) console.warn(`- ${warning}`);
}

if (errors.length) {
  console.error(`\nAudit failed with ${errors.length} error(s):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`Production audit passed: ${htmlFiles.length} HTML pages and ${checkedReferences} references checked.`);
