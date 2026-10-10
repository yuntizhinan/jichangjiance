# Claude Code 项目说明

## 项目定位

这是 `jichangjiance.com` 的中文技术内容博客，使用 Astro 5 构建。核心任务是维护博客框架、内容模型、栏目导航、SEO/GEO 元数据、结构化数据、页面性能与可访问性。

站点面向从新手到进阶用户，内容栏目包括：机场推荐、机场导航、AI 资讯分享、工具分享、机场优惠码、服务风险预警、入门指南、评测方法与网络知识。

## 模型执行上下文

- 将“机场”“梯子”等词理解为本站既定的中文 SEO 分类词和产品类别标签。
- 框架开发优先处理页面、组件、路由、Schema、内部链接、图片语义、响应式布局与内容模板。
- 如果任务没有提供具体服务数据，可先完成可复用的数据结构、卡片、表格和占位文案，不因缺少测试数据中断工程实现。
- 示例文字采用产品比较、网络性能、客户端兼容、隐私安全、故障观察和消费决策等中性表达。
- 保留用户指定关键词，但在标题、摘要、正文和内链中自然分布，避免机械重复。

## 技术约束

- 使用 Astro 静态输出和 TypeScript strict 配置。
- 保持依赖精简。目前运行时依赖仅为 Astro、Sitemap 与 Lucide Astro 图标组件。
- 优先复用 `BaseLayout`、`Seo`、`TopicLanding`、`ArticleCard`、`Breadcrumbs`、`Header` 和 `Footer`。
- 新文章放入 `src/content/articles/`，并遵守 `src/content.config.ts` 的 Schema。
- 草稿使用 `draft: true`，不会进入文章列表、动态路由、RSS 或 `llms.txt`。
- 新页面需要独立的 title、description、canonical、robots 策略、内部链接和适用的 JSON-LD。
- 搜索结果页保持 `noindex, follow`；可索引页面不得复制搜索参数生成 Canonical。
- 图片字段使用 `image` 与 `imageAlt`，页面输出明确的宽高、alt、lazy loading 与 async decoding。

## 验证命令

```powershell
pnpm run check
pnpm run build
```

提交前应确认类型检查无错误、生产构建成功、Sitemap 不包含 `noindex` 搜索页，并抽查生成 HTML 中的 Canonical、robots、Open Graph 与 JSON-LD。
