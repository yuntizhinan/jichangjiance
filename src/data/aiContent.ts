export interface AiNavItem {
  label: string;
  href: string;
  description: string;
}

export interface AiNewsItem {
  date: string;
  category: '模型与产品' | 'AI Agent' | '行业与政策' | '人才与组织' | '开发者工具';
  title: string;
  summary: string;
  impact: string;
  action: string;
}

export interface AiAppItem {
  name: string;
  category: '通用对话与研究' | '编程开发' | '图像与设计' | '视频与音频' | '知识管理' | '自动化与Agent';
  description: string;
  bestFor: string;
  caution: string;
  tags: string[];
}

export const aiNavItems: AiNavItem[] = [
  { label: 'AI资讯总览', href: '/ai-news/', description: '热点、工具、专栏与实践报告入口' },
  { label: '每日AI资讯', href: '/ai-news/daily/', description: '按日期整理变化、影响与行动建议' },
  { label: 'AI应用库', href: '/ai-news/apps/', description: '按写作、编程、图像、视频与自动化选工具' },
  { label: 'AI专题专栏', href: '/ai-news/columns/', description: 'Agent、内容生产、治理与职业能力专题' },
  { label: '大模型内容风控', href: '/articles/ai-content-risk-control-2026/', description: '风险分级、审核流程与企业落地清单' }
];

export const aiDailyItems: AiNewsItem[] = [
  {
    date: '2026-10-06',
    category: '行业与政策',
    title: 'AI治理重点从“模型能做什么”转向“代理执行后谁负责”',
    summary: '近期行业讨论明显增加了对代理自主执行、外部工具调用、数据泄露和事故披露的关注。评价一个 Agent 产品时，不能只看完成率，还要看权限、日志、审批和撤销能力。',
    impact: '企业采购和内部部署会更重视可审计、最小权限、人工确认与异常回滚。',
    action: '梳理现有自动化流程中能够修改数据、发送消息或产生费用的步骤，并为高风险动作增加确认门槛。'
  },
  {
    date: '2026-10-05',
    category: 'AI Agent',
    title: 'Agent产品竞争从演示效果进入持续运行与任务编排阶段',
    summary: '越来越多产品把长任务、后台运行、工具连接和多步骤协作作为核心能力。真正的差异开始出现在任务恢复、上下文管理和失败处理，而不是一次演示能否完成。',
    impact: '个人用户会获得更长的自动执行链，企业则需要重新评估权限边界和运行成本。',
    action: '选择一个可验证的小流程试点，例如日报整理或工单分类，记录成功率、人工介入次数和单次成本。'
  },
  {
    date: '2026-10-02',
    category: '人才与组织',
    title: '企业AI人才建设从提示词培训转向工程、流程与业务协作',
    summary: '单纯教授提示词已难以支撑规模化落地。组织更需要能够理解业务、拆分任务、管理数据、评估结果并推动跨部门协作的复合能力。',
    impact: 'AI岗位会进一步分化为应用工程、自动化运营、评测治理、产品与业务专家等方向。',
    action: '培训目标从“会使用聊天工具”改为“能够交付一个有指标、有边界、可复盘的AI流程”。'
  },
  {
    date: '2026-09-30',
    category: '行业与政策',
    title: '面向消费者的AI产品需要更清晰地说明风险、数据与自动执行范围',
    summary: '随着AI代理进入浏览器、代码、支付和企业系统，消费者保护与安全审查开始关注产品是否让用户理解模型会访问什么、执行什么，以及失败时如何停止。',
    impact: '“默认开启”和模糊授权会带来更高合规与信任成本。',
    action: '在产品页面和工作流中明确标注数据去向、保存期限、外部连接和需要人工确认的动作。'
  },
  {
    date: '2026-09-29',
    category: '开发者工具',
    title: '开发者工具开始围绕应用、代理和可组合能力重新组织',
    summary: '模型能力之外，开发平台更强调应用组件、后台任务、工具连接、监控和部署。开发者的重点从单次API调用转向完整任务生命周期。',
    impact: '原型速度继续提高，但状态管理、成本控制和安全测试会成为新的工程瓶颈。',
    action: '为每个AI功能补充输入限制、失败分支、预算上限、日志字段和人工接管入口。'
  },
  {
    date: '2026-09-21',
    category: '模型与产品',
    title: '模型排行榜之外，稳定性、可控性与真实任务成本更值得长期跟踪',
    summary: '公开榜单能够帮助初筛，但企业真实任务还涉及格式稳定、工具调用、延迟、长上下文、失败重试和人工复核。单一分数越来越难代表实际生产价值。',
    impact: '模型选型会从“选最强”转向按任务路由和组合使用。',
    action: '建立自己的小型评测集，连续记录准确率、格式通过率、耗时、费用和人工修正时间。'
  }
];

export const aiApps: AiAppItem[] = [
  { name: 'ChatGPT', category: '通用对话与研究', description: '适合通用问答、写作、分析、文件处理和多模态任务。', bestFor: '跨任务通用助手与个人工作台', caution: '重要事实仍需核验，敏感数据要先脱敏。', tags: ['对话', '写作', '分析'] },
  { name: 'Claude', category: '通用对话与研究', description: '适合长文阅读、结构化写作、代码理解和复杂任务拆解。', bestFor: '长文档、研究与持续编辑', caution: '长上下文不等于所有细节都不会遗漏。', tags: ['长文档', '写作', '代码'] },
  { name: 'Gemini', category: '通用对话与研究', description: '适合与搜索、办公文档及多模态内容结合的任务。', bestFor: '资料整理与办公场景', caution: '不同入口的能力和权限可能不同。', tags: ['搜索', '办公', '多模态'] },
  { name: 'DeepSeek', category: '通用对话与研究', description: '适合中文推理、代码与结构化问题分析。', bestFor: '中文问答、推理与开发辅助', caution: '复杂结论应保留推理检查和交叉验证。', tags: ['中文', '推理', '代码'] },
  { name: 'Perplexity', category: '通用对话与研究', description: '强调检索式问答与信息线索整理。', bestFor: '快速建立研究起点', caution: '引用存在不等于结论与原文完全一致。', tags: ['检索', '研究', '问答'] },
  { name: 'Codex', category: '编程开发', description: '面向代码理解、修改、测试与较长开发任务。', bestFor: '仓库级开发与自动化编码', caution: '写入前应明确范围，并通过测试和代码审查。', tags: ['编程', 'Agent', '测试'] },
  { name: 'Claude Code', category: '编程开发', description: '适合终端环境中的代码分析、修改和开发协作。', bestFor: '命令行开发与大型代码库', caution: '执行命令和修改文件时需要控制权限与审查差异。', tags: ['终端', '代码库', 'Agent'] },
  { name: 'Cursor', category: '编程开发', description: '把AI对话、代码补全和仓库上下文整合到编辑器。', bestFor: '日常编码与快速重构', caution: '自动改动较多时要分批提交并保留回滚点。', tags: ['IDE', '补全', '重构'] },
  { name: 'GitHub Copilot', category: '编程开发', description: '覆盖编辑器补全、对话和开发流程辅助。', bestFor: '团队现有开发工具链集成', caution: '生成代码仍需检查许可、安全与依赖风险。', tags: ['补全', '团队', '代码'] },
  { name: 'Midjourney', category: '图像与设计', description: '适合概念视觉、风格探索和营销图片草案。', bestFor: '视觉创意与风格探索', caution: '商用前核对版权、人物与品牌元素。', tags: ['图像', '设计', '创意'] },
  { name: 'Adobe Firefly', category: '图像与设计', description: '适合与设计工作流结合的生成、扩图和素材编辑。', bestFor: '设计师与品牌内容制作', caution: '生成结果仍需人工检查细节与授权范围。', tags: ['设计', '编辑', '品牌'] },
  { name: 'Canva AI', category: '图像与设计', description: '适合非设计用户制作社媒图、演示和轻量视觉内容。', bestFor: '模板化营销与团队协作', caution: '模板同质化明显，需要建立自己的视觉规范。', tags: ['模板', '社媒', '演示'] },
  { name: 'Runway', category: '视频与音频', description: '覆盖视频生成、编辑、抠像和镜头处理。', bestFor: '短视频原型与创意镜头', caution: '连续角色、文字和复杂动作仍需反复调整。', tags: ['视频', '编辑', '生成'] },
  { name: '可灵AI', category: '视频与音频', description: '适合中文用户进行图生视频、文生视频和创意短片制作。', bestFor: '中文视频创作与镜头测试', caution: '生成时长、排队和素材使用范围需要提前确认。', tags: ['视频', '中文', '创作'] },
  { name: 'ElevenLabs', category: '视频与音频', description: '适合语音合成、配音和多语言音频制作。', bestFor: '播客、旁白与多语言版本', caution: '克隆声音前应取得授权并防止误导。', tags: ['语音', '配音', '多语言'] },
  { name: 'NotebookLM', category: '知识管理', description: '围绕用户提供的资料进行整理、问答和内容生成。', bestFor: '项目资料、课程与研究笔记', caution: '资料范围之外的问题仍可能产生推断。', tags: ['知识库', '笔记', '研究'] },
  { name: 'Dify', category: '自动化与Agent', description: '适合搭建知识库应用、工作流、Agent与模型调用管理。', bestFor: '企业AI应用原型与运营', caution: '上线前要补充权限、日志、评测与数据治理。', tags: ['工作流', '知识库', 'Agent'] },
  { name: 'n8n', category: '自动化与Agent', description: '适合连接业务系统、API与AI步骤的可视化自动化。', bestFor: '跨系统流程与后台任务', caution: '凭证管理、失败重试和循环调用需要重点控制。', tags: ['自动化', '集成', '工作流'] }
];

export const aiColumns = [
  { title: 'AI Agent与自动化', description: '研究任务拆分、工具调用、状态管理、权限和失败恢复。', href: '/articles/ai-agent-workflow-guide/', tags: ['Agent', '自动化', '工作流'] },
  { title: 'AI人才与组织能力', description: '关注岗位变化、能力地图、团队协作和培训设计。', href: '/articles/ai-agent-talent-2026/', tags: ['人才', '岗位', '团队'] },
  { title: '内容生产与工具链', description: '覆盖研究、写作、视觉、发布、复盘和内容资产管理。', href: '/articles/ai-content-tool-stack-2026/', tags: ['内容', '工具链', '创作'] },
  { title: '内容安全与风险治理', description: '从风险分级、事实核验到人工审核和审计记录。', href: '/articles/ai-content-risk-control-2026/', tags: ['风控', '治理', '审核'] },
  { title: 'AI资讯核验方法', description: '判断发布信息、演示视频、榜单、融资和模型能力是否可信。', href: '/articles/ai-news-verification-guide/', tags: ['资讯', '核验', '媒体素养'] },
  { title: 'AI应用选型', description: '围绕任务、数据、成本、团队和退出机制选择工具。', href: '/articles/ai-app-selection-framework-2026/', tags: ['选型', '应用', '成本'] }
];
