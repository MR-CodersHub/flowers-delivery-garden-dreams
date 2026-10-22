/**
 * GARDEN DREAMS • Services listing — grid + category filter
 * Every card links to service-details.html?id=<service-id>
 */
(function () {
  var state = { category: 'All' };

  var ICONS = {
    compass:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><polygon points="16 8 10 10 8 16 14 14 16 8"/></svg>',
    tools:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 3.5a4 4 0 0 0 5 5L21 7l-4-4-2.5 2.5z"/><path d="M13 8 3 18l3 3 10-10"/><path d="M6 21h9"/></svg>',
    leaf:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20c0-8 6-14 16-15 0 10-5 15-12 15H4z"/><path d="M9 15c2-3 5-5 9-6"/></svg>',
    patio:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M3 15h18M9 3v18M15 3v18"/></svg>',
    droplet:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3s6 6.2 6 10.2A6 6 0 0 1 6 13.2C6 9.2 12 3 12 3z"/></svg>',
    calendar:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',
    clock:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15.5 14"/></svg>',
    arrow:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>',
    sprout:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21v-8"/><path d="M12 13c0-4 3-7 8-7 0 5-3 8-8 8z"/><path d="M12 13C12 9 9 6 4 6c0 5 3 8 8 7z"/></svg>'
  };

  function card(s, base) {
    return '' +
      '<article class="service-card">' +
        '<a class="service-card-media" href="' + base + '?id=' + s.id + '" aria-label="' + s.title + '">' +
          '<span class="service-card-price">' + s.price + '</span>' +
          '<img src="' + s.image + '" alt="' + s.title + '" loading="lazy">' +
        '</a>'  +
        '<div class="service-card-body">' +
          '<span class="service-tag">' + s.tag + '</span>' +
          '<h3><a href="' + base + '?id=' + s.id + '">' + s.title + '</a></h3>' +
          '<p>' + s.excerpt + '</p>' +
          '<div class="service-card-meta">' +
            '<span class="meta-item">' + ICONS.clock + ' ' + s.duration + '</span>' +
            '<a class="service-card-link" href="' + base + '?id=' + s.id + '">Details ' + ICONS.arrow + '</a>' +
          '</div>' +
        '</div>' +
      '</article>';
  }

  function render() {
    var grid = document.getElementById('services-grid');
    if (!grid) return;

    var base = grid.getAttribute('data-base') || 'service-details.html';

    var list = window.GardenData.services.filter(function (s) {
      return state.category === 'All' || s.tag === state.category;
    });

    grid.innerHTML = list.length
      ? list.map(function (s) { return card(s, base); }).join('')
      : '<div class="empty-state">' + ICONS.sprout + '<h3>No services in this category yet</h3><p>Choose another category above.</p></div>';

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
