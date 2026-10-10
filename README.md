# 机场监测 Astro 博客

面向中文用户的机场代理、机场导航、机场推荐、工具教程、AI 资讯、优惠信息与服务风险内容站。项目采用 Astro 5 静态输出，域名配置为 `https://jichangjiance.com`。

## 本地开发

```powershell
pnpm install
pnpm dev
```

质量检查与生产构建：

```powershell
pnpm run check
pnpm run build
```

## 主要路由

- `/`：首页与核心入口
- `/airport-recommendations/`：机场推荐与比较方法
- `/airport-comparison/`：2026 机场排行榜、价格、线路与场景对比
- `/airport-directory/`：机场导航
- `/brands/`：机场品牌库与八个独立品牌评测
- `/ai-news/`：AI 资讯分享
- `/tools/`：客户端与工具教程
- `/deals/`：机场优惠码与活动
- `/alerts/`：跑路预警与服务异常记录
- `/articles/`：全部文章
- `/categories/`：知识分类
- `/search/`：浏览器端站内搜索（noindex）
- `/feed.xml`：RSS
- `/llms.txt`：面向 AI 检索的站点与文章索引
- `/sitemap-index.xml`：Sitemap 索引

## 新增文章

在 `src/content/articles/` 新建 Markdown 或 MDX 文件，使用以下 Frontmatter：

```yaml
---
title: "文章标题"
description: "用于搜索摘要和文章卡片的独立描述。"
category: "机场评测"
tags: ["机场推荐", "稳定性"]
publishedAt: 2026-10-01
updatedAt: 2026-10-01
author: "机场监测编辑部"
coverTone: "lime"
featured: false
readingTime: "8 分钟"
keywords: ["机场推荐", "性价比机场"]
image: "/images/example.webp"
imageAlt: "描述图片实际内容的替代文本"
draft: false
faq:
  - question: "常见问题"
    answer: "简洁、完整的回答。"
---
```

分类字段允许：`入门指南`、`机场评测`、`工具教程`、`网络知识`、`AI资讯`、`优惠情报`、`风险预警`。

## SEO / GEO 基础能力

- 每页独立 title、description、Canonical、robots、Open Graph 与 Twitter Card
- WebSite、Organization、WebPage、Article、BreadcrumbList、FAQPage、CollectionPage 与 ItemList JSON-LD
- 自动 Sitemap、RSS 和 `llms.txt`
- 文章草稿过滤、语义化标题层级、面包屑、目录、相关推荐和内部链接
- 图片 alt、固定宽高、延迟加载与异步解码接口
- 搜索页与 404 页面使用 noindex 策略

站点公共信息维护在 `src/lib/site.ts`，文章 Schema 维护在 `src/content.config.ts`。

## GitHub 与 Cloudflare Pages 发布

项目已经按 Cloudflare Pages 的静态 Astro 部署方式配置：

- 生产域名：`https://jichangjiance.com`
- Node.js：`22.16.0`（见 `.node-version`）
- 包管理器：`pnpm 10.11.1`
- 构建命令：`pnpm run build`
- 输出目录：`dist`
- 根目录：仓库根目录

Cloudflare Pages 环境变量建议设置：

```text
NODE_VERSION=22.16.0
PNPM_VERSION=10.11.1
PUBLIC_BING_SITE_VERIFICATION=从 Bing Webmaster Tools 获取的验证值（可选）
```

`pnpm run build` 会在 Astro 构建完成后自动执行生产审计，检查必需文件、Canonical、robots、图片 alt 和站内链接。审计失败时 Cloudflare 构建会中止，避免发布存在明显断链的版本。

自定义域名绑定后，应在 Cloudflare Redirect Rules 中把 `www.jichangjiance.com` 永久重定向到 `https://jichangjiance.com`，避免搜索引擎同时收录两个域名。`public/_headers` 会阻止临时的 `pages.dev` 域名参与索引。

## Bing 收录步骤

1. 确认 `https://jichangjiance.com/`、`/robots.txt` 和 `/sitemap-index.xml` 均可公开访问。
2. 在 Bing Webmaster Tools 添加 `jichangjiance.com`。
3. 使用 Cloudflare DNS 验证，或把 Bing 提供的验证值配置为 `PUBLIC_BING_SITE_VERIFICATION` 后重新部署。
4. 提交 Sitemap：`https://jichangjiance.com/sitemap-index.xml`。
5. 优先请求抓取首页、机场推荐、机场排行榜、品牌库、优惠码和跑路预警页面。
6. 发布重要新文章后，在 Bing Webmaster Tools 中提交 URL；后续可再接入 IndexNow 做自动通知。

## 品牌库与 FAQ 维护

- 品牌资料、推荐定位、关键词、跳转链接与独立评测正文：`src/data/brands.ts`
- 全站长尾问题与回答：`src/data/faq.ts`
- 搜索意图与关键词集群：`src/data/keywordClusters.ts`
- 品牌 Logo：`public/images/brands/logos/`
- 品牌评测封面：`public/images/brands/covers/`
- 封面重新生成：`python scripts/generate-brand-covers.py`

新增品牌时，应同时补充独立 SEO 标题和描述、关键词、适用人群、风险提示、FAQ、Logo、封面与链接核验状态。未核验的跳转链接不要直接展示为官方入口。
