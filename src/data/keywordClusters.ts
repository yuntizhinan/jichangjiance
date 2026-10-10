export interface KeywordCluster {
  slug: string;
  title: string;
  intent: string;
  description: string;
  keywords: string[];
  href: string;
  brandSlugs: string[];
}

export const keywordClusters: KeywordCluster[] = [
  {
    slug: 'ranking',
    title: '2026 机场推荐排行榜与横向对比',
    intent: '综合选购',
    description: '比较价格、线路情况、协议、客户端、晚高峰测试方法和购买风险，不用单一测速给机场服务商排绝对名次。',
    keywords: ['2026机场推荐', '机场排行榜', '机场对比', '稳定机场推荐', '机场评测网站'],
    href: '/articles/airport-ranking-comparison-2026/',
    brandSlugs: ['jilianyun', 'sujie', 'edgenova', 'guangnianti', 'kuaili']
  },
  {
    slug: 'budget',
    title: '便宜机场、月付机场与按量方案',
    intent: '预算优先',
    description: '先比较折后月费、实际可用流量、倍率、设备数与续费价格，再判断低价套餐是否真正划算。',
    keywords: ['便宜机场推荐', '月付机场', '10元机场', '按量付费机场', '不限时流量机场'],
    href: '/articles/cheap-monthly-airports-2026/',
    brandSlugs: ['guangnianti', 'kexinyun', 'sujie']
  },
  {
    slug: 'dedicated-lines',
    title: 'IEPL/IPLC 专线与晚高峰稳定性',
    intent: '稳定优先',
    description: '用入口类型、倍率、连续晚高峰记录、故障恢复和实际业务测试判断专线价值。',
    keywords: ['IEPL专线机场', 'IPLC机场', '晚高峰稳定机场', '低延迟机场', 'BGP中转机场'],
    href: '/articles/iepl-iplc-transit-nodes-explained/',
    brandSlugs: ['jilianyun', 'sujie', 'yuntu']
  },
  {
    slug: 'ai',
    title: 'ChatGPT、Claude 与 AI 工具场景',
    intent: 'AI 可用性',
    description: '重点核验出口地区、IP 信誉、账号风控、多设备一致性和常用时段，而不是只看是否能够打开网页。',
    keywords: ['ChatGPT机场推荐', 'Claude机场', 'AI原生IP节点', 'ChatGPT人机验证', 'Gemini机场'],
    href: '/articles/chatgpt-claude-airport-guide-2026/',
    brandSlugs: ['jilianyun', 'edgenova', 'kuaili']
  },
  {
    slug: 'streaming',
    title: 'Netflix、YouTube 与流媒体解锁',
    intent: '影音场景',
    description: '同时测试内容库、首开速度、拖动、持续码率和晚高峰表现，避免把单次测速当作流媒体结论。',
    keywords: ['Netflix机场', 'YouTube 4K机场', 'Disney+机场', 'TikTok加速器', '流媒体解锁机场'],
    href: '/articles/netflix-youtube-airport-guide-2026/',
    brandSlugs: ['shunyun', 'sujie', 'jilianyun']
  },
  {
    slug: 'clients',
    title: 'Clash、小火箭与 Sing-box 客户端',
    intent: '安装配置',
    description: '按系统、订阅格式、协议支持、TUN 与规则能力选择客户端，并优先使用官方或可信下载来源。',
    keywords: ['Clash Verge Rev机场', 'Shadowrocket机场', 'Sing-box订阅', 'v2rayNG节点', 'Mac机场客户端'],
    href: '/articles/clash-singbox-client-setup/',
    brandSlugs: ['jilianyun', 'guangnianti', 'sujie']
  },
  {
    slug: 'coupons',
    title: '机场优惠码、折后月费与活动核验',
    intent: '优惠购买',
    description: '记录更新时间、适用套餐、有效期与最终结算价，不收录来源和期限无法核验的代码。',
    keywords: ['机场优惠码', '机场折扣码', '机场促销活动', '机场折后月费', '机场年付优惠'],
    href: '/articles/airport-coupon-guide-2026/',
    brandSlugs: ['jilianyun', 'sujie', 'guangnianti', 'kexinyun']
  },
  {
    slug: 'risk',
    title: '机场跑路预警与官网入口核验',
    intent: '风险排查',
    description: '组合观察域名变化、公告活跃度、节点故障、客服响应和异常长期促销，避免仅凭一个信号下结论。',
    keywords: ['机场跑路黑名单2026', '机场官网打不开', '机场备用域名', '机场跑路前兆', '机场入口核验'],
    href: '/articles/airport-runaway-warning-guide-2026/',
    brandSlugs: ['kexinyun']
  }
];

export const highIntentKeywords = Array.from(new Set(keywordClusters.flatMap((cluster) => cluster.keywords)));
