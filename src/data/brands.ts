export interface BrandFaq {
  question: string;
  answer: string;
}

export interface BrandSection {
  title: string;
  paragraphs: string[];
}

export interface BrandPlan {
  name: string;
  price: string;
  traffic: string;
  note: string;
}

export interface BrandProfile {
  slug: string;
  name: string;
  englishName: string;
  logo: string;
  cover: string;
  accent: string;
  recommendation: string;
  status: '重点关注' | '场景推荐' | '性价比观察' | '资料待核验';
  tagline: string;
  description: string;
  verdict: string;
  lineArchitecture: string;
  protocols: string[];
  price: string;
  plans: BrandPlan[];
  audience: string[];
  useCases: string[];
  strengths: string[];
  considerations: string[];
  keywords: string[];
  referralUrl?: string;
  couponCode?: string;
  candidateUrl?: string;
  linkVerified: boolean;
  sourceNote: string;
  publishedAt: string;
  updatedAt: string;
  featured: boolean;
  sections: BrandSection[];
  faq: BrandFaq[];
}

const commonSource = '基于用户提供的机场资料、服务商公开页面与机场监测编辑整理；套餐、节点和入口可能变化，以服务商结算页与公告为准。';

export const brands: BrandProfile[] = [
  {
    slug: 'jilianyun',
    name: '极连云',
    englishName: 'Jilian Cloud',
    logo: '/images/brands/logos/jilianyun-logo.webp',
    cover: '/images/brands/covers/jilianyun-cover-warm.webp',
    accent: '#21c7ff',
    recommendation: '全平台易用型',
    status: '重点关注',
    tagline: '定制客户端与 AI、影音场景兼顾',
    description: '极连云怎么样？本文从 IEPL 线路、全平台客户端、ChatGPT/Claude 与流媒体场景、价格和购买风险等方面整理 2026 年极连云机场评测。',
    verdict: '更适合希望减少配置步骤，同时兼顾 AI 工具、流媒体和多设备使用的新手与办公用户。',
    lineArchitecture: '服务商资料标注 IEPL 专线与多地区入口，具体节点等级和倍率应在购买页逐项确认。',
    protocols: ['Shadowsocks', 'Trojan', 'Hysteria2'],
    price: '¥15.50/月起；年付 ¥96 起',
    plans: [
      { name: '轻量体验（年付）', price: '¥96/年', traffic: '60GB/月', note: '适合轻度使用，年付折合约 ¥8/月' },
      { name: '基础套餐', price: '¥15.50/月', traffic: '100GB/月', note: '服务商页面标注 IPLC 专线与原生 IP' },
      { name: '进阶套餐', price: '¥30.50/月', traffic: '200GB/月', note: '面向 AI 工具与日常影音使用' },
      { name: '旗舰套餐', price: '¥65.50/月', traffic: '500GB/月', note: '适合较高流量与低延迟需求' },
      { name: '尊享套餐', price: '¥120.50/月', traffic: '1000GB/月', note: '高流量旗舰档，购买前核对带宽规则' },
      { name: '不限时套餐', price: '¥399', traffic: '600GB 总量', note: '一次性流量包，不按月重置' }
    ],
    audience: ['首次使用机场的新手', 'AI 工具高频用户', '商务与远程办公用户', '多设备家庭'],
    useCases: ['ChatGPT / Claude', 'Netflix / Disney+', '跨平台客户端', '日常办公与视频'],
    strengths: ['提供 Windows、macOS、iOS、Android 使用入口', '配置门槛相对低，适合一键客户端偏好者', '资料定位覆盖 AI 与流媒体场景', '月付起步价格处于主流区间'],
    considerations: ['专线、原生 IP 和流媒体可用性会随节点变化', '公开资料提示部分地区可能存在可用性限制', '购买前应确认退款、设备数和高倍率节点规则', '建议先月付验证晚高峰与常用设备'],
    keywords: ['极连云怎么样', '极连云机场评测', '极连云官网入口', '2026机场推荐', 'IEPL专线机场', 'ChatGPT机场推荐', 'Netflix 4K机场', '全平台机场客户端'],
    referralUrl: 'https://19629.jlyvipaff.com/#/?code=zMHMPYDj',
    couponCode: 'JLY888',
    linkVerified: true,
    sourceNote: commonSource,
    publishedAt: '2026-10-06',
    updatedAt: '2026-10-07',
    featured: true,
    sections: [
      {
        title: '极连云的核心定位是什么？',
        paragraphs: [
          '从独立评测角度看，极连云并非以最低价格作为主要卖点，其公开资料更强调“少配置、跨平台、常见场景覆盖”。对于不想研究订阅转换、内核选择和复杂规则的新手，定制客户端与清晰的设备入口会比协议数量更有实际价值。',
          '如果你同时需要 ChatGPT、Netflix 和多平台客户端，极连云可以作为综合型选项一起比较；建议先从月付开始，按自己的设备和常用时段确认体验。'
        ]
      },
      {
        title: '线路、协议与晚高峰应该怎么看？',
        paragraphs: [
          '服务商资料标注 IEPL 专线，并支持 Shadowsocks、Trojan 与 Hysteria2。对普通用户而言，协议名称不应成为唯一判断标准，更重要的是所在运营商入口、晚高峰丢包、节点倍率和故障切换速度。',
          '首次使用时建议记录工作日与周末晚间的实际体验，并分别测试 AI 对话、网页加载和视频拖动。单次测速很高，并不能代替连续几天的稳定性观察。'
        ]
      },
      {
        title: '谁更适合选择极连云？',
        paragraphs: [
          '如果你的主要设备横跨 Windows、macOS、iPhone 和 Android，并且希望快速完成配置，极连云的产品方向较匹配。AI 工具、远程协作和影音属于其资料中重点强调的场景。',
          '如果你只需要极低频备用，或者更重视按量不限时套餐，则应同时比较可信云、光年梯等低门槛方案，不必只看综合型套餐。'
        ]
      }
    ],
    faq: [
      { question: '极连云适合完全不懂配置的新手吗？', answer: '从服务商公开资料看，其重点之一是提供多平台定制客户端，适合希望减少手动配置的用户。购买前仍应确认自己的系统版本和客户端支持范围。' },
      { question: '极连云能稳定使用 ChatGPT 和 Claude 吗？', answer: '服务商公开资料将 AI 工具列为主要场景，但可用性与具体出口 IP、地区和平台风控有关。建议先用月付套餐测试常用账号和时段。' },
      { question: '极连云应该月付还是年付？', answer: '首次使用更适合从月付开始，连续观察晚高峰、设备兼容与售后响应后，再决定是否延长周期。' }
    ]
  },
  {
    slug: 'sujie',
    name: '速界',
    englishName: 'Sujie Cloud',
    logo: '/images/brands/logos/sujie-logo.webp',
    cover: '/images/brands/covers/sujie-cover-warm.webp',
    accent: '#2c7df7',
    recommendation: '大流量性价比型',
    status: '重点关注',
    tagline: 'BGP 中转与多设备大流量使用',
    description: '速界机场怎么样？本文整理速界 BGP 中转、Shadowsocks/VLESS、晚高峰表现、大流量套餐、多设备连接与 2026 年高性价比机场选购建议。',
    verdict: '更适合视频使用量较大、设备较多，并希望在价格与线路质量之间取得平衡的用户。',
    lineArchitecture: 'BGP 多入口中转与内网转发，重点观察本地运营商入口和高峰期拥堵。',
    protocols: ['Shadowsocks', 'VLESS-REALITY'],
    price: '¥25/月起；年付 ¥90 起',
    plans: [
      { name: '年付体验包', price: '¥90/年', traffic: '50GB/月', note: '折合约 ¥7.5/月，适合轻量体验' },
      { name: '极速版', price: '¥25/月', traffic: '120GB/月', note: '适合日常浏览、AI 与中等流量影音' },
      { name: '超速版', price: '¥50/月', traffic: '250GB/月', note: '适合多设备与较高流量使用' }
    ],
    audience: ['视频重度用户', '留学生', '多设备家庭', '需要大流量的用户'],
    useCases: ['流媒体观看', '多设备并发', '大流量下载', '日常学习与办公'],
    strengths: ['套餐价格与流量配置偏性价比路线', 'BGP 多入口有利于兼容不同本地运营商', '支持常用协议与多设备场景', '适合作为大流量主力或第二线路'],
    considerations: ['公网或中转入口仍可能受高峰拥堵影响', '不同套餐的倍率与设备数需要单独核对', '若与其他机场服务做双备份，应确认上游线路是否真正独立', '流媒体地区库会随出口 IP 调整'],
    keywords: ['速界怎么样', '速界机场评测', '速界官网入口', '便宜机场推荐', '高性价比机场', '大流量机场', 'BGP中转机场', 'Netflix机场推荐'],
    referralUrl: 'https://justland.szjtfp.xyz/#/?code=yyTdTqTA',
    couponCode: 'sujie888',
    linkVerified: true,
    sourceNote: commonSource,
    publishedAt: '2026-10-06',
    updatedAt: '2026-10-07',
    featured: true,
    sections: [
      {
        title: '速界为什么更偏向性价比与大流量？',
        paragraphs: [
          '速界的核心吸引力来自价格、流量与中转线路之间的平衡。对每天观看视频、同步文件或多设备并发的用户来说，套餐额度、倍率和晚高峰实际吞吐往往比“节点数量”更重要。',
          '选择时可以先把套餐价格除以折算后的真实流量，得到每 GB 成本，再结合常用地区节点的倍率比较。这样比直接看“500GB”“1000GB”等标称数字更有参考价值。'
        ]
      },
      {
        title: 'BGP 中转适合哪些网络环境？',
        paragraphs: [
          'BGP 多入口的价值在于让电信、联通、移动等不同本地网络更容易找到相对合适的入口，但实际体验仍取决于所在城市、运营商和上游容量。',
          '建议分别使用家庭宽带与手机热点测试。如果两个网络表现差异明显，应优先选择与你主要网络更匹配的入口，而不是频繁切换协议。'
        ]
      },
      {
        title: '速界适合当唯一主力吗？',
        paragraphs: [
          '对于视频、大流量和常规办公，速界可以作为主力候选。若你的工作对连续在线要求很高，仍建议准备一个上游不同的备用服务，以免单一入口维护影响全部设备。',
          '首次购买建议月付，重点测试晚间 20:00–23:00、流媒体拖动、订阅更新和客服响应，再考虑更长周期。'
        ]
      }
    ],
    faq: [
      { question: '速界适合看 Netflix 和 Disney+ 吗？', answer: '服务商公开资料将主流流媒体列为使用场景，但不同节点的地区库和 IP 状态会变化，建议先确认目标地区并进行短周期测试。' },
      { question: '速界的大流量套餐一定更便宜吗？', answer: '需要把节点倍率计算进去。标称流量除以常用节点倍率，才是更接近实际可用的额度。' },
      { question: '速界和边缘节点可以作为彼此备用吗？', answer: '可以作为候选组合，但购买前应确认两者当前上游线路、入口和运维是否独立，否则同时故障的风险可能高于预期。' }
    ]
  },
  {
    slug: 'edgenova',
    name: '边缘节点',
    englishName: 'EdgeNova',
    logo: '/images/brands/logos/edgenova-logo.webp',
    cover: '/images/brands/covers/edgenova-cover-warm.webp',
    accent: '#7c4dff',
    recommendation: '弱网低延迟型',
    status: '场景推荐',
    tagline: 'Hysteria2 与边缘节点优化',
    description: '边缘节点 EdgeNova 怎么样？本文从 Hysteria2/VLESS、弱网优化、低延迟节点、游戏与跨境工作场景、价格和备用线路策略进行 2026 年评测。',
    verdict: '更适合经常使用移动网络、弱网环境，或对交互延迟和跨地区节点有明确需求的用户。',
    lineArchitecture: '服务商资料强调全球边缘节点与弱网优化，公开资料显示包含多地区节点与不同倍率。',
    protocols: ['Hysteria2', 'VLESS'],
    price: '¥25/月起；年付 ¥108 起',
    plans: [
      { name: '限时年付', price: '¥108/年', traffic: '45GB/月', note: '折合约 ¥9/月，适合轻量使用' },
      { name: '极界·标准套餐', price: '¥25/月', traffic: '120GB/月', note: '支持多周期订阅，适合日常使用' },
      { name: '极界·进阶套餐', price: '¥50/月', traffic: '250GB/月', note: '适合较高流量与大文件传输' }
    ],
    audience: ['移动网络用户', '游戏玩家', '跨境电商从业者', '科研与远程协作用户'],
    useCases: ['弱网连接', '低延迟交互', '外服游戏', 'AI 与跨境工作'],
    strengths: ['Hysteria2 更适合高丢包或移动网络环境', '多地区节点便于按业务区域选择', '月付起步门槛处于常见区间', '游戏、AI 和跨境业务场景覆盖明确'],
    considerations: ['UDP 协议体验受本地网络策略影响较大', '部分特殊地区或节点可能采用更高流量倍率', '低延迟需要结合实际地理位置测试', '不要只依据客户端延迟数字判断游戏体验'],
    keywords: ['边缘节点怎么样', 'EdgeNova机场评测', '边缘节点官网入口', 'Hysteria2机场', '低延迟节点', '游戏专线机场', '弱网机场推荐', '跨境电商机场'],
    referralUrl: 'https://zoio.edgenovaaff.cc/#/?code=Y65i2kCU',
    couponCode: 'xk808',
    linkVerified: true,
    sourceNote: commonSource,
    publishedAt: '2026-10-06',
    updatedAt: '2026-10-07',
    featured: true,
    sections: [
      {
        title: '边缘节点的差异化卖点是什么？',
        paragraphs: [
          '边缘节点更强调“弱网下保持可用”和“交互延迟”，而不是单纯追求测速峰值。Hysteria2 基于 QUIC/UDP，在部分高丢包网络中可能比传统 TCP 连接更流畅，但并不意味着所有网络都一定更快。',
          '如果你主要使用手机热点、宿舍网络或跨地区移动办公，这类协议与边缘入口更值得测试；如果本地网络对 UDP 不友好，则需要保留 VLESS 或其他兼容入口。'
        ]
      },
      {
        title: '游戏与 AI 场景应该测试什么？',
        paragraphs: [
          '游戏场景应关注抖动、丢包和连续稳定性，而不是只看平均延迟。建议测试实际游戏服务器，连续观察至少 20 分钟。',
          'AI 工具则更看重出口 IP 的可用性、会话稳定和上传响应。能打开网页不等于长期不会触发验证，因此应使用自己的常用账号与工作流测试。'
        ]
      },
      {
        title: '购买边缘节点前的检查清单',
        paragraphs: [
          '确认套餐中常用地区的节点倍率、设备数、订阅格式以及客户端是否支持 Hysteria2。iOS 用户尤其需要确认现有客户端版本是否兼容。',
          '如果计划把它作为备用线路，还要确认主力服务与边缘节点是否共享相同入口或运维体系，避免所谓双备份实际只有一个故障域。'
        ]
      }
    ],
    faq: [
      { question: '边缘节点一定比普通机场延迟低吗？', answer: '不一定。延迟由地理距离、本地运营商、入口路由和目标服务器共同决定，边缘节点的优势需要在你的网络上实际验证。' },
      { question: 'Hysteria2 在公司或校园网能用吗？', answer: '取决于网络是否允许稳定的 UDP/QUIC 流量。如果 UDP 受限，应切换到服务商提供的 VLESS 等兼容节点。' },
      { question: '边缘节点适合下载大文件吗？', answer: '可以作为候选，但要先核对套餐额度与节点倍率。弱网吞吐表现好并不等于单位流量成本最低。' }
    ]
  },
  {
    slug: 'guangnianti',
    name: '光年梯',
    englishName: 'Lightyear Ladder',
    logo: '/images/brands/logos/guangnianti-logo.webp',
    cover: '/images/brands/covers/guangnianti-cover-warm.webp',
    accent: '#f46fc7',
    recommendation: '新手低门槛型',
    status: '性价比观察',
    tagline: '低价月付与定制客户端',
    description: '光年梯机场怎么样？本文整理光年梯月付价格、定制客户端、线路结构、流媒体体验、适合人群与购买前注意事项。',
    verdict: '适合预算较低、希望先用小额月付体验定制客户端的新手，但对客户端自由度有要求的用户应先确认限制。',
    lineArchitecture: '公开资料显示其使用专线中转与定制客户端模式，具体入口与协议由客户端管理。',
    protocols: ['定制客户端托管', '具体协议以客户端为准'],
    price: '¥18/月起；年付 ¥90 起',
    plans: [
      { name: '入门版（年付）', price: '¥90/年', traffic: '50GB/月', note: '折合约 ¥7.5/月，适合极轻量使用' },
      { name: '入门版', price: '¥18/月', traffic: '110GB/月', note: '轻度入门档，购买前确认客户端支持' },
      { name: '晋级版', price: '¥34/月', traffic: '220GB/月', note: '适合多设备日常使用' },
      { name: '专业版', price: '¥68/月', traffic: '450GB/月', note: '适合较高流量主力使用' },
      { name: '至尊版', price: '¥130/月', traffic: '900GB/月', note: '面向重度流量用户' },
      { name: '独享私人专线', price: '¥680/月', traffic: '500GB/月', note: '独立带宽与独立公网 IP 以结算页说明为准' }
    ],
    audience: ['预算有限的新手', '学生用户', '希望一键连接的用户', '轻量日常使用者'],
    useCases: ['网页与社交', '基础流媒体', '入门体验', '多平台一键连接'],
    strengths: ['月付门槛较低', '定制客户端减少订阅导入步骤', '覆盖常见桌面与移动平台', '适合先建立基础使用习惯'],
    considerations: ['公开资料显示可能必须使用服务商定制客户端', '自定义规则、第三方客户端和订阅迁移自由度可能较低', '低价套餐应关注流量、设备数和限速', '建议确认客户端更新与隐私说明'],
    keywords: ['光年梯怎么样', '光年梯机场评测', '光年梯官网入口', '便宜机场推荐', '月付机场', '新手机场推荐', 'Windows加速器', '安卓客户端'],
    referralUrl: 'https://19629.gntaff.com/#/?code=AixFrykO',
    couponCode: 'GNT80',
    linkVerified: true,
    sourceNote: commonSource,
    publishedAt: '2026-10-06',
    updatedAt: '2026-10-07',
    featured: true,
    sections: [
      {
        title: '光年梯适合怎样的新手？',
        paragraphs: [
          '光年梯的主要吸引力是较低月付门槛和定制客户端。对于第一次接触订阅、规则模式和节点选择的用户，一键登录与连接可以减少初期学习成本。',
          '但定制客户端也意味着生态更封闭。准备长期使用第三方客户端、软路由或复杂分流的用户，应先确认是否能获得标准订阅格式。'
        ]
      },
      {
        title: '低价套餐应该如何比较？',
        paragraphs: [
          '低价不等于真实成本低。需要同时查看月流量、节点倍率、设备限制、限速和续费价格。若常用节点为高倍率，标称流量需要折算后再比较。',
          '对轻度用户而言，稳定的小流量月付可能比大流量年付更合适；对视频用户而言，则应重点测试晚高峰吞吐。'
        ]
      },
      {
        title: '购买前最重要的三项确认',
        paragraphs: [
          '第一，确认自己的系统版本能否安装服务商定制客户端；第二，确认是否支持常用目标地区和流媒体；第三，确认标准订阅、退款和设备更换规则。',
          '如果只是入门体验，月付即可。连续使用一段时间后，再判断是否需要迁移到自由度更高的 Clash、Sing-box 或 Shadowrocket 生态。'
        ]
      }
    ],
    faq: [
      { question: '光年梯可以导入 Clash Verge Rev 吗？', answer: '公开资料显示其更偏向定制客户端，标准订阅支持情况应以当前购买页和客服说明为准。' },
      { question: '光年梯适合学生用户吗？', answer: '低月付门槛适合预算有限的轻量用户，但应结合每月流量、设备数和晚高峰表现判断。' },
      { question: '定制客户端安全吗？', answer: '应从官方入口下载，并检查更新来源、权限、数字签名和隐私说明。不要从不明网盘或第三方群文件安装。' }
    ]
  },
  {
    slug: 'kuaili',
    name: '快狸',
    englishName: 'Kuali Cloud',
    logo: '/images/brands/logos/kuaili-logo.webp',
    cover: '/images/brands/covers/kuaili-cover-warm.webp',
    accent: '#53b7ff',
    recommendation: '跨境协作型',
    status: '场景推荐',
    tagline: '多地区节点与外贸办公场景',
    description: '快狸 Kuali Cloud 怎么样？本文从专线中转、多地区节点、跨境电商与外贸办公、流媒体支持、价格和购买注意事项进行评测。',
    verdict: '更适合需要多地区业务节点、Google Workspace、WhatsApp、Shopify 等跨境协作场景的用户。',
    lineArchitecture: '服务商资料标注 IPLC/专线中转，公开资料显示覆盖多地区并提供 Shadowsocks 节点。',
    protocols: ['Shadowsocks', 'Trojan（以当前套餐为准）'],
    price: '¥15/月起；年付 ¥120 起',
    plans: [
      { name: '森狸年付小套餐', price: '¥120/年', traffic: '30GB/月', note: '折合约 ¥10/月，适合基础备用' },
      { name: '月狸月付小套餐', price: '¥15/月', traffic: '50GB/月', note: '轻量月付档，流量按月重置' },
      { name: '小狸基础版', price: '¥22/月', traffic: '100GB/月', note: '适合日常办公与中轻度使用' }
    ],
    audience: ['跨境电商卖家', '外贸团队', 'SaaS 远程办公人员', '多地区业务用户'],
    useCases: ['Google Workspace', 'WhatsApp', 'Shopify', '多地区流媒体'],
    strengths: ['节点地区覆盖较丰富', '跨境办公与电商场景定位明确', '月付起步价格适中', '公开资料显示包含部分冷门地区节点'],
    considerations: ['SLA、住宅 IP 与原生 IP 需要具体套餐证据支持', '电商账号风控不只由网络 IP 决定', '高倍率冷门节点会改变真实流量成本', '重要业务不应只依赖一个服务商'],
    keywords: ['快狸怎么样', '快狸机场评测', 'Kuali Cloud官网入口', '跨境电商机场', '外贸专线机场', 'IPLC专线机场', 'WhatsApp网络', 'Google Workspace机场'],
    referralUrl: 'https://196295.kuailiaff.com/#/?code=tmUe2z1n',
    couponCode: 'kl888',
    linkVerified: true,
    sourceNote: commonSource,
    publishedAt: '2026-10-06',
    updatedAt: '2026-10-07',
    featured: true,
    sections: [
      {
        title: '快狸为什么适合跨境协作场景？',
        paragraphs: [
          '跨境电商和外贸团队通常不只需要“能连接”，还需要目标地区、会话稳定、上传速度和多设备协作。快狸的资料重点覆盖多地区节点与办公应用，因此更适合作为业务型候选。',
          '选择具体节点时，应让出口地区与业务市场保持一致，并避免频繁跨国家切换。账号风控还与设备指纹、登录行为和平台规则有关，网络节点只是其中一个因素。'
        ]
      },
      {
        title: '专线、原生 IP 与 SLA 应如何核验？',
        paragraphs: [
          '“专线”“原生 IP”“99.9% SLA”等描述需要结合套餐页、节点标签和服务协议确认。普通共享节点和专属商务线路的保障范围可能完全不同。',
          '如果网络用于团队生产，应询问故障响应、入口冗余、设备限制和退款政策，并为关键业务准备独立备用线路。'
        ]
      },
      {
        title: '快狸的真实成本怎么计算？',
        paragraphs: [
          '先确定团队每月总流量，再按常用节点倍率折算。冷门地区或特殊 IP 节点如果采用高倍率，应单独计算，而不是用套餐平均流量估算。',
          '对于多人团队，还要确认同时在线设备数、共享账号规则和是否允许路由器接入，避免购买后才发现连接限制。'
        ]
      }
    ],
    faq: [
      { question: '快狸适合跨境电商团队吗？', answer: '从其公开产品方向与节点覆盖看，较符合跨境协作需求，但团队使用前应确认设备数、共享规则、目标地区出口和故障保障。' },
      { question: '使用快狸能避免电商账号风控吗？', answer: '不能保证。网络 IP 只是风控因素之一，设备、登录地点、操作行为和平台政策同样重要。' },
      { question: '快狸的冷门地区节点值得买吗？', answer: '如果业务确实面向对应地区，这类节点有价值；购买前应检查倍率、延迟、可用性和是否为真实目标地区出口。' }
    ]
  },
  {
    slug: 'shunyun',
    name: '瞬云',
    englishName: 'Shunyun Cloud',
    logo: '/images/brands/logos/shunyun-logo.webp',
    cover: '/images/brands/covers/shunyun-cover-warm.webp',
    accent: '#ffb9d6',
    recommendation: '影音体验型',
    status: '场景推荐',
    tagline: '视频场景与节点冗余定位',
    description: '瞬云机场怎么样？本文整理瞬云专网冗余、Hysteria2、晚高峰影音体验、TikTok/Netflix 场景、价格与短周期测试建议。',
    verdict: '更适合把 YouTube、Netflix、TikTok 等视频体验放在首位，并愿意先测试晚高峰的用户。',
    lineArchitecture: '服务商资料标注高速内网专线与专网冗余，公开可核验资料有限，建议将核心指标视为待复测。',
    protocols: ['Shadowsocks', 'Hysteria2'],
    price: '¥20/月起；年付 ¥99 起',
    plans: [
      { name: '限时年付小包', price: '¥99/年', traffic: '59GB/月', note: '折合约 ¥8.25/月，限时套餐可能下架' },
      { name: '行者', price: '¥20/月', traffic: '150GB/月', note: '适合日常中度使用' },
      { name: '纵横', price: '¥36/月', traffic: '300GB/月', note: '适合影音与多设备使用' },
      { name: '凌霄', price: '¥68/月', traffic: '600GB/月', note: '适合大流量与重度办公下载' }
    ],
    audience: ['影音爱好者', '视频创作者', 'TikTok 使用者', '需要备用节点的用户'],
    useCases: ['YouTube 高画质', 'Netflix', 'TikTok', '视频上传与直播'],
    strengths: ['公开资料更强调视频与高吞吐场景', '资料中强调节点监测与冗余切换', 'Hysteria2 可作为弱网备选协议', '适合建立独立影音节点组'],
    considerations: ['8K、无缓冲等体验高度依赖本地网络和片源', '公开资料有限，线路与价格需要购买页复核', 'TikTok 原生 IP 需按具体节点确认', '直播用户应重点测试上传而不是只测下载'],
    keywords: ['瞬云怎么样', '瞬云机场评测', '瞬云官网入口', 'Netflix机场', 'TikTok加速器', 'YouTube 4K机场', 'Hysteria2机场', '晚高峰稳定机场'],
    referralUrl: 'https://ccc.jichang.best/#/register?code=ClNa0zPm',
    linkVerified: true,
    sourceNote: commonSource,
    publishedAt: '2026-10-06',
    updatedAt: '2026-10-07',
    featured: true,
    sections: [
      {
        title: '瞬云的影音定位应如何理解？',
        paragraphs: [
          '瞬云的资料重点是高画质视频、TikTok 与节点冗余。对影音用户而言，真正需要测试的是晚高峰持续码率、视频拖动恢复速度、地区库和出口 IP，而不是某一次测速峰值。',
          '8K 视频需要很高且持续的带宽，但多数用户的实际需求集中在 1080p、4K 与直播上传。购买前应按自己的片源和设备验证。'
        ]
      },
      {
        title: 'TikTok 和直播场景关注哪些指标？',
        paragraphs: [
          'TikTok 运营通常需要地区一致性、稳定出口和良好上传质量。所谓原生 IP 应按节点逐项确认，并避免在同一账号上频繁切换地区。',
          '直播用户应进行 20–30 分钟连续上传测试，观察抖动和断流，而不是只看下载测速。'
        ]
      },
      {
        title: '资料较少时怎样降低购买风险？',
        paragraphs: [
          '优先选择月付，保存套餐说明和订单信息，并确认官方群、公告和工单是否正常更新。先完成自己的场景测试，再判断是否把瞬云作为长期主力。',
          '如果视频是刚需，应同时准备一个不同上游的备用服务，避免单一线路维护影响全部播放与上传任务。'
        ]
      }
    ],
    faq: [
      { question: '瞬云真的能稳定播放 8K 视频吗？', answer: '是否流畅取决于本地宽带、晚高峰容量、节点和片源。服务商宣传只能作为线索，建议使用自己的设备和常用时段测试。' },
      { question: '瞬云适合 TikTok 直播吗？', answer: '可作为候选，但应重点检查目标地区出口、上传稳定性、连续直播表现和账号地区一致性。' },
      { question: '瞬云公开资料不多，能买吗？', answer: '可以先用短周期小套餐观察，但不建议仅依据宣传直接购买长期套餐。' }
    ]
  },
  {
    slug: 'yuntu',
    name: '云图',
    englishName: 'Yuntu Airport',
    logo: '/images/brands/logos/yuntu-logo.png',
    cover: '/images/brands/covers/yuntu-cover-warm.webp',
    accent: '#2b9bd8',
    recommendation: '科研检索型',
    status: '场景推荐',
    tagline: '多路优化与知识工作场景',
    description: '云图机场怎么样？本文从 BGP 多路优化、科研检索、Google Scholar、知识工作、流媒体、价格和隐私注意事项整理云图机场评测。',
    verdict: '更适合科研检索、海外资料访问与日常知识工作，并希望在价格和多路入口之间平衡的用户。',
    lineArchitecture: '服务商资料标注 BGP 多路优化中转，具体运营商入口、节点倍率和冗余情况需要复核。',
    protocols: ['Shadowsocks', 'Trojan'],
    price: '¥20/月起；另有不限时流量包',
    plans: [
      { name: '岚图', price: '¥20/月', traffic: '150GB/月', note: '5 台设备，常规倍率以套餐页为准' },
      { name: '梦图', price: '¥49/月', traffic: '300GB/月', note: '5 台设备，适合中等流量使用' },
      { name: '星图', price: '¥99/月', traffic: '600GB/月', note: '5 台设备，适合高流量使用' },
      { name: '50G 不限时流量', price: '¥78/次', traffic: '50GB 总量', note: '一次性流量包，不按月重置' },
      { name: '100G 不限时流量', price: '¥119/次', traffic: '100GB 总量', note: '一次性流量包，不按月重置' }
    ],
    audience: ['研究生与高校用户', '知识工作者', '海外资料检索用户', '日常办公用户'],
    useCases: ['Google Scholar', 'GitHub', '学术数据库', '流媒体与日常浏览'],
    strengths: ['科研和知识工作定位清晰', 'BGP 多路入口有利于不同运营商适配', '价格处于常见月付区间', '适合作为学习与资料检索主力候选'],
    considerations: ['“隐私安全度高”需要隐私政策与日志说明支撑', '学术资源是否可用还取决于机构账号与数据库授权', '不同地区节点质量可能存在差异', '建议测试大文件下载和 Git 操作稳定性'],
    keywords: ['云图机场怎么样', '云图机场评测', '云图机场官网入口', '科研机场推荐', 'Google Scholar加速', 'Github加速', 'BGP中转机场', '学生机场推荐'],
    referralUrl: 'https://vip.ytjcok.org/#/register?code=nDsDjrfI',
    couponCode: 'yt88',
    linkVerified: true,
    sourceNote: commonSource,
    publishedAt: '2026-10-06',
    updatedAt: '2026-10-07',
    featured: true,
    sections: [
      {
        title: '云图为什么适合科研和知识工作？',
        paragraphs: [
          '科研场景通常需要稳定访问搜索、代码托管、论文页面和远程协作，而不是极端峰值带宽。从公开资料与线路说明看，云图的多路中转更贴近这种持续、分散的日常使用。',
          '对于 GitHub、Google Scholar 和海外文档，DNS、连接稳定和小文件请求延迟往往比单线程测速更重要。'
        ]
      },
      {
        title: '学术用户应该怎样测试？',
        paragraphs: [
          '建议测试常用数据库登录、PDF 下载、Git clone/pull、视频会议和云盘同步。若需要学校机构授权，还应确认访问方式是否符合机构政策。',
          '不同节点可按“检索”“下载”“会议”建立分组，避免一个节点承担所有任务。'
        ]
      },
      {
        title: '隐私与日志信息如何判断？',
        paragraphs: [
          '服务商宣传中的“隐私安全”需要结合隐私政策、日志保留说明、客服沟通和客户端权限判断。不要把代理连接等同于完全匿名。',
          '重要账号应使用独立强密码和双因素验证，不在未知页面输入学校、邮箱或支付账户凭据。'
        ]
      }
    ],
    faq: [
      { question: '云图适合访问 Google Scholar 吗？', answer: '其定位与节点结构适合科研检索候选，但具体可用性仍需用自己的网络、账号和常用数据库测试。' },
      { question: '云图能替代学校 VPN 吗？', answer: '不能直接替代。学校 VPN 通常用于访问机构授权资源，普通代理服务不一定具备相同权限。' },
      { question: '云图的隐私表现如何判断？', answer: '应查看隐私政策、日志说明、客户端来源和权限；仅凭宣传语无法确认实际日志策略。' }
    ]
  },
  {
    slug: 'kexinyun',
    name: '可信云',
    englishName: 'Kexin Cloud',
    logo: '/images/brands/logos/kexinyun-logo.webp',
    cover: '/images/brands/covers/kexinyun-cover-warm.webp',
    accent: '#2475b8',
    recommendation: '低门槛试用型',
    status: '性价比观察',
    tagline: '小额试用与短周期备用方案',
    description: '可信云机场怎么样？本文整理可信云试用套餐、IEPL 线路、月付流量、节点地区、短周期测试与备用机场使用建议。',
    verdict: '更适合希望以较低成本试用、轻量使用或配置备用线路的用户。',
    lineArchitecture: '公开资料标注 IEPL/专线入口，节点地区和线路数量相对精简。',
    protocols: ['Shadowsocks（公开资料）'],
    price: '¥15/月起；年付 ¥96 起',
    plans: [
      { name: '年费小礼包', price: '¥96/年', traffic: '60GB/月', note: '折合约 ¥8/月，适合轻量使用' },
      { name: '月付小包', price: '¥15/月', traffic: '60GB/月', note: '适合短期试用与备用线路' },
      { name: '基础版 Basic', price: '¥25/月', traffic: '150GB/月', note: '适合日常使用，周期优惠以结算页为准' }
    ],
    audience: ['轻度用户', '备用线路用户', '预算敏感用户', '希望先试用的新手'],
    useCases: ['轻量浏览', '备用防失联', '低成本试用', '常用地区节点'],
    strengths: ['试用门槛较低', '月付价格易于控制风险', '常用地区节点覆盖基础需求', '适合验证本地网络与客户端兼容性'],
    considerations: ['服务商与当前域名运营时间相对较短', '套餐流量偏精简，不适合重度视频', '公开节点地区数量有限', '专线与解锁能力需要逐节点验证'],
    keywords: ['可信云怎么样', '可信云机场评测', '可信云官网入口', '便宜机场推荐', '机场试用', '月付机场', '备用机场', 'IEPL机场'],
    referralUrl: 'https://asfasf.kexintztz2.sbs/#/?code=BStg7pM7',
    couponCode: 'kxy80',
    linkVerified: true,
    sourceNote: commonSource,
    publishedAt: '2026-10-06',
    updatedAt: '2026-10-07',
    featured: true,
    sections: [
      {
        title: '可信云的主要价值是什么？',
        paragraphs: [
          '可信云更适合作为低成本试用与备用候选。小额试用能帮助用户确认客户端、订阅格式和本地网络是否兼容，再决定是否购买月付套餐。',
          '这类精简套餐不适合只看“节点越多越好”，而应确认自己常用的香港、日本、新加坡或美国等地区是否可用。'
        ]
      },
      {
        title: '轻量用户如何选择套餐？',
        paragraphs: [
          '如果主要是查资料、收消息和偶尔使用 AI 工具，小流量月付可能足够。若经常观看视频或同步文件，则需要先估算月流量，避免频繁加购。',
          '试用期间应同时测试订阅更新、系统代理、TUN、常用网站和晚高峰，不要只测试首页能否打开。'
        ]
      },
      {
        title: '为什么更适合按月观察？',
        paragraphs: [
          '公开资料显示服务商与当前域名运营时间较短，因此短周期比长期预付更容易控制风险。观察重点包括公告更新、节点维护、工单响应和入口稳定。',
          '作为备用线路时，最好与主力服务使用不同的上游和入口，才能真正起到容灾作用。'
        ]
      }
    ],
    faq: [
      { question: '可信云的试用套餐适合测速吗？', answer: '适合检查连接、延迟、常用节点和客户端兼容，但流量较少，不适合长时间高清视频压力测试。' },
      { question: '可信云适合做备用机场吗？', answer: '低门槛与月付模式适合作为备用候选，但应确认其上游与主力服务不同。' },
      { question: '可信云值得年付吗？', answer: '对运营时间较短或仍在观察的服务，更稳妥的是先月付并持续观察公告与维护表现。' }
    ]
  },
  {
    slug: 'kunpeng',
    name: '鲲鹏加速',
    englishName: 'Kunpeng Jiasu',
    logo: '/images/brands/logos/kunpeng-logo.webp',
    cover: '/images/brands/covers/kunpeng-cover-warm.webp',
    accent: '#1a6bc8',
    recommendation: '性价比全流量型',
    status: '场景推荐',
    tagline: '全球原生节点 · 1.0 倍率无暗扣',
    description: '鲲鹏加速怎么样？本文整理鲲鹏加速原生节点、ChatGPT/流媒体解锁、套餐价格（12元99G、22元199G）、设备并发与 2026 年性价比机场选购建议。',
    verdict: '更适合追求透明倍率、流量够用且兼顾 AI 工具与流媒体的中轻度用户，逍遥畅游套餐性价比突出。',
    lineArchitecture: '全球多国原生节点与冷门地区线路，全站节点统一 1.0 倍率，无暗扣；高级套餐配备晚高峰备用节点加速保障。',
    protocols: ['Shadowsocks', 'Trojan', 'VLESS'],
    price: '¥12/月起（99GB）',
    plans: [
      { name: '逍遥畅游（月付）', price: '¥12/月', traffic: '99GB/月', note: '闭眼入首选，5 台设备并发，支持季度/半年/年付，全网热销款' },
      { name: '吞吐山海（月付）', price: '¥22/月', traffic: '199GB/月', note: '8 台设备并发，享晚高峰专属备用节点与 VIP 客服，支持季度/半年/年付' }
    ],
    audience: ['日常上网与 AI 工具用户', '多设备家庭', '流媒体追剧用户', '对倍率透明有要求的用户'],
    useCases: ['ChatGPT / AI 工具', 'Netflix / Disney+ 追剧', '多设备并发', '日常浏览与办公'],
    strengths: ['全站 1.0 倍率，绝无暗扣，流量所见即所得', '覆盖全球多国原生节点与冷门地区线路', '支持 ChatGPT AI 工具及主流海外流媒体', '逍遥畅游套餐价格亲民，适合长期订阅', '售后 24 小时全天候工单响应'],
    considerations: ['禁止以任何形式公开或分享订阅链接', '严禁 BT、磁力链等 P2P 下载，违者直接拉黑', '数字虚拟商品，售出后概不退换', '套餐流量、节点地区和倍率规则应以结算页为准'],
    keywords: ['鲲鹏加速怎么样', '鲲鹏加速机场评测', '鲲鹏加速官网', '鲲鹏加速套餐价格', '1元机场体验', '12元机场', '99G机场', '原生节点机场', 'ChatGPT机场推荐', '流媒体解锁机场'],
    referralUrl: 'https://kunpengjiasu.com/#/register?code=rpuitcjc',
    linkVerified: true,
    sourceNote: commonSource,
    publishedAt: '2026-10-19',
    updatedAt: '2026-10-19',
    featured: true,
    sections: [
      {
        title: '鲲鹏加速的核心定位是什么？',
        paragraphs: [
          '鲲鹏加速的最大卖点是"全站节点统一 1.0 倍率，绝无暗扣"。对于很多用户来说，倍率是购买机场时容易忽略的隐性成本——套餐写着 99GB，但高倍率节点实际消耗可能是 2–3 倍，真实可用额度大幅缩水。鲲鹏在这一点上承诺透明，更容易做到心里有数。',
          '逍遥畅游套餐定价 ¥12/月，提供 99GB 基础流量和 5 台设备并发，支持月付、季度、半年和年付，灵活度较高。对于轻中度日常使用的用户，这个档位已经能覆盖 AI 工具、影音和日常浏览。'
        ]
      },
      {
        title: '节点质量与流媒体、ChatGPT 解锁',
        paragraphs: [
          '鲲鹏加速公开资料标注覆盖全球多国原生节点与冷门地区线路。原生节点在流媒体解锁和 ChatGPT 访问方面通常比中转 IP 更稳定，尤其对于 Netflix 地区库选择和 AI 工具登录有明显帮助。',
          '需要注意的是，流媒体可用性与具体出口 IP、节点地区和平台风控策略有关，即便是原生节点也可能因 IP 变更而失效。建议先通过月付套餐在自己最常用的地区节点进行测试，确认稳定后再考虑更长周期。'
        ]
      },
      {
        title: '吞吐山海套餐适合谁？',
        paragraphs: [
          '吞吐山海（¥22/月，199GB）比逍遥畅游多了三项核心权益：8 台设备并发、晚高峰专属备用节点加速保障和 VIP 客服优先处理通道。如果你家庭成员多、设备数量超过 5 台，或者在晚高峰（20:00–23:00）有高画质视频需求，这个套餐的晚高峰节点保障值得考虑。',
          '两个套餐都支持月付、季度、半年和年付周期，但不支持两年、三年和一次性套餐。首次用户建议从月付开始，重点观察晚高峰延迟、视频缓冲和工单响应速度。'
        ]
      }
    ],
    faq: [
      { question: '鲲鹏加速的 1.0 倍率是真的吗？', answer: '服务商公开资料明确标注"全站节点统一 1.0 倍率，绝无暗扣"，这意味着套餐流量即实际可用流量。但建议在使用期间通过后台流量统计自行验证，以实际消耗为准。' },
      { question: '鲲鹏加速能稳定使用 ChatGPT 和 Netflix 吗？', answer: '服务商资料将 ChatGPT AI 工具及主流海外流媒体列为支持场景，并标注原生节点。实际可用性仍取决于具体节点出口 IP 和平台风控，建议先月付测试常用地区节点。' },
      { question: '鲲鹏加速支持多少台设备？', answer: '逍遥畅游套餐允许 5 台设备同时在线，吞吐山海套餐允许 8 台设备并发，适合多设备家庭或多端用户。' }
    ]
  },
  {
    slug: 'liulianyun',
    name: '榴莲云',
    englishName: 'Liulian Cloud',
    logo: '/images/brands/logos/liulianyun-logo.webp',
    cover: '/images/brands/covers/liulianyun-cover-warm.webp',
    accent: '#7aaa1c',
    recommendation: '低价专线型',
    status: '场景推荐',
    tagline: 'IPLC/IEPL 专线 · 多地区流媒体',
    description: '榴莲云怎么样？整理榴莲云 11.88 元起月付套餐、120GB 至 1TB 流量、IPLC/IEPL 专线、流媒体与 AI 工具适用场景、优惠码 ll88 和购买前注意事项。',
    verdict: '适合预算有限、希望用较低月费覆盖日常浏览、影音和 AI 工具的用户；套餐跨度完整，首次使用仍建议从月付档开始。',
    lineArchitecture: '公开资料标注 IPLC/IEPL 专线、40+ 全球节点和 5 台设备同时在线；具体入口、倍率和节点可用性以后台实时信息为准。',
    protocols: ['Shadowsocks'],
    price: '¥11.88/月起（120GB）',
    plans: [
      { name: '入门版', price: '¥11.88/月', traffic: '120GB/月', note: '5 台设备，适合日常浏览、轻量影音与 AI 对话' },
      { name: '标准版', price: '¥17.88/月', traffic: '260GB/月', note: '适合多端日常使用和中等频率视频' },
      { name: '进阶版', price: '¥27.88/月', traffic: '480GB/月', note: '适合家庭多设备与较高频影音' },
      { name: '高流量版', price: '¥39.88/月', traffic: '720GB/月', note: '适合高清视频和较高流量需求' },
      { name: '旗舰版', price: '¥55.88/月', traffic: '1TB/月', note: '面向高流量用户，购买前核对并发和公平使用规则' }
    ],
    audience: ['低预算月付用户', '流媒体追剧用户', 'ChatGPT 等 AI 工具用户', '五台以内多设备用户'],
    useCases: ['日常浏览', 'Netflix / Disney+', 'ChatGPT / AI 工具', '多端订阅导入'],
    strengths: ['11.88 元起步，月付门槛较低', '流量从 120GB 到 1TB，档位覆盖较完整', '公开资料标注 IPLC/IEPL 专线和 40+ 节点', '提供用户确认的优惠码 ll88'],
    considerations: ['流媒体和 AI 可用性随出口 IP 与平台风控变化', '第三方资料中的线路与节点数量需要在后台再次核对', '不要因为优惠码直接选择长周期，先验证晚高峰体验', '套餐价格、倍率、并发和续费规则以结算页为准'],
    keywords: ['榴莲云怎么样', '榴莲云机场评测', '榴莲云优惠码', '榴莲云官网入口', '榴莲云套餐价格', '11元机场', '120G机场', 'IPLC机场推荐', '便宜机场推荐'],
    referralUrl: 'http://853vip01.liulianyunaff.com/#/?code=RM8ZQC6i',
    couponCode: 'll88',
    linkVerified: true,
    sourceNote: commonSource,
    publishedAt: '2026-10-19',
    updatedAt: '2026-10-19',
    featured: true,
    sections: [
      {
        title: '榴莲云套餐怎么选？',
        paragraphs: [
          '榴莲云的月付档从 11.88 元 120GB 起步，向上提供 260GB、480GB、720GB 和 1TB。轻量用户可以先看入门版；经常观看高清视频或多设备同时使用时，再比较 260GB 与 480GB 档位。',
          '价格低并不等于适合直接年付。首次使用应优先检查本地运营商晚高峰连接、常用地区节点、订阅导入和工单响应，再决定是否延长周期。'
        ]
      },
      {
        title: '专线、流媒体和 AI 场景怎么看？',
        paragraphs: [
          '公开资料将 IPLC/IEPL、Netflix、Disney+ 和 AI 工具列为主要卖点，但线路名称不能代替实际体验。真正影响使用感受的还有本地入口、节点负载、倍率以及故障切换速度。',
          '如果主要使用 ChatGPT 或流媒体，建议分别测试登录、连续对话、视频起播和拖动，而不是只看一次测速结果。'
        ]
      }
    ],
    faq: [
      { question: '榴莲云优惠码是什么？', answer: '本站当前记录的优惠码为 ll88。使用前请确认代码是否生效、适用套餐和最终结算金额。' },
      { question: '榴莲云最低套餐多少钱？', answer: '当前参考价格为 11.88 元/月，包含 120GB 月流量；价格和权益可能调整，应以结算页为准。' },
      { question: '榴莲云适合看流媒体吗？', answer: '公开资料列出 Netflix、Disney+ 等场景，但解锁会随节点出口 IP 变化，建议先月付测试常用地区。' }
    ]
  },
  {
    slug: 'dalaoyun',
    name: '大佬云',
    englishName: 'Dalao Cloud',
    logo: '/images/brands/logos/dalaoyun-logo.webp',
    cover: '/images/brands/covers/dalaoyun-cover-warm.webp',
    accent: '#c9972b',
    recommendation: 'IPLC 多档型',
    status: '场景推荐',
    tagline: '全线 IPLC · 原生 IP 与不限设备',
    description: '大佬云怎么样？根据购买后台整理大佬云 19.99 元起月付套餐、96 元年付活动包、99/199 元一次性流量包、IPLC 专线、原生 IP、优惠码 dly888 和适用场景。',
    verdict: '适合希望兼顾 IPLC 线路、原生 IP、多设备和灵活周期的用户；既有按月重置方案，也有年付轻量包与不限时一次性流量包。',
    lineArchitecture: '购买后台标注全线 IPLC 专线、全节点 1 倍率、原生 IP、智能路由与不限设备同时在线；节点覆盖香港、台湾、日本、韩国、美国、新加坡及部分欧洲地区。',
    protocols: ['Shadowsocks'],
    price: '¥19.99/月起；年付 ¥96',
    plans: [
      { name: '年付活动包', price: '¥96/年', traffic: '60GB/月', note: '折合约 8 元/月，全节点 1 倍率，每 30 天自动刷新流量' },
      { name: '初云·福利版', price: '¥19.99/月', traffic: '100–120GB/月', note: '后台标签显示 100GB、说明区显示 120GB，付款前需核对最终口径' },
      { name: '初云·进阶版', price: '¥25/月', traffic: '150GB/月', note: '全节点 1 倍率，适合日常浏览、AI 助手与影音娱乐' },
      { name: '凌云·基础版', price: '¥43/月', traffic: '300GB/月', note: '覆盖多地区节点，适合日常、工作和学习' },
      { name: '御云·高级版', price: '¥73/月', traffic: '600GB/月', note: '面向高强度使用与更高月流量需求' },
      { name: '闲云·随心包', price: '¥99/次', traffic: '78GB 总量', note: '不限时、不按月重置，按实际使用扣减' },
      { name: '悠云·长享包', price: '¥199/次', traffic: '160GB 总量', note: '不限时一次性流量包，适合长期低频使用' }
    ],
    audience: ['轻量年付用户', '不限设备多端用户', '需要原生 IP 的影音与 AI 用户', '希望购买不限时流量包的低频用户'],
    useCases: ['ChatGPT / Claude', 'Netflix / Disney+', '多设备与路由器', '长期低频备用'],
    strengths: ['全线 IPLC 与全节点 1 倍率，流量成本更直观', '月付、年付和一次性流量包并存', '后台标注原生 IP、晚高峰不限速和不限设备', '提供用户确认的优惠码 dly888'],
    considerations: ['福利版卡片与说明区分别显示 100GB 和 120GB，购买前必须核对', '不限设备仍应遵守个人合理使用与账号共享规则', '原生 IP 和流媒体解锁会随节点出口调整', '长周期或一次性套餐购买前应先验证常用节点和售后'],
    keywords: ['大佬云怎么样', '大佬云机场评测', '大佬云优惠码', '大佬云官网入口', '大佬云套餐价格', '大佬云年付96元', '19.99元机场', 'IPLC专线机场', '原生IP机场', '一次性流量机场'],
    referralUrl: 'https://liu01.dalaoyunaff.com/#/?code=P8KlGHa6',
    couponCode: 'dly888',
    linkVerified: true,
    sourceNote: commonSource,
    publishedAt: '2026-10-19',
    updatedAt: '2026-10-19',
    featured: true,
    sections: [
      {
        title: '大佬云最新套餐怎么选？',
        paragraphs: [
          '月付套餐从初云·福利版 19.99 元开始，向上依次为 25 元 150GB、43 元 300GB 和 73 元 600GB。轻度用户还可以比较 96 元年付活动包，每 30 天刷新 60GB，折合约 8 元/月。',
          '低频或备用需求可以关注 99 元 78GB 与 199 元 160GB 两个一次性流量包：流量不按月重置、使用期限标注为不限时，更适合长期慢慢使用。'
        ]
      },
      {
        title: '线路、设备和解锁能力怎么看？',
        paragraphs: [
          '购买后台将全线 IPLC、原生 IP、全节点 1 倍率、智能路由与晚高峰不限速列为主要特点，并标注支持电脑、手机和路由器多端同时在线。',
          '这些权益仍应通过自己的运营商和常用时段验证。建议先检查 ChatGPT、Claude、Netflix、Disney+ 的登录与连续使用，再决定是否购买年付或更高流量档。'
        ]
      }
    ],
    faq: [
      { question: '大佬云优惠码是什么？', answer: '本站当前记录的大佬云优惠码为 dly888，付款前请确认结算页已经应用优惠。' },
      { question: '大佬云最低多少钱？', answer: '当前月付最低参考价为 19.99 元；另有 96 元年付活动包，折合约 8 元/月。套餐价格和活动以结算页为准。' },
      { question: '大佬云支持多设备吗？', answer: '购买后台标注不限设备同时在线，并兼容电脑、手机和路由器；仍应遵守服务商的个人使用与共享规则。' },
      { question: '初云·福利版是 100GB 还是 120GB？', answer: '用户提供的后台截图中，套餐标签显示 100GB，但详情说明写着每月 120GB，存在两种口径。付款前应以订单确认页显示的最终流量为准。' }
    ]
  },
  {
    slug: 'shandianshu',
    name: '闪电鼠',
    englishName: 'Shandianshu',
    logo: '/images/brands/logos/shandianshu-logo.webp',
    cover: '/images/brands/covers/shandianshu-cover-warm.webp',
    accent: '#f2b400',
    recommendation: '全球节点型',
    status: '场景推荐',
    tagline: '全球多地区节点 · 五设备并发',
    description: '闪电鼠怎么样？整理闪电鼠 14.99 元起月付套餐、100GB 至 600GB 流量、全球节点、五台设备、Shadowsocks、流媒体与优惠码 sd88。',
    verdict: '适合看重多平台兼容、全球地区覆盖和清晰流量档位的个人及小家庭用户；可从 100GB 月付档先验证常用节点。',
    lineArchitecture: '公开资料标注全球多地区节点、Shadowsocks 协议和 5 台设备支持；不同地区出口、倍率和中转方式以实时订阅为准。',
    protocols: ['Shadowsocks'],
    price: '¥14.99/月起（100GB）',
    plans: [
      { name: '入门版', price: '¥14.99/月', traffic: '100GB/月', note: '五台设备，适合轻量个人使用' },
      { name: '标准版', price: '¥22.98/月', traffic: '200GB/月', note: '适合多端日常和中等视频需求' },
      { name: '进阶版', price: '¥30.97/月', traffic: '300GB/月', note: '适合较高频影音与远程协作' },
      { name: '高流量版', price: '¥59.93/月', traffic: '600GB/月', note: '适合多设备高流量场景' },
      { name: '年度大流量', price: '¥299.64/年', traffic: '7200GB/年', note: '长周期大流量方案，购买前先月付验证服务' }
    ],
    audience: ['五台以内多设备用户', '跨平台客户端用户', '流媒体用户', '需要全球节点的用户'],
    useCases: ['Windows / macOS / Android / iOS', 'Netflix / YouTube', 'ChatGPT / AI 工具', '日常办公'],
    strengths: ['100GB 至 600GB 月付流量档位清晰', '公开资料标注支持五台设备', '覆盖多个常用地区并兼容主流平台代理客户端', '提供用户确认的优惠码 sd88'],
    considerations: ['年度大流量方案预付金额较高，应先验证月付服务', '全球节点不代表所有地区同时保持相同质量', '流媒体解锁受出口 IP 和平台策略影响', '套餐、设备数和倍率以结算页及后台为准'],
    keywords: ['闪电鼠怎么样', '闪电鼠机场评测', '闪电鼠优惠码', '闪电鼠官网入口', '闪电鼠套餐价格', '14元机场', '全球节点机场', '五设备机场', '流媒体机场推荐'],
    referralUrl: 'https://eothvip01.shandianshuaff.com/#/?code=YwnQXVv8',
    couponCode: 'sd88',
    linkVerified: true,
    sourceNote: commonSource,
    publishedAt: '2026-10-19',
    updatedAt: '2026-10-19',
    featured: true,
    sections: [
      {
        title: '闪电鼠套餐怎么选？',
        paragraphs: [
          '闪电鼠月付档位从 100GB 到 600GB，个人轻量用户可从 14.99 元方案开始；多设备、高清视频和频繁下载会更适合 200GB 或 300GB 档。',
          '年度方案虽然折算月费更低并提供较高总流量，但长周期会放大服务变化风险。第一次使用不应跳过月付测试。'
        ]
      },
      {
        title: '全球节点是否等于稳定？',
        paragraphs: [
          '节点地区多能提升场景选择，但稳定性还取决于入口、上游、负载和故障调度。选择时应优先测试自己真正会用到的香港、日本、新加坡或美国节点。',
          '如果主要用于 AI 和流媒体，应分别验证登录、区域内容、长对话和视频拖动，避免只用测速数值判断。'
        ]
      }
    ],
    faq: [
      { question: '闪电鼠优惠码是什么？', answer: '本站当前记录的闪电鼠优惠码为 sd88，是否适用及优惠内容以结算页显示为准。' },
      { question: '闪电鼠支持几台设备？', answer: '参考资料标注支持 5 台设备，但同时在线与共享规则可能调整，购买前应再次确认。' },
      { question: '闪电鼠年付值得买吗？', answer: '首次用户更适合先月付测试；连续使用并确认晚高峰、客服和节点维护符合需要后，再比较年付方案。' }
    ]
  },
  {
    slug: 'huanqiuti',
    name: '环球梯',
    englishName: 'Global Ladder',
    logo: '/images/brands/logos/huanqiuti-logo.webp',
    cover: '/images/brands/covers/huanqiuti-cover-warm.webp',
    accent: '#2e93db',
    recommendation: '低门槛多节点型',
    status: '性价比观察',
    tagline: '9.9 元起 · 40+ 全球节点',
    description: '环球梯怎么样？整理环球梯 9.9 元起月付套餐、100GB 至 1TB 流量、一次性流量包、40+ 全球节点、流媒体支持与优惠码 HQ66。',
    verdict: '适合希望用较低门槛测试全球节点、流媒体和日常代理的用户；9.9 元入门档与一次性流量包适合作为轻量或备用选择。',
    lineArchitecture: '公开资料标注 40+ 全球节点、Shadowsocks 协议和 5 台设备支持；具体节点等级、倍率及专线属性应在购买后台核对。',
    protocols: ['Shadowsocks'],
    price: '¥9.90/月起（100GB）',
    plans: [
      { name: '轻量版', price: '¥9.90/月', traffic: '100GB/月', note: '低门槛月付，适合轻量或备用使用' },
      { name: '标准版', price: '¥14.90/月', traffic: '200GB/月', note: '适合个人多端和中等视频需求' },
      { name: '进阶版', price: '¥24.90/月', traffic: '400GB/月', note: '适合家庭多设备与高频影音' },
      { name: '旗舰版', price: '¥89.90/月', traffic: '1TB/月', note: '大流量月付，购买前确认公平使用限制' },
      { name: '一次性流量包', price: '¥55/次', traffic: '250GB 总量', note: '不按月重置，适合低频备用，核对有效期' }
    ],
    audience: ['低预算入门用户', '备用机场用户', '流媒体用户', '需要一次性流量包的低频用户'],
    useCases: ['日常网页', 'Netflix / Disney+', 'ChatGPT / AI 工具', '备用线路'],
    strengths: ['9.9 元起步，试用成本较低', '月付与一次性流量包并存', '公开资料标注 40+ 全球节点与五台设备', '提供用户确认的优惠码 HQ66'],
    considerations: ['超低价套餐应重点观察晚高峰负载和售后响应', '一次性流量包需要确认有效期和是否清零', '流媒体与 AI 可用性可能随出口 IP 变化', '价格、设备数、倍率和续费条件以结算页为准'],
    keywords: ['环球梯怎么样', '环球梯机场评测', '环球梯优惠码', '环球梯官网入口', '环球梯套餐价格', '9.9元机场', '一次性流量机场', '便宜机场推荐', '全球节点机场'],
    referralUrl: 'https://123pps01.huanqiutiaff.com/#/?code=FXwud2Gg',
    couponCode: 'HQ66',
    linkVerified: true,
    sourceNote: commonSource,
    publishedAt: '2026-10-19',
    updatedAt: '2026-10-19',
    featured: true,
    sections: [
      {
        title: '环球梯的低价套餐适合谁？',
        paragraphs: [
          '9.9 元 100GB 适合轻量浏览、聊天和备用线路；经常观看视频时，200GB 或 400GB 更有余量。1TB 档适合高流量需求，但应先确认限速和公平使用规则。',
          '一次性 250GB 流量包适合使用频率不固定的人，不过要重点核对有效期、流量是否会清零以及节点是否与月付套餐一致。'
        ]
      },
      {
        title: '如何验证 40+ 全球节点？',
        paragraphs: [
          '节点数量是覆盖广度指标，不是性能保证。购买后应优先检查常用地区是否真实可连、倍率是否透明，以及晚高峰是否频繁切换。',
          '备用机场还需要与主力服务使用不同入口或上游，否则同一网络故障可能同时影响两边。'
        ]
      }
    ],
    faq: [
      { question: '环球梯优惠码是什么？', answer: '本站当前记录的优惠码为 HQ66，请保持字母大小写一致，并在付款前确认优惠已经生效。' },
      { question: '环球梯 9.9 元套餐有多少流量？', answer: '当前参考方案为 9.9 元/月、100GB 月流量，具体权益以当前结算页为准。' },
      { question: '环球梯一次性流量包适合备用吗？', answer: '适合低频备用，但购买前必须确认有效期、流量清零规则和节点范围。' }
    ]
  },
  {
    slug: 'shenxing',
    name: '神行加速',
    englishName: 'Shenxing Acceleration',
    logo: '/images/brands/logos/shenxing-logo.webp',
    cover: '/images/brands/covers/shenxing-cover-warm.webp',
    accent: '#ff6b21',
    recommendation: '大流量多设备型',
    status: '性价比观察',
    tagline: '9 元 150GB · 多设备不限端',
    description: '神行加速怎么样？整理神行加速 9 元起月付套餐、150GB 至 1200GB 流量、多设备使用、全球节点、Shadowsocks 与优惠码 sx0077。',
    verdict: '适合希望用较低月费获得较多流量、并在手机和电脑多端使用的个人用户；大流量方案仍需先验证晚高峰和公平使用规则。',
    lineArchitecture: '公开资料标注全球多地区节点、Shadowsocks 协议和多设备支持；不同套餐的并发、倍率与具体线路以后台说明为准。',
    protocols: ['Shadowsocks'],
    price: '¥9/月起（150GB）',
    plans: [
      { name: '轻量版', price: '¥9/月', traffic: '150GB/月', note: '低价大流量入门，适合个人日常使用' },
      { name: '标准版', price: '¥16/月', traffic: '300GB/月', note: '适合多端日常与中高频视频' },
      { name: '进阶版', price: '¥23/月', traffic: '500GB/月', note: '适合家庭或较高流量需求' },
      { name: '高流量版', price: '¥36/月', traffic: '800GB/月', note: '适合多设备和高清视频' },
      { name: '旗舰版', price: '¥59/月', traffic: '1200GB/月', note: '超大流量方案，购买前确认限速和共享规则' }
    ],
    audience: ['追求大流量性价比的用户', '手机与电脑多端用户', '高清视频用户', '远程办公用户'],
    useCases: ['多设备日常使用', 'YouTube / Netflix', 'ChatGPT / AI 工具', '远程办公'],
    strengths: ['9 元提供 150GB，入门流量价格比突出', '月付档覆盖 150GB 至 1200GB', '公开资料标注多设备支持和多个常用地区', '提供用户确认的优惠码 sx0077'],
    considerations: ['不限设备表述仍可能受到个人使用与并发规则限制', '大流量不代表不限速或允许 P2P', '节点与解锁能力会随维护和出口 IP 调整', '先月付验证，再考虑更长周期'],
    keywords: ['神行加速怎么样', '神行加速机场评测', '神行加速优惠码', '神行加速官网入口', '神行加速套餐价格', '9元150G机场', '大流量机场推荐', '多设备机场', '便宜机场推荐'],
    referralUrl: 'https://fugui0077.shenxingaff.com/#/?code=9Al3jhhl',
    couponCode: 'sx0077',
    linkVerified: true,
    sourceNote: commonSource,
    publishedAt: '2026-10-19',
    updatedAt: '2026-10-19',
    featured: true,
    sections: [
      {
        title: '神行加速为什么主打大流量？',
        paragraphs: [
          '从公开套餐看，神行加速在 9 元档就提供 150GB，向上覆盖 300GB、500GB、800GB 和 1200GB，适合月流量明显高于轻量浏览的人群。',
          '选大流量套餐时不能只看 GB 数，还要核对倍率、限速、重置时间、同时在线以及 P2P 等使用限制。'
        ]
      },
      {
        title: '多设备用户应该测试什么？',
        paragraphs: [
          '手机、电脑和平板同时连接时，应测试订阅刷新、并发登录和不同网络切换。所谓多设备支持通常仍要求个人合理使用，不能默认可以公开共享。',
          '晚高峰连续视频、AI 长对话和大文件下载比单次测速更能反映线路是否适合自己的实际场景。'
        ]
      }
    ],
    faq: [
      { question: '神行加速优惠码是什么？', answer: '本站当前记录的神行加速优惠码为 sx0077，付款前请确认优惠内容和最终金额。' },
      { question: '神行加速 9 元套餐有多少流量？', answer: '当前参考方案为 9 元/月、150GB 月流量，套餐可能调整，应以购买页为准。' },
      { question: '神行加速真的不限设备吗？', answer: '参考资料标注多设备支持，但通常仍受个人使用、并发和公平使用规则约束，购买前应再次确认。' }
    ]
  },
  {
    slug: 'yunjiexian',
    name: '云界线',
    englishName: 'Yunjiexian',
    logo: '/images/brands/logos/yunjiexian-logo.webp',
    cover: '/images/brands/covers/yunjiexian-cover-warm.webp',
    accent: '#20aeea',
    recommendation: '低价多协议型',
    status: '性价比观察',
    tagline: '8 元 200GB · SS/SSR/Trojan',
    description: '云界线怎么样？整理云界线 8 元起月付套餐、200GB 至 2400GB 流量、SS/SSR/Trojan 多协议、中转节点、AI 与流媒体场景及优惠码 yjx888。',
    verdict: '适合希望用较低月费获得大流量、需要多协议与多平台导入的用户；低价高流量更应重点核验倍率、限速和晚高峰负载。',
    lineArchitecture: '公开资料标注国内中转、50+ 节点及 Shadowsocks、ShadowsocksR、Trojan 协议；节点数量和线路类型以当前订阅为准。',
    protocols: ['Shadowsocks', 'ShadowsocksR', 'Trojan'],
    price: '¥8/月起（200GB）',
    plans: [
      { name: '入门版', price: '¥8/月', traffic: '200GB/月', note: '低价大流量入门，适合个人日常使用' },
      { name: '标准版', price: '¥15/月', traffic: '400GB/月', note: '适合多端与中高频影音' },
      { name: '进阶版', price: '¥25/月', traffic: '600GB/月', note: '适合家庭与较高流量需求' },
      { name: '高流量版', price: '¥37/月', traffic: '1200GB/月', note: '适合高清视频和多设备' },
      { name: '旗舰版', price: '¥60/月', traffic: '2400GB/月', note: '超大流量档，购买前核对倍率与限速' }
    ],
    audience: ['低预算大流量用户', '需要多协议的客户端用户', 'AI 工具用户', '流媒体与多设备用户'],
    useCases: ['Clash / Shadowrocket', 'ChatGPT / AI 工具', 'Netflix / YouTube', '多端日常使用'],
    strengths: ['8 元提供 200GB，入门门槛低', '公开资料标注 SS、SSR 和 Trojan 多协议', '套餐覆盖 200GB 至 2400GB', '提供用户确认的优惠码 yjx888'],
    considerations: ['低价高流量需重点核对节点倍率和限速', '协议多不等于所有客户端订阅格式都完善', '流媒体与 AI 解锁受出口 IP 变化影响', '第三方价格和节点资料以当前结算页及后台为准'],
    keywords: ['云界线怎么样', '云界线机场评测', '云界线优惠码', '云界线官网入口', '云界线套餐价格', '8元机场', '200G机场', 'SSR机场', 'Trojan机场', '大流量机场推荐'],
    referralUrl: 'https://youxia01.yunjiexianaff.com/#/?code=FwZZ4ato',
    couponCode: 'yjx888',
    linkVerified: true,
    sourceNote: commonSource,
    publishedAt: '2026-10-19',
    updatedAt: '2026-10-19',
    featured: true,
    sections: [
      {
        title: '云界线的低价大流量怎么看？',
        paragraphs: [
          '云界线从 8 元 200GB 起步，向上提供 400GB、600GB、1200GB 和 2400GB。账面流量价格很低，适合预算敏感且使用量较大的人群进行月付测试。',
          '判断真实成本时，需要用套餐流量除以常用节点倍率，并检查限速、设备并发和流量重置时间。不能只用标称 GB 数横向比较。'
        ]
      },
      {
        title: '多协议对用户有什么价值？',
        paragraphs: [
          'SS、SSR 和 Trojan 能覆盖不同客户端与系统，但真正的易用性还取决于后台是否提供 Clash、Shadowrocket 或通用订阅，以及订阅转换是否稳定。',
          '对于 AI 和流媒体场景，建议测试常用地区出口的登录稳定性、长对话、视频起播和拖动，不把协议名称当作解锁保证。'
        ]
      }
    ],
    faq: [
      { question: '云界线优惠码是什么？', answer: '本站当前记录的云界线优惠码为 yjx888，使用时请核对大小写和最终结算金额。' },
      { question: '云界线最低多少钱？', answer: '当前参考入门方案为 8 元/月、200GB 月流量，具体价格、倍率和设备规则以购买页为准。' },
      { question: '云界线支持哪些协议？', answer: '参考资料列出 Shadowsocks、ShadowsocksR 和 Trojan；具体客户端订阅格式应以当前后台为准。' }
    ]
  }
];

export const featuredBrands = brands.filter((brand) => brand.featured);

/**
 * 机场评测页的高意向搜索词。它们对应用户进入购买前最后一轮核验时
 * 最常见的搜索表达，但页面回答仍以可核验资料为准，不生成虚构优惠。
 */
export function getBrandIntentKeywords(brand: BrandProfile) {
  return Array.from(new Set([
    ...brand.keywords,
    `${brand.name}多少钱`,
    `${brand.name}价格`,
    `${brand.name}月付套餐`,
    `${brand.name}优惠码`,
    `${brand.name}晚高峰`,
    `${brand.name}Clash订阅`,
    `${brand.name}Shadowrocket`,
    `${brand.name}ChatGPT`
  ]));
}

/**
 * 所有机场评测共享的购买前问题，专门承接价格、优惠、晚高峰和客户端
 * 兼容等长尾搜索。回答不承诺无法持续验证的折扣或性能。
 */
export function getBrandIntentFaqs(brand: BrandProfile): BrandFaq[] {
  return [
    {
      question: `${brand.name}多少钱一个月？`,
      answer: `本站当前记录的参考价格为“${brand.price}”。套餐、流量、倍率和活动会调整，进入结算页后应再次核对折后月费、流量重置周期、设备数和续费价格。`
    },
    {
      question: `${brand.name}有没有可用优惠码？`,
      answer: brand.couponCode
        ? `本站当前记录的 ${brand.name} 优惠码为“${brand.couponCode}”。使用时请保持大小写一致，并在付款前确认代码是否生效、适用套餐、优惠内容和最终结算金额。`
        : '本站目前没有记录到已核验的独立优惠码。机场入口可能自动绑定邀请优惠，也可能没有正在进行的活动；付款前请以结算页显示的最终金额为准。'
    },
    {
      question: `${brand.name}晚高峰稳定吗？`,
      answer: '晚高峰体验与本地运营商、入口负载、节点线路和所在地区有关，不能用一次测速作长期保证。建议先月付，并在工作日与周末 20:00—23:00 连续测试延迟、丢包、视频拖动和常用应用。'
    },
    {
      question: `${brand.name}支持 Clash、Shadowrocket 或 Sing-box 吗？`,
      answer: `服务商资料涉及的协议包括 ${brand.protocols.join('、')}。协议支持不等于所有客户端都能直接导入，购买前应确认后台是否提供 Clash、Shadowrocket、Sing-box 或通用订阅格式，以及当前系统版本是否兼容。`
    }
  ];
}

export function getBrand(slug: string) {
  return brands.find((brand) => brand.slug === slug);
}
