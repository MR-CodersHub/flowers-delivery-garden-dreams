/**
 * GARDEN DREAMS • Theme + RTL Engine
 * Runs synchronously in <head> so there is no flash of wrong theme.
 * Detects: saved preference → system preference (colour scheme / locale dir).
 */
(function () {
  var THEME_KEY = 'garden_dreams_theme';
  var DIR_KEY = 'garden_dreams_dir';

  function prefersDark() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  function prefersRtl() {
    var locale = (navigator.language || '').toLowerCase();
    var rtlLocales = ['ar', 'he', 'fa', 'ur', 'ps', 'dv', 'yi'];
    for (var i = 0; i < rtlLocales.length; i++) {
      if (locale === rtlLocales[i] || locale.indexOf(rtlLocales[i] + '-') === 0) return true;
    }
    return document.documentElement.dir === 'rtl';
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    try { localStorage.setItem(THEME_KEY, theme); } catch (e) {}
  }

  function applyDir(dir) {
    document.documentElement.setAttribute('dir', dir);
    document.documentElement.setAttribute('lang', dir === 'rtl' ? 'ar' : 'en');
    try { localStorage.setItem(DIR_KEY, dir); } catch (e) {}
  }

  // --- Resolve initial state -------------------------------------------------
  var savedTheme = null, savedDir = null;
  try {
    savedTheme = localStorage.getItem(THEME_KEY);
    savedDir = localStorage.getItem(DIR_KEY);
  } catch (e) {}

  applyTheme(savedTheme || (prefersDark() ? 'dark' : 'light'));
  applyDir(savedDir || (prefersRtl() ? 'rtl' : 'ltr'));

  // --- Public API used by navbar buttons ------------------------------------
  window.GardenTheme = {
    current: function () {
      return document.documentElement.getAttribute('data-theme') || 'light';
    },
    toggle: function () {
      var next = this.current() === 'light' ? 'dark' : 'light';
      document.body.classList.add('no-transition');
      applyTheme(next);
      requestAnimationFrame(function () {
        requestAnimationFrame(function () { document.body.classList.remove('no-transition'); });
      });
      return next;
    },
    dir: function () {
      return document.documentElement.getAttribute('dir') || 'ltr';
    },
    toggleDir: function () {
      var next = this.dir() === 'ltr' ? 'rtl' : 'ltr';
      applyDir(next);
      return next;
    },
    // Live sync when the OS theme changes while browsing
    watchSystem: function () {
      if (!window.matchMedia) return;
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
        try {
          if (localStorage.getItem(THEME_KEY)) return;
        } catch (err) {}
        applyTheme(e.matches ? 'dark' : 'light');
      });
    }
  };

  window.GardenTheme.watchSystem();
})();
