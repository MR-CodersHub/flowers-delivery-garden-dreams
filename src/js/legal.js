/**
 * GARDEN DREAMS • Legal pages — table-of-contents scroll spy
 * Highlights the section currently in view inside .legal-toc.
 */
(function () {
  document.addEventListener('DOMContentLoaded', function () {
    var toc = document.querySelector('.legal-toc');
    if (!toc || !('IntersectionObserver' in window)) return;

    var links = Array.prototype.slice.call(toc.querySelectorAll('a[href^="#"]'));
    if (!links.length) return;

    var map = {};
    var sections = links.map(function (a) {
      var id = a.getAttribute('href').slice(1);
      var el = document.getElementById(id);
      if (el) map[id] = a;
      return el;
    }).filter(Boolean);

    function setActive(id) {
      links.forEach(function (a) {
        a.classList.toggle('active', a.getAttribute('href') === '#' + id);
      });
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    }, { rootMargin: '-20% 0px -70% 0px', threshold: 0 });

    sections.forEach(function (s) { observer.observe(s); });
    if (sections[0]) setActive(sections[0].id);

    links.forEach(function (a) {
      a.addEventListener('click', function () {
        setActive(a.getAttribute('href').slice(1));
      });
    });
  });
})();
