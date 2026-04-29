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
})();
