#!/usr/bin/env python3
"""Sync Medium backend raw posts into Hugo markdown files.

This script imports JSON lines captured from Medium's authenticated endpoint,
for example `/tmp/medium_post_raw.ndjson`, and writes Hugo posts under
`content/post`.

Extras implemented for this site:
- Exclude selected posts entirely
- Category overrides for selected posts
- Convert Medium superscript citations (e.g. ¹²) to Hugo footnotes ([^12])
- Convert "參考資料 / References" list section into Hugo footnote definitions

Usage:
  python3 scripts/medium_sync_raw.py --dry-run
  python3 scripts/medium_sync_raw.py
  python3 scripts/medium_sync_raw.py --force
"""

from __future__ import annotations

import argparse
import json
import pathlib
import re
import sys
from dataclasses import dataclass
from datetime import datetime, timezone
from typing import Any, Iterable


EXCLUDED_IDS = {
    # User requested to keep this one out of the site.
    "7912105d4172",
    # User requested this one is duplicate and should be excluded.
    "74abf60eff91",
}

CATEGORY_OVERRIDES: dict[str, list[str]] = {
    # User requested these two in 自我進修 (study).
    "1afeaa016c60": ["study", "medium"],
    "6efa37de7325": ["study", "medium"],
}

DEFAULT_CATEGORY = "ecg"
REQUIRED_CATEGORY = "medium"

REFERENCE_HEADING_TERMS = (
    "參考資料",
    "references",
    "reference",
    "資料來源",
)

SUPERSCRIPT_TO_DIGIT = {
    "⁰": "0",
    "¹": "1",
    "²": "2",
    "³": "3",
    "⁴": "4",
    "⁵": "5",
    "⁶": "6",
    "⁷": "7",
    "⁸": "8",
    "⁹": "9",
}
SUPERSCRIPT_RUN_RE = re.compile(r"[⁰¹²³⁴⁵⁶⁷⁸⁹]+")


@dataclass
class RawPost:
    title: str
    link: str
    medium_id: str
    pub_date: datetime
    categories: list[str]
    content_markdown: str
    first_image: str | None


def normalize_title(value: str) -> str:
    return " ".join((value or "").replace("\u00a0", " ").strip().split())


def normalize_url(url: str) -> str:
    if not url:
        return ""
    cleaned = re.sub(r"[?&]source=rss-[^&]+", "", url)
    cleaned = re.sub(r"[?&]source=[^&]+", "", cleaned)
    return cleaned.rstrip("?&")


def medium_image_url(image_id: str | None, max_width: int = 1024) -> str | None:
    if not image_id:
        return None
    if image_id.startswith("http://") or image_id.startswith("https://"):
        return normalize_url(image_id)
    return normalize_url(f"https://cdn-images-1.medium.com/max/{max_width}/{image_id}")


def yaml_quote(value: str) -> str:
    escaped = value.replace("\\", "\\\\").replace('"', '\\"')
    return f'"{escaped}"'


def parse_embedded_json(raw: str) -> dict[str, Any]:
    idx = raw.find("{")
    if idx < 0:
        raise ValueError("invalid raw payload: missing json object")
    return json.loads(raw[idx:])


def dedupe_keep_order(values: Iterable[str]) -> list[str]:
    out: list[str] = []
    seen: set[str] = set()
    for value in values:
        item = value.strip().lower()
        if not item or item in seen:
            continue
        seen.add(item)
        out.append(item)
    return out


def extract_categories(post: dict[str, Any], medium_id: str) -> list[str]:
    if medium_id in CATEGORY_OVERRIDES:
        return dedupe_keep_order(CATEGORY_OVERRIDES[medium_id])

    categories: list[str] = []
    for tag in post.get("virtuals", {}).get("tags", []) or []:
        if not isinstance(tag, dict):
            continue
        slug = (tag.get("slug") or "").strip().lower()
        name = (tag.get("name") or "").strip().lower()
        candidate = slug or name
        if candidate:
            categories.append(candidate)

    categories.append(DEFAULT_CATEGORY)
    categories.append(REQUIRED_CATEGORY)
    return dedupe_keep_order(categories)


def escape_markdown_plain(text: str) -> str:
    escaped = text
    escaped = escaped.replace("\\", "\\\\")
    escaped = escaped.replace("`", "\\`")
    escaped = escaped.replace("*", "\\*")
    escaped = escaped.replace("_", "\\_")
    escaped = escaped.replace("[", "\\[")
    escaped = escaped.replace("]", "\\]")
    return escaped


def convert_superscript_runs(text: str) -> str:
    def repl(match: re.Match[str]) -> str:
        digits = "".join(SUPERSCRIPT_TO_DIGIT.get(ch, "") for ch in match.group(0))
        return f"[^ {digits}]".replace("[^ ", "[^") if digits else match.group(0)

    return SUPERSCRIPT_RUN_RE.sub(repl, text)


def render_inline_markdown(
    text: str,
    markups: list[dict[str, Any]],
    preserve_newlines: bool = False,
    convert_superscript: bool = False,
) -> str:
    if not text:
        return ""

    raw_text = str(text)
    length = len(raw_text)

    valid_ranges: list[dict[str, Any]] = []
    for markup in markups or []:
        try:
            start = int(markup.get("start", 0))
            end = int(markup.get("end", 0))
        except (TypeError, ValueError):
            continue
        start = max(0, min(length, start))
        end = max(0, min(length, end))
        if end <= start:
            continue
        current = dict(markup)
        current["start"] = start
        current["end"] = end
        valid_ranges.append(current)

    if not valid_ranges:
        rendered = raw_text
        if convert_superscript:
            rendered = convert_superscript_runs(rendered)
        rendered = escape_markdown_plain(rendered)
        if not preserve_newlines:
            rendered = rendered.replace("\n", " ")
        return rendered

    boundaries = {0, length}
    for markup in valid_ranges:
        boundaries.add(markup["start"])
        boundaries.add(markup["end"])
    points = sorted(boundaries)

    parts: list[str] = []
    for idx in range(len(points) - 1):
        start = points[idx]
        end = points[idx + 1]
        if end <= start:
            continue

        piece = raw_text[start:end]
        if convert_superscript:
            piece = convert_superscript_runs(piece)
        piece = escape_markdown_plain(piece)
        if not preserve_newlines:
            piece = piece.replace("\n", " ")

        active = [m for m in valid_ranges if m["start"] <= start and m["end"] >= end]
        has_bold = any(int(m.get("type", 0)) == 1 for m in active)
        has_italic = any(int(m.get("type", 0)) == 2 for m in active)
        links = [m for m in active if int(m.get("type", 0)) == 3 and m.get("href")]

        rendered = piece
        if has_bold and has_italic:
            rendered = f"***{rendered}***"
        elif has_bold:
            rendered = f"**{rendered}**"
        elif has_italic:
            rendered = f"*{rendered}*"

        if links:
            href = normalize_url(str(links[0]["href"]))
            if href:
                rendered = f"[{rendered}]({href})"

        parts.append(rendered)

    return "".join(parts)


def strip_markdown_for_alt(text: str) -> str:
    if not text:
        return ""
    out = re.sub(r"\*\*|\*|`", "", text)
    out = re.sub(r"\[([^\]]+)\]\([^\)]+\)", r"\1", out)
    return out.strip()


def looks_like_quote_callout(text: str) -> bool:
    probe = (text or "").strip().lower()
    if not probe:
        return False
    return probe.startswith(("tips", "tip:", "ecg tips", "注意", "需要注意", "—", "→"))


def is_reference_heading(text: str) -> bool:
    probe = (text or "").strip().lower()
    probe = probe.replace(":", "").replace("：", "")
    return any(term in probe for term in REFERENCE_HEADING_TERMS)


def has_reference_section(paragraphs: list[dict[str, Any]]) -> bool:
    for idx, paragraph in enumerate(paragraphs):
        p_type = int(paragraph.get("type", 1))
        if p_type not in (3, 6, 13):
            continue
        if not is_reference_heading(str(paragraph.get("text") or "")):
            continue
        for next_idx in range(idx + 1, min(len(paragraphs), idx + 40)):
            next_para = paragraphs[next_idx] or {}
            next_type = int(next_para.get("type", 1))
            if next_type in (9, 10):
                return True
            if next_type == 1 and re.match(r"^\s*\d+[\.)]\s+", str(next_para.get("text") or "")):
                return True
            if next_type in (3, 6, 13):
                break
    return False


def render_figure_markdown(paragraph: dict[str, Any], convert_superscript: bool) -> str:
    metadata = paragraph.get("metadata") or {}
    image_url = medium_image_url(metadata.get("id"))
    if not image_url:
        return ""

    caption = render_inline_markdown(
        str(paragraph.get("text") or ""),
        paragraph.get("markups") or [],
        convert_superscript=convert_superscript,
    ).strip()
    # Keep alt empty to avoid theme JS generating a second auto-caption from alt.
    # We already render caption text explicitly below when available.
    alt = ""

    image_md = f"![{alt}]({image_url})"
    href = normalize_url(str(paragraph.get("href") or "").strip())
    if href:
        image_md = f"[{image_md}]({href})"

    if caption:
        return f"{image_md}\n*{caption}*"
    return image_md


def render_iframe_card_markdown(paragraph: dict[str, Any], convert_superscript: bool) -> str:
    iframe = paragraph.get("iframe") or {}
    thumb = normalize_url(str(iframe.get("thumbnailUrl") or "").strip())

    link_href = ""
    for markup in paragraph.get("markups") or []:
        if int(markup.get("type", 0)) == 3 and markup.get("href"):
            link_href = normalize_url(str(markup.get("href") or ""))
            break
    if not link_href:
        link_href = normalize_url(str(paragraph.get("href") or "").strip())

    caption = render_inline_markdown(
        str(paragraph.get("text") or ""),
        paragraph.get("markups") or [],
        convert_superscript=convert_superscript,
    ).strip()
    alt = strip_markdown_for_alt(caption) or "embed"

    if thumb and link_href:
        return f"[![{alt}]({thumb})]({link_href})"
    if thumb:
        return f"![{alt}]({thumb})"
    if link_href:
        title = caption or link_href
        return f"[{title}]({link_href})"
    return caption


def render_mixtape_markdown(paragraph: dict[str, Any], convert_superscript: bool) -> str:
    href = ""
    mixtape = paragraph.get("mixtapeMetadata") or {}
    if isinstance(mixtape, dict):
        href = normalize_url(str(mixtape.get("href") or ""))
    if not href:
        for markup in paragraph.get("markups") or []:
            if int(markup.get("type", 0)) == 3 and markup.get("href"):
                href = normalize_url(str(markup.get("href") or ""))
                break

    text = str(paragraph.get("text") or "")
    first_line = text.splitlines()[0].strip() if text.strip() else ""
    title = render_inline_markdown(first_line, [], convert_superscript=convert_superscript).strip() if first_line else ""

    if href:
        return f"[{title or href}]({href})"
    return title


def render_block_markdown(paragraph: dict[str, Any], convert_superscript: bool) -> str:
    p_type = int(paragraph.get("type", 1))
    text = str(paragraph.get("text") or "")
    markups = paragraph.get("markups") or []

    if p_type == 4:
        return render_figure_markdown(paragraph, convert_superscript)
    if p_type == 11:
        return render_iframe_card_markdown(paragraph, convert_superscript)
    if p_type == 14:
        return render_mixtape_markdown(paragraph, convert_superscript)

    rendered = render_inline_markdown(
        text,
        markups,
        preserve_newlines=(p_type == 8),
        convert_superscript=convert_superscript,
    ).strip()
    if not rendered:
        return ""

    if p_type == 1:
        return rendered
    if p_type == 3:
        return f"### {rendered}"
    if p_type == 6:
        if looks_like_quote_callout(text):
            return f"> {rendered}"
        return f"#### {rendered}"
    if p_type == 7:
        return f"> {rendered}"
    if p_type == 8:
        return rendered
    if p_type == 13:
        return f"#### {rendered}"

    return rendered


def render_list_markdown(
    paragraphs: list[dict[str, Any]],
    start_idx: int,
    list_type: int,
    convert_superscript: bool,
) -> tuple[str, int]:
    lines: list[str] = []
    idx = start_idx
    counter = 1

    while idx < len(paragraphs):
        paragraph = paragraphs[idx] or {}
        if int(paragraph.get("type", 1)) != list_type:
            break

        item = render_inline_markdown(
            str(paragraph.get("text") or ""),
            paragraph.get("markups") or [],
            convert_superscript=convert_superscript,
        ).strip()
        if item:
            if list_type == 10:
                lines.append(f"{counter}. {item}")
                counter += 1
            else:
                lines.append(f"- {item}")

        idx += 1

    return "\n".join(lines), idx


def normalize_reference_item(text: str) -> str:
    item = text.strip()
    item = re.sub(r"^\d+[\.)]\s*", "", item)
    return item.strip()


def render_body(paragraphs: list[dict[str, Any]]) -> tuple[str, str | None]:
    blocks: list[str] = []
    refs: list[str] = []
    first_image: str | None = None
    idx = 0

    allow_superscript_footnote = has_reference_section(paragraphs)
    collecting_refs = False

    while idx < len(paragraphs):
        paragraph = paragraphs[idx] or {}
        p_type = int(paragraph.get("type", 1))
        text = str(paragraph.get("text") or "")

        if p_type == 4 and not first_image:
            first_image = medium_image_url((paragraph.get("metadata") or {}).get("id"))

        if p_type in (3, 6, 13) and is_reference_heading(text):
            collecting_refs = True
            idx += 1
            continue

        if collecting_refs:
            if p_type in (9, 10):
                ref_item = render_inline_markdown(
                    text,
                    paragraph.get("markups") or [],
                    convert_superscript=False,
                ).strip()
                if ref_item:
                    refs.append(normalize_reference_item(ref_item))
                idx += 1
                continue

            if p_type == 1:
                ref_item = render_inline_markdown(
                    text,
                    paragraph.get("markups") or [],
                    convert_superscript=False,
                ).strip()
                if ref_item:
                    refs.append(normalize_reference_item(ref_item))
                    idx += 1
                    continue

            collecting_refs = False
            continue

        if p_type in (9, 10):
            block, idx = render_list_markdown(paragraphs, idx, p_type, allow_superscript_footnote)
            if block.strip():
                blocks.append(block.strip())
            continue

        block = render_block_markdown(paragraph, allow_superscript_footnote)
        if block.strip():
            blocks.append(block.strip())
        idx += 1

    if refs:
        ref_lines = [f"[^{i}]: {ref}" for i, ref in enumerate(refs, start=1) if ref]
        if ref_lines:
            blocks.append("\n".join(ref_lines))

    body = "\n\n".join(blocks).strip()
    # Keep Hugo footnote refs unescaped (e.g. "[^1]" not "\\[^1\\]").
    body = re.sub(r"\\\[\^(\d+)\\\]", r"[^\1]", body)
    return body, first_image


def extract_first_image_from_preview(post: dict[str, Any]) -> str | None:
    preview = post.get("virtuals", {}).get("previewImage") or {}
    if isinstance(preview, dict):
        return medium_image_url(preview.get("imageId"))
    return None


def parse_post(raw_post: dict[str, Any], fallback_id: str) -> RawPost | None:
    medium_id = (raw_post.get("id") or fallback_id or "").strip()
    title = normalize_title(str(raw_post.get("title") or ""))
    if not medium_id or not title:
        return None
    if medium_id in EXCLUDED_IDS:
        return None

    published_at = (
        raw_post.get("latestPublishedAt")
        or raw_post.get("firstPublishedAt")
        or raw_post.get("createdAt")
        or 0
    )
    try:
        published_ms = int(published_at)
    except (TypeError, ValueError):
        published_ms = 0

    if published_ms > 0:
        pub_date = datetime.fromtimestamp(published_ms / 1000, tz=timezone.utc)
    else:
        pub_date = datetime.now(tz=timezone.utc)

    link = normalize_url(
        str(
            raw_post.get("canonicalUrl")
            or raw_post.get("webCanonicalUrl")
            or raw_post.get("mediumUrl")
            or ""
        )
    )
    if not link:
        unique_slug = str(raw_post.get("uniqueSlug") or medium_id)
        link = f"https://medium.com/@agoodbear/{unique_slug}"

    paragraphs = raw_post.get("content", {}).get("bodyModel", {}).get("paragraphs", []) or []
    content_markdown, first_image = render_body(paragraphs)
    if not first_image:
        first_image = extract_first_image_from_preview(raw_post)

    categories = extract_categories(raw_post, medium_id)

    return RawPost(
        title=title,
        link=link,
        medium_id=medium_id,
        pub_date=pub_date,
        categories=categories,
        content_markdown=content_markdown,
        first_image=first_image,
    )


def load_posts(input_path: pathlib.Path) -> list[RawPost]:
    if not input_path.exists():
        raise FileNotFoundError(f"input file not found: {input_path}")

    posts: list[RawPost] = []
    seen_ids: set[str] = set()

    for line_no, line in enumerate(input_path.read_text(encoding="utf-8").splitlines(), start=1):
        raw_line = line.strip()
        if not raw_line:
            continue

        try:
            row = json.loads(raw_line)
        except json.JSONDecodeError as exc:
            print(f"WARN line {line_no}: cannot parse ndjson row: {exc}", file=sys.stderr)
            continue

        medium_id = str(row.get("id") or "").strip()
        status = int(row.get("status") or 0)
        if status != 200:
            print(f"WARN {medium_id or '(unknown)'}: status={status}, skipped", file=sys.stderr)
            continue
        if medium_id in seen_ids:
            continue

        try:
            payload = parse_embedded_json(str(row.get("raw") or ""))
            raw_post = payload.get("payload", {}).get("value", {}) or {}
            post = parse_post(raw_post, medium_id)
        except Exception as exc:  # noqa: BLE001
            print(f"WARN {medium_id or '(unknown)'}: parse failed: {exc}", file=sys.stderr)
            continue

        if not post:
            continue
        seen_ids.add(post.medium_id)
        posts.append(post)

    posts.sort(key=lambda p: p.pub_date)
    return posts


def parse_existing_medium_ids(post_dir: pathlib.Path) -> set[str]:
    existing: set[str] = set()
    pattern = re.compile(r'^medium_id:\s*"?([0-9a-f]{10,16})"?\s*$', flags=re.IGNORECASE)
    for path in post_dir.glob("*.md"):
        try:
            lines = path.read_text(encoding="utf-8", errors="ignore").splitlines()[:120]
        except OSError:
            continue
        for line in lines:
            match = pattern.match(line.strip())
            if match:
                existing.add(match.group(1))
                break
    return existing


def build_front_matter(post: RawPost) -> str:
    lines = [
        "---",
        f"title: {yaml_quote(post.title)}",
        f'date: "{post.pub_date.strftime("%Y-%m-%d")}"',
        "draft: false",
        "toc: false",
    ]

    if post.first_image:
        lines.append(f"thumbnail: {yaml_quote(post.first_image)}")

    lines.append("categories:")
    for category in post.categories:
        lines.append(f"  - {yaml_quote(category)}")

    lines.extend(
        [
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


def write_post(path: pathlib.Path, post: RawPost) -> None:
    front_matter = build_front_matter(post)
    body = (post.content_markdown or "").strip() + "\n"
    path.write_text(front_matter + body, encoding="utf-8")


def iter_actions(
    posts: Iterable[RawPost],
    existing_ids: set[str],
    output_dir: pathlib.Path,
    force: bool,
) -> Iterable[tuple[RawPost, pathlib.Path, str]]:
    for post in posts:
        out_path = output_dir / f"medium-{post.medium_id}.md"
        if post.medium_id in existing_ids and not force:
            yield post, out_path, "skip:medium-id-exists"
            continue
        if out_path.exists() and not force:
            yield post, out_path, "skip:file-exists"
            continue
        yield post, out_path, "create"


def main() -> int:
    parser = argparse.ArgumentParser(description="Sync Medium raw backend posts to Hugo content files.")
    parser.add_argument(
        "--input",
        default="/tmp/medium_post_raw.ndjson",
        help="Path to ndjson file captured from Medium backend",
    )
    parser.add_argument("--output-dir", default="content/post", help="Hugo post directory")
    parser.add_argument("--dry-run", action="store_true", help="List actions without writing files")
    parser.add_argument("--force", action="store_true", help="Overwrite existing medium-id/file checks")
    parser.add_argument("--limit", type=int, default=0, help="Process at most N posts")
    args = parser.parse_args()

    output_dir = pathlib.Path(args.output_dir)
    output_dir.mkdir(parents=True, exist_ok=True)

    try:
        posts = load_posts(pathlib.Path(args.input))
    except Exception as exc:  # noqa: BLE001
        print(f"ERROR: failed to load posts: {exc}", file=sys.stderr)
        return 1

    if args.limit > 0:
        posts = posts[: args.limit]

    existing_ids = parse_existing_medium_ids(output_dir)

    created = 0
    skipped = 0
    for post, out_path, action in iter_actions(posts, existing_ids, output_dir, args.force):
        if action.startswith("skip:"):
            skipped += 1
            print(f"SKIP  {action:22} {post.title}")
            continue

        if args.dry_run:
            print(f"PLAN  create                  {out_path} <- {post.title}")
            continue

        write_post(out_path, post)
        created += 1
        print(f"ADD   {out_path} <- {post.title}")

    if args.dry_run:
        planned = sum(1 for _p, _o, a in iter_actions(posts, existing_ids, output_dir, args.force) if a == "create")
        print(f"\nDry run complete. loaded={len(posts)}, planned_create={planned}, skipped={skipped}")
    else:
        print(f"\nSync complete. loaded={len(posts)}, created={created}, skipped={skipped}")

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
