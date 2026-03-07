#!/usr/bin/env node

import { createServer } from "node:http";
import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { randomUUID } from "node:crypto";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..", "..");
const staticDir = path.join(projectRoot, "static", "write-studio");

const apiPrefix = "/write-studio-api";
const host = process.env.WRITE_STUDIO_HOST || "0.0.0.0";
const port = Number(process.env.WRITE_STUDIO_PORT || 4310);
const maxBodyBytes = Number(process.env.WRITE_STUDIO_MAX_BODY_BYTES || 60 * 1024 * 1024);
const authToken = (process.env.WRITE_STUDIO_TOKEN || "").trim();
const dataDir = process.env.WRITE_STUDIO_DATA_DIR || path.join(projectRoot, ".write-studio-cloud");
const dbPath = path.join(dataDir, "db.json");
const assetsDir = path.join(dataDir, "assets");

const contentTypes = new Map([
  [".html", "text/html; charset=utf-8"],
  [".js", "application/javascript; charset=utf-8"],
  [".css", "text/css; charset=utf-8"],
  [".json", "application/json; charset=utf-8"],
  [".svg", "image/svg+xml"],
  [".png", "image/png"],
  [".jpg", "image/jpeg"],
  [".jpeg", "image/jpeg"],
  [".gif", "image/gif"],
  [".webp", "image/webp"],
  [".ico", "image/x-icon"],
]);

async function ensureDataDirs() {
  await fs.mkdir(dataDir, { recursive: true });
  await fs.mkdir(assetsDir, { recursive: true });
}

async function loadDb() {
  await ensureDataDirs();
  try {
    const raw = await fs.readFile(dbPath, "utf8");
    const parsed = JSON.parse(raw);
    return {
      docs: Array.isArray(parsed.docs) ? parsed.docs : [],
      assets: Array.isArray(parsed.assets) ? parsed.assets : [],
    };
  } catch (error) {
    if (error && error.code === "ENOENT") {
      return { docs: [], assets: [] };
    }
    throw error;
  }
}

async function saveDb(db) {
  await ensureDataDirs();
  const tmpPath = dbPath + ".tmp";
  await fs.writeFile(tmpPath, JSON.stringify(db, null, 2), "utf8");
  await fs.rename(tmpPath, dbPath);
}

function addCors(res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, X-Write-Studio-Token");
}

function sendJson(res, status, payload) {
  addCors(res);
  res.writeHead(status, { "Content-Type": "application/json; charset=utf-8" });
  res.end(JSON.stringify(payload));
}

function sendText(res, status, text) {
  addCors(res);
  res.writeHead(status, { "Content-Type": "text/plain; charset=utf-8" });
  res.end(text);
}

function isAuthorized(req) {
  if (!authToken) {
    return true;
  }
  const provided = String(req.headers["x-write-studio-token"] || "").trim();
  return provided && provided === authToken;
}

function requireAuth(req, res) {
  if (isAuthorized(req)) {
    return true;
  }
  sendJson(res, 401, { ok: false, error: "Unauthorized. Missing or invalid X-Write-Studio-Token." });
  return false;
}

function getPublicBaseUrl(req) {
  const forwardedProto = String(req.headers["x-forwarded-proto"] || "").split(",")[0].trim();
  const proto = forwardedProto || "http";
  const hostHeader = String(req.headers["x-forwarded-host"] || req.headers.host || `127.0.0.1:${port}`).split(",")[0].trim();
  return `${proto}://${hostHeader}`;
}

async function readJsonBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    let size = 0;
    req.on("data", (chunk) => {
      size += chunk.length;
      if (size > maxBodyBytes) {
        reject(new Error("Payload too large."));
        req.destroy();
        return;
      }
      chunks.push(chunk);
    });
    req.on("end", () => {
      try {
        const text = Buffer.concat(chunks).toString("utf8");
        resolve(text ? JSON.parse(text) : {});
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
  const mimeType = match[1].toLowerCase();
  if (!mimeType.startsWith("image/")) {
    throw new Error("Only image/* is supported.");
  }
  return { mimeType, buffer: Buffer.from(match[2], "base64") };
}

function extensionFromMime(mimeType) {
  if (mimeType === "image/jpeg") {
    return ".jpg";
  }
  if (mimeType === "image/png") {
    return ".png";
  }
  if (mimeType === "image/gif") {
    return ".gif";
  }
  if (mimeType === "image/webp") {
    return ".webp";
  }
  if (mimeType === "image/svg+xml") {
    return ".svg";
  }
  if (mimeType === "image/avif") {
    return ".avif";
  }
  return ".img";
}

function sanitizeFileName(name) {
  const safe = String(name || "image")
    .replace(/[\\/:*?"<>|]/g, "-")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "");
  return safe || "image";
}

function getDocTitle(markdown, fallback) {
  const match = String(markdown || "").match(/^title:\s*["']?([^"'\n]+)["']?/m);
  return match && match[1] ? match[1].trim() : fallback || "Untitled";
}

function getPathId(pathname, prefix) {
  if (!pathname.startsWith(prefix)) {
    return "";
  }
  return decodeURIComponent(pathname.slice(prefix.length)).replace(/^\/+/, "");
}

async function handleApi(req, res, pathname) {
  if (req.method === "GET" && pathname === `${apiPrefix}/health`) {
    sendJson(res, 200, { ok: true, authRequired: Boolean(authToken), apiPrefix });
    return;
  }

  if (req.method === "GET" && pathname === `${apiPrefix}/docs`) {
    if (!requireAuth(req, res)) {
      return;
    }
    const db = await loadDb();
    const docs = db.docs
      .slice()
      .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())
      .map((doc) => ({
        id: doc.id,
        title: doc.title,
        fileName: doc.fileName,
        createdAt: doc.createdAt,
        updatedAt: doc.updatedAt,
      }));
    sendJson(res, 200, { ok: true, docs });
    return;
  }

  if (req.method === "GET" && pathname.startsWith(`${apiPrefix}/docs/`)) {
    if (!requireAuth(req, res)) {
      return;
    }
    const id = getPathId(pathname, `${apiPrefix}/docs/`);
    const db = await loadDb();
    const doc = db.docs.find((item) => item.id === id);
    if (!doc) {
      sendJson(res, 404, { ok: false, error: "Document not found." });
      return;
    }
    sendJson(res, 200, { ok: true, doc });
    return;
  }

  if (req.method === "POST" && pathname === `${apiPrefix}/docs`) {
    if (!requireAuth(req, res)) {
      return;
    }
    const body = await readJsonBody(req);
    const content = String(body.content || "");
    if (!content.trim()) {
      sendJson(res, 400, { ok: false, error: "content is required." });
      return;
    }

    const now = new Date().toISOString();
    const db = await loadDb();
    const incomingId = String(body.id || "").trim();
    let doc = incomingId ? db.docs.find((item) => item.id === incomingId) : null;

    if (!doc) {
      doc = {
        id: incomingId || randomUUID(),
        createdAt: now,
      };
      db.docs.push(doc);
    }

    doc.fileName = String(body.fileName || doc.fileName || "untitled.md");
    doc.title = String(body.title || getDocTitle(content, doc.fileName) || "Untitled");
    doc.content = content;
    doc.updatedAt = now;
    doc.updatedFrom = String(body.updatedFrom || "");

    await saveDb(db);
    sendJson(res, 200, { ok: true, doc: { id: doc.id, title: doc.title, fileName: doc.fileName, createdAt: doc.createdAt, updatedAt: doc.updatedAt } });
    return;
  }

  if (req.method === "POST" && pathname === `${apiPrefix}/assets`) {
    if (!requireAuth(req, res)) {
      return;
    }
    const body = await readJsonBody(req);
    const { mimeType, buffer } = decodeDataUrl(body.dataUrl);
    const cleanName = sanitizeFileName(body.name || "image");
    const ext = path.extname(cleanName) || extensionFromMime(mimeType);
    const assetId = randomUUID();
    const fileName = `${assetId}${ext}`;
    const filePath = path.join(assetsDir, fileName);
    await fs.writeFile(filePath, buffer);

    const now = new Date().toISOString();
    const db = await loadDb();
    db.assets.push({
      id: assetId,
      fileName: cleanName,
      mimeType,
      size: buffer.length,
      ext,
      createdAt: now,
      storedFileName: fileName,
      docId: String(body.docId || ""),
    });
    await saveDb(db);

    const url = `${getPublicBaseUrl(req)}${apiPrefix}/assets/${assetId}`;
    sendJson(res, 200, { ok: true, asset: { id: assetId, url, mimeType, size: buffer.length, createdAt: now } });
    return;
  }

  if (req.method === "GET" && pathname.startsWith(`${apiPrefix}/assets/`)) {
    const assetId = getPathId(pathname, `${apiPrefix}/assets/`);
    const db = await loadDb();
    const asset = db.assets.find((item) => item.id === assetId);
    if (!asset) {
      sendText(res, 404, "Asset not found.");
      return;
    }
    const targetFile = path.join(assetsDir, asset.storedFileName);
    try {
      const payload = await fs.readFile(targetFile);
      addCors(res);
      res.writeHead(200, {
        "Content-Type": asset.mimeType || "application/octet-stream",
        "Cache-Control": "public, max-age=31536000, immutable",
      });
      res.end(payload);
      return;
    } catch (error) {
      sendText(res, 404, "Asset file missing.");
      return;
    }
  }

  sendJson(res, 404, { ok: false, error: "API route not found." });
}

async function serveStaticWriteStudio(res, pathname) {
  const relative = pathname.replace(/^\/write-studio\/?/, "");
  const requested = relative || "index.html";
  const normalized = path.normalize(requested).replace(/^(\.\.[/\\])+/, "");
  const fullPath = path.join(staticDir, normalized);
  if (!fullPath.startsWith(staticDir)) {
    sendText(res, 403, "Forbidden");
    return;
  }
  try {
    const content = await fs.readFile(fullPath);
    const ext = path.extname(fullPath).toLowerCase();
    const contentType = contentTypes.get(ext) || "application/octet-stream";
    addCors(res);
    res.writeHead(200, { "Content-Type": contentType });
    res.end(content);
  } catch (error) {
    sendText(res, 404, "Not found");
  }
}

const server = createServer(async (req, res) => {
  const method = req.method || "GET";
  const url = new URL(req.url || "/", "http://localhost");
  const pathname = url.pathname;

  if (method === "OPTIONS") {
    addCors(res);
    res.writeHead(204);
    res.end();
    return;
  }

  try {
    if (pathname === "/" || pathname === "/write-studio") {
      addCors(res);
      res.writeHead(302, { Location: "/write-studio/" });
      res.end();
      return;
    }

    if (pathname.startsWith(apiPrefix)) {
      await handleApi(req, res, pathname);
      return;
    }

    if (pathname.startsWith("/write-studio/")) {
      await serveStaticWriteStudio(res, pathname);
      return;
    }

    sendText(res, 404, "Not found");
  } catch (error) {
    console.error("Server error:", error);
    sendJson(res, 500, { ok: false, error: error instanceof Error ? error.message : "Internal error." });
  }
});

server.listen(port, host, () => {
  console.log(`Write Studio Cloud WebApp listening on http://${host}:${port}`);
  console.log(`Web UI: http://127.0.0.1:${port}/write-studio/`);
  console.log(`API health: http://127.0.0.1:${port}${apiPrefix}/health`);
  if (!authToken) {
    console.log("Warning: WRITE_STUDIO_TOKEN is empty. API write endpoints are unauthenticated.");
  }
});
