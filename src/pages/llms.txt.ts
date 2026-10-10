import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { site } from '../lib/site';
import { brands } from '../data/brands';
import { allFaqs } from '../data/faq';

export const GET: APIRoute = async () => {
  const articles = await getCollection('articles', ({ data }) => !data.draft);
  const sorted = articles.sort((a, b) => b.data.updatedAt.getTime() - a.data.updatedAt.getTime());

  const lines = [
    `# ${site.name}`,
    '',
    `> ${site.description}`,
    '',
    '## 核心入口',
    '',
    `- [首页](${site.url}/)` ,
    `- [机场推荐](${site.url}/airport-recommendations/)`,
    `- [2026机场排行榜与横向对比](${site.url}/airport-comparison/)`,
    `- [机场评测库](${site.url}/brands/)`,
    `- [机场导航](${site.url}/airport-directory/)`,
    `- [AI资讯分享](${site.url}/ai-news/)`,
    `- [工具分享](${site.url}/tools/)`,
    `- [机场优惠码](${site.url}/deals/)`,
    `- [跑路预警](${site.url}/alerts/)`,
    `- [全部文章](${site.url}/articles/)`,
    `- [常见问题](${site.url}/faq/)`,
    '',
    '## 机场独立评测',
    '',
    ...brands.map((brand) => `- [${brand.name}怎么样？2026 ${brand.name}机场评测](${site.url}/brands/${brand.slug}/): ${brand.verdict}`),
    '',
    '## 文章',
    '',
    ...sorted.map((article) => `- [${article.data.title}](${site.url}/articles/${article.id}/): ${article.data.description}`),
    '',
    '## 高频问题',
    '',
    ...allFaqs.map((faq) => `- ${faq.question} — ${site.url}/faq/#${faq.id}`),
    '',
    '## 站点说明',
    '',
    '- 语言：简体中文（zh-CN）',
    `- 编辑联系：${site.email}`,
    `- Sitemap：${site.url}/sitemap-index.xml`,
    `- RSS：${site.url}/feed.xml`
  ];

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' }
  });
};
