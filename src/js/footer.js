/**
 * GARDEN DREAMS • Shared Footer Renderer
 * Injects one identical footer into #site-footer-slot on every page.
 */
(function () {
  var root = document.body.getAttribute('data-root') || './';

  function buildFooter() {
    var slot = document.getElementById('site-footer-slot');
    if (!slot) return;

    var html =
      '<footer class="site-footer">' +
        '<div class="footer-botanical-border"></div>' +
        '<div class="container">' +
          '<div class="footer-grid">' +
            /* Brand */
            '<div class="footer-brand">' +
              '<a href="' + root + 'index.html" class="brand-logo">' +
                '<img src="' + root + 'assets/img/logo.png" alt="Garden Dreams logo" width="50" height="50">' +
                '<div class="brand-text"><span class="brand-name">Garden <span class="pink-accent">Dreams</span></span></div>' +
              '</a>' +
              '<p>A local fresh flower studio delivering seasonal, hand-arranged bouquets and thoughtful subscriptions — fresh flowers, delivered with a little joy.</p>' +
              '<div class="social-links">' +
                '<a href="#" class="social-link" aria-label="Instagram"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></a>' +
                '<a href="#" class="social-link" aria-label="Pinterest"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="9" x2="12" y2="21"/><path d="M8 12a4 4 0 1 1 8 0c0 4-4 8-8 8"/></svg></a>' +
                '<a href="#" class="social-link" aria-label="Facebook"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>' +
                '<a href="#" class="social-link" aria-label="X"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4l16 16M20 4L4 20"/></svg></a>' +
              '</div>' +
            '</div>' +

            /* Shop */
            '<div>' +
              '<h4 class="footer-heading">Shop</h4>' +
              '<ul class="footer-links">' +
                '<li><a href="' + root + 'index.html#seasonal">Seasonal Bouquets</a></li>' +
                '<li><a href="' + root + 'index.html#subscriptions">Subscriptions</a></li>' +
                '<li><a href="' + root + 'index.html#gifts">Gift Subscriptions</a></li>' +
                '<li><a href="' + root + 'public/pages/services.html">All Services</a></li>' +
                '<li><a href="' + root + 'public/pages/pricing.html">Pricing Plans</a></li>' +
              '</ul>' +
            '</div>' +

            /* Discover */
            '<div>' +
              '<h4 class="footer-heading">Discover</h4>' +
              '<ul class="footer-links">' +
                '<li><a href="' + root + 'public/pages/about.html">About Us</a></li>' +
                '<li><a href="' + root + 'public/pages/home-2.html">Wedding &amp; Events</a></li>' +
                '<li><a href="' + root + 'public/pages/blog.html">Flower Journal</a></li>' +
                '<li><a href="' + root + 'public/pages/FAQ.html">FAQs</a></li>' +
                '<li><a href="' + root + 'public/pages/contact.html">Contact &amp; Delivery Map</a></li>' +
              '</ul>' +
            '</div>' +

            /* Account */
            '<div>' +
              '<h4 class="footer-heading">Account</h4>' +
              '<ul class="footer-links">' +
                '<li><a href="' + root + 'public/auth/login.html">Subscriber Login</a></li>' +
                '<li><a href="' + root + 'public/auth/signup.html">Create Account</a></li>' +
                '<li><a href="' + root + 'public/auth/user/user-dashboard.html">User Dashboard</a></li>' +
                '<li><a href="' + root + 'public/auth/admin/admin-dashboard.html">Admin Dashboard</a></li>' +
                '<li><a href="' + root + 'public/pages/coming-soon.html">Coming Soon</a></li>' +
              '</ul>' +
            '</div>' +

            /* Newsletter */
            '<div class="newsletter-box">' +
              '<h4 class="footer-heading">Morning Journal</h4>' +
              '<p>Seasonal bloom previews, flower-care notes and 10% off your first order.</p>' +
              '<form class="newsletter-form" id="footer-newsletter-form" data-validate="newsletter" novalidate>' +
                '<input type="email" name="email" placeholder="Your email address..." aria-label="Email address" required>' +
                '<button type="submit" class="btn btn-pink btn-sm">Join</button>' +
              '</form>' +
              '<div class="form-success" data-success-slot style="margin-top: 12px; font-size: 0.8125rem;"></div>' +
            '</div>' +
          '</div>' +

          '<div class="footer-bottom">' +
            '<div>&copy; 2026 Garden Dreams Studio. All blooms thoughtfully hand-arranged.</div>' +
            '<div class="footer-legal">' +
              '<a href="' + root + 'public/pages/Privacy-policy.html">Privacy Policy</a>' +
              '<a href="' + root + 'public/pages/Terms-of-service.html">Terms of Service</a>' +
              '<a href="' + root + 'public/pages/404.html">Sitemap</a>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</footer>';

    slot.outerHTML = html;
  }

  buildFooter();
})();
