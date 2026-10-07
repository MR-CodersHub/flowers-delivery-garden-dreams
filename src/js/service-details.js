/**
 * GARDEN DREAMS • Service details — dynamic page by ?id=
 * service-details.html?id=seasonal-subscription → loads the matching service.
 */
(function () {
  function param(name) {
    var m = new RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    return m ? decodeURIComponent(m[1].replace(/\+/g, ' ')) : null;
  }

  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  var check = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>';

  function notFound() {
    var root = document.getElementById('service-detail-root');
    if (!root) return;
    root.innerHTML =
      '<div class="empty-state">' +
        '<h3>Service not found</h3>' +
        '<p>That service may have been renamed or retired. Browse everything we offer instead.</p>' +
        '<p style="margin-top:18px"><a class="btn btn-pink" href="services.html">All services</a></p>' +
      '</div>';
    document.title = 'Service not found • Garden Dreams';
  }

  function render() {
    var id = param('id');
    var s = id ? window.GardenData.getService(id) : null;
    if (!s) { notFound(); return; }

    document.title = s.title + ' • Garden Dreams';

    /* ---------- HERO ---------- */
    var crumb = document.getElementById('crumb-current');
    if (crumb) crumb.textContent = s.title;
    document.getElementById('svc-title').textContent = s.title;
    document.getElementById('svc-excerpt').textContent = s.excerpt;
    document.getElementById('svc-price').textContent = s.price;
    document.getElementById('svc-duration').textContent = s.duration;
    document.getElementById('svc-rating').textContent = s.rating;
    document.getElementById('svc-tag').textContent = s.tag;
    var heroImg = document.getElementById('svc-hero-image');
    if (heroImg) { heroImg.src = s.image; heroImg.alt = s.title; }

    /* ---------- OVERVIEW ---------- */
    document.getElementById('svc-description').innerHTML = s.description.map(function (p) {
      return '<p>' + esc(p) + '</p>';
    }).join('');

    document.getElementById('svc-features').innerHTML = s.features.map(function (f) {
      return '<li>' + check + '<span>' + esc(f) + '</span></li>';
    }).join('');

    /* ---------- GALLERY ---------- */
    document.getElementById('svc-gallery').innerHTML = s.gallery.map(function (img, i) {
      return '<div class="media-frame" style="height:' + (i === 0 ? '340' : '163') + 'px">' +
        '<img src="' + img + '" alt="' + esc(s.title) + ' example ' + (i + 1) + '" loading="lazy"></div>';
    }).join('');

    /* ---------- PRICING TIERS ---------- */
    document.getElementById('svc-pricing').innerHTML = s.pricing.map(function (tier) {
      return '<div class="price-card' + (tier.popular ? ' popular' : '') + '">' +
        (tier.popular ? '<span class="popular-ribbon">Most popular</span>' : '') +
        '<div class="plan-name">' + esc(tier.name) + '</div>' +
        '<div class="plan-blurb">' + esc(tier.blurb) + '</div>' +
        '<div class="price-amount"><span class="amount">' + tier.price + '</span><span class="period">' + esc(tier.period) + '</span></div>' +
        '<div class="price-billed">' + (tier.popular ? 'Best value' : '&nbsp;') + '</div>' +
        '<ul class="plan-features">' +
          tier.features.map(function (f) { return '<li>' + check + '<span>' + esc(f) + '</span></li>'; }).join('') +
        '</ul>' +
        '<button class="btn ' + (tier.popular ? 'btn-pink' : 'btn-outline') + ' btn-block js-enquire" data-plan="' + esc(tier.name) + '">' + esc(tier.cta) + '</button>' +
      '</div>';
    }).join('');

    /* ---------- FAQ ---------- */
    document.getElementById('svc-faq').innerHTML = s.faqs.map(function (f, i) {
      return '<div class="faq-item' + (i === 0 ? ' active' : '') + '">' +
        '<button class="faq-question" aria-expanded="' + (i === 0 ? 'true' : 'false') + '">' +
          '<span>' + esc(f.q) + '</span><span class="faq-q-icon"></span>' +
        '</button>' +
        '<div class="faq-answer"' + (i === 0 ? ' style="max-height:600px"' : '') + '>' +
          '<div class="faq-answer-inner">' + esc(f.a) + '</div>' +
        '</div>' +
      '</div>';
    }).join('');
    document.getElementById('svc-faq').setAttribute('data-single', '1');

    /* ---------- RELATED ---------- */
    var related = (s.related || []).map(function (rid) { return window.GardenData.getService(rid); }).filter(Boolean);
    document.getElementById('svc-related').innerHTML = related.map(function (r) {
      return '<a class="info-card" href="service-details.html?id=' + r.id + '">' +
        '<div class="info-icon">' + (window.ServiceCardIcons[r.icon] || window.ServiceCardIcons.flower) + '</div>' +
        '<div><h3>' + esc(r.title) + '</h3><p>' + esc(r.excerpt.slice(0, 96)) + '…</p>' +
        '<span class="service-card-link" style="margin-top:10px;display:inline-flex">View service ' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>' +
        '</span></div></a>';
    }).join('');

    /* ---------- CTA ---------- */
    var ctaTitle = document.getElementById('svc-cta-title');
    if (ctaTitle) ctaTitle.textContent = 'Ready to start with ' + s.shortTitle + '?';

    /* ---------- Enquire buttons ---------- */
    document.addEventListener('click', function (e) {
      var btn = e.target.closest('.js-enquire');
      if (!btn) return;
      showToast('Plan "' + btn.getAttribute('data-plan') + '" selected — our team will confirm availability by email.');
    });
  }

  document.addEventListener('DOMContentLoaded', render);
})();
