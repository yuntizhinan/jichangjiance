export interface ToolGuideLink {
  label: string;
  href: string;
  description: string;
  eyebrow: string;
}

export const toolGuideLinks: ToolGuideLink[] = [
  {
    label: '工具汇总推荐',
    href: '/tools/',
    description: '按设备、协议和使用场景选择工具',
    eyebrow: 'TOOL HUB'
  },
  {
    label: 'Windows / Linux / macOS',
    href: '/articles/desktop-proxy-clients-2026/',
    description: '桌面客户端、TUN、系统代理与日志排查',
    eyebrow: 'DESKTOP'
  },
  {
    label: 'Android 手机',
    href: '/articles/android-proxy-clients-2026/',
    description: 'v2rayNG、Hiddify 与移动端省电设置',
    eyebrow: 'ANDROID'
  },
  {
    label: 'iOS 苹果手机',
    href: '/articles/ios-proxy-clients-2026/',
    description: 'App Store 客户端、按需连接与订阅导入',
    eyebrow: 'IOS'
  },
  {
    label: 'Clash Mi 使用指南',
    href: '/articles/clash-mi-guide/',
    description: '安装来源、Mihomo 配置和常见错误',
    eyebrow: 'CLASH MI'
  },
  {
    label: 'Apple ID 下载与安全',
    href: '/articles/apple-account-download-safety/',
    description: '跨区下载、媒体与购买项目及账号防护',
    eyebrow: 'APPLE ACCOUNT'
  },
  {
    label: 'IP 路由追踪',
    href: '/articles/ip-traceroute-guide/',
    description: '读懂跳数、延迟、丢包和跨境路由',
    eyebrow: 'NETWORK'
  }
];
