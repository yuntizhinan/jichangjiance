import { mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const sharp = require('../node_modules/.pnpm/sharp@0.34.5/node_modules/sharp');

const outputDir = join(process.cwd(), 'public', 'images', 'articles', 'warm');

const covers = [
  {
    slug: 'airport-ranking-comparison-2026',
    page: 'https://www.pexels.com/photo/cozy-workspace-with-coffee-and-notebook-36010272/',
    source: 'https://images.pexels.com/photos/36010272/pexels-photo-36010272.jpeg?auto=compress&dpr=1&h=1200&w=1920',
    position: 'attention'
  },
  {
    slug: 'cheap-monthly-airports-2026',
    page: 'https://www.pexels.com/photo/money-coffee-calculator-and-laptop-on-a-desk-5942707/',
    source: 'https://images.pexels.com/photos/5942707/pexels-photo-5942707.jpeg?auto=compress&dpr=1&h=1200&w=1920',
    position: 'attention'
  },
  {
    slug: 'chatgpt-claude-airport-guide-2026',
    page: 'https://www.pexels.com/photo/cozy-workspace-with-coffee-mug-on-desk-30391091/',
    source: 'https://images.pexels.com/photos/30391091/pexels-photo-30391091.jpeg?auto=compress&dpr=1&h=1200&w=1920',
    position: 'attention'
  },
  {
    slug: 'netflix-youtube-airport-guide-2026',
    page: 'https://www.pexels.com/photo/sofas-in-a-living-room-18667629/',
    source: 'https://images.pexels.com/photos/18667629/pexels-photo-18667629/free-photo-of-sofas-in-a-living-room.jpeg?auto=compress&dpr=1&h=1200&w=1920',
    position: 'attention'
  },
  {
    slug: 'airport-coupon-guide-2026',
    page: 'https://www.pexels.com/photo/online-shopping-with-credit-card-and-laptop-29205862/',
    source: 'https://images.pexels.com/photos/29205862/pexels-photo-29205862/free-photo-of-online-shopping-with-credit-card-and-laptop.jpeg?auto=compress&dpr=1&h=1200&w=1920',
    position: 'attention'
  },
  {
    slug: 'airport-runaway-warning-guide-2026',
    page: 'https://www.pexels.com/photo/time-on-a-laptop-screen-on-the-desk-4929994/',
    source: 'https://images.pexels.com/photos/4929994/pexels-photo-4929994.jpeg?auto=compress&dpr=1&h=1200&w=1920',
    position: 'attention'
  }
];

await mkdir(outputDir, { recursive: true });

for (const cover of covers) {
  const response = await fetch(cover.source, { headers: { 'User-Agent': 'Mozilla/5.0' } });
  if (!response.ok) throw new Error(`${cover.slug}: ${response.status} ${response.statusText}`);

  const input = Buffer.from(await response.arrayBuffer());
  const overlay = Buffer.from('<svg width="1280" height="720"><rect width="1280" height="720" fill="#c88763" opacity="0.07"/></svg>');
  const output = await sharp(input)
    .rotate()
    .resize(1280, 720, { fit: 'cover', position: cover.position })
    .modulate({ brightness: 1.03, saturation: 0.78 })
    .composite([{ input: overlay, blend: 'soft-light' }])
    .webp({ quality: 84, smartSubsample: true })
    .toBuffer();

  await writeFile(join(outputDir, `${cover.slug}-v4.webp`), output);
  console.log(`${cover.slug}: ${output.length} bytes`);
}

const sourceLines = covers.map((cover) => `| ${cover.slug}-v4.webp | ${cover.page} |`).join('\n');
console.log('\nAdd to SOURCES.md:\n' + sourceLines);
