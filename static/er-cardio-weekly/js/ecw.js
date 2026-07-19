// 急診心臟學週報 — 互動 JS（合一檔）
// 涵蓋：theme toggle / progress bar / TOC scroll-spy / heading deep-link / collapse

(function () {
  'use strict';

  // ─── Theme toggle (.is-dark on body) ─────────────────────────────────
  var KEY = 'ecw-theme';
  var body = document.body;
  function applyTheme(t) {
    if (t === 'dark') body.classList.add('is-dark');
    else body.classList.remove('is-dark');
  }
  var stored = localStorage.getItem(KEY);
  var initial = stored || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  applyTheme(initial);
  document.documentElement.classList.remove('ecw-init-dark');

  var themeBtn = document.getElementById('ecw-theme-toggle');
  if (themeBtn) {
    themeBtn.addEventListener('click', function () {
      var next = body.classList.contains('is-dark') ? 'light' : 'dark';
      applyTheme(next);
      localStorage.setItem(KEY, next);
    });
  }

  // ─── Progress bar ─────────────────────────────────────────────────────
  var bar = document.getElementById('ecw-progress');
  if (bar) {
    function tick() {
      var max = document.documentElement.scrollHeight - window.innerHeight;
      var pct = max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0;
      bar.style.setProperty('--progress', pct.toFixed(1) + '%');
      bar.style.width = pct.toFixed(1) + '%';
    }
    window.addEventListener('scroll', tick, { passive: true });
    window.addEventListener('resize', tick);
    tick();
  }

  // ─── TOC scroll-spy ───────────────────────────────────────────────────
  var headings = document.querySelectorAll('.article-content h2[id]');
  var tocLinks = document.querySelectorAll('#ecw-toc-list li[data-target]');
  if (headings.length && tocLinks.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          var id = e.target.id;
          tocLinks.forEach(function (l) {
            l.classList.toggle('active', l.dataset.target === id);
          });
        }
      });
    }, { rootMargin: '-100px 0px -70% 0px' });
    headings.forEach(function (h) { io.observe(h); });

    tocLinks.forEach(function (l) {
      l.addEventListener('click', function () {
        var target = document.getElementById(l.dataset.target);
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }

  // ─── 滾到附錄時 TOC 自動淡出（避免 4 卡片寬度跟 TOC 區重疊）──────────
  var appendix = document.querySelector('.sources-appendix');
  var rightCol = document.querySelector('.layout-article .right');
  if (appendix && rightCol) {
    var apIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        rightCol.classList.toggle('is-hidden', e.isIntersecting);
      });
    }, {
      // 附錄進視窗上半就開始淡，提早給空間
      rootMargin: '0px 0px -40% 0px',
      threshold: 0,
    });
    apIO.observe(appendix);
  }

  // ─── 「**標題：**內文」段落升級成 kicker（round-5 修）───────────────────
  // 舊版只認「冒號在 <strong> 外」，但全刊實際都寫成 **為什麼要在意：**
  // （冒號在 strong 內），導致這套掃讀結構全站失效。兩種寫法都支援。
  document.querySelectorAll('.article-content p').forEach(function (p) {
    var first = p.firstChild;
    if (!first || first.tagName !== 'STRONG') return;
    var label = first.textContent;
    // 情況 A：冒號在 strong 內，例如 <strong>為什麼要在意：</strong>
    if (/[：:]\s*$/.test(label)) {
      // 標籤要短，避免把「整句粗體結尾剛好是冒號」誤判成 kicker
      if (label.replace(/[：:]\s*$/, '').length > 14) return;
      p.classList.add('para-with-title');
      first.textContent = label.replace(/[：:]\s*$/, '');
      return;
    }
    // 情況 B：冒號在 strong 外，例如 <strong>標籤</strong>：內文
    var next = first.nextSibling;
    if (!next || next.nodeType !== 3) return;        // text node
    var t = next.textContent;
    if (!/^[：:]\s*\S/.test(t)) return;
    p.classList.add('para-with-title');
    next.textContent = t.replace(/^[：:]\s*/, '');
  });

  // ─── Heading anchor deep-link (hover #) ────────────────────────────────
  document.querySelectorAll('.article-content h2[id], .article-content h3[id]').forEach(function (h) {
    var id = h.id;
    var a = document.createElement('a');
    a.className = 'heading-anchor';
    a.href = '#' + id;
    a.textContent = '#';
    a.title = '複製連結';
    a.style.cssText = 'opacity: 0; margin-left: 8px; color: var(--muted); font-size: 14px; text-decoration: none; transition: opacity 120ms;';
    h.appendChild(a);
    h.addEventListener('mouseenter', function () { a.style.opacity = '0.5'; });
    h.addEventListener('mouseleave', function () { a.style.opacity = '0'; });
    a.addEventListener('click', function (e) {
      e.preventDefault();
      var url = location.origin + location.pathname + '#' + id;
      if (navigator.clipboard) navigator.clipboard.writeText(url);
      history.replaceState(null, '', '#' + id);
    });
  });

  // ─── Section collapse (click H2 toggles section body) ──────────────────
  document.querySelectorAll('.article-content h2[id]').forEach(function (h) {
    var btn = document.createElement('button');
    btn.className = 'toggle';
    btn.textContent = '收合 −';
    btn.style.cssText = 'margin-left: auto; font-size: 12px; color: var(--muted); cursor: pointer; background: none; border: 0; padding: 4px 8px; font-family: inherit;';
    h.style.display = 'flex';
    h.style.alignItems = 'baseline';
    h.style.gap = '12px';
    h.appendChild(btn);

    var collapsed = false;
    btn.addEventListener('click', function () {
      collapsed = !collapsed;
      btn.textContent = collapsed ? '展開 +' : '收合 −';
      var sib = h.nextElementSibling;
      while (sib && sib.tagName !== 'H2') {
        sib.style.display = collapsed ? 'none' : '';
        sib = sib.nextElementSibling;
      }
    });
  });

  // ─── Tier-3「延伸與出處」(#more) 載入時預設收合 ───────────────────────
  var moreH2 = document.getElementById('more');
  if (moreH2) {
    var moreBtn = moreH2.querySelector('.toggle');
    if (moreBtn) moreBtn.click();
  }

  // ─── 列表搜尋接活（#ecw-search）─────────────────────────────────────
  var searchInput = document.getElementById('ecw-search');
  if (searchInput) {
    var rows = Array.prototype.slice.call(document.querySelectorAll('.layout-list .row'));
    var listContainer = rows.length ? rows[0].parentNode : null;
    var noResult = null;
    searchInput.addEventListener('input', function () {
      var q = searchInput.value.trim().toLowerCase();
      var visible = 0;
      rows.forEach(function (row) {
        var match = !q || row.textContent.toLowerCase().indexOf(q) !== -1;
        row.classList.toggle('is-hidden', !match);
        if (match) visible++;
      });
      if (!listContainer) return;
      if (visible === 0) {
        if (!noResult) {
          noResult = document.createElement('p');
          noResult.className = 'no-result';
          noResult.textContent = '找不到符合的週報';
          listContainer.appendChild(noResult);
        }
      } else if (noResult) {
        noResult.remove();
        noResult = null;
      }
    });
  }
})();
