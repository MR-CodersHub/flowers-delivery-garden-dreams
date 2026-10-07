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
    /* ---------- Dashboard mobile sidebar ---------- */
    var toggles = [
      document.getElementById('dash-menu-toggle'),
      document.getElementById('dash-sidebar-toggle')
    ].filter(Boolean);
    var sidebar = document.getElementById('dash-sidebar');

    if (sidebar && toggles.length) {
      toggles.forEach(function (btn) {
        btn.addEventListener('click', function (e) {
          e.stopPropagation();
          var open = sidebar.classList.toggle('open');
          btn.setAttribute('aria-expanded', open ? 'true' : 'false');
        });
      });

      document.addEventListener('click', function (e) {
        if (sidebar.classList.contains('open') &&
            !sidebar.contains(e.target) &&
            !toggles.some(function (btn) { return btn.contains(e.target); })) {
          sidebar.classList.remove('open');
          toggles.forEach(function (btn) { btn.setAttribute('aria-expanded', 'false'); });
        }
      });
    }

    /* ---------- Dashboard top navbar Theme toggle ---------- */
    var themeBtn = document.getElementById('dash-theme-toggle');
    if (themeBtn) {
      themeBtn.addEventListener('click', function () {
        var next = window.GardenTheme ? GardenTheme.toggle() : 'light';
        if (typeof showToast === 'function') {
          showToast('Switched to ' + (next === 'dark' ? 'Evening Garden' : 'Morning Light') + ' theme');
        }
      });
    }

    /* ---------- Dashboard top navbar RTL toggle ---------- */
    var rtlBtn = document.getElementById('dash-rtl-toggle');
    if (rtlBtn) {
      var syncRtl = function () {
        var dir = window.GardenTheme ? GardenTheme.dir() : 'ltr';
        rtlBtn.classList.toggle('active', dir === 'rtl');
        rtlBtn.setAttribute('aria-label', dir === 'rtl' ? 'Switch to left-to-right layout' : 'Switch to right-to-left layout');
      };
      syncRtl();
      rtlBtn.addEventListener('click', function () {
        var next = window.GardenTheme ? GardenTheme.toggleDir() : 'ltr';
        syncRtl();
        if (typeof showToast === 'function') {
          showToast(next === 'rtl' ? 'Right-to-left layout enabled' : 'Left-to-right layout enabled');
        }
      });
    }

    /* ---------- Dashboard User Dropdown ---------- */
    var userMenu = document.getElementById('dash-user-menu');
    var userBtn = document.getElementById('dash-user-btn');
    if (userMenu && userBtn) {
      userBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        var open = userMenu.classList.toggle('open');
        userBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
      });

      document.addEventListener('click', function (e) {
        if (!userMenu.contains(e.target)) {
          userMenu.classList.remove('open');
          userBtn.setAttribute('aria-expanded', 'false');
        }
      });

      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
          userMenu.classList.remove('open');
          userBtn.setAttribute('aria-expanded', 'false');
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

    /* ---------- Sidebar navigation & anchor scrolling ---------- */
    var navLinks = document.querySelectorAll('.dash-nav a[href^="#"]');
    var isManualScroll = false;
    var scrollTimer = null;

    function setActiveNav(targetHref) {
      if (!targetHref) return;
      navLinks.forEach(function (link) {
        if (link.getAttribute('href') === targetHref) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    }

    function scrollToSection(href) {
      if (!href || href === '#') return;
      var targetEl = document.querySelector(href);
      if (targetEl) {
        isManualScroll = true;
        clearTimeout(scrollTimer);

        setActiveNav(href);
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });

        if (history.replaceState) {
          history.replaceState(null, '', href);
        }

        if (sidebar) {
          sidebar.classList.remove('open');
          var menuToggle = document.getElementById('dash-menu-toggle');
          if (menuToggle) menuToggle.setAttribute('aria-expanded', 'false');
        }

        scrollTimer = setTimeout(function () {
          isManualScroll = false;
        }, 900);
      }
    }

    navLinks.forEach(function (item) {
      item.addEventListener('click', function (e) {
        var href = item.getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          scrollToSection(href);
        }
      });
    });

    // Also support links inside user dropdown (e.g. Account / Studio Settings)
    document.querySelectorAll('.dash-user-dropdown a[href^="#"]').forEach(function (item) {
      item.addEventListener('click', function (e) {
        var href = item.getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          scrollToSection(href);
          if (userMenu) userMenu.classList.remove('open');
          if (userBtn) userBtn.setAttribute('aria-expanded', 'false');
        }
      });
    });

    // ScrollSpy: highlight active sidebar link as user scrolls
    var trackedSections = [];
    navLinks.forEach(function (link) {
      var href = link.getAttribute('href');
      if (href && href.startsWith('#') && href.length > 1) {
        var el = document.querySelector(href);
        if (el) trackedSections.push({ el: el, href: href });
      }
    });

    if (trackedSections.length > 0) {
      window.addEventListener('scroll', function () {
        if (isManualScroll) return;
        var scrollY = window.pageYOffset || document.documentElement.scrollTop;
        var headerOffset = 130;
        var currentHref = trackedSections[0].href;

        for (var i = 0; i < trackedSections.length; i++) {
          var top = trackedSections[i].el.getBoundingClientRect().top + scrollY;
          if (scrollY >= top - headerOffset) {
            currentHref = trackedSections[i].href;
          }
        }
        setActiveNav(currentHref);
      }, { passive: true });
    }

    // Hash check on initial page load
    if (window.location.hash) {
      var initialHash = window.location.hash;
      var initialTarget = document.querySelector(initialHash);
      if (initialTarget) {
        setTimeout(function () {
          scrollToSection(initialHash);
        }, 150);
      }
    }

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
