// ─────────────────────────────────────────────────────────────────────────────
// BioVeritas — shared site chrome (header + footer + mobile nav)
// Pages have <div id="site-header"></div> / <div id="site-footer"></div>
// placeholders; this fills them so nav stays consistent across pages.
// Each page sets <body data-page="services"> etc. so the active nav item
// can be highlighted.
// ─────────────────────────────────────────────────────────────────────────────

(function () {
  const NAV = [
    { id: 'home',     label: 'Home',     href: 'index.html' },
    { id: 'about',    label: 'About',    href: 'about.html' },
    { id: 'services', label: 'Services', href: 'services.html' },
    { id: 'projects', label: 'Projects', href: 'projects.html' },
    { id: 'blog',     label: 'Insights', href: 'blog.html' },
    { id: 'contact',  label: 'Contact',  href: 'contact.html' },
  ];

  const active = document.body.dataset.page || '';
  const LOGO = 'assets/bioveritas-logo.png';
  const arrow = '<svg class="arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>';
  const mnAr = '<svg class="mn-ar" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M9 6l6 6-6 6"/></svg>';

  const header = `
    <header class="site-header">
      <div class="wrap header-inner">
        <a class="brand" href="index.html" aria-label="BioVeritas CRO home">
          <img src="${LOGO}" alt="BioVeritas — Science. Verified." />
        </a>
        <nav class="nav" aria-label="Primary">
          <a href="index.html" class="${active === 'home' ? 'active' : ''}">Home</a>
          <a href="about.html" class="${active === 'about' ? 'active' : ''}">About</a>
          <div class="nav-item has-mega">
            <a href="services.html" class="nav-trigger ${active === 'services' ? 'active' : ''}" aria-haspopup="true">Services<span class="caret"></span></a>
            <div class="mega">
              <div class="mega-card">
                <div class="mega-cols">
                  <div class="mega-col">
                    <div class="mega-h">Pre-clinical</div>
                    <a href="service-in-vitro.html"><b>In vitro &amp; cell-based</b><span>Binding, cytotoxicity, MoA</span></a>
                    <a href="service-in-vivo.html"><b>In vivo pharmacology</b><span>Efficacy, PK/PD, proof-of-concept</span></a>
                    <a href="service-detail.html"><b>Toxicology &amp; safety</b><span>OECD / ICH-S safety package</span></a>
                  </div>
                  <div class="mega-col">
                    <div class="mega-h">Bioanalysis &amp; DMPK</div>
                    <a href="service-bioanalytical.html"><b>Bioanalytical &amp; biomarker</b><span>LC–MS/MS, ligand binding</span></a>
                    <a href="service-pk-adme.html"><b>Pharmacokinetics &amp; ADME</b><span>ADME, CYP450, DDI</span></a>
                    <a href="service-discovery.html"><b>Discovery &amp; NPD screening</b><span>HTS, hit-to-lead</span></a>
                  </div>
                  <div class="mega-col">
                    <div class="mega-h">Clinical &amp; regulatory</div>
                    <a href="service-clinical.html"><b>Clinical research (I–IV)</b><span>FIH to Phase IV, BA/BE</span></a>
                    <a href="service-regulatory.html"><b>Regulatory consulting</b><span>Dossiers, CTD, strategy</span></a>
                    <a href="service-npd.html"><b>New product development</b><span>Formulation, scale-up</span></a>
                  </div>
                  <a class="mega-promo" href="contact.html">
                    <div class="mega-promo-h">Not sure where to start?</div>
                    <p>Send us your molecule and target — we'll scope the right studies within 48 hours.</p>
                    <span class="mega-promo-cta">Brief our team${arrow}</span>
                  </a>
                </div>
                <div class="mega-foot">
                  <a href="services.html">View all services &amp; the capability matrix${arrow}</a>
                </div>
              </div>
            </div>
          </div>
          <a href="projects.html" class="${active === 'projects' ? 'active' : ''}">Projects</a>
          <a href="blog.html" class="${active === 'blog' ? 'active' : ''}">Insights</a>
          <a href="contact.html" class="${active === 'contact' ? 'active' : ''}">Contact</a>
        </nav>
        <div class="cta-row">
          <a class="btn btn-ghost" href="contact.html">Brief us</a>
          <a class="btn btn-primary" href="contact.html">Start a study${arrow}</a>
        </div>
        <button class="nav-toggle" id="nav-toggle" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-nav">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
        </button>
      </div>
    </header>
    <div class="mobile-scrim" id="mobile-scrim"></div>
    <aside class="mobile-nav" id="mobile-nav" aria-label="Mobile">
      <div class="mn-head">
        <img src="${LOGO}" alt="BioVeritas" />
        <button class="mn-close" id="mn-close" aria-label="Close menu">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
        </button>
      </div>
      <nav class="mn-links" aria-label="Mobile primary">
        ${NAV.map(n => `<a href="${n.href}" class="${active === n.id ? 'active' : ''}">${n.label}${mnAr}</a>`).join('')}
      </nav>
      <div class="mn-cta">
        <a class="btn btn-primary" href="contact.html">Start a study${arrow}</a>
        <a class="btn btn-ghost" href="tel:+919910663681">Call +91 99106 63681</a>
      </div>
      <div class="mn-meta">
        BioVeritas CRO Pvt Ltd<br/>
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
            <img src="${LOGO}" alt="BioVeritas — Science. Verified." />
            <p>Independent contract research organization supporting regulated science from non-clinical research through clinical trials and regulatory readiness.</p>
            <div class="foot-company">
              <span class="cname">BioVeritas CRO Private Limited</span><br/>
              Ground Floor, B-14, Sector-132<br/>
              Noida, Uttar Pradesh, India<br/>
              Estd. 2025 · GST &amp; MSME registered
            </div>
            <div class="foot-badges">
              <div class="iso-badge">
                <span class="seal">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="9"/></svg>
                </span>
                <span class="t"><b>ISO 9001 Certified Lab</b><span>Quality management system</span></span>
              </div>
            </div>
          </div>
          <div class="foot-col">
            <h5>Services</h5>
            <ul>
              <li><a href="service-in-vitro.html">In vitro &amp; cell-based</a></li>
              <li><a href="service-detail.html">Toxicology</a></li>
              <li><a href="service-bioanalytical.html">Bioanalytical</a></li>
              <li><a href="service-clinical.html">Clinical trials</a></li>
              <li><a href="service-regulatory.html">Regulatory</a></li>
              <li><a href="service-npd.html">New product dev.</a></li>
            </ul>
          </div>
          <div class="foot-col">
            <h5>Company</h5>
            <ul>
              <li><a href="about.html">About</a></li>
              <li><a href="services.html">Services</a></li>
              <li><a href="projects.html">Projects</a></li>
              <li><a href="team.html">Team</a></li>
              <li><a href="blog.html">Insights</a></li>
              <li><a href="contact.html">Contact</a></li>
            </ul>
          </div>
          <div class="foot-col">
            <h5>Get in touch</h5>
            <ul>
              <li><a href="mailto:bioveritascro@gmail.com">bioveritascro@gmail.com</a></li>
              <li><a href="tel:+919910663681">+91 99106 63681</a></li>
              <li style="margin-top:8px; color: rgba(255,255,255,0.5); font-size:12.5px;">
                Office hours<br/>Mon – Fri · 09:30 – 18:30 IST
              </li>
            </ul>
          </div>
        </div>
        <div class="foot-bottom">
          <div>© 2026 BioVeritas CRO Private Limited. Science. Verified.</div>
          <div class="legal">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Quality policy</a>
            <a href="#">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  `;

  const h = document.getElementById('site-header');
  const f = document.getElementById('site-footer');
  if (h) h.outerHTML = header;
  if (f) f.outerHTML = footer;

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
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeNav(); });
})();
