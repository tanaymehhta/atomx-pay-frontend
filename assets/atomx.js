/* ============================================================
   AtomX Pay — shared engine
   Live rate simulation, INR/USD formatting, count-ups, logo.
   No network: a believable client-side simulation around 95.3820.
   ============================================================ */
(function (global) {
  'use strict';

  var BASE = 95.3820;
  var rate = BASE;

  /* static mode: when embedded as a preview (?static=1), render final states
     instantly and disable time-based motion (nested iframes get throttled). */
  var STATIC = /[?&]static=1/.test(location.search);
  if (STATIC) {
    var injectStatic = function () {
      var st = document.createElement('style');
      st.textContent = '*,*::before,*::after{transition-duration:0s !important;animation-duration:0s !important;animation-delay:0s !important;}';
      (document.head || document.documentElement).appendChild(st);
    };
    if (document.head) injectStatic(); else document.addEventListener('DOMContentLoaded', injectStatic);
  }

  var inrFmt = new Intl.NumberFormat('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  var inrFmt0 = new Intl.NumberFormat('en-IN', { maximumFractionDigits: 0 });
  var usdFmt = new Intl.NumberFormat('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 });

  function fmtINR(n)  { return inrFmt.format(n); }
  function fmtINR0(n) { return inrFmt0.format(n); }
  function fmtUSD(n)  { return usdFmt.format(n); }
  function fmtRate(n) { return n.toFixed(4); }

  /* random-walk rate that nudges every few seconds and "refreshes" on a 30s cycle */
  var listeners = [];
  function onRate(fn) { listeners.push(fn); fn(rate, 0, 'init'); }

  function emit(prev, kind) {
    var dir = rate > prev ? 'up' : (rate < prev ? 'down' : 'flat');
    for (var i = 0; i < listeners.length; i++) listeners[i](rate, prev - rate ? (rate - prev) : 0, dir, kind);
  }

  function tick() {
    var prev = rate;
    // tiny jitter on the last decimals — feels alive
    rate += (Math.random() - 0.5) * 0.012;
    // gravity back toward BASE so it never drifts far
    rate += (BASE - rate) * 0.04;
    rate = Math.round(rate * 10000) / 10000;
    emit(prev, 'jitter');
  }

  var nextRefresh = 30;
  function refreshCycle() {
    var prev = rate;
    // a slightly larger, "official" move on each 30s refresh
    rate = BASE + (Math.random() - 0.45) * 0.10;
    rate = Math.round(rate * 10000) / 10000;
    nextRefresh = 30;
    emit(prev, 'refresh');
  }

  var countdownListeners = [];
  function onCountdown(fn) { countdownListeners.push(fn); fn(nextRefresh); }

  function startEngine() {
    if (global.__atomxEngine) return;
    global.__atomxEngine = true;
    setInterval(tick, 2600);
    setInterval(function () {
      nextRefresh -= 1;
      if (nextRefresh <= 0) refreshCycle();
      for (var i = 0; i < countdownListeners.length; i++) countdownListeners[i](nextRefresh);
    }, 1000);
  }

  /* easing */
  function easeOutExpo(t) { return t === 1 ? 1 : 1 - Math.pow(2, -10 * t); }
  function easeOutCubic(t) { return 1 - Math.pow(1 - t, 3); }

  /* count-up that respects reduced motion */
  function countUp(el, from, to, dur, fmt) {
    fmt = fmt || function (v) { return Math.round(v).toString(); };
    if (STATIC || (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches)) {
      el.textContent = fmt(to); return;
    }
    var start = null;
    function step(ts) {
      if (start === null) start = ts;
      var p = Math.min(1, (ts - start) / dur);
      var v = from + (to - from) * easeOutExpo(p);
      el.textContent = fmt(v);
      if (p < 1) requestAnimationFrame(step);
      else el.textContent = fmt(to);
    }
    requestAnimationFrame(step);
  }

  /* fire a callback once when an element scrolls into view.
     Uses scroll/rAF math (reliable across embedded iframes) + IO as enhancement. */
  function onReveal(els, fn) {
    var list = els.length !== undefined ? Array.prototype.slice.call(els) : [els];
    var done = new WeakSet();
    function hit(el) { if (done.has(el)) return; done.add(el); fn(el); }
    if (STATIC) { list.forEach(hit); return; }
    function check() {
      var vh = window.innerHeight || document.documentElement.clientHeight;
      for (var i = 0; i < list.length; i++) {
        var el = list[i];
        if (done.has(el)) continue;
        var r = el.getBoundingClientRect();
        if (r.top < vh * 0.92 && r.bottom > 0) hit(el);
      }
    }
    requestAnimationFrame(function () { requestAnimationFrame(check); });
    window.addEventListener('scroll', check, { passive: true });
    window.addEventListener('resize', check);
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) { if (en.isIntersecting) hit(en.target); });
      }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
      list.forEach(function (e) { io.observe(e); });
    }
    // safety: never leave content hidden
    setTimeout(function () { list.forEach(hit); }, 2500);
  }

  /* AtomX Pay wordmark — X is the chevron mark, in electric violet.
     opts: { color, accent, size } */
  function logo(opts) {
    opts = opts || {};
    var color = opts.color || 'currentColor';
    var accent = opts.accent || 'var(--accent-bright)';
    var fs = opts.size || 26;
    return '<span class="atomx-logo" style="display:inline-flex;align-items:baseline;gap:.30em;font-family:var(--font-display);font-weight:800;font-size:' + fs + 'px;letter-spacing:-0.02em;line-height:1;color:' + color + ';white-space:nowrap;">' +
      '<span style="display:inline-flex;align-items:baseline;">Atom' +
      '<span class="atomx-x" style="position:relative;display:inline-block;color:' + accent + ';margin:0 -0.02em;">' +
        '<svg viewBox="0 0 24 24" width="0.92em" height="0.92em" style="display:inline-block;vertical-align:-0.04em;" aria-hidden="true">' +
        '<path d="M3 3 L12 11 L21 3" fill="none" stroke="currentColor" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"/>' +
        '<path d="M3 21 L12 13 L21 21" fill="none" stroke="currentColor" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"/>' +
        '</svg></span></span>' +
      '<span style="font-weight:600;letter-spacing:-0.01em;">Pay</span>' +
    '</span>';
  }

  global.AtomX = {
    BASE: BASE, STATIC: STATIC,
    getRate: function () { return rate; },
    fmtINR: fmtINR, fmtINR0: fmtINR0, fmtUSD: fmtUSD, fmtRate: fmtRate,
    onRate: onRate, onCountdown: onCountdown, startEngine: startEngine,
    countUp: countUp, onReveal: onReveal,
    easeOutExpo: easeOutExpo, easeOutCubic: easeOutCubic,
    logo: logo
  };
})(window);
