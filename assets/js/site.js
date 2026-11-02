'use strict';
(function () {
  var toggle = document.querySelector('.menu-toggle');
  var mobileNav = document.querySelector('.mobile-nav');
  if (toggle && mobileNav) {
    toggle.addEventListener('click', function () {
      var opened = mobileNav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(opened));
      toggle.querySelector('.menu-label').textContent = opened ? 'Close' : 'Menu';
    });
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && mobileNav.classList.contains('open')) {
        mobileNav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.querySelector('.menu-label').textContent = 'Menu';
        toggle.focus();
      }
    });
    mobileNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileNav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.querySelector('.menu-label').textContent = 'Menu';
      });
    });
  }
  document.querySelectorAll('[data-year]').forEach(function (node) {
    node.textContent = String(new Date().getFullYear());
  });
  var config = window.CLASSROOM_QUEST_CONFIG || {};
  var donation = config.donation || {};
  var qr = document.getElementById('donation-qr-image');
  var method = document.getElementById('donation-method');
  var status = document.getElementById('donation-status');
  var qrLinks = document.getElementById('donation-qr-links');
  var qrView = document.getElementById('donation-qr-view');
  var qrSave = document.getElementById('donation-qr-save');
  if (qr) {
    var placeholder = 'assets/img/donation-placeholder.svg';
    if (donation.enabled && donation.image) {
      qr.addEventListener('error', function () {
        qr.src = placeholder;
        if (method) method.textContent = 'QR code not available yet';
        if (status) status.textContent = 'The payment image could not be loaded. Do not attempt payment.';
        if (qrLinks) qrLinks.hidden = true;
      }, { once: true });
      qr.src = donation.image;
      qr.alt = 'Optional ' + (donation.provider || 'payment') + ' QR code; verify the recipient in your payment app before sending.';
      if (qrView) qrView.href = donation.image;
      if (qrSave) qrSave.href = donation.image;
      if (qrLinks) qrLinks.hidden = false;
      if (method) method.textContent = donation.provider || 'Support TechEdz';
      if (status) status.textContent = donation.note || 'Donations are voluntary.';
    } else {
      qr.src = placeholder;
      qr.alt = 'Placeholder illustration. No payment QR code is configured yet.';
      if (method) method.textContent = 'QR code coming soon';
      if (status) status.textContent = 'Donations are not configured yet. Classroom Quest remains free to download.';
      if (qrLinks) qrLinks.hidden = true;
    }
  }
  // Only animate supporting content, never the donation QR or the primary navigation.
  // Reduced-motion users, non-JS browsers, and browsers without IntersectionObserver
  // always get immediately visible content.
  var prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!prefersReducedMotion && 'IntersectionObserver' in window) {
    var elements = document.querySelectorAll(
      '.section-header, .step-card, .feature-card, .use-card, ' +
      '.support-use-card, .alt-card, .insight-row, .callout-board, ' +
      '.download-primary, .download-secondary'
    );
    var observer = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.remove('motion-pending');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.05, rootMargin: '0px 0px -20px 0px' });
    elements.forEach(function (el, index) {
      // Clamp stagger so content never gets delayed unnecessarily.
      el.style.setProperty('--motion-delay', String((index % 3) * 55) + 'ms');
      el.classList.add('motion-pending');
      observer.observe(el);
    });
  }
  var repo = config.githubRepositoryUrl;
  document.querySelectorAll('[data-repo-link]').forEach(function (link) {
    if (repo && /^https:\/\//.test(repo)) {
      link.href = repo;
      link.hidden = false;
      link.rel = 'noopener noreferrer';
    } else {
      link.hidden = true;
    }
  });
}());
