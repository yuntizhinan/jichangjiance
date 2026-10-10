export type AlertStatus = 'confirmed' | 'high-risk' | 'watch' | 'changed' | 'recovered';

export interface AlertSource {
  key: string;
  label: string;
  url: string;
  description: string;
}

export interface AlertRecord {
  slug: string;
  name: string;
  aliases?: string[];
  status: AlertStatus;
  statusLabel: string;
  recordDate: string;
  year: number;
  summary: string;
  signals: string[];
  userAction: string;
  sourceKeys: string[];
}

export const alertSources: AlertSource[] = [
  {
    key: 'yifenjichang',
    label: '一分机场·跑路预警名单',
    url: 'https://yifenjichang.net/airport-warnings/',
    description: '按机场名称整理预警日期、社区来源、争议说明与用户排查建议。'
  },
  {
    key: 'jichangyan',
    label: '机场眼·跑路预警与故障雷达',
    url: 'https://jichangyan.com/warning',
    description: '区分确认失联、服务异常、经营变化与恢复案例，并提供风险评分。'
  },
  {
    key: 'jichangcha',
    label: '机场查·机场状态查询',
    url: 'https://jichangcha.cc/airport-status/',
    description: '聚合公开社区记录，提供年份、级别和机场名称关键词查询。'
  }
];

/**
 * 以下均为第三方公开页面的风险记录摘要，不代表本站独立确认经营方
 * 资金状况，也不构成法律定性。状态可能随恢复、迁移或新证据变化。
 */
export const alertRecords: AlertRecord[] = [
  {
    slug: 'peiqian-airport-2026',
    name: '赔钱机场',
    status: 'watch',
    statusLabel: '2026 异常观察',
    recordDate: '2026-09-20',
    year: 2026,
    summary: '第三方页面记录了官网或服务短时不可用反馈，但相关记录最终仍维持“观察中”，历史名单中又存在更早的高风险记录，当前口径并不完全一致。',
    signals: ['短时不可用反馈', '新旧社区记录存在冲突', '尚无足够材料确认停止运营'],
    userAction: '暂停长期续费，核对最新公告、节点恢复情况和售后响应；不要仅凭同名历史条目直接定性。',
    sourceKeys: ['jichangyan', 'jichangcha']
  },
  {
    slug: 'wanda-cloud',
    name: '万达云',
    status: 'watch',
    statusLabel: '观察中 / 尚未定性',
    recordDate: '2026-09-03',
    year: 2026,
    summary: '公开社区聚合页面将其列为观察对象，但没有展示足以确认停止运营的完整证据链。',
    signals: ['第三方社区出现异常反馈', '当前仅为观察状态', '需要继续核对官网、订阅与客服'],
    userAction: '采用短周期或暂停续费，确认近期公告、工单响应和多地区节点可用率。',
    sourceKeys: ['jichangyan', 'jichangcha']
  },
  {
    slug: 'longmao-cloud',
    name: '龙猫云机场',
    status: 'high-risk',
    statusLabel: '服务异常 / 续费风险',
    recordDate: '2026-08-18',
    year: 2026,
    summary: '社区聚合记录将其标记为服务异常与续费风险，但公开摘要没有给出足以确认跑路的独立证据。',
    signals: ['服务异常反馈', '续费风险提示', '仍缺少确认失联证据'],
    userAction: '暂缓年付和大额充值，改用月付观察，并保存近期公告与工单记录。',
    sourceKeys: ['jichangyan', 'jichangcha']
  },
  {
    slug: 'naiyun-2026',
    name: '奈云机场',
    aliases: ['Naiyun', 'NyCloud'],
    status: 'changed',
    statusLabel: '高风险 / 部分恢复 / 口径争议',
    recordDate: '2026-07-02',
    year: 2026,
    summary: '旧域名异常后出现新域名和团队接手说法，同时有用户反馈账号数据或登录异常；不同第三方页面对“是否已经跑路”的表述存在冲突。',
    signals: ['官网域名变化', '经营团队变更说法', '旧账号或数据迁移反馈', '第三方结论互相矛盾'],
    userAction: '只通过可验证公告确认新入口，不向陌生迁移页面提交密码；先核对旧套餐、账号和退款处理结果。',
    sourceKeys: ['yifenjichang', 'jichangcha']
  },
  {
    slug: 'baiyueguang-recovered',
    name: '白月光机场',
    status: 'recovered',
    statusLabel: '服务恢复 / 误判反例',
    recordDate: '2025-05-13',
    year: 2025,
    summary: '用户曾因节点全部不可用提交预警，后续社区记录更新为服务恢复，并标记为未跑路。',
    signals: ['曾出现全线不可用', '后续服务恢复', '社区结论已经更正'],
    userAction: '把它作为“短时故障不能直接定性”的反例；判断其他机场服务时同样要等待恢复信息和后续证据。',
    sourceKeys: ['jichangyan']
  },
  {
    slug: 'fccloud',
    name: 'FCCloud',
    status: 'confirmed',
    statusLabel: '第三方记录：确认失联',
    recordDate: '2025-02-09',
    year: 2025,
    summary: '公开记录称其社区转为禁言或只读，节点持续不可用且售后未响应，第三方将其列入确认失联记录。',
    signals: ['节点持续不可用', '售后未响应', '社区渠道受限'],
    userAction: '不要继续充值；保存订单和支付凭证，修改复用密码，并按支付渠道规则咨询争议处理。',
    sourceKeys: ['jichangyan', 'jichangcha']
  },
  {
    slug: 'spcloud',
    name: 'spcloud',
    status: 'confirmed',
    statusLabel: '第三方记录：确认失联',
    recordDate: '2025-02-06',
    year: 2025,
    summary: '第三方社区数据库记录了节点大面积离线、官网暂停访问和客服失联等组合信号。',
    signals: ['节点大面积离线', '官网暂停访问', '客服失联'],
    userAction: '停止续费并保存证据；如果后续恢复，应以可验证公告、节点恢复和退款处理结果更新状态。',
    sourceKeys: ['jichangyan', 'jichangcha']
  },
  {
    slug: 'efcloud-transfer',
    name: 'efcloud',
    status: 'changed',
    statusLabel: '经营权与套餐变更',
    recordDate: '2025-01-21',
    year: 2025,
    summary: '社区历史记录将其标注为机场转让及部分用户套餐时长调整，属于经营主体和服务条款变化，不应直接等同于跑路。',
    signals: ['经营权变更', '部分套餐权益调整', '原有承诺需要重新核对'],
    userAction: '重新确认经营主体、隐私与退款条款、原套餐权益和新售后渠道，再决定是否续费。',
    sourceKeys: ['jichangyan', 'jichangcha']
  },
  {
    slug: 'aca-history',
    name: 'ACA',
    status: 'confirmed',
    statusLabel: '社区历史记录：跑路',
    recordDate: '2025-01-14',
    year: 2025,
    summary: '公开社区历史名单将 ACA 标记为跑路并关联用户反馈，该记录仅指向当时服务，不自动适用于后来出现的同名机场或服务商。',
    signals: ['历史社区名单标记', '存在关联用户反馈', '同名服务需要单独辨别'],
    userAction: '核对域名、运营主体和公告历史，避免把历史记录直接套用到没有关联证据的同名服务。',
    sourceKeys: ['jichangyan', 'jichangcha']
  },
  {
    slug: 'dukou-stopped',
    name: '渡口',
    status: 'confirmed',
    statusLabel: '社区确认：停止运营',
    recordDate: '2024-11-22',
    year: 2024,
    summary: '相关社区 Issue 中有多名用户反馈官网和服务无法使用，后续记录添加了基本确认停止运营或失联的标签。',
    signals: ['官网和服务不可用', '多名用户反馈', '社区记录后续更新确认标签'],
    userAction: '停止充值、保存支付和沟通记录，并检查是否复用了密码或泄露订阅 Token。',
    sourceKeys: ['jichangyan']
  },
  {
    slug: 'bhcloud-warning',
    name: '蜂巢 / BHcloud',
    aliases: ['BH 专线版'],
    status: 'high-risk',
    statusLabel: '长期预警 / 未见最终确认',
    recordDate: '2024-07-11',
    year: 2024,
    summary: '公开整理记录称多个节点失效、连接超时并伴随工单长期无人回应，但没有展示运营方正式宣布停止服务的最终材料。',
    signals: ['多节点失效或超时', '工单长期无回应', '缺少正式恢复或停运说明'],
    userAction: '将其视作历史高风险线索，而不是当前实时结论；续费前重新核验最新域名、公告和节点状态。',
    sourceKeys: ['yifenjichang', 'jichangcha']
  },
  {
    slug: 'xinyun-warning',
    name: '新云机场',
    aliases: ['XinYun'],
    status: 'high-risk',
    statusLabel: '历史跑路预警',
    recordDate: '2024-06-03',
    year: 2024,
    summary: '第三方页面将其列入同一上游相关服务集体异常事件，记录了节点异常和官方失联反馈，但后续确认材料有限。',
    signals: ['节点异常', '官方渠道失联反馈', '后续状态资料有限'],
    userAction: '注意不要与名称相近的新机场混淆；应按域名和运营主体重新核验当前状态。',
    sourceKeys: ['yifenjichang', 'jichangcha']
  }
];

export const alertStatusMeta: Record<AlertStatus, { label: string; shortLabel: string; description: string }> = {
  confirmed: {
    label: '第三方确认失联 / 停止运营记录',
    shortLabel: '确认失联',
    description: '公开记录出现官网、节点和客服等多项同时不可用，或社区记录已更新确认标签。'
  },
  'high-risk': {
    label: '高风险 / 服务异常',
    shortLabel: '高风险',
    description: '出现多个持续风险信号，但仍缺少足够材料作最终确认。'
  },
  watch: {
    label: '观察中 / 尚未定性',
    shortLabel: '观察中',
    description: '存在短时故障或用户反馈，需要继续等待公告、恢复情况与交叉来源。'
  },
  changed: {
    label: '经营变化 / 结论争议',
    shortLabel: '状态变化',
    description: '涉及转让、域名迁移、套餐变化或第三方结论不一致。'
  },
  recovered: {
    label: '服务恢复 / 状态更正',
    shortLabel: '已恢复',
    description: '早期预警后出现服务恢复或社区记录更正，用于避免永久保留错误标签。'
  }
};

export const activeAlertRecords = alertRecords.filter((record) => ['confirmed', 'high-risk', 'watch'].includes(record.status));
