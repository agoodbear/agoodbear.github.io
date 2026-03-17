const crypto = require("node:crypto");
const nodemailer = require("nodemailer");
const admin = require("firebase-admin");
const functions = require("firebase-functions");

admin.initializeApp();

const rtdb = admin.database();
const bucket = admin.storage().bucket();

const DOCS_PATH = "/writeStudio/docs";
const ASSETS_PATH = "/writeStudio/assets";
const PDF_GUIDELINES_PATH = "/pdfGuidelines/docs";
const SUBSCRIBERS_PATH = "/subscriptions/emails";
const SUBSCRIBERS_META_PATH = "/subscriptions/meta";
const NOTIFIED_POSTS_PATH = "/subscriptions/notifiedPosts";
const API_PREFIX = "/write-studio-api";
const MAX_BODY_BYTES = 60 * 1024 * 1024;
const SITE_URL = "https://agoodbear.github.io";
const SITE_NAME = "急診熊心聲部落格";
const UNSUBSCRIBE_SECRET = process.env.UNSUBSCRIBE_SECRET || "default-unsub-secret-change-me";

function getToken() {
  return String(process.env.WRITE_STUDIO_TOKEN || "").trim();
}

function addCors(res) {
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.set("Access-Control-Allow-Headers", "Content-Type, X-Write-Studio-Token");
}

function sendJson(res, status, payload) {
  addCors(res);
  res.status(status).json(payload);
}

function normalizePath(reqPath) {
  const p = String(reqPath || "").replace(/\/+$/, "");
  return p === "" ? "/" : p;
}

function isAuthorized(req) {
  const required = getToken();
  if (!required) {
    return true;
  }
  const provided = String(req.get("X-Write-Studio-Token") || "").trim();
  return provided && provided === required;
}

function requireAuth(req, res) {
  if (isAuthorized(req)) {
    return true;
  }
  sendJson(res, 401, { ok: false, error: "Unauthorized. Missing or invalid X-Write-Studio-Token." });
  return false;
}

function parseJsonBody(req) {
  // Prefer Firebase-provided parsed body/rawBody to avoid hanging on already-consumed streams.
  if (req.body && typeof req.body === "object" && !Buffer.isBuffer(req.body)) {
    return Promise.resolve(req.body);
  }
  if (typeof req.body === "string") {
    try {
      return Promise.resolve(req.body ? JSON.parse(req.body) : {});
    } catch (error) {
      return Promise.reject(new Error("Invalid JSON payload."));
    }
  }
  if (req.rawBody && Buffer.isBuffer(req.rawBody)) {
    if (req.rawBody.length > MAX_BODY_BYTES) {
      return Promise.reject(new Error("Payload too large."));
    }
    try {
      const text = req.rawBody.toString("utf8");
      return Promise.resolve(text ? JSON.parse(text) : {});
    } catch (error) {
      return Promise.reject(new Error("Invalid JSON payload."));
    }
  }

  return new Promise((resolve, reject) => {
    let size = 0;
    const chunks = [];
    let finished = false;
    const timer = setTimeout(() => {
      if (!finished) {
        finished = true;
        reject(new Error("Request body timeout."));
      }
    }, 15000);

    req.on("data", (chunk) => {
      if (finished) return;
      size += chunk.length;
      if (size > MAX_BODY_BYTES) {
        finished = true;
        clearTimeout(timer);
        reject(new Error("Payload too large."));
        req.destroy();
        return;
      }
      chunks.push(chunk);
    });
    req.on("end", () => {
      if (finished) return;
      finished = true;
      clearTimeout(timer);
      try {
        const text = Buffer.concat(chunks).toString("utf8");
        resolve(text ? JSON.parse(text) : {});
      } catch (error) {
        reject(new Error("Invalid JSON payload."));
      }
    });
    req.on("error", (err) => {
      if (finished) return;
      finished = true;
      clearTimeout(timer);
      reject(err);
    });
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
  if (mimeType === "image/jpeg") return ".jpg";
  if (mimeType === "image/png") return ".png";
  if (mimeType === "image/gif") return ".gif";
  if (mimeType === "image/webp") return ".webp";
  if (mimeType === "image/svg+xml") return ".svg";
  if (mimeType === "image/avif") return ".avif";
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

function toAssetDownloadUrl(objectPath, token) {
  const encoded = encodeURIComponent(objectPath);
  return `https://firebasestorage.googleapis.com/v0/b/${bucket.name}/o/${encoded}?alt=media&token=${token}`;
}

function getPublicApiBase(req) {
  const proto = String(req.get("x-forwarded-proto") || "https")
    .split(",")[0]
    .trim();
  const host = String(req.get("x-forwarded-host") || req.get("host") || "")
    .split(",")[0]
    .trim();
  if (!host) {
    return API_PREFIX;
  }
  return `${proto}://${host}${API_PREFIX}`;
}

function clampNumber(value, min, max) {
  const n = Number(value);
  if (!Number.isFinite(n)) {
    return min;
  }
  return Math.max(min, Math.min(max, n));
}

function sanitizeText(value, fallback = "", maxLength = 12000) {
  const text = String(value ?? fallback).trim();
  return text.slice(0, maxLength);
}

function normalizeEmail(email) {
  return String(email || "").trim().toLowerCase();
}

function isValidEmail(email) {
  const value = normalizeEmail(email);
  if (!value || value.length > 254) {
    return false;
  }
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/u.test(value);
}

function normalizeStoredHighlightTags(value) {
  const source = Array.isArray(value) ? value.join(" ") : String(value || "");
  const unique = new Set();
  source
    .split(/[\s,，、;；]+/u)
    .map((item) => item.trim().replace(/^#+/u, ""))
    .filter(Boolean)
    .forEach((item) => {
      unique.add(sanitizeText(item, "", 48));
    });
  return Array.from(unique).filter(Boolean).slice(0, 12);
}

function normalizeStoredHighlightQuad(input) {
  const quad = input && typeof input === "object" ? input : {};
  const left = clampNumber(quad.left, 0, 100);
  const top = clampNumber(quad.top, 0, 100);
  const width = clampNumber(quad.width, 0.1, Math.max(0.1, 100 - left));
  const height = clampNumber(quad.height, 0.1, Math.max(0.1, 100 - top));
  return {
    left,
    top,
    width,
    height,
  };
}

function normalizeStoredGuidelineDoc(docId, value) {
  const doc = value && typeof value === "object" ? value : {};
  const highlightsSource = Array.isArray(doc.highlights)
    ? doc.highlights
    : Object.values(doc.highlights || {});
  const highlights = highlightsSource
    .filter((item) => item && typeof item === "object")
    .map((item, index) => {
      const quads = Array.isArray(item.quads)
        ? item.quads
            .filter((quad) => quad && typeof quad === "object")
            .map((quad) => normalizeStoredHighlightQuad(quad))
        : [];
      const bounds = quads.length
        ? quads.reduce(
            (acc, quad) => ({
              left: Math.min(acc.left, quad.left),
              top: Math.min(acc.top, quad.top),
              right: Math.max(acc.right, quad.left + quad.width),
              bottom: Math.max(acc.bottom, quad.top + quad.height),
            }),
            { left: 100, top: 100, right: 0, bottom: 0 }
          )
        : null;

      return {
        id: sanitizeText(item.id, `highlight-${index + 1}`, 120) || `highlight-${index + 1}`,
        page: Math.max(1, Math.round(clampNumber(item.page || item.pageIndex || 1, 1, 9999))),
        left: bounds ? bounds.left : clampNumber(item.left, 0, 100),
        top: bounds ? bounds.top : clampNumber(item.top, 0, 100),
        width: bounds ? Math.max(0.1, bounds.right - bounds.left) : clampNumber(item.width, 0.5, 100),
        height: bounds ? Math.max(0.1, bounds.bottom - bounds.top) : clampNumber(item.height, 0.5, 100),
        quads,
        color: sanitizeText(item.color, "#78c4b7", 32) || "#78c4b7",
        label: sanitizeText(item.label, "", 240),
        quote: sanitizeText(item.quote, "", 12000),
        note: sanitizeText(item.note, "", 40000),
        clipImage: sanitizeText(item.clipImage || item.imageDataUrl, "", 2000000),
        tags: normalizeStoredHighlightTags(item.tags || item.tagList || item.tag || ""),
        createdAt: sanitizeText(item.createdAt, "", 80),
        updatedAt: sanitizeText(item.updatedAt, "", 80),
      };
    })
    .sort((a, b) => {
      if (a.page !== b.page) {
        return a.page - b.page;
      }
      if (a.top !== b.top) {
        return a.top - b.top;
      }
      return String(a.id).localeCompare(String(b.id));
    });

  return {
    id: docId,
    title: sanitizeText(doc.title, "Untitled Guideline", 240) || "Untitled Guideline",
    pdfUrl: sanitizeText(doc.pdfUrl, "", 4000),
    meta: sanitizeText(doc.meta, "", 240),
    tag: sanitizeText(doc.tag, "", 120),
    tone: sanitizeText(doc.tone, "mint", 40) || "mint",
    description: sanitizeText(doc.description, "", 4000),
    articlePath: sanitizeText(doc.articlePath, "", 1000),
    createdAt: sanitizeText(doc.createdAt, "", 80),
    updatedAt: sanitizeText(doc.updatedAt, "", 80),
    highlights,
  };
}

function buildGuidelineDocPayload(input, existingDoc, forcedId) {
  const now = new Date().toISOString();
  const docId = sanitizeText(forcedId || input.id, "", 120) || crypto.randomUUID();
  const current = normalizeStoredGuidelineDoc(docId, existingDoc || {});
  const existingHighlights = new Map((current.highlights || []).map((item) => [item.id, item]));
  const incomingHighlights = Array.isArray(input.highlights) ? input.highlights : current.highlights;

  const highlights = incomingHighlights
    .filter((item) => item && typeof item === "object")
    .map((item, index) => {
      const preferredId = sanitizeText(item.id, "", 120);
      const existing = preferredId ? existingHighlights.get(preferredId) : null;
      const highlightId = preferredId || crypto.randomUUID();
      const quads = Array.isArray(item.quads)
        ? item.quads
            .filter((quad) => quad && typeof quad === "object")
            .map((quad) => normalizeStoredHighlightQuad(quad))
        : existing && Array.isArray(existing.quads)
          ? existing.quads.map((quad) => normalizeStoredHighlightQuad(quad))
          : [];
      const bounds = quads.length
        ? quads.reduce(
            (acc, quad) => ({
              left: Math.min(acc.left, quad.left),
              top: Math.min(acc.top, quad.top),
              right: Math.max(acc.right, quad.left + quad.width),
              bottom: Math.max(acc.bottom, quad.top + quad.height),
            }),
            { left: 100, top: 100, right: 0, bottom: 0 }
          )
        : null;
      return {
        id: highlightId,
        page: Math.max(1, Math.round(clampNumber(item.page || item.pageIndex || 1, 1, 9999))),
        left: bounds ? bounds.left : clampNumber(item.left, 0, 100),
        top: bounds ? bounds.top : clampNumber(item.top, 0, 100),
        width: bounds ? Math.max(0.1, bounds.right - bounds.left) : clampNumber(item.width, 0.5, 100),
        height: bounds ? Math.max(0.1, bounds.bottom - bounds.top) : clampNumber(item.height, 0.5, 100),
        quads,
        color: sanitizeText(item.color, existing && existing.color ? existing.color : "#78c4b7", 32) || "#78c4b7",
        label: sanitizeText(item.label, existing && existing.label ? existing.label : "", 240),
        quote: sanitizeText(item.quote, existing && existing.quote ? existing.quote : "", 12000),
        note: sanitizeText(item.note, existing && existing.note ? existing.note : "", 40000),
        clipImage: sanitizeText(item.clipImage || item.imageDataUrl, existing && existing.clipImage ? existing.clipImage : "", 2000000),
        tags: normalizeStoredHighlightTags(item.tags || item.tagList || item.tag || (existing && existing.tags ? existing.tags : "")),
        createdAt: existing && existing.createdAt ? existing.createdAt : now,
        updatedAt: now,
        order: index,
      };
    })
    .sort((a, b) => a.order - b.order)
    .map(({ order, ...item }) => item);

  return {
    id: docId,
    title: sanitizeText(input.title, current.title || "Untitled Guideline", 240) || "Untitled Guideline",
    pdfUrl: sanitizeText(input.pdfUrl, current.pdfUrl || "", 4000),
    meta: sanitizeText(input.meta, current.meta || "", 240),
    tag: sanitizeText(input.tag, current.tag || "", 120),
    tone: sanitizeText(input.tone, current.tone || "mint", 40) || "mint",
    description: sanitizeText(input.description, current.description || "", 4000),
    articlePath: sanitizeText(input.articlePath, current.articlePath || "", 1000),
    createdAt: current.createdAt || now,
    updatedAt: now,
    highlights,
  };
}

exports.writeStudioApi = functions
  .region("asia-east1")
  .https.onRequest(async (req, res) => {
    addCors(res);
    if (req.method === "OPTIONS") {
      res.status(204).send("");
      return;
    }

    try {
      const path = normalizePath(req.path);
      const method = req.method;

      if (path === `${API_PREFIX}/health` && method === "GET") {
        sendJson(res, 200, { ok: true, authRequired: Boolean(getToken()), apiPrefix: API_PREFIX });
        return;
      }

      if (path === `${API_PREFIX}/subscribers/count` && method === "GET") {
        const countRef = rtdb.ref(`${SUBSCRIBERS_META_PATH}/count`);
        const countSnap = await countRef.get();
        let count = Number(countSnap.val() || 0);
        if (!Number.isFinite(count) || count < 0) {
          const subscribersSnap = await rtdb.ref(SUBSCRIBERS_PATH).get();
          const subscribers = subscribersSnap.exists() ? subscribersSnap.val() : {};
          count = Object.keys(subscribers || {}).length;
          await countRef.set(count);
        }
        sendJson(res, 200, { ok: true, count });
        return;
      }

      if (path === `${API_PREFIX}/subscribers` && method === "POST") {
        const body = await parseJsonBody(req);
        const email = normalizeEmail(body.email);
        if (!isValidEmail(email)) {
          sendJson(res, 400, { ok: false, error: "請輸入有效的 Email。" });
          return;
        }

        const now = new Date().toISOString();
        const sourcePath = sanitizeText(body.sourcePath, "", 320);
        const subscriberId = crypto.createHash("sha256").update(email).digest("hex");
        const requestId = crypto.randomUUID();
        const subscriberRef = rtdb.ref(`${SUBSCRIBERS_PATH}/${subscriberId}`);

        const txResult = await subscriberRef.transaction((current) => {
          if (current && typeof current === "object") {
            return current;
          }
          return {
            email,
            createdAt: now,
            updatedAt: now,
            sourcePath,
            requestId,
          };
        });

        const created =
          txResult &&
          txResult.committed &&
          txResult.snapshot &&
          txResult.snapshot.exists() &&
          txResult.snapshot.child("requestId").val() === requestId;

        const countRef = rtdb.ref(`${SUBSCRIBERS_META_PATH}/count`);
        let count = 0;
        if (created) {
          const countTx = await countRef.transaction((current) => {
            const n = Number(current);
            if (Number.isFinite(n) && n >= 0) {
              return n + 1;
            }
            return 1;
          });
          count = Number(countTx.snapshot.val() || 0);
        } else {
          const countSnap = await countRef.get();
          count = Number(countSnap.val() || 0);
          if (!Number.isFinite(count) || count < 0) {
            const subscribersSnap = await rtdb.ref(SUBSCRIBERS_PATH).get();
            const subscribers = subscribersSnap.exists() ? subscribersSnap.val() : {};
            count = Object.keys(subscribers || {}).length;
            await countRef.set(count);
          }
        }

        sendJson(res, 200, {
          ok: true,
          created,
          alreadySubscribed: !created,
          count,
        });
        return;
      }

      if (path === `${API_PREFIX}/docs` && method === "GET") {
        if (!requireAuth(req, res)) return;

        const snap = await rtdb.ref(DOCS_PATH).get();
        const data = snap.exists() ? snap.val() : {};
        const docs = Object.entries(data || {})
          .map(([id, v]) => ({
            id,
            title: v.title || "Untitled",
            fileName: v.fileName || "untitled.md",
            createdAt: v.createdAt || "",
            updatedAt: v.updatedAt || "",
          }))
          .sort((a, b) => String(b.updatedAt || "").localeCompare(String(a.updatedAt || "")))
          .slice(0, 200);
        sendJson(res, 200, { ok: true, docs });
        return;
      }

      if (path.startsWith(`${API_PREFIX}/docs/`) && method === "GET") {
        if (!requireAuth(req, res)) return;

        const docId = decodeURIComponent(path.slice(`${API_PREFIX}/docs/`.length)).trim();
        const snap = await rtdb.ref(`${DOCS_PATH}/${docId}`).get();
        if (!snap.exists()) {
          sendJson(res, 404, { ok: false, error: "Document not found." });
          return;
        }
        const v = snap.val() || {};
        sendJson(res, 200, {
          ok: true,
          doc: {
            id: docId,
            title: v.title || "Untitled",
            fileName: v.fileName || "untitled.md",
            content: v.content || "",
            createdAt: v.createdAt || "",
            updatedAt: v.updatedAt || "",
            updatedFrom: v.updatedFrom || "",
          },
        });
        return;
      }

      if (path === `${API_PREFIX}/docs` && method === "POST") {
        if (!requireAuth(req, res)) return;

        const body = await parseJsonBody(req);
        const content = String(body.content || "");
        if (!content.trim()) {
          sendJson(res, 400, { ok: false, error: "content is required." });
          return;
        }

        const now = new Date().toISOString();
        const incomingId = String(body.id || "").trim();
        const docId = incomingId || crypto.randomUUID();
        const ref = rtdb.ref(`${DOCS_PATH}/${docId}`);
        const existingSnap = await ref.get();
        const existing = existingSnap.exists() ? existingSnap.val() || {} : null;
        const payload = {
          title: String(body.title || getDocTitle(content, body.fileName || "Untitled")),
          fileName: String(body.fileName || "untitled.md"),
          content,
          createdAt: existing && existing.createdAt ? existing.createdAt : now,
          updatedAt: now,
          updatedFrom: String(body.updatedFrom || ""),
        };

        await ref.set(payload);
        sendJson(res, 200, {
          ok: true,
          doc: {
            id: docId,
            title: payload.title,
            fileName: payload.fileName,
            createdAt: payload.createdAt,
            updatedAt: payload.updatedAt,
          },
        });
        return;
      }

      if (path === `${API_PREFIX}/assets` && method === "POST") {
        if (!requireAuth(req, res)) return;

        const body = await parseJsonBody(req);
        const { mimeType, buffer } = decodeDataUrl(body.dataUrl);
        const cleanName = sanitizeFileName(body.name || "image");
        const ext = /\.(png|jpg|jpeg|gif|webp|svg|avif)$/i.test(cleanName)
          ? cleanName.slice(cleanName.lastIndexOf(".")).toLowerCase()
          : extensionFromMime(mimeType);
        const assetId = crypto.randomUUID();
        const objectPath = `write-studio-assets/${assetId}${ext}`;
        const token = crypto.randomUUID();
        const now = new Date().toISOString();
        let assetUrl = "";
        const record = {
          fileName: cleanName,
          mimeType,
          size: buffer.length,
          ext,
          createdAt: now,
          docId: String(body.docId || ""),
          storageMode: "bucket",
        };

        try {
          const file = bucket.file(objectPath);
          await file.save(buffer, {
            resumable: false,
            metadata: {
              contentType: mimeType,
              metadata: {
                firebaseStorageDownloadTokens: token,
              },
            },
          });
          record.objectPath = objectPath;
          record.token = token;
          assetUrl = toAssetDownloadUrl(objectPath, token);
        } catch (error) {
          const msg = String(error && error.message ? error.message : error).toLowerCase();
          const bucketMissing =
            msg.includes("specified bucket does not exist") || msg.includes("no such bucket");
          if (!bucketMissing) {
            throw error;
          }
          if (buffer.length > 8 * 1024 * 1024) {
            throw new Error("Storage bucket is unavailable and inline fallback only supports images <= 8MB.");
          }
          record.storageMode = "rtdb-inline";
          record.inlineBase64 = buffer.toString("base64");
          assetUrl = `${getPublicApiBase(req)}/assets/${assetId}`;
          functions.logger.warn("Storage bucket unavailable. Using RTDB inline fallback.", {
            assetId,
            size: buffer.length,
          });
        }

        await rtdb.ref(`${ASSETS_PATH}/${assetId}`).set(record);
        sendJson(res, 200, {
          ok: true,
          asset: {
            id: assetId,
            url: assetUrl,
            mimeType,
            size: buffer.length,
            createdAt: now,
          },
        });
        return;
      }

      if (path.startsWith(`${API_PREFIX}/assets/`) && method === "GET") {
        const assetId = decodeURIComponent(path.slice(`${API_PREFIX}/assets/`.length)).trim();
        const snap = await rtdb.ref(`${ASSETS_PATH}/${assetId}`).get();
        if (!snap.exists()) {
          sendJson(res, 404, { ok: false, error: "Asset not found." });
          return;
        }
        const v = snap.val() || {};
        if (v.storageMode === "rtdb-inline" && v.inlineBase64) {
          const binary = Buffer.from(String(v.inlineBase64), "base64");
          res.set("Cache-Control", "public, max-age=31536000, immutable");
          res.set("Content-Type", String(v.mimeType || "application/octet-stream"));
          res.status(200).send(binary);
          return;
        }
        if (!v.objectPath || !v.token) {
          sendJson(res, 404, { ok: false, error: "Asset metadata invalid." });
          return;
        }
        res.redirect(302, toAssetDownloadUrl(v.objectPath, v.token));
        return;
      }

      if (path === `${API_PREFIX}/pdf-guidelines` && method === "GET") {
        const snap = await rtdb.ref(PDF_GUIDELINES_PATH).get();
        const data = snap.exists() ? snap.val() : {};
        const docs = Object.entries(data || {})
          .map(([id, value]) => normalizeStoredGuidelineDoc(id, value))
          .map((doc) => ({
            id: doc.id,
            title: doc.title,
            pdfUrl: doc.pdfUrl,
            meta: doc.meta,
            tag: doc.tag,
            tone: doc.tone,
            description: doc.description,
            articlePath: doc.articlePath,
            createdAt: doc.createdAt,
            updatedAt: doc.updatedAt,
            highlightCount: doc.highlights.length,
          }))
          .sort((a, b) => String(b.updatedAt || "").localeCompare(String(a.updatedAt || "")));
        sendJson(res, 200, { ok: true, docs });
        return;
      }

      if (path.startsWith(`${API_PREFIX}/pdf-guidelines/`) && method === "GET") {
        const docId = decodeURIComponent(path.slice(`${API_PREFIX}/pdf-guidelines/`.length)).trim();
        if (!docId) {
          sendJson(res, 400, { ok: false, error: "Document id is required." });
          return;
        }

        const snap = await rtdb.ref(`${PDF_GUIDELINES_PATH}/${docId}`).get();
        if (!snap.exists()) {
          sendJson(res, 404, { ok: false, error: "PDF guideline document not found." });
          return;
        }

        sendJson(res, 200, { ok: true, doc: normalizeStoredGuidelineDoc(docId, snap.val()) });
        return;
      }

      if (path === `${API_PREFIX}/pdf-guidelines` && method === "POST") {
        if (!requireAuth(req, res)) return;

        const body = await parseJsonBody(req);
        const incomingId = sanitizeText(body.id, "", 120);
        const ref = rtdb.ref(`${PDF_GUIDELINES_PATH}/${incomingId || crypto.randomUUID()}`);
        const existingSnap = await ref.get();
        const payload = buildGuidelineDocPayload(body, existingSnap.exists() ? existingSnap.val() : null, ref.key);

        if (!payload.pdfUrl) {
          sendJson(res, 400, { ok: false, error: "pdfUrl is required." });
          return;
        }

        await ref.set(payload);
        sendJson(res, 200, { ok: true, doc: normalizeStoredGuidelineDoc(payload.id, payload) });
        return;
      }

      if (path.startsWith(`${API_PREFIX}/pdf-guidelines/`) && method === "PUT") {
        if (!requireAuth(req, res)) return;

        const docId = decodeURIComponent(path.slice(`${API_PREFIX}/pdf-guidelines/`.length)).trim();
        if (!docId) {
          sendJson(res, 400, { ok: false, error: "Document id is required." });
          return;
        }

        const body = await parseJsonBody(req);
        const ref = rtdb.ref(`${PDF_GUIDELINES_PATH}/${docId}`);
        const existingSnap = await ref.get();
        const payload = buildGuidelineDocPayload(body, existingSnap.exists() ? existingSnap.val() : null, docId);

        if (!payload.pdfUrl) {
          sendJson(res, 400, { ok: false, error: "pdfUrl is required." });
          return;
        }

        await ref.set(payload);
        sendJson(res, 200, { ok: true, doc: normalizeStoredGuidelineDoc(docId, payload) });
        return;
      }

      if (path.startsWith(`${API_PREFIX}/pdf-guidelines/`) && method === "DELETE") {
        if (!requireAuth(req, res)) return;

        const docId = decodeURIComponent(path.slice(`${API_PREFIX}/pdf-guidelines/`.length)).trim();
        if (!docId) {
          sendJson(res, 400, { ok: false, error: "Document id is required." });
          return;
        }

        await rtdb.ref(`${PDF_GUIDELINES_PATH}/${docId}`).remove();
        sendJson(res, 200, { ok: true, id: docId });
        return;
      }

      // ── Unsubscribe (GET /unsubscribe?token=xxx) ──
      if (path === `${API_PREFIX}/unsubscribe` && method === "GET") {
        const token = String(req.query.token || "").trim();
        if (!token) {
          res.status(400).send(unsubscribeHtml("❌ 無效的退訂連結", false));
          return;
        }
        try {
          const decoded = verifyUnsubscribeToken(token);
          const subscriberId = crypto.createHash("sha256").update(decoded.email).digest("hex");
          const subRef = rtdb.ref(`${SUBSCRIBERS_PATH}/${subscriberId}`);
          const snap = await subRef.get();
          if (snap.exists()) {
            await subRef.remove();
            // Decrement count
            const countRef = rtdb.ref(`${SUBSCRIBERS_META_PATH}/count`);
            await countRef.transaction((current) => {
              const n = Number(current);
              return Number.isFinite(n) && n > 0 ? n - 1 : 0;
            });
          }
          res.status(200).send(unsubscribeHtml("✅ 已成功退訂，你將不再收到通知信。", true));
        } catch (err) {
          functions.logger.warn("Unsubscribe token error", err);
          res.status(400).send(unsubscribeHtml("❌ 退訂連結已過期或無效", false));
        }
        return;
      }

      // ── Notify new ECG posts (POST /notify-new-posts) ──
      if (path === `${API_PREFIX}/notify-new-posts` && method === "POST") {
        if (!requireAuth(req, res)) return;

        const body = await parseJsonBody(req);
        const ecgPosts = Array.isArray(body.posts) ? body.posts : [];
        if (ecgPosts.length === 0) {
          sendJson(res, 200, { ok: true, message: "No ECG posts provided.", notified: 0 });
          return;
        }

        // Filter out already-notified posts
        const notifiedSnap = await rtdb.ref(NOTIFIED_POSTS_PATH).get();
        const notifiedMap = notifiedSnap.exists() ? notifiedSnap.val() : {};
        const newPosts = ecgPosts.filter((p) => !notifiedMap[slugToKey(p.slug)]);

        if (newPosts.length === 0) {
          sendJson(res, 200, { ok: true, message: "All posts already notified.", notified: 0 });
          return;
        }

        // Get all subscribers
        const subscribersSnap = await rtdb.ref(SUBSCRIBERS_PATH).get();
        const subscribers = subscribersSnap.exists() ? subscribersSnap.val() : {};
        const emails = Object.values(subscribers)
          .map((s) => s.email)
          .filter(Boolean);

        if (emails.length === 0) {
          sendJson(res, 200, { ok: true, message: "No subscribers.", notified: 0 });
          return;
        }

        // Send emails
        const transporter = createMailTransporter();
        let sentCount = 0;
        const errors = [];

        for (const email of emails) {
          try {
            const unsubLink = generateUnsubscribeLink(email);
            const htmlBody = buildNotificationEmail(newPosts, unsubLink);
            const textBody = buildNotificationEmailText(newPosts, unsubLink);
            await transporter.sendMail({
              from: `"${SITE_NAME}" <${process.env.GMAIL_USER}>`,
              to: email,
              subject: `📝 ${SITE_NAME}｜新心電圖文章通知`,
              html: htmlBody,
              text: textBody,
              headers: {
                "List-Unsubscribe": `<${unsubLink}>`,
                "List-Unsubscribe-Post": "List-Unsubscribe=One-Click",
              },
            });
            sentCount++;
          } catch (err) {
            functions.logger.error(`Failed to send to ${email}`, err);
            errors.push({ email: email.slice(0, 3) + "***", error: err.message });
          }
        }

        // Mark posts as notified
        const now = new Date().toISOString();
        const updates = {};
        for (const p of newPosts) {
          updates[slugToKey(p.slug)] = { notifiedAt: now, title: p.title || p.slug };
        }
        await rtdb.ref(NOTIFIED_POSTS_PATH).update(updates);

        sendJson(res, 200, {
          ok: true,
          notified: sentCount,
          newPostsCount: newPosts.length,
          subscriberCount: emails.length,
          errors: errors.length > 0 ? errors : undefined,
        });
        return;
      }

      sendJson(res, 404, { ok: false, error: "API route not found." });
    } catch (error) {
      functions.logger.error("writeStudioApi error", error);
      sendJson(res, 500, { ok: false, error: error instanceof Error ? error.message : "Internal error." });
    }
  });

// ── Helper functions for email notifications ──

function slugToKey(slug) {
  return String(slug || "").replace(/[.#$/[\]]/g, "_");
}

function createMailTransporter() {
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });
}

function generateUnsubscribeToken(email) {
  const payload = JSON.stringify({ email: normalizeEmail(email), exp: Date.now() + 90 * 24 * 60 * 60 * 1000 });
  const hmac = crypto.createHmac("sha256", UNSUBSCRIBE_SECRET).update(payload).digest("hex");
  return Buffer.from(`${payload}|${hmac}`).toString("base64url");
}

function verifyUnsubscribeToken(token) {
  const raw = Buffer.from(token, "base64url").toString("utf8");
  const sepIdx = raw.lastIndexOf("|");
  if (sepIdx < 0) throw new Error("Invalid token format.");
  const payload = raw.slice(0, sepIdx);
  const sig = raw.slice(sepIdx + 1);
  const expected = crypto.createHmac("sha256", UNSUBSCRIBE_SECRET).update(payload).digest("hex");
  if (!crypto.timingSafeEqual(Buffer.from(sig), Buffer.from(expected))) {
    throw new Error("Invalid signature.");
  }
  const data = JSON.parse(payload);
  if (data.exp && Date.now() > data.exp) {
    throw new Error("Token expired.");
  }
  return data;
}

function generateUnsubscribeLink(email) {
  const token = generateUnsubscribeToken(email);
  return `https://asia-east1-agoodbear-website.cloudfunctions.net/writeStudioApi/write-studio-api/unsubscribe?token=${encodeURIComponent(token)}`;
}

function unsubscribeHtml(message, success) {
  return `<!DOCTYPE html><html lang="zh-TW"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>退訂 - ${SITE_NAME}</title>
<style>body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;display:flex;justify-content:center;align-items:center;min-height:100vh;margin:0;background:#f8f9fa}
.card{background:#fff;border-radius:12px;padding:2rem;max-width:400px;text-align:center;box-shadow:0 2px 8px rgba(0,0,0,0.1)}
.icon{font-size:3rem;margin-bottom:1rem}
a{color:#0d6efd;text-decoration:none}</style></head>
<body><div class="card"><div class="icon">${success ? "👋" : "⚠️"}</div>
<h2>${message}</h2>
<p style="margin-top:1rem"><a href="${SITE_URL}">← 回到${SITE_NAME}</a></p></div></body></html>`;
}

function buildNotificationEmail(posts, unsubLink) {
  const postListHtml = posts.map((p) => {
    const url = `${SITE_URL}/post/${p.slug}/`;
    return `<li style="margin-bottom:12px"><a href="${url}" style="color:#0d6efd;text-decoration:none;font-weight:600">${escapeHtml(p.title || p.slug)}</a></li>`;
  }).join("");

  return `<!DOCTYPE html><html lang="zh-TW"><head><meta charset="utf-8"></head><body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;max-width:560px;margin:0 auto;padding:20px;color:#333">
<h2 style="color:#0d6efd">📝 新心電圖文章通知</h2>
<p>嗨，${SITE_NAME}有新的心電圖文章：</p>
<ul style="padding-left:20px">${postListHtml}</ul>
<p style="margin-top:24px">感謝你的訂閱支持！</p>
<hr style="border:none;border-top:1px solid #eee;margin:24px 0">
<p style="font-size:12px;color:#999">如不想收到通知，請<a href="${unsubLink}" style="color:#999">點此退訂</a>。</p>
</body></html>`;
}

function buildNotificationEmailText(posts, unsubLink) {
  const lines = posts.map((p) => `- ${p.title || p.slug}: ${SITE_URL}/post/${p.slug}/`).join("\n");
  return `新心電圖文章通知\n\n${SITE_NAME}有新的心電圖文章：\n\n${lines}\n\n感謝你的訂閱支持！\n\n---\n退訂：${unsubLink}`;
}

function escapeHtml(str) {
  return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
