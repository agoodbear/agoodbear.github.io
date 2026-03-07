#!/usr/bin/env python3
"""Collect newly published post URLs by diffing current and previous sitemaps."""

from __future__ import annotations

import argparse
import datetime as dt
import json
import pathlib
import urllib.error
import urllib.request
import xml.etree.ElementTree as ET


def parse_sitemap_xml(xml_text: str) -> list[str]:
    urls: list[str] = []
    root = ET.fromstring(xml_text)
    ns = {"sm": "http://www.sitemaps.org/schemas/sitemap/0.9"}
    for loc in root.findall("sm:url/sm:loc", ns):
        value = (loc.text or "").strip()
        if value:
            urls.append(value)
    return urls


def read_local_sitemap(path: pathlib.Path) -> list[str]:
    if not path.exists():
        return []
    return parse_sitemap_xml(path.read_text(encoding="utf-8"))


def read_remote_sitemap(url: str) -> list[str]:
    try:
        with urllib.request.urlopen(url, timeout=15) as resp:
            data = resp.read().decode("utf-8", errors="replace")
            return parse_sitemap_xml(data)
    except (urllib.error.URLError, ET.ParseError, TimeoutError):
        return []


def normalize_post_urls(urls: list[str]) -> list[str]:
    result = []
    for u in urls:
        if "/post/" not in u:
            continue
        if "#" in u or "?" in u:
            continue
        normalized = u.rstrip("/") + "/"
        result.append(normalized)
    return sorted(set(result))


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--current-sitemap", required=True)
    parser.add_argument("--previous-sitemap-url", required=True)
    parser.add_argument("--output-dir", required=True)
    parser.add_argument("--site-base-url", default="https://agoodbear.github.io")
    args = parser.parse_args()

    current_urls = normalize_post_urls(
        read_local_sitemap(pathlib.Path(args.current_sitemap))
    )
    previous_urls = normalize_post_urls(read_remote_sitemap(args.previous_sitemap_url))

    previous_set = set(previous_urls)
    new_urls = [u for u in current_urls if u not in previous_set]

    output_dir = pathlib.Path(args.output_dir)
    output_dir.mkdir(parents=True, exist_ok=True)

    timestamp = dt.datetime.now(dt.timezone.utc).replace(microsecond=0).isoformat()

    payload = {
        "site": args.site_base_url,
        "generated_at_utc": timestamp,
        "previous_count": len(previous_urls),
        "current_count": len(current_urls),
        "new_count": len(new_urls),
        "new_urls": new_urls,
    }

    (output_dir / "new-urls-latest.json").write_text(
        json.dumps(payload, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )
    (output_dir / "new-urls-latest.txt").write_text(
        "\n".join(new_urls) + ("\n" if new_urls else ""), encoding="utf-8"
    )

    print(f"Collected {len(new_urls)} new post URLs")
    for url in new_urls:
        print(url)

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
