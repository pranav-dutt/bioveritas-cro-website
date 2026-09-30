// ─────────────────────────────────────────────────────────────────────────────
// BioVeritas — Google Analytics 4.
// Paste the GA4 measurement ID below (looks like "G-XXXXXXXXXX") and analytics
// activates site-wide. Left empty, this file does nothing at all — no network
// requests, no cookies, no console noise.
// ─────────────────────────────────────────────────────────────────────────────
(function () {
  var GA_MEASUREMENT_ID = ''; // e.g. 'G-ABCD123456'
  if (!GA_MEASUREMENT_ID) return;
  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_MEASUREMENT_ID;
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', GA_MEASUREMENT_ID, { anonymize_ip: true });
})();
