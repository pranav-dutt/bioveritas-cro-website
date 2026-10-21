// BioVeritas v3 · shared site chrome (floating header, mega menu, mobile drawer, footer) + reveal motion.
(function () {
  const SERVICES = [
    { label: 'Clinical Research', href: 'service-clinical.html', sub: 'Phase I–IV through qualified sites', items: [
      ['Study Design & Clinical Coordination', 'service-clinical.html#capabilities'],
      ['BA/BE Studies', 'service-clinical.html#standards'],
      ['Data Management & Biostatistics', 'service-data-analytics.html'] ] },
    { label: 'Bioanalytical & Biomarker Services', href: 'service-bioanalytical.html', sub: 'Exposure and biomarker evidence', items: [
      ['Bioanalytical Testing (LC–MS/MS)', 'service-bioanalytical.html#bioanalytical'],
      ['Biomarker Analysis', 'service-bioanalytical.html#biomarker'],
      ['Ligand-Binding Assays incl. ELISA', 'service-bioanalytical.html#lba'],
      ['Analytical & Testing Services', 'service-analytical.html'] ] },
    { label: 'Preclinical Research', href: 'preclinical.html', sub: 'Pharmacology, safety, DMPK', items: [
      ['In-Vitro & Cell-Based Assays', 'service-in-vitro.html'],
      ['In-Vivo Pharmacology & Efficacy', 'service-in-vivo.html'],
      ['Toxicology & Safety', 'service-detail.html'],
      ['Pharmacokinetics & ADME', 'service-pk-adme.html'] ] },
    { label: 'Product Development (NPD)', href: 'product-development.html', sub: 'Concept to commercialisation', items: [
      ['Discovery & Screening', 'service-discovery.html'],
      ['Product Development & NPD', 'service-npd.html'],
      ['Clinical Evidence Generation', 'service-clinical.html'],
      ['Manufacturing Coordination & Tech Transfer', 'service-manufacturing.html'] ] },
    { label: 'Regulatory & Quality', href: 'service-regulatory.html', sub: 'Strategy, submissions, compliance', items: [
      ['Regulatory Strategy & Submissions', 'service-regulatory.html'],
      ['Medical Device Evaluation', 'service-medical-devices.html'],
      ['Quality & Compliance Framework', 'quality.html'] ] },
    { label: 'Scientific & Translational Support', href: 'service-translational.html', sub: 'Design, interpretation, reporting', items: [
      ['Translational Research', 'service-translational.html#overview'],
      ['Scientific & IP Documentation Support', 'service-translational.html#ip-support'],
      ['Publication Support', 'service-translational.html#publication-support'],
      ['Therapeutic Areas', 'therapeutic-areas.html'] ] },
  ];
  const MENUS = {
    how: { label: 'How We Work', href: 'how-we-work.html', items: [
      ['Our Delivery Model', 'how-we-work.html#delivery', 'From requirement to report'],
      ['Scientific Partner Network', 'how-we-work.html#network', 'Qualified labs, sites, facilities'],
      ['Our Office & Partner Facilities', 'facilities.html', 'What is ours, what is partner-enabled'],
      ['Engagement Models', 'how-we-work.html#engagement', 'Full pathway or single service'] ] },
    industries: { label: 'Industries', href: 'industries.html', items: [
      ['Nutraceuticals & Supplements', 'industries.html#ind-nutraceuticals'],
      ['AYUSH & Natural Products', 'industries.html#ind-natural'],
      ['Pharmaceuticals & Biotech', 'industries.html#ind-pharma'],
      ['Cosmetics & Personal Care', 'industries.html#ind-cosmetics'],
      ['Functional Foods & Beverages', 'industries.html#ind-foods'],
      ['Healthcare & Wellness', 'industries.html#ind-wellness'],
      ['Medical Devices', 'industries.html#ind-devices'],
      ['Academia & Research Organisations', 'industries.html#ind-academia'] ] },
    insights: { label: 'Insights', href: 'blog.html', items: [
      ['Scientific Articles', 'blog.html'],
      ['Publication Support', 'blog.html#publications'],
      ['Case Studies', 'projects.html'] ] },
    about: { label: 'About', href: 'about.html', items: [
      ['About BioVeritas', 'about.html', 'Vision, mission, philosophy'],
      ['Leadership', 'about.html#leadership', 'The scientists behind the work'],
      ['Quality Approach', 'quality.html', 'Frameworks and oversight'],
      ['Partner With Us', 'partner.html', 'Commercial & academic models'],
      ['Careers', 'careers.html', 'Open roles in Noida'] ] },
  };
  const active = document.body.dataset.page || '';
  const LOGO = 'assets/bioveritas-logo.png';
  const esc = s => s.replace(/&/g, '&amp;');
  const arrow = '<svg class="arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>';
  const mnAr = '<svg class="mn-ar" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M9 6l6 6-6 6"/></svg>';
  const slim = (key, id) => { const m = MENUS[key]; return `<div class="nav-item has-mega"><a href="${m.href}" class="nav-trigger ${active === id ? 'active' : ''}" aria-haspopup="true">${m.label}<span class="caret"></span></a><div class="mega slim"><div class="mega-card"><div class="mega-col slim-col">${m.items.map(i => `<a href="${i[1]}"><b>${esc(i[0])}</b>${i[2] ? `<span>${esc(i[2])}</span>` : ''}</a>`).join('')}</div></div></div></div>`; };

  const header = `<header class="site-header"><div class="header-inner">
<a class="brand" href="index.html" aria-label="BioVeritas Life Sciences home"><img src="${LOGO}" alt="BioVeritas Life Sciences" width="160" height="54"></a>
<nav class="nav" aria-label="Primary">
<a href="index.html" class="${active === 'home' ? 'active' : ''}">Home</a>
<div class="nav-item has-mega"><a href="services.html" class="nav-trigger ${active === 'services' ? 'active' : ''}" aria-haspopup="true">Services<span class="caret"></span></a>
<div class="mega wide"><div class="mega-card"><div class="mega-shell"><div class="mega-cols groups">
${SERVICES.map(g => `<div class="mega-col"><a class="mega-gh" href="${g.href}"><b>${esc(g.label)}</b><span>${esc(g.sub)}</span></a>${g.items.map(i => `<a class="mega-sub" href="${i[1]}">${esc(i[0])}</a>`).join('')}</div>`).join('')}
</div><div class="mega-aside"><b>Not sure where to start?</b><p>Share your product, stage and regulatory goal. A senior scientist will map the right studies with you.</p><a class="mega-all" href="services.html">See how all services connect →</a><a class="btn btn-light" href="contact.html">Discuss your project${arrow}</a></div></div></div></div></div>
${slim('how', 'how')}${slim('industries', 'industries')}${slim('insights', 'blog')}${slim('about', 'about')}
<a href="contact.html" class="${active === 'contact' ? 'active' : ''}">Contact</a>
</nav>
<div class="cta-row"><a class="btn btn-primary" href="contact.html">Discuss your project${arrow}</a></div>
<button class="nav-toggle" id="nav-toggle" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-nav"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 8h16M4 16h16"/></svg></button>
</div></header>
<div class="mobile-scrim" id="mobile-scrim"></div>
<aside class="mobile-nav" id="mobile-nav" aria-label="Mobile">
<div class="mn-head"><img src="${LOGO}" alt="BioVeritas" width="136" height="46"><button class="mn-close" id="mn-close" aria-label="Close menu"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg></button></div>
<nav class="mn-links" aria-label="Mobile primary">
<a href="index.html">Home${mnAr}</a>
<details class="mn-group"><summary>Services<span class="caret"></span></summary><div class="mn-sub"><a class="mn-all" href="services.html">All services</a>${SERVICES.map(g => `<a href="${g.href}">${esc(g.label)}</a>`).join('')}</div></details>
${['how', 'industries', 'insights', 'about'].map(k => `<details class="mn-group"><summary>${MENUS[k].label}<span class="caret"></span></summary><div class="mn-sub">${MENUS[k].items.map(i => `<a href="${i[1]}">${esc(i[0])}</a>`).join('')}</div></details>`).join('')}
<a href="contact.html">Contact${mnAr}</a>
</nav>
<div class="mn-cta"><a class="btn btn-primary" href="contact.html">Discuss your project${arrow}</a><a class="btn btn-ghost" href="tel:+919910663681">Call +91 99106 63681</a></div>
<div class="mn-meta">BioVeritas Life Sciences Pvt Ltd<br>B-14, Sector-132, Noida, India<br><a href="mailto:bioveritascro@gmail.com">bioveritascro@gmail.com</a></div>
</aside>`;

  const footer = `<footer class="site-footer" data-screen-label="Footer"><div class="wrap">
<div class="foot-grid">
<div class="foot-brand"><img src="assets/bioveritas-logo-dark.png" alt="BioVeritas Life Sciences" width="180" height="62"><p>An integrated life sciences and scientific development partner, combining internal scientific expertise with qualified laboratories, clinical sites and manufacturing partners, as applicable.</p><div class="foot-company"><span class="cname">BioVeritas Life Sciences Private Limited</span><br>Ground Floor, B-14, Sector-132<br>Noida, Uttar Pradesh, India<br>Estd. 2025 · GST &amp; MSME registered</div></div>
<div class="foot-col"><h5>Services</h5><ul>${SERVICES.map(g => `<li><a href="${g.href}">${esc(g.label)}</a></li>`).join('')}<li><a href="services.html">All services</a></li></ul></div>
<div class="foot-col"><h5>Company</h5><ul><li><a href="how-we-work.html">How we work</a></li><li><a href="how-we-work.html#network">Scientific partner network</a></li><li><a href="industries.html">Industries</a></li><li><a href="about.html">About</a></li><li><a href="about.html#leadership">Leadership</a></li><li><a href="quality.html">Quality approach</a></li><li><a href="blog.html">Insights</a></li><li><a href="careers.html">Careers</a></li></ul></div>
<div class="foot-col"><h5>Discuss your project</h5><ul><li><a href="contact.html">Contact &amp; enquiries</a></li><li><a href="request-proposal.html">Request a proposal</a></li><li><a href="mailto:bioveritascro@gmail.com">bioveritascro@gmail.com</a></li><li><a href="tel:+919910663681">+91 99106 63681</a></li><li><a href="https://wa.me/919910663681" target="_blank" rel="noopener">WhatsApp us</a></li><li class="foot-hours">Office hours<br>Mon – Fri · 9:30 am – 6:00 pm IST</li></ul></div>
</div>
<div class="foot-motto"><p>From concept to <span>commercialisation.</span></p><a class="btn btn-ghost" href="contact.html">Start a conversation${arrow}</a></div>
<div class="foot-bottom"><div>© 2026 BioVeritas Life Sciences Private Limited</div><div class="legal"><a href="privacy.html">Privacy</a><a href="terms.html">Terms</a><a href="cookie-policy.html">Cookies</a><a href="quality.html">Quality policy</a><a href="sitemap.html">Sitemap</a></div></div>
</div></footer>`;

  const h = document.getElementById('site-header');
  const f = document.getElementById('site-footer');
  if (h) h.outerHTML = header;
  if (f) f.outerHTML = footer;

  const hdr = document.querySelector('.site-header');
  const onScroll = () => { if (hdr) hdr.classList.toggle('scrolled', window.scrollY > 24); };
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();

  document.querySelectorAll('.nav-item.has-mega').forEach(item => {
    let t;
    const open = () => { clearTimeout(t); document.querySelectorAll('.nav-item.open').forEach(o => { if (o !== item) o.classList.remove('open'); }); item.classList.add('open'); };
    const shut = () => { clearTimeout(t); t = setTimeout(() => item.classList.remove('open'), 240); };
    item.addEventListener('mouseenter', open);
    item.addEventListener('mouseleave', shut);
    const trig = item.querySelector('.nav-trigger');
    trig.addEventListener('click', e => { if (matchMedia('(hover: none)').matches && !item.classList.contains('open')) { e.preventDefault(); open(); } });
    item.querySelectorAll('.mega a').forEach(a => a.addEventListener('click', () => item.classList.remove('open')));
  });
  document.addEventListener('click', e => { if (!e.target.closest('.nav-item.has-mega')) document.querySelectorAll('.nav-item.open').forEach(o => o.classList.remove('open')); });

  const toggle = document.getElementById('nav-toggle'), drawer = document.getElementById('mobile-nav'), scrim = document.getElementById('mobile-scrim'), close = document.getElementById('mn-close');
  const openNav = () => { document.body.classList.add('nav-open'); toggle && toggle.setAttribute('aria-expanded', 'true'); };
  const closeNav = () => { document.body.classList.remove('nav-open'); toggle && toggle.setAttribute('aria-expanded', 'false'); };
  toggle && toggle.addEventListener('click', openNav);
  close && close.addEventListener('click', closeNav);
  scrim && scrim.addEventListener('click', closeNav);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') { closeNav(); document.querySelectorAll('.nav-item.open').forEach(o => o.classList.remove('open')); } });
  const here = location.pathname.split('/').pop() || 'index.html';
  if (drawer) {
    drawer.querySelectorAll('.mn-links a').forEach(a => { a.addEventListener('click', closeNav); if (a.getAttribute('href') === here) a.classList.add('active'); });
    drawer.querySelectorAll('.mn-group').forEach(d => { if ([...d.querySelectorAll('a')].some(a => a.getAttribute('href') === here)) d.open = true; });
  }

  // Missing local photos fall back to a plain brand panel
  const miss = img => { img.classList.add('img-missing'); img.parentElement && img.parentElement.classList.add('has-missing-img'); };
  document.querySelectorAll('main img').forEach(img => { if (img.complete && img.naturalWidth === 0 && img.getAttribute('src')) miss(img); else img.addEventListener('error', () => miss(img), { once: true }); });

  // Label table cells so tables can stack as cards on phones
  document.querySelectorAll('table').forEach(t => {
    const heads = [...t.querySelectorAll('thead th')].map(th => th.textContent.trim());
    if (!heads.length) return;
    t.classList.add('stackable');
    t.querySelectorAll('tbody tr').forEach(tr => [...tr.children].forEach((td, i) => { if (heads[i] && !td.hasAttribute('data-label')) td.setAttribute('data-label', heads[i]); }));
  });

  // Reveal-on-scroll for common blocks sitewide
  if (!matchMedia('(prefers-reduced-motion: reduce)').matches && 'IntersectionObserver' in window) {
    const sel = '[data-reveal],.section-head,.sub-head,.svc,.grp,.case,.insight,.ins,.kv,.ind,.pillar,.workflow .step,.path-step,.res-row,.job,.member,.matrix,.snap,.cband,.flow-wrap,.about-tile,.svc-row,.bento-card,.dom-card,.def,.step-row,.fig';
    const els = [...document.querySelectorAll(sel)].filter(el => !el.closest('.page-hero,.hero,.mega,.mobile-nav'));
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    els.forEach(el => {
      const r = el.getBoundingClientRect();
      if (r.top < innerHeight) return;
      const sib = el.parentElement ? [...el.parentElement.children].filter(c => c.matches(sel)) : [];
      const i = sib.indexOf(el);
      if (i > 0) el.style.transitionDelay = Math.min(i, 5) * 70 + 'ms';
      el.classList.add('rv'); io.observe(el);
    });
  }
})();
