#!/usr/bin/env python3
from __future__ import annotations

import signal
import subprocess
import sys
import time
from pathlib import Path


REPO_ROOT = Path(__file__).resolve().parent.parent
NORMALIZER = REPO_ROOT / "scripts" / "normalize_markdown_images.py"
WATCH_ROOTS = [
    REPO_ROOT / "content",
    REPO_ROOT / "archetypes",
    REPO_ROOT / "static" / "images",
]
WATCH_SUFFIXES = {".md", ".png", ".jpg", ".jpeg", ".webp", ".gif", ".svg", ".avif", ".jxl"}


def run_normalizer() -> None:
    result = subprocess.run(
        [sys.executable, str(NORMALIZER)],
        cwd=REPO_ROOT,
        check=False,
        text=True,
    )
    if result.returncode != 0:
        raise SystemExit(result.returncode)


def snapshot_files() -> dict[Path, int]:
    state: dict[Path, int] = {}
    for root in WATCH_ROOTS:
        if not root.exists():
            continue
        for path in root.rglob("*"):
            if not path.is_file():
                continue
            if path.suffix.lower() not in WATCH_SUFFIXES:
                continue
            try:
                state[path] = path.stat().st_mtime_ns
            except FileNotFoundError:
                continue
    return state


def start_hugo() -> subprocess.Popen[bytes]:
    return subprocess.Popen(
        [
            "hugo",
            "server",
            "-D",
            "--bind",
            "127.0.0.1",
            "--port",
            "1313",
            "--baseURL",
            "http://127.0.0.1:1313/",
        ],
        cwd=REPO_ROOT,
    )


def main() -> int:
    run_normalizer()
    state = snapshot_files()
    hugo = start_hugo()

    def stop(_signum: int, _frame: object) -> None:
        if hugo.poll() is None:
            hugo.send_signal(signal.SIGINT)
            try:
                hugo.wait(timeout=5)
            except subprocess.TimeoutExpired:
                hugo.kill()
        raise SystemExit(0)

    signal.signal(signal.SIGINT, stop)
    signal.signal(signal.SIGTERM, stop)

    try:
        while True:
            if hugo.poll() is not None:
                return int(hugo.returncode or 0)
            time.sleep(1.0)
            new_state = snapshot_files()
            if new_state != state:
                run_normalizer()
                state = snapshot_files()
    finally:
        if hugo.poll() is None:
            hugo.send_signal(signal.SIGINT)
            try:
                hugo.wait(timeout=5)
            except subprocess.TimeoutExpired:
                hugo.kill()


if __name__ == "__main__":
    raise SystemExit(main())
