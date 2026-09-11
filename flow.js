// ─────────────────────────────────────────────────────────────────────────────
// BioVeritas — shared page interactions
//   • [data-flow]      interactive horizontal stage flows (ADME, pipelines,
//                      regulatory journey, scientific approach, translational)
//   • [data-count]     animated stat counters (run once, on first view)
//   • form[data-thanks] client-side submit → thank-you page
//   • .toc             scroll-spy for in-page sidebars
// ─────────────────────────────────────────────────────────────────────────────
(function () {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ── Stage flows ────────────────────────────────────────────────
  document.querySelectorAll('[data-flow]').forEach((wrap) => {
    const stages = [...wrap.querySelectorAll('.fl-stage')];
    const detail = wrap.querySelector('.fl-detail');
    if (!stages.length || !detail) return;
    const nEl = detail.querySelector('.fd-n');
    const hEl = detail.querySelector('h4');
    const pEl = detail.querySelector('p');

    function select(i) {
      stages.forEach((s, j) => s.setAttribute('aria-selected', String(i === j)));
      const s = stages[i];
      if (nEl) nEl.textContent = s.dataset.n || String(i + 1).padStart(2, '0');
      if (hEl) hEl.textContent = s.dataset.title || '';
      if (pEl) pEl.textContent = s.dataset.desc || '';
    }
    stages.forEach((s, i) => {
      s.setAttribute('role', 'tab');
      s.addEventListener('click', () => select(i));
      s.addEventListener('mouseenter', () => { if (window.matchMedia('(min-width: 900px)').matches) select(i); });
      s.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
          e.preventDefault();
          const next = (i + (e.key === 'ArrowRight' ? 1 : -1) + stages.length) % stages.length;
          stages[next].focus(); select(next);
        }
      });
    });
    select(0);
  });

  // ── Stat counters ──────────────────────────────────────────────
  const counters = document.querySelectorAll('[data-count]');
  if (counters.length) {
    const run = (el) => {
      const to = parseFloat(el.dataset.count);
      const suffix = el.dataset.suffix || '';
      const dur = 1100;
      if (reduce) { el.textContent = to + suffix; return; }
      const t0 = performance.now();
      const tick = (now) => {
        const p = Math.min(1, (now - t0) / dur);
        const e = 1 - Math.pow(1 - p, 3);
        const v = to % 1 ? (to * e).toFixed(1) : Math.round(to * e);
        el.textContent = v + suffix;
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };
    const io = new IntersectionObserver((es) => {
      es.forEach((e) => { if (e.isIntersecting) { run(e.target); io.unobserve(e.target); } });
    }, { threshold: 0.4 });
    counters.forEach((c) => io.observe(c));
  }

  // ── Forms → thank-you page ─────────────────────────────────────
  document.querySelectorAll('form[data-thanks]').forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }
      const btn = form.querySelector('button[type="submit"]');
      if (btn) { btn.disabled = true; btn.textContent = 'Sending…'; }
      try { sessionStorage.setItem('bv-enquiry', form.dataset.thanks || 'enquiry'); } catch (err) {}
      window.location.href = 'thank-you.html?from=' + encodeURIComponent(form.dataset.thanks || 'enquiry');
    });
  });

  // ── Sidebar scroll-spy ─────────────────────────────────────────
  const links = document.querySelectorAll('.side-card .toc a');
  if (links.length) {
    const map = new Map();
    links.forEach((a) => { const t = document.getElementById(a.getAttribute('href').slice(1)); if (t) map.set(t, a); });
    const io = new IntersectionObserver((es) => {
      es.forEach((e) => {
        if (e.isIntersecting) {
          links.forEach((l) => l.classList.remove('active'));
          const a = map.get(e.target); if (a) a.classList.add('active');
        }
      });
    }, { rootMargin: '-30% 0px -55% 0px' });
    map.forEach((_, t) => io.observe(t));
  }
})();
