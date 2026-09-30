// ─────────────────────────────────────────────────────────────────────────────
// BioVeritas — animated backgrounds (teal / navy palette).
//   • Home hero  (#hero-canvas)  → drifting DNA double-helix. A real clip can be
//     dropped at assets/hero-bg.mp4 and it fades in above the helix; a strong
//     dark overlay (CSS) keeps white text readable either way.
//   • About page (#about-canvas) → molecular-network animation, giving the
//     story section a dynamic, premium backdrop.
// ─────────────────────────────────────────────────────────────────────────────

(function () {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const NAVY_0 = '#071a21';
  const NAVY_1 = '#0b2733';
  const TEAL = '15, 158, 144';     // #0f9e90
  const MIST = '210, 240, 236';    // pale teal-white

  function setup(canvas) {
    const ctx = canvas.getContext('2d');
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0, h = 0;
    function resize() {
      const r = canvas.getBoundingClientRect();
      w = r.width; h = r.height;
      canvas.width = Math.max(1, Math.floor(w * dpr));
      canvas.height = Math.max(1, Math.floor(h * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    return { ctx, get w() { return w; }, get h() { return h; }, resize };
  }

  function backdrop(ctx, w, h) {
    const g = ctx.createLinearGradient(0, 0, w, h);
    g.addColorStop(0, NAVY_1);
    g.addColorStop(1, NAVY_0);
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, w, h);
    const rg = ctx.createRadialGradient(w * 0.82, h * 0.1, 0, w * 0.82, h * 0.1, Math.max(w, h) * 0.75);
    rg.addColorStop(0, `rgba(${TEAL}, 0.20)`);
    rg.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = rg;
    ctx.fillRect(0, 0, w, h);
  }

  // ── DNA double-helix (home hero) ──────────────────────────────
  function helix(canvas) {
    const s = setup(canvas);
    let raf = null, t0 = performance.now();

    function frame(now) {
      const { ctx, w, h } = s;
      const t = (now - t0);
      backdrop(ctx, w, h);

      const turns = Math.max(2.4, w / 360);
      const amp = Math.min(150, h * 0.17);
      const midY = h * 0.52;
      const drift = t * 0.0006;
      const TAU = Math.PI * 2;

      const yAt = (x, ph) => midY + Math.sin((x / w) * turns * TAU + drift + ph) * amp;
      const depthAt = (x, ph) => (Math.cos((x / w) * turns * TAU + drift + ph) + 1) / 2; // 0..1

      // rungs
      for (let x = 0; x <= w; x += 26) {
        const y1 = yAt(x, 0), y2 = yAt(x, Math.PI);
        const d = depthAt(x, 0);
        ctx.strokeStyle = `rgba(${TEAL}, ${0.05 + d * 0.22})`;
        ctx.lineWidth = 1;
        ctx.beginPath(); ctx.moveTo(x, y1); ctx.lineTo(x, y2); ctx.stroke();
      }
      // strands
      for (let strand = 0; strand < 2; strand++) {
        const ph = strand * Math.PI;
        ctx.beginPath();
        for (let x = 0; x <= w; x += 6) {
          const y = yAt(x, ph);
          x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.strokeStyle = `rgba(${TEAL}, ${strand ? 0.28 : 0.5})`;
        ctx.lineWidth = strand ? 1.6 : 2.2;
        ctx.stroke();
      }
      // base nodes
      for (let x = 0; x <= w; x += 26) {
        for (let strand = 0; strand < 2; strand++) {
          const ph = strand * Math.PI;
          const y = yAt(x, ph);
          const d = depthAt(x, ph);
          const r = 1.5 + d * 2.6;
          ctx.beginPath(); ctx.arc(x, y, r, 0, TAU);
          if (d > 0.6) {
            ctx.fillStyle = `rgba(${TEAL}, ${0.5 + d * 0.5})`;
            ctx.shadowColor = `rgba(${TEAL}, 0.8)`; ctx.shadowBlur = 8;
          } else {
            ctx.fillStyle = `rgba(${MIST}, ${0.25 + d * 0.4})`;
            ctx.shadowBlur = 0;
          }
          ctx.fill(); ctx.shadowBlur = 0;
        }
      }
      raf = requestAnimationFrame(frame);
    }

    function stop() { if (raf) { cancelAnimationFrame(raf); raf = null; } }
    function start() { if (!raf) { t0 = performance.now() - 3000; raf = requestAnimationFrame(frame); } }

    if (reduce) { const now = performance.now(); backdrop(s.ctx, s.w, s.h); frame(now); stop(); }
    else start();

    let rt; window.addEventListener('resize', () => { clearTimeout(rt); rt = setTimeout(() => s.resize(), 150); });
    observePause(canvas, start, stop, reduce);
  }

  // ── Molecular network (About page) ────────────────────────────
  function network(canvas) {
    const s = setup(canvas);
    let nodes = [], raf = null;
    function seed() {
      const density = Math.min(90, Math.max(28, Math.round((s.w * s.h) / 20000)));
      nodes = [];
      for (let i = 0; i < density; i++) {
        nodes.push({
          x: Math.random() * s.w, y: Math.random() * s.h,
          vx: (Math.random() - 0.5) * 0.26, vy: (Math.random() - 0.5) * 0.26,
          r: Math.random() * 1.6 + 0.6, big: Math.random() > 0.86,
        });
      }
    }
    seed();
    function draw() {
      const { ctx, w, h } = s;
      backdrop(ctx, w, h);
      const LINK = 150;
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d = Math.hypot(dx, dy);
          if (d < LINK) {
            ctx.strokeStyle = `rgba(${TEAL}, ${(1 - d / LINK) * 0.42})`;
            ctx.lineWidth = 0.7;
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          }
        }
      }
      for (const n of nodes) {
        ctx.beginPath(); ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        if (n.big) { ctx.fillStyle = `rgba(${TEAL}, 0.95)`; ctx.shadowColor = `rgba(${TEAL}, 0.9)`; ctx.shadowBlur = 10; }
        else { ctx.fillStyle = `rgba(${MIST}, 0.6)`; ctx.shadowBlur = 0; }
        ctx.fill(); ctx.shadowBlur = 0;
      }
    }
    function step() {
      for (const n of nodes) {
        n.x += n.vx; n.y += n.vy;
        if (n.x < -20) n.x = s.w + 20; else if (n.x > s.w + 20) n.x = -20;
        if (n.y < -20) n.y = s.h + 20; else if (n.y > s.h + 20) n.y = -20;
      }
      draw(); raf = requestAnimationFrame(step);
    }
    function stop() { if (raf) { cancelAnimationFrame(raf); raf = null; } }
    function start() { if (!raf) raf = requestAnimationFrame(step); }
    if (reduce) draw(); else start();
    let rt; window.addEventListener('resize', () => { clearTimeout(rt); rt = setTimeout(() => { s.resize(); seed(); }, 150); });
    observePause(canvas, start, stop, reduce);
  }

  function observePause(canvas, start, stop, reduce) {
    const host = canvas.closest('.hero, .about-bg-wrap') || canvas.parentElement;
    if (host && 'IntersectionObserver' in window && !reduce) {
      new IntersectionObserver((entries) => {
        entries.forEach((e) => { e.isIntersecting ? start() : stop(); });
      }, { threshold: 0.02 }).observe(host);
    }
  }

  const heroCanvas = document.getElementById('hero-canvas');
  const aboutCanvas = document.getElementById('about-canvas');
  if (heroCanvas) helix(heroCanvas);
  if (aboutCanvas) network(aboutCanvas);

  // ── Optional real video overlay on the home hero ──────────────
  const video = document.getElementById('hero-video');
  if (video) {
    const reveal = () => video.classList.add('is-ready');
    video.addEventListener('canplay', reveal, { once: true });
    video.addEventListener('error', () => video.remove());
    if (video.readyState >= 3) reveal();
  }
})();
