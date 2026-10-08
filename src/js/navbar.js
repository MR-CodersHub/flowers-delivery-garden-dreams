/**
 * GARDEN DREAMS • Shared Navbar Renderer
 * Injects one identical navbar into #site-header-slot on every page.
 * Root prefix is read from <body data-root="...">.
 */
(function () {
  var root = document.body.getAttribute('data-root') || './';

  var NAV_LINKS = [
    { label: 'Home',     href: 'index.html',                 match: ['index.html', ''] },
    { label: 'Home 2',    href: 'public/pages/home-2.html',    match: ['home-2.html'] },
    { label: 'About',    href: 'public/pages/about.html',    match: ['about.html'] },
    { label: 'Services', href: 'public/pages/services.html', match: ['services.html', 'service-details.html'] },
    { label: 'Blog',     href: 'public/pages/blog.html',     match: ['blog.html', 'blog-details.html'] },
    { label: 'Contact',  href: 'public/pages/contact.html',  match: ['contact.html'] }
  ];

  function currentFile() {
    var path = window.location.pathname.replace(/\\/g, '/');
    var file = path.substring(path.lastIndexOf('/') + 1);
    if (!file) file = 'index.html';
    return file.toLowerCase();
  }

  function isActive(link) {
    var file = currentFile();
    for (var i = 0; i < link.match.length; i++) {
      if (file === link.match[i]) return true;
    }
    return false;
  }

  function icons() {
    return {
      moon:
        '<svg class="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>',
      sun:
        '<svg class="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>',
      bag:
        '<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>',
      user:
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>',
      login:
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><polyline points="10 17 15 12 10 7"></polyline><line x1="15" y1="12" x2="3" y2="12"></line></svg>',
      signup:
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line></svg>',
      shield:
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>',
      grid:
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>'
    };
  }

  function buildNavbar() {
    var slot = document.getElementById('site-header-slot');
    if (!slot) return;

    var ico = icons();

    var linksHtml = NAV_LINKS.map(function (link) {
      var active = isActive(link) ? ' active' : '';
      return '<a href="' + root + link.href + '" class="nav-link' + active + '">' +
             link.label + '<span class="nav-dot"></span></a>';
    }).join('');

    var html =
      '<header class="site-header" id="site-header">' +
        '<div class="nav-container">' +
          '<a href="' + root + 'index.html" class="brand-logo">' +
            '<img src="' + root + 'assets/img/logo.png" alt="Garden Dreams logo" width="30" height="30">' +
            '<div class="brand-text">' +
              '<span class="brand-name">Garden <span class="pink-accent">Dreams</span></span>' +
            '</div>' +
          '</a>' +

          '<nav class="nav-links" id="nav-links" aria-label="Primary">' +
            '<div class="nav-links-list">' +
              linksHtml +
            '</div>' +
            '<div class="mobile-nav-extras">' +
              '<div class="mobile-nav-divider"></div>' +
              '<div class="mobile-nav-heading">Preferences</div>' +
              '<div class="mobile-nav-actions">' +
                '<button type="button" id="mobile-theme-toggle" class="mobile-nav-action-btn" aria-label="Toggle colour theme">' +
                  '<span class="mobile-action-left">' +
                    '<span class="mobile-action-icon">' + ico.moon + ico.sun + '</span>' +
                    '<span class="mobile-action-title">Theme</span>' +
                  '</span>' +
                  '<span class="mobile-action-badge" id="mobile-theme-badge">Morning Light</span>' +
                '</button>' +
                '<button type="button" id="mobile-rtl-toggle" class="mobile-nav-action-btn" aria-label="Toggle right-to-left layout">' +
                  '<span class="mobile-action-left">' +
                    '<span class="mobile-action-icon">' +
                      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="18" height="18"><path d="M4 12h16M14 6l6 6-6 6M4 6v12"/></svg>' +
                    '</span>' +
                    '<span class="mobile-action-title">Text Direction</span>' +
                  '</span>' +
                  '<span class="mobile-action-badge" id="mobile-rtl-badge">LTR</span>' +
                '</button>' +
              '</div>' +
            '</div>' +
          '</nav>' +

          '<div class="nav-actions">' +
            '<button id="theme-toggle" class="theme-toggle-btn desktop-only-action" aria-label="Toggle colour theme">' +
              ico.moon + ico.sun +
            '</button>' +

            '<button id="rtl-toggle" class="rtl-toggle-btn desktop-only-action" aria-label="Toggle right-to-left layout" title="Toggle RTL layout">RTL</button>' +

            '<button id="cart-btn" class="btn-icon cart-btn desktop-only-action" aria-label="View basket">' +
              ico.bag +
              '<span class="cart-count">1</span>' +
            '</button>' +

            '<div class="profile-menu" id="profile-menu">' +
              '<button class="profile-btn" id="profile-btn" aria-label="Open account menu" aria-expanded="false" aria-haspopup="true">' +
                ico.user +
              '</button>' +
              '<div class="profile-dropdown" id="profile-dropdown" role="menu">' +
                '<div class="profile-dd-head">' +
                  '<div class="dd-avatar">' + ico.user + '</div>' +
                  '<div><strong>Welcome, Guest</strong><span>Browsing as a visitor</span></div>' +
                '</div>' +
                '<div class="profile-dd-label">Account</div>' +
                '<a href="' + root + 'public/auth/login.html" role="menuitem">' + ico.login + ' Log in</a>' +
                '<a href="' + root + 'public/auth/signup.html" role="menuitem">' + ico.signup + ' Sign up</a>' +
                '<div class="profile-dd-divider"></div>' +
                '<div class="profile-dd-label">Dashboards</div>' +
                '<a href="' + root + 'public/auth/admin/admin-dashboard.html" role="menuitem">' + ico.shield + ' Admin Dashboard</a>' +
                '<a href="' + root + 'public/auth/user/user-dashboard.html" role="menuitem">' + ico.grid + ' User Dashboard</a>' +
              '</div>' +
            '</div>' +

            '<button class="mobile-toggle" id="mobile-toggle" aria-label="Open navigation menu" aria-expanded="false">' +
              '<span></span><span></span><span></span>' +
            '</button>' +
          '</div>' +
        '</div>' +
      '</header>';

    slot.outerHTML = html;
  }

  function bindHeader() {
    var header = document.getElementById('site-header');
    var mobileToggle = document.getElementById('mobile-toggle');
    var navLinks = document.getElementById('nav-links');

    /* Sticky scroll state */
    var onScroll = function () {
      if (!header) return;
      if (window.scrollY > 30) header.classList.add('scrolled');
      else header.classList.remove('scrolled');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    /* Mobile menu */
    if (mobileToggle && navLinks) {
      mobileToggle.addEventListener('click', function (e) {
        e.stopPropagation();
        var open = navLinks.classList.toggle('mobile-open');
        mobileToggle.classList.toggle('active', open);
        mobileToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      });

      navLinks.querySelectorAll('.nav-links-list a').forEach(function (link) {
        link.addEventListener('click', function () {
          navLinks.classList.remove('mobile-open');
          mobileToggle.classList.remove('active');
          mobileToggle.setAttribute('aria-expanded', 'false');
        });
      });

      // Close mobile menu on click outside
      document.addEventListener('click', function (e) {
        if (!navLinks.contains(e.target) && !mobileToggle.contains(e.target)) {
          if (navLinks.classList.contains('mobile-open')) {
            navLinks.classList.remove('mobile-open');
            mobileToggle.classList.remove('active');
            mobileToggle.setAttribute('aria-expanded', 'false');
          }
        }
      });
    }

    /* Theme sync and toggle (desktop + mobile) */
    var syncThemeState = function () {
      var current = window.GardenTheme ? GardenTheme.current() : 'light';
      var badge = document.getElementById('mobile-theme-badge');
      if (badge) {
        badge.textContent = current === 'dark' ? 'Evening Garden' : 'Morning Light';
      }
    };
    syncThemeState();

    var handleThemeToggle = function () {
      var next = window.GardenTheme ? GardenTheme.toggle() : 'light';
      syncThemeState();
      if (typeof showToast === 'function') {
        showToast('Switched to ' + (next === 'dark' ? 'Evening Garden (dark)' : 'Morning Light (light)') + ' theme');
      }
    };

    var desktopTheme = document.getElementById('theme-toggle');
    if (desktopTheme) desktopTheme.addEventListener('click', handleThemeToggle);

    var mobileTheme = document.getElementById('mobile-theme-toggle');
    if (mobileTheme) mobileTheme.addEventListener('click', handleThemeToggle);

    /* RTL sync and toggle (desktop + mobile) */
    var syncRtlState = function () {
      var dir = window.GardenTheme ? GardenTheme.dir() : 'ltr';
      var desktopRtl = document.getElementById('rtl-toggle');
      if (desktopRtl) {
        desktopRtl.classList.toggle('active', dir === 'rtl');
        desktopRtl.setAttribute('aria-label', dir === 'rtl' ? 'Switch to left-to-right layout' : 'Switch to right-to-left layout');
      }
      var mobileRtl = document.getElementById('mobile-rtl-toggle');
      var mobileRtlBadge = document.getElementById('mobile-rtl-badge');
      if (mobileRtl) {
        mobileRtl.classList.toggle('active', dir === 'rtl');
      }
      if (mobileRtlBadge) {
        mobileRtlBadge.textContent = dir.toUpperCase();
      }
    };
    syncRtlState();

    var handleRtlToggle = function () {
      var next = window.GardenTheme ? GardenTheme.toggleDir() : 'ltr';
      syncRtlState();
      if (typeof showToast === 'function') {
        showToast(next === 'rtl' ? 'Right-to-left (RTL) layout enabled' : 'Left-to-right (LTR) layout enabled');
      }
    };

    var desktopRtl = document.getElementById('rtl-toggle');
    if (desktopRtl) desktopRtl.addEventListener('click', handleRtlToggle);

    var mobileRtl = document.getElementById('mobile-rtl-toggle');
    if (mobileRtl) mobileRtl.addEventListener('click', handleRtlToggle);

    /* Profile dropdown */
    var profileMenu = document.getElementById('profile-menu');
    var profileBtn = document.getElementById('profile-btn');
    if (profileMenu && profileBtn) {
      profileBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        var open = profileMenu.classList.toggle('open');
        profileBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
      });

      document.addEventListener('click', function (e) {
        if (!profileMenu.contains(e.target)) {
          profileMenu.classList.remove('open');
          profileBtn.setAttribute('aria-expanded', 'false');
        }
      });

      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
          profileMenu.classList.remove('open');
          profileBtn.setAttribute('aria-expanded', 'false');
        }
      });

      profileMenu.querySelectorAll('.profile-dropdown a').forEach(function (a) {
        a.addEventListener('click', function () {
          profileMenu.classList.remove('open');
        });
      });
    }

    /* Cart button: open drawer when present (home), otherwise toast */
    var cartBtn = document.getElementById('cart-btn');
    if (cartBtn) {
      cartBtn.addEventListener('click', function () {
        var drawer = document.getElementById('cart-drawer-overlay');
        if (drawer) {
          drawer.classList.add('open');
          if (typeof window.renderCart === 'function') window.renderCart();
        } else {
          showToast('Your basket is empty — explore our seasonal bouquets to begin.');
        }
      });
    }
  }

  buildNavbar();
  bindHeader();
})();
