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
    { id: 'services', label: 'Therapeutic areas', href: 'therapeutic-areas.html' },
    { id: 'about',    label: 'Quality & compliance', href: 'quality.html' },
    { id: 'about',    label: 'Facilities', href: 'facilities.html' },
    { id: 'about',    label: 'Team', href: 'team.html' },
    { id: 'projects', label: 'Case studies', href: 'projects.html' },
    { id: 'blog',     label: 'Blogs',  href: 'blog.html' },
    { id: 'blog',     label: 'Resources', href: 'resources.html' },
    { id: 'about',    label: 'Partner with us', href: 'partner.html' },
    { id: 'about',    label: 'Careers',   href: 'careers.html' },
    { id: 'contact',  label: 'Contact',   href: 'contact.html' },
  ];

  const active = document.body.dataset.page || '';
  const LOGO = 'assets/bioveritas-logo.png';
  const arrow = '<svg class="arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>';
  const mnAr = '<svg class="mn-ar" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M9 6l6 6-6 6"/></svg>';

  const header = `
    <header class="site-header">
      <div class="wrap header-inner">
        <a class="brand" href="index.html" aria-label="BioVeritas CRO home">
          <img src="${LOGO}" alt="BioVeritas Life Sciences" width="232" height="80" />
        </a>
        <nav class="nav" aria-label="Primary">
          <a href="index.html" class="${active === 'home' ? 'active' : ''}">Home</a>
          <a href="about.html" class="${active === 'about' ? 'active' : ''}">About</a>
          <div class="nav-item has-mega">
            <a href="services.html" class="nav-trigger ${active === 'services' ? 'active' : ''}" aria-haspopup="true">Services<span class="caret"></span></a>
            <div class="mega wide">
              <div class="mega-card">
                <div class="mega-cols cols4">
                  <div class="mega-col">
                    <div class="mega-h">Pre-clinical</div>
                    <a href="service-in-vitro.html"><b>In vitro &amp; cell-based</b><span>Binding, cytotoxicity, MoA</span></a>
                    <a href="service-in-vivo.html"><b>In vivo pharmacology</b><span>Efficacy, PK/PD, proof-of-concept</span></a>
                    <a href="service-detail.html"><b>Toxicology &amp; safety</b><span>OECD / ICH-S safety package</span></a>
                    <a href="service-translational.html"><b>Translational research</b><span>Bench to bedside, biomarkers</span></a>
                  </div>
                  <div class="mega-col">
                    <div class="mega-h">Bioanalysis &amp; DMPK</div>
                    <a href="service-bioanalytical.html"><b>Bioanalytical &amp; biomarker</b><span>LC–MS/MS, ligand binding</span></a>
                    <a href="service-pk-adme.html"><b>Pharmacokinetics &amp; ADME</b><span>ADME, CYP450, DDI</span></a>
                    <a href="service-analytical.html"><b>Analytical &amp; testing</b><span>Methods, release, stability</span></a>
                    <a href="service-data-analytics.html"><b>Data analytics &amp; digital</b><span>Biostatistics, CDISC, RWE</span></a>
                  </div>
                  <div class="mega-col">
                    <div class="mega-h">Clinical &amp; regulatory</div>
                    <a href="service-clinical.html"><b>Clinical research (I–IV)</b><span>FIH to Phase IV, BA/BE</span></a>
                    <a href="service-regulatory.html"><b>Regulatory consulting</b><span>Dossiers, CTD, strategy</span></a>
                    <a href="service-medical-devices.html"><b>Medical devices</b><span>ISO 10993, biocompatibility</span></a>
                  </div>
                  <div class="mega-col">
                    <div class="mega-h">Discovery &amp; development</div>
                    <a href="service-discovery.html"><b>Discovery &amp; NPD screening</b><span>HTS, hit-to-lead</span></a>
                    <a href="service-npd.html"><b>New product development</b><span>Formulation, scale-up</span></a>
                    <a href="service-manufacturing.html"><b>Manufacturing &amp; transfer</b><span>Tech transfer, licensing</span></a>
                    <a href="therapeutic-areas.html"><b>Therapeutic areas</b><span>Domains &amp; scientific approach</span></a>
                  </div>
                  <a class="mega-promo" href="request-proposal.html">
                    <div class="mega-promo-h">Not sure where to start?</div>
                    <p>Send us your molecule and target, we'll scope the right studies within 48 hours.</p>
                    <span class="mega-promo-cta">Request a proposal${arrow}</span>
                  </a>
                </div>
                <div class="mega-foot">
                  <a href="services.html">View all services &amp; the capability matrix${arrow}</a>
                </div>
              </div>
            </div>
          </div>
          <div class="nav-item has-mega">
            <a href="quality.html" class="nav-trigger ${active === 'company' ? 'active' : ''}" aria-haspopup="true">Company<span class="caret"></span></a>
            <div class="mega narrow">
              <div class="mega-card">
                <div class="mega-cols cols2">
                  <div class="mega-col">
                    <div class="mega-h">Credibility</div>
                    <a href="quality.html"><b>Quality &amp; compliance</b><span>GLP · GCP · OECD · ICH · CDSCO</span></a>
                    <a href="facilities.html"><b>Facilities &amp; infrastructure</b><span>Lab capability, instrumentation</span></a>
                    <a href="team.html"><b>Leadership &amp; team</b><span>The scientists on your study</span></a>
                  </div>
                  <div class="mega-col">
                    <div class="mega-h">Work with us</div>
                    <a href="partner.html"><b>Partner &amp; collaborate</b><span>Commercial &amp; academic models</span></a>
                    <a href="careers.html"><b>Careers &amp; internships</b><span>Open roles in Noida</span></a>
                    <a href="resources.html"><b>Resources &amp; publications</b><span>White papers, downloads</span></a>
                  </div>
                  <a class="mega-promo" href="quality.html">
                    <div class="mega-promo-h">Doing due diligence?</div>
                    <p>Our quality pack covers the frameworks, systems, and audit history sponsors ask about.</p>
                    <span class="mega-promo-cta">Quality &amp; compliance${arrow}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <a href="projects.html" class="${active === 'projects' ? 'active' : ''}">Projects</a>
          <a href="blog.html" class="${active === 'blog' ? 'active' : ''}">Blogs</a>
          <a href="contact.html" class="${active === 'contact' ? 'active' : ''}">Contact</a>
        </nav>
        <div class="cta-row">
          <a class="btn btn-primary" href="request-proposal.html">Request a proposal${arrow}</a>
        </div>
        <button class="nav-toggle" id="nav-toggle" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-nav">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
        </button>
      </div>
    </header>
    <div class="mobile-scrim" id="mobile-scrim"></div>
    <aside class="mobile-nav" id="mobile-nav" aria-label="Mobile">
      <div class="mn-head">
        <img src="${LOGO}" alt="BioVeritas" width="180" height="62" />
        <button class="mn-close" id="mn-close" aria-label="Close menu">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
        </button>
      </div>
      <nav class="mn-links" aria-label="Mobile primary">
        ${NAV.map(n => `<a href="${n.href}">${n.label}${mnAr}</a>`).join('')}
      </nav>
      <div class="mn-cta">
        <a class="btn btn-primary" href="request-proposal.html">Request a proposal${arrow}</a>
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
            <img src="assets/bioveritas-logo-dark.png" alt="BioVeritas Life Sciences" width="210" height="72" />
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
              <li><a href="service-in-vivo.html">In vivo pharmacology</a></li>
              <li><a href="service-detail.html">Toxicology &amp; safety</a></li>
              <li><a href="service-bioanalytical.html">Bioanalytical</a></li>
              <li><a href="service-pk-adme.html">Pharmacokinetics &amp; ADME</a></li>
              <li><a href="service-analytical.html">Analytical &amp; testing</a></li>
              <li><a href="service-clinical.html">Clinical research</a></li>
              <li><a href="services.html">All 14 services</a></li>
            </ul>
          </div>
          <div class="foot-col">
            <h5>Company</h5>
            <ul>
              <li><a href="about.html">About</a></li>
              <li><a href="therapeutic-areas.html">Therapeutic areas</a></li>
              <li><a href="quality.html">Quality &amp; compliance</a></li>
              <li><a href="facilities.html">Facilities</a></li>
              <li><a href="team.html">Team</a></li>
              <li><a href="projects.html">Case studies</a></li>
              <li><a href="partner.html">Partner with us</a></li>
              <li><a href="careers.html">Careers</a></li>
            </ul>
          </div>
          <div class="foot-col">
            <h5>Get in touch</h5>
            <ul>
              <li><a href="request-proposal.html">Request a proposal</a></li>
              <li><a href="resources.html">Resources &amp; publications</a></li>
              <li><a href="blog.html">Blogs</a></li>
              <li><a href="mailto:bioveritascro@gmail.com">bioveritascro@gmail.com</a></li>
              <li><a href="tel:+919910663681">+91 99106 63681</a></li>
              <li><a href="https://wa.me/919910663681" target="_blank" rel="noopener">WhatsApp us</a></li>
              <li style="margin-top:8px; color: rgba(255,255,255,0.5); font-size:12.5px;">
                Office hours<br/>Mon – Fri · 09:30 – 18:30 IST
              </li>
            </ul>
          </div>
        </div>
        <div class="foot-bottom">
          <div>© 2026 BioVeritas CRO Private Limited. Science. Verified.</div>
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

  // Highlight the current page in the mobile drawer
  const here = (location.pathname.split('/').pop() || 'index.html');
  if (drawer) drawer.querySelectorAll('.mn-links a').forEach(a => {
    if (a.getAttribute('href') === here) a.classList.add('active');
  });
})();
