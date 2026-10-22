/**
 * GARDEN DREAMS • Garden Design & Landscaping Studio
 * Main Application Script
 */

document.addEventListener('DOMContentLoaded', () => {
  initScrollReveal();
  initSmoothAnchors();
});

/* ==========================================================================
   Scroll-Reveal IntersectionObserver
   ========================================================================== */
function initScrollReveal() {
  const revealTargets = [
    ...document.querySelectorAll('.service-card'),
    ...document.querySelectorAll('.process-step'),
    ...document.querySelectorAll('.season-card'),
    ...document.querySelectorAll('.pillar-card'),
    ...document.querySelectorAll('.project-card'),
    ...document.querySelectorAll('.info-card'),
    ...document.querySelectorAll('.media-frame'),
    document.querySelector('.hero-inner'),
    document.querySelector('.cta-strip-inner'),
    document.querySelector('.cta-band-inner'),
  ].filter(Boolean);

  const staggerGroups = [
    ['.services-grid .service-card', 3],
    ['.process-grid .process-step', 4],
    ['.season-grid .season-card', 4],
    ['.grid-4 .pillar-card', 4],
    ['#featured-projects .project-card', 3],
  ];

  staggerGroups.forEach(([selector, step]) => {
    document.querySelectorAll(selector).forEach((el, i) => {
      el.classList.add(`reveal-delay-${Math.min((i % step) + 1, step)}`);
    });
  });

  revealTargets.forEach(el => el.classList.add('reveal'));

  if (!('IntersectionObserver' in window)) {
    revealTargets.forEach(el => el.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  revealTargets.forEach(el => observer.observe(el));
}

/* ==========================================================================
   Smooth in-page anchors
   ========================================================================== */
function initSmoothAnchors() {
  document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach(link => {
    link.addEventListener('click', (e) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}
