from __future__ import annotations

from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter, ImageFont, ImageOps


ROOT = Path(__file__).resolve().parents[1]
LOGO_DIR = ROOT / "public" / "images" / "brands" / "logos"
OUTPUT_DIR = ROOT / "public" / "images" / "brands" / "covers"
OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

FONT_REGULAR = Path("C:/Windows/Fonts/msyh.ttc")
FONT_BOLD = Path("C:/Windows/Fonts/msyhbd.ttc")

BRANDS = [
    ("jilianyun", "极连云", "JILIAN CLOUD", "全平台易用 · AI 与影音场景", "jilianyun-logo.webp", "21c7ff"),
    ("sujie", "速界", "SUJIE CLOUD", "高性价比 · 大流量多设备", "sujie-logo.webp", "2c7df7"),
    ("edgenova", "边缘节点", "EDGENOVA", "弱网优化 · 低延迟连接", "edgenova-logo.webp", "7c4dff"),
    ("guangnianti", "光年梯", "LIGHTYEAR LADDER", "入门月付 · 定制客户端", "guangnianti-logo.webp", "f46fc7"),
    ("kuaili", "快狸", "KUALI CLOUD", "跨境协作 · 多地区节点", "kuaili-logo.webp", "53b7ff"),
    ("shunyun", "瞬云", "SHUNYUN CLOUD", "影音场景 · 节点冗余", "shunyun-logo.webp", "ffb9d6"),
    ("yuntu", "云图", "YUNTU AIRPORT", "科研检索 · 多路优化", "yuntu-logo.png", "2b9bd8"),
    ("kexinyun", "可信云", "KEXIN CLOUD", "低门槛试用 · 月付观察", "kexinyun-logo.webp", "2475b8"),
    ("huanyuyun", "环宇云", "HUANYUN CLOUD", "全球节点 · 资料待核验", "huanyuyun-logo.webp", "39bfe8"),
    ("kunpeng", "鲲鹏加速", "KUNPENG JIASU", "性价比专线 · 全球原生节点", "kunpeng-logo.webp", "1a6bc8"),
    ("liulianyun", "榴莲云", "LIULIAN CLOUD", "低价专线 · 多地区流媒体", "liulianyun-logo.webp", "7aaa1c"),
    ("dalaoyun", "大佬云", "DALAO CLOUD", "全线 IPLC · 多周期套餐", "dalaoyun-logo.webp", "c9972b"),
    ("shandianshu", "闪电鼠", "SHANDIANSHU", "多端兼容 · 全球节点", "shandianshu-logo.webp", "f2b400"),
    ("huanqiuti", "环球梯", "GLOBAL LADDER", "低门槛月付 · 多地区节点", "huanqiuti-logo.webp", "2e93db"),
    ("shenxing", "神行加速", "SHENXING ACCELERATION", "大流量月付 · 多设备使用", "shenxing-logo.webp", "ff6b21"),
    ("yunjiexian", "云界线", "YUNJIEXIAN", "低价大流量 · 多协议兼容", "yunjiexian-logo.webp", "20aeea"),
]


def hex_color(value: str) -> tuple[int, int, int]:
    value = value.lstrip("#")
    return tuple(int(value[index:index + 2], 16) for index in (0, 2, 4))


def blend(a: tuple[int, int, int], b: tuple[int, int, int], amount: float) -> tuple[int, int, int]:
    return tuple(round(a[index] * (1 - amount) + b[index] * amount) for index in range(3))


def font(path: Path, size: int) -> ImageFont.FreeTypeFont:
    return ImageFont.truetype(str(path), size=size)


for slug, name, english, tagline, logo_file, accent_hex in BRANDS:
    accent = hex_color(accent_hex)
    background = Image.new("RGB", (1200, 630), (248, 242, 233))
    pixels = background.load()
    for y in range(background.height):
        for x in range(background.width):
            horizontal = x / background.width
            vertical = y / background.height
            accent_soft = blend(accent, (248, 224, 196), 0.78)
            base = blend((252, 248, 241), accent_soft, horizontal * 0.34)
            pixels[x, y] = blend(base, (235, 222, 207), vertical * 0.16)

    glow = Image.new("RGBA", background.size, (0, 0, 0, 0))
    glow_draw = ImageDraw.Draw(glow)
    glow_draw.ellipse((720, -230, 1360, 410), fill=(*accent, 42))
    glow_draw.ellipse((-250, 350, 450, 1000), fill=(225, 159, 105, 34))
    glow = glow.filter(ImageFilter.GaussianBlur(105))
    background = Image.alpha_composite(background.convert("RGBA"), glow)

    decoration = Image.new("RGBA", background.size, (0, 0, 0, 0))
    decoration_draw = ImageDraw.Draw(decoration)
    for offset in range(-500, 1500, 80):
        decoration_draw.line((offset, 0, offset + 500, 630), fill=(102, 72, 52, 9), width=1)
    decoration_draw.rounded_rectangle((42, 42, 1158, 588), radius=34, outline=(126, 89, 63, 28), width=2)
    background = Image.alpha_composite(background, decoration)

    draw = ImageDraw.Draw(background)
    draw.rounded_rectangle((74, 84, 420, 546), radius=32, fill=(255, 253, 249, 248), outline=(209, 190, 172, 145), width=2)

    logo = Image.open(LOGO_DIR / logo_file).convert("RGBA")
    logo.thumbnail((292, 350), Image.Resampling.LANCZOS)
    logo_x = 74 + (346 - logo.width) // 2
    logo_y = 84 + (462 - logo.height) // 2
    background.alpha_composite(logo, (logo_x, logo_y))

    pill_box = (485, 92, 744, 134)
    draw.rounded_rectangle(pill_box, radius=21, fill=(*accent, 28), outline=(*accent, 95), width=1)
    draw.text((507, 101), "2026 品牌评测 · 机场监测", font=font(FONT_BOLD, 19), fill=(103, 71, 52, 255))

    draw.text((480, 174), name, font=font(FONT_BOLD, 72), fill=(65, 55, 48, 255))
    draw.text((484, 265), english, font=font(FONT_BOLD, 28), fill=(*blend(accent, (92, 72, 58), 0.34), 255))
    draw.rounded_rectangle((482, 326, 1088, 328), radius=1, fill=(121, 91, 69, 38))
    draw.text((482, 366), tagline, font=font(FONT_BOLD, 29), fill=(93, 75, 62, 255))
    draw.text((482, 430), "线路 · 价格 · 客户端 · 适用人群 · 风险提示", font=font(FONT_REGULAR, 22), fill=(130, 113, 100, 255))
    draw.text((482, 516), "jichangjiance.com", font=font(FONT_BOLD, 21), fill=(109, 81, 62, 235))
    draw.text((935, 516), "更新 2026.10", font=font(FONT_REGULAR, 18), fill=(145, 127, 113, 220))

    output_path = OUTPUT_DIR / f"{slug}-cover-warm.webp"
    background.convert("RGB").save(output_path, "WEBP", quality=92, method=6)
    print(output_path.relative_to(ROOT))
