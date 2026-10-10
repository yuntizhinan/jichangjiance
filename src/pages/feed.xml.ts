import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { site } from '../lib/site';
import { brands } from '../data/brands';

function escapeXml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

export const GET: APIRoute = async () => {
  const articles = await getCollection('articles', ({ data }) => !data.draft);
  const items = articles
    .sort((a, b) => b.data.updatedAt.getTime() - a.data.updatedAt.getTime())
    .map((article) => {
      const url = `${site.url}/articles/${article.id}/`;
      return `<item>
        <title>${escapeXml(article.data.title)}</title>
        <link>${url}</link>
        <guid isPermaLink="true">${url}</guid>
        <description>${escapeXml(article.data.description)}</description>
        <pubDate>${article.data.updatedAt.toUTCString()}</pubDate>
      </item>`;
    })
    .join('\n');
  const brandItems = brands.map((brand) => {
    const url = `${site.url}/brands/${brand.slug}/`;
    return `<item>
      <title>${escapeXml(`${brand.name}怎么样？2026 ${brand.name}机场评测`)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${escapeXml(brand.description)}</description>
      <pubDate>${new Date(`${brand.updatedAt}T08:00:00+08:00`).toUTCString()}</pubDate>
    </item>`;
  }).join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
  <channel>
    <title>${escapeXml(site.name)}</title>
    <link>${site.url}</link>
    <description>${escapeXml(site.description)}</description>
    <language>zh-CN</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    ${brandItems}
    ${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' }
  });
};
