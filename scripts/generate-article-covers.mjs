import { mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const outputDir = join(process.cwd(), 'public', 'images', 'articles');

const covers = [
  { slug: 'airport-security-privacy', eyebrow: '\u5b89\u5168\u4e0e\u9690\u79c1', title: '\u9690\u79c1\u5b89\u5168', subtitle: 'HTTPS \u00b7 DNS \u00b7 \u8d26\u53f7\u9632\u62a4', colors: ['#087f8c', '#38b2ac', '#dff8f5'], motif: 'security' },
  { slug: 'airport-evaluation-metrics', eyebrow: '\u673a\u573a\u8bc4\u6d4b', title: '\u79d1\u5b66\u8bc4\u6d4b\u6307\u6807', subtitle: '\u7a33\u5b9a\u6027 \u00b7 \u8282\u70b9 \u00b7 \u665a\u9ad8\u5cf0', colors: ['#1769aa', '#48a9e6', '#e1f2ff'], motif: 'metrics' },
  { slug: 'beginner-guide-2026', eyebrow: '2026 \u65b0\u624b\u6307\u5357', title: '\u4ece\u96f6\u5f00\u59cb', subtitle: '\u8ba2\u9605 \u00b7 \u5ba2\u6237\u7aef \u00b7 \u8282\u70b9', colors: ['#1a7f64', '#52b788', '#e5f7ef'], motif: 'route' },
  { slug: 'iepl-iplc-transit-nodes-explained', eyebrow: '\u7f51\u7edc\u77e5\u8bc6', title: '\u4e13\u7ebf\u4e0e\u4e2d\u8f6c', subtitle: 'IEPL \u00b7 IPLC \u00b7 BGP', colors: ['#3754a5', '#7189d8', '#e9edff'], motif: 'network' },
  { slug: 'shadowsocks-vless-hysteria2-comparison', eyebrow: '\u534f\u8bae\u5bf9\u6bd4', title: '\u4e09\u7c7b\u534f\u8bae\u600e\u4e48\u9009', subtitle: 'VLESS \u00b7 Hysteria 2 \u00b7 TUIC', colors: ['#6651a6', '#9b87d2', '#f0ebff'], motif: 'protocol' },
  { slug: 'desktop-proxy-clients-2026', eyebrow: '2026 \u5de5\u5177\u6307\u5357', title: '\u684c\u9762\u5ba2\u6237\u7aef', subtitle: 'Windows \u00b7 macOS \u00b7 Linux', colors: ['#246b91', '#5eb0d8', '#e4f5fb'], motif: 'desktop' },
  { slug: 'android-proxy-clients-2026', eyebrow: 'Android \u5de5\u5177', title: '\u5b89\u5353\u5ba2\u6237\u7aef', subtitle: '\u8ba2\u9605\u5bfc\u5165 \u00b7 \u7701\u7535 \u00b7 \u5206\u5e94\u7528', colors: ['#18815a', '#56c287', '#e4f8ec'], motif: 'phone' },
  { slug: 'ios-proxy-clients-2026', eyebrow: 'iOS \u5de5\u5177', title: 'iPhone \u5ba2\u6237\u7aef', subtitle: '\u6309\u9700\u8fde\u63a5 \u00b7 \u8ba2\u9605 \u00b7 \u6392\u969c', colors: ['#375f9e', '#7ca5e8', '#e9f1ff'], motif: 'phone' },
  { slug: 'clash-mi-guide', eyebrow: '\u5ba2\u6237\u7aef\u6559\u7a0b', title: 'Clash Mi', subtitle: '\u8ba2\u9605\u5bfc\u5165 \u00b7 Mihomo \u89c4\u5219', colors: ['#bf5b39', '#ef9065', '#fff0e8'], motif: 'dashboard' },
  { slug: 'clash-singbox-client-setup', eyebrow: '\u5206\u6d41\u89c4\u5219', title: '\u8de8\u5e73\u53f0\u914d\u7f6e', subtitle: 'Clash Verge \u00b7 Sing-box \u00b7 TUN', colors: ['#147a8a', '#50b6c5', '#e2f8fa'], motif: 'flow' },
  { slug: 'ip-traceroute-guide', eyebrow: '\u7f51\u7edc\u6392\u969c', title: 'IP \u8def\u7531\u8ffd\u8e2a', subtitle: '\u8df3\u6570 \u00b7 \u5ef6\u8fdf \u00b7 \u4e22\u5305', colors: ['#1f6595', '#4ea2d5', '#e4f3fd'], motif: 'trace' },
  { slug: 'apple-account-download-safety', eyebrow: '\u8d26\u53f7\u5b89\u5168', title: '\u8de8\u533a\u4e0b\u8f7d\u6307\u5357', subtitle: 'Apple ID \u00b7 App Store \u00b7 \u98ce\u9669\u9632\u62a4', colors: ['#77539a', '#ad86c8', '#f4ebfa'], motif: 'account' },
  { slug: 'ai-agent-talent-2026', eyebrow: '2026 AI \u4eba\u624d', title: 'Agent \u80fd\u529b\u5730\u56fe', subtitle: '\u5c97\u4f4d \u00b7 \u6280\u80fd\u6808 \u00b7 \u56e2\u961f\u914d\u7f6e', colors: ['#5e4cb2', '#9a84e8', '#f0edff'], motif: 'talent' },
  { slug: 'ai-agent-workflow-guide', eyebrow: 'AI Agent \u5b9e\u6218', title: '\u5de5\u4f5c\u6d41\u843d\u5730', subtitle: '\u4efb\u52a1\u62c6\u5206 \u00b7 \u5de5\u5177\u8c03\u7528 \u00b7 \u6062\u590d', colors: ['#166d80', '#55b3c4', '#e3f7fa'], motif: 'workflow' },
  { slug: 'ai-app-selection-framework-2026', eyebrow: '2026 AI \u5e94\u7528', title: '\u9009\u578b\u6846\u67b6', subtitle: '\u4efb\u52a1 \u00b7 \u6570\u636e \u00b7 \u6210\u672c \u00b7 \u56e2\u961f', colors: ['#24756d', '#65bcae', '#e5f8f4'], motif: 'matrix' },
  { slug: 'ai-content-risk-control-2026', eyebrow: '2026 AI \u98ce\u63a7', title: '\u5185\u5bb9\u5b89\u5168\u6d41\u7a0b', subtitle: '\u5206\u7ea7 \u00b7 \u5ba1\u6838 \u00b7 \u590d\u6838 \u00b7 \u8bb0\u5f55', colors: ['#a04b4b', '#dc7a6f', '#ffedea'], motif: 'risk' },
  { slug: 'ai-content-tool-stack-2026', eyebrow: 'AI \u5185\u5bb9\u751f\u4ea7', title: '\u5168\u6d41\u7a0b\u5de5\u5177\u94fe', subtitle: '\u7814\u7a76 \u00b7 \u5199\u4f5c \u00b7 \u89c6\u89c9 \u00b7 \u53d1\u5e03', colors: ['#76529e', '#af83cf', '#f4edfa'], motif: 'stack' },
  { slug: 'ai-news-verification-guide', eyebrow: 'AI \u8d44\u8baf\u6838\u9a8c', title: '\u8fa8\u522b\u771f\u5047\u6d88\u606f', subtitle: '\u53d1\u5e03 \u00b7 \u6f14\u793a \u00b7 \u699c\u5355 \u00b7 \u878d\u8d44', colors: ['#2b6295', '#6d9fd1', '#e9f3fd'], motif: 'verify' }
];

const dot = (x, y, color, r = 9) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${color}"/>`;
const line = (x1, y1, x2, y2, color, width = 6) => `<path d="M${x1} ${y1} L${x2} ${y2}" fill="none" stroke="${color}" stroke-width="${width}" stroke-linecap="round"/>`;

function illustration(type, c) {
  const [dark, accent] = c;
  const panel = '#ffffff';
  const muted = '#dce9ef';
  const common = `<rect x="760" y="142" width="382" height="438" rx="38" fill="${panel}" opacity=".94"/><rect x="794" y="178" width="314" height="20" rx="10" fill="${muted}"/>`;
  const art = {
    security: `${common}<path d="M951 246l104 39v78c0 80-43 126-104 157-61-31-104-77-104-157v-78z" fill="${accent}" opacity=".18" stroke="${dark}" stroke-width="8"/><rect x="910" y="348" width="82" height="70" rx="16" fill="${dark}"/><path d="M930 348v-22c0-33 52-33 52 0v22" fill="none" stroke="${dark}" stroke-width="13"/>${dot(951,383,'#fff',7)}${line(818,226,884,226,accent,10)}${line(1018,226,1084,226,accent,10)}`,
    metrics: `${common}<path d="M824 478V286M824 478h244" stroke="${muted}" stroke-width="8" stroke-linecap="round"/><path d="M842 438l59-67 58 28 89-112" fill="none" stroke="${dark}" stroke-width="13" stroke-linecap="round" stroke-linejoin="round"/>${dot(842,438,accent,13)}${dot(901,371,accent,13)}${dot(959,399,accent,13)}${dot(1048,287,accent,13)}<rect x="834" y="229" width="116" height="31" rx="15" fill="${accent}" opacity=".23"/>`,
    route: `${common}${line(824,285,1049,450,muted,10)}${line(824,450,1049,285,muted,10)}${dot(824,285,dark,24)}${dot(1049,285,accent,24)}${dot(824,450,accent,24)}${dot(1049,450,dark,24)}${dot(937,368,'#fff',39)}<circle cx="937" cy="368" r="37" fill="${accent}" opacity=".2" stroke="${dark}" stroke-width="7"/><path d="M922 369l13 13 27-31" fill="none" stroke="${dark}" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>`,
    network: `${common}${line(828,350,936,270,muted,11)}${line(936,270,1057,354,muted,11)}${line(828,350,936,468,muted,11)}${line(936,468,1057,354,muted,11)}${dot(828,350,dark,28)}${dot(936,270,accent,24)}${dot(1057,354,dark,28)}${dot(936,468,accent,24)}<path d="M862 350h160" stroke="#fff" stroke-width="7" stroke-dasharray="13 14"/>`,
    protocol: `${common}<rect x="815" y="245" width="245" height="54" rx="18" fill="${dark}"/><rect x="815" y="329" width="278" height="54" rx="18" fill="${accent}" opacity=".75"/><rect x="815" y="413" width="210" height="54" rx="18" fill="${dark}" opacity=".55"/>${dot(1078,272,accent,13)}${dot(1078,356,dark,13)}${dot(1044,440,accent,13)}`,
    desktop: `${common}<rect x="818" y="238" width="268" height="174" rx="18" fill="${dark}"/><rect x="837" y="258" width="230" height="134" rx="9" fill="#eaf6fb"/><path d="M884 469h136M927 414v55M977 414v55" stroke="${dark}" stroke-width="12" stroke-linecap="round"/><rect x="864" y="285" width="176" height="20" rx="10" fill="${accent}"/><rect x="864" y="324" width="118" height="14" rx="7" fill="${muted}"/>`,
    phone: `${common}<rect x="874" y="225" width="156" height="285" rx="29" fill="${dark}"/><rect x="889" y="254" width="126" height="216" rx="12" fill="#f4fbff"/><rect x="916" y="277" width="72" height="13" rx="7" fill="${accent}"/><path d="M918 347l25 25 48-58" fill="none" stroke="${dark}" stroke-width="11" stroke-linecap="round" stroke-linejoin="round"/>${dot(952,490,'#fff',7)}`,
    dashboard: `${common}<rect x="810" y="234" width="288" height="244" rx="24" fill="#f8fbfd" stroke="${muted}" stroke-width="6"/><rect x="832" y="259" width="72" height="193" rx="14" fill="${dark}"/><rect x="928" y="267" width="143" height="26" rx="13" fill="${accent}" opacity=".7"/><rect x="928" y="317" width="64" height="58" rx="12" fill="${muted}"/><rect x="1007" y="317" width="64" height="58" rx="12" fill="${accent}" opacity=".3"/><path d="M928 420h143" stroke="${dark}" stroke-width="10" stroke-linecap="round"/>`,
    flow: `${common}<rect x="811" y="236" width="94" height="62" rx="18" fill="${dark}"/><rect x="1001" y="232" width="84" height="62" rx="18" fill="${accent}"/><rect x="1001" y="424" width="84" height="62" rx="18" fill="${dark}" opacity=".66"/><path d="M905 267h48c49 0 29-4 48-4M905 267h31c65 0 15 188 65 188" fill="none" stroke="${muted}" stroke-width="12" stroke-linecap="round"/><path d="M979 249l22 14-22 14M979 441l22 14-22 14" fill="none" stroke="${accent}" stroke-width="7" stroke-linejoin="round"/>`,
    trace: `${common}<path d="M818 442c55-116 93-37 139-123 33-61 61 3 115-70" fill="none" stroke="${dark}" stroke-width="10" stroke-linecap="round" stroke-dasharray="15 16"/>${dot(818,442,accent,18)}${dot(900,371,dark,18)}${dot(957,319,accent,18)}${dot(1016,292,dark,18)}${dot(1072,249,accent,18)}<rect x="834" y="489" width="222" height="20" rx="10" fill="${muted}"/>`,
    account: `${common}<circle cx="906" cy="318" r="58" fill="${accent}" opacity=".35"/><circle cx="906" cy="299" r="21" fill="${dark}"/><path d="M865 354c12-42 70-42 82 0" fill="${dark}"/><rect x="963" y="345" width="107" height="101" rx="22" fill="${dark}"/><path d="M988 345v-23c0-38 58-38 58 0v23" fill="none" stroke="${dark}" stroke-width="13"/>${dot(1017,391,'#fff',8)}`,
    talent: `${common}<circle cx="940" cy="338" r="48" fill="${dark}"/><circle cx="940" cy="321" r="17" fill="#fff"/><path d="M908 366c10-33 54-33 64 0" fill="#fff"/>${line(940,290,940,237,muted,8)}${line(894,313,835,273,muted,8)}${line(986,313,1049,274,muted,8)}${line(894,365,834,417,muted,8)}${line(986,365,1051,420,muted,8)}${dot(940,225,accent,18)}${dot(823,265,dark,18)}${dot(1061,265,accent,18)}${dot(822,428,accent,18)}${dot(1063,430,dark,18)}`,
    workflow: `${common}<rect x="809" y="245" width="86" height="57" rx="17" fill="${dark}"/><rect x="925" y="335" width="86" height="57" rx="17" fill="${accent}"/><rect x="1022" y="440" width="74" height="57" rx="17" fill="${dark}" opacity=".65"/><path d="M895 274c70 0-4 89 30 89M1011 363c58 0-21 106 11 106" fill="none" stroke="${muted}" stroke-width="11"/><path d="M906 345l19 18-19 18M1003 451l19 18-19 18" fill="none" stroke="${dark}" stroke-width="7" stroke-linejoin="round"/>`,
    matrix: `${common}<g stroke="#fff" stroke-width="8"><rect x="818" y="236" width="118" height="103" rx="19" fill="${dark}"/><rect x="958" y="236" width="118" height="103" rx="19" fill="${accent}"/><rect x="818" y="361" width="118" height="103" rx="19" fill="${accent}" opacity=".62"/><rect x="958" y="361" width="118" height="103" rx="19" fill="${dark}" opacity=".62"/></g><path d="M850 287l19 19 35-40M990 287l19 19 35-40" fill="none" stroke="#fff" stroke-width="8" stroke-linecap="round"/>`,
    risk: `${common}<path d="M933 226l105 40v80c0 76-45 125-105 154-60-29-105-78-105-154v-80z" fill="${accent}" opacity=".22" stroke="${dark}" stroke-width="8"/><path d="M933 287v87" stroke="${dark}" stroke-width="16" stroke-linecap="round"/>${dot(933,418,dark,10)}<path d="M1045 238l35 35M1080 238l-35 35" stroke="${accent}" stroke-width="9" stroke-linecap="round"/>`,
    stack: `${common}<rect x="823" y="250" width="247" height="58" rx="19" fill="${dark}"/><rect x="842" y="335" width="228" height="58" rx="19" fill="${accent}" opacity=".85"/><rect x="861" y="420" width="209" height="58" rx="19" fill="${dark}" opacity=".52"/><circle cx="855" cy="279" r="10" fill="#fff"/><circle cx="874" cy="364" r="10" fill="#fff"/><circle cx="893" cy="449" r="10" fill="#fff"/>`,
    verify: `${common}<circle cx="921" cy="344" r="91" fill="${accent}" opacity=".17" stroke="${dark}" stroke-width="10"/><path d="M986 411l71 71" stroke="${dark}" stroke-width="18" stroke-linecap="round"/><path d="M878 345l29 29 60-68" fill="none" stroke="${dark}" stroke-width="13" stroke-linecap="round" stroke-linejoin="round"/><rect x="1004" y="233" width="69" height="26" rx="13" fill="${accent}"/>`
  };
  return art[type] ?? art.metrics;
}

function createSvg(item) {
  const [dark, accent, pale] = item.colors;
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1280" height="720" viewBox="0 0 1280 720" role="img" aria-labelledby="title desc">
  <title id="title">${item.title}</title>
  <desc id="desc">${item.eyebrow}：${item.subtitle}</desc>
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#ffffff"/><stop offset="1" stop-color="${pale}"/></linearGradient>
    <linearGradient id="accent" x1="0" y1="0" x2="1" y2="1"><stop stop-color="${dark}"/><stop offset="1" stop-color="${accent}"/></linearGradient>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="160%"><feDropShadow dx="0" dy="22" stdDeviation="24" flood-color="${dark}" flood-opacity=".13"/></filter>
    <pattern id="dots" width="34" height="34" patternUnits="userSpaceOnUse"><circle cx="3" cy="3" r="2" fill="${dark}" opacity=".08"/></pattern>
  </defs>
  <rect width="1280" height="720" rx="34" fill="url(#bg)"/>
  <rect width="1280" height="720" rx="34" fill="url(#dots)"/>
  <circle cx="1170" cy="42" r="230" fill="${accent}" opacity=".11"/>
  <circle cx="90" cy="690" r="190" fill="${dark}" opacity=".06"/>
  <g font-family="Inter, 'Noto Sans SC', 'Microsoft YaHei', sans-serif">
    <rect x="86" y="118" width="176" height="42" rx="21" fill="${dark}" opacity=".11"/>
    <text x="174" y="146" text-anchor="middle" fill="${dark}" font-size="20" font-weight="700" letter-spacing="2">${item.eyebrow}</text>
    <text x="86" y="264" fill="#172a38" font-size="62" font-weight="800" letter-spacing="1">${item.title}</text>
    <text x="88" y="324" fill="#5c6d78" font-size="27" font-weight="500">${item.subtitle}</text>
    <rect x="88" y="389" width="112" height="8" rx="4" fill="url(#accent)"/>
    <text x="88" y="497" fill="${dark}" font-size="22" font-weight="700">JICHANGJIANCE.COM</text>
    <text x="88" y="532" fill="#71828c" font-size="18">\u673a\u573a\u76d1\u6d4b \u00b7 \u4e13\u4e1a\u6307\u5357\u4e0e\u5de5\u5177\u5206\u4eab</text>
  </g>
  <g filter="url(#shadow)">${illustration(item.motif, item.colors)}</g>
  <rect x="1.5" y="1.5" width="1277" height="717" rx="32" fill="none" stroke="${dark}" stroke-opacity=".11" stroke-width="3"/>
</svg>`;
}

await mkdir(outputDir, { recursive: true });
await Promise.all(covers.map((item) => writeFile(join(outputDir, `${item.slug}.svg`), createSvg(item), 'utf8')));
console.log(`Generated ${covers.length} article covers in ${outputDir}`);
