#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "$0")/../.." && pwd)"
BRIDGE_SCRIPT="$ROOT_DIR/scripts/write-studio/ipic-bridge.mjs"
UPLOADER_SCRIPT="$ROOT_DIR/scripts/write-studio/ipic_uploader.swift"
TEST_IMAGE="$ROOT_DIR/content/post/bundle/building.png"
BRIDGE_URL="http://127.0.0.1:44777"

echo "[1/5] Check iPic app..."
if [[ -d "/Applications/iPic.app" ]]; then
  echo "  - iPic.app found"
else
  echo "  - iPic.app NOT found at /Applications/iPic.app"
fi

if ! pgrep -f "/Applications/iPic.app/Contents/MacOS/iPic" >/dev/null 2>&1; then
  echo "  - iPic not running, launching..."
  open -a iPic || true
  sleep 1
else
  echo "  - iPic is running"
fi

echo "[2/5] Check bridge health..."
if curl -fsS -m 2 "$BRIDGE_URL/health" >/dev/null 2>&1; then
  echo "  - bridge already running"
else
  echo "  - bridge not running, starting..."
  nohup node "$BRIDGE_SCRIPT" >/tmp/write-studio-ipic-bridge.log 2>&1 &
  sleep 1
fi

if curl -fsS -m 3 "$BRIDGE_URL/health"; then
  echo
else
  echo "  - bridge health check failed"
fi

echo "[3/5] Direct uploader test (swift -> iPic)..."
if [[ -f "$TEST_IMAGE" ]]; then
  swift "$UPLOADER_SCRIPT" "$TEST_IMAGE" 2>&1 | tail -n 1
else
  echo "  - test image missing: $TEST_IMAGE"
fi

echo "[4/5] Bridge upload test..."
if [[ -f "$TEST_IMAGE" ]]; then
  node <<'NODE'
const http = require("http");
const fs = require("fs");
const path = require("path");
const root = process.cwd();
const imagePath = path.join(root, "content/post/bundle/building.png");
const data = fs.readFileSync(imagePath);
const payload = JSON.stringify({
  name: "building.png",
  dataUrl: "data:image/png;base64," + data.toString("base64"),
});

const req = http.request(
  {
    hostname: "127.0.0.1",
    port: 44777,
    path: "/upload-ipic",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Content-Length": Buffer.byteLength(payload),
    },
  },
  (res) => {
    let body = "";
    res.on("data", (chunk) => (body += chunk));
    res.on("end", () => {
      console.log(`status=${res.statusCode} body=${body}`);
    });
  }
);
req.on("error", (err) => console.log(`error=${err.message}`));
req.write(payload);
req.end();
NODE
else
  echo "  - skip bridge upload test (test image not found)"
fi

echo "[5/5] Done."
echo "If status=200 and body has https://p.ipic.vip/... then iPic integration is OK."
