// BioVeritas, 3D particle orb. Any <canvas data-orb> gets a rotating, softly
// deforming point-sphere in brand teal→green, with pointer parallax.
// Options: data-orb-scale (radius vs. min side, default .38), data-orb-x / -y (centre, 0–1).
(function () {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const C1 = [55, 195, 217], C2 = [63, 212, 154], C3 = [255, 255, 255];
  function orb(cv) {
    const ctx = cv.getContext('2d');
    const N = +(cv.dataset.orbCount || 1400), pts = [];
    const ga = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < N; i++) {
      const y = 1 - (i / (N - 1)) * 2, r = Math.sqrt(1 - y * y), t = ga * i;
      pts.push([Math.cos(t) * r, y, Math.sin(t) * r, Math.random()]);
    }
    let W = 0, H = 0, dpr = 1, mx = 0, my = 0, tx = 0, ty = 0, vis = true;
    const fit = () => { dpr = Math.min(2, devicePixelRatio || 1); const b = cv.getBoundingClientRect(); W = b.width; H = b.height; cv.width = W * dpr; cv.height = H * dpr; };
    new ResizeObserver(fit).observe(cv); fit();
    const host = cv.closest('section') || document;
    host.addEventListener('pointermove', e => { const b = cv.getBoundingClientRect(); tx = ((e.clientX - b.left) / b.width - .5); ty = ((e.clientY - b.top) / b.height - .5); });
    new IntersectionObserver(es => { vis = es[0].isIntersecting; }).observe(cv);
    const sc = +(cv.dataset.orbScale || .38), cxr = +(cv.dataset.orbX || .5), cyr = +(cv.dataset.orbY || .5);
    function frame(ms) {
      requestAnimationFrame(frame);
      if (!vis || !W) return;
      const t = reduce ? 0 : ms / 1000;
      mx += (tx - mx) * .05; my += (ty - my) * .05;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0); ctx.clearRect(0, 0, W, H);
      const R = Math.min(W, H) * sc, cx = W * cxr, cy = H * cyr;
      const ay = t * .18 + mx * .9, ax = -.35 + my * .6;
      const sy = Math.sin(ay), cyy = Math.cos(ay), sx = Math.sin(ax), cxx = Math.cos(ax);
      ctx.globalCompositeOperation = 'lighter';
      for (let i = 0; i < N; i++) {
        let [x, y, z, s] = pts[i];
        const d = 1 + .13 * Math.sin(x * 3.1 + t * .9) * Math.cos(y * 2.7 - t * .7) + .06 * Math.sin(z * 5 + t * 1.3);
        x *= d; y *= d; z *= d;
        let x1 = x * cyy - z * sy, z1 = x * sy + z * cyy;
        let y1 = y * cxx - z1 * sx, z2 = y * sx + z1 * cxx;
        const p = 2.6 / (2.6 + z2), px = cx + x1 * R * p, py = cy + y1 * R * p;
        const depth = (1 - z2) / 2;
        const k = (y1 + 1) / 2, c = s > .985 ? C3 : [0, 1, 2].map(j => C1[j] + (C2[j] - C1[j]) * k);
        ctx.fillStyle = `rgba(${c[0] | 0},${c[1] | 0},${c[2] | 0},${(.18 + depth * .75).toFixed(3)})`;
        const rr = (s > .985 ? 1.9 : .6 + depth * 1.3) * p;
        ctx.fillRect(px - rr / 2, py - rr / 2, rr, rr);
      }
      ctx.globalCompositeOperation = 'source-over';
    }
    requestAnimationFrame(frame);
  }
  document.querySelectorAll('canvas[data-orb]').forEach(orb);
})();
