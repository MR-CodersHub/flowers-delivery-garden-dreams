/**
 * GARDEN DREAMS • Services listing — grid + category filter
 * Every card links to service-details.html?id=<service-id>
 */
(function () {
  var state = { category: 'All' };

  var ICONS = {
    calendar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',
    heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>',
    briefcase: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>',
    truck: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>',
    gift: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>',
    sparkles: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l1.9 4.6L18.5 9.5l-4.6 1.9L12 16l-1.9-4.6L5.5 9.5l4.6-1.9L12 3z"/><path d="M19 15l.9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9L19 15z"/></svg>',
    clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
    star: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>',
    flower: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><circle cx="12" cy="12" r="3"/><path d="M12 2a4 4 0 0 0 0 8 4 4 0 0 0 0 8 4 4 0 0 0 0-8 4 4 0 0 0 0-8z"/></svg>'
  };

  function card(s) {
    return '' +
      '<article class="service-card">' +
        '<a class="service-card-media" href="service-details.html?id=' + s.id + '">' +
          '<span class="service-card-price">' + s.price + '</span>' +
          '<img src="' + s.image + '" alt="' + s.title + '" loading="lazy">' +
        '</a>' +
        '<div class="service-card-icon">' + (ICONS[s.icon] || ICONS.flower) + '</div>' +
        '<div class="service-card-body">' +
          '<span class="service-tag">' + s.tag + '</span>' +
          '<h3><a href="service-details.html?id=' + s.id + '">' + s.title + '</a></h3>' +
          '<p>' + s.excerpt + '</p>' +
          '<div class="service-card-meta">' +
            '<span class="meta-item">' + ICONS.clock + ' ' + s.duration + '</span>' +
            '<a class="service-card-link" href="service-details.html?id=' + s.id + '">Details ' + ICONS.arrow + '</a>' +
          '</div>' +
        '</div>' +
      '</article>';
  }

  function render() {
    var grid = document.getElementById('services-grid');
    if (!grid) return;

    var list = window.GardenData.services.filter(function (s) {
      return state.category === 'All' || s.tag === state.category;
    });

    grid.innerHTML = list.length
      ? list.map(card).join('')
      : '<div class="empty-state">' + ICONS.flower + '<h3>No services in this category yet</h3><p>Choose another category above.</p></div>';

    var count = document.getElementById('services-count');
    if (count) count.textContent = 'Showing ' + list.length + ' of ' + window.GardenData.services.length + ' services';
  }

  function renderFilters() {
    var wrap = document.getElementById('services-filters');
    if (!wrap) return;
    var cats = ['All'].concat(window.GardenData.serviceCategories());
    wrap.innerHTML = cats.map(function (c) {
      var n = c === 'All' ? window.GardenData.services.length : window.GardenData.services.filter(function (s) { return s.tag === c; }).length;
      return '<button class="filter-pill' + (c === state.category ? ' active' : '') + '" data-category="' + c + '">' + c + ' (' + n + ')</button>';
    }).join('');

    wrap.addEventListener('click', function (e) {
      var btn = e.target.closest('.filter-pill');
      if (!btn) return;
      state.category = btn.getAttribute('data-category');
      wrap.querySelectorAll('.filter-pill').forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      render();
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    if (!document.getElementById('services-grid')) return;
    renderFilters();
    render();
  });

  window.ServiceCardIcons = ICONS;
})();
