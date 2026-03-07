#!/usr/bin/env node

import { createServer } from "node:http";
import { tmpdir } from "node:os";
import { promises as fs } from "node:fs";
import { randomUUID } from "node:crypto";
import path from "node:path";
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { fileURLToPath } from "node:url";

const execFileAsync = promisify(execFile);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const swiftUploaderPath = path.join(__dirname, "ipic_uploader.swift");
const host = "127.0.0.1";
const port = Number(process.env.WRITE_STUDIO_IPIC_BRIDGE_PORT || 44777);
const maxBodyBytes = 40 * 1024 * 1024;

function withCorsHeaders(res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
}

function sendJson(res, code, payload) {
  withCorsHeaders(res);
  res.writeHead(code, { "Content-Type": "application/json; charset=utf-8" });
  res.end(JSON.stringify(payload));
}

async function readJsonBody(req) {
  return new Promise((resolve, reject) => {
    let size = 0;
    const chunks = [];
    req.on("data", (chunk) => {
      size += chunk.length;
      if (size > maxBodyBytes) {
        reject(new Error("Request body is too large."));
        req.destroy();
        return;
      }
      chunks.push(chunk);
    });
    req.on("end", () => {
      try {
        const raw = Buffer.concat(chunks).toString("utf8");
        resolve(raw ? JSON.parse(raw) : {});
      } catch (error) {
        reject(new Error("Invalid JSON payload."));
      }
    });
    req.on("error", reject);
  });
}

function decodeDataUrl(dataUrl) {
  const match = String(dataUrl || "").match(/^data:([^;]+);base64,(.+)$/);
  if (!match) {
    throw new Error("Invalid dataUrl.");
  }
  const mime = match[1].toLowerCase();
  if (!mime.startsWith("image/")) {
    throw new Error("Only image files are supported.");
  }
  return Buffer.from(match[2], "base64");
}

function sanitizeFileName(name) {
  const cleaned = String(name || "image.png")
    .replace(/[\\/:*?"<>|]/g, "-")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "");
  return cleaned || "image.png";
}

async function uploadByIpic(tempFilePath) {
  let stdout = "";
  let stderr = "";

  try {
    const result = await execFileAsync("swift", [swiftUploaderPath, tempFilePath], {
      timeout: 90000,
      maxBuffer: 2 * 1024 * 1024,
    });
    stdout = result.stdout || "";
    stderr = result.stderr || "";
  } catch (error) {
    stdout = (error && typeof error.stdout === "string" ? error.stdout : "") || "";
    stderr = (error && typeof error.stderr === "string" ? error.stderr : "") || "";
  }

  let parsed = null;
  if (stdout.trim()) {
    try {
      parsed = JSON.parse(stdout.trim());
    } catch (error) {
      parsed = null;
    }
  }

  if (!parsed || !parsed.ok || typeof parsed.url !== "string" || !parsed.url.trim()) {
    const reason = parsed && parsed.error ? String(parsed.error) : "Unknown uploader error.";
    const details =
      parsed && parsed.details
        ? ` ${String(parsed.details)}`
        : stderr.trim()
          ? ` ${stderr.trim()}`
          : "";
    throw new Error(reason + details);
  }

  return parsed.url.trim();
}

async function handleUpload(req, res) {
  let tempFilePath = "";
  try {
    const body = await readJsonBody(req);
    const dataBuffer = decodeDataUrl(body.dataUrl);
    const safeName = sanitizeFileName(body.name);
    const tempName = `write-studio-ipic-${Date.now()}-${randomUUID()}-${safeName}`;
    tempFilePath = path.join(tmpdir(), tempName);
    await fs.writeFile(tempFilePath, dataBuffer);

    const url = await uploadByIpic(tempFilePath);
    sendJson(res, 200, { ok: true, url });
  } catch (error) {
    sendJson(res, 500, { ok: false, error: error instanceof Error ? error.message : "Upload failed." });
  } finally {
    if (tempFilePath) {
      await fs.rm(tempFilePath, { force: true }).catch(() => {});
    }
  }
}

const server = createServer(async (req, res) => {
  const method = req.method || "GET";
  const pathname = new URL(req.url || "/", "http://localhost").pathname;

  if (method === "OPTIONS") {
    withCorsHeaders(res);
    res.writeHead(204);
    res.end();
    return;
  }

  if (method === "GET" && pathname === "/health") {
    sendJson(res, 200, { ok: true, service: "write-studio-ipic-bridge", port });
    return;
  }

  if (method === "POST" && pathname === "/upload-ipic") {
    await handleUpload(req, res);
    return;
  }

  sendJson(res, 404, { ok: false, error: "Not found." });
});

server.listen(port, host, () => {
  console.log(`Write Studio iPic bridge running at http://${host}:${port}`);
  console.log("Press Ctrl+C to stop.");
});
