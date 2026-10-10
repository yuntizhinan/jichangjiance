import { aiApps, type AiAppItem } from './aiContent';

export interface AiAppProfile extends AiAppItem {
  slug: string;
  logo: string;
  website: string;
  accent: string;
  pricing: string;
  access: string;
  overview: string;
  keyFeatures: string[];
  scenarios: string[];
  steps: string[];
  limitations: string[];
  editorTip: string;
}

type ProfileDetails = Omit<AiAppProfile, keyof AiAppItem>;

const baseByName = new Map(aiApps.map((app) => [app.name, app]));

function profile(name: string, details: ProfileDetails): AiAppProfile {
  const base = baseByName.get(name);
  if (!base) throw new Error(`AI application data not found: ${name}`);
  return { ...base, ...details };
}

export const aiAppProfiles: AiAppProfile[] = [
  profile('ChatGPT', {
    slug: 'chatgpt', logo: '/images/ai-apps/chatgpt.png', website: 'https://chatgpt.com/', accent: '#10a37f', pricing: '提供免费入口与付费方案', access: '网页、桌面端与移动端',
    overview: 'ChatGPT 是覆盖面较广的通用 AI 工作台，适合把对话、文件、图片、数据分析和内容生成放进同一个连续任务中。它的价值不只在一次回答，而在于反复补充背景、校正方向和沉淀可复用指令。',
    keyFeatures: ['通用问答、写作、总结和结构化输出', '处理文档、表格、图片等多种输入', '适合搭建个人提示词与项目工作流'],
    scenarios: ['撰写文章提纲并逐段修改', '整理会议资料和长文档要点', '分析表格、生成公式或解释数据'],
    steps: ['先说明任务目标、受众和交付格式', '上传必要资料并标注哪些内容是事实依据', '要求先给方案或提纲，再分阶段生成', '对事实、数字和引用做人工复核'],
    limitations: ['不同功能、模型和使用额度会随方案变化', '联网结果与重要事实不能替代原始资料核验'],
    editorTip: '把稳定的背景信息整理成项目说明，比每次从零开始写提示词更省时间。'
  }),
  profile('Claude', {
    slug: 'claude', logo: '/images/ai-apps/claude.png', website: 'https://claude.ai/', accent: '#d97757', pricing: '提供免费入口与订阅方案', access: '网页、桌面端与移动端',
    overview: 'Claude 更适合需要长文理解、严谨改写和持续编辑的任务。面对多份材料时，可以先建立资料边界和输出标准，再让它做比较、归纳、审阅或代码解释。',
    keyFeatures: ['长文档阅读与跨段落信息整理', '结构化写作、润色和多轮修订', '代码理解、方案拆解与文档协作'],
    scenarios: ['审阅报告并找出论证缺口', '把复杂资料改写为不同受众版本', '解释代码库结构并制定改动计划'],
    steps: ['明确材料范围与不允许推断的部分', '先要求列出理解和待确认问题', '按章节或任务块逐步处理', '最终检查遗漏、事实和格式'],
    limitations: ['长上下文仍可能忽略局部细节', '高风险内容需要独立审查和验证'],
    editorTip: '长文任务先让模型制作“证据—结论”对照表，再开始写正文。'
  }),
  profile('Gemini', {
    slug: 'gemini', logo: '/images/ai-apps/gemini.png', website: 'https://gemini.google.com/', accent: '#4285f4', pricing: '免费与高级能力并存', access: '网页、移动端及办公生态入口',
    overview: 'Gemini 适合搜索研究、办公资料和多模态内容交叉处理。它在不同产品入口中的能力可能不同，因此使用前应先确认账号、地区、文件权限和所选模型。',
    keyFeatures: ['文本、图片与文件的多模态理解', '适合资料检索、摘要和办公内容整理', '可用于创意构思、代码与日常问答'],
    scenarios: ['把多份资料整理为会议简报', '分析图片并生成说明或内容方向', '围绕主题快速建立研究问题清单'],
    steps: ['确认当前入口支持的能力与文件类型', '提供清晰的研究范围和时间边界', '要求区分资料事实与模型推断', '导出结果前核对权限和敏感信息'],
    limitations: ['不同入口的功能和额度可能不一致', '搜索摘要仍需回到原始信息核对'],
    editorTip: '要求输出“已确认、待确认、推测”三栏，能显著降低资料混用。'
  }),
  profile('DeepSeek', {
    slug: 'deepseek', logo: '/images/ai-apps/deepseek.png', website: 'https://chat.deepseek.com/', accent: '#4d6bfe', pricing: '网页入口通常可直接使用', access: '网页、移动端及 API 场景',
    overview: 'DeepSeek 适合中文推理、代码分析和结构化问题拆解。用于专业任务时，应让模型展示关键假设、检查步骤和可能反例，而不是只接收最终答案。',
    keyFeatures: ['中文问答与复杂问题拆分', '数学、逻辑和代码任务辅助', '适合生成结构化方案和检查清单'],
    scenarios: ['分析技术问题并列出验证路径', '重构代码或解释算法逻辑', '把复杂需求拆分为执行任务'],
    steps: ['给出完整约束和已知条件', '要求列出假设与不确定项', '用小样本或测试用例验证结果', '对关键结论进行交叉复核'],
    limitations: ['推理过程看似完整也可能建立在错误假设上', '服务能力和高峰期可用性可能变化'],
    editorTip: '让模型主动寻找反例，比单纯要求“再检查一次”更有效。'
  }),
  profile('Perplexity', {
    slug: 'perplexity', logo: '/images/ai-apps/perplexity.png', website: 'https://www.perplexity.ai/', accent: '#20b8cd', pricing: '免费检索与高级方案并存', access: '网页与移动端',
    overview: 'Perplexity 更像面向研究起点的检索式问答工具，适合快速收集线索、关键词和可能来源。它不能替代阅读原文，尤其在数字、时间、政策和产品能力判断上。',
    keyFeatures: ['围绕问题组织检索结果和摘要', '便于追踪主题、关键词和后续问题', '适合从宽泛主题快速建立研究框架'],
    scenarios: ['梳理一个行业议题的核心概念', '为文章建立资料检索清单', '快速比较多个产品或观点'],
    steps: ['把问题限定到时间、地区和对象', '先收集线索，再打开关键原始页面', '核对引用是否真的支持对应结论', '记录冲突信息并保留不确定性'],
    limitations: ['引用链接存在不代表摘要完全准确', '二手内容可能在检索结果中被重复放大'],
    editorTip: '把它当作“研究导航”，不要把生成摘要直接当作最终证据。'
  }),
  profile('Codex', {
    slug: 'codex', logo: '/images/ai-apps/codex.png', website: 'https://openai.com/codex/', accent: '#111827', pricing: '使用权限随产品方案变化', access: '桌面端、命令行与云端任务场景',
    overview: 'Codex 面向真实代码库中的理解、修改、测试和较长开发任务。高质量使用方式是先明确范围和验收标准，再允许它读取上下文、实施变更并运行验证。',
    keyFeatures: ['仓库级代码理解与跨文件修改', '运行命令、测试和静态检查', '适合较长的实现、排障和审查任务'],
    scenarios: ['实现功能并同步补充测试', '定位缺陷并解释根因', '重构模块或整理开发文档'],
    steps: ['说明目标、禁止改动范围与验收标准', '先让工具检查仓库和现有约定', '分批修改并运行相关测试', '人工审查差异后再合并或发布'],
    limitations: ['错误权限或模糊范围可能带来过度修改', '测试通过不等于业务逻辑一定正确'],
    editorTip: '把“完成定义”写清楚，往往比追加更多技术提示更重要。'
  }),
  profile('Claude Code', {
    slug: 'claude-code', logo: '/images/ai-apps/claude-code.png', website: 'https://claude.com/product/claude-code', accent: '#d97757', pricing: '使用范围随账号与方案变化', access: '终端与开发工作流',
    overview: 'Claude Code 适合在终端环境中理解大型代码库、执行命令和协助完成开发任务。它更接近可操作工作区的编码伙伴，因此权限控制、差异审查和回滚习惯非常重要。',
    keyFeatures: ['终端中的代码检索、解释与修改', '按任务执行测试、构建和开发命令', '适合跨文件重构和复杂问题排查'],
    scenarios: ['理解陌生仓库并形成架构说明', '修复缺陷并补充回归测试', '批量修改接口或配置'],
    steps: ['在干净分支或可回滚环境开始', '明确哪些命令和目录可以操作', '要求先计划再执行大范围改动', '逐项审查差异与测试输出'],
    limitations: ['命令行工具可能接触广泛文件与凭证', '复杂改动仍需要开发者理解和签字确认'],
    editorTip: '先让它描述将修改哪些文件，再授权执行，能减少方向偏差。'
  }),
  profile('Cursor', {
    slug: 'cursor', logo: '/images/ai-apps/cursor.png', website: 'https://www.cursor.com/', accent: '#111827', pricing: '提供试用与订阅方案', access: 'Windows、macOS 与 Linux 编辑器',
    overview: 'Cursor 把对话、补全、代码库搜索和多文件编辑放入同一编辑器。它适合高频日常开发，但大范围自动修改仍应拆分为小批次并保留明确提交点。',
    keyFeatures: ['编辑器内代码补全和上下文对话', '理解仓库并进行多文件修改', '适合重构、解释和快速原型'],
    scenarios: ['边写边补全业务代码', '围绕选中代码进行重构', '快速生成测试和开发说明'],
    steps: ['打开项目前先确认忽略和隐私设置', '用规则文件说明代码风格与约束', '一次只处理可审查的小任务', '运行测试并检查所有变更文件'],
    limitations: ['长时间依赖补全可能引入风格漂移', '自动编辑可能修改超出当前可见区域的文件'],
    editorTip: '把团队编码规范写进项目规则，比在每次对话里重复更稳定。'
  }),
  profile('GitHub Copilot', {
    slug: 'github-copilot', logo: '/images/ai-apps/github-copilot.png', website: 'https://github.com/features/copilot', accent: '#6e40c9', pricing: '个人与团队方案不同', access: '主流编辑器、代码托管与命令行场景',
    overview: 'GitHub Copilot 覆盖代码补全、对话、审查和开发流程辅助，适合已有规范化开发工具链的个人与团队。上线代码仍需经过许可、安全和行为测试。',
    keyFeatures: ['编辑器中的代码补全与对话', '围绕仓库上下文解释和生成代码', '适合团队开发流程与日常效率提升'],
    scenarios: ['生成重复性代码和单元测试', '解释函数、错误和依赖关系', '辅助代码审查与变更说明'],
    steps: ['确认组织策略和数据设置', '提供明确接口与测试约束', '小步接受建议并持续运行检查', '对依赖、许可和安全进行人工审查'],
    limitations: ['生成内容可能包含不适合项目的模式', '团队效果依赖现有代码质量和审查流程'],
    editorTip: '让工具优先模仿仓库已有实现，通常比从空白生成更可靠。'
  }),
  profile('Midjourney', {
    slug: 'midjourney', logo: '/images/ai-apps/midjourney.png', website: 'https://www.midjourney.com/', accent: '#111827', pricing: '以订阅方案为主', access: '网页创作入口',
    overview: 'Midjourney 擅长概念视觉、风格探索和营销图片草案。真正用于品牌内容时，需要固定构图、色彩、人物和后期规范，避免只追求单张图片的惊艳感。',
    keyFeatures: ['文生图与视觉风格探索', '适合快速制作概念稿和情绪板', '可通过参考图与参数迭代方向'],
    scenarios: ['文章封面和营销视觉草案', '品牌活动的风格探索', '产品概念图与故事板'],
    steps: ['先定义用途、比例和品牌限制', '用参考图锁定视觉方向', '分阶段调整构图、材质和色彩', '发布前检查人物、文字和版权风险'],
    limitations: ['画面文字和细节一致性仍需后期处理', '生成素材的商业使用要结合当前条款判断'],
    editorTip: '先建立统一的视觉词典，再批量出图，能明显降低同一项目的风格漂移。'
  }),
  profile('Adobe Firefly', {
    slug: 'adobe-firefly', logo: '/images/ai-apps/adobe-firefly.png', website: 'https://firefly.adobe.com/', accent: '#e53e3e', pricing: '免费额度与付费方案并存', access: '网页及设计软件工作流',
    overview: 'Adobe Firefly 适合把生成、扩图、移除与素材编辑结合到设计流程中。它更适合作为设计工作台的一部分，而不是完全替代构图、品牌规范和人工精修。',
    keyFeatures: ['生成图片、扩图与局部编辑', '适合与常用设计流程衔接', '支持创意草案和营销素材制作'],
    scenarios: ['扩展文章封面比例', '移除或替换画面元素', '为活动制作多尺寸视觉草案'],
    steps: ['确定输出渠道和尺寸', '准备品牌色、字体与参考素材', '生成后进入设计工具精修', '导出前检查细节和授权范围'],
    limitations: ['复杂人物、文字和精细结构仍会出错', '不同功能的额度与使用条件可能变化'],
    editorTip: '把生成式编辑放在设计流程中段，而不是直接把首轮结果当成成品。'
  }),
  profile('Canva AI', {
    slug: 'canva-ai', logo: '/images/ai-apps/canva-ai.png', website: 'https://www.canva.com/ai-image-generator/', accent: '#7d2ae8', pricing: '免费功能与高级方案并存', access: '网页、桌面端与移动端',
    overview: 'Canva AI 适合非专业设计用户快速制作社媒图、演示和轻量营销内容。模板能提高速度，但要通过品牌色、字体和版式规范避免内容高度同质化。',
    keyFeatures: ['模板化设计与智能内容生成', '演示、社媒和营销素材一体化', '便于团队协作和多尺寸复用'],
    scenarios: ['制作公众号和社媒配图', '快速生成演示文稿初稿', '统一活动素材的多个尺寸'],
    steps: ['先建立品牌套件和模板规范', '生成文案或图片后人工精简', '检查移动端和小尺寸可读性', '导出前确认素材授权与格式'],
    limitations: ['热门模板容易造成视觉同质化', '复杂排版和精细品牌设计仍需专业工具'],
    editorTip: '固定三到五种版式模板，比每次随机选模板更容易形成品牌识别。'
  }),
  profile('Runway', {
    slug: 'runway', logo: '/images/ai-apps/runway.png', website: 'https://runwayml.com/', accent: '#111827', pricing: '试用额度与订阅方案并存', access: '网页创作平台',
    overview: 'Runway 覆盖视频生成、编辑、抠像和镜头处理，适合快速制作创意镜头与短视频原型。完整成片仍需镜头规划、素材管理、剪辑和音频后期。',
    keyFeatures: ['文生视频、图生视频与镜头迭代', '视频编辑、背景处理和视觉效果', '适合创意验证与短镜头生产'],
    scenarios: ['为脚本生成概念镜头', '制作社媒短视频素材', '替换背景或测试视觉特效'],
    steps: ['先写分镜而不是直接生成长片', '用参考帧统一角色和美术方向', '按短镜头生成并筛选素材', '进入剪辑软件完成节奏和声音'],
    limitations: ['连续角色、动作和文字一致性仍是难点', '视频生成会快速消耗额度和制作时间'],
    editorTip: '把任务拆成数秒镜头，再通过剪辑组合，通常比一次生成长视频更可控。'
  }),
  profile('可灵AI', {
    slug: 'kling-ai', logo: '/images/ai-apps/kling-ai.png', website: 'https://klingai.com/', accent: '#6c5ce7', pricing: '免费额度与会员方案并存', access: '网页及移动端入口',
    overview: '可灵AI面向中文创作者提供文生视频、图生视频和创意短片能力，适合快速验证镜头构思。使用时要关注排队、时长、素材权利和人物一致性。',
    keyFeatures: ['中文文生视频与图生视频', '适合创意镜头和短片草案', '支持围绕参考素材进行动态化'],
    scenarios: ['把静态海报转成动态镜头', '测试产品展示或故事分镜', '制作短视频开场和过渡素材'],
    steps: ['准备清晰参考图和镜头描述', '先生成低成本短片验证动作', '逐步调整运镜、速度与主体', '导出后完成剪辑、字幕与音频'],
    limitations: ['复杂动作与长镜头一致性可能波动', '不同地区与方案的额度、排队可能变化'],
    editorTip: '提示词同时写主体动作和镜头动作，通常比只描述画面更有效。'
  }),
  profile('ElevenLabs', {
    slug: 'elevenlabs', logo: '/images/ai-apps/elevenlabs.png', website: 'https://elevenlabs.io/', accent: '#111827', pricing: '免费额度与订阅方案并存', access: '网页、API 与内容工作流',
    overview: 'ElevenLabs 适合语音合成、旁白、多语言配音和声音工作流。声音克隆涉及明确授权和身份风险，应保留授权记录，并避免让听众误认为是真人原声。',
    keyFeatures: ['自然语音合成与多语言配音', '适合旁白、播客和视频声音制作', '可通过 API 接入自动化内容流程'],
    scenarios: ['为教程视频生成多语言旁白', '制作播客样音和角色声音', '批量生成产品说明音频'],
    steps: ['确认声音来源与使用授权', '先用短文本测试发音和语气', '按段落生成并统一参数', '人工听审后再发布或批量生产'],
    limitations: ['专有名词、语气和情感仍需人工调校', '声音克隆可能带来冒用和误导风险'],
    editorTip: '建立发音词典和停顿标记，能显著提高长内容的一致性。'
  }),
  profile('NotebookLM', {
    slug: 'notebooklm', logo: '/images/ai-apps/notebooklm.png', website: 'https://notebooklm.google.com/', accent: '#4f46e5', pricing: '基础入口与高级能力可能不同', access: '网页端',
    overview: 'NotebookLM 围绕用户导入资料进行问答、整理与内容生成，适合项目研究和课程笔记。它的优势是资料边界相对明确，但仍要检查回答是否准确对应原文。',
    keyFeatures: ['围绕指定资料进行问答和总结', '帮助梳理主题、概念与材料关系', '适合研究项目和学习资料管理'],
    scenarios: ['整理课程讲义与阅读笔记', '汇总项目文件并准备会议问题', '从多份资料生成主题概览'],
    steps: ['按项目建立清晰资料集合', '移除过期或互相冲突的版本', '提问时要求指出依据位置', '把关键结论回到资料中复核'],
    limitations: ['资料本身错误会直接影响结果', '超出资料范围的问题仍可能产生推断'],
    editorTip: '先整理资料版本和命名，再导入工具，效果往往比增加提示词更明显。'
  }),
  profile('Dify', {
    slug: 'dify', logo: '/images/ai-apps/dify.png', website: 'https://dify.ai/', accent: '#1c64f2', pricing: '云服务与自部署路径并存', access: '网页平台及可部署环境',
    overview: 'Dify 适合搭建知识库问答、工作流、Agent 和模型调用管理，用于从原型走向可运营应用。上线前还需要补齐身份、权限、日志、评测和数据治理。',
    keyFeatures: ['可视化编排模型、知识库和工具', '适合快速搭建内部或面向用户的 AI 应用', '支持工作流、监控和持续迭代'],
    scenarios: ['搭建企业知识库问答', '编排内容生成与审核流程', '快速验证多模型应用原型'],
    steps: ['先定义用户、数据和成功指标', '用小规模知识库验证检索质量', '补充失败分支、日志和人工接管', '上线后持续评测成本与回答质量'],
    limitations: ['低代码不等于无需工程和治理', '知识库质量、切分和权限会直接影响结果'],
    editorTip: '先做 30 到 50 条真实问题评测集，再调整模型和检索参数。'
  }),
  profile('n8n', {
    slug: 'n8n', logo: '/images/ai-apps/n8n.png', website: 'https://n8n.io/', accent: '#ea4b71', pricing: '云服务与自托管方式并存', access: '网页编排界面与服务器环境',
    overview: 'n8n 适合连接业务系统、API、数据库和 AI 步骤，构建可视化自动化。流程越长，越需要处理凭证、幂等、重试、限流、告警和人工接管。',
    keyFeatures: ['可视化连接大量业务系统与 API', '支持条件、循环、代码和 AI 节点', '适合后台任务与跨系统自动化'],
    scenarios: ['自动整理表单并通知团队', '连接内容生成、审核和发布步骤', '同步多个系统中的业务数据'],
    steps: ['画出输入、输出和失败分支', '使用测试凭证和小样本数据联调', '增加超时、重试、去重与告警', '记录运行日志并定期检查成本'],
    limitations: ['复杂流程容易形成难以维护的节点网络', '凭证泄露、无限循环和重复执行需要重点防护'],
    editorTip: '为每个流程设置唯一任务标识，能减少重试导致的重复写入。'
  })
];

export const aiAppCategories = [...new Set(aiAppProfiles.map((app) => app.category))];

export function getAiAppProfile(slug: string) {
  return aiAppProfiles.find((app) => app.slug === slug);
}
