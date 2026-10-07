/**
 * GARDEN DREAMS • Global quick search
 * Any input[data-site-search] redirects to the journal with ?q= applied.
 */
(function () {
  function root() {
    var r = document.body ? document.body.getAttribute('data-root') : '';
    return r || '';
  }

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('[data-site-search]').forEach(function (input) {
      input.addEventListener('keydown', function (e) {
        if (e.key !== 'Enter') return;
        var q = input.value.trim();
        if (!q) {
          input.focus();
          return;
        }
        window.location.href = root() + 'public/pages/blog.html?q=' + encodeURIComponent(q);
      });
    });
  });
})();
