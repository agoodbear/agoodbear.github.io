(function () {
  const editor = document.getElementById("editor");
  const preview = document.getElementById("preview");
  const previewEditBtn = document.getElementById("previewEditBtn");
  const previewApplyHint = document.getElementById("previewApplyHint");
  const lineNumbers = document.getElementById("lineNumbers");
  const fileInput = document.getElementById("fileInput");
  const folderInput = document.getElementById("folderInput");

  const newPostBtn = document.getElementById("newPostBtn");
  const openFolderBtn = document.getElementById("openFolderBtn");
  const openBtn = document.getElementById("openBtn");
  const cloudConfigBtn = document.getElementById("cloudConfigBtn");
  const cloudOpenBtn = document.getElementById("cloudOpenBtn");
  const cloudSaveBtn = document.getElementById("cloudSaveBtn");
  const saveBtn = document.getElementById("saveBtn");
  const saveAsBtn = document.getElementById("saveAsBtn");
  const toggleWrapBtn = document.getElementById("toggleWrapBtn");
  const toolbarMore = document.querySelector(".toolbar-more");
  const refreshTreeBtn = document.getElementById("refreshTreeBtn");
  const cloudStateEl = document.getElementById("cloudState");

  const fileNameEl = document.getElementById("fileName");
  const saveStateEl = document.getElementById("saveState");
  const wordCountEl = document.getElementById("wordCount");
  const charCountEl = document.getElementById("charCount");
  const readTimeEl = document.getElementById("readTime");
  const editorPathEl = document.getElementById("editorPath");
  const folderNameEl = document.getElementById("folderName");
  const fileTreeEl = document.getElementById("fileTree");
  const explorerHintEl = document.getElementById("explorerHint");
  const sampleMdBtn = document.getElementById("sampleMdBtn");

  const sampleModal = document.getElementById("sampleModal");
  const closeSampleModalBtn = document.getElementById("closeSampleModalBtn");
  const sampleModalTitle = document.getElementById("sampleModalTitle");
  const sampleRaw = document.getElementById("sampleRaw");
  const samplePreview = document.getElementById("samplePreview");

  const divider = document.getElementById("divider");
  const editorPanel = document.querySelector(".panel-editor");
  const previewPanel = document.querySelector(".panel-preview");
  const inlineComposer = document.getElementById("inlineComposer");
  const inlineInsertToggleBtn = document.getElementById("inlineInsertToggleBtn");
  const inlineInsertMenu = document.getElementById("inlineInsertMenu");
  const insertLocalImageBtn = document.getElementById("insertLocalImageBtn");
  const insertImageRowBtn = document.getElementById("insertImageRowBtn");
  const insertImageUrlBtn = document.getElementById("insertImageUrlBtn");
  const insertYoutubeBtn = document.getElementById("insertYoutubeBtn");
  const openUnsplashBtn = document.getElementById("openUnsplashBtn");
  const insertEmbedBtn = document.getElementById("insertEmbedBtn");
  const insertDividerBtn = document.getElementById("insertDividerBtn");
  const inlineImageInput = document.getElementById("inlineImageInput");
  const unsplashPanel = document.getElementById("unsplashPanel");
  const closeUnsplashBtn = document.getElementById("closeUnsplashBtn");
  const unsplashQueryInput = document.getElementById("unsplashQueryInput");
  const unsplashSearchBtn = document.getElementById("unsplashSearchBtn");
  const unsplashResults = document.getElementById("unsplashResults");

  const openShortcutsBtn = document.getElementById("openShortcutsBtn");
  const shortcutsModal = document.getElementById("shortcutsModal");
  const closeShortcutsModalBtn = document.getElementById("closeShortcutsModalBtn");
  const shortcutsConfigList = document.getElementById("shortcutsConfigList");
  const resetShortcutsBtn = document.getElementById("resetShortcutsBtn");

  const STORAGE_KEY = "write-studio-draft-v3";
  const CLOUD_CONFIG_KEY = "write-studio-cloud-config-v1";
  const SHORTCUTS_KEY = "write-studio-shortcuts";

  const DEFAULT_SHORTCUTS = {
    "bold": "mod+b",
    "italic": "mod+i",
    "code": "mod+e",
    "link": "mod+k",
    "highlight": "mod+h",
    "h1": "mod+1", "h2": "mod+2", "h3": "mod+3", "h4": "mod+4", "h5": "mod+5", "h6": "mod+6",
    "ul": "mod+shift+8",
    "ol": "mod+shift+7",
    "quote": "mod+shift+9",
    "save": "mod+s",
    "saveAs": "mod+shift+s",
    "openFolder": "mod+shift+o",
    "openFile": "mod+o"
  };

  const CLOUD_API_PREFIX = "/write-studio-api";
  const TEXT_FILE_EXTENSIONS = new Set([
    ".md",
    ".markdown",
    ".txt",
    ".toml",
    ".json",
    ".yml",
    ".yaml",
    ".js",
    ".ts",
    ".tsx",
    ".jsx",
    ".css",
    ".scss",
    ".sass",
    ".html",
    ".xml",
    ".csv",
  ]);
  const SKIP_ENTRIES = new Set([".DS_Store"]);

  const dirHandleByPath = new Map();
  const fileHandleByPath = new Map();
  const fileByPath = new Map();
  const imageUrlsByContainer = new WeakMap();
  const IPIC_BRIDGE_URL = "http://127.0.0.1:44777/upload-ipic";

  const state = {
    fileHandle: null,
    fileName: "untitled.md",
    filePath: null,
    dirHandle: null,
    folderMode: "none", // none | handle | files
    virtualFiles: [],
    folderName: "",
    wrapEnabled: false,
    dirty: true,
    sampleFilePath: null,
    forceFolderInput: false,
    markedConfigured: false,
    mermaidInitialized: false,
    renderVersion: 0,
    previewEditMode: true,
    previewSyncTimer: null,
    previewAutoApplyTimer: null,
    previewSkipAutoApplyUntil: 0,
    turndownService: null,
    inlineMenuOpen: false,
    inlineHovering: false,
    inlineAnchorBlock: null,
    inlineUiHovering: false,
    inlineHideTimer: null,
    lastImageUploadError: "",
    inlineImageInsertMode: "single",
    pendingImageRowCols: 0,
    cloudApiBase: "",
    cloudToken: "",
    cloudDocId: null,
    ipicBridgeAvailable: null,
    ipicBridgeLastCheckedAt: 0,
    imageRowLightbox: null,
    imageRowLightboxImage: null,
    imageRowLightboxSrc: "",
    shortcuts: { ...DEFAULT_SHORTCUTS }
  };

  // Load shortcuts from localStorage
  try {
    const rawShortcuts = localStorage.getItem(SHORTCUTS_KEY);
    if (rawShortcuts) {
      const parsed = JSON.parse(rawShortcuts);
      state.shortcuts = { ...DEFAULT_SHORTCUTS, ...parsed };
    }
  } catch (e) {
    console.warn("Failed to load shortcuts", e);
  }

  function getNowIsoString() {
    return new Date().toISOString();
  }

  function closeToolbarMoreMenu() {
    if (toolbarMore && toolbarMore.hasAttribute("open")) {
      toolbarMore.removeAttribute("open");
    }
  }

  function ensureImageRowLightbox() {
    if (state.imageRowLightbox && state.imageRowLightboxImage) {
      return;
    }
    const lightbox = document.createElement("div");
    lightbox.className = "imgrow-lightbox";
    lightbox.setAttribute("aria-hidden", "true");
    const image = document.createElement("img");
    image.alt = "";
    lightbox.appendChild(image);
    lightbox.addEventListener("click", () => {
      closeImageRowLightbox();
    });
    document.body.appendChild(lightbox);
    state.imageRowLightbox = lightbox;
    state.imageRowLightboxImage = image;
  }

  function closeImageRowLightbox() {
    if (!state.imageRowLightbox) {
      return;
    }
    state.imageRowLightbox.classList.remove("open");
    state.imageRowLightbox.setAttribute("aria-hidden", "true");
    state.imageRowLightboxSrc = "";
  }

  function toggleImageRowLightbox(source, alt) {
    const src = String(source || "").trim();
    if (!src) {
      return;
    }
    ensureImageRowLightbox();
    if (!state.imageRowLightbox || !state.imageRowLightboxImage) {
      return;
    }
    if (state.imageRowLightbox.classList.contains("open") && state.imageRowLightboxSrc === src) {
      closeImageRowLightbox();
      return;
    }
    state.imageRowLightboxImage.src = src;
    state.imageRowLightboxImage.alt = alt || "";
    state.imageRowLightbox.classList.add("open");
    state.imageRowLightbox.setAttribute("aria-hidden", "false");
    state.imageRowLightboxSrc = src;
  }

  function getDefaultCloudApiBase() {
    return `${window.location.origin}${CLOUD_API_PREFIX}`;
  }

  function normalizeCloudApiBase(value) {
    const raw = String(value || "").trim();
    if (!raw) {
      return "";
    }
    return raw.replace(/\/+$/, "");
  }

  function loadCloudConfig() {
    const fallbackBase = getDefaultCloudApiBase();
    try {
      const raw = localStorage.getItem(CLOUD_CONFIG_KEY);
      if (!raw) {
        state.cloudApiBase = fallbackBase;
        state.cloudToken = "";
        return;
      }
      const payload = JSON.parse(raw);
      state.cloudApiBase = normalizeCloudApiBase(payload.apiBase || fallbackBase);
      state.cloudToken = String(payload.token || "");
    } catch (error) {
      state.cloudApiBase = fallbackBase;
      state.cloudToken = "";
    }
  }

  function persistCloudConfig() {
    localStorage.setItem(
      CLOUD_CONFIG_KEY,
      JSON.stringify({
        apiBase: state.cloudApiBase,
        token: state.cloudToken,
      })
    );
  }

  function updateCloudUi() {
    const configured = Boolean(state.cloudApiBase && state.cloudToken);
    const docLabel = state.cloudDocId ? ` · ${state.cloudDocId.slice(0, 8)}` : "";
    cloudStateEl.textContent = configured ? `雲端：已連線${docLabel}` : "雲端：未連線";
    cloudStateEl.classList.toggle("ok", configured);
  }

  async function cloudRequest(path, options, requireAuth) {
    const opts = options || {};
    const mustAuth = requireAuth !== false;
    const apiBase = state.cloudApiBase || getDefaultCloudApiBase();
    const url = `${apiBase}${path}`;
    const headers = new Headers(opts.headers || {});

    if (mustAuth && state.cloudToken) {
      headers.set("X-Write-Studio-Token", state.cloudToken);
    }
    if (opts.body && !headers.has("Content-Type")) {
      headers.set("Content-Type", "application/json");
    }

    const response = await fetch(url, {
      method: opts.method || "GET",
      headers,
      body: opts.body,
    });

    const contentType = response.headers.get("content-type") || "";
    const payload = contentType.includes("application/json") ? await response.json() : { text: await response.text() };
    if (!response.ok) {
      const detail =
        payload && typeof payload.error === "string"
          ? payload.error
          : payload && typeof payload.text === "string"
            ? payload.text
            : `HTTP ${response.status}`;
      throw new Error(detail);
    }
    return payload;
  }

  function inferTitleForCloudSave(content, fallbackName) {
    const match = String(content || "").match(/^title:\s*["']?([^"'\n]+)["']?/m);
    if (match && match[1]) {
      return match[1].trim();
    }
    return fallbackName || "Untitled";
  }

  function makeTemplate() {
    return [
      "---",
      'title: "心肌梗塞，跳這心律，發生什麼事了?該怎麼辦?" #輸入這篇的title',
      'date: "2026-01-13" #輸入時間',
      "draft: false #若為false就會直接刊出，不會以草稿模式運作",
      "featured: false #若設定為true，會設定為精選文章",
      "toc: false #自動產生TOC",
      'thumbnail: "/images/ecg-post-15.png" #每篇文章的縮圖位置在這裡(static/images/)-變更',
      "codeMaxLines: 10 # Override global value for how many lines within a code block before auto-collapsing.",
      "codeLineNumbers: false # Override global value for showing of line numbers within code block.",
      "figurePositionShow: true # Override global value for showing the figure label.",
      "categories:",
      "  - ecg",
      "tags:",
      "  - Reperfusion rhythm",
      "  - AIVR",
      "  - wide QRS",
      "  - Inf.wall STEMI",
      "  - VT",
      "  - RVMI",
      "---",
      "",
      "在這裡開始寫正文。",
      "",
      "## 小標題",
      "",
      "段落內容...",
      "",
      "> 這裡可以放重點摘要。",
      "",
      "![圖片說明](/images/your-image.png)",
      "",
      "- [ ] 校稿",
      "- [ ] 設定 `draft: false`",
      "",
    ].join("\n");
  }

  function splitFrontMatter(raw) {
    if (!raw.startsWith("---\n")) {
      return { frontMatter: "", body: raw };
    }
    const match = raw.match(/^---\n[\s\S]*?\n---\n?/);
    if (!match) {
      return { frontMatter: "", body: raw };
    }
    return { frontMatter: match[0], body: raw.slice(match[0].length) };
  }

  function parseFrontMatterMap(frontMatter) {
    if (!frontMatter) {
      return {};
    }
    const result = {};
    const lines = frontMatter.split("\n");
    for (const line of lines) {
      const match = line.match(/^\s*([A-Za-z0-9_-]+)\s*:\s*(.+)\s*$/);
      if (!match) {
        continue;
      }
      const key = match[1].trim();
      let value = match[2].trim();
      if (
        (value.startsWith('"') && value.endsWith('"') && value.length >= 2) ||
        (value.startsWith("'") && value.endsWith("'") && value.length >= 2)
      ) {
        value = value.slice(1, -1);
      }
      result[key] = value;
    }
    return result;
  }

  function getImageSettingsFromFrontMatter(frontMatter) {
    const metadata = parseFrontMatterMap(frontMatter);
    const uploadRaw = metadata["typora-upload-image"] || metadata["typora_image_upload"] || "";
    const uploadEngine = uploadRaw.trim().toLowerCase();
    return {
      copyTo: metadata["typora-copy-images-to"] || "",
      rootUrl: metadata["typora-root-url"] || "",
      uploadEngine,
    };
  }

  function slugifyHeading(text) {
    const plain = text
      .replace(/`([^`]+)`/g, "$1")
      .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
      .replace(/!\[([^\]]*)\]\([^)]+\)/g, "$1")
      .replace(/[*_~#<>[\]()`]/g, "")
      .trim()
      .toLowerCase();

    const slug = plain
      .replace(/[^\w\u4e00-\u9fff\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-+|-+$/g, "");
    return slug || "section";
  }

  function stripInlineMarkdown(text) {
    return text
      .replace(/`([^`]+)`/g, "$1")
      .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
      .replace(/!\[([^\]]*)\]\([^)]+\)/g, "$1")
      .replace(/[*_~[\]()`]/g, "")
      .trim();
  }

  function extractHeadings(markdown) {
    const lines = markdown.split("\n");
    const headings = [];
    const slugCounter = new Map();
    let inFence = false;

    for (const line of lines) {
      if (/^\s*```/.test(line)) {
        inFence = !inFence;
        continue;
      }
      if (inFence) {
        continue;
      }
      const match = line.match(/^\s*(#{1,6})\s+(.+?)\s*#*\s*$/);
      if (!match) {
        continue;
      }
      const level = match[1].length;
      const title = stripInlineMarkdown(match[2]);
      const base = slugifyHeading(title);
      const current = (slugCounter.get(base) || 0) + 1;
      slugCounter.set(base, current);
      const slug = current === 1 ? base : `${base}-${current}`;
      headings.push({ level, title, slug });
    }

    return headings;
  }

  function buildTocMarkdown(markdown) {
    const headings = extractHeadings(markdown);
    if (!headings.length) {
      return "> (No headings yet)";
    }

    const baseLevel = Math.min(...headings.map((heading) => heading.level));
    const lines = [];

    for (const heading of headings) {
      const indent = "  ".repeat(Math.max(0, heading.level - baseLevel));
      lines.push(`${indent}- [${heading.title}](#${heading.slug})`);
    }

    return lines.join("\n");
  }

  function normalizeLegacySequenceLine(line) {
    const trimmed = line.trim();
    if (!trimmed) {
      return "";
    }

    const keywordPattern =
      /^(title|participant|note|loop|alt|else|opt|par|and|rect|break|critical|option|end|activate|deactivate|autonumber)\b/i;
    if (keywordPattern.test(trimmed)) {
      return trimmed;
    }

    let transformed = trimmed.replace(/-->/g, "-->>");
    transformed = transformed.replace(/(^|[^-])->/g, "$1->>");
    return transformed;
  }

  function convertLegacySequenceFences(markdown) {
    return markdown.replace(/```sequence\s*\n([\s\S]*?)```/gi, (_, code) => {
      const sequenceLines = code
        .replace(/\r/g, "")
        .split("\n")
        .map((line) => normalizeLegacySequenceLine(line))
        .join("\n")
        .trim();
      const body = sequenceLines ? "\n" + sequenceLines : "";
      return "```mermaid\nsequenceDiagram" + body + "\n```";
    });
  }

  function escapeHtml(value) {
    return String(value || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  function escapeHtmlAttribute(value) {
    return escapeHtml(value).replace(/"/g, "&quot;");
  }

  function parseShortcodeAttributes(raw) {
    const attrs = {};
    const input = String(raw || "");
    const pattern = /([A-Za-z0-9_-]+)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"']+))/g;
    let match = null;
    while ((match = pattern.exec(input))) {
      const key = match[1];
      const value = match[2] !== undefined ? match[2] : match[3] !== undefined ? match[3] : match[4] || "";
      attrs[key] = value;
    }
    return attrs;
  }

  function parseShortcodePositionalArgs(raw) {
    const input = String(raw || "");
    const withoutNamed = input.replace(/([A-Za-z0-9_-]+)\s*=\s*(?:"[^"]*"|'[^']*'|[^\s"']+)/g, " ");
    const tokens = withoutNamed.match(/`[^`]*`|"[^"]*"|'[^']*'|\S+/g) || [];
    return tokens
      .map((token) => token.trim())
      .filter(Boolean)
      .map((token) => {
        if (
          (token.startsWith('"') && token.endsWith('"')) ||
          (token.startsWith("'") && token.endsWith("'")) ||
          (token.startsWith("`") && token.endsWith("`"))
        ) {
          return token.slice(1, -1);
        }
        return token;
      });
  }

  function parseShortcodeArgs(raw) {
    return {
      attrs: parseShortcodeAttributes(raw),
      positional: parseShortcodePositionalArgs(raw),
    };
  }

  function parseShortcodeBoolean(value, fallback) {
    if (value === undefined || value === null || value === "") {
      return Boolean(fallback);
    }
    const normalized = String(value).trim().toLowerCase();
    if (["1", "true", "yes", "on"].includes(normalized)) {
      return true;
    }
    if (["0", "false", "no", "off"].includes(normalized)) {
      return false;
    }
    return Boolean(fallback);
  }

  function parseShortcodeNumber(value, fallback) {
    const parsed = Number.parseInt(String(value || ""), 10);
    return Number.isFinite(parsed) ? parsed : fallback;
  }

  function decodeHtmlEntities(value) {
    return String(value || "")
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&amp;/g, "&");
  }

  function parseFrontMatterObject(frontMatter) {
    const result = {};
    const source = String(frontMatter || "");
    const match = source.match(/^---\n([\s\S]*?)\n---\s*$/);
    if (!match) {
      return result;
    }
    const lines = match[1].replace(/\r/g, "").split("\n");
    const stack = [{ indent: -1, value: result }];

    function parseScalar(raw) {
      const value = String(raw || "").trim();
      if (!value) {
        return "";
      }
      if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
        return value.slice(1, -1);
      }
      if (/^(true|false)$/i.test(value)) {
        return /^true$/i.test(value);
      }
      if (/^-?\d+(\.\d+)?$/.test(value)) {
        const num = Number(value);
        return Number.isFinite(num) ? num : value;
      }
      return value;
    }

    for (let lineIndex = 0; lineIndex < lines.length; lineIndex += 1) {
      const line = lines[lineIndex];
      if (!line.trim() || /^\s*#/.test(line)) {
        continue;
      }
      const itemMatch = line.match(/^(\s*)-\s+(.*)$/);
      if (itemMatch) {
        const indent = itemMatch[1].replace(/\t/g, "  ").length;
        while (stack.length > 1 && indent <= stack[stack.length - 1].indent) {
          stack.pop();
        }
        const parent = stack[stack.length - 1].value;
        if (Array.isArray(parent)) {
          parent.push(parseScalar(itemMatch[2]));
        }
        continue;
      }

      const pairMatch = line.match(/^(\s*)([A-Za-z0-9_.-]+):\s*(.*)$/);
      if (!pairMatch) {
        continue;
      }
      const indent = pairMatch[1].replace(/\t/g, "  ").length;
      const key = pairMatch[2];
      const rawValue = pairMatch[3];

      while (stack.length > 1 && indent <= stack[stack.length - 1].indent) {
        stack.pop();
      }
      const parent = stack[stack.length - 1].value;
      if (!parent || Array.isArray(parent) || typeof parent !== "object") {
        continue;
      }

      if (!rawValue.trim()) {
        const nextLine = lines[lineIndex + 1] || "";
        const childIsArray = /^(\s*)-\s+/.test(nextLine) && nextLine.match(/^(\s*)/) && nextLine.match(/^(\s*)/)[1].length > indent;
        parent[key] = childIsArray ? [] : {};
        stack.push({ indent, value: parent[key] });
      } else {
        parent[key] = parseScalar(rawValue);
      }
    }
    return result;
  }

  let isRecordingShortcut = null;

  function renderShortcutsModal() {
    shortcutsConfigList.innerHTML = "";
    const actionLabels = {
      bold: "粗體 (Bold)",
      italic: "斜體 (Italic)",
      code: "程式碼 (Code)",
      link: "連結 (Link)",
      highlight: "螢光筆標記 (Highlight)",
      h1: "標題 1 (H1)",
      h2: "標題 2 (H2)",
      h3: "標題 3 (H3)",
      h4: "標題 4 (H4)",
      h5: "標題 5 (H5)",
      h6: "標題 6 (H6)",
      ul: "無序清單 (Bulleted List)",
      ol: "有序清單 (Numbered List)",
      quote: "引言 (Blockquote)",
      save: "儲存 (Save)",
      saveAs: "另存新檔 (Save As)",
      openFolder: "開啟資料夾 (Open Folder)",
      openFile: "開啟檔案 (Open File)",
    };

    for (const [key, defaultComb] of Object.entries(DEFAULT_SHORTCUTS)) {
      const currentComb = state.shortcuts[key] || defaultComb;
      const row = document.createElement("div");
      row.className = "shortcut-row";
      row.style.display = "flex";
      row.style.justifyContent = "space-between";
      row.style.marginBottom = "0.75rem";
      row.style.paddingBottom = "0.75rem";
      row.style.borderBottom = "1px solid var(--border)";

      const label = document.createElement("div");
      label.textContent = actionLabels[key] || key;

      const btn = document.createElement("button");
      btn.className = "btn";
      btn.style.fontFamily = "monospace";
      btn.style.minWidth = "120px";

      if (isRecordingShortcut === key) {
        btn.textContent = "請按下按鍵...";
        btn.classList.add("btn-primary");
      } else {
        let displayKeys = currentComb.replace(/mod/ig, "Cmd/Ctrl");
        displayKeys = displayKeys.replace(/shift/ig, "Shift");
        displayKeys = displayKeys.replace(/alt/ig, "Alt");
        displayKeys = displayKeys.replace(/\+/g, " + ");
        btn.textContent = displayKeys.toUpperCase();
      }

      btn.addEventListener("click", () => {
        isRecordingShortcut = key;
        renderShortcutsModal();
      });

      row.appendChild(label);
      row.appendChild(btn);
      shortcutsConfigList.appendChild(row);
    }
  }

  function checkShortcut(event, shortcutString) {
    if (!shortcutString) return false;
    const parts = shortcutString.toLowerCase().split("+").map((p) => p.trim());
    const needsMod = parts.includes("mod");
    const needsShift = parts.includes("shift");
    const needsAlt = parts.includes("alt");

    // Determine the base key
    let baseKey = null;
    for (const p of parts) {
      if (p !== "mod" && p !== "shift" && p !== "alt") {
        baseKey = p;
        break;
      }
    }

    if (!baseKey) return false;

    const eventMod = event.ctrlKey || event.metaKey;
    if (needsMod !== eventMod) return false;
    if (needsShift !== event.shiftKey) return false;
    if (needsAlt !== event.altKey) return false;

    let eventKey = event.key.toLowerCase();
    if (eventKey === " ") eventKey = "space";

    return eventKey === baseKey;
  }

  function persistShortcuts() {
    localStorage.setItem(SHORTCUTS_KEY, JSON.stringify(state.shortcuts));
  }

  function openShortcutsModal() {
    closeToolbarMoreMenu();
    isRecordingShortcut = null;
    renderShortcutsModal();
    shortcutsModal.classList.remove("hidden");
  }

  function closeShortcutsModal() {
    shortcutsModal.classList.add("hidden");
    isRecordingShortcut = null;
  }

  function getObjectPathValue(source, path) {
    if (!source || typeof source !== "object") {
      return undefined;
    }
    const parts = String(path || "")
      .split(".")
      .map((part) => part.trim())
      .filter(Boolean);
    if (!parts.length) {
      return undefined;
    }
    let cursor = source;
    for (const part of parts) {
      if (!cursor || typeof cursor !== "object" || !(part in cursor)) {
        return undefined;
      }
      cursor = cursor[part];
    }
    return cursor;
  }

  function resolveParamValue(frontMatter, keyPath) {
    const path = String(keyPath || "").trim().replace(/^["'`]|["'`]$/g, "");
    if (!path) {
      return "";
    }
    const data = parseFrontMatterObject(frontMatter);
    const inParams = getObjectPathValue(data.params, path);
    if (inParams !== undefined) {
      return inParams;
    }
    const topLevel = getObjectPathValue(data, path);
    if (topLevel !== undefined) {
      return topLevel;
    }
    return "";
  }

  function buildYoutubeEmbedFromShortcode(rawArgs) {
    const { attrs, positional } = parseShortcodeArgs(rawArgs);
    const id = (attrs.id || positional[0] || "").trim();
    if (!id) {
      return "";
    }
    const allowFullScreen = parseShortcodeBoolean(attrs.allowFullScreen, true);
    const autoPlay = parseShortcodeBoolean(attrs.autoplay, false);
    const controls = parseShortcodeBoolean(attrs.controls, true);
    const loop = parseShortcodeBoolean(attrs.loop, false);
    const mute = parseShortcodeBoolean(attrs.mute, autoPlay);
    const start = parseShortcodeNumber(attrs.start, null);
    const end = parseShortcodeNumber(attrs.end, null);
    const loading = (attrs.loading || "lazy").trim() || "lazy";
    const query = new URLSearchParams();
    query.set("controls", controls ? "1" : "0");
    if (autoPlay) {
      query.set("autoplay", "1");
    }
    if (mute) {
      query.set("mute", "1");
    }
    if (loop) {
      query.set("loop", "1");
      query.set("playlist", id);
    }
    if (Number.isFinite(start) && start >= 0) {
      query.set("start", String(start));
    }
    if (Number.isFinite(end) && end > 0) {
      query.set("end", String(end));
    }
    const src = `https://www.youtube.com/embed/${encodeURIComponent(id)}?${query.toString()}`;
    return (
      `<div class="ws-embed ws-embed-video" data-ws-embed="youtube-video">` +
      `<iframe src="${escapeHtmlAttribute(src)}" title="YouTube video player" ` +
      `allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ` +
      `referrerpolicy="strict-origin-when-cross-origin" ${allowFullScreen ? "allowfullscreen " : ""}` +
      `loading="${escapeHtmlAttribute(loading)}"></iframe>` +
      `</div>`
    );
  }

  function buildVimeoEmbedFromShortcode(rawArgs) {
    const { attrs, positional } = parseShortcodeArgs(rawArgs);
    const id = (attrs.id || positional[0] || "").trim();
    if (!id) {
      return "";
    }
    const allowFullScreen = parseShortcodeBoolean(attrs.allowFullScreen, true);
    const loading = (attrs.loading || "lazy").trim() || "lazy";
    const query = new URLSearchParams();
    if (attrs.autoplay !== undefined) query.set("autoplay", parseShortcodeBoolean(attrs.autoplay, false) ? "1" : "0");
    if (attrs.byline !== undefined) query.set("byline", parseShortcodeBoolean(attrs.byline, false) ? "1" : "0");
    if (attrs.dnt !== undefined) query.set("dnt", parseShortcodeBoolean(attrs.dnt, false) ? "1" : "0");
    if (attrs.loop !== undefined) query.set("loop", parseShortcodeBoolean(attrs.loop, false) ? "1" : "0");
    if (attrs.muted !== undefined) query.set("muted", parseShortcodeBoolean(attrs.muted, false) ? "1" : "0");
    if (attrs.portrait !== undefined) query.set("portrait", parseShortcodeBoolean(attrs.portrait, false) ? "1" : "0");
    if (attrs.title !== undefined) query.set("title", parseShortcodeBoolean(attrs.title, false) ? "1" : "0");
    if (attrs.color) query.set("color", String(attrs.color).replace(/^#/, ""));
    const queryString = query.toString();
    const src = `https://player.vimeo.com/video/${encodeURIComponent(id)}${queryString ? "?" + queryString : ""}`;
    return (
      `<div class="ws-embed ws-embed-video" data-ws-embed="vimeo-video">` +
      `<iframe src="${escapeHtmlAttribute(src)}" title="Vimeo video player" ` +
      `allow="autoplay; fullscreen; picture-in-picture" ${allowFullScreen ? "allowfullscreen " : ""}` +
      `loading="${escapeHtmlAttribute(loading)}"></iframe>` +
      `</div>`
    );
  }

  function buildInstagramEmbedFromShortcode(rawArgs) {
    const { attrs, positional } = parseShortcodeArgs(rawArgs);
    const id = String(attrs.id || positional[0] || "").trim();
    if (!id) {
      return "";
    }
    const postUrl = `https://www.instagram.com/p/${encodeURIComponent(id)}/`;
    const embedUrl = `${postUrl}embed`;
    return (
      `<div class="ws-embed ws-embed-video" data-ws-embed="instagram-post">` +
      `<iframe src="${escapeHtmlAttribute(embedUrl)}" title="Instagram embed" loading="lazy"></iframe>` +
      `<a class="ws-embed-link" href="${escapeHtmlAttribute(postUrl)}" target="_blank" rel="noopener noreferrer">${escapeHtml(
        postUrl
      )}</a>` +
      `</div>`
    );
  }

  function buildEmbedFromHugoShortcodeText(rawShortcode) {
    const shortcode = decodeHtmlEntities(rawShortcode || "").trim();
    if (!shortcode) {
      return "";
    }

    let match = shortcode.match(/^{{[%<]\s*youtube([^}]*)\/?\s*[%>]}}$/i);
    if (match) {
      return buildYoutubeEmbedFromShortcode(match[1] || "");
    }

    match = shortcode.match(/^{{[%<]\s*vimeo([^}]*)\/?\s*[%>]}}$/i);
    if (match) {
      return buildVimeoEmbedFromShortcode(match[1] || "");
    }

    match = shortcode.match(/^{{[%<]\s*instagram([^}]*)\/?\s*[%>]}}$/i);
    if (match) {
      return buildInstagramEmbedFromShortcode(match[1] || "");
    }

    return "";
  }

  function convertHugoBuiltInShortcodes(markdown, frontMatter) {
    return transformOutsideCodeFences(markdown, (segment) => {
      let output = segment;

      output = output.replace(
        /{{[%<]\s*details([^}]*)[%>]}}([\s\S]*?){{[%<]\s*\/details\s*[%>]}}/gi,
        (full, rawArgs, inner) => {
          const { attrs } = parseShortcodeArgs(rawArgs);
          const summary = attrs.summary || attrs.title || "Details";
          const open = parseShortcodeBoolean(attrs.open, false);
          const innerHtml = typeof marked !== "undefined" ? marked.parse(String(inner || "").trim()) : escapeHtml(inner || "");
          return (
            `<details class="ws-details" data-hugo-shortcode="${escapeHtmlAttribute(full.trim())}" ${open ? "open" : ""}>` +
            `<summary>${escapeHtml(summary)}</summary>${innerHtml}</details>`
          );
        }
      );

      output = output.replace(
        /{{[%<]\s*highlight([^}]*)[%>]}}([\s\S]*?){{[%<]\s*\/highlight\s*[%>]}}/gi,
        (full, rawArgs, inner) => {
          const { positional } = parseShortcodeArgs(rawArgs);
          const language = String(positional[0] || "").trim();
          const classAttr = language ? ` class="language-${escapeHtmlAttribute(language)}"` : "";
          return (
            `<pre data-hugo-shortcode="${escapeHtmlAttribute(full.trim())}"><code${classAttr}>${escapeHtml(inner || "")}</code></pre>`
          );
        }
      );

      output = output.replace(
        /{{[%<]\s*qr([^}]*)[%>]}}([\s\S]*?){{[%<]\s*\/qr\s*[%>]}}/gi,
        (full, rawArgs, inner) => {
          const { attrs } = parseShortcodeArgs(rawArgs);
          const text = String(inner || attrs.text || "").trim();
          if (!text) {
            return "";
          }
          const scale = Math.max(1, Math.min(16, parseShortcodeNumber(attrs.scale, 4)));
          const size = scale * 64;
          const alt = attrs.alt || "QR code";
          const src = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(text)}`;
          return `<img data-hugo-shortcode="${escapeHtmlAttribute(full.trim())}" src="${escapeHtmlAttribute(src)}" alt="${escapeHtmlAttribute(alt)}" loading="lazy">`;
        }
      );

      output = output.replace(/{{[%<]\s*qr([^}]*)\/\s*[%>]}}/gi, (full, rawArgs) => {
        const { attrs, positional } = parseShortcodeArgs(rawArgs);
        const text = String(attrs.text || positional[0] || "").trim();
        if (!text) {
          return "";
        }
        const scale = Math.max(1, Math.min(16, parseShortcodeNumber(attrs.scale, 4)));
        const size = scale * 64;
        const alt = attrs.alt || "QR code";
        const src = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(text)}`;
        return `<img data-hugo-shortcode="${escapeHtmlAttribute(full.trim())}" src="${escapeHtmlAttribute(src)}" alt="${escapeHtmlAttribute(alt)}" loading="lazy">`;
      });

      output = output.replace(/{{[%<]\s*figure([^}]*)\/?\s*[%>]}}/gi, (full, rawArgs) => {
        const { attrs } = parseShortcodeArgs(rawArgs);
        const src = attrs.src || attrs.link || "";
        if (!src) {
          return "";
        }
        const alt = attrs.alt || attrs.caption || "";
        const caption = attrs.caption || "";
        const title = attrs.title || "";
        const href = attrs.link || "";
        const imageTag = `<img src="${escapeHtmlAttribute(src)}" alt="${escapeHtmlAttribute(alt)}" loading="lazy">`;
        const wrapped = href ? `<a href="${escapeHtmlAttribute(href)}">${imageTag}</a>` : imageTag;
        const figCaption = caption || title ? `<figcaption>${escapeHtml(caption || title)}</figcaption>` : "";
        return `<figure data-hugo-shortcode="${escapeHtmlAttribute(full.trim())}">${wrapped}${figCaption}</figure>`;
      });

      output = output.replace(/{{[%<]\s*youtube([^}]*)\/?\s*[%>]}}/gi, (full, rawArgs) => {
        const html = buildYoutubeEmbedFromShortcode(rawArgs);
        if (!html) {
          return "";
        }
        return `<div data-hugo-shortcode="${escapeHtmlAttribute(full.trim())}">${html}</div>`;
      });

      output = output.replace(/{{[%<]\s*vimeo([^}]*)\/?\s*[%>]}}/gi, (full, rawArgs) => {
        const html = buildVimeoEmbedFromShortcode(rawArgs);
        if (!html) {
          return "";
        }
        return `<div data-hugo-shortcode="${escapeHtmlAttribute(full.trim())}">${html}</div>`;
      });

      output = output.replace(/{{[%<]\s*x([^}]*)\/?\s*[%>]}}/gi, (full, rawArgs) => {
        const { attrs, positional } = parseShortcodeArgs(rawArgs);
        const user = String(attrs.user || positional[0] || "").trim();
        const id = String(attrs.id || positional[1] || "").trim();
        if (!user || !id) {
          return "";
        }
        const tweetUrl = `https://x.com/${encodeURIComponent(user)}/status/${encodeURIComponent(id)}`;
        const frameSrc = `https://twitframe.com/show?url=${encodeURIComponent(tweetUrl)}`;
        const html =
          `<div class="ws-embed ws-embed-video" data-ws-embed="x-post">` +
          `<iframe src="${escapeHtmlAttribute(frameSrc)}" title="X embed" loading="lazy"></iframe>` +
          `<a class="ws-embed-link" href="${escapeHtmlAttribute(tweetUrl)}" target="_blank" rel="noopener noreferrer">${escapeHtml(
            tweetUrl
          )}</a>` +
          `</div>`;
        return `<div data-hugo-shortcode="${escapeHtmlAttribute(full.trim())}">${html}</div>`;
      });

      output = output.replace(/{{[%<]\s*instagram([^}]*)\/?\s*[%>]}}/gi, (full, rawArgs) => {
        const html = buildInstagramEmbedFromShortcode(rawArgs);
        if (!html) {
          return "";
        }
        return `<div data-hugo-shortcode="${escapeHtmlAttribute(full.trim())}">${html}</div>`;
      });

      output = output.replace(/{{[%<]\s*gist([^}]*)\/?\s*[%>]}}/gi, (full, rawArgs) => {
        const { attrs, positional } = parseShortcodeArgs(rawArgs);
        const user = String(attrs.user || positional[0] || "").trim();
        const gistId = String(attrs.id || positional[1] || "").trim();
        const file = String(attrs.file || positional[2] || "").trim();
        if (!user || !gistId) {
          return "";
        }
        const gistUrl = `https://gist.github.com/${encodeURIComponent(user)}/${encodeURIComponent(gistId)}${file ? `#file-${encodeURIComponent(file)}` : ""
          }`;
        const html =
          `<div class="ws-embed" data-ws-embed="gist">` +
          `<p class="ws-embed-title">GitHub Gist</p>` +
          `<a class="ws-embed-link" href="${escapeHtmlAttribute(gistUrl)}" target="_blank" rel="noopener noreferrer">${escapeHtml(
            gistUrl
          )}</a>` +
          `</div>`;
        return `<div data-hugo-shortcode="${escapeHtmlAttribute(full.trim())}">${html}</div>`;
      });

      output = output.replace(/{{[%<]\s*param([^}]*)[%>]}}/gi, (full, rawArgs) => {
        const { positional } = parseShortcodeArgs(rawArgs);
        const keyPath = String(positional[0] || "").trim();
        if (!keyPath) {
          return "";
        }
        const resolved = resolveParamValue(frontMatter, keyPath);
        const value = resolved === undefined || resolved === null || resolved === "" ? `{{ param:${keyPath} }}` : String(resolved);
        return `<span data-hugo-shortcode="${escapeHtmlAttribute(full.trim())}">${escapeHtml(value)}</span>`;
      });

      output = output.replace(/{{[%<]\s*(relref|ref)([^}]*)[%>]}}/gi, (_, kind, rawArgs) => {
        const { attrs, positional } = parseShortcodeArgs(rawArgs);
        const path = String(attrs.path || positional[0] || "").trim();
        if (!path) {
          return "";
        }
        if (kind.toLowerCase() === "relref") {
          return path.startsWith("/") ? path : "/" + path;
        }
        return path.startsWith("/") ? path : "/" + path;
      });

      return output;
    });
  }

  function transformOutsideCodeFences(markdown, transformer) {
    const lines = String(markdown || "").split("\n");
    const segments = [];
    let buffer = [];
    let inFence = false;

    for (const line of lines) {
      if (/^\s*```/.test(line)) {
        if (!inFence) {
          if (buffer.length) {
            segments.push({ fenced: false, text: buffer.join("\n") });
            buffer = [];
          }
          inFence = true;
          buffer.push(line);
        } else {
          buffer.push(line);
          segments.push({ fenced: true, text: buffer.join("\n") });
          buffer = [];
          inFence = false;
        }
        continue;
      }
      buffer.push(line);
    }

    if (buffer.length) {
      segments.push({ fenced: inFence, text: buffer.join("\n") });
    }

    return segments.map((segment) => (segment.fenced ? segment.text : transformer(segment.text))).join("\n");
  }

  function convertHugoImageRows(markdown) {
    return transformOutsideCodeFences(markdown, (segment) =>
      segment.replace(/{{[%<]\s*imgrow([^}]*)[%>]}}([\s\S]*?){{[%<]\s*\/imgrow\s*[%>]}}/gi, (_, rowRawAttrs, rowInner) => {
        const rowAttrs = parseShortcodeAttributes(rowRawAttrs);
        const parsedCols = Number.parseInt(rowAttrs.cols || "", 10);
        const parsedGap = Number.parseInt(rowAttrs.gap || "", 10);
        const cols = Number.isFinite(parsedCols) && parsedCols > 0 ? Math.min(parsedCols, 6) : 2;
        const gap = Number.isFinite(parsedGap) && parsedGap >= 0 ? Math.min(parsedGap, 48) : 14;

        const items = [];
        const colPattern = /{{[%<]\s*imgcol([^}]*)[%>]}}/gi;
        let colMatch = null;
        while ((colMatch = colPattern.exec(rowInner || ""))) {
          const attrs = parseShortcodeAttributes(colMatch[1]);
          const src = attrs.src || "";
          if (!src) {
            continue;
          }

          const alt = attrs.alt || "";
          const caption = attrs.caption || "";
          const href = attrs.href || "";
          const imageTag = `<img src="${escapeHtmlAttribute(src)}" alt="${escapeHtmlAttribute(alt)}" loading="lazy" />`;
          const wrappedImage = href
            ? `<a href="${escapeHtmlAttribute(href)}">${imageTag}</a>`
            : imageTag;
          const captionTag = caption ? `<figcaption>${escapeHtml(caption)}</figcaption>` : "";
          items.push(`<figure class="md-img-col">${wrappedImage}${captionTag}</figure>`);
        }

        if (!items.length) {
          return "";
        }

        return `<div class="md-img-row" style="--imgrow-cols:${cols};--imgrow-gap:${gap}px;">${items.join("")}</div>`;
      })
    );
  }

  function convertSimpleVideoShortcodes(markdown) {
    return transformOutsideCodeFences(markdown, (segment) => {
      let output = segment;

      output = output.replace(/{{[%<]\s*youtube\s+([A-Za-z0-9_-]{6,})\s*\/?\s*[%>]}}/gi, (full, id) => {
        const html = buildYoutubeEmbedHtml(`https://www.youtube.com/watch?v=${id}`);
        if (!html) {
          return full;
        }
        return `<div data-hugo-shortcode="${escapeHtmlAttribute(full.trim())}">${html}</div>`;
      });

      output = output.replace(/{{[%<]\s*instagram\s+([A-Za-z0-9_-]{3,})\s*\/?\s*[%>]}}/gi, (full, id) => {
        const html = buildInstagramEmbedHtml(`https://www.instagram.com/p/${id}/`);
        if (!html) {
          return full;
        }
        return `<div data-hugo-shortcode="${escapeHtmlAttribute(full.trim())}">${html}</div>`;
      });

      output = output.replace(/{{[%<]\s*vimeo\s+([A-Za-z0-9_-]{3,})\s*\/?\s*[%>]}}/gi, (full, id) => {
        const html = buildVimeoEmbedFromShortcode(String(id || ""));
        if (!html) {
          return full;
        }
        return `<div data-hugo-shortcode="${escapeHtmlAttribute(full.trim())}">${html}</div>`;
      });

      return output;
    });
  }

  function extractYoutubeIdFromThumbnailUrl(rawUrl) {
    const url = String(rawUrl || "").trim();
    if (!url) {
      return "";
    }
    const decoded = decodeHtmlEntities(url);
    const viMatch = decoded.match(/(?:^|\/)vi(?:_webp)?\/([^/?#&"'<>]+)/i);
    if (viMatch && viMatch[1]) {
      return viMatch[1].trim();
    }
    return "";
  }

  function upgradeLegacyYoutubeEmbedCard(rawHtml) {
    const html = String(rawHtml || "");
    if (!html) {
      return rawHtml;
    }

    let sourceUrl = "";
    const hrefMatch = html.match(/<a[^>]*href=(["'])(.*?)\1/i);
    if (hrefMatch && hrefMatch[2]) {
      sourceUrl = decodeHtmlEntities(hrefMatch[2]).trim();
    }

    let youtubeId = parseYoutubeId(sourceUrl);
    if (!youtubeId) {
      const imgMatch = html.match(/<img[^>]*src=(["'])(.*?)\1/i);
      if (imgMatch && imgMatch[2]) {
        youtubeId = extractYoutubeIdFromThumbnailUrl(imgMatch[2]);
      }
    }

    if (!youtubeId) {
      return rawHtml;
    }

    return buildYoutubeEmbedHtml(`https://www.youtube.com/watch?v=${youtubeId}`) || rawHtml;
  }

  function convertLegacyYoutubeEmbedCards(markdown) {
    return transformOutsideCodeFences(markdown, (segment) => {
      let output = segment;

      output = output.replace(
        /<div\b[^>]*class=(["'])[^"']*\bws-embed-youtube\b[^"']*\1[^>]*>[\s\S]*?<\/div>/gi,
        (full) => upgradeLegacyYoutubeEmbedCard(full)
      );

      output = output.replace(
        /<div\b[^>]*data-ws-embed=(["'])youtube\1[^>]*>[\s\S]*?<\/div>/gi,
        (full) => upgradeLegacyYoutubeEmbedCard(full)
      );

      return output;
    });
  }

  function preprocessMarkdown(markdown, frontMatter) {
    const withoutMalformedVideoBoxes = String(markdown || "").replace(
      /<div[^>]*class="[^"]*ws-embed-video[^"]*"[^>]*>\s*(?:<br\s*\/?>|\u00a0|\s)*<\/div>/gi,
      ""
    );
    const withSimpleVideoShortcodes = convertSimpleVideoShortcodes(withoutMalformedVideoBoxes);
    const withLegacyYoutubeCards = convertLegacyYoutubeEmbedCards(withSimpleVideoShortcodes);
    const withLegacyDiagrams = convertLegacySequenceFences(withLegacyYoutubeCards);
    const withImageRows = convertHugoImageRows(withLegacyDiagrams);
    const withHugoBuiltins = convertHugoBuiltInShortcodes(withImageRows, frontMatter);
    return withHugoBuiltins.replace(/^\[toc\]\s*$/gim, () => buildTocMarkdown(withHugoBuiltins));
  }

  function sanitizeFootnoteId(raw) {
    const cleaned = String(raw || "")
      .trim()
      .toLowerCase()
      .replace(/[^\w\u4e00-\u9fff-]/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-+|-+$/g, "");
    return cleaned || "note";
  }

  function extractFootnoteDefinitions(markdown) {
    const lines = markdown.replace(/\r/g, "").split("\n");
    const definitions = new Map();
    const bodyLines = [];
    let inFence = false;

    for (let i = 0; i < lines.length; i += 1) {
      const line = lines[i];
      if (/^\s*```/.test(line)) {
        inFence = !inFence;
        bodyLines.push(line);
        continue;
      }

      if (!inFence) {
        const match = line.match(/^\[\^([^\]]+)\]:\s*(.*)$/);
        if (match) {
          const id = match[1].trim();
          const parts = [match[2] || ""];
          let cursor = i + 1;

          while (cursor < lines.length) {
            const next = lines[cursor];
            if (/^(?: {2,}|\t)/.test(next)) {
              parts.push(next.replace(/^(?: {2,}|\t)/, ""));
              cursor += 1;
              continue;
            }
            if (next.trim() === "" && cursor + 1 < lines.length && /^(?: {2,}|\t)/.test(lines[cursor + 1])) {
              parts.push("");
              cursor += 1;
              continue;
            }
            break;
          }

          definitions.set(id, parts.join("\n").trim());
          i = cursor - 1;
          continue;
        }
      }

      bodyLines.push(line);
    }

    return {
      body: bodyLines.join("\n"),
      definitions,
    };
  }

  function applyFootnoteReferences(markdown, definitions) {
    if (!definitions.size) {
      return {
        body: markdown,
        order: [],
        indexById: new Map(),
      };
    }

    const order = [];
    const indexById = new Map();
    let inFence = false;

    const body = markdown
      .split("\n")
      .map((line) => {
        if (/^\s*```/.test(line)) {
          inFence = !inFence;
          return line;
        }
        if (inFence) {
          return line;
        }

        return line.replace(/\[\^([^\]]+)\]/g, (full, rawId) => {
          const id = String(rawId || "").trim();
          if (!definitions.has(id)) {
            return full;
          }

          if (!indexById.has(id)) {
            indexById.set(id, indexById.size + 1);
            order.push(id);
          }

          const number = indexById.get(id);
          const safeId = sanitizeFootnoteId(id);
          const title = stripInlineMarkdown(definitions.get(id) || "").slice(0, 140).replace(/"/g, "&quot;");
          const titleAttr = title ? ` title="${title}"` : "";
          return `<sup class="footnote-ref" id="fnref-${safeId}"><a href="#fn-${safeId}"${titleAttr}>${number}</a></sup>`;
        });
      })
      .join("\n");

    return {
      body,
      order,
      indexById,
    };
  }

  function renderFootnotesHtml(definitions, order, indexById) {
    if (!order.length) {
      return "";
    }

    const parseInline = typeof marked !== "undefined" && typeof marked.parseInline === "function";
    const items = order
      .map((id) => {
        const safeId = sanitizeFootnoteId(id);
        const number = indexById.get(id);
        const raw = definitions.get(id) || "";
        const content = parseInline ? marked.parseInline(raw) : raw;
        return `<li id="fn-${safeId}"><span class="footnote-num">${number}.</span> ${content} <a href="#fnref-${safeId}" class="footnote-backref" aria-label="Back to reference">↩</a></li>`;
      })
      .join("");

    return `<section class="footnotes"><hr><ol>${items}</ol></section>`;
  }

  function processFootnotes(markdown) {
    const extracted = extractFootnoteDefinitions(markdown);
    const linked = applyFootnoteReferences(extracted.body, extracted.definitions);
    return {
      body: linked.body,
      order: linked.order,
      indexById: linked.indexById,
      definitions: extracted.definitions,
    };
  }

  function parseMarkdown(markdown, frontMatter) {
    const processed = preprocessMarkdown(markdown, frontMatter);
    const footnotes = processFootnotes(processed);
    if (typeof marked === "undefined") {
      return footnotes.body
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/\n/g, "<br>") +
        renderFootnotesHtml(footnotes.definitions, footnotes.order, footnotes.indexById);
    }
    if (!state.markedConfigured) {
      marked.setOptions({
        gfm: true,
        breaks: true,
        mangle: false,
        headerIds: false,
      });
      state.markedConfigured = true;
    }
    const html = marked.parse(footnotes.body);
    return html + renderFootnotesHtml(footnotes.definitions, footnotes.order, footnotes.indexById);
  }

  function sanitize(html) {
    if (typeof DOMPurify !== "undefined") {
      return DOMPurify.sanitize(html, {
        ADD_TAGS: ["iframe"],
        ADD_ATTR: [
          "allow",
          "allowfullscreen",
          "frameborder",
          "loading",
          "referrerpolicy",
          "target",
          "rel",
          "class",
          "data-ws-embed",
          "data-hugo-shortcode",
          "src",
          "title",
        ],
      });
    }
    return html;
  }

  function getExtension(fileName) {
    const dot = fileName.lastIndexOf(".");
    if (dot === -1) {
      return "";
    }
    return fileName.slice(dot).toLowerCase();
  }

  function normalizeProjectPath(path) {
    if (!path) {
      return "";
    }
    const normalized = path.replace(/\\/g, "/");
    const segments = normalized.split("/");
    const safe = [];
    for (const segment of segments) {
      if (!segment || segment === ".") {
        continue;
      }
      if (segment === "..") {
        if (safe.length) {
          safe.pop();
        }
        continue;
      }
      safe.push(segment);
    }
    return safe.join("/");
  }

  function dirName(path) {
    const normalized = normalizeProjectPath(path);
    if (!normalized) {
      return "";
    }
    const index = normalized.lastIndexOf("/");
    return index === -1 ? "" : normalized.slice(0, index);
  }

  function splitNameAndExtension(fileName) {
    const trimmed = fileName.trim();
    const dot = trimmed.lastIndexOf(".");
    if (dot <= 0) {
      return { base: trimmed || "image", ext: "" };
    }
    return { base: trimmed.slice(0, dot), ext: trimmed.slice(dot) };
  }

  function sanitizeFileName(fileName) {
    const cleaned = (fileName || "image")
      .replace(/[\\/:*?"<>|]/g, "-")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-+|-+$/g, "");
    return cleaned || "image";
  }

  function relativePath(fromDir, toPath) {
    const fromParts = normalizeProjectPath(fromDir).split("/").filter(Boolean);
    const toParts = normalizeProjectPath(toPath).split("/").filter(Boolean);

    let common = 0;
    while (common < fromParts.length && common < toParts.length && fromParts[common] === toParts[common]) {
      common += 1;
    }

    const ups = Array.from({ length: fromParts.length - common }, () => "..");
    const downs = toParts.slice(common);
    const output = ups.concat(downs).join("/");
    return output || (toParts[toParts.length - 1] || "");
  }

  function isExternalUrl(source) {
    return (
      /^(?:[a-z]+:)?\/\//i.test(source) ||
      source.startsWith("data:") ||
      source.startsWith("blob:") ||
      source.startsWith("file:")
    );
  }

  function resolveImageProjectPath(source, baseFilePath) {
    if (!source || isExternalUrl(source) || source.startsWith("#")) {
      return "";
    }
    let decoded = source;
    try {
      decoded = decodeURIComponent(source);
    } catch (error) {
      decoded = source;
    }
    const clean = decoded.split("#")[0].split("?")[0];
    if (!clean) {
      return "";
    }
    if (clean.startsWith("/")) {
      return normalizeProjectPath(clean.slice(1));
    }
    const baseDir = dirName(baseFilePath || "");
    return normalizeProjectPath(joinPath(baseDir, clean));
  }

  function resolveTyporaRootSource(rootUrl, source) {
    const root = (rootUrl || "").trim();
    const cleanSource = (source || "").trim();
    if (!root || !cleanSource || !cleanSource.startsWith("/")) {
      return "";
    }

    const relative = cleanSource.replace(/^\/+/, "");
    if (/^[a-z]+:\/\//i.test(root) || root.startsWith("file://")) {
      try {
        const base = root.endsWith("/") ? root : root + "/";
        return new URL(relative, base).toString();
      } catch (error) {
        return "";
      }
    }

    const normalizedRoot = root.replace(/\/+$/, "");
    if (normalizedRoot.startsWith("/Users/") || normalizedRoot.startsWith("/home/") || normalizedRoot.startsWith("/Volumes/")) {
      return "file://" + normalizedRoot + "/" + relative;
    }
    return normalizedRoot + "/" + relative;
  }

  function clearContainerImageUrls(container) {
    const existing = imageUrlsByContainer.get(container);
    if (existing) {
      for (const url of existing) {
        URL.revokeObjectURL(url);
      }
    }
    imageUrlsByContainer.set(container, new Set());
  }

  function trackImageObjectUrl(container, url) {
    let urls = imageUrlsByContainer.get(container);
    if (!urls) {
      urls = new Set();
      imageUrlsByContainer.set(container, urls);
    }
    urls.add(url);
  }

  function isMarkdownFile(fileName) {
    const ext = getExtension(fileName);
    return ext === ".md" || ext === ".markdown";
  }

  function shouldShowFile(fileName) {
    const ext = getExtension(fileName);
    if (!ext) {
      return true;
    }
    return TEXT_FILE_EXTENSIONS.has(ext);
  }

  async function getNativeDirectoryHandleByPath(path, create) {
    if (!state.dirHandle) {
      return null;
    }
    const normalized = normalizeProjectPath(path);
    if (!normalized) {
      return state.dirHandle;
    }
    const parts = normalized.split("/").filter(Boolean);
    let cursor = state.dirHandle;
    for (const part of parts) {
      cursor = await cursor.getDirectoryHandle(part, { create });
    }
    return cursor;
  }

  async function getNativeFileHandleByPath(path, create) {
    const normalized = normalizeProjectPath(path);
    if (!normalized) {
      return null;
    }
    const parentPath = dirName(normalized);
    const fileName = baseName(normalized);
    const parent = await getNativeDirectoryHandleByPath(parentPath, create);
    if (!parent) {
      return null;
    }
    return await parent.getFileHandle(fileName, { create });
  }

  async function getProjectFileByPath(path) {
    const normalized = normalizeProjectPath(path);
    if (!normalized) {
      return null;
    }

    if (state.folderMode === "files") {
      return fileByPath.get(normalized) || null;
    }

    if (state.folderMode !== "handle" || !state.dirHandle) {
      return null;
    }

    try {
      const cached = fileHandleByPath.get(normalized);
      if (cached) {
        return await cached.getFile();
      }
      const handle = await getNativeFileHandleByPath(normalized, false);
      if (!handle) {
        return null;
      }
      return await handle.getFile();
    } catch (error) {
      return null;
    }
  }

  function joinPath(base, name) {
    return base ? base + "/" + name : name;
  }

  function baseName(path) {
    if (!path) {
      return "";
    }
    const parts = path.split("/").filter(Boolean);
    return parts.length ? parts[parts.length - 1] : path;
  }

  function updateLineNumbers() {
    const lines = editor.value.split("\n").length;
    lineNumbers.textContent = Array.from({ length: lines }, (_, i) => String(i + 1)).join("\n");
  }

  function updateStats() {
    const { body } = splitFrontMatter(editor.value);
    const trimmed = body.trim();
    const words = trimmed ? trimmed.split(/\s+/).length : 0;
    const chars = body.length;
    const readMinutes = words ? Math.max(1, Math.ceil(words / 250)) : 0;

    wordCountEl.textContent = "Words " + words;
    charCountEl.textContent = "Chars " + chars;
    readTimeEl.textContent = "Read " + readMinutes + " min";
  }

  function assignHeadingIds(container) {
    const counter = new Map();
    const headings = container.querySelectorAll("h1, h2, h3, h4, h5, h6");
    for (const heading of headings) {
      const base = slugifyHeading(heading.textContent || "section");
      const current = (counter.get(base) || 0) + 1;
      counter.set(base, current);
      heading.id = current === 1 ? base : `${base}-${current}`;
    }
  }

  function enhanceCallouts(container) {
    const blockquotes = container.querySelectorAll("blockquote");
    for (const blockquote of blockquotes) {
      const firstParagraph = blockquote.querySelector("p");
      if (!firstParagraph) {
        continue;
      }
      const rawText = firstParagraph.textContent.trim();
      const match = rawText.match(/^\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\]\s*(.*)$/i);
      if (!match) {
        continue;
      }

      const type = match[1].toLowerCase();
      blockquote.classList.add("md-callout", `md-callout-${type}`);

      const title = document.createElement("div");
      title.className = "md-callout-title";
      title.textContent = match[1].toUpperCase();
      blockquote.insertBefore(title, blockquote.firstChild);

      const remaining = match[2];
      if (remaining) {
        firstParagraph.textContent = remaining;
      } else {
        firstParagraph.remove();
      }
    }
  }

  function enhanceMermaid(container) {
    if (typeof mermaid === "undefined") {
      return;
    }
    const mermaidCodeBlocks = container.querySelectorAll("pre > code.language-mermaid");
    if (!mermaidCodeBlocks.length) {
      return;
    }

    for (const codeBlock of mermaidCodeBlocks) {
      const pre = codeBlock.parentElement;
      if (!pre) {
        continue;
      }
      const mermaidEl = document.createElement("div");
      mermaidEl.className = "mermaid";
      mermaidEl.textContent = codeBlock.textContent || "";
      pre.replaceWith(mermaidEl);
    }

    if (!state.mermaidInitialized) {
      mermaid.initialize({
        startOnLoad: false,
        securityLevel: "loose",
        theme: "neutral",
      });
      state.mermaidInitialized = true;
    }

    mermaid.run({ nodes: container.querySelectorAll(".mermaid") }).catch((error) => {
      console.warn("Mermaid render failed:", error);
    });
  }

  function enhanceFlowcharts(container) {
    if (typeof flowchart === "undefined") {
      return;
    }

    const flowCodeBlocks = container.querySelectorAll("pre > code.language-flow");
    if (!flowCodeBlocks.length) {
      return;
    }

    let chartIndex = 0;
    for (const codeBlock of flowCodeBlocks) {
      const pre = codeBlock.parentElement;
      if (!pre) {
        continue;
      }

      const source = codeBlock.textContent || "";
      const holder = document.createElement("div");
      holder.className = "flowchart-diagram";
      pre.replaceWith(holder);

      try {
        chartIndex += 1;
        const nodeId = "flowchart-" + Date.now() + "-" + chartIndex;
        holder.id = nodeId;
        const chart = flowchart.parse(source);
        chart.drawSVG(nodeId, {
          "line-width": 2,
          "font-family": "IBM Plex Sans, Noto Sans TC, sans-serif",
          "font-size": 14,
          "yes-text": "yes",
          "no-text": "no",
          "arrow-end": "block",
          scale: 1,
        });
      } catch (error) {
        console.warn("Flowchart render failed:", error);
        holder.classList.add("flowchart-error");
        holder.textContent = "Flowchart render failed. Please check syntax.";
      }
    }
  }

  function enhanceMath(container) {
    if (typeof renderMathInElement !== "function") {
      return;
    }
    try {
      renderMathInElement(container, {
        throwOnError: false,
        delimiters: [
          { left: "$$", right: "$$", display: true },
          { left: "\\[", right: "\\]", display: true },
          { left: "$", right: "$", display: false },
          { left: "\\(", right: "\\)", display: false },
        ],
      });
    } catch (error) {
      console.warn("Math render failed:", error);
    }
  }

  function enhanceRenderedMarkdown(container) {
    assignHeadingIds(container);
    enhanceCallouts(container);
    enhanceMermaid(container);
    enhanceFlowcharts(container);
    enhanceMath(container);
  }

  function sanitizePreviewEditableBlocks(container) {
    if (!container) {
      return;
    }

    hydrateShortcodeEmbedBlocks(container);

    const embeds = Array.from(container.querySelectorAll(".ws-embed, [data-hugo-shortcode], figure, .md-img-row"));
    for (const embed of embeds) {
      const hasIframe = Boolean(embed.querySelector("iframe"));
      const isShortcode = embed.hasAttribute("data-hugo-shortcode");
      const hasUsefulMedia = Boolean(embed.querySelector("img,video,audio,a[href],iframe")) || isShortcode;
      const text = (embed.textContent || "").replace(/\u200B/g, "").replace(/\u00A0/g, "").trim();
      const isVideo = embed.classList.contains("ws-embed-video");
      const isMalformedVideo = isVideo && !hasIframe;
      const isEmptyGeneric = !hasUsefulMedia && text.length === 0;

      if (isMalformedVideo) {
        const shortcodeHolder = embed.closest("[data-hugo-shortcode]");
        const shortcodeRaw = shortcodeHolder && shortcodeHolder.getAttribute ? shortcodeHolder.getAttribute("data-hugo-shortcode") : "";
        const rebuiltHtml = buildEmbedFromHugoShortcodeText(shortcodeRaw || "");
        if (rebuiltHtml) {
          const containerNode = document.createElement("div");
          containerNode.innerHTML = rebuiltHtml;
          const rebuilt = containerNode.firstElementChild;
          if (rebuilt) {
            embed.replaceWith(rebuilt);
            rebuilt.setAttribute("contenteditable", "false");
            rebuilt.setAttribute("spellcheck", "false");
            rebuilt.setAttribute("draggable", "false");
            continue;
          }
        }

        // Keep malformed video block instead of replacing with blank paragraph,
        // so users don't lose the embed while editing.
        embed.setAttribute("contenteditable", "false");
        embed.setAttribute("spellcheck", "false");
        embed.setAttribute("draggable", "false");
        continue;
      }

      if (isEmptyGeneric) {
        const placeholder = document.createElement("p");
        placeholder.innerHTML = "<br>";
        embed.replaceWith(placeholder);
        continue;
      }

      embed.setAttribute("contenteditable", "false");
      embed.setAttribute("spellcheck", "false");
      embed.setAttribute("draggable", "false");
    }
  }

  function hydrateShortcodeEmbedBlocks(container) {
    if (!container) {
      return;
    }
    const shortcodeBlocks = Array.from(container.querySelectorAll("[data-hugo-shortcode]"));
    for (const block of shortcodeBlocks) {
      if (!(block instanceof Element)) {
        continue;
      }
      if (block.querySelector("iframe")) {
        continue;
      }
      const rawShortcode = block.getAttribute("data-hugo-shortcode") || "";
      const rebuiltHtml = buildEmbedFromHugoShortcodeText(rawShortcode);
      if (!rebuiltHtml) {
        continue;
      }
      block.innerHTML = rebuiltHtml;
    }
  }

  function isEmbedBoundaryNode(node) {
    if (!(node instanceof Element)) {
      return false;
    }
    if (node.matches(".ws-embed, .ws-embed-video, [data-hugo-shortcode], figure, .md-img-row")) {
      return true;
    }
    return Boolean(node.querySelector(".ws-embed, .ws-embed-video, .md-img-row"));
  }

  function isEditableParagraphNode(node) {
    if (!(node instanceof Element)) {
      return false;
    }
    if (node.tagName !== "P") {
      return false;
    }
    const text = (node.textContent || "").replace(/\u200B/g, "").replace(/\u00A0/g, "").trim();
    const hasOnlyBreak = node.innerHTML.trim().toLowerCase() === "<br>" || node.innerHTML.trim().toLowerCase() === "<br/>";
    return text.length === 0 && (hasOnlyBreak || node.childElementCount <= 1);
  }

  function insertEditableParagraphAfterNode(node) {
    if (!(node instanceof Element) || !node.parentElement) {
      return null;
    }
    const paragraph = document.createElement("p");
    paragraph.innerHTML = "<br>";
    node.insertAdjacentElement("afterend", paragraph);
    return paragraph;
  }

  function ensureEditableAnchorsAfterEmbeds(container) {
    if (!container) {
      return;
    }

    const anchors = Array.from(container.children).filter((child) => isEmbedBoundaryNode(child));
    for (const anchor of anchors) {
      const next = anchor.nextElementSibling;
      if (!next) {
        insertEditableParagraphAfterNode(anchor);
        continue;
      }
      if (isEmbedBoundaryNode(next)) {
        insertEditableParagraphAfterNode(anchor);
        continue;
      }
    }

    const last = container.lastElementChild;
    if (!last) {
      const paragraph = document.createElement("p");
      paragraph.innerHTML = "<br>";
      container.appendChild(paragraph);
      return;
    }
    if (isEmbedBoundaryNode(last)) {
      insertEditableParagraphAfterNode(last);
    }
  }

  function insertEditableParagraphAfter(node) {
    if (!node || !(node instanceof Element) || !node.parentElement) {
      return false;
    }
    const paragraph = document.createElement("p");
    paragraph.innerHTML = "<br>";
    node.insertAdjacentElement("afterend", paragraph);
    const selection = window.getSelection();
    if (!selection) {
      return true;
    }
    const range = document.createRange();
    if (paragraph.firstChild) {
      range.setStartBefore(paragraph.firstChild);
    } else {
      range.selectNodeContents(paragraph);
      range.collapse(true);
    }
    range.collapse(true);
    selection.removeAllRanges();
    selection.addRange(range);
    preview.focus();
    return true;
  }

  function ensureTurndownService() {
    if (state.turndownService) {
      return state.turndownService;
    }
    if (typeof TurndownService !== "function") {
      return null;
    }

    const service = new TurndownService({
      headingStyle: "atx",
      bulletListMarker: "-",
      codeBlockStyle: "fenced",
      emDelimiter: "*",
      strongDelimiter: "**",
    });

    if (typeof turndownPluginGfm !== "undefined" && turndownPluginGfm.gfm) {
      service.use(turndownPluginGfm.gfm);
    }

    service.addRule("hugoShortcodePassthrough", {
      filter(node) {
        return node && node.nodeType === Node.ELEMENT_NODE && node.getAttribute && node.getAttribute("data-hugo-shortcode");
      },
      replacement(content, node) {
        const encoded = node && node.getAttribute ? node.getAttribute("data-hugo-shortcode") : "";
        const raw = decodeHtmlEntities(encoded || "").trim();
        return raw ? `\n\n${raw}\n\n` : "\n\n";
      },
    });

    service.addRule("writeStudioEmbedBlock", {
      filter(node) {
        return (
          node &&
          node.nodeName === "DIV" &&
          node.classList &&
          node.classList.contains("ws-embed")
        );
      },
      replacement(content, node) {
        if (!(node instanceof Element)) {
          return "\n\n";
        }
        const hasIframe = Boolean(node.querySelector("iframe"));
        const hasUsefulMedia = Boolean(node.querySelector("img,video,audio,a[href]"));
        const text = (node.textContent || "").replace(/\u200B/g, "").replace(/\u00A0/g, "").trim();
        if (node.classList.contains("ws-embed-video") && !hasIframe) {
          return "\n\n";
        }
        if (!hasUsefulMedia && text.length === 0) {
          return "\n\n";
        }
        const raw = node && node.outerHTML ? node.outerHTML.trim() : "";
        return raw ? `\n\n${raw}\n\n` : "\n\n";
      },
    });

    service.addRule("writeStudioIframe", {
      filter(node) {
        return node && node.nodeName === "IFRAME";
      },
      replacement(content, node) {
        const raw = node && node.outerHTML ? node.outerHTML.trim() : "";
        return raw ? `\n\n${raw}\n\n` : "\n\n";
      },
    });

    service.addRule("writeStudioImageRow", {
      filter(node) {
        return (
          node &&
          node.nodeName === "DIV" &&
          node.classList &&
          node.classList.contains("md-img-row")
        );
      },
      replacement(content, node) {
        if (!node || !(node instanceof Element)) {
          return "\n\n";
        }
        const style = node.getAttribute("style") || "";
        const colsMatch = style.match(/--imgrow-cols\s*:\s*(\d+)/i);
        const gapMatch = style.match(/--imgrow-gap\s*:\s*(\d+)/i);
        const cols = Math.max(1, Math.min(6, Number.parseInt((colsMatch && colsMatch[1]) || "2", 10) || 2));
        const gap = Math.max(0, Math.min(48, Number.parseInt((gapMatch && gapMatch[1]) || "14", 10) || 14));

        const figures = Array.from(node.querySelectorAll("figure.md-img-col"));
        const lines = [`{{< imgrow cols="${cols}" gap="${gap}" >}}`];
        for (const figure of figures) {
          const image = figure.querySelector("img");
          if (!image) {
            continue;
          }
          const src = (image.getAttribute("src") || image.src || "").trim();
          if (!src) {
            continue;
          }
          const alt = (image.getAttribute("alt") || "").trim();
          const link = figure.querySelector("a[href]");
          const href = link ? String(link.getAttribute("href") || "").trim() : "";
          const captionNode = figure.querySelector("figcaption");
          const caption = captionNode ? String(captionNode.textContent || "").trim() : "";

          let line = `{{< imgcol src="${escapeShortcodeAttribute(src)}" alt="${escapeShortcodeAttribute(alt)}"`;
          if (caption) {
            line += ` caption="${escapeShortcodeAttribute(caption)}"`;
          }
          if (href) {
            line += ` href="${escapeShortcodeAttribute(href)}"`;
          }
          line += " >}}";
          lines.push(line);
        }
        lines.push("{{< /imgrow >}}");
        return "\n\n" + lines.join("\n") + "\n\n";
      },
    });

    state.turndownService = service;
    return service;
  }

  function convertPreviewHtmlToMarkdown(container) {
    const service = ensureTurndownService();
    if (!service) {
      return null;
    }
    return service.turndown(container.innerHTML);
  }

  function setInlineInsertMenuOpen(open) {
    state.inlineMenuOpen = Boolean(open);
    inlineInsertMenu.classList.toggle("open", state.inlineMenuOpen);
    inlineInsertToggleBtn.setAttribute("aria-expanded", state.inlineMenuOpen ? "true" : "false");
  }

  function clearInlineHideTimer() {
    if (state.inlineHideTimer) {
      clearTimeout(state.inlineHideTimer);
      state.inlineHideTimer = null;
    }
  }

  function scheduleInlineHide() {
    clearInlineHideTimer();
    state.inlineHideTimer = setTimeout(() => {
      state.inlineHovering = false;
      state.inlineUiHovering = false;
      updateInlineComposerVisibility();
      state.inlineHideTimer = null;
    }, 220);
  }

  function closeUnsplashPanel() {
    unsplashPanel.classList.add("hidden");
  }

  function openUnsplashPanel() {
    unsplashPanel.classList.remove("hidden");
    unsplashQueryInput.focus();
    if (!unsplashResults.children.length) {
      renderUnsplashResults("medical education");
    }
  }

  function getPreviewSelectionRect() {
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) {
      return null;
    }

    const range = selection.getRangeAt(0).cloneRange();
    if (!preview.contains(range.startContainer)) {
      return null;
    }

    const rectList = range.getClientRects();
    if (rectList && rectList.length > 0) {
      const rect = rectList[0];
      if (Number.isFinite(rect.top) && Number.isFinite(rect.left)) {
        return rect;
      }
    }

    const rect = range.getBoundingClientRect();
    if (Number.isFinite(rect.top) && Number.isFinite(rect.left) && (rect.width || rect.height)) {
      return rect;
    }

    if (range.startContainer.nodeType === Node.ELEMENT_NODE) {
      const element = range.startContainer;
      const child = element.childNodes[range.startOffset] || element.childNodes[Math.max(0, range.startOffset - 1)];
      if (child && child.getBoundingClientRect) {
        return child.getBoundingClientRect();
      }
    }

    if (range.startContainer.nodeType === Node.TEXT_NODE && range.startContainer.parentElement) {
      return range.startContainer.parentElement.getBoundingClientRect();
    }

    if (range.collapsed) {
      try {
        const marker = document.createElement("span");
        marker.textContent = "\u200b";
        marker.className = "ws-caret-marker";
        range.insertNode(marker);
        const markerRect = marker.getBoundingClientRect();
        const parent = marker.parentNode;
        marker.remove();
        if (parent) {
          parent.normalize();
        }
        if (Number.isFinite(markerRect.top) && Number.isFinite(markerRect.left)) {
          return markerRect;
        }
      } catch (error) {
        // Ignore marker fallback failures and return preview rect below.
      }
    }

    return preview.getBoundingClientRect();
  }

  function isEligibleInlineBlock(node) {
    if (!node || node.nodeType !== Node.ELEMENT_NODE) {
      return false;
    }
    const tag = node.tagName.toLowerCase();
    return new Set(["p", "h1", "h2", "h3", "h4", "h5", "h6", "blockquote", "ul", "ol", "pre", "figure", "hr"]).has(tag);
  }

  function isEmptyParagraphAnchor(node) {
    if (!node || node.nodeType !== Node.ELEMENT_NODE || node.tagName.toLowerCase() !== "p") {
      return false;
    }
    const hasMedia = node.querySelector("img,iframe,video,table,pre,ul,ol,figure,blockquote");
    if (hasMedia) {
      return false;
    }
    const text = (node.textContent || "").replace(/\u200B/g, "").replace(/\u00A0/g, "").trim();
    return text.length === 0;
  }

  function findInlineAnchorBlock(fromNode) {
    let cursor = fromNode;
    if (!cursor) {
      return null;
    }
    if (cursor.nodeType === Node.TEXT_NODE) {
      cursor = cursor.parentElement;
    }
    while (cursor && cursor !== preview) {
      if (cursor.parentElement === preview && isEligibleInlineBlock(cursor)) {
        return cursor;
      }
      cursor = cursor.parentElement;
    }
    return null;
  }

  function findInlineAnchorBlockByY(clientY) {
    const candidates = Array.from(preview.children).filter((child) => isEmptyParagraphAnchor(child));

    for (const block of candidates) {
      const rect = block.getBoundingClientRect();
      if (clientY >= rect.top - 10 && clientY <= rect.bottom + 10) {
        return block;
      }
    }

    return null;
  }

  function getSelectionInlineAnchorBlock() {
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) {
      return null;
    }
    const range = selection.getRangeAt(0);
    if (!preview.contains(range.startContainer)) {
      return null;
    }
    const block = findInlineAnchorBlock(range.startContainer);
    if (!isEmptyParagraphAnchor(block)) {
      return null;
    }
    return block;
  }

  function setInlineAnchorBlock(block) {
    state.inlineAnchorBlock = isEmptyParagraphAnchor(block) ? block : null;
    positionInlineComposer();
  }

  function positionInlineComposer() {
    if (!state.previewEditMode || !state.inlineAnchorBlock || !preview.contains(state.inlineAnchorBlock)) {
      return;
    }

    const hostRect = previewPanel.getBoundingClientRect();
    const blockRect = state.inlineAnchorBlock.getBoundingClientRect();
    const selectionBlock = getSelectionInlineAnchorBlock();
    const selectionRect = getPreviewSelectionRect();
    const isSelectionRectInsideBlock =
      selectionRect &&
      Number.isFinite(selectionRect.top) &&
      selectionRect.top >= blockRect.top - 2 &&
      selectionRect.top <= blockRect.bottom + 2;
    const lineRect =
      selectionRect &&
        selectionBlock &&
        selectionBlock === state.inlineAnchorBlock &&
        isSelectionRectInsideBlock
        ? selectionRect
        : blockRect;
    const top = lineRect.top - hostRect.top - 8;
    const left = blockRect.left - hostRect.left - 42;
    const clampedTop = Math.max(10, Math.min(previewPanel.clientHeight - 54, top));
    inlineComposer.style.top = `${clampedTop}px`;
    inlineComposer.style.left = `${Math.max(8, left)}px`;
  }

  function updateInlineComposerVisibility() {
    const hasAnchor = Boolean(state.inlineAnchorBlock && preview.contains(state.inlineAnchorBlock));
    const shouldShow =
      state.previewEditMode && hasAnchor && (state.inlineMenuOpen || state.inlineHovering || state.inlineUiHovering);
    inlineComposer.classList.toggle("hidden", !state.previewEditMode);
    inlineComposer.classList.toggle("visible", shouldShow);

    if (!state.previewEditMode) {
      setInlineInsertMenuOpen(false);
      closeUnsplashPanel();
      state.inlineHovering = false;
      state.inlineUiHovering = false;
      state.inlineAnchorBlock = null;
      clearInlineHideTimer();
      return;
    }
    if (shouldShow) {
      positionInlineComposer();
    }
  }

  function setInlineHoverState(enabled) {
    if (enabled) {
      clearInlineHideTimer();
    }
    state.inlineHovering = Boolean(enabled);
    updateInlineComposerVisibility();
  }

  function setInlineUiHoverState(enabled) {
    if (enabled) {
      clearInlineHideTimer();
    }
    state.inlineUiHovering = Boolean(enabled);
    updateInlineComposerVisibility();
  }

  function ensureSelectionAtInlineAnchor() {
    if (!state.inlineAnchorBlock || !preview.contains(state.inlineAnchorBlock)) {
      return false;
    }
    const selection = window.getSelection();
    if (!selection) {
      return false;
    }
    const anchor = state.inlineAnchorBlock;
    const range = document.createRange();
    if (anchor.childNodes.length === 0) {
      anchor.appendChild(document.createElement("br"));
    }
    range.selectNodeContents(anchor);
    range.collapse(true);

    if (anchor.lastChild && anchor.lastChild.nodeType === Node.TEXT_NODE) {
      const length = anchor.lastChild.textContent ? anchor.lastChild.textContent.length : 0;
      range.setStart(anchor.lastChild, length);
      range.collapse(true);
    }

    if (anchor.firstChild && anchor.firstChild.nodeName === "BR") {
      range.setStartBefore(anchor.firstChild);
      range.collapse(true);
    }
    selection.removeAllRanges();
    selection.addRange(range);
    preview.focus();
    return true;
  }

  function recoverInlineAnchorFromComposerPosition() {
    const hostRect = previewPanel.getBoundingClientRect();
    const composerTop = Number.parseFloat(inlineComposer.style.top || "0");
    if (!Number.isFinite(composerTop)) {
      return null;
    }
    const probeY = hostRect.top + composerTop + 16;
    const block = findInlineAnchorBlockByY(probeY);
    if (block) {
      setInlineAnchorBlock(block);
      return block;
    }
    return null;
  }

  function placePreviewCaretAtEnd() {
    const selection = window.getSelection();
    if (!selection) {
      return;
    }
    const range = document.createRange();
    range.selectNodeContents(preview);
    range.collapse(false);
    selection.removeAllRanges();
    selection.addRange(range);
  }

  function ensurePreviewSelection() {
    preview.focus();
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) {
      placePreviewCaretAtEnd();
      return;
    }
    const range = selection.getRangeAt(0);
    if (!preview.contains(range.startContainer)) {
      placePreviewCaretAtEnd();
    }
  }

  function getPreviewTopLevelBlock(node) {
    let cursor = node;
    if (!cursor) {
      return null;
    }
    if (cursor.nodeType === Node.TEXT_NODE) {
      cursor = cursor.parentElement;
    }
    while (cursor && cursor !== preview) {
      if (cursor.parentElement === preview) {
        return cursor;
      }
      cursor = cursor.parentElement;
    }
    return null;
  }

  function createPreviewInsertionRange() {
    const selection = window.getSelection();
    const range = document.createRange();
    if (!selection || selection.rangeCount === 0) {
      range.selectNodeContents(preview);
      range.collapse(false);
      return range;
    }

    const sourceRange = selection.getRangeAt(0);
    const block = getPreviewTopLevelBlock(sourceRange.startContainer);
    if (!block) {
      range.selectNodeContents(preview);
      range.collapse(false);
      return range;
    }

    range.setStartAfter(block);
    range.collapse(true);
    return range;
  }

  function insertHtmlIntoPreview(html) {
    if (!state.previewEditMode) {
      return;
    }
    ensureSelectionAtInlineAnchor();
    const range = createPreviewInsertionRange();
    const fragment = range.createContextualFragment(html);
    const last = fragment.lastChild;
    range.insertNode(fragment);

    const selection = window.getSelection();
    if (selection) {
      const caretRange = document.createRange();
      if (last && last.parentNode) {
        caretRange.setStartAfter(last);
      } else {
        caretRange.selectNodeContents(preview);
        caretRange.collapse(false);
      }
      caretRange.collapse(true);
      selection.removeAllRanges();
      selection.addRange(caretRange);
    }

    preview.dispatchEvent(new Event("input", { bubbles: true }));
    syncEditorFromPreview();
    render();
    positionInlineComposer();
  }

  function normalizeSourceUrl(rawUrl) {
    const value = String(rawUrl || "").trim();
    if (!value) {
      return "";
    }
    if (/^(https?:)?\/\//i.test(value) || value.startsWith("/") || value.startsWith("./") || value.startsWith("../")) {
      return value;
    }
    return "https://" + value;
  }

  function parseYoutubeId(rawUrl) {
    const value = String(rawUrl || "").trim();
    if (!value) {
      return "";
    }
    let url = value;
    if (!/^(https?:)?\/\//i.test(url)) {
      url = "https://" + url;
    }
    try {
      const parsed = new URL(url);
      const host = parsed.hostname.replace(/^www\./, "").toLowerCase();
      let id = "";

      if (host === "youtu.be") {
        id = parsed.pathname.split("/").filter(Boolean)[0] || "";
      } else if (host.endsWith("youtube.com") || host.endsWith("youtube-nocookie.com")) {
        if (parsed.pathname === "/watch") {
          id = parsed.searchParams.get("v") || "";
        } else if (
          parsed.pathname.startsWith("/shorts/") ||
          parsed.pathname.startsWith("/embed/") ||
          parsed.pathname.startsWith("/live/") ||
          parsed.pathname.startsWith("/v/")
        ) {
          id = parsed.pathname.split("/").filter(Boolean)[1] || "";
        }
      }

      if (!id) {
        return "";
      }
      return /^[a-zA-Z0-9_-]{6,}$/.test(id) ? id : "";
    } catch (error) {
      return "";
    }
  }

  function extractSingleYoutubeUrl(rawText) {
    const text = String(rawText || "").trim();
    if (!text) {
      return "";
    }
    const lines = text.split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
    if (lines.length !== 1) {
      return "";
    }
    const line = lines[0].replace(/^<(.+)>$/, "$1").trim();
    if (!line) {
      return "";
    }
    return parseYoutubeId(line) ? line : "";
  }

  function extractSingleUrl(rawText) {
    const text = String(rawText || "").trim();
    if (!text) {
      return "";
    }
    const lines = text.split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
    if (lines.length !== 1) {
      return "";
    }
    return lines[0].replace(/^<(.+)>$/, "$1").trim();
  }

  function normalizePastedUrlToken(rawUrl) {
    const token = String(rawUrl || "")
      .trim()
      .replace(/^<(.+)>$/, "$1")
      .replace(/^[("'`]+/, "")
      .replace(/[)'"`.,!?;:，。！？；：]+$/g, "");
    return token;
  }

  function extractEmbeddableUrl(rawText) {
    const strict = extractSingleUrl(rawText);
    if (strict && (parseYoutubeId(strict) || parseInstagramPostId(strict))) {
      return strict;
    }

    const text = String(rawText || "");
    if (!text.trim()) {
      return "";
    }

    const matches = text.match(/(?:https?:\/\/|www\.)[^\s<>"']+/gi) || [];
    if (!matches.length) {
      return "";
    }

    for (const token of matches) {
      const candidate = normalizePastedUrlToken(token);
      if (!candidate) {
        continue;
      }
      if (parseYoutubeId(candidate) || parseInstagramPostId(candidate)) {
        return candidate;
      }
    }

    return "";
  }

  function parseInstagramPostId(rawUrl) {
    const value = String(rawUrl || "").trim();
    if (!value) {
      return "";
    }
    let url = value;
    if (!/^(https?:)?\/\//i.test(url)) {
      url = "https://" + url;
    }
    try {
      const parsed = new URL(url);
      const host = parsed.hostname.replace(/^www\./, "").toLowerCase();
      if (!host.endsWith("instagram.com")) {
        return "";
      }
      const parts = parsed.pathname.split("/").filter(Boolean);
      if (parts.length < 2) {
        return "";
      }
      const type = String(parts[0] || "").toLowerCase();
      const id = String(parts[1] || "").trim();
      if (!["p", "reel", "tv"].includes(type) || !id) {
        return "";
      }
      return id;
    } catch (error) {
      return "";
    }
  }

  function buildYoutubeEmbedHtml(rawUrl) {
    const videoId = parseYoutubeId(rawUrl);
    if (!videoId) {
      return "";
    }
    const embedUrl = `https://www.youtube.com/embed/${encodeURIComponent(videoId)}`;
    return (
      `<div class="ws-embed ws-embed-video" data-ws-embed="youtube-video">` +
      `<iframe src="${escapeHtmlAttribute(embedUrl)}" title="YouTube video player" ` +
      `allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ` +
      `referrerpolicy="strict-origin-when-cross-origin" allowfullscreen loading="lazy"></iframe>` +
      `</div>`
    );
  }

  function buildYoutubeShortcode(rawUrl) {
    const videoId = parseYoutubeId(rawUrl);
    if (!videoId) {
      return "";
    }
    return `{{< youtube ${videoId} >}}`;
  }

  function wrapEmbedHtmlWithShortcode(embedHtml, shortcode) {
    const html = String(embedHtml || "").trim();
    const rawShortcode = String(shortcode || "").trim();
    if (!html) {
      return "";
    }
    if (!rawShortcode) {
      return html;
    }
    return `<div data-hugo-shortcode="${escapeHtmlAttribute(rawShortcode)}">${html}</div>`;
  }

  function buildYoutubeEmbedHtmlWithShortcode(rawUrl) {
    const embedHtml = buildYoutubeEmbedHtml(rawUrl);
    const shortcode = buildYoutubeShortcode(rawUrl);
    return wrapEmbedHtmlWithShortcode(embedHtml, shortcode);
  }

  function buildInstagramEmbedHtml(rawUrl) {
    const id = parseInstagramPostId(rawUrl);
    if (!id) {
      return "";
    }
    const postUrl = `https://www.instagram.com/p/${encodeURIComponent(id)}/`;
    const embedUrl = `${postUrl}embed`;
    return (
      `<div class="ws-embed ws-embed-video" data-ws-embed="instagram-post">` +
      `<iframe src="${escapeHtmlAttribute(embedUrl)}" title="Instagram embed" loading="lazy"></iframe>` +
      `<a class="ws-embed-link" href="${escapeHtmlAttribute(postUrl)}" target="_blank" rel="noopener noreferrer">${escapeHtml(
        postUrl
      )}</a>` +
      `</div>`
    );
  }

  function buildInstagramShortcode(rawUrl) {
    const id = parseInstagramPostId(rawUrl);
    if (!id) {
      return "";
    }
    return `{{< instagram ${id} >}}`;
  }

  function buildInstagramEmbedHtmlWithShortcode(rawUrl) {
    const embedHtml = buildInstagramEmbedHtml(rawUrl);
    const shortcode = buildInstagramShortcode(rawUrl);
    return wrapEmbedHtmlWithShortcode(embedHtml, shortcode);
  }

  function buildAutoEmbedShortcodeFromUrl(rawUrl) {
    const youtube = buildYoutubeShortcode(rawUrl);
    if (youtube) {
      return youtube;
    }
    const instagram = buildInstagramShortcode(rawUrl);
    if (instagram) {
      return instagram;
    }
    return "";
  }

  function buildAutoEmbedHtmlFromUrl(rawUrl) {
    const youtube = buildYoutubeEmbedHtmlWithShortcode(rawUrl);
    if (youtube) {
      return youtube;
    }
    const instagram = buildInstagramEmbedHtmlWithShortcode(rawUrl);
    if (instagram) {
      return instagram;
    }
    return "";
  }

  function insertImageFromUrl() {
    const raw = window.prompt("Image URL", "https://");
    if (!raw) {
      return;
    }
    const src = normalizeSourceUrl(raw);
    const alt = window.prompt("Image alt text", "image") || "image";
    const html = `<p><img src="${escapeHtmlAttribute(src)}" alt="${escapeHtmlAttribute(alt)}"></p><p><br></p>`;
    insertHtmlIntoPreview(html);
    setInlineInsertMenuOpen(false);
  }

  function insertYoutubeEmbed() {
    const raw = window.prompt("YouTube URL", "https://www.youtube.com/watch?v=");
    if (!raw) {
      return;
    }
    const embedHtml = buildYoutubeEmbedHtmlWithShortcode(raw);
    if (!embedHtml) {
      alert("無法解析 YouTube 連結。請貼上完整的 YouTube URL。");
      return;
    }

    insertHtmlIntoPreview(embedHtml + "<p><br></p>");
    setInlineInsertMenuOpen(false);
  }

  function insertGenericEmbedLink() {
    const raw = window.prompt("Embed URL (X, website, etc.)", "https://");
    if (!raw) {
      return;
    }
    const src = normalizeSourceUrl(raw);
    const html =
      `<div class="ws-embed" data-ws-embed="link">` +
      `<p class="ws-embed-title">Embedded Link</p>` +
      `<a class="ws-embed-link" href="${escapeHtmlAttribute(src)}" target="_blank" rel="noopener noreferrer">${escapeHtml(src)}</a>` +
      `</div><p><br></p>`;
    insertHtmlIntoPreview(html);
    setInlineInsertMenuOpen(false);
  }

  function insertDividerBlock() {
    insertHtmlIntoPreview("<hr><p><br></p>");
    setInlineInsertMenuOpen(false);
  }

  function buildUnsplashCandidates(query) {
    const keyword = (query || "medical").trim() || "medical";
    return Array.from({ length: 8 }, (_, index) => ({
      previewUrl: `https://source.unsplash.com/random/960x640/?${encodeURIComponent(keyword)}&sig=${index + 1}`,
      alt: `${keyword} unsplash ${index + 1}`,
    }));
  }

  function insertUnsplashImage(url, alt) {
    const html = `<p><img src="${escapeHtmlAttribute(url)}" alt="${escapeHtmlAttribute(alt || "unsplash image")}"></p><p><br></p>`;
    insertHtmlIntoPreview(html);
    closeUnsplashPanel();
    setInlineInsertMenuOpen(false);
  }

  function renderUnsplashResults(query) {
    const cards = buildUnsplashCandidates(query);
    unsplashResults.innerHTML = "";

    for (const card of cards) {
      const wrapper = document.createElement("div");
      wrapper.className = "unsplash-card";

      const image = document.createElement("img");
      image.src = card.previewUrl;
      image.alt = card.alt;
      image.loading = "lazy";

      const button = document.createElement("button");
      button.type = "button";
      button.className = "btn";
      button.textContent = "Insert";
      button.addEventListener("click", () => {
        insertUnsplashImage(card.previewUrl, card.alt);
      });

      wrapper.append(image, button);
      unsplashResults.appendChild(wrapper);
    }
  }

  function updatePreviewEditUi() {
    preview.classList.toggle("editable", state.previewEditMode);
    preview.setAttribute("contenteditable", state.previewEditMode ? "true" : "false");
    preview.setAttribute("spellcheck", state.previewEditMode ? "true" : "false");
    previewEditBtn.textContent = "Edit: " + (state.previewEditMode ? "On" : "Off");
    previewEditBtn.classList.toggle("active", state.previewEditMode);
    if (previewApplyHint) {
      previewApplyHint.textContent = state.previewEditMode ? "Cmd+Enter 套用 • 停 0.6s 自動套用" : "Preview only";
      previewApplyHint.hidden = false;
    }
    updateInlineComposerVisibility();
  }

  async function resolveRenderedImages(container, frontMatter, baseFilePath, renderVersion) {
    clearContainerImageUrls(container);
    const settings = getImageSettingsFromFrontMatter(frontMatter);
    const images = Array.from(container.querySelectorAll("img"));
    for (const image of images) {
      if (renderVersion !== state.renderVersion) {
        return;
      }

      const source = (image.getAttribute("src") || "").trim();
      if (!source || isExternalUrl(source)) {
        continue;
      }

      const rooted = resolveTyporaRootSource(settings.rootUrl, source);
      if (rooted) {
        image.src = rooted;
        continue;
      }

      const projectPath = resolveImageProjectPath(source, baseFilePath);
      if (!projectPath) {
        continue;
      }

      const file = await getProjectFileByPath(projectPath);
      if (!file) {
        continue;
      }

      const objectUrl = URL.createObjectURL(file);
      trackImageObjectUrl(container, objectUrl);
      image.src = objectUrl;
    }
  }

  function render() {
    const { frontMatter, body } = splitFrontMatter(editor.value);
    state.renderVersion += 1;
    const renderVersion = state.renderVersion;
    preview.setAttribute("contenteditable", "false");
    preview.setAttribute("spellcheck", "false");
    preview.innerHTML = sanitize(parseMarkdown(body, frontMatter));
    hydrateShortcodeEmbedBlocks(preview);
    if (state.previewEditMode) {
      const hasElementChild = Array.from(preview.childNodes).some((node) => node.nodeType === Node.ELEMENT_NODE);
      const hasText = (preview.textContent || "").trim().length > 0;
      if (!hasElementChild && !hasText) {
        preview.innerHTML = "<p><br></p>";
      }
    }
    if (!state.previewEditMode) {
      enhanceRenderedMarkdown(preview);
    } else {
      sanitizePreviewEditableBlocks(preview);
      ensureEditableAnchorsAfterEmbeds(preview);
    }
    updatePreviewEditUi();
    resolveRenderedImages(preview, frontMatter, state.filePath, renderVersion).catch((error) => {
      console.warn("Image resolve failed:", error);
    });
  }

  function mergeFrontMatterWithBody(bodyMarkdown) {
    const { frontMatter } = splitFrontMatter(editor.value);
    const normalizedBody = (bodyMarkdown || "").replace(/\r/g, "").replace(/\n{3,}/g, "\n\n").trimEnd();
    if (!frontMatter) {
      return normalizedBody ? normalizedBody + "\n" : "";
    }
    return frontMatter + (normalizedBody ? normalizedBody + "\n" : "");
  }

  function restoreSpecialMarkdownSyntax(markdown) {
    let value = String(markdown || "");

    // Restore footnote syntax that turndown may escape in contenteditable mode.
    value = value
      .replace(/\\\[\^([^\]]+)\\\]/g, "[^$1]")
      .replace(/^\\\[\^([^\]]+)\\\]:/gm, "[^$1]:");

    // Restore common Hugo shortcode braces if user typed them in preview edit mode.
    value = value
      .replace(/\\\{\\\{</g, "{{<")
      .replace(/>\\\}\\\}/g, ">}}")
      .replace(/\\\{\\\{%/g, "{{%")
      .replace(/%\\\}\\\}/g, "%}}");

    value = value.replace(/<div[^>]*class="[^"]*ws-embed-video[^"]*"[^>]*>\s*(?:<br\s*\/?>|\u00a0|\s)*<\/div>/gi, "");
    value = value.replace(/\n{3,}/g, "\n\n");

    return value;
  }

  function syncEditorFromPreview() {
    if (!state.previewEditMode) {
      return;
    }
    sanitizePreviewEditableBlocks(preview);
    const markdownBody = convertPreviewHtmlToMarkdown(preview);
    if (markdownBody == null) {
      return;
    }

    const normalizedMarkdown = restoreSpecialMarkdownSyntax(markdownBody);
    const next = mergeFrontMatterWithBody(normalizedMarkdown);
    if (next === editor.value) {
      return;
    }

    editor.value = next;
    setDirty(true);
    updateLineNumbers();
    updateStats();
    persistDraft();
  }

  function scheduleSyncEditorFromPreview() {
    if (state.previewSyncTimer) {
      clearTimeout(state.previewSyncTimer);
    }
    state.previewSyncTimer = setTimeout(() => {
      syncEditorFromPreview();
      state.previewSyncTimer = null;
    }, 180);
  }

  function getTextOffsetWithin(container, node, offset) {
    if (!container || !node) {
      return 0;
    }
    try {
      const range = document.createRange();
      range.selectNodeContents(container);
      range.setEnd(node, offset);
      return range.toString().length;
    } catch (error) {
      return 0;
    }
  }

  function isPreviewBlockEmpty(block) {
    if (!block || block.nodeType !== Node.ELEMENT_NODE) {
      return false;
    }
    const hasStructuralChild = block.querySelector("img,iframe,video,hr,table,pre,ul,ol,figure,blockquote");
    if (hasStructuralChild) {
      return false;
    }
    const text = (block.textContent || "").replace(/\u200B/g, "").trim();
    return text.length === 0;
  }

  function getPreviewCaretSnapshot() {
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) {
      return null;
    }
    const range = selection.getRangeAt(0);
    if (!preview.contains(range.startContainer)) {
      return null;
    }
    const block = findInlineAnchorBlock(range.startContainer);
    const blockIndex = block ? Array.from(preview.children).indexOf(block) : -1;
    const blockOffset = block ? getTextOffsetWithin(block, range.startContainer, range.startOffset) : 0;
    const globalOffset = getTextOffsetWithin(preview, range.startContainer, range.startOffset);

    return {
      globalOffset,
      blockIndex,
      blockOffset,
      blockEmpty: isPreviewBlockEmpty(block),
    };
  }

  function setCaretTextOffsetInContainer(container, offset) {
    const selection = window.getSelection();
    if (!selection) {
      return false;
    }

    let remaining = Math.max(0, Number(offset) || 0);
    const walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT);
    let node = walker.nextNode();
    while (node) {
      const length = node.textContent ? node.textContent.length : 0;
      if (remaining <= length) {
        const range = document.createRange();
        range.setStart(node, remaining);
        range.collapse(true);
        selection.removeAllRanges();
        selection.addRange(range);
        return true;
      }
      remaining -= length;
      node = walker.nextNode();
    }

    const fallback = document.createRange();
    fallback.selectNodeContents(container);
    fallback.collapse(false);
    selection.removeAllRanges();
    selection.addRange(fallback);
    return true;
  }

  function setPreviewCaretFromSnapshot(snapshot) {
    if (!snapshot) {
      placePreviewCaretAtEnd();
      return;
    }

    if (Number.isInteger(snapshot.blockIndex) && snapshot.blockIndex >= 0) {
      const block = preview.children[snapshot.blockIndex];
      if (block && isEligibleInlineBlock(block)) {
        if (setCaretTextOffsetInContainer(block, snapshot.blockOffset)) {
          return;
        }
      }
    }

    if (setCaretTextOffsetInContainer(preview, snapshot.globalOffset)) {
      return;
    }
    placePreviewCaretAtEnd();
  }

  function applyPreviewRenderNow(options) {
    if (!state.previewEditMode) {
      return;
    }

    const opts = options || {};
    const snapshot = getPreviewCaretSnapshot();
    sanitizePreviewEditableBlocks(preview);
    syncEditorFromPreview();

    if (!opts.force && snapshot && snapshot.blockEmpty) {
      positionInlineComposer();
      return;
    }

    render();

    if (snapshot) {
      preview.focus();
      setPreviewCaretFromSnapshot(snapshot);
      positionInlineComposer();
    } else {
      placePreviewCaretAtEnd();
      positionInlineComposer();
    }
  }

  function scheduleAutoApplyPreviewRender() {
    if (state.previewAutoApplyTimer) {
      clearTimeout(state.previewAutoApplyTimer);
    }
    state.previewAutoApplyTimer = setTimeout(() => {
      applyPreviewRenderNow({ force: false });
      state.previewAutoApplyTimer = null;
    }, 600);
  }

  function setPreviewEditMode(enabled, options) {
    const opts = options || {};
    const next = Boolean(enabled);
    if (state.previewEditMode === next) {
      updatePreviewEditUi();
      return;
    }
    if (state.previewAutoApplyTimer) {
      clearTimeout(state.previewAutoApplyTimer);
      state.previewAutoApplyTimer = null;
    }
    state.previewEditMode = next;
    render();
    if (state.previewEditMode && !opts.skipFocus) {
      preview.focus();
    }
    if (!opts.skipPersist) {
      persistDraft();
    }
  }

  function setDirty(value) {
    state.dirty = value;
    if (value) {
      saveStateEl.textContent = "Unsaved changes";
      saveStateEl.className = "dirty";
    } else {
      saveStateEl.textContent = "Saved";
      saveStateEl.className = "saved";
    }
  }

  function updateFileMeta() {
    const relative = state.filePath || state.fileName || "untitled.md";
    const full = state.filePath && state.folderName ? state.folderName + "/" + state.filePath : relative;
    fileNameEl.textContent = full;
    editorPathEl.textContent = full;
  }

  function updateSampleButton() {
    if (!state.sampleFilePath) {
      sampleMdBtn.textContent = "Sample: 未設定";
      sampleMdBtn.disabled = true;
      return;
    }
    sampleMdBtn.textContent = "Sample: " + baseName(state.sampleFilePath);
    sampleMdBtn.disabled = false;
  }

  function persistDraft() {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        content: editor.value,
        fileName: state.fileName,
        filePath: state.filePath,
        wrapEnabled: state.wrapEnabled,
        sampleFilePath: state.sampleFilePath,
        previewEditMode: state.previewEditMode,
        cloudDocId: state.cloudDocId,
        savedAt: new Date().toISOString(),
      })
    );
  }

  function loadDraft() {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return false;
    }
    try {
      const payload = JSON.parse(raw);
      if (!payload || typeof payload.content !== "string") {
        return false;
      }
      state.fileName = payload.fileName || "untitled.md";
      state.filePath = payload.filePath || null;
      state.sampleFilePath = payload.sampleFilePath || null;
      state.cloudDocId = payload.cloudDocId || null;
      setEditorContent(payload.content);
      setWrapMode(Boolean(payload.wrapEnabled));
      const restoredPreviewEditMode = payload.previewEditMode === undefined ? true : Boolean(payload.previewEditMode);
      setPreviewEditMode(restoredPreviewEditMode, { skipPersist: true, skipFocus: true });
      updateFileMeta();
      updateSampleButton();
      return true;
    } catch (error) {
      console.warn("Invalid draft cache:", error);
      return false;
    }
  }

  function setEditorContent(content) {
    editor.value = content;
    updateLineNumbers();
    render();
    updateStats();
  }

  function clearTreeMaps() {
    dirHandleByPath.clear();
    fileHandleByPath.clear();
    fileByPath.clear();
    fileTreeEl.innerHTML = "";
  }

  function setActiveTreeItem(path) {
    const items = fileTreeEl.querySelectorAll(".tree-entry.file");
    for (const item of items) {
      item.classList.toggle("active", Boolean(path) && item.dataset.path === path);
    }
  }

  function renderSampleMarkers() {
    const toggles = fileTreeEl.querySelectorAll(".sample-toggle");
    for (const toggle of toggles) {
      toggle.classList.toggle("active", toggle.dataset.path === state.sampleFilePath);
      toggle.textContent = toggle.classList.contains("active") ? "★" : "☆";
      toggle.title = toggle.classList.contains("active") ? "目前示範檔" : "設為示範檔";
    }
  }

  function setSamplePath(path) {
    state.sampleFilePath = path;
    updateSampleButton();
    renderSampleMarkers();
    persistDraft();
  }

  function createTreeEmptyNode(label, depth) {
    const li = document.createElement("li");
    li.className = "tree-node";

    const row = document.createElement("div");
    row.className = "tree-row";
    row.style.paddingLeft = String(depth * 12) + "px";

    const dot = document.createElement("span");
    dot.className = "tree-toggle empty";
    dot.textContent = "•";

    const text = document.createElement("span");
    text.className = "tree-entry file";
    text.style.opacity = "0.65";
    text.textContent = label;

    const spacer = document.createElement("span");
    spacer.className = "sample-spacer";

    row.append(dot, text, spacer);
    li.appendChild(row);
    return li;
  }

  function createDirectoryNode(entry, depth, onToggleOpenChildren) {
    const li = document.createElement("li");
    li.className = "tree-node children-hidden";

    const row = document.createElement("div");
    row.className = "tree-row";
    row.style.paddingLeft = String(depth * 12) + "px";

    const toggleBtn = document.createElement("button");
    toggleBtn.className = "tree-toggle";
    toggleBtn.type = "button";
    toggleBtn.textContent = "▸";

    const folderBtn = document.createElement("button");
    folderBtn.className = "tree-entry folder";
    folderBtn.type = "button";
    folderBtn.textContent = entry.name;

    const spacer = document.createElement("span");
    spacer.className = "sample-spacer";

    const childrenEl = document.createElement("ul");

    const toggle = async () => {
      const hidden = li.classList.contains("children-hidden");
      if (hidden) {
        if (li.dataset.loaded !== "true" && onToggleOpenChildren) {
          await onToggleOpenChildren(childrenEl);
          li.dataset.loaded = "true";
        }
        li.classList.remove("children-hidden");
        toggleBtn.textContent = "▾";
      } else {
        li.classList.add("children-hidden");
        toggleBtn.textContent = "▸";
      }
    };

    toggleBtn.addEventListener("click", async (event) => {
      event.stopPropagation();
      await toggle();
    });

    folderBtn.addEventListener("click", async (event) => {
      event.stopPropagation();
      await toggle();
    });

    row.append(toggleBtn, folderBtn, spacer);
    li.append(row, childrenEl);
    return li;
  }

  function createFileNode(entry, depth, onOpen) {
    const li = document.createElement("li");
    li.className = "tree-node";

    const row = document.createElement("div");
    row.className = "tree-row";
    row.style.paddingLeft = String(depth * 12) + "px";

    const dot = document.createElement("span");
    dot.className = "tree-toggle empty";
    dot.textContent = "•";

    const fileBtn = document.createElement("button");
    fileBtn.className = "tree-entry file";
    fileBtn.type = "button";
    fileBtn.textContent = entry.name;
    fileBtn.dataset.path = entry.path;

    fileBtn.addEventListener("click", async () => {
      if (!maybeConfirmDiscard()) {
        return;
      }
      try {
        await onOpen();
      } catch (error) {
        console.error("Cannot open file from explorer:", error);
        alert("無法開啟檔案，請確認此檔案是文字格式。");
      }
    });

    let sampleControl = document.createElement("span");
    if (isMarkdownFile(entry.name)) {
      const sampleBtn = document.createElement("button");
      sampleBtn.className = "sample-toggle";
      sampleBtn.type = "button";
      sampleBtn.dataset.path = entry.path;
      sampleBtn.textContent = "☆";
      sampleBtn.title = "設為示範檔";
      sampleBtn.addEventListener("click", (event) => {
        event.stopPropagation();
        setSamplePath(entry.path);
      });
      sampleControl = sampleBtn;
    } else {
      sampleControl.className = "sample-spacer";
    }

    row.append(dot, fileBtn, sampleControl);
    li.appendChild(row);
    return li;
  }

  async function openFileHandle(handle, path) {
    const file = await handle.getFile();
    const text = await file.text();
    state.fileHandle = handle;
    state.fileName = handle.name;
    state.filePath = path || null;
    state.cloudDocId = null;
    setEditorContent(text);
    setDirty(false);
    updateFileMeta();
    setActiveTreeItem(state.filePath);
    persistDraft();
  }

  async function openLocalFile(file, path) {
    const text = await file.text();
    state.fileHandle = null;
    state.fileName = file.name;
    state.filePath = path || null;
    state.cloudDocId = null;
    setEditorContent(text);
    setDirty(false);
    updateFileMeta();
    setActiveTreeItem(state.filePath);
    persistDraft();
  }

  async function populateDirectory(path, listEl, depth) {
    const dirHandle = dirHandleByPath.get(path);
    if (!dirHandle) {
      return;
    }

    listEl.innerHTML = "";
    const dirs = [];
    const files = [];

    for await (const [name, handle] of dirHandle.entries()) {
      if (SKIP_ENTRIES.has(name)) {
        continue;
      }
      if (handle.kind === "directory") {
        dirs.push({ name, path: joinPath(path, name), handle });
      } else if (handle.kind === "file" && shouldShowFile(name)) {
        files.push({ name, path: joinPath(path, name), handle });
      }
    }

    dirs.sort((a, b) => a.name.localeCompare(b.name, "zh-Hant"));
    files.sort((a, b) => a.name.localeCompare(b.name, "zh-Hant"));

    for (const dir of dirs) {
      dirHandleByPath.set(dir.path, dir.handle);
      const node = createDirectoryNode(dir, depth, async (childrenEl) => {
        await populateDirectory(dir.path, childrenEl, depth + 1);
      });
      listEl.appendChild(node);
    }

    for (const file of files) {
      fileHandleByPath.set(file.path, file.handle);
      const node = createFileNode(file, depth, async () => {
        await openFileHandle(file.handle, file.path);
      });
      listEl.appendChild(node);
    }

    if (dirs.length === 0 && files.length === 0) {
      listEl.appendChild(createTreeEmptyNode("(empty)", depth));
    }
  }

  function buildVirtualTree(files) {
    const root = { children: new Map(), files: [] };
    fileByPath.clear();

    for (const file of files) {
      const relative = (file.webkitRelativePath || file.name).split("/").slice(1).join("/") || file.name;
      const parts = relative.split("/").filter(Boolean);
      if (parts.length === 0) {
        continue;
      }

      let cursor = root;
      for (let i = 0; i < parts.length - 1; i += 1) {
        const dirName = parts[i];
        if (!cursor.children.has(dirName)) {
          cursor.children.set(dirName, { children: new Map(), files: [] });
        }
        cursor = cursor.children.get(dirName);
      }

      const fileName = parts[parts.length - 1];
      const path = parts.join("/");
      fileByPath.set(path, file);
      if (shouldShowFile(fileName)) {
        cursor.files.push({ name: fileName, path, file });
      }
    }

    return root;
  }

  function renderVirtualDirectory(node, listEl, depth) {
    listEl.innerHTML = "";

    const dirs = Array.from(node.children.entries()).sort((a, b) => a[0].localeCompare(b[0], "zh-Hant"));
    const files = node.files.sort((a, b) => a.name.localeCompare(b.name, "zh-Hant"));

    for (const [dirName, dirNode] of dirs) {
      const entry = { name: dirName };
      const dirEl = createDirectoryNode(entry, depth, async (childrenEl) => {
        renderVirtualDirectory(dirNode, childrenEl, depth + 1);
      });
      listEl.appendChild(dirEl);
    }

    for (const file of files) {
      const nodeEl = createFileNode(file, depth, async () => {
        await openLocalFile(file.file, file.path);
      });
      listEl.appendChild(nodeEl);
    }

    if (dirs.length === 0 && files.length === 0) {
      listEl.appendChild(createTreeEmptyNode("(empty)", depth));
    }
  }

  async function renderTreeRoot() {
    clearTreeMaps();

    if (!state.dirHandle) {
      folderNameEl.textContent = "尚未選擇資料夾";
      explorerHintEl.hidden = false;
      explorerHintEl.textContent = "按「開資料夾」選擇專案資料夾後，這裡會顯示檔案樹狀清單。";
      updateSampleButton();
      return;
    }

    folderNameEl.textContent = state.dirHandle.name;
    explorerHintEl.hidden = false;
    explorerHintEl.textContent = "資料夾已連結，可直接點檔編輯並用「儲存」覆寫原檔。";

    dirHandleByPath.set("", state.dirHandle);
    await populateDirectory("", fileTreeEl, 0);
    setActiveTreeItem(state.filePath);
    renderSampleMarkers();
    updateSampleButton();
  }

  function renderVirtualTree(files) {
    clearTreeMaps();
    const tree = buildVirtualTree(files);
    renderVirtualDirectory(tree, fileTreeEl, 0);
    setActiveTreeItem(state.filePath);
    renderSampleMarkers();
    updateSampleButton();
  }

  function triggerFolderInputPicker() {
    try {
      if (typeof folderInput.showPicker === "function") {
        folderInput.showPicker();
        return;
      }
    } catch (error) {
      console.warn("folderInput.showPicker failed, fallback to click:", error);
    }
    folderInput.click();
  }

  function triggerFileInputPicker() {
    try {
      if (typeof fileInput.showPicker === "function") {
        fileInput.showPicker();
        return;
      }
    } catch (error) {
      console.warn("fileInput.showPicker failed, fallback to click:", error);
    }
    fileInput.click();
  }

  async function openFolder() {
    const canUseNativePicker = typeof window.showDirectoryPicker === "function" && window.isSecureContext;

    if (state.forceFolderInput || !canUseNativePicker) {
      triggerFolderInputPicker();
      return;
    }

    if (canUseNativePicker) {
      try {
        const handle = await window.showDirectoryPicker({ mode: "readwrite" });
        state.dirHandle = handle;
        state.folderMode = "handle";
        state.virtualFiles = [];
        state.forceFolderInput = false;
        state.folderName = handle.name;
        await renderTreeRoot();
        updateFileMeta();
        return;
      } catch (error) {
        if (error && error.name === "AbortError") {
          return;
        }
        console.error("Native folder picker failed, fallback to input:", error);
        state.forceFolderInput = true;
        alert("原生資料夾選擇器無法使用，改用相容模式。請再按一次「開資料夾」。");
        triggerFolderInputPicker();
        return;
      }
    }
  }

  function suggestFileNameFromTitle() {
    const titleMatch = editor.value.match(/^title:\s*["']?([^"'\n]+)["']?/m);
    const title = titleMatch ? titleMatch[1] : "new-post";
    const slug = title
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");
    return slug ? slug + ".md" : "new-post.md";
  }

  async function writeFile(handle, content) {
    if (typeof handle.requestPermission === "function") {
      const permission = await handle.requestPermission({ mode: "readwrite" });
      if (permission !== "granted") {
        throw new Error("Permission denied");
      }
    }
    const writable = await handle.createWritable();
    await writable.write(content);
    await writable.close();
  }

  function saveViaDownload() {
    const blob = new Blob([editor.value], { type: "text/markdown;charset=utf-8" });
    const anchor = document.createElement("a");
    anchor.href = URL.createObjectURL(blob);
    anchor.download = state.fileName || suggestFileNameFromTitle();
    anchor.click();
    URL.revokeObjectURL(anchor.href);
    setDirty(false);
  }

  async function saveFile(forceSaveAs) {
    try {
      if (!forceSaveAs && state.folderMode === "files" && !state.fileHandle) {
        alert("目前資料夾是相容模式載入，無法直接覆寫原檔，將改為另存新檔。");
        forceSaveAs = true;
      }

      if (state.fileHandle && !forceSaveAs) {
        await writeFile(state.fileHandle, editor.value);
        setDirty(false);
        updateFileMeta();
        return;
      }

      if (typeof window.showSaveFilePicker === "function") {
        const suggestedName = state.fileName || suggestFileNameFromTitle();
        state.fileHandle = await window.showSaveFilePicker({
          suggestedName,
          types: [
            {
              description: "Markdown files",
              accept: { "text/markdown": [".md", ".markdown"] },
            },
          ],
        });
        state.fileName = state.fileHandle.name;
        state.filePath = null;
        await writeFile(state.fileHandle, editor.value);
        setActiveTreeItem(null);
        setDirty(false);
        updateFileMeta();
        return;
      }

      saveViaDownload();
    } catch (error) {
      if (error && error.name === "AbortError") {
        return;
      }
      console.error("Save failed:", error);
      alert("儲存失敗，改用下載方式。");
      saveViaDownload();
    }
  }

  async function openFile() {
    try {
      if (typeof window.showOpenFilePicker === "function") {
        const [handle] = await window.showOpenFilePicker({
          multiple: false,
          types: [
            {
              description: "Markdown files",
              accept: { "text/markdown": [".md", ".markdown", ".txt"] },
            },
          ],
        });
        if (!handle) {
          return;
        }
        await openFileHandle(handle, null);
        state.folderMode = "none";
        state.filePath = null;
        setActiveTreeItem(null);
        updateFileMeta();
        return;
      }

      fileInput.value = "";
      triggerFileInputPicker();
    } catch (error) {
      if (error && error.name === "AbortError") {
        return;
      }
      console.error("Open failed:", error);
      alert("原生開檔器無法使用，改用相容模式。請再按一次「開啟 .md」。");
      fileInput.value = "";
      triggerFileInputPicker();
    }
  }

  function setWrapMode(enabled) {
    state.wrapEnabled = enabled;
    editor.classList.toggle("wrap-on", enabled);
    toggleWrapBtn.textContent = "自動換行：" + (enabled ? "開" : "關");
  }

  function syncPreviewScroll() {
    const editorScrollable = editor.scrollHeight - editor.clientHeight;
    if (editorScrollable <= 0) {
      return;
    }
    const ratio = editor.scrollTop / editorScrollable;
    const previewScrollable = preview.scrollHeight - preview.clientHeight;
    preview.scrollTop = ratio * previewScrollable;
    lineNumbers.scrollTop = editor.scrollTop;
  }

  function maybeConfirmDiscard() {
    if (!state.dirty) {
      return true;
    }
    return window.confirm("目前有未儲存內容，確定要覆蓋嗎？");
  }

  function isEditorActive() {
    return document.activeElement === editor ||
      document.activeElement === preview ||
      preview.contains(document.activeElement);
  }

  function emitEditorInput() {
    editor.dispatchEvent(new Event("input", { bubbles: true }));
  }

  function wrapSelection(before, after, placeholder) {
    const start = editor.selectionStart;
    const end = editor.selectionEnd;
    const selected = editor.value.slice(start, end);
    const text = selected || placeholder;
    const replaced = `${before}${text}${after}`;
    editor.setRangeText(replaced, start, end, "end");
    if (!selected) {
      editor.selectionStart = start + before.length;
      editor.selectionEnd = start + before.length + text.length;
    }
    emitEditorInput();
  }

  function applyFormatting(action) {
    const isPreviewFocused = document.activeElement === preview || preview.contains(document.activeElement);

    if (isPreviewFocused) {
      const sel = window.getSelection();
      if (!sel || !sel.rangeCount) return;

      switch (action) {
        case "bold":
          document.execCommand("bold");
          break;
        case "italic":
          document.execCommand("italic");
          break;
        case "code": {
          const text = sel.toString() || "code";
          document.execCommand("insertHTML", false, `<code>${escapeHtml(text)}</code>`);
          break;
        }
        case "highlight": {
          const text = sel.toString() || "highlight";
          document.execCommand("insertHTML", false, `<mark>${escapeHtml(text)}</mark>`);
          break;
        }
        case "h1": document.execCommand("formatBlock", false, "H1"); break;
        case "h2": document.execCommand("formatBlock", false, "H2"); break;
        case "h3": document.execCommand("formatBlock", false, "H3"); break;
        case "h4": document.execCommand("formatBlock", false, "H4"); break;
        case "h5": document.execCommand("formatBlock", false, "H5"); break;
        case "h6": document.execCommand("formatBlock", false, "H6"); break;
        case "ul": document.execCommand("insertUnorderedList"); break;
        case "ol": document.execCommand("insertOrderedList"); break;
        case "quote": document.execCommand("formatBlock", false, "BLOCKQUOTE"); break;
        case "link": {
          const url = window.prompt("Link URL", "https://");
          if (url) document.execCommand("createLink", false, url);
          break;
        }
      }
      syncEditorFromPreview();
    } else {
      switch (action) {
        case "bold": wrapSelection("**", "**", "bold"); break;
        case "italic": wrapSelection("*", "*", "italic"); break;
        case "code": wrapSelection("`", "`", "code"); break;
        case "highlight": wrapSelection("==", "==", "highlight"); break;
        case "h1": setHeadingLevel(1); break;
        case "h2": setHeadingLevel(2); break;
        case "h3": setHeadingLevel(3); break;
        case "h4": setHeadingLevel(4); break;
        case "h5": setHeadingLevel(5); break;
        case "h6": setHeadingLevel(6); break;
        case "ul":
          transformSelectedLines((lines) => lines.map((line) => {
            const stripped = line.replace(/^\s*(?:[-*+]|\d+\.)\s+/, ""); return `- ${stripped}`;
          }));
          break;
        case "ol":
          transformSelectedLines((lines) => {
            let index = 0;
            return lines.map((line) => {
              index += 1;
              const stripped = line.replace(/^\s*(?:[-*+]|\d+\.)\s+/, ""); return `${index}. ${stripped}`;
            });
          });
          break;
        case "quote":
          transformSelectedLines((lines) => lines.map((line) => {
            const stripped = line.replace(/^\s*>\s?/, ""); return `> ${stripped}`;
          }));
          break;
        case "link": {
          const selected = editor.value.slice(editor.selectionStart, editor.selectionEnd) || "link text";
          const url = window.prompt("Link URL", "https://");
          if (url) wrapSelection("[", `](${url})`, selected);
          break;
        }
      }
    }
  }

  function insertAtCursor(text) {
    const start = editor.selectionStart;
    const end = editor.selectionEnd;
    editor.setRangeText(text, start, end, "end");
    emitEditorInput();
  }

  function transformSelectedLines(transformer) {
    const value = editor.value;
    const selectionStart = editor.selectionStart;
    const selectionEnd = editor.selectionEnd;
    const lineStart = value.lastIndexOf("\n", selectionStart - 1) + 1;
    const lineEndIndex = value.indexOf("\n", selectionEnd);
    const lineEnd = lineEndIndex === -1 ? value.length : lineEndIndex;
    const block = value.slice(lineStart, lineEnd);
    const lines = block.split("\n");
    const transformed = transformer(lines).join("\n");
    editor.setRangeText(transformed, lineStart, lineEnd, "select");
    emitEditorInput();
  }

  function setHeadingLevel(level) {
    transformSelectedLines((lines) =>
      lines.map((line) => {
        const stripped = line.replace(/^\s*#{1,6}\s+/, "");
        return `${"#".repeat(level)} ${stripped}`;
      })
    );
  }

  function getLineIndexFromPosition(value, position) {
    const clamped = Math.max(0, Math.min(position, value.length));
    let cursor = 0;
    const lines = value.split("\n");
    for (let i = 0; i < lines.length; i += 1) {
      const lineEnd = cursor + lines[i].length;
      if (clamped <= lineEnd) {
        return i;
      }
      cursor = lineEnd + 1;
    }
    return lines.length - 1;
  }

  function getCharOffsetForLine(lines, lineIndex) {
    let offset = 0;
    for (let i = 0; i < lineIndex; i += 1) {
      offset += lines[i].length + 1;
    }
    return offset;
  }

  function isMarkdownTableRow(line) {
    return /^\s*\|.*\|\s*$/.test(line);
  }

  function isTableSeparatorRow(line) {
    const trimmed = line.trim();
    if (!trimmed.includes("|")) {
      return false;
    }
    const withoutEdges = trimmed.replace(/^\|/, "").replace(/\|$/, "");
    const cells = withoutEdges.split("|").map((cell) => cell.trim());
    if (!cells.length) {
      return false;
    }
    return cells.every((cell) => /^:?-{3,}:?$/.test(cell));
  }

  function getTableContext(position) {
    const value = editor.value;
    const lines = value.split("\n");
    const lineIndex = getLineIndexFromPosition(value, position);

    if (!isMarkdownTableRow(lines[lineIndex])) {
      return null;
    }

    let start = lineIndex;
    let end = lineIndex;
    while (start > 0 && isMarkdownTableRow(lines[start - 1])) {
      start -= 1;
    }
    while (end < lines.length - 1 && isMarkdownTableRow(lines[end + 1])) {
      end += 1;
    }

    if (end - start < 1) {
      return null;
    }

    let separatorIndex = -1;
    for (let i = start; i <= end; i += 1) {
      if (isTableSeparatorRow(lines[i])) {
        separatorIndex = i;
        break;
      }
    }
    if (separatorIndex === -1) {
      return null;
    }

    return { lines, lineIndex, start, end, separatorIndex };
  }

  function countTableColumns(line) {
    const trimmed = line.trim().replace(/^\|/, "").replace(/\|$/, "");
    return Math.max(1, trimmed.split("|").length);
  }

  function createEmptyTableRow(columnCount) {
    return "| " + Array.from({ length: columnCount }).fill("").join(" | ") + " |";
  }

  function insertTableRowBelowCursor() {
    const table = getTableContext(editor.selectionStart);
    if (!table) {
      return false;
    }

    const { lines, lineIndex, start, separatorIndex } = table;
    const headerLine = lines[start];
    const columnCount = countTableColumns(headerLine);
    const rowText = createEmptyTableRow(columnCount);
    const insertAfter = isTableSeparatorRow(lines[lineIndex]) ? separatorIndex : lineIndex;
    const insertAt = getCharOffsetForLine(lines, insertAfter) + lines[insertAfter].length;

    editor.setRangeText("\n" + rowText, insertAt, insertAt, "end");
    const caret = insertAt + 3;
    editor.selectionStart = caret;
    editor.selectionEnd = caret;
    emitEditorInput();
    return true;
  }

  function deleteTableRowAtCursor() {
    const table = getTableContext(editor.selectionStart);
    if (!table) {
      return false;
    }

    const { lines, lineIndex, separatorIndex } = table;
    if (lineIndex <= separatorIndex) {
      return false;
    }

    const lineStart = getCharOffsetForLine(lines, lineIndex);
    const lineEnd = lineStart + lines[lineIndex].length;

    let deleteStart = lineStart;
    let deleteEnd = lineEnd;
    if (lineIndex < lines.length - 1) {
      deleteEnd += 1;
    } else if (lineStart > 0) {
      deleteStart -= 1;
    }

    editor.setRangeText("", deleteStart, deleteEnd, "start");
    editor.selectionStart = deleteStart;
    editor.selectionEnd = deleteStart;
    emitEditorInput();
    return true;
  }

  function initializeResize() {
    let dragging = false;

    const onMove = (event) => {
      if (!dragging) {
        return;
      }
      const workspace = document.querySelector(".workspace");
      const bounds = workspace.getBoundingClientRect();
      const isVertical = window.matchMedia("(max-width: 960px)").matches;

      if (!isVertical) {
        const x = event.clientX - bounds.left;
        const min = 260;
        const max = bounds.width - 260;
        const clamped = Math.max(min, Math.min(max, x));
        const leftPercent = (clamped / bounds.width) * 100;
        editorPanel.style.width = leftPercent + "%";
        previewPanel.style.width = 100 - leftPercent + "%";
      } else {
        const y = event.clientY - bounds.top;
        const min = 240;
        const max = bounds.height - 240;
        const clamped = Math.max(min, Math.min(max, y));
        editorPanel.style.minHeight = clamped + "px";
      }
    };

    divider.addEventListener("mousedown", () => {
      dragging = true;
      divider.classList.add("dragging");
      document.body.style.userSelect = "none";
    });

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", () => {
      dragging = false;
      divider.classList.remove("dragging");
      document.body.style.userSelect = "";
    });
  }

  async function getSampleContent() {
    if (!state.sampleFilePath) {
      return null;
    }

    if (state.filePath === state.sampleFilePath) {
      return editor.value;
    }

    if (state.folderMode === "handle") {
      const handle = fileHandleByPath.get(state.sampleFilePath);
      if (handle) {
        const file = await handle.getFile();
        return await file.text();
      }
      return await readNativeFileByPath(state.sampleFilePath);
    }

    if (state.folderMode === "files") {
      const file = fileByPath.get(state.sampleFilePath);
      if (!file) {
        return null;
      }
      return await file.text();
    }

    return null;
  }

  async function readNativeFileByPath(path) {
    if (!state.dirHandle || !path) {
      return null;
    }

    try {
      const handle = await getNativeFileHandleByPath(path, false);
      if (!handle) {
        return null;
      }
      const file = await handle.getFile();
      return await file.text();
    } catch (error) {
      console.warn("Cannot read sample path from native handle:", path, error);
      return null;
    }
  }

  async function configureCloudConnection() {
    const currentBase = state.cloudApiBase || getDefaultCloudApiBase();
    const apiBase = window.prompt("雲端 API Base URL", currentBase);
    if (apiBase == null) {
      return;
    }
    const token = window.prompt("雲端 Token（留空代表不帶 token）", state.cloudToken || "");
    if (token == null) {
      return;
    }
    state.cloudApiBase = normalizeCloudApiBase(apiBase) || getDefaultCloudApiBase();
    state.cloudToken = String(token || "").trim();
    persistCloudConfig();

    try {
      await cloudRequest("/health", { method: "GET" }, false);
      updateCloudUi();
      alert("雲端連線設定完成。");
    } catch (error) {
      updateCloudUi();
      alert(`雲端連線測試失敗：${error instanceof Error ? error.message : String(error)}`);
    }
  }

  async function saveCloudDoc(options) {
    const opts = options || {};
    if (!state.cloudApiBase) {
      state.cloudApiBase = getDefaultCloudApiBase();
    }

    if (!state.cloudToken && !opts.allowNoToken) {
      alert("請先按「更多 → 雲端設定」設定 token。");
      return false;
    }

    const payload = {
      id: state.cloudDocId || undefined,
      fileName: state.fileName || "untitled.md",
      title: inferTitleForCloudSave(editor.value, state.fileName || "Untitled"),
      content: editor.value,
      updatedFrom: navigator.userAgent || "",
    };

    try {
      const response = await cloudRequest("/docs", { method: "POST", body: JSON.stringify(payload) }, true);
      if (!response || !response.doc || !response.doc.id) {
        throw new Error("雲端儲存失敗。");
      }
      state.cloudDocId = response.doc.id;
      state.fileName = response.doc.fileName || state.fileName;
      state.filePath = `cloud:${response.doc.id}`;
      setDirty(false);
      updateFileMeta();
      updateCloudUi();
      if (!opts.silent) {
        alert("已儲存到雲端。");
      }
      persistDraft();
      return true;
    } catch (error) {
      if (!opts.silent) {
        alert(`雲端儲存失敗：${error instanceof Error ? error.message : String(error)}`);
      }
      return false;
    }
  }

  async function openCloudDoc() {
    if (!state.cloudApiBase) {
      state.cloudApiBase = getDefaultCloudApiBase();
    }
    if (!state.cloudToken) {
      alert("請先按「更多 → 雲端設定」設定 token。");
      return;
    }

    try {
      const listing = await cloudRequest("/docs", { method: "GET" }, true);
      const docs = Array.isArray(listing.docs) ? listing.docs : [];
      if (!docs.length) {
        alert("雲端目前沒有文章。");
        return;
      }
      const lines = docs.slice(0, 30).map((doc, index) => {
        const title = doc.title || doc.fileName || "未命名";
        const updated = doc.updatedAt ? new Date(doc.updatedAt).toLocaleString() : "-";
        return `${index + 1}. ${title} (${updated})`;
      });
      const pickedRaw = window.prompt(
        `輸入要開啟的編號（1-${Math.min(30, docs.length)}）：\n${lines.join("\n")}`,
        "1"
      );
      if (pickedRaw == null) {
        return;
      }
      const picked = Number.parseInt(pickedRaw, 10);
      if (!Number.isInteger(picked) || picked < 1 || picked > Math.min(30, docs.length)) {
        alert("輸入的編號無效。");
        return;
      }

      const target = docs[picked - 1];
      const detail = await cloudRequest(`/docs/${encodeURIComponent(target.id)}`, { method: "GET" }, true);
      if (!detail || !detail.doc || typeof detail.doc.content !== "string") {
        throw new Error("雲端文件格式錯誤。");
      }

      state.fileHandle = null;
      state.dirHandle = null;
      state.folderMode = "none";
      state.virtualFiles = [];
      state.fileName = detail.doc.fileName || `${target.id}.md`;
      state.filePath = `cloud:${target.id}`;
      state.cloudDocId = target.id;
      setEditorContent(detail.doc.content);
      setDirty(false);
      setActiveTreeItem(null);
      updateFileMeta();
      updateCloudUi();
      persistDraft();

      await tryAutoConvertCloudImagesToIpicAndResave();
    } catch (error) {
      alert(`雲端開檔失敗：${error instanceof Error ? error.message : String(error)}`);
    }
  }

  async function checkIpicBridgeAvailable(force) {
    const now = Date.now();
    if (!force && state.ipicBridgeAvailable !== null && now - state.ipicBridgeLastCheckedAt < 4000) {
      return state.ipicBridgeAvailable;
    }
    state.ipicBridgeLastCheckedAt = now;
    try {
      const response = await fetch("http://127.0.0.1:44777/health", { method: "GET" });
      const payload = await response.json();
      state.ipicBridgeAvailable = Boolean(response.ok && payload && payload.ok);
      return state.ipicBridgeAvailable;
    } catch (error) {
      state.ipicBridgeAvailable = false;
      return false;
    }
  }

  async function uploadImageToCloudAsset(file) {
    if (!state.cloudApiBase || !state.cloudToken) {
      return null;
    }
    const fileName = sanitizeFileName(file.name || `image-${Date.now()}.png`);
    const dataUrl = await readFileAsDataUrl(file);
    const payload = await cloudRequest(
      "/assets",
      {
        method: "POST",
        body: JSON.stringify({
          name: fileName,
          dataUrl,
          docId: state.cloudDocId || "",
        }),
      },
      true
    );
    if (!payload || !payload.asset || !payload.asset.url) {
      return null;
    }
    return String(payload.asset.url);
  }

  function extractMarkdownImageSources(markdown) {
    const sources = [];
    const regex = /!\[[^\]]*]\(([^)\s]+)(?:\s+"[^"]*")?\)/g;
    let match;
    while ((match = regex.exec(markdown))) {
      if (match[1]) {
        sources.push(match[1]);
      }
    }
    return sources;
  }

  function isCloudAssetSource(source) {
    if (!source) {
      return false;
    }
    const apiBase = state.cloudApiBase || getDefaultCloudApiBase();
    const normalizedApi = normalizeCloudApiBase(apiBase);
    if (source.startsWith(`${normalizedApi}/assets/`)) {
      return true;
    }
    return source.startsWith("/write-studio-api/assets/");
  }

  async function tryAutoConvertCloudImagesToIpicAndResave() {
    const canUseIpic = await checkIpicBridgeAvailable(false);
    if (!canUseIpic) {
      return;
    }

    const current = editor.value;
    const sources = Array.from(new Set(extractMarkdownImageSources(current).filter((src) => isCloudAssetSource(src))));
    if (!sources.length) {
      return;
    }

    let next = current;
    let replacedCount = 0;
    for (const source of sources) {
      try {
        const response = await fetch(source);
        if (!response.ok) {
          continue;
        }
        const blob = await response.blob();
        const ext = blob.type === "image/png" ? ".png" : blob.type === "image/jpeg" ? ".jpg" : ".png";
        const file = new File([blob], `cloud-asset-${Date.now()}${ext}`, { type: blob.type || "image/png" });
        const ipicUrl = await uploadImageViaIpicBridge(file);
        if (!ipicUrl) {
          continue;
        }
        next = next.split(source).join(ipicUrl);
        replacedCount += 1;
      } catch (error) {
        console.warn("Cannot convert cloud image to iPic:", error);
      }
    }

    if (replacedCount > 0 && next !== current) {
      setEditorContent(next);
      setDirty(true);
      await saveCloudDoc({ silent: true });
      alert(`已自動把 ${replacedCount} 張雲端圖片轉成 iPic 連結並同步回 Cloud。`);
    }
  }

  function inferImageAlt(fileName) {
    const { base } = splitNameAndExtension(fileName || "image");
    return base.replace(/[-_]+/g, " ") || "image";
  }

  function isImageFile(file) {
    if (!file) {
      return false;
    }
    if (typeof file.type === "string" && file.type.startsWith("image/")) {
      return true;
    }
    const ext = getExtension(file.name || "");
    return [".png", ".jpg", ".jpeg", ".gif", ".webp", ".svg", ".bmp", ".avif"].includes(ext);
  }

  function getCurrentImageSettings() {
    const { frontMatter } = splitFrontMatter(editor.value);
    return getImageSettingsFromFrontMatter(frontMatter);
  }

  async function pickAvailableFileName(directoryHandle, originalName) {
    const safe = sanitizeFileName(originalName || "image.png");
    const parts = splitNameAndExtension(safe);
    let candidate = safe;
    let index = 1;

    while (true) {
      try {
        await directoryHandle.getFileHandle(candidate, { create: false });
        candidate = `${parts.base}-${index}${parts.ext}`;
        index += 1;
      } catch (error) {
        return candidate;
      }
    }
  }

  function resolveImageTargetDirectory(copyTo) {
    const currentDir = dirName(state.filePath || "");
    const setting = (copyTo || "").trim();
    if (!setting) {
      return currentDir;
    }
    if (setting.startsWith("/")) {
      return normalizeProjectPath(setting.slice(1));
    }
    return normalizeProjectPath(joinPath(currentDir, setting));
  }

  function toMarkdownImagePath(projectPath, copyTo) {
    const normalized = normalizeProjectPath(projectPath);
    if (!normalized) {
      return "./image.png";
    }

    const currentDir = dirName(state.filePath || "");
    if ((copyTo || "").trim().startsWith("/")) {
      return "/" + normalized;
    }
    return relativePath(currentDir, normalized);
  }

  async function saveImageIntoProject(file, copyTo) {
    if (!state.dirHandle || state.folderMode !== "handle") {
      return null;
    }
    try {
      const targetDirPath = resolveImageTargetDirectory(copyTo);
      const targetDirHandle = await getNativeDirectoryHandleByPath(targetDirPath, true);
      if (!targetDirHandle) {
        return null;
      }
      const fileName = await pickAvailableFileName(targetDirHandle, file.name);
      const handle = await targetDirHandle.getFileHandle(fileName, { create: true });
      const writable = await handle.createWritable();
      await writable.write(await file.arrayBuffer());
      await writable.close();
      return normalizeProjectPath(joinPath(targetDirPath, fileName));
    } catch (error) {
      console.warn("Failed to store image in project:", error);
      return null;
    }
  }

  function readFileAsDataUrl(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === "string") {
          resolve(reader.result);
          return;
        }
        reject(new Error("Failed to read file as data URL."));
      };
      reader.onerror = () => reject(new Error("Failed to read file."));
      reader.readAsDataURL(file);
    });
  }

  async function uploadImageViaIpicBridge(file) {
    const fileName = sanitizeFileName(file.name || `image-${Date.now()}.png`);
    const dataUrl = await readFileAsDataUrl(file);
    let response;
    try {
      response = await fetch(IPIC_BRIDGE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fileName,
          dataUrl,
        }),
      });
    } catch (error) {
      const detail = error instanceof Error ? error.message : String(error || "");
      throw new Error(`Cannot connect to iPic bridge (${IPIC_BRIDGE_URL}). ${detail}`.trim());
    }

    if (!response.ok) {
      let detail = "";
      try {
        const payload = await response.json();
        detail = payload && payload.error ? String(payload.error) : "";
      } catch (error) {
        detail = "";
      }
      throw new Error(detail || "iPic bridge upload failed.");
    }

    const payload = await response.json();
    if (!payload || typeof payload.url !== "string" || !payload.url.trim()) {
      throw new Error("iPic bridge returned invalid URL.");
    }
    return payload.url.trim();
  }

  async function buildImageMarkdownFromFile(file) {
    const settings = getCurrentImageSettings();
    const alt = inferImageAlt(file.name);
    let source = "";
    let usedFallback = false;
    const canUseIpic = await checkIpicBridgeAvailable(false);

    if (canUseIpic) {
      try {
        source = await uploadImageViaIpicBridge(file);
        state.lastImageUploadError = "";
      } catch (error) {
        const detail = error instanceof Error ? error.message : String(error || "iPic upload failed.");
        state.lastImageUploadError = detail;
        console.warn("iPic upload failed:", error);
      }
    }

    if (!source && state.cloudApiBase && state.cloudToken) {
      try {
        source = await uploadImageToCloudAsset(file);
      } catch (error) {
        console.warn("Cloud asset upload failed:", error);
      }
    }

    if (!source && state.folderMode === "handle" && state.filePath) {
      const storedPath = await saveImageIntoProject(file, settings.copyTo);
      if (storedPath) {
        source = toMarkdownImagePath(storedPath, settings.copyTo);
      }
    }

    if (!source) {
      usedFallback = true;
      source = "./" + sanitizeFileName(file.name || "image.png");
    }

    return { markdown: `![${alt}](${source})`, usedFallback };
  }

  async function insertImagesIntoEditor(files) {
    const imageFiles = Array.from(files || []).filter((file) => isImageFile(file));
    if (!imageFiles.length) {
      return;
    }

    const snippets = [];
    let fallbackCount = 0;
    for (const file of imageFiles) {
      const result = await buildImageMarkdownFromFile(file);
      if (result.usedFallback) {
        fallbackCount += 1;
      }
      snippets.push(result.markdown);
    }

    insertAtCursor(snippets.join("\n") + "\n");
    if (fallbackCount > 0) {
      const settings = getCurrentImageSettings();
      if (state.cloudApiBase && state.cloudToken) {
        const detail = state.lastImageUploadError ? `\n\niPic 錯誤：${state.lastImageUploadError}` : "";
        alert(
          "部分圖片無法上傳到 iPic，已改存到本地相對路徑。\n雲端已啟用時會優先轉存雲端資產，請確認雲端 token 與 iPic bridge 狀態。" +
          detail
        );
      } else if (settings.uploadEngine === "ipic") {
        const detail = state.lastImageUploadError ? `\n\n錯誤詳情：${state.lastImageUploadError}` : "";
        alert(
          "部分圖片無法上傳到 iPic，已先插入本地相對路徑。\n請確認 iPic 正在執行、已登入且已設定圖床，並啟動本機 bridge 服務。" +
          detail
        );
      } else {
        alert("部分圖片無法自動存入專案，已先插入相對路徑。若要自動複製，請先用「開資料夾」載入專案並編輯該資料夾中的 .md。");
      }
    }
  }

  function parseMarkdownImage(markdown) {
    const match = String(markdown || "").trim().match(/^!\[([^\]]*)\]\((.+)\)$/);
    if (!match) {
      return null;
    }
    return {
      alt: match[1] || "image",
      source: match[2] || "",
    };
  }

  function escapeShortcodeAttribute(value) {
    return String(value || "")
      .replace(/\\/g, "\\\\")
      .replace(/"/g, '\\"');
  }

  function buildImageRowShortcodeBlock(items, cols) {
    const colCount = Math.max(2, Math.min(5, Number(cols) || 2));
    const lines = [`{{< imgrow cols="${colCount}" gap="14" >}}`];
    for (const item of items) {
      if (!item || !item.source) {
        continue;
      }
      const src = escapeShortcodeAttribute(item.source);
      const alt = escapeShortcodeAttribute(item.alt || "image");
      lines.push(`{{< imgcol src="${src}" alt="${alt}" >}}`);
    }
    lines.push("{{< /imgrow >}}");
    return lines.join("\n");
  }

  function pickImageRowColumns() {
    const raw = window.prompt("選擇並排張數：2 / 3 / 4 / 5", "2");
    if (raw == null) {
      return 0;
    }
    const cols = Number.parseInt(String(raw).trim(), 10);
    if (![2, 3, 4, 5].includes(cols)) {
      alert("請輸入 2、3、4 或 5。");
      return 0;
    }
    return cols;
  }

  async function insertImageRowTemplateFromFiles(files, cols) {
    const imageFiles = Array.from(files || []).filter((file) => isImageFile(file));
    if (!imageFiles.length) {
      return;
    }
    if (imageFiles.length < cols) {
      alert(`你選了 ${imageFiles.length} 張，但並排 ${cols} 張至少要上傳 ${cols} 張。`);
      return;
    }
    const picked = imageFiles.slice(0, cols);
    if (imageFiles.length > cols) {
      alert(`已選 ${imageFiles.length} 張，將使用前 ${cols} 張建立並排模板。`);
    }

    const parsedItems = [];
    let fallbackCount = 0;
    for (const file of picked) {
      const result = await buildImageMarkdownFromFile(file);
      if (result.usedFallback) {
        fallbackCount += 1;
      }
      const parsed = parseMarkdownImage(result.markdown);
      if (parsed && parsed.source) {
        parsedItems.push(parsed);
      }
    }

    if (parsedItems.length < cols) {
      alert("有圖片無法轉成可用連結，請重試一次。");
      return;
    }

    const block = buildImageRowShortcodeBlock(parsedItems, cols);
    const start = editor.selectionStart;
    const needsLeadingNewline = start > 0 && editor.value[start - 1] !== "\n";
    const prefix = needsLeadingNewline ? "\n\n" : "";
    insertAtCursor(`${prefix}${block}\n\n`);
    setInlineInsertMenuOpen(false);
    closeUnsplashPanel();

    if (fallbackCount > 0) {
      const settings = getCurrentImageSettings();
      if (state.cloudApiBase && state.cloudToken) {
        const detail = state.lastImageUploadError ? `\n\niPic 錯誤：${state.lastImageUploadError}` : "";
        alert("部分圖片無法上傳到 iPic/雲端，已先插入本地相對路徑。" + detail);
      } else if (settings.uploadEngine === "ipic") {
        const detail = state.lastImageUploadError ? `\n\n錯誤詳情：${state.lastImageUploadError}` : "";
        alert("部分圖片無法上傳到 iPic，已先插入本地相對路徑。請確認 iPic 與 bridge 服務。" + detail);
      } else {
        alert("部分圖片無法自動存入專案，已先插入相對路徑。");
      }
    }
  }

  async function insertImagesIntoPreview(files) {
    const imageFiles = Array.from(files || []).filter((file) => isImageFile(file));
    if (!imageFiles.length) {
      return;
    }

    const blocks = [];
    let fallbackCount = 0;
    for (const file of imageFiles) {
      const result = await buildImageMarkdownFromFile(file);
      if (result.usedFallback) {
        fallbackCount += 1;
      }
      const parsed = parseMarkdownImage(result.markdown);
      if (!parsed || !parsed.source) {
        continue;
      }
      blocks.push(`<p><img src="${escapeHtmlAttribute(parsed.source)}" alt="${escapeHtmlAttribute(parsed.alt)}"></p>`);
    }

    if (!blocks.length) {
      return;
    }

    insertHtmlIntoPreview(blocks.join("") + "<p><br></p>");
    setInlineInsertMenuOpen(false);

    if (fallbackCount > 0) {
      const settings = getCurrentImageSettings();
      if (state.cloudApiBase && state.cloudToken) {
        const detail = state.lastImageUploadError ? `\n\niPic 錯誤：${state.lastImageUploadError}` : "";
        alert("部分圖片無法上傳到 iPic/雲端，已先插入本地相對路徑。" + detail);
      } else if (settings.uploadEngine === "ipic") {
        const detail = state.lastImageUploadError ? `\n\n錯誤詳情：${state.lastImageUploadError}` : "";
        alert("部分圖片無法上傳到 iPic，已先插入本地相對路徑。請確認 iPic 與 bridge 服務。" + detail);
      } else {
        alert("部分圖片無法自動存入專案，已先插入相對路徑。");
      }
    }
  }

  async function openSampleModal() {
    if (!state.sampleFilePath) {
      alert("請先在左側檔案樹把某個 .md 設為示範檔。");
      return;
    }

    const content = await getSampleContent();
    if (content == null) {
      alert("目前無法讀取示範檔。請重新按「開資料夾」載入資料夾後再試一次。");
      return;
    }

    sampleModalTitle.textContent = "Sample: " + state.sampleFilePath;
    sampleRaw.textContent = content;
    const { frontMatter, body } = splitFrontMatter(content);
    state.renderVersion += 1;
    const renderVersion = state.renderVersion;
    samplePreview.innerHTML = sanitize(parseMarkdown(body, frontMatter));
    hydrateShortcodeEmbedBlocks(samplePreview);
    enhanceRenderedMarkdown(samplePreview);
    resolveRenderedImages(samplePreview, frontMatter, state.sampleFilePath, renderVersion).catch((error) => {
      console.warn("Sample image resolve failed:", error);
    });
    sampleModal.classList.remove("hidden");
  }

  function closeSampleModal() {
    sampleModal.classList.add("hidden");
  }

  editor.addEventListener("input", () => {
    setDirty(true);
    updateLineNumbers();
    render();
    updateStats();
    persistDraft();
  });

  editor.addEventListener("scroll", syncPreviewScroll);

  preview.addEventListener("input", () => {
    if (!state.previewEditMode) {
      return;
    }
    scheduleSyncEditorFromPreview();
    if (Date.now() >= (state.previewSkipAutoApplyUntil || 0)) {
      scheduleAutoApplyPreviewRender();
    }
    positionInlineComposer();
  });

  preview.addEventListener("blur", () => {
    if (!state.previewEditMode) {
      return;
    }
    if (state.imageRowLightbox && state.imageRowLightbox.classList.contains("open")) {
      return;
    }
    if (state.previewAutoApplyTimer) {
      clearTimeout(state.previewAutoApplyTimer);
      state.previewAutoApplyTimer = null;
    }
    syncEditorFromPreview();
    render();
  });

  preview.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof Element)) {
      return;
    }
    const image = target.closest(".md-img-row .md-img-col img");
    if (!image) {
      return;
    }
    event.preventDefault();
    toggleImageRowLightbox(image.getAttribute("src") || image.src || "", image.getAttribute("alt") || "");
  });

  preview.addEventListener("keydown", (event) => {
    if (!state.previewEditMode) {
      return;
    }

    if (event.key === "Enter") {
      state.previewSkipAutoApplyUntil = Date.now() + 900;
      const selection = window.getSelection();
      const anchorNode = selection && selection.rangeCount ? selection.getRangeAt(0).startContainer : null;
      let anchorElement = null;
      if (anchorNode instanceof Element) {
        anchorElement = anchorNode;
      } else if (anchorNode && anchorNode.parentElement) {
        anchorElement = anchorNode.parentElement;
      }
      const embedBlock = anchorElement ? anchorElement.closest(".ws-embed, .ws-embed-video, [data-hugo-shortcode], figure, .md-img-row") : null;
      if (embedBlock && preview.contains(embedBlock)) {
        event.preventDefault();
        const outerBlock = embedBlock.closest("[data-hugo-shortcode], figure, .md-img-row") || embedBlock;
        insertEditableParagraphAfter(outerBlock);
        syncEditorFromPreview();
        positionInlineComposer();
        return;
      }
    }

    const mod = event.ctrlKey || event.metaKey;
    if (mod && event.key === "Enter") {
      event.preventDefault();
      applyPreviewRenderNow({ force: true });
      return;
    }
    if (event.key === "Escape") {
      setInlineInsertMenuOpen(false);
      closeUnsplashPanel();
    }
  });

  preview.addEventListener("keyup", () => {
    if (!state.previewEditMode) {
      return;
    }
    const block = getSelectionInlineAnchorBlock();
    if (block) {
      setInlineAnchorBlock(block);
    } else if (!state.inlineMenuOpen) {
      setInlineHoverState(false);
    }
  });

  preview.addEventListener("mousemove", (event) => {
    if (!state.previewEditMode) {
      return;
    }
    const hoveredBlock = findInlineAnchorBlock(event.target);
    const block = (isEmptyParagraphAnchor(hoveredBlock) && hoveredBlock) || findInlineAnchorBlockByY(event.clientY);
    if (!block) {
      if (!state.inlineMenuOpen) {
        scheduleInlineHide();
      }
      return;
    }

    const rect = block.getBoundingClientRect();
    const nearLeftRail = event.clientX >= rect.left - 44 && event.clientX <= rect.left + 34;
    const inVerticalBand = event.clientY >= rect.top - 8 && event.clientY <= rect.bottom + 8;

    if (nearLeftRail && inVerticalBand) {
      clearInlineHideTimer();
      setInlineAnchorBlock(block);
      setInlineHoverState(true);
      return;
    }

    if (!state.inlineMenuOpen) {
      scheduleInlineHide();
    }
  });

  preview.addEventListener("mouseleave", () => {
    if (!state.previewEditMode || state.inlineMenuOpen || state.inlineUiHovering) {
      return;
    }
    scheduleInlineHide();
  });

  inlineComposer.addEventListener("mouseenter", () => {
    if (!state.previewEditMode) {
      return;
    }
    setInlineUiHoverState(true);
  });

  inlineComposer.addEventListener("mousemove", () => {
    if (!state.previewEditMode) {
      return;
    }
    clearInlineHideTimer();
  });

  inlineComposer.addEventListener("mouseleave", () => {
    setInlineUiHoverState(false);
    if (!state.inlineMenuOpen) {
      scheduleInlineHide();
    }
  });

  preview.addEventListener("scroll", () => {
    if (!state.previewEditMode) {
      return;
    }
    positionInlineComposer();
  });

  document.addEventListener("selectionchange", () => {
    if (!state.previewEditMode) {
      return;
    }
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) {
      return;
    }
    const range = selection.getRangeAt(0);
    if (preview.contains(range.startContainer)) {
      const block = getSelectionInlineAnchorBlock();
      if (block) {
        setInlineAnchorBlock(block);
      } else if (!state.inlineMenuOpen && !state.inlineUiHovering) {
        setInlineHoverState(false);
      }
    }
  });

  inlineInsertToggleBtn.addEventListener("click", () => {
    if (!state.previewEditMode) {
      return;
    }
    clearInlineHideTimer();
    setInlineUiHoverState(true);
    if (!state.inlineAnchorBlock || !preview.contains(state.inlineAnchorBlock)) {
      recoverInlineAnchorFromComposerPosition();
    }
    ensureSelectionAtInlineAnchor();
    const nextOpen = !state.inlineMenuOpen;
    setInlineInsertMenuOpen(nextOpen);
    if (!nextOpen) {
      closeUnsplashPanel();
      setInlineHoverState(false);
      setInlineUiHoverState(false);
    } else {
      setInlineHoverState(true);
      setInlineUiHoverState(true);
    }
    positionInlineComposer();
  });

  inlineInsertToggleBtn.addEventListener("pointerdown", (event) => {
    if (!state.previewEditMode) {
      return;
    }
    event.preventDefault();
    clearInlineHideTimer();
  });

  inlineInsertMenu.addEventListener("pointerdown", (event) => {
    if (!state.previewEditMode) {
      return;
    }
    if (event.target instanceof Element && event.target.closest("button")) {
      return;
    }
    event.preventDefault();
    clearInlineHideTimer();
    setInlineUiHoverState(true);
    ensureSelectionAtInlineAnchor();
  });

  insertLocalImageBtn.addEventListener("pointerdown", () => {
    state.inlineImageInsertMode = "single";
    state.pendingImageRowCols = 0;
    inlineImageInput.value = "";
    inlineImageInput.click();
  });

  insertImageRowBtn.addEventListener("pointerdown", () => {
    const cols = pickImageRowColumns();
    if (!cols) {
      return;
    }
    state.inlineImageInsertMode = "row";
    state.pendingImageRowCols = cols;
    inlineImageInput.value = "";
    inlineImageInput.click();
  });

  inlineImageInput.addEventListener("change", async (event) => {
    const files = Array.from(event.target.files || []);
    if (!files.length) {
      return;
    }
    if (state.inlineImageInsertMode === "row") {
      const cols = state.pendingImageRowCols || 2;
      state.inlineImageInsertMode = "single";
      state.pendingImageRowCols = 0;
      await insertImageRowTemplateFromFiles(files, cols);
      return;
    }
    state.inlineImageInsertMode = "single";
    state.pendingImageRowCols = 0;
    await insertImagesIntoPreview(files);
  });

  insertImageUrlBtn.addEventListener("pointerdown", () => {
    insertImageFromUrl();
  });

  insertYoutubeBtn.addEventListener("pointerdown", () => {
    insertYoutubeEmbed();
  });

  openUnsplashBtn.addEventListener("pointerdown", () => {
    if (unsplashPanel.classList.contains("hidden")) {
      openUnsplashPanel();
      return;
    }
    closeUnsplashPanel();
  });

  closeUnsplashBtn.addEventListener("click", () => {
    closeUnsplashPanel();
  });

  unsplashSearchBtn.addEventListener("click", () => {
    const query = unsplashQueryInput.value.trim() || "medical";
    renderUnsplashResults(query);
  });

  unsplashQueryInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const query = unsplashQueryInput.value.trim() || "medical";
      renderUnsplashResults(query);
    }
  });

  insertEmbedBtn.addEventListener("pointerdown", () => {
    insertGenericEmbedLink();
  });

  insertDividerBtn.addEventListener("pointerdown", () => {
    insertDividerBlock();
  });

  if (toolbarMore) {
    const menuButtons = toolbarMore.querySelectorAll(".toolbar-more-menu .btn");
    for (const btn of menuButtons) {
      btn.addEventListener("click", () => {
        closeToolbarMoreMenu();
      });
    }
  }

  document.addEventListener("click", (event) => {
    const target = event.target;
    if (
      target instanceof Node &&
      !inlineComposer.contains(target) &&
      !unsplashPanel.contains(target) &&
      !inlineInsertToggleBtn.contains(target)
    ) {
      setInlineInsertMenuOpen(false);
      closeUnsplashPanel();
      setInlineHoverState(false);
      setInlineUiHoverState(false);
      clearInlineHideTimer();
    }

    if (target instanceof Node && toolbarMore && toolbarMore.hasAttribute("open") && !toolbarMore.contains(target)) {
      closeToolbarMoreMenu();
    }
  });

  editor.addEventListener("dragover", (event) => {
    const items = event.dataTransfer && event.dataTransfer.items ? Array.from(event.dataTransfer.items) : [];
    const hasImage = items.some((item) => item.kind === "file" && item.type.startsWith("image/"));
    if (!hasImage) {
      return;
    }
    event.preventDefault();
    event.dataTransfer.dropEffect = "copy";
  });

  editor.addEventListener("drop", async (event) => {
    const files = event.dataTransfer ? Array.from(event.dataTransfer.files || []) : [];
    const hasImage = files.some((file) => isImageFile(file));
    if (!hasImage) {
      return;
    }
    event.preventDefault();
    await insertImagesIntoEditor(files);
  });

  editor.addEventListener("paste", async (event) => {
    const items = event.clipboardData && event.clipboardData.items ? Array.from(event.clipboardData.items) : [];
    const files = [];
    for (const item of items) {
      if (item.kind !== "file") {
        continue;
      }
      const file = item.getAsFile();
      if (file && isImageFile(file)) {
        files.push(file);
      }
    }

    if (!files.length) {
      const text = event.clipboardData ? event.clipboardData.getData("text/plain") : "";
      const singleUrl = extractEmbeddableUrl(text);
      if (!singleUrl) {
        return;
      }
      const shortcode = buildAutoEmbedShortcodeFromUrl(singleUrl);
      if (!shortcode) {
        return;
      }
      event.preventDefault();
      const start = editor.selectionStart;
      const needsLeadingNewline = start > 0 && editor.value[start - 1] !== "\n";
      const prefix = needsLeadingNewline ? "\n\n" : "";
      insertAtCursor(`${prefix}${shortcode}\n\n`);
      return;
    }
    event.preventDefault();
    await insertImagesIntoEditor(files);
  });

  preview.addEventListener("dragover", (event) => {
    if (!state.previewEditMode) {
      return;
    }
    const items = event.dataTransfer && event.dataTransfer.items ? Array.from(event.dataTransfer.items) : [];
    const hasImage = items.some((item) => item.kind === "file" && item.type.startsWith("image/"));
    if (!hasImage) {
      return;
    }
    event.preventDefault();
    event.dataTransfer.dropEffect = "copy";
  });

  preview.addEventListener("drop", async (event) => {
    if (!state.previewEditMode) {
      return;
    }
    const files = event.dataTransfer ? Array.from(event.dataTransfer.files || []) : [];
    const hasImage = files.some((file) => isImageFile(file));
    if (!hasImage) {
      return;
    }
    event.preventDefault();
    await insertImagesIntoPreview(files);
  });

  preview.addEventListener("paste", async (event) => {
    if (!state.previewEditMode) {
      return;
    }
    const items = event.clipboardData && event.clipboardData.items ? Array.from(event.clipboardData.items) : [];
    const files = [];
    for (const item of items) {
      if (item.kind !== "file") {
        continue;
      }
      const file = item.getAsFile();
      if (file && isImageFile(file)) {
        files.push(file);
      }
    }
    if (!files.length) {
      const text = event.clipboardData ? event.clipboardData.getData("text/plain") : "";
      const singleUrl = extractEmbeddableUrl(text);
      if (!singleUrl) {
        return;
      }
      const embedHtml = buildAutoEmbedHtmlFromUrl(singleUrl);
      if (!embedHtml) {
        return;
      }
      event.preventDefault();
      insertHtmlIntoPreview(embedHtml + "<p><br></p>");
      return;
    }
    // Clipboard may contain both image and rich text/html.
    // When image exists, suppress default paste to avoid noisy text (e.g. SVG/CSS snippets).
    event.preventDefault();
    await insertImagesIntoPreview(files);
  });

  fileInput.addEventListener("change", (event) => {
    const file = event.target.files && event.target.files[0];
    if (!file) {
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      const text = typeof reader.result === "string" ? reader.result : "";
      state.fileHandle = null;
      state.folderMode = "none";
      state.fileName = file.name;
      state.filePath = null;
      state.cloudDocId = null;
      setEditorContent(text);
      setDirty(false);
      setActiveTreeItem(null);
      updateFileMeta();
      persistDraft();
    };
    reader.readAsText(file);
  });

  folderInput.addEventListener("change", (event) => {
    const files = Array.from(event.target.files || []);
    if (files.length === 0) {
      alert("沒有可用的文字檔案可顯示。");
      return;
    }

    const firstPath = files[0].webkitRelativePath || files[0].name;
    const rootName = firstPath.split("/")[0] || "selected-folder";

    state.dirHandle = null;
    state.fileHandle = null;
    state.folderMode = "files";
    state.virtualFiles = files;
    state.forceFolderInput = true;
    state.folderName = rootName;

    folderNameEl.textContent = rootName;
    explorerHintEl.hidden = false;
    explorerHintEl.textContent = "此模式可讀取資料夾內容；由於瀏覽器限制，「儲存」將改為另存新檔。";

    renderVirtualTree(files);
    updateFileMeta();
  });

  newPostBtn.addEventListener("click", () => {
    if (!maybeConfirmDiscard()) {
      return;
    }
    state.fileHandle = null;
    state.fileName = "new-post.md";
    state.filePath = null;
    state.cloudDocId = null;
    setEditorContent(makeTemplate());
    setDirty(true);
    setActiveTreeItem(null);
    updateFileMeta();
    persistDraft();
  });

  openFolderBtn.addEventListener("click", async () => {
    await openFolder();
  });

  openBtn.addEventListener("click", async () => {
    if (!maybeConfirmDiscard()) {
      return;
    }
    await openFile();
  });

  cloudConfigBtn.addEventListener("click", async () => {
    await configureCloudConnection();
  });

  cloudOpenBtn.addEventListener("click", async () => {
    if (!maybeConfirmDiscard()) {
      return;
    }
    await openCloudDoc();
  });

  cloudSaveBtn.addEventListener("click", async () => {
    await saveCloudDoc();
  });

  saveBtn.addEventListener("click", async () => {
    await saveFile(false);
    persistDraft();
  });

  saveAsBtn.addEventListener("click", async () => {
    await saveFile(true);
    persistDraft();
  });

  toggleWrapBtn.addEventListener("click", () => {
    setWrapMode(!state.wrapEnabled);
    persistDraft();
  });

  refreshTreeBtn.addEventListener("click", async () => {
    if (state.folderMode === "handle") {
      await renderTreeRoot();
      return;
    }

    if (state.folderMode === "files") {
      if (state.virtualFiles.length === 0) {
        alert("請先按「開資料夾」選擇專案資料夾。");
        return;
      }
      renderVirtualTree(state.virtualFiles);
      return;
    }

    alert("請先按「開資料夾」選擇專案資料夾。");
  });

  sampleMdBtn.addEventListener("click", async () => {
    await openSampleModal();
  });

  previewEditBtn.addEventListener("click", () => {
    setPreviewEditMode(!state.previewEditMode);
  });

  closeSampleModalBtn.addEventListener("click", () => {
    closeSampleModal();
  });

  sampleModal.addEventListener("click", (event) => {
    if (event.target === sampleModal) {
      closeSampleModal();
    }
  });

  openShortcutsBtn.addEventListener("click", () => {
    openShortcutsModal();
  });

  closeShortcutsModalBtn.addEventListener("click", () => {
    closeShortcutsModal();
  });

  shortcutsModal.addEventListener("click", (event) => {
    if (event.target === shortcutsModal) {
      closeShortcutsModal();
    }
  });

  resetShortcutsBtn.addEventListener("click", () => {
    if (confirm("確定要還原所有預設快捷鍵嗎？")) {
      state.shortcuts = { ...DEFAULT_SHORTCUTS };
      persistShortcuts();
      isRecordingShortcut = null;
      renderShortcutsModal();
    }
  });

  document.addEventListener("keydown", async (event) => {
    // Handle shortcut recording mode
    if (isRecordingShortcut) {
      event.preventDefault();
      event.stopPropagation();

      const key = event.key.toLowerCase();
      // Ignore alone modifier presses until a real key is hit
      if (key === "meta" || key === "control" || key === "shift" || key === "alt") {
        return;
      }

      const parts = [];
      if (event.metaKey || event.ctrlKey) parts.push("mod");
      if (event.shiftKey) parts.push("shift");
      if (event.altKey) parts.push("alt");
      parts.push(key === " " ? "space" : key);

      state.shortcuts[isRecordingShortcut] = parts.join("+");
      persistShortcuts();
      isRecordingShortcut = null;
      renderShortcutsModal();
      return;
    }

    if (event.key === "Escape" && !shortcutsModal.classList.contains("hidden")) {
      closeShortcutsModal();
      return;
    }

    const mod = event.ctrlKey || event.metaKey;
    const key = event.key.toLowerCase();

    if (event.key === "Escape" && toolbarMore && toolbarMore.hasAttribute("open")) {
      closeToolbarMoreMenu();
      return;
    }

    if (event.key === "Escape" && state.imageRowLightbox && state.imageRowLightbox.classList.contains("open")) {
      closeImageRowLightbox();
      return;
    }

    if (event.key === "Escape" && !sampleModal.classList.contains("hidden")) {
      closeSampleModal();
      return;
    }

    // Configurable System Overrides
    if (checkShortcut(event, state.shortcuts.save)) {
      event.preventDefault();
      await saveFile(false);
      persistDraft();
      return;
    }

    if (checkShortcut(event, state.shortcuts.saveAs)) {
      event.preventDefault();
      await saveFile(true);
      persistDraft();
      return;
    }

    if (checkShortcut(event, state.shortcuts.openFolder)) {
      event.preventDefault();
      await openFolder();
      return;
    }

    if (checkShortcut(event, state.shortcuts.openFile)) {
      event.preventDefault();
      if (maybeConfirmDiscard()) {
        await openFile();
      }
      return;
    }

    if (!isEditorActive()) {
      return;
    }

    if (mod && !event.shiftKey && key === "enter") {
      const inserted = insertTableRowBelowCursor();
      if (inserted) {
        event.preventDefault();
        return;
      }
    }

    if (mod && event.shiftKey && key === "backspace") {
      const deleted = deleteTableRowAtCursor();
      if (deleted) {
        event.preventDefault();
        return;
      }
    }

    if (mod && event.shiftKey && key === "i") {
      event.preventDefault();
      let fromClipboard = "";
      try {
        fromClipboard = await navigator.clipboard.readText();
      } catch (error) {
        fromClipboard = "";
      }
      const src = /^https?:\/\/\S+$/i.test((fromClipboard || "").trim())
        ? fromClipboard.trim()
        : "/images/your-image.png";
      insertAtCursor(`![image](${src})`);
      return;
    }

    if (event.shiftKey && key === "enter") {
      event.preventDefault();
      insertAtCursor("  \n");
      return;
    }

    if (checkShortcut(event, state.shortcuts.bold)) { event.preventDefault(); applyFormatting("bold"); return; }
    if (checkShortcut(event, state.shortcuts.italic)) { event.preventDefault(); applyFormatting("italic"); return; }
    if (checkShortcut(event, state.shortcuts.code)) { event.preventDefault(); applyFormatting("code"); return; }
    if (checkShortcut(event, state.shortcuts.link)) { event.preventDefault(); applyFormatting("link"); return; }
    if (checkShortcut(event, state.shortcuts.highlight)) { event.preventDefault(); applyFormatting("highlight"); return; }
    if (checkShortcut(event, state.shortcuts.h1)) { event.preventDefault(); applyFormatting("h1"); return; }
    if (checkShortcut(event, state.shortcuts.h2)) { event.preventDefault(); applyFormatting("h2"); return; }
    if (checkShortcut(event, state.shortcuts.h3)) { event.preventDefault(); applyFormatting("h3"); return; }
    if (checkShortcut(event, state.shortcuts.h4)) { event.preventDefault(); applyFormatting("h4"); return; }
    if (checkShortcut(event, state.shortcuts.h5)) { event.preventDefault(); applyFormatting("h5"); return; }
    if (checkShortcut(event, state.shortcuts.h6)) { event.preventDefault(); applyFormatting("h6"); return; }
    if (checkShortcut(event, state.shortcuts.ul)) { event.preventDefault(); applyFormatting("ul"); return; }
    if (checkShortcut(event, state.shortcuts.ol)) { event.preventDefault(); applyFormatting("ol"); return; }
    if (checkShortcut(event, state.shortcuts.quote)) { event.preventDefault(); applyFormatting("quote"); return; }

    if (mod && event.shiftKey && key === "t") {
      event.preventDefault();
      transformSelectedLines((lines) =>
        lines.map((line) => {
          if (!line.trim()) {
            return line;
          }
          const stripped = line.replace(/^\s*[-*+]\s+\[(?:\s|x|X)\]\s+/, "");
          return `- [ ] ${stripped}`;
        })
      );
      return;
    }

    if (mod && event.shiftKey && key === "c") {
      event.preventDefault();
      wrapSelection("```\n", "\n```", "code");
      return;
    }

    if (mod && event.shiftKey && key === "m") {
      event.preventDefault();
      wrapSelection("$$\n", "\n$$", "x^2");
      return;
    }
  });

  window.addEventListener("beforeunload", (event) => {
    if (!state.dirty) {
      return;
    }
    event.preventDefault();
    event.returnValue = "";
  });

  initializeResize();
  clearTreeMaps();
  loadCloudConfig();
  updateCloudUi();

  const hasDraft = loadDraft();
  if (!hasDraft) {
    setEditorContent(makeTemplate());
    setWrapMode(false);
    setDirty(true);
  } else {
    setDirty(true);
  }

  updateFileMeta();
  updateSampleButton();
  updateCloudUi();
})();
