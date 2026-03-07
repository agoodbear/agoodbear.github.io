#!/usr/bin/env python3
from __future__ import annotations

import argparse
import os
import re
import sys
import unicodedata
from pathlib import Path
from urllib.parse import unquote


IMAGE_PATTERN = re.compile(r"!\[[^\]]*]\(([^)\n]+)\)")
STATIC_RELATIVE_PATTERN = re.compile(r"^(?:\./|\.\./)+static/")
SAFE_BASENAME_PATTERN = re.compile(r"^[A-Za-z0-9._-]+$")
FENCE_PATTERN = re.compile(r"^(```|~~~)")
TYPORA_HIGHLIGHT_PATTERN = re.compile(r"(?<![=])==(?=\S)(.+?)(?<=\S)==(?![=])")


def slugify(value: str) -> str:
    normalized = unicodedata.normalize("NFKD", value)
    ascii_text = normalized.encode("ascii", "ignore").decode("ascii")
    slug = re.sub(r"[^A-Za-z0-9]+", "-", ascii_text).strip("-").lower()
    return slug or "image"


def normalize_path_text(path_text: str) -> str:
    stripped = path_text.strip()
    if stripped.startswith("<") and stripped.endswith(">"):
        return stripped[1:-1]
    return stripped


def is_target_image(path_text: str) -> bool:
    if path_text.startswith(("http://", "https://", "data:")):
        return False
    return STATIC_RELATIVE_PATTERN.match(path_text) is not None


def iter_markdown_files(root: Path) -> list[Path]:
    return sorted(root.rglob("*.md"))


def build_safe_name(target: Path) -> Path:
    suffix = target.suffix.lower()
    stem = slugify(target.stem)
    candidate = target.with_name(f"{stem}{suffix}")
    counter = 2
    while candidate.exists() and candidate != target:
        candidate = target.with_name(f"{stem}-{counter}{suffix}")
        counter += 1
    return candidate


def normalize_typora_highlights(text: str) -> tuple[str, int]:
    in_fence = False
    fence_marker = ""
    total_replacements = 0
    normalized_lines: list[str] = []

    for line in text.splitlines(keepends=True):
        stripped = line.lstrip()
        fence_match = FENCE_PATTERN.match(stripped)
        if fence_match:
            marker = fence_match.group(1)
            if not in_fence:
                in_fence = True
                fence_marker = marker
            elif marker == fence_marker:
                in_fence = False
                fence_marker = ""
            normalized_lines.append(line)
            continue

        if in_fence:
            normalized_lines.append(line)
            continue

        updated_line, replacements = TYPORA_HIGHLIGHT_PATTERN.subn(r"<mark>\1</mark>", line)
        total_replacements += replacements
        normalized_lines.append(updated_line)

    return "".join(normalized_lines), total_replacements


def rewrite_markdown_file(
    markdown_file: Path,
    repo_root: Path,
    rename_map: dict[Path, Path],
    dry_run: bool,
) -> tuple[int, int]:
    text = markdown_file.read_text(encoding="utf-8")
    replacements: list[tuple[str, str]] = []

    for match in IMAGE_PATTERN.finditer(text):
        raw_path = match.group(1)
        path_text = normalize_path_text(raw_path)
        if not is_target_image(path_text):
            continue

        resolved = (markdown_file.parent / unquote(path_text)).resolve()
        try:
            resolved.relative_to(repo_root)
        except ValueError:
            continue
        if not resolved.exists():
            continue

        if SAFE_BASENAME_PATTERN.match(resolved.name):
            continue

        new_target = rename_map.get(resolved)
        if new_target is None:
            new_target = build_safe_name(resolved)
            rename_map[resolved] = new_target

        relative = os.path.relpath(new_target, markdown_file.parent).replace(os.sep, "/")
        replacements.append((raw_path, relative))

    updated = text
    for old, new in replacements:
        updated = updated.replace(f"]({old})", f"]({new})")

    updated, highlight_updates = normalize_typora_highlights(updated)

    if updated != text and not dry_run:
        markdown_file.write_text(updated, encoding="utf-8")

    return len(replacements), highlight_updates


def apply_renames(rename_map: dict[Path, Path], dry_run: bool) -> int:
    count = 0
    for old_path, new_path in sorted(rename_map.items()):
        if old_path == new_path:
            continue
        count += 1
        if dry_run:
            continue
        old_path.rename(new_path)
    return count


def main() -> int:
    parser = argparse.ArgumentParser(
        description="Normalize markdown authoring output, including unsafe local image filenames and Typora highlights."
    )
    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="Show what would change without writing files.",
    )
    parser.add_argument(
        "--roots",
        nargs="+",
        default=["content", "archetypes"],
        help="Directories to scan for markdown files.",
    )
    args = parser.parse_args()

    repo_root = Path(__file__).resolve().parent.parent
    rename_map: dict[Path, Path] = {}
    updated_refs = 0
    updated_highlights = 0

    for root_name in args.roots:
        root = repo_root / root_name
        if not root.exists():
            continue
        for markdown_file in iter_markdown_files(root):
            image_ref_count, highlight_count = rewrite_markdown_file(
                markdown_file,
                repo_root,
                rename_map,
                args.dry_run,
            )
            updated_refs += image_ref_count
            updated_highlights += highlight_count

    renamed_files = apply_renames(rename_map, args.dry_run)

    if renamed_files or updated_refs or updated_highlights:
        mode = "Would update" if args.dry_run else "Updated"
        print(
            f"{mode} {updated_refs} markdown image reference(s), "
            f"{updated_highlights} Typora highlight(s), across {renamed_files} image file(s)."
        )
        for old_path, new_path in sorted(rename_map.items()):
            print(f"- {old_path.relative_to(repo_root)} -> {new_path.relative_to(repo_root)}")
    else:
        print("No markdown normalization changes needed.")

    return 0


if __name__ == "__main__":
    sys.exit(main())
