#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
PORT="${WRITE_STUDIO_PORT:-4310}"
HOST="${WRITE_STUDIO_HOST:-127.0.0.1}"
URL="http://${HOST}:${PORT}/write-studio/"
LOG_FILE="${WRITE_STUDIO_LOG_FILE:-/tmp/write-studio-webapp.log}"
BROWSER_APP="${WRITE_STUDIO_BROWSER_APP:-}"

is_listening() {
  lsof -nP -iTCP:"${PORT}" -sTCP:LISTEN >/dev/null 2>&1
}

if ! is_listening; then
  echo "Starting Write Studio local server on port ${PORT}..."
  (
    cd "${ROOT_DIR}"
    nohup node scripts/write-studio/cloud-webapp-server.mjs >"${LOG_FILE}" 2>&1 &
  )
fi

ready=0
for _ in $(seq 1 40); do
  if curl -fsS "${URL}" >/dev/null 2>&1; then
    ready=1
    break
  fi
  sleep 0.25
done

if [[ "${ready}" != "1" ]]; then
  echo "Failed to start Write Studio server: ${URL}"
  if [[ -f "${LOG_FILE}" ]]; then
    echo "--- ${LOG_FILE} ---"
    tail -n 80 "${LOG_FILE}" || true
  fi
  exit 1
fi

if command -v open >/dev/null 2>&1; then
  if [[ -n "${BROWSER_APP}" ]]; then
    open -a "${BROWSER_APP}" "${URL}"
  else
    open "${URL}"
  fi
elif command -v xdg-open >/dev/null 2>&1; then
  xdg-open "${URL}" >/dev/null 2>&1 || true
fi

echo "Write Studio is ready: ${URL}"
