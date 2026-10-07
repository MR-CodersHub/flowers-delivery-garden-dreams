/**
 * GARDEN DREAMS • Accordion engine (FAQ / pricing / any .faq-item)
 * Delegated so it works for static markup AND dynamically injected content.
 */
(function () {
  document.addEventListener('click', function (e) {
    var btn = e.target.closest('.faq-question');
    if (!btn) return;

    var item = btn.closest('.faq-item');
    if (!item) return;

    var list = item.parentElement;
    var wasOpen = item.classList.contains('active');

    if (list && list.hasAttribute('data-single')) {
      list.querySelectorAll('.faq-item.active').forEach(function (other) {
        if (other !== item) {
          other.classList.remove('active');
          var a = other.querySelector('.faq-answer');
          if (a) a.style.maxHeight = '0px';
          var qb = other.querySelector('.faq-question');
          if (qb) qb.setAttribute('aria-expanded', 'false');
        }
      });
    }

    item.classList.toggle('active', !wasOpen);
    btn.setAttribute('aria-expanded', !wasOpen ? 'true' : 'false');

    var answer = item.querySelector('.faq-answer');
    if (answer) {
      answer.style.maxHeight = !wasOpen ? answer.scrollHeight + 'px' : '0px';
    }
  });

  /* Keep open answers correctly sized when the viewport changes */
  window.addEventListener('resize', function () {
    document.querySelectorAll('.faq-item.active .faq-answer').forEach(function (a) {
      a.style.maxHeight = a.scrollHeight + 'px';
    });
  });
})();
