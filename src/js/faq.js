/**
 * GARDEN DREAMS • FAQ page — client-side search across all questions
 */
(function () {
  function normalize(s) { return String(s).toLowerCase().replace(/\s+/g, ' '); }

  document.addEventListener('DOMContentLoaded', function () {
    var search = document.getElementById('faq-search');
    var clearBtn = document.getElementById('faq-clear');
    var empty = document.getElementById('faq-empty');
    var countEl = document.getElementById('faq-count');
    if (!search) return;

    var categories = Array.prototype.slice.call(document.querySelectorAll('.faq-category'));
    var totalQuestions = document.querySelectorAll('.faq-item').length;

    function updateCount() {
      if (!countEl) return;
      var visible = document.querySelectorAll('.faq-item:not([hidden])').length;
      countEl.textContent = visible + ' of ' + totalQuestions + ' questions shown';
      if (empty) empty.style.display = visible === 0 ? 'block' : 'none';
    }

    function filter() {
      var q = normalize(search.value.trim());

      categories.forEach(function (cat) {
        var items = cat.querySelectorAll('.faq-item');
        var shownInCat = 0;

        items.forEach(function (item) {
          var text = normalize(item.textContent);
          var match = !q || text.indexOf(q) !== -1;
          item.hidden = !match;
          if (match) {
            shownInCat++;
            if (q) {
              item.classList.add('active');
              var ans = item.querySelector('.faq-answer');
              if (ans) ans.style.maxHeight = ans.scrollHeight + 'px';
            }
          } else {
            item.classList.remove('active');
            var a = item.querySelector('.faq-answer');
            if (a) a.style.maxHeight = '0px';
          }
        });

        cat.hidden = shownInCat === 0;
      });

      updateCount();
    }

    search.addEventListener('input', filter);
    search.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { search.value = ''; filter(); }
    });

    if (clearBtn) {
      clearBtn.addEventListener('click', function () {
        search.value = '';
        filter();
        search.focus();
        showToast('Search cleared — all questions restored.');
      });
    }

    updateCount();
  });
})();
