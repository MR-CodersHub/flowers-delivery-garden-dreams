/**
 * GARDEN DREAMS • Dashboard behaviours (Admin + User)
 * Sidebar, count-up stats, animated meters/bars, row filtering, quick actions.
 */
(function () {
  function easeOut(t) { return 1 - Math.pow(1 - t, 3); }

  function countUp(el) {
    var target = parseFloat(el.getAttribute('data-count'));
    var prefix = el.getAttribute('data-prefix') || '';
    var suffix = el.getAttribute('data-suffix') || '';
    var decimals = parseInt(el.getAttribute('data-decimals') || '0', 10);
    var duration = 1300;
    var start = null;

    function step(ts) {
      if (!start) start = ts;
      var p = Math.min(1, (ts - start) / duration);
      var val = target * easeOut(p);
      el.textContent = prefix + val.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ',') + suffix;
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  function observe(selector, handler) {
    var els = document.querySelectorAll(selector);
    if (!els.length) return;
    if (!('IntersectionObserver' in window)) {
      els.forEach(handler);
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          handler(entry.target);
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.25 });
    els.forEach(function (el) { io.observe(el); });
  }

  document.addEventListener('DOMContentLoaded', function () {
    /* ---------- Mobile sidebar ---------- */
    var toggle = document.getElementById('dash-menu-toggle');
    var sidebar = document.getElementById('dash-sidebar');
    if (toggle && sidebar) {
      toggle.addEventListener('click', function () {
        var open = sidebar.classList.toggle('open');
        toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
      document.addEventListener('click', function (e) {
        if (sidebar.classList.contains('open') &&
            !sidebar.contains(e.target) &&
            !toggle.contains(e.target)) {
          sidebar.classList.remove('open');
        }
      });
    }

    /* ---------- Animated stats / meters / chart bars ---------- */
    observe('[data-count]', countUp);

    observe('.meter-fill', function (el) {
      var w = el.getAttribute('data-width');
      if (w) el.style.width = w;
    });

    observe('.chart-bar', function (el) {
      var h = el.getAttribute('data-height');
      if (h) el.style.height = h;
    });

    /* ---------- Sidebar navigation feedback ---------- */
    document.querySelectorAll('.dash-nav a, .dash-nav button').forEach(function (item) {
      item.addEventListener('click', function (e) {
        var href = item.getAttribute('href');
        if (!href || href === '#') e.preventDefault();
        document.querySelectorAll('.dash-nav .active').forEach(function (a) { a.classList.remove('active'); });
        item.classList.add('active');
        if (href && href !== '#' && item.hasAttribute('data-nav-toast')) {
          showToast(item.textContent.trim() + ' section loaded');
        }
        if (sidebar) sidebar.classList.remove('open');
      });
    });

    /* ---------- Quick action buttons ---------- */
    document.querySelectorAll('[data-toast]').forEach(function (el) {
      el.addEventListener('click', function (e) {
        if (el.tagName === 'A' && (el.getAttribute('href') === '#' || !el.getAttribute('href'))) e.preventDefault();
        showToast(el.getAttribute('data-toast'));
      });
    });

    /* ---------- Table row search (admin orders / user history) ---------- */
    var tableSearch = document.getElementById('table-search');
    var table = document.getElementById('filter-table');
    if (tableSearch && table) {
      tableSearch.addEventListener('input', function () {
        var q = tableSearch.value.toLowerCase().trim();
        var rows = table.querySelectorAll('tbody tr');
        var shown = 0;
        rows.forEach(function (row) {
          var match = !q || row.textContent.toLowerCase().indexOf(q) !== -1;
          row.style.display = match ? '' : 'none';
          if (match) shown++;
        });
        var note = document.getElementById('table-search-note');
        if (note) note.textContent = shown + ' row' + (shown === 1 ? '' : 's') + ' shown';
      });
    }

    /* ---------- Admin: order status quick change ---------- */
    document.querySelectorAll('.js-status').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var pill = btn.closest('tr') ? btn.closest('tr').querySelector('.status-pill') : null;
        if (pill) {
          var states = ['processing', 'delivered', 'cancelled'];
          var current = states.findIndex(function (s) { return pill.classList.contains(s); });
          var next = states[(current + 1) % states.length];
          states.forEach(function (s) { pill.classList.remove(s); });
          pill.classList.add(next);
          pill.textContent = next;
          showToast('Order status updated to "' + next + '"');
        }
      });
    });

    /* ---------- Tabbed panels ---------- */
    document.querySelectorAll('[data-tab-group]').forEach(function (group) {
      var buttons = group.querySelectorAll('[data-tab]');
      var targetSel = group.getAttribute('data-tab-group');
      buttons.forEach(function (btn) {
        btn.addEventListener('click', function () {
          var name = btn.getAttribute('data-tab');
          buttons.forEach(function (b) { b.classList.toggle('active', b === btn); });
          document.querySelectorAll(targetSel + ' [data-panel]').forEach(function (panel) {
            panel.hidden = panel.getAttribute('data-panel') !== name;
          });
        });
      });
    });

    /* ---------- Settings / preference switches ---------- */
    document.querySelectorAll('.switch input[type="checkbox"]').forEach(function (box) {
      box.addEventListener('change', function () {
        showToast(box.checked
          ? (box.getAttribute('data-on') || 'Preference enabled')
          : (box.getAttribute('data-off') || 'Preference disabled'));
      });
    });
  });
})();
