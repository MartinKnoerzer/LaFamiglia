/* =====================================================
   La Famiglia Vereinsrestaurant – JavaScript
   ===================================================== */

(function () {
  'use strict';

  // ── Mobile nav toggle ──────────────────────────────
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('nav-links');

  hamburger.addEventListener('click', function () {
    const open = navLinks.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', open);
  });

  // Close mobile menu when a link is clicked
  navLinks.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      navLinks.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });

  // ── Navbar scroll style ────────────────────────────
  const navbar = document.getElementById('navbar');

  window.addEventListener('scroll', function () {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
    highlightNavLink();
  }, { passive: true });

  // ── Active nav-link on scroll ──────────────────────
  const sections = document.querySelectorAll('section[id]');

  function highlightNavLink() {
    const scrollPos = window.scrollY + 80;
    sections.forEach(function (section) {
      const top    = section.offsetTop;
      const bottom = top + section.offsetHeight;
      const id     = section.getAttribute('id');
      const link   = navLinks.querySelector('a[href="#' + id + '"]');
      if (link) {
        link.classList.toggle('active', scrollPos >= top && scrollPos < bottom);
      }
    });
  }

  highlightNavLink(); // run once on load

  // ── Menu tabs ─────────────────────────────────────
  const tabBtns   = document.querySelectorAll('.tab-btn');
  const menuPanels = document.querySelectorAll('.menu-panel');

  tabBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const target = btn.getAttribute('data-tab');

      tabBtns.forEach(function (b) { b.classList.remove('active'); });
      menuPanels.forEach(function (p) { p.classList.remove('active'); });

      btn.classList.add('active');
      const panel = document.getElementById(target);
      if (panel) { panel.classList.add('active'); }
    });
  });

  // ── Reservation date: min = today ─────────────────
  const dateInput = document.getElementById('datum');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
    dateInput.setAttribute('value', today);
  }

  // ── Reservation form feedback ──────────────────────
  const form     = document.getElementById('reservierungs-formular');
  const feedback = document.getElementById('form-feedback');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      // Basic validation
      const name  = form.querySelector('#name').value.trim();
      const email = form.querySelector('#email').value.trim();
      const datum = form.querySelector('#datum').value;
      const pers  = form.querySelector('#personen').value;

      if (!name || !email || !datum || !pers) {
        showFeedback('Bitte füllen Sie alle Pflichtfelder aus.', 'error');
        return;
      }

      // Simulate successful submission
      showFeedback(
        'Vielen Dank, ' + name + '! Ihre Anfrage für ' + pers +
        ' Person(en) am ' + formatDate(datum) +
        ' wurde empfangen. Wir melden uns bald.',
        'success'
      );
      form.reset();
      if (dateInput) { dateInput.setAttribute('value', new Date().toISOString().split('T')[0]); }
    });
  }

  function showFeedback(msg, type) {
    feedback.textContent = msg;
    feedback.className = type;
  }

  function formatDate(iso) {
    const [y, m, d] = iso.split('-');
    return d + '.' + m + '.' + y;
  }

}());
