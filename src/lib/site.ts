export const site = {
  name: '机场监测',
  url: 'https://jichangjiance.com',
  description: '2026 机场推荐排行榜、机场独立评测与机场导航知识库，覆盖价格对比、月付与优惠码、IEPL/IPLC 专线、晚高峰、AI、流媒体、客户端教程和跑路预警。',
  author: '机场监测编辑部',
  language: 'zh-CN',
  email: 'psytong@outlook.com',
  logo: '/favicon-jc-warm.svg',
  defaultImage: '/og-default.png',
  keywords: [
    '机场代理',
    '机场导航',
    '机场推荐',
    '机场推荐2026',
    '2026机场推荐排行榜',
    '机场排行榜',
    '机场对比',
    '机场独立评测',
    '性价比机场',
    '便宜机场推荐',
    '月付机场',
    '按量付费机场',
    '机场优惠码',
    '机场折扣码',
    '机场晚高峰',
    '2026最稳定高速的机场',
    '机场vpn',
    '梯子工具',
    '代理客户端推荐',
    'Clash Mi教程',
    'v2rayNG教程',
    'IP路由追踪',
    '最佳梯子推荐',
    '2026翻墙梯子推荐',
    'IEPL专线机场',
    '机场跑路黑名单2026',
    '机场跑路名单2026',
    '机场跑路预警',
    '机场状态查询',
    '机场跑路前兆',
    'ChatGPT机场推荐',
    'AI资讯分享',
    '每日AI新闻',
    'AI应用库',
    'AI Agent工作流',
    '大模型内容风控',
    'AI人才趋势',
    'Netflix机场',
    'Clash Verge Rev机场',
    'Shadowrocket机场',
    '极连云',
    '速界',
    '边缘节点',
    '鲲鹏加速',
    '榴莲云',
    '大佬云',
    '闪电鼠',
    '环球梯',
    '神行加速',
    '云界线'
  ]
};

export const categories = [
  { name: '入门指南', slug: 'beginner', description: '从设备、协议、订阅到客户端，先把机场代理的基础概念弄明白。' },
  { name: '机场评测', slug: 'reviews', description: '围绕稳定性、速度、线路、价格和售后整理可复用的评估方法。' },
  { name: '工具教程', slug: 'tools', description: '常见客户端、规则模式和多设备配置的清晰操作指南。' },
  { name: '网络知识', slug: 'network', description: '用不绕口的方式理解延迟、带宽、协议与日常网络体验。' }
];

export const categoryByName = Object.fromEntries(categories.map((item) => [item.name, item]));

export function formatDate(date: Date) {
  return new Intl.DateTimeFormat('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' }).format(date);
}

export function absoluteUrl(path = '/') {
  return new URL(path, site.url).href;
}
