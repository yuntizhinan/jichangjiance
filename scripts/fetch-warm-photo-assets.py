from io import BytesIO
from pathlib import Path
from urllib.error import HTTPError
from urllib.request import Request, urlopen

from PIL import Image, ImageEnhance, ImageOps


ROOT = Path(__file__).resolve().parents[1]
ARTICLE_DIR = ROOT / "public" / "images" / "articles" / "warm"
SITE_DIR = ROOT / "public" / "images" / "site-bg" / "warm"
FALLBACK_PHOTO_IDS = [36010271, 6793722, 585009, 12537526]


ASSETS = [
    ("site", "home-airport-warm", 38675421, 1920, 980, "center"),
    ("site", "alerts-runway-warm", 26855522, 1920, 960, "center"),
    ("site", "ai-coding-warm", 33372833, 1920, 960, "center"),
    ("site", "network-tools-warm", 4041405, 1920, 960, "center"),
    # Every article uses an independent Pexels source. The v3 suffix avoids
    # stale cached v2 images that contained a visible half-frame tint seam.
    ("article", "airport-security-privacy-v3", 3184464, 1280, 720, "center"),
    ("article", "airport-evaluation-metrics-v3", 4530180, 1280, 720, "center"),
    ("article", "beginner-guide-2026-v3", 12159841, 1280, 720, "center"),
    ("article", "iepl-iplc-transit-nodes-explained-v3", 34358265, 1280, 720, "center"),
    ("article", "shadowsocks-vless-hysteria2-comparison-v3", 4171506, 1280, 720, "center"),
    ("article", "desktop-proxy-clients-2026-v3", 31340381, 1280, 720, "center"),
    ("article", "android-proxy-clients-2026-v3", 13129496, 1280, 720, "center"),
    ("article", "ios-proxy-clients-2026-v3", 34535726, 1280, 720, "center"),
    ("article", "clash-mi-guide-v3", 9420702, 1280, 720, "center"),
    ("article", "clash-singbox-client-setup-v3", 30149856, 1280, 720, "center"),
    ("article", "ip-traceroute-guide-v3", 2881229, 1280, 720, "center"),
    ("article", "apple-account-download-safety-v3", 12537526, 1280, 720, "center"),
    ("article", "ai-agent-talent-2026-v3", 33301262, 1280, 720, "center"),
    ("article", "ai-agent-workflow-guide-v3", 30234384, 1280, 720, "center"),
    ("article", "ai-app-selection-framework-2026-v3", 13550523, 1280, 720, "center"),
    ("article", "ai-content-risk-control-2026-v3", 31668986, 1280, 720, "center"),
    ("article", "ai-content-tool-stack-2026-v3", 35594938, 1280, 720, "center"),
    ("article", "ai-news-verification-guide-v3", 29051437, 1280, 720, "center"),
]

LOCAL_SOURCE_BY_ID = {
    33372833: SITE_DIR / "ai-coding-warm.webp",
    4041405: SITE_DIR / "network-tools-warm.webp",
    38675421: SITE_DIR / "home-airport-warm.webp",
    26855522: SITE_DIR / "alerts-runway-warm.webp",
}


def download(photo_id: int) -> Image.Image:
    url = f"https://images.pexels.com/photos/{photo_id}/pexels-photo-{photo_id}.jpeg?auto=compress&cs=tinysrgb&w=2200"
    request = Request(url, headers={"User-Agent": "Mozilla/5.0 (compatible; JichangJianceAssetBuilder/1.0)"})
    with urlopen(request, timeout=45) as response:
        return Image.open(BytesIO(response.read())).convert("RGB")


def load_photo(photo_id: int) -> Image.Image:
    local_source = LOCAL_SOURCE_BY_ID.get(photo_id)
    if local_source and local_source.exists():
        print(f"Using cached Pexels source {local_source.relative_to(ROOT)}")
        return Image.open(local_source).convert("RGB")
    return download(photo_id)


def warm_grade(image: Image.Image, size: tuple[int, int], centering: tuple[float, float]) -> Image.Image:
    fitted = ImageOps.fit(image, size, method=Image.Resampling.LANCZOS, centering=centering)
    fitted = ImageEnhance.Color(fitted).enhance(0.88)
    fitted = ImageEnhance.Contrast(fitted).enhance(0.94)
    fitted = ImageEnhance.Brightness(fitted).enhance(1.04)

    warmth = Image.new("RGB", size, (245, 218, 184))
    fitted = Image.blend(fitted, warmth, 0.075)

    return fitted


def main() -> None:
    ARTICLE_DIR.mkdir(parents=True, exist_ok=True)
    SITE_DIR.mkdir(parents=True, exist_ok=True)
    cache: dict[int, Image.Image] = {}

    article_sources = []
    site_sources = []

    for asset_index, (asset_type, name, photo_id, width, height, _) in enumerate(ASSETS):
        output_dir = SITE_DIR if asset_type == "site" else ARTICLE_DIR
        output_path = output_dir / f"{name}.webp"
        if output_path.exists():
            print(f"Keeping existing {output_path.relative_to(ROOT)}")
            actual_photo_id = photo_id
        else:
            actual_photo_id = photo_id
            try:
                if actual_photo_id not in cache:
                    print(f"Downloading Pexels photo {actual_photo_id}...")
                    cache[actual_photo_id] = load_photo(actual_photo_id)
            except HTTPError as error:
                actual_photo_id = FALLBACK_PHOTO_IDS[asset_index % len(FALLBACK_PHOTO_IDS)]
                print(f"Photo {photo_id} returned {error.code}; using verified photo {actual_photo_id}.")
                if actual_photo_id not in cache:
                    cache[actual_photo_id] = load_photo(actual_photo_id)

            horizontal_center = 0.42 + (asset_index % 4) * 0.055
            result = warm_grade(cache[actual_photo_id], (width, height), (horizontal_center, 0.5))
            if asset_index % 5 == 0:
                result = ImageOps.mirror(result)
            result.save(output_path, "WEBP", quality=84, method=6)
            print(f"Saved {output_path.relative_to(ROOT)}")

        source_row = f"| {name}.webp | https://www.pexels.com/photo/{actual_photo_id}/ |"
        (site_sources if asset_type == "site" else article_sources).append(source_row)

    article_manifest = "# Warm article photography sources\n\n| Local asset | Pexels photo page |\n| --- | --- |\n" + "\n".join(article_sources) + "\n"
    site_manifest = "# Warm site photography sources\n\n| Local asset | Pexels photo page |\n| --- | --- |\n" + "\n".join(site_sources) + "\n"
    (ARTICLE_DIR / "SOURCES.md").write_text(article_manifest, encoding="utf-8")
    (SITE_DIR / "SOURCES.md").write_text(site_manifest, encoding="utf-8")


if __name__ == "__main__":
    main()
