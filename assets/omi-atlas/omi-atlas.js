/*
 * OMI圖鑑（/omi/）的互動
 *   四大組（2×2 一個畫面看完；每組一張卡，裡面一格一格是 finding）
 *   → 點一組：其他三組淡出，這張卡縮成左邊的色帶，卡裡的 finding 小框飛到右邊變成卡片，再用點線連起來
 *   → 點一個 finding：連線收回、其他卡片淡出，只留這個 finding 的內容
 * 狀態只存在網址 hash：沒有 hash＝四大組、#qrstu＝某一組、#hatw＝某個 finding。
 * 所以文章可以直接連 /omi/#hatw，瀏覽器上一頁會一層層退回。
 * 沒有 JS 時頁面是一份完整清單（CSS 只在 html.oa-js 底下切換狀態）。
 */
(() => {
  const root = document.getElementById('omi-atlas');
  if (!root) return;

  const stage = root.querySelector('.oa-stage');
  const wires = root.querySelector('.oa-wires');
  const crumbs = root.querySelector('.oa-crumbs');
  const groupsWrap = root.querySelector('.oa-groups');
  const groups = new Map(Array.from(root.querySelectorAll('.oa-group'), (el) => [el.dataset.group, el]));
  const branches = new Map(Array.from(root.querySelectorAll('.oa-branch'), (el) => [el.dataset.group, el]));
  const details = new Map(Array.from(root.querySelectorAll('.oa-detail'), (el) => [el.id, el]));

  const SVG_NS = 'http://www.w3.org/2000/svg';
  const EASE = 'cubic-bezier(.22, 1, .36, 1)';
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const narrow = window.matchMedia('(max-width: 759px)');
  const gridWide = window.matchMedia('(min-width: 700px)');
  const FIT_MIN = 0.78;
  const FIT_MAX = 1.2;
  const VFIT_MAX = 1.6;
  const baseTitle = document.title;

  let current = null;
  let running = false;
  let pending = false;
  let wireSeq = 0;

  const textOf = (el, selector) => {
    const found = el && el.querySelector(selector);
    return found ? found.textContent.trim() : '';
  };
  const groupName = (g) => textOf(groups.get(g), '.oa-group-name');
  const findingName = (f) => textOf(details.get(f), '.oa-d-name');
  const nodesOf = (g) => Array.from(branches.get(g).querySelectorAll('.oa-node'));
  const chipsOf = (g) => Array.from(groups.get(g).querySelectorAll('.oa-chip'));
  const otherGroups = (g) => Array.from(groups.values()).filter((el) => el.dataset.group !== g);
  const rectsById = (els) => new Map(els.map((el) => [el.dataset.id, el.getBoundingClientRect()]));
  const sameState = (a, b) => Boolean(a && b) && a.level === b.level && a.g === b.g && a.f === b.f;

  function readHash() {
    let id = '';
    try {
      id = decodeURIComponent(location.hash.slice(1)).trim().toLowerCase();
    } catch (err) {
      id = '';
    }
    if (groups.has(id)) return { level: 'group', g: id };
    const detail = details.get(id);
    if (detail) return { level: 'leaf', g: detail.dataset.group, f: id };
    return { level: 'root' };
  }

  // ── 首頁 2×2 塞進一個畫面 ────────────────────────────────────────────
  // 先試卡片裡兩欄，塞不下再試一格一行；字級倍率在 FIT_MIN～FIT_MAX 之間找最大、又不超出視窗也不截字的那一個，
  // 最後把剩下的視窗高度交給 CSS（--oa-grid-h），讓四張卡填滿畫面
  function rootOverflow() {
    const tooTall = groupsWrap.getBoundingClientRect().bottom + window.scrollY > window.innerHeight - 16;
    const clipped = (el) => el.scrollWidth > el.clientWidth + 1;
    // 小框名稱超出、或色帶上的組名被切掉，都算塞不下
    const tooWide =
      Array.from(groupsWrap.querySelectorAll('.oa-chips, .oa-chip')).some(clipped) ||
      Array.from(groupsWrap.querySelectorAll('.oa-group-band')).some(clipped);
    return { tooTall, tooWide };
  }

  function fitRoot() {
    root.style.removeProperty('--oa-grid-h');
    root.style.removeProperty('--oa-vfit');
    if (!gridWide.matches) {
      root.style.removeProperty('--oa-fit');
      root.classList.remove('oa-one-col');
      return;
    }
    const fits = (scale) => {
      root.style.setProperty('--oa-fit', scale.toFixed(3));
      const o = rootOverflow();
      return !o.tooTall && !o.tooWide;
    };
    // 在目前的版面設定下，依序試「卡片裡兩欄」「一格一行」，回傳字級倍率最大的解
    const search = () => {
      for (const oneCol of [false, true]) {
        root.classList.toggle('oa-one-col', oneCol);
        if (!fits(FIT_MIN)) continue;
        if (fits(FIT_MAX)) return { scale: FIT_MAX, oneCol };
        let lo = FIT_MIN;
        let hi = FIT_MAX;
        for (let i = 0; i < 7; i += 1) {
          const mid = (lo + hi) / 2;
          if (fits(mid)) lo = mid;
          else hi = mid;
        }
        return { scale: lo, oneCol };
      }
      return null;
    };
    // 底部波形有自己的空間比較好看，但它只是裝飾：字級倍率掉到 0.88 以下、
    // 而讓波形退到小框後面能讓字大一截（≥0.06）時，選字大的
    root.classList.remove('oa-trace-behind');
    const roomy = search();
    root.classList.add('oa-trace-behind');
    const behind = search();
    let pick = behind;
    if (roomy && (roomy.scale >= 0.88 || !behind || behind.scale - roomy.scale < 0.06)) pick = roomy;
    root.classList.toggle('oa-trace-behind', pick !== roomy);
    if (!pick) {
      // 視窗真的太矮：寧可維持兩欄、最小字級讓它捲動，也不要把名稱切斷
      root.classList.remove('oa-one-col');
      root.style.setProperty('--oa-fit', String(FIT_MIN));
      if (rootOverflow().tooWide) root.classList.add('oa-one-col');
      return;
    }
    root.classList.toggle('oa-one-col', pick.oneCol);
    const chosen = pick.scale;
    root.style.setProperty('--oa-fit', chosen.toFixed(3));

    // 字級定了之後，多出來的高度先分給小框的上下留白（最多 VFIT_MAX 倍），剩下的再交給卡片撐滿
    const shortEnough = (v) => {
      root.style.setProperty('--oa-vfit', v.toFixed(3));
      return !rootOverflow().tooTall;
    };
    let vlo = 1;
    if (shortEnough(VFIT_MAX)) {
      vlo = VFIT_MAX;
    } else {
      let vhi = VFIT_MAX;
      for (let i = 0; i < 6; i += 1) {
        const mid = (vlo + vhi) / 2;
        if (shortEnough(mid)) vlo = mid;
        else vhi = mid;
      }
    }
    root.style.setProperty('--oa-vfit', vlo.toFixed(3));

    const top = groupsWrap.getBoundingClientRect().top + window.scrollY;
    const room = Math.min(window.innerHeight - 16 - top, 960);
    if (room > groupsWrap.offsetHeight) root.style.setProperty('--oa-grid-h', `${Math.floor(room)}px`);
  }

  // ── 動畫小工具 ──────────────────────────────────────────────────────
  function play(el, keyframes, options) {
    if (!el || reduceMotion.matches || typeof el.animate !== 'function') return Promise.resolve();
    const animation = el.animate(keyframes, Object.assign({ duration: 320, easing: EASE }, options));
    return animation.finished.catch(() => {});
  }
  const fadeOut = (el, duration) =>
    play(el, [{ opacity: 1 }, { opacity: 0 }], { duration: duration || 200, easing: 'ease-in', fill: 'forwards' });
  // 淡出用 fill: forwards；元素被狀態藏起來之後再把動畫清掉，下次出現才不會卡在透明
  const settle = (els) => els.forEach((el) => el && el.getAnimations().forEach((a) => a.cancel()));

  // 元素從另一個元素原本的位置與大小，變形飛到自己現在的位置（一開始剛好疊在原本那一格上；CSS 已設 transform-origin: 0 50%）
  function flyFrom(el, from, options) {
    if (!from) return play(el, [{ opacity: 0 }, { opacity: 1 }], Object.assign({ duration: 300, fill: 'backwards' }, options));
    const to = el.getBoundingClientRect();
    const sx = from.width / to.width;
    const sy = from.height / to.height;
    const dx = from.left - to.left;
    const dy = from.top + from.height / 2 - (to.top + to.height / 2);
    const opts = Object.assign({ fill: 'backwards' }, options);
    // 框在變形時裡面的字會被拉扁或拉寬，所以字先藏著，框快到定位才浮出來
    const texts = Array.from(el.children, (child) => play(child, [{ opacity: 0 }, { opacity: 0, offset: 0.55 }, { opacity: 1 }], opts));
    return Promise.all([play(el, [{ transform: `translate(${dx}px, ${dy}px) scale(${sx}, ${sy})` }, { transform: 'none' }], opts), ...texts]);
  }

  // 卡片外框長大／縮小：放一個絕對定位的複製品去變形，真正的卡片先把外框藏起來，
  // 這樣寬高變化不會推擠其他元素，卡片裡正在飛的 finding 小框也不會被裁掉
  function morphCard(card, first, last, duration) {
    if (reduceMotion.matches) return { done: Promise.resolve(), cleanup() {} };
    const s = stage.getBoundingClientRect();
    const ghost = card.cloneNode(true);
    ghost.classList.add('oa-ghost');
    ghost.classList.remove('is-morphing');
    ghost.removeAttribute('href');
    ghost.removeAttribute('data-group');
    ghost.setAttribute('aria-hidden', 'true');
    ghost.setAttribute('tabindex', '-1');
    ghost.style.width = `${last.width}px`;
    ghost.style.height = `${last.height}px`;
    stage.append(ghost);
    card.classList.add('is-morphing');
    const done = play(
      ghost,
      [
        { transform: `translate(${first.left - s.left}px, ${first.top - s.top}px)`, width: `${first.width}px`, height: `${first.height}px` },
        { transform: `translate(${last.left - s.left}px, ${last.top - s.top}px)`, width: `${last.width}px`, height: `${last.height}px` },
      ],
      { duration, fill: 'both' },
    );
    return {
      done,
      cleanup() {
        card.classList.remove('is-morphing');
        ghost.remove();
      },
    };
  }

  // ── 狀態 → DOM ──────────────────────────────────────────────────────
  function applyState(state) {
    root.dataset.state = state.level;
    groups.forEach((el, g) => el.classList.toggle('is-active', state.level !== 'root' && g === state.g));
    branches.forEach((el, g) => el.classList.toggle('is-open', state.level === 'group' && g === state.g));
    details.forEach((el, f) => el.classList.toggle('is-open', state.level === 'leaf' && f === state.f));
    renderCrumbs(state);
    if (state.level === 'leaf') document.title = `${findingName(state.f)} | ${baseTitle}`;
    else if (state.level === 'group') document.title = `${groupName(state.g)} | ${baseTitle}`;
    else document.title = baseTitle;
    if (state.level === 'root') fitRoot();
  }

  function renderCrumbs(state) {
    const trail = [{ label: 'OMI圖鑑', href: location.pathname + location.search, isRoot: true }];
    if (state.level !== 'root') trail.push({ label: groupName(state.g), href: `#${state.g}` });
    if (state.level === 'leaf') trail.push({ label: findingName(state.f), href: `#${state.f}` });
    crumbs.textContent = '';
    trail.forEach((item, i) => {
      if (i > 0) {
        const sep = document.createElement('span');
        sep.className = 'oa-sep';
        sep.setAttribute('aria-hidden', 'true');
        sep.textContent = '›';
        crumbs.append(sep);
      }
      const isLast = i === trail.length - 1;
      const el = document.createElement(isLast ? 'span' : 'a');
      el.textContent = item.label;
      if (isLast) {
        el.setAttribute('aria-current', 'location');
      } else {
        el.href = item.href;
        if (item.isRoot) el.dataset.root = '';
      }
      crumbs.append(el);
    });
  }

  // ── 連線：點線本身不動，用 mask 從起點往終點「畫出來」──────────────
  function clearWires() {
    wires.textContent = '';
  }

  function toStage(el) {
    const s = stage.getBoundingClientRect();
    const r = el.getBoundingClientRect();
    return { x: r.left - s.left, y: r.top - s.top, w: r.width, h: r.height };
  }

  function addWire(d, delay) {
    const id = `oa-wire-${++wireSeq}`;
    const mask = document.createElementNS(SVG_NS, 'mask');
    // userSpaceOnUse＋大範圍：水平直線的外框高度是 0，用預設的 objectBoundingBox 會整條被遮掉
    mask.setAttribute('id', id);
    mask.setAttribute('maskUnits', 'userSpaceOnUse');
    mask.setAttribute('x', '-200');
    mask.setAttribute('y', '-200');
    mask.setAttribute('width', '20000');
    mask.setAttribute('height', '20000');
    const reveal = document.createElementNS(SVG_NS, 'path');
    reveal.setAttribute('class', 'oa-wire-reveal');
    reveal.setAttribute('d', d);
    reveal.setAttribute('pathLength', '1');
    mask.append(reveal);
    const line = document.createElementNS(SVG_NS, 'path');
    line.setAttribute('class', 'oa-wire');
    line.setAttribute('d', d);
    line.setAttribute('mask', `url(#${id})`);
    wires.append(mask, line);
    return { reveal, delay };
  }

  // 節點左緣一律對齊在同一條直線上（Bear：一前一後看起來不舒服），曲線從分岔點放射出去接到這條線
  function drawWires(g) {
    clearWires();
    // 連線的起點是色帶上的「−」圓鈕：寬螢幕在卡片右緣中間，窄螢幕在卡片左下
    const hub = toStage(groups.get(g).querySelector('.oa-group-toggle'));
    const nodes = nodesOf(g).map(toStage);
    if (!nodes.length) return [];

    if (narrow.matches) {
      // 窄螢幕：從圓鈕往下拉一條主幹，再往右接到每一張卡片
      const x = hub.x + hub.w / 2;
      const y0 = hub.y + hub.h;
      const r = 10;
      const ys = nodes.map((n) => n.y + n.h / 2);
      const lastY = ys[ys.length - 1];
      const span = Math.max(1, lastY - y0);
      const lastNode = nodes[nodes.length - 1];
      const lines = [addWire(`M${x},${y0} V${lastY - r} Q${x},${lastY} ${x + r},${lastY} H${lastNode.x - 5}`, 0)];
      nodes.slice(0, -1).forEach((n, i) => {
        lines.push(addWire(`M${x},${ys[i]} H${n.x - 5}`, Math.round((420 * (ys[i] - y0)) / span)));
      });
      return lines;
    }

    // 寬螢幕：從圓鈕右緣先共用一小段直線，在分岔點放一顆小圓點，再用曲線分到每一個節點
    // （好幾條點線從同一點直接分開會糊成一團，有個分岔點看起來才像刻意的樹枝）
    const x0 = hub.x + hub.w;
    const y0 = hub.y + hub.h / 2;
    const xs = x0 + 34;
    const lines = nodes.map((n, i) => {
      const x1 = n.x - 5;
      const y1 = n.y + n.h / 2;
      const k = (x1 - xs) * 0.5;
      return addWire(`M${x0},${y0} H${xs} C${xs + k},${y0} ${x1 - k},${y1} ${x1},${y1}`, i * 50);
    });
    const joint = document.createElementNS(SVG_NS, 'circle');
    joint.setAttribute('class', 'oa-wire-joint');
    joint.setAttribute('cx', String(xs));
    joint.setAttribute('cy', String(y0));
    joint.setAttribute('r', '4');
    wires.append(joint);
    play(joint, [{ opacity: 0 }, { opacity: 1 }], { duration: 200, delay: 260, fill: 'backwards' });
    return lines;
  }

  const revealWires = (lines, base) =>
    lines.map((line) =>
      play(line.reveal, [{ strokeDashoffset: '1' }, { strokeDashoffset: '0' }], {
        duration: 480,
        delay: base + line.delay,
        easing: 'cubic-bezier(.45, 0, .2, 1)',
        fill: 'backwards',
      }),
    );

  const retractWires = () =>
    Array.from(wires.querySelectorAll('.oa-wire-reveal'), (reveal) =>
      play(reveal, [{ strokeDashoffset: '0' }, { strokeDashoffset: '1' }], {
        duration: 200,
        easing: 'ease-in',
        fill: 'forwards',
      }),
    );

  function scrollIntoAtlas() {
    const header = document.querySelector('.brandstrip');
    const offset = (header ? header.getBoundingClientRect().height : 0) + 12;
    const top = root.getBoundingClientRect().top;
    if (top < offset - 1) {
      window.scrollTo({ top: Math.max(0, window.scrollY + top - offset), behavior: 'instant' });
    }
  }

  // ── 各種轉場 ────────────────────────────────────────────────────────
  async function rootToGroup(g) {
    const card = groups.get(g);
    const rest = otherGroups(g);
    const chipRects = rectsById(chipsOf(g));
    const first = card.getBoundingClientRect();
    await Promise.all(
      rest.map((el) =>
        play(el, [{ opacity: 1, transform: 'none' }, { opacity: 0, transform: 'scale(.985)' }], {
          duration: 180,
          easing: 'ease-in',
          fill: 'forwards',
        }),
      ),
    );
    applyState({ level: 'group', g });
    settle(rest);
    scrollIntoAtlas();

    const last = card.getBoundingClientRect();
    const lines = drawWires(g);
    const flights = nodesOf(g).map((node, i) => flyFrom(node, chipRects.get(node.dataset.id), { duration: 520, delay: 40 + i * 35 }));
    const morph = morphCard(card, first, last, 460);
    try {
      await Promise.all([morph.done, ...flights, ...revealWires(lines, 360)]);
    } finally {
      morph.cleanup();
    }
  }

  async function groupToRoot(g) {
    const card = groups.get(g);
    const nodeRects = rectsById(nodesOf(g));
    await Promise.all(retractWires());
    clearWires();
    const first = card.getBoundingClientRect();
    applyState({ level: 'root' });
    scrollIntoAtlas();

    const last = card.getBoundingClientRect();
    const flights = chipsOf(g).map((chip, i) => flyFrom(chip, nodeRects.get(chip.dataset.id), { duration: 480, delay: i * 25 }));
    const morph = morphCard(card, first, last, 460);
    const returns = otherGroups(g).map((el, i) =>
      play(el, [{ opacity: 0, transform: 'scale(.985)' }, { opacity: 1, transform: 'none' }], {
        duration: 320,
        delay: 220 + i * 50,
        fill: 'backwards',
      }),
    );
    try {
      await Promise.all([morph.done, ...flights, ...returns]);
    } finally {
      morph.cleanup();
    }
  }

  async function groupToLeaf(g, f) {
    const hub = groups.get(g);
    const nodes = nodesOf(g);
    const node = nodes.find((n) => n.dataset.id === f);
    const rest = nodes.filter((n) => n !== node);
    await Promise.all([...retractWires(), ...rest.map((n) => fadeOut(n)), fadeOut(hub)]);

    const nodeName = node.querySelector('.oa-node-name');
    const first = nodeName.getBoundingClientRect();
    const firstStyle = getComputedStyle(nodeName);
    const firstSize = parseFloat(firstStyle.fontSize);
    const firstColor = firstStyle.color;
    clearWires();
    applyState({ level: 'leaf', g, f });
    settle([hub, ...rest]);
    scrollIntoAtlas();

    const detail = details.get(f);
    const title = detail.querySelector('.oa-d-name');
    const last = title.getBoundingClientRect();
    const titleStyle = getComputedStyle(title);
    const scale = firstSize / parseFloat(titleStyle.fontSize);
    const followers = Array.from(detail.querySelectorAll('.oa-d-group, .oa-d-full, .oa-d-head .oa-new, .oa-d-body, .oa-d-sibs'));
    await Promise.all([
      play(
        title,
        [
          { transform: `translate(${first.left - last.left}px, ${first.top - last.top}px) scale(${scale})`, color: firstColor },
          { transform: 'none', color: titleStyle.color },
        ],
        { duration: 480 },
      ),
      play(detail.querySelector('.oa-d-head'), [{ backgroundColor: 'rgba(205, 237, 255, 0)' }, { backgroundColor: 'rgba(205, 237, 255, 1)' }], {
        duration: 380,
        delay: 120,
        fill: 'backwards',
      }),
      ...followers.map((el, i) =>
        play(el, [{ opacity: 0, transform: 'translateY(12px)' }, { opacity: 1, transform: 'none' }], {
          duration: 380,
          delay: 200 + i * 45,
          fill: 'backwards',
        }),
      ),
    ]);
  }

  async function leafToGroup(f, g) {
    const detail = details.get(f);
    await fadeOut(detail, 180);
    applyState({ level: 'group', g });
    settle([detail]);
    scrollIntoAtlas();

    const lines = drawWires(g);
    await Promise.all([
      play(groups.get(g), [{ opacity: 0 }, { opacity: 1 }], { duration: 260 }),
      ...nodesOf(g).map((node, i) =>
        play(node, [{ opacity: 0, transform: 'translateX(-14px)' }, { opacity: 1, transform: 'none' }], {
          duration: 340,
          delay: 120 + i * 40,
          fill: 'backwards',
        }),
      ),
      ...revealWires(lines, 80),
    ]);
  }

  async function crossfade(to) {
    await play(stage, [{ opacity: 1 }, { opacity: 0 }], { duration: 160, easing: 'ease-in', fill: 'forwards' });
    clearWires();
    applyState(to);
    scrollIntoAtlas();
    const lines = to.level === 'group' ? drawWires(to.g) : [];
    const fadeIn = play(stage, [{ opacity: 0 }, { opacity: 1 }], { duration: 240 });
    // 先接上淡入、再清掉已結束的淡出，中間才不會閃一格全亮
    stage.getAnimations().forEach((a) => {
      if (a.playState === 'finished') a.cancel();
    });
    await Promise.all([fadeIn, ...revealWires(lines, 40)]);
  }

  function snap(to, scroll) {
    if (typeof root.getAnimations === 'function') root.getAnimations({ subtree: true }).forEach((a) => a.cancel());
    root.querySelectorAll('.oa-ghost').forEach((el) => el.remove());
    root.querySelectorAll('.is-morphing').forEach((el) => el.classList.remove('is-morphing'));
    clearWires();
    applyState(to);
    if (scroll) scrollIntoAtlas();
    if (to.level === 'group') drawWires(to.g);
  }

  async function transition(from, to) {
    if (!from || reduceMotion.matches) {
      snap(to, Boolean(from));
      return;
    }
    try {
      if (from.level === 'root' && to.level === 'group') await rootToGroup(to.g);
      else if (from.level === 'group' && to.level === 'root') await groupToRoot(from.g);
      else if (from.level === 'group' && to.level === 'leaf' && from.g === to.g) await groupToLeaf(from.g, to.f);
      else if (from.level === 'leaf' && to.level === 'group' && from.g === to.g) await leafToGroup(from.f, to.g);
      else await crossfade(to);
    } catch (err) {
      console.error('[omi-atlas]', err);
      snap(to, true);
    }
  }

  // 點滑鼠也把焦點放到新畫面的起點，鍵盤使用者才不會迷路
  function settleFocus(to, from) {
    if (!from) return;
    let target = null;
    if (to.level === 'leaf') {
      target = details.get(to.f).querySelector('.oa-d-name');
    } else if (to.level === 'group') {
      target =
        from.level === 'leaf' && from.g === to.g
          ? branches.get(to.g).querySelector(`.oa-node[data-id="${CSS.escape(from.f)}"]`)
          : nodesOf(to.g)[0];
    } else if (from.g) {
      target = groups.get(from.g);
    }
    if (target) target.focus({ preventScroll: true });
  }

  async function route() {
    if (running) {
      pending = true;
      return;
    }
    running = true;
    try {
      do {
        pending = false;
        const to = readHash();
        const from = current;
        if (sameState(from, to)) continue;
        await transition(from, to);
        current = to;
        settleFocus(to, from);
      } while (pending);
    } finally {
      running = false;
    }
  }

  function goRoot() {
    history.pushState(null, '', location.pathname + location.search);
    route();
  }

  // ── 事件 ────────────────────────────────────────────────────────────
  root.addEventListener('click', (event) => {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const toRoot = event.target.closest('a[data-root]');
    const activeHub = event.target.closest('.oa-group.is-active');
    if (!toRoot && !(activeHub && current && current.level === 'group')) return;
    event.preventDefault();
    goRoot();
  });

  root.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape' || !current || current.level === 'root') return;
    event.preventDefault();
    if (current.level === 'leaf') location.hash = current.g;
    else goRoot();
  });

  // 視窗大小變了：首頁重新算 2×2 的字級，展開狀態重畫連線
  let resizeFrame = 0;
  function onResize() {
    cancelAnimationFrame(resizeFrame);
    resizeFrame = requestAnimationFrame(() => {
      if (running || !current) return;
      if (current.level === 'root') fitRoot();
      else if (current.level === 'group') drawWires(current.g);
    });
  }

  // ── 啟動 ────────────────────────────────────────────────────────────
  current = readHash();
  applyState(current);
  if (current.level === 'group') drawWires(current.g);
  root.classList.add('is-ready');

  window.addEventListener('hashchange', route);
  window.addEventListener('popstate', route);
  window.addEventListener('resize', onResize);
  if ('ResizeObserver' in window) {
    new ResizeObserver(() => {
      if (!running && current && current.level === 'group') onResize();
    }).observe(stage);
  }
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(onResize);
})();
