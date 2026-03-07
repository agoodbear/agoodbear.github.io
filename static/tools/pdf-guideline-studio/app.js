const APP_ROOT = document.getElementById("pdfGuidelineStudioApp");

if (!APP_ROOT) {
  throw new Error("PDF guideline studio root element not found.");
}

const DEFAULT_API_BASES = [
  "https://write-studio-cloud-agoodbear.web.app/write-studio-api",
  "https://write-studio-cloud-agoodbear.firebaseapp.com/write-studio-api",
  "/write-studio-api",
];

const STORAGE_KEYS = {
  apiBase: "pdf-guideline-studio-api-base",
  token: "pdf-guideline-studio-token",
  localDocPrefix: "pdf-guideline-studio-local-doc:",
};

const HIGHLIGHT_COLORS = [
  { name: "Yellow", value: "#f6dd54" },
  { name: "Amber", value: "#f7c85f" },
  { name: "Sky", value: "#8fd4ff" },
  { name: "Rose", value: "#f5a5a3" },
  { name: "Violet", value: "#b69bf8" },
];

const GEOMETRY_DECIMALS = 4;
const CAPTURE_MAX_OUTPUT_EDGE = 3200;
const CAPTURE_RENDER_PIXEL_RATIO = 3;
const CAPTURE_MAX_RENDER_EDGE = 5200;

function createSearchState() {
  return {
    open: false,
    term: "",
    caseSensitive: false,
    matches: [],
    activeIndex: -1,
  };
}

function createHighlightFilterState() {
  return {
    open: false,
    colors: [],
    tags: [],
  };
}

const state = {
  apiBase: "",
  token: readStorage(STORAGE_KEYS.token) || "",
  query: new URLSearchParams(window.location.search),
  viewMode: "full",
  doc: null,
  pdfDoc: null,
  pageViews: [],
  selectedHighlightId: "",
  editingHighlightId: "",
  editMode: false,
  drawMode: false,
  captureMode: false,
  isDirty: false,
  isSaving: false,
  isRenderingPdf: false,
  pendingRenderOptions: null,
  currentLoadSource: "seed",
  messageTimer: 0,
  initialHighlightId: "",
  showHighlights: true,
  zoom: 1.46,
  currentPage: 1,
  pageCount: 0,
  pdfSearch: createSearchState(),
  highlightSearch: createSearchState(),
  highlightFilters: createHighlightFilterState(),
  docEditorCollapsed: true,
  lastHighlightSelectionSource: "",
};

const refs = {};

bootstrap().catch((error) => {
  console.error(error);
  APP_ROOT.innerHTML = `
    <div class="pdf-guideline-studio">
      <div class="pdf-guideline-studio__message is-error">
        無法啟動 PDF Guideline Studio。<br />
        ${escapeHtml(formatError(error))}
      </div>
    </div>
  `;
});

async function bootstrap() {
  state.viewMode = String(state.query.get("view") || "").trim() === "embed" ? "embed" : "full";
  const zoomParam = state.query.get("zoom");
  const requestedZoom = zoomParam === null || String(zoomParam).trim() === "" ? NaN : Number(zoomParam);
  const defaultZoom = 1;
  state.zoom = clamp(Number.isFinite(requestedZoom) ? requestedZoom : defaultZoom, 0.8, 2.4);
  state.currentPage = Math.max(1, parseInt(state.query.get("page") || "1", 10) || 1);

  document.body.classList.toggle("pdf-guideline-studio-body--embed", state.viewMode === "embed");
  APP_ROOT.dataset.view = state.viewMode;

  renderShell();
  bindShellEvents();

  state.apiBase = await discoverApiBase();
  const doc = await loadDocument();
  state.doc = normalizeDoc(doc);
  state.initialHighlightId = sanitizeText(state.query.get("highlight") || "", 120);
  state.selectedHighlightId =
    state.initialHighlightId && state.doc.highlights.some((item) => item.id === state.initialHighlightId)
      ? state.initialHighlightId
      : state.doc.highlights[0]
        ? state.doc.highlights[0].id
        : "";

  applyQueryHighlightOverrides();
  state.editMode = state.viewMode !== "embed" && Boolean(state.query.get("mode") === "admin" && state.token);

  updateTopbar();
  renderSidebar();
  await renderPdf();

  if (state.selectedHighlightId) {
    scrollToHighlight(state.selectedHighlightId, false);
  } else if (state.currentPage > 1) {
    goToPage(state.currentPage, false);
  }
}

function renderShell() {
  const isEmbed = state.viewMode === "embed";

  APP_ROOT.innerHTML = `
    <div class="pdf-guideline-studio ${isEmbed ? "is-embed" : "is-full"}">
      <header class="pdf-guideline-studio__masthead">
        <div class="pdf-guideline-studio__brand">
          <p class="pdf-guideline-studio__eyebrow">${isEmbed ? "Footnote Reader" : "OMI-style PDF Workspace"}</p>
          <div class="pdf-guideline-studio__title-row">
            <h1 class="pdf-guideline-studio__title" id="studioTitle">Loading guideline...</h1>
            <span class="pdf-guideline-studio__title-pill" id="docTagPill" hidden></span>
            <span class="pdf-guideline-studio__title-pill is-muted" id="docMetaPill" hidden></span>
          </div>
          <p class="pdf-guideline-studio__summary" id="docDescription">正在整理 PDF 與 highlights。</p>
        </div>

        <div class="pdf-guideline-studio__topbar-actions">
          <a class="pdf-guideline-studio__button--ghost" id="backToArticleButton" href="#" hidden>
            ${iconSvg("arrowLeft")}
            <span>回文章</span>
          </a>
          <a class="pdf-guideline-studio__button--ghost" id="openPdfButton" href="#" target="_blank" rel="noopener" hidden>
            ${iconSvg("external")}
            <span>原始 PDF</span>
          </a>
          ${
            isEmbed
              ? `
                <a class="pdf-guideline-studio__button--tonal" id="openFullReaderButton" href="#" target="_blank" rel="noopener">
                  ${iconSvg("expand")}
                  <span>完整閱讀器</span>
                </a>
              `
              : `
                <button type="button" class="pdf-guideline-studio__button--ghost" id="cloudConfigButton">設定 API/Token</button>
                <button type="button" class="pdf-guideline-studio__button--ghost" id="checkApiButton">檢查 API/Token</button>
                <button type="button" class="pdf-guideline-studio__button--ghost" id="adminLogoutButton">一鍵登出管理</button>
                <button type="button" class="pdf-guideline-studio__button--tonal" id="adminModeButton">
                  ${iconSvg("shield")}
                  <span>管理模式</span>
                </button>
                <button type="button" class="pdf-guideline-studio__button" id="saveButton" disabled>
                  ${iconSvg("save")}
                  <span>儲存變更</span>
                </button>
              `
          }
        </div>
      </header>

      <div class="pdf-guideline-studio__status-strip">
        <span class="pdf-guideline-studio__badge" id="storageBadge">資料來源</span>
        <span class="pdf-guideline-studio__badge" id="modeBadge">唯讀模式</span>
        <span class="pdf-guideline-studio__badge" id="countBadge">0 highlights</span>
        <span class="pdf-guideline-studio__badge" id="pageBadge">Page 1 / 1</span>
      </div>

      <div class="pdf-guideline-studio__message" id="studioMessage" hidden></div>

      <div class="pdf-guideline-studio__shell" id="studioShell">
        <svg class="pdf-guideline-studio__connector" id="connectorSvg" aria-hidden="true" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <marker id="pdfGuidelineConnectorArrow" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#ef6b5b"></path>
            </marker>
          </defs>
          <path id="connectorPath" marker-end="url(#pdfGuidelineConnectorArrow)"></path>
          <circle id="connectorDot" r="0"></circle>
        </svg>

        <section class="pdf-guideline-studio__panel pdf-guideline-studio__panel--viewer">
          <div class="pdf-guideline-studio__toolbar">
            <div class="pdf-guideline-studio__toolbar-group">
              <button type="button" class="pdf-guideline-studio__toolbar-button" id="drawModeButton" title="Auto Highlight">
                ${iconSvg("pen")}
              </button>
              <button type="button" class="pdf-guideline-studio__toolbar-button" id="focusHighlightButton" title="Capture Highlight">
                ${iconSvg("camera")}
              </button>
              <button type="button" class="pdf-guideline-studio__toolbar-button" id="colorButton" title="Highlight Color">
                <span class="pdf-guideline-studio__toolbar-color-dot" id="colorSwatch"></span>
              </button>
              <button type="button" class="pdf-guideline-studio__toolbar-button" id="toggleHighlightsButton" title="Hide Highlights">
                ${iconSvg("eye")}
              </button>

              <span class="pdf-guideline-studio__toolbar-divider"></span>

              <button type="button" class="pdf-guideline-studio__toolbar-button" id="zoomOutButton" title="Zoom Out">
                ${iconSvg("zoomOut")}
              </button>
              <button type="button" class="pdf-guideline-studio__toolbar-button pdf-guideline-studio__toolbar-button--value" id="zoomValueButton" disabled>
                <span id="zoomValue">146%</span>
              </button>
              <button type="button" class="pdf-guideline-studio__toolbar-button" id="zoomInButton" title="Zoom In">
                ${iconSvg("zoomIn")}
              </button>
              <button type="button" class="pdf-guideline-studio__toolbar-button pdf-guideline-studio__toolbar-button--text" id="fitWidthButton" title="Fit to Pane">
                ${iconSvg("fitWidth")}
                <span>Fit</span>
              </button>

              <span class="pdf-guideline-studio__toolbar-divider"></span>

              <button type="button" class="pdf-guideline-studio__toolbar-button" id="prevPageButton" title="Previous Page">
                ${iconSvg("chevronLeft")}
              </button>
              <label class="pdf-guideline-studio__page-input-wrap" aria-label="Current Page">
                <input type="text" inputmode="numeric" class="pdf-guideline-studio__page-input" id="currentPageInput" value="1" />
                <span class="pdf-guideline-studio__page-count" id="totalPagesLabel">/ 1</span>
              </label>
              <button type="button" class="pdf-guideline-studio__toolbar-button" id="nextPageButton" title="Next Page">
                ${iconSvg("chevronRight")}
              </button>

            </div>

            <div class="pdf-guideline-studio__toolbar-group pdf-guideline-studio__toolbar-group--aside">
              <span class="pdf-guideline-studio__toolbar-note" id="toolbarNote">準備載入 PDF...</span>
              <div class="pdf-guideline-studio__search-shell pdf-guideline-studio__search-shell--toolbar" id="pdfSearchShell">
                <button type="button" class="pdf-guideline-studio__toolbar-button" id="pdfSearchButton" title="搜尋 PDF 原文">
                  ${iconSvg("search")}
                </button>
                ${renderSearchPanel("pdf", "搜尋 PDF 原文")}
              </div>
            </div>
          </div>

          <div class="pdf-guideline-studio__pdf-pane" id="pdfPane">
            <div class="pdf-guideline-studio__loading" id="pdfLoading">Loading PDF...</div>
            <div class="pdf-guideline-studio__pdf-stack" id="pdfStack"></div>
          </div>
        </section>

        <aside class="pdf-guideline-studio__panel pdf-guideline-studio__panel--sidebar">
          <div class="pdf-guideline-studio__sidebar-head">
            <div class="pdf-guideline-studio__sidebar-head-row">
              <div>
                <p class="pdf-guideline-studio__sidebar-kicker">Highlights</p>
                <h2 class="pdf-guideline-studio__sidebar-title" id="sidebarTitle">Highlights (0)</h2>
              </div>
              <div class="pdf-guideline-studio__sidebar-tools">
                <div class="pdf-guideline-studio__search-shell pdf-guideline-studio__search-shell--sidebar" id="highlightFilterShell">
                  <button type="button" class="pdf-guideline-studio__toolbar-button pdf-guideline-studio__sidebar-search-button" id="highlightFilterButton" title="篩選 highlight">
                    ${iconSvg("filter")}
                  </button>
                  ${renderHighlightFilterPanel()}
                </div>
                <div class="pdf-guideline-studio__search-shell pdf-guideline-studio__search-shell--sidebar" id="highlightSearchShell">
                  <button type="button" class="pdf-guideline-studio__toolbar-button pdf-guideline-studio__sidebar-search-button" id="highlightSearchButton" title="搜尋 highlight 內容">
                    ${iconSvg("search")}
                  </button>
                  ${renderSearchPanel("highlight", "搜尋 highlight 內容")}
                </div>
              </div>
            </div>
          </div>

          <div class="pdf-guideline-studio__sidebar-scroll" id="sidebarScroll"></div>
        </aside>
      </div>

      <div class="pdf-guideline-studio__image-lightbox" id="imageLightbox" hidden>
        <button
          type="button"
          class="pdf-guideline-studio__image-lightbox-backdrop"
          id="imageLightboxBackdrop"
          aria-label="Close image preview"
        ></button>
        <div class="pdf-guideline-studio__image-lightbox-dialog" role="dialog" aria-modal="true" aria-label="Highlight image preview">
          <button type="button" class="pdf-guideline-studio__image-lightbox-close" id="imageLightboxClose" aria-label="Close image preview">×</button>
          <img class="pdf-guideline-studio__image-lightbox-img" id="imageLightboxImg" alt="Highlight preview" />
        </div>
      </div>
    </div>
  `;

  refs.title = document.getElementById("studioTitle");
  refs.docTagPill = document.getElementById("docTagPill");
  refs.docMetaPill = document.getElementById("docMetaPill");
  refs.docDescription = document.getElementById("docDescription");
  refs.backToArticleButton = document.getElementById("backToArticleButton");
  refs.openPdfButton = document.getElementById("openPdfButton");
  refs.openFullReaderButton = document.getElementById("openFullReaderButton");
  refs.cloudConfigButton = document.getElementById("cloudConfigButton");
  refs.checkApiButton = document.getElementById("checkApiButton");
  refs.adminLogoutButton = document.getElementById("adminLogoutButton");
  refs.adminModeButton = document.getElementById("adminModeButton");
  refs.saveButton = document.getElementById("saveButton");
  refs.storageBadge = document.getElementById("storageBadge");
  refs.modeBadge = document.getElementById("modeBadge");
  refs.countBadge = document.getElementById("countBadge");
  refs.pageBadge = document.getElementById("pageBadge");
  refs.message = document.getElementById("studioMessage");
  refs.toolbarNote = document.getElementById("toolbarNote");
  refs.drawModeButton = document.getElementById("drawModeButton");
  refs.focusHighlightButton = document.getElementById("focusHighlightButton");
  refs.colorButton = document.getElementById("colorButton");
  refs.colorSwatch = document.getElementById("colorSwatch");
  refs.toggleHighlightsButton = document.getElementById("toggleHighlightsButton");
  refs.zoomOutButton = document.getElementById("zoomOutButton");
  refs.zoomValueButton = document.getElementById("zoomValueButton");
  refs.zoomValue = document.getElementById("zoomValue");
  refs.zoomInButton = document.getElementById("zoomInButton");
  refs.fitWidthButton = document.getElementById("fitWidthButton");
  refs.prevPageButton = document.getElementById("prevPageButton");
  refs.nextPageButton = document.getElementById("nextPageButton");
  refs.currentPageInput = document.getElementById("currentPageInput");
  refs.totalPagesLabel = document.getElementById("totalPagesLabel");
  refs.pdfSearchButton = document.getElementById("pdfSearchButton");
  refs.pdfSearchPanel = document.getElementById("pdfSearchPanel");
  refs.pdfSearchInput = document.getElementById("pdfSearchInput");
  refs.pdfSearchCaseButton = document.getElementById("pdfSearchCaseButton");
  refs.pdfSearchCount = document.getElementById("pdfSearchCount");
  refs.pdfSearchPrevButton = document.getElementById("pdfSearchPrevButton");
  refs.pdfSearchNextButton = document.getElementById("pdfSearchNextButton");
  refs.highlightSearchButton = document.getElementById("highlightSearchButton");
  refs.highlightSearchPanel = document.getElementById("highlightSearchPanel");
  refs.highlightSearchInput = document.getElementById("highlightSearchInput");
  refs.highlightSearchCaseButton = document.getElementById("highlightSearchCaseButton");
  refs.highlightSearchCount = document.getElementById("highlightSearchCount");
  refs.highlightSearchPrevButton = document.getElementById("highlightSearchPrevButton");
  refs.highlightSearchNextButton = document.getElementById("highlightSearchNextButton");
  refs.highlightFilterButton = document.getElementById("highlightFilterButton");
  refs.highlightFilterPanel = document.getElementById("highlightFilterPanel");
  refs.pdfPane = document.getElementById("pdfPane");
  refs.pdfStack = document.getElementById("pdfStack");
  refs.pdfLoading = document.getElementById("pdfLoading");
  refs.sidebarTitle = document.getElementById("sidebarTitle");
  refs.sidebarScroll = document.getElementById("sidebarScroll");
  refs.shell = document.getElementById("studioShell");
  refs.connectorSvg = document.getElementById("connectorSvg");
  refs.connectorPath = document.getElementById("connectorPath");
  refs.connectorDot = document.getElementById("connectorDot");
  refs.imageLightbox = document.getElementById("imageLightbox");
  refs.imageLightboxBackdrop = document.getElementById("imageLightboxBackdrop");
  refs.imageLightboxClose = document.getElementById("imageLightboxClose");
  refs.imageLightboxImg = document.getElementById("imageLightboxImg");
}

function bindShellEvents() {
  if (refs.cloudConfigButton) {
    refs.cloudConfigButton.addEventListener("click", handleConfigureCloud);
  }
  if (refs.checkApiButton) {
    refs.checkApiButton.addEventListener("click", handleCheckApiToken);
  }
  if (refs.adminLogoutButton) {
    refs.adminLogoutButton.addEventListener("click", handleAdminLogout);
  }
  if (refs.adminModeButton) {
    refs.adminModeButton.addEventListener("click", handleToggleAdminMode);
  }
  if (refs.saveButton) {
    refs.saveButton.addEventListener("click", handleSaveDocument);
  }

  refs.drawModeButton.addEventListener("click", () => {
    if (!state.editMode) {
      showMessage("只有管理模式可以使用文字選取新增 highlight。");
      return;
    }
    state.drawMode = !state.drawMode;
    if (state.drawMode) {
      state.captureMode = false;
      state.editingHighlightId = "";
      renderSidebar();
    }
    renderPdfHighlights();
    updateTopbar();
    hideMessage();
  });

  refs.focusHighlightButton.addEventListener("click", () => {
    toggleCaptureMode();
  });

  refs.colorButton.addEventListener("click", () => {
    cycleSelectedHighlightColor();
  });

  refs.toggleHighlightsButton.addEventListener("click", () => {
    state.showHighlights = !state.showHighlights;
    renderPdfHighlights();
    updateTopbar();
  });

  refs.zoomOutButton.addEventListener("click", () => adjustZoom(-0.12));
  refs.zoomInButton.addEventListener("click", () => adjustZoom(0.12));
  refs.fitWidthButton.addEventListener("click", () => fitPdfToPane({ rerender: true, silent: true }));
  refs.prevPageButton.addEventListener("click", () => goToPage(state.currentPage - 1, true));
  refs.nextPageButton.addEventListener("click", () => goToPage(state.currentPage + 1, true));
  refs.pdfSearchButton.addEventListener("click", () => {
    toggleSearchPanel("pdf");
  });
  refs.highlightSearchButton.addEventListener("click", () => {
    toggleSearchPanel("highlight");
  });
  if (refs.highlightFilterButton) {
    refs.highlightFilterButton.addEventListener("click", () => {
      toggleHighlightFilterPanel();
    });
  }
  if (refs.highlightFilterPanel) {
    refs.highlightFilterPanel.addEventListener("click", handleHighlightFilterPanelClick);
  }
  bindSearchEvents("pdf");
  bindSearchEvents("highlight");

  refs.currentPageInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      goToPage(refs.currentPageInput.value, true);
    }
  });
  refs.currentPageInput.addEventListener("change", () => {
    goToPage(refs.currentPageInput.value, true);
  });

  refs.pdfPane.addEventListener("scroll", () => {
    syncCurrentPageFromScroll();
    scheduleConnectorUpdate();
  }, { passive: true });
  refs.sidebarScroll.addEventListener("scroll", scheduleConnectorUpdate, { passive: true });
  window.addEventListener("keydown", handleGlobalHighlightDelete);
  window.addEventListener("keydown", handleImageLightboxKeydown);
  window.addEventListener("resize", debounce(() => requestPdfRerender({ preserveViewport: true }), 180));
  if (refs.imageLightboxBackdrop) {
    refs.imageLightboxBackdrop.addEventListener("click", closeImageLightbox);
  }
  if (refs.imageLightboxClose) {
    refs.imageLightboxClose.addEventListener("click", closeImageLightbox);
  }
}

function handleGlobalHighlightDelete(event) {
  if (!state.editMode || !state.selectedHighlightId) return;
  if (event.key !== "Delete" && event.key !== "Backspace") return;
  if (event.metaKey || event.ctrlKey || event.altKey) return;
  if (state.lastHighlightSelectionSource !== "pdf") return;
  if (isTextEntryTarget(event.target)) return;
  event.preventDefault();
  deleteHighlight(state.selectedHighlightId, { skipConfirm: true });
}

function handleImageLightboxKeydown(event) {
  if (event.key !== "Escape" || refs.imageLightbox?.hidden !== false) return;
  event.preventDefault();
  closeImageLightbox();
}

function isTextEntryTarget(target) {
  if (!(target instanceof Element)) return false;
  const tag = String(target.tagName || "").toLowerCase();
  if (tag === "input" || tag === "textarea" || tag === "select") {
    return true;
  }
  if (target.isContentEditable) {
    return true;
  }
  return Boolean(target.closest("[contenteditable='true']"));
}

async function discoverApiBase() {
  const configured = String(state.query.get("apiBase") || readStorage(STORAGE_KEYS.apiBase) || "")
    .trim()
    .replace(/\/+$/, "");
  if (configured) {
    const health = await checkApiHealth(configured);
    if (health.ok) {
      writeStorage(STORAGE_KEYS.apiBase, configured);
      return configured;
    }
    if (!state.query.get("apiBase")) {
      removeStorage(STORAGE_KEYS.apiBase);
    }
  }

  for (const candidate of DEFAULT_API_BASES) {
    const normalized = String(candidate || "").trim().replace(/\/+$/, "");
    if (!normalized) continue;
    const health = await checkApiHealth(normalized);
    if (!health.ok) continue;
    writeStorage(STORAGE_KEYS.apiBase, normalized);
    return normalized;
  }

  return "";
}

async function loadDocument() {
  const docId = String(state.query.get("doc") || state.query.get("id") || "").trim();
  const seedUrl = String(state.query.get("seed") || "").trim();
  const directPdfUrl = String(state.query.get("pdf") || "").trim();
  const localDoc = docId ? readLocalDoc(docId) : null;

  if (docId && state.apiBase) {
    try {
      const response = await fetchWithTimeout(
        `${state.apiBase}/pdf-guidelines/${encodeURIComponent(docId)}`,
        { method: "GET" },
        5000
      );
      if (response.ok) {
        const payload = await response.json();
        if (payload && payload.ok && payload.doc) {
          state.currentLoadSource = "api";
          cacheLocalDoc(payload.doc);
          return payload.doc;
        }
      } else if (response.status !== 404) {
        throw new Error(`Request failed with status ${response.status}`);
      }
    } catch (error) {
      console.warn("Unable to load API guideline doc", error);
    }
  }

  if (localDoc) {
    state.currentLoadSource = "local";
    return localDoc;
  }

  if (seedUrl) {
    try {
      const response = await fetchWithTimeout(seedUrl, { method: "GET" }, 4000);
      if (response.ok) {
        const seed = await response.json();
        state.currentLoadSource = "seed";
        return seed;
      }
    } catch (error) {
      console.warn("Unable to load seed guideline doc", error);
    }
  }

  const inlineDoc = createInlineQueryDoc(directPdfUrl);
  if (inlineDoc) {
    state.currentLoadSource = docId ? "query" : "inline";
    return inlineDoc;
  }

  state.currentLoadSource = "local";
  return {
    id: docId || createId("guideline"),
    title: sanitizeText(state.query.get("title") || "New Guideline Document", 240) || "New Guideline Document",
    pdfUrl: directPdfUrl,
    meta: sanitizeText(state.query.get("meta") || "", 240),
    tag: sanitizeText(state.query.get("tag") || "", 120),
    tone: sanitizeText(state.query.get("tone") || "mint", 40) || "mint",
    description:
      sanitizeText(state.query.get("description") || "這裡可以整理 guideline 或 paper 的重點摘要。", 4000) ||
      "這裡可以整理 guideline 或 paper 的重點摘要。",
    articlePath: String(state.query.get("article") || "").trim(),
    highlights: [],
  };
}

function createInlineQueryDoc(directPdfUrl) {
  if (!directPdfUrl) {
    return null;
  }

  const page = Math.max(1, parseInt(state.query.get("page") || "1", 10) || 1);
  const left = state.query.has("left") || state.query.has("x") ? clamp(state.query.get("left") || state.query.get("x"), 0, 100) : null;
  const top = state.query.has("top") || state.query.has("y") ? clamp(state.query.get("top") || state.query.get("y"), 0, 100) : null;
  const width = state.query.has("width") || state.query.has("w") ? clamp(state.query.get("width") || state.query.get("w"), 0.5, 100) : null;
  const height = state.query.has("height") || state.query.has("h") ? clamp(state.query.get("height") || state.query.get("h"), 0.5, 100) : null;
  const hasInlineHighlight = uniqueValues([left, top, width, height]).length === 4;

  return {
    id: sanitizeText(state.query.get("doc") || state.query.get("id") || createId("footnote"), 120),
    title: sanitizeText(state.query.get("title") || "PDF Footnote", 240) || "PDF Footnote",
    pdfUrl: directPdfUrl,
    meta: sanitizeText(state.query.get("meta") || "", 240),
    tag: sanitizeText(state.query.get("tag") || "Footnote", 120),
    tone: sanitizeText(state.query.get("tone") || "amber", 40) || "amber",
    description:
      sanitizeText(state.query.get("description") || "這是從文章 footnote 直接開啟的 PDF 參照視窗。", 4000) ||
      "這是從文章 footnote 直接開啟的 PDF 參照視窗。",
    articlePath: sanitizeText(state.query.get("article") || "", 1000),
    highlights: hasInlineHighlight
      ? [
          {
            id: sanitizeText(state.query.get("highlight") || createId("footnote-highlight"), 120),
            page,
            left,
            top,
            width,
            height,
            color: sanitizeText(state.query.get("color") || HIGHLIGHT_COLORS[0].value, 32) || HIGHLIGHT_COLORS[0].value,
            label: sanitizeText(state.query.get("highlightLabel") || state.query.get("title") || "Inline highlight", 240),
            quote: sanitizeText(state.query.get("quote") || "", 12000),
            note: sanitizeText(state.query.get("note") || state.query.get("noteOverride") || "", 40000),
          },
        ]
      : [],
  };
}

function normalizeDoc(input) {
  const source = input && typeof input === "object" ? input : {};
  const highlights = Array.isArray(source.highlights)
    ? source.highlights.map((item, index) => normalizeHighlight(item, index))
    : [];

  return {
    id: sanitizeText(source.id || state.query.get("doc") || createId("guideline"), 120),
    title: sanitizeText(source.title || "Untitled Guideline", 240) || "Untitled Guideline",
    // Explicit query param should win over cached/API doc, so shared links can pin an exact PDF source.
    pdfUrl: sanitizeText(state.query.get("pdf") || source.pdfUrl || "", 4000),
    meta: sanitizeText(source.meta || "", 240),
    tag: sanitizeText(source.tag || "", 120),
    tone: sanitizeText(source.tone || "mint", 40) || "mint",
    description: sanitizeText(source.description || "", 4000),
    articlePath: sanitizeText(source.articlePath || state.query.get("article") || "", 1000),
    createdAt: sanitizeText(source.createdAt || "", 80),
    updatedAt: sanitizeText(source.updatedAt || "", 80),
    highlights,
  };
}

function normalizeHighlight(input, index) {
  const source = input && typeof input === "object" ? input : {};
  const legacyScale = detectGeometryScale(source);
  const hasLegacyBox = [source.left, source.top, source.width, source.height].every((value) =>
    Number.isFinite(Number(value))
  );
  const legacyBox = hasLegacyBox
    ? {
        left: clamp(Number(source.left) * legacyScale, 0, 100),
        top: clamp(Number(source.top) * legacyScale, 0, 100),
        width: clamp(Number(source.width) * legacyScale, 0.5, 100),
        height: clamp(Number(source.height) * legacyScale, 0.5, 100),
      }
    : null;
  let quads = Array.isArray(source.quads)
    ? source.quads
        .map((quad) => normalizeHighlightQuad(quad))
        .filter((quad) => quad.width > 0 && quad.height > 0)
    : [];
  if (!quads.length && legacyBox) {
    quads = [legacyBox];
  }
  if (!quads.length) {
    quads = [{ left: 0, top: 0, width: 12, height: 5 }];
  }
  const bounds = getQuadBounds(quads);

  return {
    id: sanitizeText(source.id || createId(`highlight-${index + 1}`), 120),
    page: Math.max(1, Math.round(clamp(source.page || source.pageIndex || 1, 1, 9999))),
    left: bounds.left,
    top: bounds.top,
    width: bounds.width,
    height: bounds.height,
    quads,
    color: sanitizeText(source.color || HIGHLIGHT_COLORS[0].value, 32) || HIGHLIGHT_COLORS[0].value,
    label: sanitizeText(source.label || "", 240),
    quote: sanitizeText(source.quote || "", 12000),
    note: sanitizeText(source.note || "", 40000),
    clipImage: sanitizeText(source.clipImage || source.imageDataUrl || "", 2000000),
    tags: normalizeHighlightTags(source.tags || source.tagList || source.tag || ""),
  };
}

function normalizeHighlightTags(value) {
  const source = Array.isArray(value) ? value.join(" ") : String(value || "");
  const unique = new Set();
  source
    .split(/[\s,，、;；]+/u)
    .map((item) => item.trim().replace(/^#+/u, ""))
    .filter(Boolean)
    .forEach((item) => {
      unique.add(sanitizeText(item, 48));
    });
  return Array.from(unique).filter(Boolean).slice(0, 12);
}

function formatHighlightTagsInput(tags) {
  return normalizeHighlightTags(tags)
    .map((item) => `#${item}`)
    .join(" ");
}

function collectAvailableHighlightTags() {
  const tags = new Set();
  state.doc.highlights.forEach((highlight) => {
    normalizeHighlightTags(highlight.tags).forEach((tag) => tags.add(tag));
  });
  return Array.from(tags).sort((a, b) => a.localeCompare(b, "zh-Hant"));
}

function collectAvailableHighlightColors() {
  const seen = new Set();
  const colors = [];

  HIGHLIGHT_COLORS.forEach((preset) => {
    const value = String(preset.value || "").toLowerCase();
    const isUsed = state.doc.highlights.some((highlight) => String(highlight.color || "").toLowerCase() === value);
    if (!isUsed) return;
    seen.add(value);
    colors.push({
      name: preset.name,
      value,
      swatch: preset.value,
    });
  });

  state.doc.highlights.forEach((highlight) => {
    const value = String(highlight.color || "").toLowerCase();
    if (!value || seen.has(value)) return;
    seen.add(value);
    colors.push({
      name: value,
      value,
      swatch: value,
    });
  });

  return colors;
}

function areHighlightFiltersActive() {
  return state.highlightFilters.colors.length > 0 || state.highlightFilters.tags.length > 0;
}

function matchesHighlightFilters(highlight) {
  const colorFilters = state.highlightFilters.colors;
  const tagFilters = state.highlightFilters.tags;
  if (colorFilters.length && !colorFilters.includes(String(highlight.color || "").toLowerCase())) {
    return false;
  }
  if (tagFilters.length) {
    const highlightTags = normalizeHighlightTags(highlight.tags).map((tag) => tag.toLowerCase());
    if (!tagFilters.every((tag) => highlightTags.includes(String(tag).toLowerCase()))) {
      return false;
    }
  }
  return true;
}

function getFilteredHighlights() {
  const highlights = Array.isArray(state.doc?.highlights) ? state.doc.highlights : [];
  if (!areHighlightFiltersActive()) {
    return highlights;
  }
  return highlights.filter((highlight) => matchesHighlightFilters(highlight));
}

function normalizeHighlightQuad(input) {
  const source = input && typeof input === "object" ? input : {};
  const scale = detectGeometryScale(source);
  const left = clamp(Number(source.left) * scale, 0, 100);
  const top = clamp(Number(source.top) * scale, 0, 100);
  const width = clamp(Number(source.width) * scale, 0.1, 100 - left);
  const height = clamp(Number(source.height) * scale, 0.1, 100 - top);
  return {
    left: roundGeometry(left),
    top: roundGeometry(top),
    width: roundGeometry(width),
    height: roundGeometry(height),
  };
}

function detectGeometryScale(source) {
  const values = [source?.left, source?.top, source?.width, source?.height]
    .map((value) => Number(value))
    .filter((value) => Number.isFinite(value));
  if (values.length !== 4) return 1;
  return values.every((value) => value >= 0 && value <= 1) ? 100 : 1;
}

function applyQueryHighlightOverrides() {
  if (!state.doc.highlights.length) {
    return;
  }

  const target = getSelectedHighlight() || state.doc.highlights[0];
  if (!target) {
    return;
  }

  const noteOverride = sanitizeText(state.query.get("noteOverride") || "", 40000);
  const quoteOverride = sanitizeText(state.query.get("quoteOverride") || "", 12000);
  const labelOverride = sanitizeText(state.query.get("highlightLabel") || "", 240);

  if (noteOverride) {
    target.note = noteOverride;
  }
  if (quoteOverride) {
    target.quote = quoteOverride;
  }
  if (labelOverride) {
    target.label = labelOverride;
  }

  state.currentPage = target.page;
}

function updateTopbar() {
  const doc = state.doc;
  const selectedHighlight = getSelectedHighlight();
  const filteredHighlights = getFilteredHighlights();
  const storageLabel =
    state.currentLoadSource === "api"
      ? "Firebase API"
      : state.currentLoadSource === "local"
        ? "Local draft"
        : state.currentLoadSource === "query"
          ? "Query metadata"
        : state.currentLoadSource === "inline"
          ? "Footnote inline"
          : "Seed JSON";

  refs.title.textContent = doc.title || "Untitled Guideline";
  refs.docTagPill.hidden = !doc.tag;
  refs.docTagPill.textContent = doc.tag || "";
  refs.docMetaPill.hidden = !doc.meta;
  refs.docMetaPill.textContent = doc.meta || "";
  refs.docDescription.hidden = !doc.description;
  refs.docDescription.textContent = doc.description || "";

  refs.openPdfButton.hidden = !doc.pdfUrl;
  refs.openPdfButton.href = doc.pdfUrl || "#";
  refs.backToArticleButton.hidden = !doc.articlePath;
  refs.backToArticleButton.href = doc.articlePath || "#";

  if (refs.openFullReaderButton) {
    refs.openFullReaderButton.href = buildReaderUrl({ embed: false });
  }

  refs.storageBadge.textContent = storageLabel;
  refs.storageBadge.classList.toggle("is-online", state.currentLoadSource === "api");
  refs.storageBadge.classList.toggle("is-local", state.currentLoadSource !== "api");
  refs.modeBadge.textContent = state.editMode ? "管理模式" : "唯讀模式";
  refs.countBadge.textContent = `${state.doc.highlights.length} highlights`;
  refs.pageBadge.textContent = `Page ${state.currentPage} / ${Math.max(1, state.pageCount || 1)}`;
  refs.sidebarTitle.textContent = areHighlightFiltersActive()
    ? `Highlights (${filteredHighlights.length}/${state.doc.highlights.length})`
    : `Highlights (${state.doc.highlights.length})`;

  if (refs.adminModeButton) {
    refs.adminModeButton.innerHTML = `${iconSvg("shield")}<span>${state.editMode ? "結束管理" : "管理模式"}</span>`;
  }
  if (refs.adminLogoutButton) {
    refs.adminLogoutButton.disabled = !state.token && !state.apiBase;
  }
  if (refs.saveButton) {
    refs.saveButton.disabled = !state.editMode || !state.isDirty || state.isSaving;
    refs.saveButton.innerHTML = `${iconSvg("save")}<span>${state.isSaving ? "儲存中..." : "儲存變更"}</span>`;
  }

  refs.drawModeButton.disabled = !state.editMode || !state.pdfDoc;
  refs.drawModeButton.classList.toggle("is-active", state.drawMode);
  refs.focusHighlightButton.disabled = !state.editMode || !state.pdfDoc;
  refs.focusHighlightButton.classList.toggle("is-active", state.captureMode);
  refs.focusHighlightButton.title = state.captureMode ? "結束截圖框選模式" : "截圖框選模式";
  refs.colorButton.disabled = !state.editMode || !selectedHighlight;
  refs.colorSwatch.style.background = selectedHighlight ? selectedHighlight.color : HIGHLIGHT_COLORS[0].value;
  refs.toggleHighlightsButton.innerHTML = iconSvg(state.showHighlights ? "eye" : "eyeOff");
  refs.toggleHighlightsButton.title = state.showHighlights ? "Hide Highlights" : "Show Highlights";
  refs.zoomValue.textContent = `${Math.round(state.zoom * 100)}%`;
  refs.fitWidthButton.disabled = !state.pdfDoc;
  refs.prevPageButton.disabled = state.currentPage <= 1;
  refs.nextPageButton.disabled = state.currentPage >= Math.max(1, state.pageCount);
  refs.currentPageInput.value = String(state.currentPage);
  refs.currentPageInput.disabled = !state.pageCount;
  refs.totalPagesLabel.textContent = `/ ${Math.max(1, state.pageCount || 1)}`;
  refs.pdfSearchButton.disabled = !state.pageViews.length;
  refs.highlightSearchButton.disabled = !state.doc.highlights.length;
  updateSearchUi();
  updateHighlightFilterUi();
}

function renderSidebar() {
  const doc = state.doc;
  const filteredHighlights = getFilteredHighlights();
  if (!doc.highlights.some((item) => item.id === state.selectedHighlightId)) {
    state.selectedHighlightId = doc.highlights[0] ? doc.highlights[0].id : "";
  }
  syncHighlightSearchMatches(true);

  const metaChips = [doc.tag, doc.meta]
    .filter(Boolean)
    .map((item) => `<span class="pdf-guideline-studio__doc-chip">${escapeHtml(item)}</span>`)
    .join("");

  const utilityLinks = [
    doc.articlePath
      ? `<a class="pdf-guideline-studio__doc-link" href="${escapeHtml(doc.articlePath)}">回文章</a>`
      : "",
    doc.pdfUrl
      ? `<a class="pdf-guideline-studio__doc-link" href="${escapeHtml(doc.pdfUrl)}" target="_blank" rel="noopener">Open PDF</a>`
      : "",
    state.viewMode === "embed"
      ? `<a class="pdf-guideline-studio__doc-link" href="${escapeHtml(buildReaderUrl({ embed: false }))}" target="_blank" rel="noopener">完整閱讀器</a>`
      : "",
  ]
    .filter(Boolean)
    .join("");

  const metaHtml = state.editMode
    ? `
      <section class="pdf-guideline-studio__editor-card">
        <div class="pdf-guideline-studio__section-head">
          <h3 class="pdf-guideline-studio__section-title">Document</h3>
          <button
            type="button"
            class="pdf-guideline-studio__collapse-toggle"
            data-action="toggle-doc-editor"
            aria-expanded="${state.docEditorCollapsed ? "false" : "true"}"
          >
            ${state.docEditorCollapsed ? "展開" : "收合"}
          </button>
        </div>
        <div class="pdf-guideline-studio__doc-form" ${state.docEditorCollapsed ? "hidden" : ""}>
          ${renderField("標題", "title", doc.title, "text")}
          ${renderField("PDF URL", "pdfUrl", doc.pdfUrl, "text")}
          ${renderField("Meta", "meta", doc.meta, "text")}
          ${renderField("Tag", "tag", doc.tag, "text")}
          ${renderField("文章連結", "articlePath", doc.articlePath, "text")}
          ${renderField("摘要", "description", doc.description, "textarea")}
        </div>
      </section>
    `
    : "";

  const highlightsHtml = filteredHighlights.length
    ? filteredHighlights.map((highlight) => renderHighlightCard(highlight, highlight.id === state.selectedHighlightId)).join("")
    : `<div class="pdf-guideline-studio__empty">${
        doc.highlights.length
          ? "目前篩選條件下沒有符合的 highlight。"
          : state.editMode
            ? "目前還沒有 highlight。可用筆工具選字，或用相機工具框選圖表區域。"
            : "目前尚未整理 highlight。管理者完成編輯後，這裡會顯示右側重點。"
      }</div>`;

  refs.sidebarScroll.innerHTML = `
    <section class="pdf-guideline-studio__doc-meta">
      ${metaChips ? `<div class="pdf-guideline-studio__doc-topline">${metaChips}</div>` : ""}
      ${
        doc.description
          ? `<p class="pdf-guideline-studio__doc-summary">${nl2br(escapeHtml(doc.description))}</p>`
          : `<p class="pdf-guideline-studio__doc-summary">左側是 PDF 原文，右側則是你整理過的 highlight 與重點摘要。</p>`
      }
      ${utilityLinks ? `<div class="pdf-guideline-studio__doc-links">${utilityLinks}</div>` : ""}
    </section>

    ${metaHtml}

    <section class="pdf-guideline-studio__highlight-list">
      ${highlightsHtml}
    </section>
  `;

  bindSidebarEvents();
  updateTopbar();
  scheduleConnectorUpdate();
}

function renderField(label, field, value, type) {
  if (type === "textarea") {
    return `
      <label class="pdf-guideline-studio__field">
        <span class="pdf-guideline-studio__field-label">${escapeHtml(label)}</span>
        <textarea data-doc-field="${escapeHtml(field)}">${escapeHtml(value || "")}</textarea>
      </label>
    `;
  }

  return `
    <label class="pdf-guideline-studio__field">
      <span class="pdf-guideline-studio__field-label">${escapeHtml(label)}</span>
      <input type="text" value="${escapeHtml(value || "")}" data-doc-field="${escapeHtml(field)}" />
    </label>
  `;
}

function renderHighlightCard(highlight, isSelected) {
  const isEditorOpen = state.editMode && (highlight.id === state.editingHighlightId || isSelected);
  const heading = highlight.label || createHighlightHeading(highlight);
  const headingMatches = getHighlightSearchMatchesForField(highlight.id, "label");
  const quoteMatches = getHighlightSearchMatchesForField(highlight.id, "quote");
  const noteMatches = getHighlightSearchMatchesForField(highlight.id, "note");
  const tags = normalizeHighlightTags(highlight.tags);
  const hasClipImage = Boolean(highlight.clipImage);
  const citeButtonHtml = `
    <button
      type="button"
      class="pdf-guideline-studio__mini-button pdf-guideline-studio__mini-button--cite"
      data-action="copy-cite"
      data-highlight-id="${escapeHtml(highlight.id)}"
      title="複製 Typora 用的 footnote shortcode"
      aria-label="Copy cite shortcode"
    >
      Cite
    </button>
  `;
  const previewButtonHtml = hasClipImage
    ? `
      <button
        type="button"
        class="pdf-guideline-studio__mini-button pdf-guideline-studio__mini-button--preview"
        data-action="preview-highlight-lightbox"
        data-highlight-id="${escapeHtml(highlight.id)}"
        title="放大預覽截圖"
        aria-label="Open enlarged image preview"
      >
        ${iconSvg("expand")}
      </button>
    `
    : "";
  const quoteHtml = highlight.quote
    ? `<blockquote class="pdf-guideline-studio__highlight-quote ${isSelected ? "" : "is-clamped"}">${renderSearchMarkedText(highlight.quote, quoteMatches, state.highlightSearch.activeIndex)}</blockquote>`
    : "";
  const clipImageHtml = hasClipImage
    ? `<figure class="pdf-guideline-studio__highlight-image"><img src="${escapeHtml(highlight.clipImage)}" alt="Captured PDF region" loading="lazy" data-action="preview-highlight-image" title="雙擊可置中放大" /></figure>`
    : "";
  const noteText = highlight.note || "這段 highlight 尚未補上右側重點整理。";
  const noteHtml = `<p class="pdf-guideline-studio__highlight-note ${isSelected ? "" : "is-clamped"}">${renderSearchMarkedText(noteText, noteMatches, state.highlightSearch.activeIndex)}</p>`;
  const tagsHtml = tags.length
    ? `<div class="pdf-guideline-studio__highlight-tags">${tags
        .map((tag) => `<span class="pdf-guideline-studio__highlight-tag">#${escapeHtml(tag)}</span>`)
        .join("")}</div>`
    : "";
  const editHtml =
    isEditorOpen
      ? `
        <div class="pdf-guideline-studio__doc-form">
          ${clipImageHtml}
          ${renderHighlightField("標題", "label", highlight.label)}
          ${renderHighlightField("Tags", "tags", formatHighlightTagsInput(tags))}
          ${renderHighlightField("原文摘句", "quote", highlight.quote, "textarea")}
          ${renderHighlightField("右側重點", "note", highlight.note, "textarea")}
          <div class="pdf-guideline-studio__field">
            <span class="pdf-guideline-studio__field-label">Highlight 顏色</span>
            <div class="pdf-guideline-studio__color-row">
              ${HIGHLIGHT_COLORS.map((color) => {
                const selected = color.value.toLowerCase() === String(highlight.color || "").toLowerCase();
                return `
                  <button
                    type="button"
                    class="pdf-guideline-studio__color-button ${selected ? "is-selected" : ""}"
                    style="background:${escapeHtml(color.value)}"
                    data-highlight-color="${escapeHtml(color.value)}"
                    aria-label="${escapeHtml(color.name)}"
                  ></button>
                `;
              }).join("")}
            </div>
          </div>
          <div class="pdf-guideline-studio__highlight-actions">
            <button type="button" class="pdf-guideline-studio__mini-button is-danger" data-action="delete-highlight" data-highlight-id="${escapeHtml(highlight.id)}">刪除</button>
          </div>
        </div>
      `
      : `
        ${clipImageHtml}
        ${tagsHtml}
        ${quoteHtml}
        ${noteHtml}
      `;

  return `
    <article
      class="pdf-guideline-studio__highlight-card ${isSelected ? "is-selected" : ""}"
      data-highlight-card="${escapeHtml(highlight.id)}"
      id="sidebar-highlight-${escapeHtml(highlight.id)}"
      tabindex="0"
      role="button"
      aria-label="${escapeHtml(heading)}"
    >
      <span class="pdf-guideline-studio__highlight-card-accent" style="background:${escapeHtml(highlight.color)}"></span>
      <div class="pdf-guideline-studio__highlight-card-top">
        <div class="pdf-guideline-studio__highlight-card-title">
          <span class="pdf-guideline-studio__highlight-card-kicker">Page ${escapeHtml(String(highlight.page))}</span>
          <h4 class="pdf-guideline-studio__highlight-card-heading">${renderSearchMarkedText(heading, headingMatches, state.highlightSearch.activeIndex)}</h4>
        </div>
        <div class="pdf-guideline-studio__highlight-card-tools">
          ${previewButtonHtml}
          ${citeButtonHtml}
        </div>
      </div>
      ${editHtml}
    </article>
  `;
}

function renderHighlightField(label, field, value, type = "text") {
  if (type === "textarea") {
    return `
      <label class="pdf-guideline-studio__field">
        <span class="pdf-guideline-studio__field-label">${escapeHtml(label)}</span>
        <textarea data-highlight-field="${escapeHtml(field)}">${escapeHtml(value || "")}</textarea>
      </label>
    `;
  }

  return `
    <label class="pdf-guideline-studio__field">
      <span class="pdf-guideline-studio__field-label">${escapeHtml(label)}</span>
      <input type="text" value="${escapeHtml(value || "")}" data-highlight-field="${escapeHtml(field)}" />
    </label>
  `;
}

function renderSearchPanel(kind, placeholder) {
  const prefix = kind === "pdf" ? "pdfSearch" : "highlightSearch";
  return `
    <div class="pdf-guideline-studio__search-panel" id="${prefix}Panel" hidden>
      <label class="pdf-guideline-studio__search-input-wrap">
        <input
          type="text"
          class="pdf-guideline-studio__search-input"
          id="${prefix}Input"
          placeholder="${escapeHtml(placeholder)}"
          autocomplete="off"
          spellcheck="false"
        />
      </label>
      <button
        type="button"
        class="pdf-guideline-studio__search-toggle"
        id="${prefix}CaseButton"
        title="切換大小寫敏感"
        aria-pressed="false"
      >
        Aa
      </button>
      <span class="pdf-guideline-studio__search-count" id="${prefix}Count">0/0</span>
      <button type="button" class="pdf-guideline-studio__search-nav" id="${prefix}PrevButton" title="上一筆 (↑)">↑</button>
      <button type="button" class="pdf-guideline-studio__search-nav" id="${prefix}NextButton" title="下一筆 (↓)">↓</button>
    </div>
  `;
}

function renderHighlightFilterPanel() {
  return `
    <div class="pdf-guideline-studio__filter-panel" id="highlightFilterPanel" hidden>
      <div class="pdf-guideline-studio__filter-section">
        <div class="pdf-guideline-studio__filter-label">顏色</div>
        <div class="pdf-guideline-studio__filter-options" data-filter-group="color"></div>
      </div>
      <div class="pdf-guideline-studio__filter-section">
        <div class="pdf-guideline-studio__filter-label">#Tag</div>
        <div class="pdf-guideline-studio__filter-options" data-filter-group="tag"></div>
      </div>
      <div class="pdf-guideline-studio__filter-actions">
        <button type="button" class="pdf-guideline-studio__mini-button" data-action="clear-highlight-filters">清除篩選</button>
      </div>
    </div>
  `;
}

function getHighlightSearchMatchesForField(highlightId, field) {
  return state.highlightSearch.matches.filter((match) => match.highlightId === highlightId && match.field === field);
}

function renderSearchMarkedText(text, matches, activeIndex) {
  const content = String(text || "");
  if (!matches || !matches.length) {
    return nl2br(escapeHtml(content));
  }

  const ordered = [...matches]
    .filter((match) => Number.isInteger(match.start) && Number.isInteger(match.end) && match.end > match.start)
    .sort((a, b) => a.start - b.start);
  if (!ordered.length) {
    return nl2br(escapeHtml(content));
  }

  let cursor = 0;
  let html = "";
  ordered.forEach((match) => {
    if (match.start < cursor) return;
    html += nl2br(escapeHtml(content.slice(cursor, match.start)));
    html += `<mark class="pdf-guideline-studio__search-hit ${match.resultIndex === activeIndex ? "is-active" : ""}">${nl2br(escapeHtml(content.slice(match.start, match.end)))}</mark>`;
    cursor = match.end;
  });
  html += nl2br(escapeHtml(content.slice(cursor)));
  return html;
}

function bindSidebarEvents() {
  const docEditorToggle = refs.sidebarScroll.querySelector('[data-action="toggle-doc-editor"]');
  if (docEditorToggle) {
    docEditorToggle.addEventListener("click", (event) => {
      event.stopPropagation();
      state.docEditorCollapsed = !state.docEditorCollapsed;
      renderSidebar();
    });
  }

  Array.from(refs.sidebarScroll.querySelectorAll("[data-doc-field]")).forEach((element) => {
    element.addEventListener("input", (event) => {
      const field = event.currentTarget.getAttribute("data-doc-field");
      state.doc[field] = sanitizeText(event.currentTarget.value, field === "pdfUrl" ? 4000 : 40000);
      state.isDirty = true;
      updateTopbar();
    });
  });

  Array.from(refs.sidebarScroll.querySelectorAll("[data-highlight-card]")).forEach((element) => {
    const select = (event) => {
      if (event.target.closest("button, textarea, input, a")) {
        return;
      }
      const highlightId = element.getAttribute("data-highlight-card");
      selectHighlight(highlightId, true, { openEditor: true, source: "sidebar" });
    };

    element.addEventListener("click", select);
    element.addEventListener("keydown", (event) => {
      if (event.target.closest("button, textarea, input, a")) {
        return;
      }
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        select(event);
      }
    });
  });

  Array.from(refs.sidebarScroll.querySelectorAll("[data-highlight-field]")).forEach((element) => {
    element.addEventListener("input", (event) => {
      const field = event.currentTarget.getAttribute("data-highlight-field");
      const nextValue =
        field === "tags"
          ? normalizeHighlightTags(event.currentTarget.value)
          : sanitizeText(event.currentTarget.value, field === "note" ? 40000 : 12000);
      updateSelectedHighlight({ [field]: nextValue }, false);
      if (field === "label") {
        const heading = refs.sidebarScroll.querySelector(`[data-highlight-card="${cssEscape(state.selectedHighlightId)}"] .pdf-guideline-studio__highlight-card-heading`);
        if (heading) {
          heading.textContent = event.currentTarget.value || createHighlightHeading(getSelectedHighlight());
        }
      }
    });

    if (element.getAttribute("data-highlight-field") === "tags") {
      element.addEventListener("blur", () => {
        updateHighlightFilterUi();
        refreshHighlightFilterResults();
      });
    }
  });

  Array.from(refs.sidebarScroll.querySelectorAll("[data-highlight-color]")).forEach((element) => {
    element.addEventListener("click", (event) => {
      event.stopPropagation();
      updateSelectedHighlight({ color: element.getAttribute("data-highlight-color") }, true);
    });
  });

  Array.from(refs.sidebarScroll.querySelectorAll('[data-action="delete-highlight"]')).forEach((element) => {
    element.addEventListener("click", (event) => {
      event.stopPropagation();
      deleteHighlight(element.getAttribute("data-highlight-id"));
    });
  });

  Array.from(refs.sidebarScroll.querySelectorAll('[data-action="copy-cite"]')).forEach((element) => {
    element.addEventListener("click", async (event) => {
      event.stopPropagation();
      const highlightId = element.getAttribute("data-highlight-id");
      await copyHighlightCiteSnippet(highlightId);
    });
  });

  Array.from(refs.sidebarScroll.querySelectorAll('[data-action="preview-highlight-lightbox"]')).forEach((element) => {
    element.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      const card = element.closest("[data-highlight-card]");
      const image = card?.querySelector('[data-action="preview-highlight-image"]');
      openImageLightbox(image?.currentSrc || image?.src || "");
    });
  });

  Array.from(refs.sidebarScroll.querySelectorAll('[data-action="preview-highlight-image"]')).forEach((element) => {
    element.addEventListener("dblclick", (event) => {
      event.preventDefault();
      event.stopPropagation();
      openImageLightbox(element.currentSrc || element.src || "");
    });
  });
}

function openImageLightbox(src) {
  const imageSrc = String(src || "").trim();
  if (!imageSrc || !refs.imageLightbox || !refs.imageLightboxImg) {
    return;
  }
  refs.imageLightboxImg.onerror = () => {
    closeImageLightbox();
    showMessage("圖片預覽載入失敗。", "error", true);
  };
  refs.imageLightboxImg.onload = () => {
    refs.imageLightboxImg.onerror = null;
    refs.imageLightboxImg.onload = null;
  };
  refs.imageLightboxImg.src = imageSrc;
  refs.imageLightbox.hidden = false;
  document.body.classList.add("pdf-guideline-studio-body--modal-open");
}

function closeImageLightbox() {
  if (!refs.imageLightbox || !refs.imageLightboxImg) {
    return;
  }
  refs.imageLightbox.hidden = true;
  refs.imageLightboxImg.removeAttribute("src");
  document.body.classList.remove("pdf-guideline-studio-body--modal-open");
}

async function copyHighlightCiteSnippet(highlightId) {
  const snippet = buildHighlightCiteSnippet(highlightId);
  if (!snippet) {
    showMessage("找不到這段 highlight，無法產生 cite 內容。", "error");
    return;
  }

  const copied = await writeClipboardText(snippet);
  if (!copied) {
    showMessage("無法寫入剪貼簿，請改用完整閱讀器手動複製。", "error", true);
    return;
  }

  showMessage("已複製 Cite shortcode，可直接貼到 Typora 的 [^1]: 下面。");
}

function buildHighlightCiteSnippet(highlightId) {
  const highlight = state.doc.highlights.find((item) => item.id === highlightId);
  if (!highlight) return "";

  const docId = sanitizeText(state.doc?.id || state.query.get("doc") || "", 120);
  const note = normalizeCiteNote(highlight.note);

  if (docId) {
    return [
      `{{< pdf-footnote trigger="看原文" doc="${escapeShortcodeAttribute(docId)}" highlight="${escapeShortcodeAttribute(highlight.id)}" >}}`,
      `    ${note}`,
      "{{< /pdf-footnote >}}",
    ].join("\n");
  }

  const title = sanitizeText(state.doc?.title || state.query.get("title") || "PDF footnote", 240);
  const pdfUrl = sanitizeText(state.doc?.pdfUrl || state.query.get("pdf") || "", 4000);
  const attrs = [
    'trigger="看原文"',
    `highlight="${escapeShortcodeAttribute(highlight.id)}"`,
    `title="${escapeShortcodeAttribute(title)}"`,
    `page="${highlight.page}"`,
    `left="${roundGeometry(highlight.left)}"`,
    `top="${roundGeometry(highlight.top)}"`,
    `width="${roundGeometry(highlight.width)}"`,
    `height="${roundGeometry(highlight.height)}"`,
  ];

  if (pdfUrl) {
    attrs.splice(1, 0, `pdf="${escapeShortcodeAttribute(pdfUrl)}"`);
  }

  return [
    `{{< pdf-footnote ${attrs.join(" ")} >}}`,
    `    ${note}`,
    "{{< /pdf-footnote >}}",
  ].join("\n");
}

function normalizeCiteNote(value) {
  const text = sanitizeText(value || "", 40000)
    .replace(/\r\n/g, "\n")
    .trim();

  if (!text) {
    return "你的中文重點";
  }

  return text
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.length > 0)
    .join("\n    ");
}

function escapeShortcodeAttribute(value) {
  return String(value || "")
    .replace(/\\/g, "\\\\")
    .replace(/"/g, '\\"');
}

async function renderPdf(options = {}) {
  const preserveViewport = Boolean(options.preserveViewport);
  const preservedViewport = preserveViewport ? capturePdfViewportState() : null;
  const doc = state.doc;
  state.pdfDoc = null;
  state.pageViews = [];
  state.pageCount = 0;
  clearPdfSearchMarks();
  refs.pdfStack.innerHTML = "";
  refs.pdfLoading.hidden = false;
  refs.pdfLoading.textContent = doc.pdfUrl ? "Loading PDF..." : "這份 guideline 尚未填入 PDF URL。";
  refs.toolbarNote.textContent = doc.pdfUrl ? "PDF 載入中..." : "缺少 PDF URL";
  refs.connectorPath.setAttribute("d", "");
  refs.connectorDot.setAttribute("r", "0");

  if (!doc.pdfUrl) {
    updateTopbar();
    return;
  }

  try {
    state.isRenderingPdf = true;
    const pdfjsLib = await ensurePdfJs();
    const pdfDoc = await pdfjsLib.getDocument(doc.pdfUrl).promise;
    state.pdfDoc = pdfDoc;
    state.pageCount = pdfDoc.numPages;
    state.currentPage = clamp(state.currentPage, 1, pdfDoc.numPages);
    refs.pdfStack.innerHTML = "";
    refs.pdfLoading.hidden = true;
    refs.toolbarNote.textContent = `共 ${pdfDoc.numPages} 頁，點右側 highlight 可回到 PDF 原文位置。`;
    await renderPdfPages(pdfDoc, pdfjsLib);
    syncPdfSearchMatches(true);
    applyPdfSearchMarks();
    renderPdfHighlights();
    updateTopbar();

    if (preservedViewport) {
      restorePdfViewportState(preservedViewport, false);
      window.requestAnimationFrame(() => {
        restorePdfViewportState(preservedViewport, false);
      });
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          restorePdfViewportState(preservedViewport, false);
        });
      });
    } else if (state.selectedHighlightId) {
      window.setTimeout(() => {
        scrollToHighlight(state.selectedHighlightId, false);
      }, 120);
    } else {
      window.setTimeout(() => {
        goToPage(state.currentPage, false);
      }, 60);
    }
  } catch (error) {
    console.error(error);
    refs.pdfLoading.hidden = false;
    refs.pdfLoading.textContent = `無法載入 PDF: ${formatError(error)}`;
    refs.toolbarNote.textContent = "PDF 載入失敗";
    showMessage(`無法載入 PDF。${formatError(error)}`, "error", true);
  } finally {
    state.isRenderingPdf = false;
    updateTopbar();
    if (state.pendingRenderOptions) {
      const nextOptions = state.pendingRenderOptions;
      state.pendingRenderOptions = null;
      requestPdfRerender(nextOptions);
    }
  }
}

function requestPdfRerender(options = {}) {
  if (state.isRenderingPdf) {
    const current = state.pendingRenderOptions || {};
    state.pendingRenderOptions = {
      preserveViewport: Boolean(options.preserveViewport || current.preserveViewport),
    };
    return;
  }
  renderPdf(options);
}

async function renderPdfPages(pdfDoc, pdfjsLib) {
  const paneWidth = Math.max(320, refs.pdfPane.clientWidth - 40);

  for (let pageNumber = 1; pageNumber <= pdfDoc.numPages; pageNumber += 1) {
    const pageCard = document.createElement("article");
    pageCard.className = "pdf-guideline-studio__page-card";
    pageCard.setAttribute("data-page-card", String(pageNumber));
    pageCard.innerHTML = `
      <div class="pdf-guideline-studio__page-meta">
        <span>Page ${pageNumber}</span>
        <span>${pageNumber === 1 ? "Original PDF" : "Literature Page"}</span>
      </div>
      <div class="pdf-guideline-studio__page-stage">
        <canvas class="pdf-guideline-studio__page-canvas"></canvas>
        <div class="pdf-guideline-studio__page-text-layer" data-page-text-layer="${pageNumber}"></div>
        <div class="pdf-guideline-studio__page-search-layer" data-page-search-layer="${pageNumber}"></div>
        <div class="pdf-guideline-studio__page-overlay" data-page-overlay="${pageNumber}"></div>
      </div>
    `;
    refs.pdfStack.appendChild(pageCard);

    const canvas = pageCard.querySelector(".pdf-guideline-studio__page-canvas");
    const textLayer = pageCard.querySelector(".pdf-guideline-studio__page-text-layer");
    const searchLayer = pageCard.querySelector(".pdf-guideline-studio__page-search-layer");
    const overlay = pageCard.querySelector(".pdf-guideline-studio__page-overlay");
    const page = await pdfDoc.getPage(pageNumber);
    const baseViewport = page.getViewport({ scale: 1 });
    const cssScale = (paneWidth / baseViewport.width) * state.zoom;
    const deviceScale = window.devicePixelRatio || 1;
    const renderViewport = page.getViewport({ scale: cssScale * deviceScale });
    const cssWidth = baseViewport.width * cssScale;
    const cssHeight = baseViewport.height * cssScale;

    canvas.width = Math.ceil(renderViewport.width);
    canvas.height = Math.ceil(renderViewport.height);
    canvas.style.width = `${cssWidth}px`;
    canvas.style.height = `${cssHeight}px`;

    const stage = pageCard.querySelector(".pdf-guideline-studio__page-stage");
    stage.style.width = `${cssWidth}px`;
    stage.style.height = `${cssHeight}px`;
    textLayer.style.width = `${cssWidth}px`;
    textLayer.style.height = `${cssHeight}px`;
    searchLayer.style.width = `${cssWidth}px`;
    searchLayer.style.height = `${cssHeight}px`;

    const context = canvas.getContext("2d");
    await page.render({ canvasContext: context, viewport: renderViewport }).promise;
    const textContent = await page.getTextContent();
    textLayer.innerHTML = "";
    const textDivs = [];
    const textLayerTask = pdfjsLib.renderTextLayer({
      textContentSource: textContent,
      container: textLayer,
      viewport: page.getViewport({ scale: cssScale }),
      textDivs,
    });
    if (textLayerTask && textLayerTask.promise) {
      await textLayerTask.promise;
    }

    const searchEntries = [];
    let searchCursor = 0;
    const contentItems = Array.isArray(textContent.items) ? textContent.items : [];
    contentItems.forEach((item, index) => {
      const rawText = String(item?.str || "");
      const text = normalizeSearchText(rawText, 4000, { caseSensitive: true });
      if (!text) return;
      searchEntries.push({
        index,
        rawText,
        text,
        start: searchCursor,
        end: searchCursor + text.length,
      });
      searchCursor += text.length + 1;
    });

    state.pageViews.push({
      pageNumber,
      pageCard,
      stage,
      page,
      canvas,
      textLayer,
      searchLayer,
      overlay,
      textDivs,
      searchEntries,
      searchText: searchEntries.map((entry) => entry.text).join(" "),
      searchTextLower: searchEntries.map((entry) => entry.text).join(" ").toLowerCase(),
      baseViewportWidth: baseViewport.width,
      baseViewportHeight: baseViewport.height,
      cssScale,
      cssWidth,
      cssHeight,
    });
  }
}

function renderPdfHighlights() {
  state.pageViews.forEach((pageView) => {
    pageView.overlay.innerHTML = "";
    const selectionEnabled = state.editMode && state.drawMode && !state.captureMode;
    const captureEnabled = state.editMode && state.captureMode && !state.drawMode;
    pageView.overlay.classList.toggle("is-draw-enabled", selectionEnabled);
    pageView.overlay.classList.toggle("is-capture-enabled", captureEnabled);
    pageView.textLayer.classList.toggle("is-selection-enabled", selectionEnabled);
    bindDrawEvents(pageView);
    bindCaptureEvents(pageView);

    if (!state.showHighlights) {
      return;
    }

    state.doc.highlights
      .filter((item) => item.page === pageView.pageNumber)
      .forEach((highlight) => {
        const renderQuads = resolveHighlightRenderQuads(pageView, highlight);
        const renderBounds = getQuadBounds(renderQuads);
        const box = document.createElement("button");
        box.type = "button";
        box.className = "pdf-guideline-studio__page-highlight";
        box.id = `pdf-highlight-${highlight.id}`;
        box.setAttribute("data-highlight-box", highlight.id);
        box.style.left = `${renderBounds.left}%`;
        box.style.top = `${renderBounds.top}%`;
        box.style.width = `${renderBounds.width}%`;
        box.style.height = `${renderBounds.height}%`;
        box.style.setProperty("--highlight-color", highlight.color);
        box.classList.toggle("is-selected", highlight.id === state.selectedHighlightId);
        box.setAttribute("aria-label", `${highlight.label || "Highlight"} on page ${highlight.page}`);
        renderQuads.forEach((segment) => {
          const piece = document.createElement("span");
          piece.className = "pdf-guideline-studio__page-highlight-segment";
          piece.style.left = `${((segment.left - renderBounds.left) / renderBounds.width) * 100}%`;
          piece.style.top = `${((segment.top - renderBounds.top) / renderBounds.height) * 100}%`;
          piece.style.width = `${(segment.width / renderBounds.width) * 100}%`;
          piece.style.height = `${(segment.height / renderBounds.height) * 100}%`;
          box.appendChild(piece);
        });
        box.addEventListener("click", (event) => {
          event.stopPropagation();
          selectHighlight(highlight.id, false, { openEditor: false, scrollSidebarOnly: true, source: "pdf" });
        });
        box.addEventListener("keydown", (event) => {
          if (!state.editMode) return;
          if (event.key !== "Delete" && event.key !== "Backspace") return;
          event.preventDefault();
          event.stopPropagation();
          deleteHighlight(highlight.id, { skipConfirm: true });
        });
        pageView.overlay.appendChild(box);
      });
  });

  scheduleConnectorUpdate();
}

function resolveHighlightRenderQuads(pageView, highlight) {
  const baseQuads = coalesceHighlightQuads(getStoredHighlightQuads(highlight));
  const fallbackQuads = getQuoteMatchedHighlightQuads(pageView, highlight, baseQuads);
  if (!fallbackQuads.length) {
    return baseQuads;
  }
  if (!shouldUseQuoteMatchedQuads(baseQuads, fallbackQuads)) {
    return baseQuads;
  }
  return coalesceHighlightQuads(fallbackQuads);
}

function getStoredHighlightQuads(highlight) {
  const segments = Array.isArray(highlight?.quads) && highlight.quads.length
    ? highlight.quads
    : [{ left: highlight?.left, top: highlight?.top, width: highlight?.width, height: highlight?.height }];
  return segments
    .map((segment) => normalizeHighlightQuad(segment))
    .filter((segment) => segment.width > 0 && segment.height > 0);
}

function shouldUseQuoteMatchedQuads(baseQuads, fallbackQuads) {
  if (!baseQuads.length) {
    return true;
  }
  if (!fallbackQuads.length) {
    return false;
  }
  const baseBounds = getQuadBounds(baseQuads);
  const fallbackBounds = getQuadBounds(fallbackQuads);
  const baseArea = Math.max(0.01, baseBounds.width * baseBounds.height);
  const fallbackArea = Math.max(0.01, fallbackBounds.width * fallbackBounds.height);
  const areaRatio = fallbackArea / baseArea;
  const overlap = getBoundsOverlapRatio(baseBounds, fallbackBounds);
  return overlap < 0.3 || areaRatio > 2.4 || areaRatio < 0.4;
}

function getBoundsOverlapRatio(a, b) {
  if (!a || !b) return 0;
  const left = Math.max(a.left, b.left);
  const right = Math.min(a.left + a.width, b.left + b.width);
  const top = Math.max(a.top, b.top);
  const bottom = Math.min(a.top + a.height, b.top + b.height);
  if (right <= left || bottom <= top) return 0;
  const area = (right - left) * (bottom - top);
  const base = Math.max(0.01, a.width * a.height);
  return area / base;
}

function getQuoteMatchedHighlightQuads(pageView, highlight, baseQuads) {
  if (!pageView?.textLayer || !highlight?.quote || highlight.clipImage) {
    return [];
  }
  const needle = normalizeSearchText(highlight.quote, 1200, { caseSensitive: false });
  if (needle.length < 12) {
    return [];
  }
  const candidates = findTextMatchIndexes(pageView.searchTextLower, needle, 12);
  if (!candidates.length) {
    return [];
  }
  const textLayerRect = pageView.textLayer.getBoundingClientRect();
  if (!textLayerRect.width || !textLayerRect.height) {
    return [];
  }
  const baseBounds = baseQuads.length ? getQuadBounds(baseQuads) : null;
  const normalizedCandidates = candidates
    .map((index) => {
      const rects = getPdfSearchClientRects(pageView, index, needle.length);
      const quads = coalesceHighlightQuads(
        rects.map((rect) => rectToPercentQuad(rect, textLayerRect)).filter((quad) => quad.width > 0 && quad.height > 0)
      );
      if (!quads.length) return null;
      const bounds = getQuadBounds(quads);
      const score = scoreQuoteCandidate(bounds, baseBounds);
      return { quads, score };
    })
    .filter(Boolean)
    .sort((a, b) => b.score - a.score);
  return normalizedCandidates[0]?.quads || [];
}

function scoreQuoteCandidate(bounds, baseBounds) {
  if (!baseBounds) return 0;
  const overlap = getBoundsOverlapRatio(baseBounds, bounds);
  const baseCenterX = baseBounds.left + baseBounds.width / 2;
  const baseCenterY = baseBounds.top + baseBounds.height / 2;
  const candidateCenterX = bounds.left + bounds.width / 2;
  const candidateCenterY = bounds.top + bounds.height / 2;
  const centerDistance = Math.hypot(baseCenterX - candidateCenterX, baseCenterY - candidateCenterY) / 142;
  return overlap * 3 - centerDistance;
}

function findTextMatchIndexes(haystack, needle, limit) {
  if (!haystack || !needle) return [];
  const matches = [];
  let fromIndex = 0;
  while (matches.length < limit && fromIndex < haystack.length) {
    const index = haystack.indexOf(needle, fromIndex);
    if (index === -1) break;
    matches.push(index);
    fromIndex = index + 1;
  }
  return matches;
}

function coalesceHighlightQuads(quads) {
  if (!Array.isArray(quads) || !quads.length) return [];
  const normalized = quads
    .map((quad) => normalizeHighlightQuad(quad))
    .filter((quad) => quad.width > 0 && quad.height > 0)
    .sort((a, b) => {
      const topDiff = a.top - b.top;
      if (Math.abs(topDiff) > 0.65) return topDiff;
      return a.left - b.left;
    });
  if (!normalized.length) return [];

  const merged = [];
  normalized.forEach((quad) => {
    const current = {
      left: quad.left,
      top: quad.top,
      right: quad.left + quad.width,
      bottom: quad.top + quad.height,
    };
    const prev = merged[merged.length - 1];
    if (!prev) {
      merged.push(current);
      return;
    }

    const sameLine = Math.abs(prev.top - current.top) <= 0.65 && Math.abs(prev.bottom - current.bottom) <= 1.2;
    const gap = current.left - prev.right;
    const overlaps = current.left <= prev.right;
    // Bridge normal word spacing so highlight looks like continuous sentence bands.
    const canMerge = sameLine && (overlaps || gap <= 2.4);
    if (!canMerge) {
      merged.push(current);
      return;
    }

    prev.left = Math.min(prev.left, current.left);
    prev.top = Math.min(prev.top, current.top);
    prev.right = Math.max(prev.right, current.right);
    prev.bottom = Math.max(prev.bottom, current.bottom);
  });

  return merged.map((item) => ({
    left: roundGeometry(item.left),
    top: roundGeometry(item.top),
    width: roundGeometry(Math.max(0.1, item.right - item.left)),
    height: roundGeometry(Math.max(0.1, item.bottom - item.top)),
  }));
}

function bindDrawEvents(pageView) {
  if (!pageView.textLayer || pageView.textLayer.dataset.bound === "true") {
    return;
  }

  pageView.textLayer.dataset.bound = "true";

  const handleSelection = () => {
    if (!state.editMode || !state.drawMode) {
      return;
    }

    const selection = window.getSelection();
    if (!selection || selection.isCollapsed || selection.rangeCount < 1) {
      return;
    }

    const range = selection.getRangeAt(0);
    if (
      !pageView.textLayer.contains(range.commonAncestorContainer) ||
      !pageView.textLayer.contains(range.startContainer) ||
      !pageView.textLayer.contains(range.endContainer)
    ) {
      return;
    }

    const quote = normalizeSelectedQuote(selection.toString());
    const geometry = rangeToHighlightGeometry(range, pageView.textLayer);
    selection.removeAllRanges();

    if (!quote || !geometry || geometry.bounds.width < 0.2 || geometry.bounds.height < 0.2) {
      return;
    }

    addHighlight(pageView.pageNumber, geometry.bounds, {
      quote,
      quads: geometry.quads,
      label: createSelectionLabel(quote),
    });
  };

  pageView.textLayer.addEventListener("mouseup", () => {
    window.setTimeout(handleSelection, 0);
  });
  pageView.textLayer.addEventListener(
    "touchend",
    () => {
      window.setTimeout(handleSelection, 0);
    },
    { passive: true }
  );
}

function bindCaptureEvents(pageView) {
  if (!pageView.overlay || pageView.overlay.dataset.captureBound === "true") {
    return;
  }
  pageView.overlay.dataset.captureBound = "true";

  let startPoint = null;
  let draftBox = null;
  let activePointerId = null;

  const clearDraft = () => {
    startPoint = null;
    activePointerId = null;
    if (draftBox) {
      draftBox.remove();
      draftBox = null;
    }
  };

  pageView.overlay.addEventListener("pointerdown", (event) => {
    if (!state.editMode || !state.captureMode || state.drawMode) return;
    if (event.button !== 0) return;
    if (event.target.closest("[data-highlight-box]")) return;

    const rect = pageView.overlay.getBoundingClientRect();
    activePointerId = event.pointerId;
    pageView.overlay.setPointerCapture(event.pointerId);
    startPoint = {
      x: clamp(((event.clientX - rect.left) / rect.width) * 100, 0, 100),
      y: clamp(((event.clientY - rect.top) / rect.height) * 100, 0, 100),
    };
    draftBox = document.createElement("div");
    draftBox.className = "pdf-guideline-studio__draft-highlight";
    pageView.overlay.appendChild(draftBox);
  });

  pageView.overlay.addEventListener("pointermove", (event) => {
    if (!startPoint || !draftBox || activePointerId !== event.pointerId) return;
    const rect = pageView.overlay.getBoundingClientRect();
    const nextPoint = {
      x: clamp(((event.clientX - rect.left) / rect.width) * 100, 0, 100),
      y: clamp(((event.clientY - rect.top) / rect.height) * 100, 0, 100),
    };
    const box = normalizeBox(startPoint, nextPoint);
    draftBox.style.left = `${box.left}%`;
    draftBox.style.top = `${box.top}%`;
    draftBox.style.width = `${box.width}%`;
    draftBox.style.height = `${box.height}%`;
  });

  pageView.overlay.addEventListener("pointerup", async (event) => {
    if (!startPoint || !draftBox || activePointerId !== event.pointerId) return;
    const rect = pageView.overlay.getBoundingClientRect();
    const endPoint = {
      x: clamp(((event.clientX - rect.left) / rect.width) * 100, 0, 100),
      y: clamp(((event.clientY - rect.top) / rect.height) * 100, 0, 100),
    };
    const box = normalizeBox(startPoint, endPoint);
    clearDraft();
    if (box.width < 0.6 || box.height < 0.6) {
      showMessage("截圖範圍太小，請重新框選。", "error");
      return;
    }

    const clipImage = await captureBoxImageDataUrl(pageView, box);
    if (!clipImage) {
      showMessage("目前無法擷取該區域，請稍後再試。", "error");
      return;
    }

    addHighlight(pageView.pageNumber, box, {
      label: `截圖區塊 P${pageView.pageNumber}`,
      quote: "",
      note: "",
      clipImage,
      quads: [box],
    });
    showMessage("已加入截圖 highlight，可在右側補上重點。");
  });

  pageView.overlay.addEventListener("pointercancel", clearDraft);
}

function addHighlight(pageNumber, box, prefill = {}) {
  const seedColor = getSelectedHighlight() ? getSelectedHighlight().color : HIGHLIGHT_COLORS[0].value;
  const highlight = normalizeHighlight(
    {
      id: createId("highlight"),
      page: pageNumber,
      left: box.left,
      top: box.top,
      width: box.width,
      height: box.height,
      quads: Array.isArray(prefill.quads) ? prefill.quads : undefined,
      color: seedColor,
      label: sanitizeText(prefill.label || "", 240),
      quote: sanitizeText(prefill.quote || "", 12000),
      note: sanitizeText(prefill.note || "", 40000),
      clipImage: sanitizeText(prefill.clipImage || "", 2000000),
    },
    state.doc.highlights.length
  );
  state.doc.highlights.push(highlight);
  state.selectedHighlightId = highlight.id;
  state.currentPage = pageNumber;
  state.editingHighlightId = "";
  state.isDirty = true;
  renderSidebar();
  renderPdfHighlights();
  updateTopbar();
  showMessage("已新增 highlight，原文摘句已自動帶入右側。");
  scheduleConnectorUpdate();
}

function normalizeBox(start, end) {
  return {
    left: roundGeometry(Math.min(start.x, end.x)),
    top: roundGeometry(Math.min(start.y, end.y)),
    width: roundGeometry(Math.abs(end.x - start.x)),
    height: roundGeometry(Math.abs(end.y - start.y)),
  };
}

async function captureBoxImageDataUrl(pageView, box) {
  if (!pageView?.page || !pageView?.canvas) return "";

  const sourceCanvas = pageView.canvas;
  const currentX1 = clamp(Math.round((box.left / 100) * sourceCanvas.width), 0, sourceCanvas.width - 1);
  const currentY1 = clamp(Math.round((box.top / 100) * sourceCanvas.height), 0, sourceCanvas.height - 1);
  const currentX2 = clamp(
    Math.round(((box.left + box.width) / 100) * sourceCanvas.width),
    currentX1 + 1,
    sourceCanvas.width
  );
  const currentY2 = clamp(
    Math.round(((box.top + box.height) / 100) * sourceCanvas.height),
    currentY1 + 1,
    sourceCanvas.height
  );

  const fallbackWidth = currentX2 - currentX1;
  const fallbackHeight = currentY2 - currentY1;
  if (fallbackWidth < 2 || fallbackHeight < 2) return "";

  try {
    const baseWidth = Number(pageView.baseViewportWidth) || pageView.page.getViewport({ scale: 1 }).width;
    const cssScale = Number(pageView.cssScale) || pageView.cssWidth / baseWidth || 1;
    const currentPixelRatio = sourceCanvas.width / Math.max(1, pageView.cssWidth || sourceCanvas.width);

    let renderPixelRatio = Math.max(currentPixelRatio, CAPTURE_RENDER_PIXEL_RATIO);
    const maxPixelRatioByEdge = CAPTURE_MAX_RENDER_EDGE / Math.max(1, baseWidth * cssScale);
    if (Number.isFinite(maxPixelRatioByEdge) && maxPixelRatioByEdge > 0) {
      renderPixelRatio = Math.min(renderPixelRatio, maxPixelRatioByEdge);
    }
    renderPixelRatio = clamp(renderPixelRatio, 1, 4);

    const renderViewport = pageView.page.getViewport({ scale: cssScale * renderPixelRatio });
    const renderCanvas = document.createElement("canvas");
    renderCanvas.width = Math.max(2, Math.ceil(renderViewport.width));
    renderCanvas.height = Math.max(2, Math.ceil(renderViewport.height));
    const renderContext = renderCanvas.getContext("2d", { alpha: false });
    if (!renderContext) return "";
    await pageView.page.render({ canvasContext: renderContext, viewport: renderViewport }).promise;

    const sx = clamp(Math.round((box.left / 100) * renderCanvas.width), 0, renderCanvas.width - 1);
    const sy = clamp(Math.round((box.top / 100) * renderCanvas.height), 0, renderCanvas.height - 1);
    const ex = clamp(
      Math.round(((box.left + box.width) / 100) * renderCanvas.width),
      sx + 1,
      renderCanvas.width
    );
    const ey = clamp(
      Math.round(((box.top + box.height) / 100) * renderCanvas.height),
      sy + 1,
      renderCanvas.height
    );
    const sw = ex - sx;
    const sh = ey - sy;
    if (sw < 2 || sh < 2) return "";

    const cropLongestEdge = Math.max(sw, sh);
    const outputScale = cropLongestEdge > CAPTURE_MAX_OUTPUT_EDGE ? CAPTURE_MAX_OUTPUT_EDGE / cropLongestEdge : 1;
    const outW = Math.max(2, Math.round(sw * outputScale));
    const outH = Math.max(2, Math.round(sh * outputScale));

    const output = document.createElement("canvas");
    output.width = outW;
    output.height = outH;
    const outputContext = output.getContext("2d");
    if (!outputContext) return "";
    outputContext.imageSmoothingEnabled = true;
    outputContext.imageSmoothingQuality = "high";
    outputContext.drawImage(renderCanvas, sx, sy, sw, sh, 0, 0, outW, outH);
    return output.toDataURL("image/png");
  } catch (error) {
    console.warn("High-resolution clip capture failed, falling back to current canvas crop.", error);

    const cropLongestEdge = Math.max(fallbackWidth, fallbackHeight);
    const outputScale =
      cropLongestEdge > CAPTURE_MAX_OUTPUT_EDGE ? CAPTURE_MAX_OUTPUT_EDGE / cropLongestEdge : 1;
    const outW = Math.max(2, Math.round(fallbackWidth * outputScale));
    const outH = Math.max(2, Math.round(fallbackHeight * outputScale));

    const output = document.createElement("canvas");
    output.width = outW;
    output.height = outH;
    const ctx = output.getContext("2d");
    if (!ctx) return "";
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";
    ctx.drawImage(
      sourceCanvas,
      currentX1,
      currentY1,
      fallbackWidth,
      fallbackHeight,
      0,
      0,
      outW,
      outH
    );
    return output.toDataURL("image/png");
  }
}

function normalizeSelectedQuote(value) {
  return sanitizeText(
    String(value || "")
      .replace(/\u00a0/g, " ")
      .replace(/[ \t]+\n/g, "\n")
      .replace(/\n[ \t]+/g, "\n")
      .replace(/[ \t]{2,}/g, " ")
      .replace(/\n{3,}/g, "\n\n")
      .trim(),
    12000
  );
}

function createSelectionLabel(quote) {
  const oneLine = sanitizeText(String(quote || "").replace(/\s+/g, " "), 240);
  if (!oneLine) return "";
  return oneLine.length > 66 ? `${oneLine.slice(0, 66)}...` : oneLine;
}

function rangeToHighlightGeometry(range, container) {
  if (!range || !container) return null;
  const containerRect = container.getBoundingClientRect();
  if (!containerRect.width || !containerRect.height) return null;

  let candidateRects = Array.from(range.getClientRects())
    .map((rect) => intersectRect(rect, containerRect))
    .filter(Boolean);
  candidateRects = mergeSelectionRects(candidateRects);

  if (!candidateRects.length) {
    const fallback = intersectRect(range.getBoundingClientRect(), containerRect);
    if (fallback) {
      candidateRects.push(fallback);
    }
  }

  if (!candidateRects.length) return null;

  const quads = candidateRects
    .map((rect) => rectToPercentQuad(rect, containerRect))
    .filter((quad) => quad.width > 0 && quad.height > 0);
  if (!quads.length) return null;
  const bounds = getQuadBounds(quads);
  return { quads, bounds };
}

function intersectRect(rect, bounds) {
  if (!rect || !bounds) return null;
  const left = Math.max(rect.left, bounds.left);
  const right = Math.min(rect.right, bounds.right);
  const top = Math.max(rect.top, bounds.top);
  const bottom = Math.min(rect.bottom, bounds.bottom);
  if (right <= left || bottom <= top) return null;
  return { left, top, right, bottom };
}

function mergeSelectionRects(rects) {
  if (!Array.isArray(rects) || !rects.length) return [];
  const sorted = [...rects]
    .filter((rect) => rect.right > rect.left && rect.bottom > rect.top)
    .sort((a, b) => {
      const topDiff = a.top - b.top;
      if (Math.abs(topDiff) > 0.7) return topDiff;
      return a.left - b.left;
    });

  const merged = [];
  sorted.forEach((rect) => {
    const previous = merged[merged.length - 1];
    if (!previous) {
      merged.push({ ...rect });
      return;
    }

    const sameLine = Math.abs(previous.top - rect.top) <= 0.7 && Math.abs(previous.bottom - rect.bottom) <= 1.2;
    const horizontalGap = rect.left - previous.right;
    const overlaps = rect.left <= previous.right && rect.right >= previous.left;
    const canMerge = sameLine && (overlaps || horizontalGap <= 0.45);

    if (!canMerge) {
      merged.push({ ...rect });
      return;
    }

    previous.left = Math.min(previous.left, rect.left);
    previous.top = Math.min(previous.top, rect.top);
    previous.right = Math.max(previous.right, rect.right);
    previous.bottom = Math.max(previous.bottom, rect.bottom);
  });

  return merged;
}

function rectToPercentQuad(rect, containerRect) {
  const left = clamp(((rect.left - containerRect.left) / containerRect.width) * 100, 0, 100);
  const top = clamp(((rect.top - containerRect.top) / containerRect.height) * 100, 0, 100);
  const width = clamp(((rect.right - rect.left) / containerRect.width) * 100, 0, 100 - left);
  const height = clamp(((rect.bottom - rect.top) / containerRect.height) * 100, 0, 100 - top);
  return {
    left: roundGeometry(left),
    top: roundGeometry(top),
    width: roundGeometry(width),
    height: roundGeometry(height),
  };
}

function getQuadBounds(quads) {
  const safe = Array.isArray(quads) ? quads.filter((quad) => quad && quad.width > 0 && quad.height > 0) : [];
  if (!safe.length) {
    return { left: 0, top: 0, width: 12, height: 5 };
  }
  const left = Math.min(...safe.map((item) => item.left));
  const top = Math.min(...safe.map((item) => item.top));
  const right = Math.max(...safe.map((item) => item.left + item.width));
  const bottom = Math.max(...safe.map((item) => item.top + item.height));
  return {
    left: roundGeometry(left),
    top: roundGeometry(top),
    width: roundGeometry(Math.max(0.1, right - left)),
    height: roundGeometry(Math.max(0.1, bottom - top)),
  };
}

function deleteHighlight(highlightId, options = {}) {
  if (!state.editMode || !highlightId) return;
  const target = state.doc.highlights.find((item) => item.id === highlightId);
  if (!target) return;
  const skipConfirm = Boolean(options.skipConfirm);
  if (!skipConfirm && !window.confirm("確定要刪除這段 highlight 嗎？")) {
    return;
  }
  state.doc.highlights = state.doc.highlights.filter((item) => item.id !== highlightId);
  if (state.editingHighlightId === highlightId) {
    state.editingHighlightId = "";
  }
  state.selectedHighlightId = state.doc.highlights[0] ? state.doc.highlights[0].id : "";
  if (!state.selectedHighlightId) {
    state.lastHighlightSelectionSource = "";
  }
  state.currentPage = state.doc.highlights[0] ? state.doc.highlights[0].page : 1;
  state.isDirty = true;
  renderSidebar();
  renderPdfHighlights();
  updateTopbar();
}

function updateSelectedHighlight(patch, rerenderSidebar) {
  const highlight = getSelectedHighlight();
  if (!highlight) return;
  Object.assign(highlight, patch);
  state.isDirty = true;
  renderPdfHighlights();
  if (rerenderSidebar) {
    renderSidebar();
  } else {
    updateTopbar();
  }
}

function getSelectedHighlight() {
  return state.doc.highlights.find((item) => item.id === state.selectedHighlightId) || null;
}

function scrollSidebarCardIntoView(highlightId, smooth) {
  const scroller = refs.sidebarScroll;
  const sidebarCard = document.getElementById(`sidebar-highlight-${highlightId}`);
  if (!scroller || !sidebarCard) {
    return false;
  }

  const maxScrollTop = Math.max(0, scroller.scrollHeight - scroller.clientHeight);
  const centeredTop = sidebarCard.offsetTop - Math.max(0, (scroller.clientHeight - sidebarCard.offsetHeight) / 2);
  const targetTop = Math.max(0, Math.min(centeredTop, maxScrollTop));
  const currentTop = scroller.scrollTop;

  if (Math.abs(targetTop - currentTop) < 2) {
    return true;
  }

  scroller.scrollTo({
    top: targetTop,
    behavior: smooth ? "smooth" : "auto",
  });
  return true;
}

function selectHighlight(highlightId, shouldScroll, options = {}) {
  if (!highlightId) {
    return;
  }
  const openEditor = Boolean(options.openEditor);
  const scrollSidebarOnly = Boolean(options.scrollSidebarOnly);
  const source = String(options.source || "").trim().toLowerCase();
  state.selectedHighlightId = highlightId;
  if (source === "pdf" || source === "sidebar") {
    state.lastHighlightSelectionSource = source;
  }
  if (state.editMode) {
    if (openEditor) {
      state.editingHighlightId = highlightId;
    }
  }
  const highlight = getSelectedHighlight();
  if (highlight) {
    state.currentPage = highlight.page;
  }
  renderSidebar();
  renderPdfHighlights();
  if (shouldScroll) {
    window.requestAnimationFrame(() => {
      scrollToHighlight(highlightId, true);
    });
  } else {
    if (scrollSidebarOnly) {
      window.requestAnimationFrame(() => {
        if (!scrollSidebarCardIntoView(highlightId, true)) return;
        window.setTimeout(() => {
          scrollSidebarCardIntoView(highlightId, false);
          scheduleConnectorUpdate();
        }, 180);
      });
    }
    scheduleConnectorUpdate();
  }
}

function scrollToHighlight(highlightId, smooth) {
  const highlight = state.doc.highlights.find((item) => item.id === highlightId);
  if (!highlight) return;

  if (!state.showHighlights) {
    state.showHighlights = true;
    renderPdfHighlights();
    updateTopbar();
  }

  state.currentPage = highlight.page;
  const highlightBox = document.getElementById(`pdf-highlight-${highlightId}`);
  const sidebarCard = document.getElementById(`sidebar-highlight-${highlightId}`);
  if (highlightBox) {
    scrollPdfPaneToHighlight(highlight, highlightBox, smooth);
  } else {
    goToPage(highlight.page, smooth);
  }
  if (sidebarCard) {
    scrollSidebarCardIntoView(highlightId, smooth);
  }
  updateTopbar();
  window.setTimeout(scheduleConnectorUpdate, smooth ? 260 : 80);
}

function scrollPdfPaneToHighlight(highlight, highlightBox, smooth) {
  if (!highlight || !highlightBox || !refs.pdfPane) {
    return;
  }

  const paneRect = refs.pdfPane.getBoundingClientRect();
  const segmentNodes = Array.from(
    highlightBox.querySelectorAll(".pdf-guideline-studio__page-highlight-segment")
  );
  const anchorNode =
    segmentNodes.length > 0
      ? segmentNodes.reduce((best, node) => {
          if (!best) return node;
          const bestRect = best.getBoundingClientRect();
          const nodeRect = node.getBoundingClientRect();
          if (nodeRect.top < bestRect.top - 1) return node;
          if (Math.abs(nodeRect.top - bestRect.top) <= 1 && nodeRect.left < bestRect.left) return node;
          return best;
        }, null)
      : highlightBox;

  const targetRect = (anchorNode || highlightBox).getBoundingClientRect();
  if (!targetRect.width || !targetRect.height || !paneRect.width || !paneRect.height) {
    return;
  }

  const verticalPadding = Math.max(24, Math.min(180, refs.pdfPane.clientHeight * 0.24));
  const targetTopRaw = refs.pdfPane.scrollTop + (targetRect.top - paneRect.top) - verticalPadding;
  const maxTop = Math.max(0, refs.pdfPane.scrollHeight - refs.pdfPane.clientHeight);
  const nextTop = clamp(targetTopRaw, 0, maxTop);

  let nextLeft = refs.pdfPane.scrollLeft;
  const targetLeft = refs.pdfPane.scrollLeft + (targetRect.left - paneRect.left);
  const targetRight = refs.pdfPane.scrollLeft + (targetRect.right - paneRect.left);
  const viewportLeft = refs.pdfPane.scrollLeft + 24;
  const viewportRight = refs.pdfPane.scrollLeft + refs.pdfPane.clientWidth - 24;
  const horizontalPadding = 24;
  const maxLeft = Math.max(0, refs.pdfPane.scrollWidth - refs.pdfPane.clientWidth);

  if (targetLeft < viewportLeft) {
    nextLeft = clamp(targetLeft - horizontalPadding, 0, maxLeft);
  } else if (targetRight > viewportRight) {
    nextLeft = clamp(targetRight - refs.pdfPane.clientWidth + horizontalPadding, 0, maxLeft);
  }

  refs.pdfPane.scrollTo({
    top: nextTop,
    left: nextLeft,
    behavior: smooth ? "smooth" : "auto",
  });
}

function focusSelectedHighlight() {
  const targetHighlightId = state.editingHighlightId || state.selectedHighlightId;
  if (targetHighlightId) {
    scrollToHighlight(targetHighlightId, true);
    return;
  }
  if (state.doc.highlights[0]) {
    selectHighlight(state.doc.highlights[0].id, true);
    return;
  }
  goToPage(state.currentPage, true);
}

function toggleCaptureMode() {
  if (!state.editMode) {
    showMessage("只有管理模式可以使用截圖框選。", "error");
    return;
  }
  if (!state.pdfDoc) {
    showMessage("PDF 尚未載入完成，暫時無法截圖。", "error");
    return;
  }

  state.captureMode = !state.captureMode;
  if (state.captureMode) {
    state.drawMode = false;
    state.editingHighlightId = "";
    renderSidebar();
  }
  renderPdfHighlights();
  updateTopbar();
  hideMessage();
}

function cycleSelectedHighlightColor() {
  if (!state.editMode) {
    showMessage("只有管理模式可以調整 highlight 顏色。");
    return;
  }

  const highlight = getSelectedHighlight();
  if (!highlight) {
    return;
  }

  const currentIndex = Math.max(
    0,
    HIGHLIGHT_COLORS.findIndex((item) => item.value.toLowerCase() === String(highlight.color || "").toLowerCase())
  );
  const nextColor = HIGHLIGHT_COLORS[(currentIndex + 1) % HIGHLIGHT_COLORS.length];
  updateSelectedHighlight({ color: nextColor.value }, true);
}

function adjustZoom(delta) {
  const nextZoom = clamp(roundNumber(state.zoom + delta), 0.8, 2.4);
  if (nextZoom === state.zoom) {
    return;
  }
  state.zoom = nextZoom;
  updateTopbar();
  requestPdfRerender({ preserveViewport: true });
}

function fitPdfToPane({ rerender = true, silent = false } = {}) {
  const nextZoom = 1;
  const changed = roundNumber(state.zoom) !== nextZoom;
  state.zoom = nextZoom;
  updateTopbar();
  if (rerender && state.pdfDoc) {
    requestPdfRerender({ preserveViewport: true });
  }
  if (!silent) {
    showMessage(changed ? "已調整為 Fit 視窗寬度。" : "目前已是 Fit 視窗寬度。");
  }
}

function capturePdfViewportState() {
  if (!refs.pdfPane) {
    return { page: state.currentPage, anchorRatio: 0, xRatio: 0, scrollRatio: 0 };
  }
  const pane = refs.pdfPane;
  const maxTop = Math.max(1, pane.scrollHeight - pane.clientHeight);
  const anchorOffset = pane.scrollTop + pane.clientHeight * 0.35;
  const fallback = {
    page: state.currentPage,
    anchorRatio: 0,
    xRatio: 0,
    scrollRatio: clamp(pane.scrollTop / maxTop, 0, 1),
  };
  if (!state.pageViews.length) {
    return fallback;
  }

  const threshold = anchorOffset;
  let currentView = state.pageViews[0];
  state.pageViews.forEach((item) => {
    if (item.pageCard.offsetTop <= threshold) {
      currentView = item;
    }
  });
  if (!currentView) {
    return fallback;
  }

  const pageTop = currentView.pageCard.offsetTop;
  const pageHeight = Math.max(1, currentView.pageCard.offsetHeight);
  const anchorRatio = clamp((anchorOffset - pageTop) / pageHeight, 0, 1);
  const maxLeft = Math.max(1, pane.scrollWidth - pane.clientWidth);
  const xRatio = clamp(pane.scrollLeft / maxLeft, 0, 1);

  return {
    page: currentView.pageNumber,
    anchorRatio,
    xRatio,
    scrollRatio: clamp(pane.scrollTop / maxTop, 0, 1),
  };
}

function restorePdfViewportState(viewport, smooth) {
  if (!viewport || !refs.pdfPane || !state.pageViews.length) {
    return;
  }
  const pane = refs.pdfPane;
  const targetView =
    state.pageViews.find((item) => item.pageNumber === viewport.page) ||
    state.pageViews[0];
  if (!targetView) {
    return;
  }

  const maxTop = Math.max(0, pane.scrollHeight - pane.clientHeight);
  const pageHeight = Math.max(1, targetView.pageCard.offsetHeight);
  const rawTop =
    targetView.pageCard.offsetTop +
    pageHeight * clamp(viewport.anchorRatio ?? viewport.yRatio ?? 0, 0, 1) -
    pane.clientHeight * 0.35;
  const fromPageTop = clamp(rawTop, 0, maxTop);
  const hasScrollRatio = Number.isFinite(viewport.scrollRatio);
  const fromScrollRatio = hasScrollRatio ? clamp(maxTop * clamp(viewport.scrollRatio, 0, 1), 0, maxTop) : fromPageTop;
  const top = Math.abs(fromPageTop - fromScrollRatio) <= 24 ? fromPageTop : fromScrollRatio;
  const maxLeft = Math.max(0, pane.scrollWidth - pane.clientWidth);
  const left = clamp(maxLeft * clamp(viewport.xRatio, 0, 1), 0, maxLeft);

  pane.scrollTo({
    top,
    left,
    behavior: smooth ? "smooth" : "auto",
  });

  state.currentPage = targetView.pageNumber;
  updateTopbar();
  window.setTimeout(scheduleConnectorUpdate, smooth ? 240 : 40);
}

function goToPage(rawPage, smooth) {
  const page = clamp(parseInt(rawPage || "1", 10) || 1, 1, Math.max(1, state.pageCount || 1));
  state.currentPage = page;
  updateTopbar();

  const targetView = state.pageViews.find((item) => item.pageNumber === page);
  if (!targetView) {
    return;
  }

  refs.pdfPane.scrollTo({
    top: Math.max(0, targetView.pageCard.offsetTop - 16),
    behavior: smooth ? "smooth" : "auto",
  });
  window.setTimeout(scheduleConnectorUpdate, smooth ? 240 : 40);
}

function syncCurrentPageFromScroll() {
  if (state.isRenderingPdf) {
    return;
  }
  if (!state.pageViews.length) {
    return;
  }

  const threshold = refs.pdfPane.scrollTop + 56;
  let nextPage = 1;
  state.pageViews.forEach((pageView) => {
    if (pageView.pageCard.offsetTop <= threshold) {
      nextPage = pageView.pageNumber;
    }
  });

  if (nextPage !== state.currentPage) {
    state.currentPage = nextPage;
    updateTopbar();
  }
}

function getSearchParts(kind) {
  const isPdf = kind === "pdf";
  return {
    search: isPdf ? state.pdfSearch : state.highlightSearch,
    button: isPdf ? refs.pdfSearchButton : refs.highlightSearchButton,
    panel: isPdf ? refs.pdfSearchPanel : refs.highlightSearchPanel,
    input: isPdf ? refs.pdfSearchInput : refs.highlightSearchInput,
    caseButton: isPdf ? refs.pdfSearchCaseButton : refs.highlightSearchCaseButton,
    count: isPdf ? refs.pdfSearchCount : refs.highlightSearchCount,
    prevButton: isPdf ? refs.pdfSearchPrevButton : refs.highlightSearchPrevButton,
    nextButton: isPdf ? refs.pdfSearchNextButton : refs.highlightSearchNextButton,
  };
}

function bindSearchEvents(kind) {
  const parts = getSearchParts(kind);
  if (!parts.input) return;

  parts.input.addEventListener("input", () => {
    handleSearchInput(kind);
  });
  parts.input.addEventListener("keydown", (event) => {
    if (event.key === "ArrowDown" || (event.key === "Enter" && !event.shiftKey)) {
      event.preventDefault();
      moveSearchResult(kind, 1);
      return;
    }
    if (event.key === "ArrowUp" || (event.key === "Enter" && event.shiftKey)) {
      event.preventDefault();
      moveSearchResult(kind, -1);
      return;
    }
    if (event.key === "Escape") {
      event.preventDefault();
      closeSearchPanel(kind);
    }
  });
  parts.caseButton.addEventListener("click", () => {
    toggleSearchCase(kind);
  });
  parts.prevButton.addEventListener("click", () => {
    moveSearchResult(kind, -1);
  });
  parts.nextButton.addEventListener("click", () => {
    moveSearchResult(kind, 1);
  });
}

function toggleHighlightFilterPanel() {
  if (!refs.highlightFilterButton || refs.highlightFilterButton.disabled) {
    return;
  }
  if (!state.highlightFilters.open) {
    closeSearchPanel("highlight");
  }
  state.highlightFilters.open = !state.highlightFilters.open;
  updateHighlightFilterUi();
}

function handleHighlightFilterPanelClick(event) {
  const button = event.target.closest("button");
  if (!button) return;

  if (button.matches('[data-action="clear-highlight-filters"]')) {
    clearHighlightFilters();
    return;
  }

  const color = button.getAttribute("data-filter-color");
  if (color) {
    toggleHighlightFilterColor(color);
    return;
  }

  const tag = button.getAttribute("data-filter-tag");
  if (tag) {
    toggleHighlightFilterTag(tag);
  }
}

function toggleHighlightFilterColor(color) {
  const value = String(color || "").toLowerCase();
  if (!value) return;
  const list = new Set(state.highlightFilters.colors);
  if (list.has(value)) {
    list.delete(value);
  } else {
    list.add(value);
  }
  state.highlightFilters.colors = Array.from(list);
  refreshHighlightFilterResults();
}

function toggleHighlightFilterTag(tag) {
  const value = sanitizeText(tag || "", 48).toLowerCase();
  if (!value) return;
  const list = new Set(state.highlightFilters.tags);
  if (list.has(value)) {
    list.delete(value);
  } else {
    list.add(value);
  }
  state.highlightFilters.tags = Array.from(list);
  refreshHighlightFilterResults();
}

function clearHighlightFilters() {
  state.highlightFilters.colors = [];
  state.highlightFilters.tags = [];
  refreshHighlightFilterResults();
}

function refreshHighlightFilterResults() {
  refreshHighlightSearch({ focus: false, preserveActive: false, smooth: false });
  renderSidebar();
}

function toggleSearchPanel(kind) {
  const parts = getSearchParts(kind);
  if (!parts.button || parts.button.disabled) {
    return;
  }

  if (parts.search.open) {
    closeSearchPanel(kind);
    return;
  }

  parts.search.open = true;
  if (kind === "highlight") {
    state.highlightFilters.open = false;
    updateHighlightFilterUi();
  }
  updateSearchUi();
  window.requestAnimationFrame(() => {
    parts.input?.focus();
    parts.input?.select();
  });
}

function closeSearchPanel(kind) {
  const parts = getSearchParts(kind);
  parts.search.open = false;
  updateSearchUi();
  scheduleConnectorUpdate();
}

function handleSearchInput(kind) {
  const parts = getSearchParts(kind);
  parts.search.term = sanitizeText(parts.input?.value || "", 240);
  if (kind === "pdf") {
    refreshPdfSearch({ focus: Boolean(parts.search.term), preserveActive: false, smooth: false });
  } else {
    refreshHighlightSearch({ focus: Boolean(parts.search.term), preserveActive: false, smooth: false });
  }
}

function toggleSearchCase(kind) {
  const parts = getSearchParts(kind);
  parts.search.caseSensitive = !parts.search.caseSensitive;
  if (kind === "pdf") {
    refreshPdfSearch({ focus: Boolean(parts.search.term), preserveActive: true, smooth: false });
  } else {
    refreshHighlightSearch({ focus: Boolean(parts.search.term), preserveActive: true, smooth: false });
  }
}

function moveSearchResult(kind, step) {
  const parts = getSearchParts(kind);
  const { search } = parts;
  if (!search.matches.length) {
    return;
  }

  const total = search.matches.length;
  search.activeIndex = search.activeIndex < 0 ? 0 : (search.activeIndex + step + total) % total;
  if (kind === "pdf") {
    focusPdfSearchMatch(search.matches[search.activeIndex], true);
  } else {
    focusHighlightSearchMatch(search.matches[search.activeIndex], true);
  }
  updateSearchUi();
}

function updateSearchUi() {
  updateSingleSearchUi("pdf");
  updateSingleSearchUi("highlight");
}

function updateHighlightFilterUi() {
  if (!refs.highlightFilterButton || !refs.highlightFilterPanel) return;

  const available = state.doc.highlights.length > 0;
  refs.highlightFilterButton.disabled = !available;
  if (!available) {
    state.highlightFilters.open = false;
  }
  refs.highlightFilterButton.classList.toggle("is-active", state.highlightFilters.open || areHighlightFiltersActive());
  refs.highlightFilterButton.setAttribute("aria-expanded", state.highlightFilters.open ? "true" : "false");
  refs.highlightFilterPanel.hidden = !state.highlightFilters.open;

  const colorWrap = refs.highlightFilterPanel.querySelector('[data-filter-group="color"]');
  const tagWrap = refs.highlightFilterPanel.querySelector('[data-filter-group="tag"]');
  if (!colorWrap || !tagWrap) return;

  const colors = collectAvailableHighlightColors();
  colorWrap.innerHTML = colors.length
    ? colors.map((color) => {
        const value = String(color.value || "").toLowerCase();
        const selected = state.highlightFilters.colors.includes(value);
        return `
          <button
            type="button"
            class="pdf-guideline-studio__filter-chip ${selected ? "is-selected" : ""}"
            data-filter-color="${escapeHtml(value)}"
          >
            <span class="pdf-guideline-studio__filter-chip-dot" style="background:${escapeHtml(color.swatch || color.value)}"></span>
            ${escapeHtml(color.name)}
          </button>
        `;
      }).join("")
    : `<span class="pdf-guideline-studio__filter-empty">尚未有可篩選顏色</span>`;

  const tags = collectAvailableHighlightTags();
  tagWrap.innerHTML = tags.length
    ? tags.map((tag) => {
        const value = String(tag).toLowerCase();
        const selected = state.highlightFilters.tags.includes(value);
        return `
          <button
            type="button"
            class="pdf-guideline-studio__filter-chip ${selected ? "is-selected" : ""}"
            data-filter-tag="${escapeHtml(value)}"
          >
            #${escapeHtml(tag)}
          </button>
        `;
      }).join("")
    : `<span class="pdf-guideline-studio__filter-empty">尚未設定 tag</span>`;
}

function updateSingleSearchUi(kind) {
  const parts = getSearchParts(kind);
  if (!parts.button) return;

  const available = kind === "pdf" ? state.pageViews.length > 0 : getFilteredHighlights().length > 0;
  if (!available) {
    parts.search.open = false;
  }

  parts.panel.hidden = !parts.search.open;
  parts.button.classList.toggle("is-active", parts.search.open);
  parts.button.setAttribute("aria-expanded", parts.search.open ? "true" : "false");
  if (parts.input && parts.input.value !== parts.search.term) {
    parts.input.value = parts.search.term;
  }
  parts.caseButton.disabled = !available;
  parts.caseButton.classList.toggle("is-active", parts.search.caseSensitive);
  parts.caseButton.setAttribute("aria-pressed", parts.search.caseSensitive ? "true" : "false");
  const total = parts.search.matches.length;
  const current = total ? Math.max(1, parts.search.activeIndex + 1) : 0;
  parts.count.textContent = `${current}/${total}`;
  parts.prevButton.disabled = total <= 1;
  parts.nextButton.disabled = total <= 1;
}

function syncHighlightSearchMatches(preserveActive = true) {
  const search = state.highlightSearch;
  const activeKey =
    preserveActive && search.activeIndex >= 0 && search.matches[search.activeIndex]
      ? search.matches[search.activeIndex].key
      : "";
  const term = sanitizeText(search.term || "", 240);
  search.term = term;

  if (!term) {
    search.matches = [];
    search.activeIndex = -1;
    return [];
  }

  const matches = [];
  getFilteredHighlights().forEach((highlight) => {
    [
      { field: "label", value: highlight.label || "" },
      { field: "quote", value: highlight.quote || "" },
      { field: "note", value: highlight.note || "" },
      { field: "tags", value: normalizeHighlightTags(highlight.tags).map((tag) => `#${tag}`).join(" ") },
    ].forEach(({ field, value }) => {
      collectStringMatches(value, term, search.caseSensitive).forEach(({ start, end }) => {
        matches.push({
          key: `${highlight.id}:${field}:${start}:${end}`,
          resultIndex: matches.length,
          highlightId: highlight.id,
          field,
          start,
          end,
        });
      });
    });
  });

  search.matches = matches;
  if (!matches.length) {
    search.activeIndex = -1;
    return matches;
  }

  const fallbackIndex = search.activeIndex >= 0 ? Math.min(search.activeIndex, matches.length - 1) : 0;
  const preservedIndex = activeKey ? matches.findIndex((match) => match.key === activeKey) : -1;
  search.activeIndex = preservedIndex >= 0 ? preservedIndex : fallbackIndex;
  return matches;
}

function refreshHighlightSearch({ focus = true, preserveActive = true, smooth = false } = {}) {
  syncHighlightSearchMatches(preserveActive);
  renderSidebar();
  updateSearchUi();

  if (!state.highlightSearch.matches.length) {
    scheduleConnectorUpdate();
    return;
  }
  if (focus) {
    focusHighlightSearchMatch(state.highlightSearch.matches[state.highlightSearch.activeIndex], smooth);
  }
}

function focusHighlightSearchMatch(match, smooth) {
  if (!match?.highlightId) {
    return;
  }
  selectHighlight(match.highlightId, true, { openEditor: false, source: "search" });
  window.setTimeout(() => {
    scrollSidebarCardIntoView(match.highlightId, smooth);
    scheduleConnectorUpdate();
  }, smooth ? 180 : 40);
}

function syncPdfSearchMatches(preserveActive = true) {
  const search = state.pdfSearch;
  const activeKey =
    preserveActive && search.activeIndex >= 0 && search.matches[search.activeIndex]
      ? search.matches[search.activeIndex].key
      : "";
  const term = sanitizeText(search.term || "", 240);
  search.term = term;

  if (!term || !state.pageViews.length) {
    search.matches = [];
    search.activeIndex = -1;
    clearPdfSearchMarks();
    return [];
  }

  const needle = normalizeSearchText(term, 240, { caseSensitive: search.caseSensitive });
  if (!needle) {
    search.matches = [];
    search.activeIndex = -1;
    clearPdfSearchMarks();
    return [];
  }

  const matches = [];
  state.pageViews.forEach((pageView) => {
    const haystack = search.caseSensitive ? pageView.searchText : pageView.searchTextLower;
    let cursor = 0;
    while (cursor <= haystack.length) {
      const matchIndex = haystack.indexOf(needle, cursor);
      if (matchIndex === -1) {
        break;
      }
      matches.push({
        key: `${pageView.pageNumber}:${matchIndex}:${needle.length}`,
        resultIndex: matches.length,
        pageNumber: pageView.pageNumber,
        pageView,
        matchIndex,
        termLength: needle.length,
      });
      cursor = matchIndex + Math.max(needle.length, 1);
    }
  });

  search.matches = matches;
  if (!matches.length) {
    search.activeIndex = -1;
    clearPdfSearchMarks();
    return matches;
  }

  const fallbackIndex = search.activeIndex >= 0 ? Math.min(search.activeIndex, matches.length - 1) : 0;
  const preservedIndex = activeKey ? matches.findIndex((match) => match.key === activeKey) : -1;
  search.activeIndex = preservedIndex >= 0 ? preservedIndex : fallbackIndex;
  return matches;
}

function refreshPdfSearch({ focus = true, preserveActive = true, smooth = false } = {}) {
  syncPdfSearchMatches(preserveActive);
  applyPdfSearchMarks();
  updateSearchUi();

  if (!state.pdfSearch.matches.length) {
    scheduleConnectorUpdate();
    return;
  }
  if (focus) {
    focusPdfSearchMatch(state.pdfSearch.matches[state.pdfSearch.activeIndex], smooth);
  }
}

function focusPdfSearchMatch(match, smooth) {
  if (!match?.pageView) {
    return;
  }
  state.currentPage = match.pageNumber;
  applyPdfSearchMarks();
  const targetRect = getPdfSearchTargetRect(match.pageView, match.matchIndex, match.termLength);
  scrollPdfPaneToSearchMatch(match.pageView, targetRect, smooth);
  updateTopbar();
  window.setTimeout(scheduleConnectorUpdate, smooth ? 260 : 80);
}

function clearPdfSearchMarks() {
  state.pageViews.forEach((pageView) => {
    if (pageView.searchLayer) {
      pageView.searchLayer.innerHTML = "";
    }
  });
  document
    .querySelectorAll(".pdf-guideline-studio__page-text-layer span.is-search-match, .pdf-guideline-studio__page-text-layer span.is-search-match-active")
    .forEach((element) => {
      element.classList.remove("is-search-match");
      element.classList.remove("is-search-match-active");
    });
}

function applyPdfSearchMarks() {
  clearPdfSearchMarks();
  if (!state.pdfSearch.matches.length) {
    return;
  }

  const activeMatch = state.pdfSearch.matches[state.pdfSearch.activeIndex] || null;
  if (!activeMatch?.pageView) {
    return;
  }

  const activeRects = getPdfSearchClientRects(activeMatch.pageView, activeMatch.matchIndex, activeMatch.termLength);
  renderPdfSearchOverlay(activeMatch.pageView, activeRects);
  getPdfMatchNodes(activeMatch.pageView, activeMatch.matchIndex, activeMatch.termLength).forEach((node) => {
    node.classList.add("is-search-match-active");
  });
}

function getPdfMatchNodes(pageView, startIndex, termLength) {
  const matchEnd = startIndex + termLength;
  const matchingEntries = pageView.searchEntries.filter((entry) => entry.start < matchEnd && entry.end > startIndex);
  const fallbackEntry =
    matchingEntries[0] ||
    pageView.searchEntries.find((entry) => entry.start >= startIndex) ||
    pageView.searchEntries[0] ||
    null;

  return (matchingEntries.length ? matchingEntries : fallbackEntry ? [fallbackEntry] : [])
    .map((entry) => pageView.textDivs?.[entry.index])
    .filter(Boolean);
}

function getPdfSearchTargetRect(pageView, startIndex, termLength) {
  const rects = getPdfSearchClientRects(pageView, startIndex, termLength);
  if (!rects.length) {
    return null;
  }

  return rects.reduce((union, rect) => {
    if (!union) {
      return { ...rect };
    }
    union.left = Math.min(union.left, rect.left);
    union.top = Math.min(union.top, rect.top);
    union.right = Math.max(union.right, rect.right);
    union.bottom = Math.max(union.bottom, rect.bottom);
    return union;
  }, null);
}

function getPdfSearchClientRects(pageView, startIndex, termLength) {
  if (!pageView?.textLayer) {
    return [];
  }

  const textLayerRect = pageView.textLayer.getBoundingClientRect();
  if (!textLayerRect.width || !textLayerRect.height) {
    return [];
  }

  const matchEnd = startIndex + termLength;
  const matchingEntries = pageView.searchEntries.filter((entry) => entry.start < matchEnd && entry.end > startIndex);
  const fallbackEntry =
    matchingEntries[0] ||
    pageView.searchEntries.find((entry) => entry.start >= startIndex) ||
    pageView.searchEntries[0] ||
    null;
  const entries = matchingEntries.length ? matchingEntries : fallbackEntry ? [fallbackEntry] : [];

  const rects = [];
  entries.forEach((entry) => {
    const relativeStart = Math.max(0, startIndex - entry.start);
    const relativeEnd = Math.min(entry.text.length, matchEnd - entry.start);
    if (relativeEnd <= relativeStart) {
      return;
    }
    const range = createPdfSearchRange(pageView, entry, relativeStart, relativeEnd);
    if (range) {
      getRangeClientRectsInContainer(range, pageView.textLayer).forEach((rect) => rects.push(rect));
      return;
    }
    const fallbackNode = pageView.textDivs?.[entry.index];
    const fallbackRect = fallbackNode ? intersectRect(fallbackNode.getBoundingClientRect(), textLayerRect) : null;
    if (fallbackRect) {
      rects.push(fallbackRect);
    }
  });

  return rects;
}

function createPdfSearchRange(pageView, entry, normalizedStart, normalizedEnd) {
  const root = pageView?.textDivs?.[entry.index];
  if (!root) {
    return null;
  }

  const offsetMap = getSearchEntryOffsetMap(pageView, entry);
  if (!offsetMap.mapping.length) {
    return null;
  }

  const clampedStart = clamp(Math.floor(normalizedStart), 0, offsetMap.mapping.length - 1);
  const clampedEnd = clamp(Math.ceil(normalizedEnd), clampedStart + 1, offsetMap.mapping.length);
  if (clampedEnd <= clampedStart) {
    return null;
  }
  const rawStart = clampedStart >= offsetMap.mapping.length ? offsetMap.rawText.length : offsetMap.mapping[clampedStart].start;
  const rawEnd =
    clampedEnd <= 0
      ? rawStart
      : clampedEnd > offsetMap.mapping.length
        ? offsetMap.rawText.length
        : offsetMap.mapping[clampedEnd - 1].end;

  const startPoint = resolveTextNodeOffset(root, rawStart);
  const endPoint = resolveTextNodeOffset(root, Math.max(rawStart, rawEnd));
  if (!startPoint || !endPoint) {
    return null;
  }

  const range = document.createRange();
  range.setStart(startPoint.node, startPoint.offset);
  range.setEnd(endPoint.node, endPoint.offset);
  return range;
}

function getSearchEntryOffsetMap(pageView, entry) {
  if (entry._offsetMap) {
    return entry._offsetMap;
  }

  const root = pageView?.textDivs?.[entry.index];
  const rawText = String(root?.textContent || entry.rawText || entry.text || "");
  const mapping = [];
  let normalized = "";
  let cursor = 0;

  while (cursor < rawText.length && normalized.length < 4000) {
    const currentChar = rawText[cursor];
    if (/\s/u.test(currentChar)) {
      const whitespaceStart = cursor;
      while (cursor < rawText.length && /\s/u.test(rawText[cursor])) {
        cursor += 1;
      }
      if (!normalized.length || cursor >= rawText.length) {
        continue;
      }
      normalized += " ";
      mapping.push({ start: whitespaceStart, end: cursor });
      continue;
    }

    const rawStart = cursor;
    cursor += 1;
    const chunk = String(rawText.slice(rawStart, cursor) || "").normalize("NFKC") || rawText.slice(rawStart, cursor);
    Array.from(chunk).forEach((normalizedChar) => {
      if (normalized.length >= 4000) {
        return;
      }
      normalized += normalizedChar;
      mapping.push({ start: rawStart, end: cursor });
    });
  }

  entry._offsetMap = { rawText, normalized, mapping };
  return entry._offsetMap;
}

function resolveTextNodeOffset(root, targetOffset) {
  if (!root) {
    return null;
  }

  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  let currentNode = walker.nextNode();
  if (!currentNode) {
    return null;
  }

  let remaining = Math.max(0, targetOffset);
  let lastNode = currentNode;
  while (currentNode) {
    const length = currentNode.textContent?.length || 0;
    lastNode = currentNode;
    if (remaining <= length) {
      return { node: currentNode, offset: remaining };
    }
    remaining -= length;
    currentNode = walker.nextNode();
  }

  return { node: lastNode, offset: lastNode.textContent?.length || 0 };
}

function getRangeClientRectsInContainer(range, container) {
  if (!range || !container) {
    return [];
  }

  const containerRect = container.getBoundingClientRect();
  const rects = Array.from(range.getClientRects())
    .map((rect) => intersectRect(rect, containerRect))
    .filter(Boolean);

  if (rects.length) {
    return rects;
  }

  const fallback = intersectRect(range.getBoundingClientRect(), containerRect);
  return fallback ? [fallback] : [];
}

function renderPdfSearchOverlay(pageView, rects) {
  if (!pageView?.searchLayer) {
    return;
  }

  pageView.searchLayer.innerHTML = "";
  if (!rects.length) {
    return;
  }

  const containerRect = pageView.textLayer.getBoundingClientRect();
  rects
    .map((rect) => rectToPercentQuad(rect, containerRect))
    .filter((quad) => quad.width > 0 && quad.height > 0)
    .forEach((quad) => {
      const segment = document.createElement("span");
      segment.className = "pdf-guideline-studio__page-search-match is-active";
      segment.style.left = `${quad.left}%`;
      segment.style.top = `${quad.top}%`;
      segment.style.width = `${quad.width}%`;
      segment.style.height = `${quad.height}%`;
      pageView.searchLayer.appendChild(segment);
    });
}

function collectStringMatches(value, term, caseSensitive) {
  const content = String(value || "");
  const needle = String(term || "");
  if (!content || !needle) {
    return [];
  }

  const haystack = caseSensitive ? content : content.toLocaleLowerCase();
  const query = caseSensitive ? needle : needle.toLocaleLowerCase();
  const matches = [];
  let cursor = 0;

  while (cursor <= haystack.length) {
    const start = haystack.indexOf(query, cursor);
    if (start === -1) {
      break;
    }
    matches.push({ start, end: start + query.length });
    cursor = start + Math.max(query.length, 1);
  }

  return matches;
}

function scrollPdfPaneToSearchMatch(pageView, targetRect, smooth) {
  if (!pageView || !refs.pdfPane) {
    return;
  }
  if (!targetRect) {
    goToPage(pageView.pageNumber, smooth);
    return;
  }

  const paneRect = refs.pdfPane.getBoundingClientRect();
  const currentTop = refs.pdfPane.scrollTop;
  const currentLeft = refs.pdfPane.scrollLeft;
  const offsetTop = targetRect.top - paneRect.top + currentTop;
  const offsetLeft = targetRect.left - paneRect.left + currentLeft;

  refs.pdfPane.scrollTo({
    top: Math.max(0, offsetTop - refs.pdfPane.clientHeight * 0.28),
    left: Math.max(0, offsetLeft - refs.pdfPane.clientWidth * 0.16),
    behavior: smooth ? "smooth" : "auto",
  });
}

async function handleConfigureCloud() {
  const currentBase = String(state.apiBase || readStorage(STORAGE_KEYS.apiBase) || "").trim();
  const nextBase = window.prompt(
    "Cloud API Base URL（例：http://127.0.0.1:4310/write-studio-api），可留空改成本機草稿模式。",
    currentBase
  );
  if (nextBase === null) {
    return;
  }

  const trimmedBase = String(nextBase || "").trim().replace(/\/+$/, "");
  if (trimmedBase) {
    writeStorage(STORAGE_KEYS.apiBase, trimmedBase);
    state.apiBase = trimmedBase;
  } else {
    removeStorage(STORAGE_KEYS.apiBase);
    state.apiBase = "";
  }

  const nextToken = window.prompt("管理者 Token（等於後端 WRITE_STUDIO_TOKEN），可留空只保留唯讀模式。", state.token || "");
  if (nextToken === null) {
    return;
  }

  state.token = String(nextToken || "").trim();
  if (state.token) {
    writeStorage(STORAGE_KEYS.token, state.token);
  } else {
    removeStorage(STORAGE_KEYS.token);
  }

  if (!trimmedBase) {
    showMessage("已切回本機草稿模式。");
    updateTopbar();
    return;
  }

  const health = await checkApiHealth(trimmedBase);
  if (health.ok) {
    showMessage(
      health.authRequired
        ? "已更新 Cloud API 與管理者 Token。API 連線正常（需管理者 Token）。"
        : "已更新 Cloud API。API 連線正常。"
    );
  } else {
    showMessage(`已儲存 API 設定，但目前無法連線：${health.reason}`, "error", true);
  }
  updateTopbar();
}

async function handleCheckApiToken() {
  const apiBase = String(state.apiBase || readStorage(STORAGE_KEYS.apiBase) || "")
    .trim()
    .replace(/\/+$/, "");
  if (!apiBase) {
    showMessage("尚未設定 Cloud API Base URL，請先按「設定 API/Token」。", "error", true);
    return;
  }

  showMessage("正在檢查 API/Token...");
  const health = await checkApiHealth(apiBase);
  if (!health.ok) {
    showMessage(`API 無法連線：${health.reason}`, "error", true);
    return;
  }

  const token = String(state.token || readStorage(STORAGE_KEYS.token) || "").trim();
  if (!health.authRequired) {
    showMessage("API 連線正常，且目前不要求管理者 Token。");
    return;
  }

  if (!token) {
    showMessage("API 連線正常，但尚未設定管理者 Token。", "error", true);
    return;
  }

  const valid = await verifyAdminToken(apiBase, token);
  if (valid) {
    showMessage("API 連線正常，管理者 Token 驗證成功。");
    return;
  }

  showMessage("API 連線正常，但管理者 Token 無效或已過期。", "error", true);
}

async function handleToggleAdminMode() {
  if (state.editMode) {
    state.editMode = false;
    state.drawMode = false;
    state.captureMode = false;
    state.editingHighlightId = "";
    renderSidebar();
    renderPdfHighlights();
    updateTopbar();
    return;
  }

  if (!state.token) {
    const token = window.prompt("請輸入管理者 Token（後端 WRITE_STUDIO_TOKEN）才能進入編輯模式。", "");
    if (!token) {
      showMessage("未輸入 Token，維持唯讀模式。", "error");
      return;
    }
    state.token = String(token || "").trim();
    writeStorage(STORAGE_KEYS.token, state.token);
  }

  if (state.apiBase) {
    const valid = await verifyAdminToken(state.apiBase, state.token);
    if (!valid) {
      showMessage("管理者 Token 驗證失敗，無法進入編輯模式。", "error", true);
      return;
    }
  } else {
    showMessage("目前沒有連線到 Cloud API，管理模式會先以本機草稿方式編輯。");
  }

  state.editMode = true;
  state.captureMode = false;
  state.editingHighlightId = "";
  renderSidebar();
  renderPdfHighlights();
  updateTopbar();
  showMessage("已進入管理模式。");
}

function handleAdminLogout() {
  const hadToken = Boolean(state.token || readStorage(STORAGE_KEYS.token));
  const hadApiBase = Boolean(state.apiBase || readStorage(STORAGE_KEYS.apiBase));

  removeStorage(STORAGE_KEYS.token);
  removeStorage(STORAGE_KEYS.apiBase);

  state.token = "";
  state.apiBase = "";
  state.editMode = false;
  state.drawMode = false;
  state.captureMode = false;
  state.editingHighlightId = "";
  state.currentLoadSource = "local";

  if (state.doc && state.doc.id) {
    cacheLocalDoc(state.doc);
  }

  const nextUrl = new URL(window.location.href);
  nextUrl.searchParams.delete("mode");
  nextUrl.searchParams.delete("apiBase");
  window.history.replaceState({}, "", nextUrl.toString());

  renderSidebar();
  renderPdfHighlights();
  updateTopbar();

  if (hadToken || hadApiBase) {
    showMessage("已登出管理，並清除這台電腦的 API/Token。");
  } else {
    showMessage("目前已是登出狀態，這台電腦沒有儲存管理 API/Token。");
  }
}

async function verifyAdminToken(apiBase, token) {
  try {
    const response = await fetchWithTimeout(
      `${apiBase}/docs`,
      {
        method: "GET",
        headers: {
          "X-Write-Studio-Token": token,
        },
      },
      3200
    );
    return response.ok;
  } catch (error) {
    console.warn("Unable to verify admin token", error);
    return false;
  }
}

async function checkApiHealth(apiBase) {
  try {
    const response = await fetchWithTimeout(`${apiBase}/health`, { method: "GET" }, 2400);
    if (!response.ok) {
      return { ok: false, reason: `HTTP ${response.status}` };
    }
    let payload = null;
    try {
      payload = await response.json();
    } catch (_error) {
      payload = null;
    }
    return { ok: true, authRequired: Boolean(payload && payload.authRequired) };
  } catch (error) {
    return { ok: false, reason: formatError(error) };
  }
}

async function handleSaveDocument() {
  if (!state.editMode || !state.doc) return;

  const payload = serializeDoc(state.doc);
  state.isSaving = true;
  updateTopbar();

  try {
    if (state.apiBase && state.token) {
      const response = await fetchWithTimeout(
        `${state.apiBase}/pdf-guidelines/${encodeURIComponent(payload.id)}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "X-Write-Studio-Token": state.token,
          },
          body: JSON.stringify(payload),
        },
        7000
      );

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || `Save failed with status ${response.status}`);
      }

      const result = await response.json();
      state.doc = normalizeDoc(result.doc || payload);
      state.currentLoadSource = "api";
      cacheLocalDoc(state.doc);
      showMessage("已儲存到 Firebase API。");
    } else {
      cacheLocalDoc(payload);
      state.currentLoadSource = "local";
      showMessage("目前沒有 Cloud API，已先存到本機草稿。");
    }

    state.isDirty = false;
    renderSidebar();
    renderPdfHighlights();
  } catch (error) {
    console.error(error);
    showMessage(`儲存失敗：${formatError(error)}`, "error", true);
  } finally {
    state.isSaving = false;
    updateTopbar();
  }
}

function serializeDoc(doc) {
  return {
    id: doc.id,
    title: doc.title,
    pdfUrl: doc.pdfUrl,
    meta: doc.meta,
    tag: doc.tag,
    tone: doc.tone,
    description: doc.description,
    articlePath: doc.articlePath,
    highlights: doc.highlights.map((item) => ({
      id: item.id,
      page: item.page,
      left: roundGeometry(item.left),
      top: roundGeometry(item.top),
      width: roundGeometry(item.width),
      height: roundGeometry(item.height),
      quads: Array.isArray(item.quads)
        ? item.quads.map((quad) => ({
            left: roundGeometry(quad.left),
            top: roundGeometry(quad.top),
            width: roundGeometry(quad.width),
            height: roundGeometry(quad.height),
          }))
        : [],
      color: item.color,
      label: item.label,
      quote: item.quote,
      note: item.note,
      clipImage: item.clipImage || "",
      tags: normalizeHighlightTags(item.tags),
    })),
  };
}

function cacheLocalDoc(doc) {
  writeStorage(`${STORAGE_KEYS.localDocPrefix}${doc.id}`, JSON.stringify(serializeDoc(normalizeDoc(doc))));
}

function readLocalDoc(docId) {
  const raw = readStorage(`${STORAGE_KEYS.localDocPrefix}${docId}`);
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch (error) {
    return null;
  }
}

function scheduleConnectorUpdate() {
  window.requestAnimationFrame(updateConnector);
}

function updateConnector() {
  if (window.innerWidth <= 1120 || !state.showHighlights) {
    refs.connectorPath.setAttribute("d", "");
    refs.connectorDot.setAttribute("r", "0");
    return;
  }

  const highlightId = state.selectedHighlightId;
  if (!highlightId) {
    refs.connectorPath.setAttribute("d", "");
    refs.connectorDot.setAttribute("r", "0");
    return;
  }

  const sidebarCard = document.getElementById(`sidebar-highlight-${highlightId}`);
  const pdfBox = document.getElementById(`pdf-highlight-${highlightId}`);
  if (!sidebarCard || !pdfBox) {
    refs.connectorPath.setAttribute("d", "");
    refs.connectorDot.setAttribute("r", "0");
    return;
  }

  const shellRect = refs.shell.getBoundingClientRect();
  const sidebarRect = sidebarCard.getBoundingClientRect();
  const pdfRect = pdfBox.getBoundingClientRect();
  if (!pdfRect.width || !sidebarRect.width) {
    refs.connectorPath.setAttribute("d", "");
    refs.connectorDot.setAttribute("r", "0");
    return;
  }

  const x1 = sidebarRect.left - shellRect.left;
  const y1 = sidebarRect.top + sidebarRect.height / 2 - shellRect.top;
  const x2 = pdfRect.right - shellRect.left;
  const y2 = pdfRect.top + pdfRect.height / 2 - shellRect.top;
  const bend = Math.max(44, Math.abs(x1 - x2) * 0.22);

  refs.connectorSvg.setAttribute("viewBox", `0 0 ${shellRect.width} ${shellRect.height}`);
  refs.connectorPath.setAttribute(
    "d",
    `M ${x1} ${y1} C ${x1 - bend} ${y1}, ${x2 + bend} ${y2}, ${x2} ${y2}`
  );
  refs.connectorDot.setAttribute("cx", String(x1));
  refs.connectorDot.setAttribute("cy", String(y1));
  refs.connectorDot.setAttribute("r", "4");
}

function buildReaderUrl({ embed }) {
  const params = new URLSearchParams(state.query.toString());
  if (embed) {
    params.set("view", "embed");
  } else {
    params.delete("view");
  }

  if (state.doc?.id) {
    params.set("doc", state.doc.id);
  }
  if (state.doc?.pdfUrl) {
    params.set("pdf", state.doc.pdfUrl);
  }
  if (state.doc?.articlePath) {
    params.set("article", state.doc.articlePath);
  }
  if (state.selectedHighlightId) {
    params.set("highlight", state.selectedHighlightId);
  }
  return `/tools/pdf-guideline-studio/?${params.toString()}`;
}

async function ensurePdfJs() {
  if (window["pdfjs-dist/build/pdf"]) {
    const pdfjsLib = window["pdfjs-dist/build/pdf"];
    if (!pdfjsLib.GlobalWorkerOptions.workerSrc) {
      pdfjsLib.GlobalWorkerOptions.workerSrc = "/js/pdf-js/build/pdf.worker.js";
    }
    return pdfjsLib;
  }

  const script = document.querySelector("script[data-guideline-pdfjs]") || document.createElement("script");
  if (!script.parentNode) {
    script.src = "/js/pdf-js/build/pdf.js";
    script.async = true;
    script.dataset.guidelinePdfjs = "true";
    document.body.appendChild(script);
  }

  await new Promise((resolve, reject) => {
    if (window["pdfjs-dist/build/pdf"]) {
      resolve();
      return;
    }
    script.addEventListener("load", resolve, { once: true });
    script.addEventListener("error", () => reject(new Error("Unable to load PDF.js")), { once: true });
  });

  const pdfjsLib = window["pdfjs-dist/build/pdf"];
  if (!pdfjsLib) {
    throw new Error("PDF.js failed to initialize.");
  }
  pdfjsLib.GlobalWorkerOptions.workerSrc = "/js/pdf-js/build/pdf.worker.js";
  return pdfjsLib;
}

async function fetchJson(url, options = {}) {
  const response = await fetchWithTimeout(url, options, 5000);
  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }
  return response.json();
}

async function fetchWithTimeout(url, options, timeoutMs) {
  const controller = new AbortController();
  const timer = window.setTimeout(() => controller.abort(), timeoutMs);
  try {
    return await fetch(url, { ...options, signal: controller.signal });
  } finally {
    window.clearTimeout(timer);
  }
}

async function writeClipboardText(text) {
  const value = String(text || "");
  if (!value) return false;

  if (navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(value);
      return true;
    } catch (error) {
      console.warn("Clipboard API write failed, fallback to execCommand", error);
    }
  }

  try {
    const textarea = document.createElement("textarea");
    textarea.value = value;
    textarea.setAttribute("readonly", "readonly");
    textarea.style.position = "fixed";
    textarea.style.top = "-2000px";
    textarea.style.left = "-2000px";
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    textarea.setSelectionRange(0, textarea.value.length);
    const copied = document.execCommand("copy");
    textarea.remove();
    return copied;
  } catch (error) {
    console.warn("Clipboard fallback failed", error);
    return false;
  }
}

function showMessage(text, kind = "info", sticky = false) {
  window.clearTimeout(state.messageTimer);
  refs.message.hidden = false;
  refs.message.classList.toggle("is-error", kind === "error");
  refs.message.textContent = text;
  if (!sticky) {
    state.messageTimer = window.setTimeout(() => {
      refs.message.hidden = true;
      refs.message.textContent = "";
      refs.message.classList.remove("is-error");
    }, 3600);
  }
}

function hideMessage() {
  window.clearTimeout(state.messageTimer);
  refs.message.hidden = true;
  refs.message.textContent = "";
  refs.message.classList.remove("is-error");
}

function iconSvg(name) {
  const icons = {
    arrowLeft:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 18l-6-6 6-6" /></svg>',
    external:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 5h5v5" /><path d="M10 14L19 5" /><path d="M19 13v5a1 1 0 0 1-1 1h-12a1 1 0 0 1-1-1v-12a1 1 0 0 1 1-1h5" /></svg>',
    expand:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 3h6v6" /><path d="M9 21H3v-6" /><path d="M21 3l-7 7" /><path d="M3 21l7-7" /></svg>',
    shield:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3l7 3v6c0 4.5-2.9 7.7-7 9-4.1-1.3-7-4.5-7-9V6l7-3z" /><path d="M12 8v8" /><path d="M8.5 12H15.5" /></svg>',
    save:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 4h11l3 3v13H5z" /><path d="M8 4v6h8V4" /><path d="M9 18h6" /></svg>',
    pen:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 21l3.8-.8L18.4 8.6a1.8 1.8 0 0 0 0-2.5l-.5-.5a1.8 1.8 0 0 0-2.5 0L3.8 17.2z" /><path d="M13.5 7.5l3 3" /></svg>',
    crop:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 2v14a2 2 0 0 0 2 2h14" /><path d="M2 6h14a2 2 0 0 1 2 2v14" /></svg>',
    camera:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h4l1.3-2h5.4L16 7h4v12H4z" /><circle cx="12" cy="13" r="4" /></svg>',
    eye:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 12s3.6-6 10-6 10 6 10 6-3.6 6-10 6-10-6-10-6z" /><circle cx="12" cy="12" r="3" /></svg>',
    eyeOff:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 3l18 18" /><path d="M10.6 10.6a2 2 0 0 0 2.8 2.8" /><path d="M9.9 5.2A10.5 10.5 0 0 1 12 5c6.4 0 10 7 10 7a18.8 18.8 0 0 1-3.1 4.1" /><path d="M6.1 6.1C3.7 7.7 2 10 2 10s3.6 7 10 7c1 0 1.9-.1 2.7-.4" /></svg>',
    zoomOut:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="6" /><path d="M20 20l-4.2-4.2" /><path d="M8 11h6" /></svg>',
    zoomIn:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="6" /><path d="M20 20l-4.2-4.2" /><path d="M11 8v6" /><path d="M8 11h6" /></svg>',
    fitWidth:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6h6" /><path d="M3 18h6" /><path d="M15 6h6" /><path d="M15 18h6" /><path d="M7 12h10" /><path d="M9 10l-2 2 2 2" /><path d="M15 10l2 2-2 2" /></svg>',
    chevronLeft:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 18l-6-6 6-6" /></svg>',
    chevronRight:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6" /></svg>',
    comment:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5h16v11H8l-4 3z" /><path d="M8 9h8" /><path d="M8 13h5" /></svg>',
    search:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="6" /><path d="M20 20l-4.2-4.2" /></svg>',
    filter:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 6h16" /><path d="M7 12h10" /><path d="M10 18h4" /></svg>',
  };

  return icons[name] || "";
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function nl2br(value) {
  return String(value || "").replace(/\n/g, "<br />");
}

function clamp(value, min, max) {
  const number = Number(value);
  if (!Number.isFinite(number)) return min;
  return Math.max(min, Math.min(max, number));
}

function roundNumber(value) {
  return Math.round(Number(value || 0) * 100) / 100;
}

function roundGeometry(value) {
  const precision = 10 ** GEOMETRY_DECIMALS;
  return Math.round(Number(value || 0) * precision) / precision;
}

function sanitizeText(value, maxLength = 12000) {
  return String(value ?? "").trim().slice(0, maxLength);
}

function normalizeSearchText(value, maxLength = 12000, options = {}) {
  const normalized = String(value ?? "")
    .normalize("NFKC")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, maxLength);
  return options.caseSensitive ? normalized : normalized.toLowerCase();
}

function createId(prefix) {
  const seed =
    typeof crypto !== "undefined" && crypto.randomUUID
      ? crypto.randomUUID()
      : `${Date.now()}-${Math.random().toString(16).slice(2)}`;
  return `${prefix}-${seed}`.replace(/[^a-zA-Z0-9_-]/g, "");
}

function createHighlightHeading(highlight) {
  if (!highlight) return "Untitled highlight";
  const source = highlight.label || highlight.quote || highlight.note || `Page ${highlight.page}`;
  return source.length > 72 ? `${source.slice(0, 72)}...` : source;
}

function formatError(error) {
  if (!error) return "Unknown error";
  if (error.name === "AbortError") return "Request timed out";
  return String(error.message || error);
}

function uniqueValues(items) {
  return Array.from(new Set(items.filter((item) => item !== null && item !== undefined)));
}

function readStorage(key) {
  try {
    return window.localStorage.getItem(key);
  } catch (error) {
    return "";
  }
}

function writeStorage(key, value) {
  try {
    window.localStorage.setItem(key, value);
  } catch (error) {
    console.warn("Unable to write localStorage", error);
  }
}

function removeStorage(key) {
  try {
    window.localStorage.removeItem(key);
  } catch (error) {
    console.warn("Unable to remove localStorage key", error);
  }
}

function debounce(fn, wait) {
  let timer = 0;
  return (...args) => {
    window.clearTimeout(timer);
    timer = window.setTimeout(() => fn(...args), wait);
  };
}

function cssEscape(value) {
  if (window.CSS && typeof window.CSS.escape === "function") {
    return window.CSS.escape(String(value));
  }
  return String(value).replace(/[^a-zA-Z0-9_-]/g, "\\$&");
}
