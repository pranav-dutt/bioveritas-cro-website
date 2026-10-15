// ─────────────────────────────────────────────────────────────────────────────
// BioVeritas, shared site chrome (header + footer + mobile nav)
// Pages have <div id="site-header"></div> / <div id="site-footer"></div>
// placeholders; this fills them so nav stays consistent across pages.
// Each page sets <body data-page="services"> etc. so the active nav item
// can be highlighted.
// ─────────────────────────────────────────────────────────────────────────────

(function () {
  const SERVICES = [
    { label: 'Preclinical Research', href: 'services.html#preclinical', sub: 'Pharmacology, safety, DMPK', items: [
      ['In-Vitro & Cell-Based Assays', 'service-in-vitro.html'],
      ['In-Vivo Pharmacology & Efficacy', 'service-in-vivo.html'],
      ['Toxicology & Safety', 'service-detail.html'],
      ['Pharmacokinetics & ADME', 'service-pk-adme.html'] ] },
    { label: 'Bioanalytical & Biomarker Services', href: 'service-bioanalytical.html', sub: 'Exposure and biomarker evidence', core: true, items: [
      ['Bioanalytical Testing (LC–MS/MS)', 'service-bioanalytical.html#bioanalytical'],
      ['Biomarker Analysis', 'service-bioanalytical.html#biomarker'],
      ['Ligand-Binding Assays incl. ELISA', 'service-bioanalytical.html#lba'],
      ['Analytical & Testing Services', 'service-analytical.html'] ] },
    { label: 'Clinical Research', href: 'service-clinical.html', sub: 'Phase I–IV through qualified sites', core: true, items: [
      ['Study Design & Clinical Coordination', 'service-clinical.html#capabilities'],
      ['BA/BE Studies', 'service-clinical.html#standards'],
      ['Data Management & Biostatistics', 'service-data-analytics.html'] ] },
    { label: 'Regulatory & Quality', href: 'service-regulatory.html', sub: 'Strategy, submissions, compliance', items: [
      ['Regulatory Strategy & Submissions', 'service-regulatory.html'],
      ['Medical Device Evaluation', 'service-medical-devices.html'],
      ['Quality & Compliance Framework', 'quality.html'] ] },
    { label: 'Product Development', href: 'services.html#product-development', sub: 'Concept to commercialisation', core: true, items: [
      ['Discovery & Screening', 'service-discovery.html'],
      ['Formulation / New Product Development', 'service-npd.html'],
      ['Clinical Evidence Generation', 'service-clinical.html'],
      ['Manufacturing Coordination & Tech Transfer', 'service-manufacturing.html'] ] },
    { label: 'Scientific & Translational Support', href: 'service-translational.html', sub: 'Design, interpretation, reporting', core: true, items: [
      ['Translational Research', 'service-translational.html#overview'],
      ['Scientific & IP Documentation Support', 'service-translational.html#ip-support'],
      ['Publication Support', 'service-translational.html#publication-support'],
      ['Therapeutic Areas', 'therapeutic-areas.html'] ] },
  ];
  const MENUS = {
    how: { label: 'How We Work', href: 'services.html#how-we-work', items: [
      ['Our Delivery Model', 'services.html#how-we-work', 'From requirement to report'],
      ['Scientific Partner Network', 'services.html#network', 'Qualified labs, sites, facilities'],
      ['Our Office & Partner Facilities', 'facilities.html', 'What is ours, what is partner-enabled'],
      ['Discuss Your Project', 'contact.html', 'Talk to our scientific team'] ] },
    industries: { label: 'Industries', href: 'index.html#industries', items: [
      ['Pharmaceuticals & Biotech', 'index.html#industries'],
      ['Nutraceuticals & Supplements', 'index.html#industries'],
      ['Natural Products & AYUSH', 'index.html#industries'],
      ['Cosmetics & Personal Care', 'index.html#industries'],
      ['Functional Foods & Beverages', 'index.html#industries'],
      ['Healthcare & Wellness', 'index.html#industries'],
      ['Medical Devices', 'index.html#industries'] ] },
    insights: { label: 'Insights', href: 'blog.html', items: [
      ['Publications', 'resources.html#publications'],
      ['Scientific Articles', 'blog.html'],
      ['Case Studies', 'projects.html'],
      ['Resources & Downloads', 'resources.html'] ] },
    about: { label: 'About', href: 'about.html', items: [
      ['About BioVeritas', 'about.html', 'Vision, mission, philosophy'],
      ['Leadership & Team', 'team.html', 'The scientists behind the work'],
      ['Quality Approach', 'quality.html', 'Frameworks and oversight'],
      ['Partner With Us', 'partner.html', 'Commercial & academic models'],
      ['Careers', 'careers.html', 'Open roles in Noida'] ] },
  };

  const active = document.body.dataset.page || '';
  const LOGO = 'assets/bioveritas-logo.png';
  const esc = s => s.replace(/&/g, '&amp;');
  const arrow = '<svg class="arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>';
  const mnAr = '<svg class="mn-ar" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M9 6l6 6-6 6"/></svg>';

  const slim = (key, id) => { const m = MENUS[key]; return `
          <div class="nav-item has-mega">
            <a href="${m.href}" class="nav-trigger ${active === id ? 'active' : ''}" aria-haspopup="true">${m.label}<span class="caret"></span></a>
            <div class="mega slim"><div class="mega-card"><div class="mega-col slim-col">
              ${m.items.map(i => `<a href="${i[1]}"><b>${esc(i[0])}</b>${i[2] ? `<span>${esc(i[2])}</span>` : ''}</a>`).join('')}
            </div></div></div>
          </div>`; };

  const header = `
    <header class="site-header">
      <div class="wrap header-inner">
        <a class="brand" href="index.html" aria-label="BioVeritas Life Sciences home">
          <img src="${LOGO}" alt="BioVeritas Life Sciences" width="220" height="76" />
        </a>
        <nav class="nav" aria-label="Primary">
          <a href="index.html" class="${active === 'home' ? 'active' : ''}">Home</a>
          <div class="nav-item has-mega">
            <a href="services.html" class="nav-trigger ${active === 'services' ? 'active' : ''}" aria-haspopup="true">Services<span class="caret"></span></a>
            <div class="mega wide">
              <div class="mega-card">
                <div class="mega-cols groups">
                  ${SERVICES.map(g => `<div class="mega-col">
                    <a class="mega-gh" href="${g.href}"><b>${esc(g.label)}</b><span>${esc(g.sub)}</span></a>
                    ${g.items.map(i => `<a class="mega-sub" href="${i[1]}">${esc(i[0])}</a>`).join('')}
                  </div>`).join('')}
                </div>
                <div class="mega-foot">
                  <a href="services.html">All services &amp; how they connect${arrow}</a>
                  <a href="contact.html">Not sure where to start? Discuss your project${arrow}</a>
                </div>
              </div>
            </div>
          </div>
          ${slim('how', 'how')}
          ${slim('industries', 'industries')}
          ${slim('insights', 'blog')}
          ${slim('about', 'about')}
          <a href="contact.html" class="${active === 'contact' ? 'active' : ''}">Contact</a>
        </nav>
        <div class="cta-row">
          <a class="btn btn-primary" href="contact.html">Discuss your project${arrow}</a>
        </div>
        <button class="nav-toggle" id="nav-toggle" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-nav">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
        </button>
      </div>
    </header>
    <div class="mobile-scrim" id="mobile-scrim"></div>
    <aside class="mobile-nav" id="mobile-nav" aria-label="Mobile">
      <div class="mn-head">
        <img src="${LOGO}" alt="BioVeritas" width="139" height="48" />
        <button class="mn-close" id="mn-close" aria-label="Close menu">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
        </button>
      </div>
      <nav class="mn-links" aria-label="Mobile primary">
        <a href="index.html">Home${mnAr}</a>
        <details class="mn-group"><summary>Services<span class="caret"></span></summary>
          <div class="mn-sub">
            <a class="mn-all" href="services.html">All services</a>
            ${SERVICES.map(g => `<a href="${g.href}">${esc(g.label)}</a>`).join('')}
          </div>
        </details>
        ${['how', 'industries', 'insights', 'about'].map(k => `<details class="mn-group"><summary>${MENUS[k].label}<span class="caret"></span></summary>
          <div class="mn-sub">${MENUS[k].items.map(i => `<a href="${i[1]}">${esc(i[0])}</a>`).join('')}</div>
        </details>`).join('')}
        <a href="contact.html">Contact${mnAr}</a>
      </nav>
      <div class="mn-cta">
        <a class="btn btn-primary" href="contact.html">Discuss your project${arrow}</a>
        <a class="btn btn-ghost" href="tel:+919910663681">Call +91 99106 63681</a>
      </div>
      <div class="mn-meta">
        BioVeritas Life Sciences Pvt Ltd<br/>
        B-14, Sector-132, Noida, India<br/>
        <a href="mailto:bioveritascro@gmail.com">bioveritascro@gmail.com</a>
      </div>
    </aside>
  `;

  const footer = `
    <footer class="site-footer" data-screen-label="Footer">
      <div class="wrap">
        <div class="foot-grid">
          <div class="foot-brand">
            <img src="assets/bioveritas-logo-dark.png" alt="BioVeritas Life Sciences" width="186" height="64" />
            <p>An integrated life sciences and scientific development partner, combining internal scientific expertise with qualified laboratories, clinical sites and manufacturing partners, as applicable.</p>
            <div class="foot-company">
              <span class="cname">BioVeritas Life Sciences Private Limited</span><br/>
              Ground Floor, B-14, Sector-132<br/>
              Noida, Uttar Pradesh, India<br/>
              Estd. 2025 · GST &amp; MSME registered
            </div>
          </div>
          <div class="foot-col">
            <h5>Services</h5>
            <ul>
              ${SERVICES.map(g => `<li><a href="${g.href}">${esc(g.label)}</a></li>`).join('')}
              <li><a href="services.html">All services</a></li>
            </ul>
          </div>
          <div class="foot-col">
            <h5>Company</h5>
            <ul>
              <li><a href="services.html#how-we-work">How we work</a></li>
              <li><a href="services.html#network">Scientific partner network</a></li>
              <li><a href="index.html#industries">Industries</a></li>
              <li><a href="about.html">About</a></li>
              <li><a href="team.html">Leadership &amp; team</a></li>
              <li><a href="quality.html">Quality approach</a></li>
              <li><a href="blog.html">Insights</a></li>
              <li><a href="careers.html">Careers</a></li>
            </ul>
          </div>
          <div class="foot-col">
            <h5>Discuss your project</h5>
            <ul>
              <li><a href="contact.html">Contact &amp; enquiries</a></li>
              <li><a href="request-proposal.html">Request a proposal</a></li>
              <li><a href="mailto:bioveritascro@gmail.com">bioveritascro@gmail.com</a></li>
              <li><a href="tel:+919910663681">+91 99106 63681</a></li>
              <li><a href="https://wa.me/919910663681" target="_blank" rel="noopener">WhatsApp us</a></li>
              <li class="foot-hours">Office hours<br/>Mon – Fri · 9:30 am – 6:00 pm IST</li>
            </ul>
          </div>
        </div>
        <div class="foot-bottom">
          <div>© 2026 BioVeritas Life Sciences Private Limited</div>
          <div class="legal">
            <a href="privacy.html">Privacy</a>
            <a href="terms.html">Terms</a>
            <a href="cookie-policy.html">Cookies</a>
            <a href="quality.html">Quality policy</a>
            <a href="sitemap.html">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  `;

  const h = document.getElementById('site-header');
  const f = document.getElementById('site-footer');
  if (h) h.outerHTML = header;
  if (f) f.outerHTML = footer;

  // ── Floating header scroll state ──
  const hdr = document.querySelector('.site-header');
  const onScroll = () => { if (hdr) hdr.classList.toggle('scrolled', window.scrollY > 8); };
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();

  // ── Mega menu: hover intent with close delay + click/keyboard toggle ──
  document.querySelectorAll('.nav-item.has-mega').forEach(item => {
    let t;
    const open = () => { clearTimeout(t); document.querySelectorAll('.nav-item.open').forEach(o => { if (o !== item) o.classList.remove('open'); }); item.classList.add('open'); };
    const shut = () => { clearTimeout(t); t = setTimeout(() => item.classList.remove('open'), 280); };
    item.addEventListener('mouseenter', open);
    item.addEventListener('mouseleave', shut);
    const trig = item.querySelector('.nav-trigger');
    trig.addEventListener('click', e => { if (matchMedia('(hover: none)').matches && !item.classList.contains('open')) { e.preventDefault(); open(); } });
    item.querySelectorAll('.mega a').forEach(a => a.addEventListener('click', () => item.classList.remove('open')));
  });
  document.addEventListener('click', e => { if (!e.target.closest('.nav-item.has-mega')) document.querySelectorAll('.nav-item.open').forEach(o => o.classList.remove('open')); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') document.querySelectorAll('.nav-item.open').forEach(o => o.classList.remove('open')); });

  // ── Mobile nav wiring ──────────────────────────────────────────
  const toggle = document.getElementById('nav-toggle');
  const drawer = document.getElementById('mobile-nav');
  const scrim  = document.getElementById('mobile-scrim');
  const close  = document.getElementById('mn-close');

  function openNav() {
    document.body.classList.add('nav-open');
    if (toggle) toggle.setAttribute('aria-expanded', 'true');
  }
  function closeNav() {
    document.body.classList.remove('nav-open');
    if (toggle) toggle.setAttribute('aria-expanded', 'false');
  }
  if (toggle) toggle.addEventListener('click', openNav);
  if (close)  close.addEventListener('click', closeNav);
  if (scrim)  scrim.addEventListener('click', closeNav);
  if (drawer) drawer.querySelectorAll('.mn-links a').forEach(a => a.addEventListener('click', closeNav));
  // open the mobile group that contains the current page
  if (drawer) drawer.querySelectorAll('.mn-group').forEach(d => { if ([...d.querySelectorAll('a')].some(a => a.getAttribute('href') === (location.pathname.split('/').pop() || 'index.html'))) d.open = true; });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeNav(); });

  // Highlight the current page in the mobile drawer
  const here = (location.pathname.split('/').pop() || 'index.html');
  if (drawer) drawer.querySelectorAll('.mn-links a').forEach(a => {
    if (a.getAttribute('href') === here) a.classList.add('active');
  });
})();
