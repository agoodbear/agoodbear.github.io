#!/usr/bin/env python3
"""Sync Medium RSS posts into Hugo content files.

Usage examples:
  python3 scripts/medium_sync.py --dry-run
  python3 scripts/medium_sync.py
"""

from __future__ import annotations

import argparse
import email.utils
import html
import pathlib
import re
import sys
import urllib.request
import xml.etree.ElementTree as ET
from dataclasses import dataclass
from datetime import datetime
from typing import Iterable
from urllib.parse import urlparse, urlunparse


CONTENT_NS = "{http://purl.org/rss/1.0/modules/content/}"


@dataclass
class FeedPost:
    title: str
    link: str
    medium_id: str
    pub_date: datetime
    categories: list[str]
    content_html: str
    first_image: str | None


def normalize_title(value: str) -> str:
    # Normalize unicode spaces and repeated whitespace so title matching is stable.
    return " ".join(value.replace("\u00a0", " ").strip().split())


def fetch_text(url: str, timeout: int = 30) -> str:
    req = urllib.request.Request(
        url,
        headers={
            "User-Agent": "Mozilla/5.0 (compatible; medium-sync/1.0)",
            "Accept": "application/rss+xml,text/xml,*/*",
        },
    )
    with urllib.request.urlopen(req, timeout=timeout) as resp:
        return resp.read().decode("utf-8", errors="ignore")


def strip_query(url: str) -> str:
    parsed = urlparse(url)
    return urlunparse((parsed.scheme, parsed.netloc, parsed.path, "", "", ""))


def normalize_medium_source_params(raw_html: str) -> str:
    # Remove common RSS tracking query params from links/images.
    cleaned = re.sub(r"[?&]source=rss-[^\"'&\\s<]+", "", raw_html)
    # Remove trailing ? or & left by stripped params.
    cleaned = re.sub(r"([\"'])https://([^\"']+?)[?&](\\1)", r"\1https://\2\3", cleaned)
    return cleaned


def remove_medium_tracking_pixel(raw_html: str) -> str:
    return re.sub(
        r"<img[^>]+src=['\"]https://medium\\.com/_/stat[^'\"]*['\"][^>]*>",
        "",
        raw_html,
        flags=re.IGNORECASE,
    )


def extract_medium_id(guid: str, link: str) -> str:
    for candidate in (guid, link):
        match = re.search(r"([0-9a-f]{12})(?:\\?|$)", candidate)
        if match:
            return match.group(1)
    return ""


def extract_first_image_src(raw_html: str) -> str | None:
    match = re.search(r'<img[^>]+src="([^"]+)"', raw_html, flags=re.IGNORECASE)
    if not match:
        return None
    return html.unescape(match.group(1))


def parse_feed(xml_text: str) -> list[FeedPost]:
    root = ET.fromstring(xml_text)
    items = root.findall("./channel/item")
    posts: list[FeedPost] = []

    for item in items:
        title = (item.findtext("title") or "").strip()
        title = normalize_title(title)
        link = strip_query((item.findtext("link") or "").strip())
        guid = (item.findtext("guid") or "").strip()
        medium_id = extract_medium_id(guid, link)

        pub_date_raw = (item.findtext("pubDate") or "").strip()
        dt = email.utils.parsedate_to_datetime(pub_date_raw)
        if dt is None:
            # fallback: use current UTC date if malformed
            dt = datetime.utcnow()

        categories = [c.text.strip() for c in item.findall("category") if c.text and c.text.strip()]
        content_html = item.findtext(f"{CONTENT_NS}encoded") or ""
        content_html = content_html.strip()
        content_html = remove_medium_tracking_pixel(content_html)
        content_html = normalize_medium_source_params(content_html).strip()
        first_image = extract_first_image_src(content_html)
        if first_image and "medium.com/_/stat" in first_image:
            first_image = None

        if not title or not link or not medium_id:
            # Skip malformed items.
            continue

        posts.append(
            FeedPost(
                title=title,
                link=link,
                medium_id=medium_id,
                pub_date=dt,
                categories=categories,
                content_html=content_html,
                first_image=first_image,
            )
        )

    return posts


def parse_existing_titles(post_dir: pathlib.Path) -> set[str]:
    titles: set[str] = set()
    for path in sorted(post_dir.glob("*.md")):
        try:
            lines = path.read_text(encoding="utf-8", errors="ignore").splitlines()[:80]
        except OSError:
            continue
        for line in lines:
            stripped = line.strip()
            if not stripped.startswith("title:"):
                continue
            raw = stripped.split(":", 1)[1]
            raw = raw.split("#", 1)[0].strip().strip('"').strip("'")
            raw = normalize_title(raw)
            if raw:
                titles.add(raw)
            break
    return titles


def yaml_quote(value: str) -> str:
    escaped = value.replace("\\", "\\\\").replace('"', '\\"')
    return f'"{escaped}"'


def build_front_matter(post: FeedPost) -> str:
    categories = post.categories[:] if post.categories else []
    if "medium" not in [c.lower() for c in categories]:
        categories.append("medium")

    lines = [
        "---",
        f"title: {yaml_quote(post.title)}",
        f'date: "{post.pub_date.strftime("%Y-%m-%d")}"',
        "draft: false",
        "toc: false",
    ]

    if post.first_image:
        lines.append(f"thumbnail: {yaml_quote(post.first_image)}")

    lines.extend(
        [
            "categories:",
            *[f"  - {yaml_quote(c)}" for c in categories],
            "tags:",
            '  - "medium-import"',
            f'medium_id: "{post.medium_id}"',
            f"medium_url: {yaml_quote(post.link)}",
            f"canonicalURL: {yaml_quote(post.link)}",
            "---",
            "",
        ]
    )
    return "\n".join(lines)


def write_post(path: pathlib.Path, post: FeedPost) -> None:
    front_matter = build_front_matter(post)
    body = remove_medium_tracking_pixel(post.content_html).strip() + "\n"
    path.write_text(front_matter + body, encoding="utf-8")


def iter_new_posts(
    posts: Iterable[FeedPost],
    existing_titles: set[str],
    output_dir: pathlib.Path,
    force: bool,
) -> Iterable[tuple[FeedPost, pathlib.Path, str]]:
    for post in posts:
        out_path = output_dir / f"medium-{post.medium_id}.md"
        if post.title in existing_titles and not force:
            yield post, out_path, "skip:title-exists"
            continue
        if out_path.exists() and not force:
            yield post, out_path, "skip:file-exists"
            continue
        yield post, out_path, "create"


def main() -> int:
    parser = argparse.ArgumentParser(description="Sync Medium RSS posts to Hugo content files.")
    parser.add_argument(
        "--feed-url",
        default="https://medium.com/feed/@agoodbear",
        help="Medium RSS feed URL",
    )
    parser.add_argument(
        "--output-dir",
        default="content/post",
        help="Hugo post directory",
    )
    parser.add_argument("--limit", type=int, default=0, help="Process at most N newest feed items")
    parser.add_argument("--dry-run", action="store_true", help="List actions without writing files")
    parser.add_argument("--force", action="store_true", help="Overwrite existing file/title checks")
    args = parser.parse_args()

    output_dir = pathlib.Path(args.output_dir)
    output_dir.mkdir(parents=True, exist_ok=True)

    try:
        xml_text = fetch_text(args.feed_url)
    except Exception as exc:  # noqa: BLE001
        print(f"ERROR: failed to fetch feed: {exc}", file=sys.stderr)
        return 1

    posts = parse_feed(xml_text)
    if args.limit > 0:
        posts = posts[: args.limit]

    existing_titles = parse_existing_titles(output_dir)

    created = 0
    skipped = 0
    for post, out_path, action in iter_new_posts(posts, existing_titles, output_dir, args.force):
        if action.startswith("skip:"):
            skipped += 1
            print(f"SKIP  {action:16} {post.title}")
            continue

        if args.dry_run:
            print(f"PLAN  create          {out_path} <- {post.title}")
            continue

        write_post(out_path, post)
        created += 1
        print(f"ADD   {out_path} <- {post.title}")

    if args.dry_run:
        planned = sum(1 for _p, _o, a in iter_new_posts(posts, existing_titles, output_dir, args.force) if a == "create")
        print(f"\nDry run complete. planned_create={planned}, skipped={skipped}")
    else:
        print(f"\nSync complete. created={created}, skipped={skipped}")

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
