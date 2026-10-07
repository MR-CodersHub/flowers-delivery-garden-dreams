/**
 * GARDEN DREAMS • Blog list — client-side search + category filter
 * Renders cards from GardenData.posts into #blog-grid.
 */
(function () {
  var state = { query: '', category: 'All' };

  function icon(name) {
    var i = {
      calendar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',
      clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
      user: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
      arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>',
      search: '<svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',
      flower: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 2a4 4 0 0 0 0 8 4 4 0 0 0 0 8 4 4 0 0 0 0-8 4 4 0 0 0 0-8z"/></svg>'
    };
    return i[name] || '';
  }

  function card(post) {
    return '' +
      '<article class="blog-card" data-id="' + post.id + '">' +
        '<a class="blog-card-media" href="blog-details.html?id=' + post.id + '">' +
          '<span class="blog-cat-badge">' + post.category + '</span>' +
          '<img src="' + post.image + '" alt="' + post.title + '" loading="lazy">' +
        '</a>' +
        '<div class="blog-card-body">' +
          '<div class="blog-card-meta">' +
            '<span>' + icon('calendar') + ' ' + post.date + '</span>' +
            '<span>' + icon('clock') + ' ' + post.readTime + '</span>' +
          '</div>' +
          '<h3><a href="blog-details.html?id=' + post.id + '">' + post.title + '</a></h3>' +
          '<p>' + post.excerpt + '</p>' +
          '<a class="blog-read-more" href="blog-details.html?id=' + post.id + '">Read article ' + icon('arrow') + '</a>' +
        '</div>' +
      '</article>';
  }

  function matches(post) {
    var q = state.query.toLowerCase();
    var catOk = state.category === 'All' || post.category === state.category;
    if (!catOk) return false;
    if (!q) return true;
    var hay = (post.title + ' ' + post.excerpt + ' ' + post.category + ' ' + post.tags.join(' ') + ' ' + post.author).toLowerCase();
    return hay.indexOf(q) !== -1;
  }

  function render() {
    var grid = document.getElementById('blog-grid');
    var count = document.getElementById('blog-result-count');
    if (!grid) return;

    var results = window.GardenData.posts.filter(matches);

    if (results.length === 0) {
      grid.innerHTML =
        '<div class="empty-state">' +
          icon('flower') +
          '<h3>No articles match your search</h3>' +
          '<p>Try a different keyword, or clear the filters to browse the whole journal.</p>' +
        '</div>';
    } else {
      grid.innerHTML = results.map(card).join('');
    }

    if (count) {
      count.textContent = 'Showing ' + results.length + ' of ' + window.GardenData.posts.length + ' articles' +
        (state.category !== 'All' ? ' in "' + state.category + '"' : '') +
        (state.query ? ' for "' + state.query + '"' : '');
    }
  }

  function renderPills() {
    var wrap = document.getElementById('blog-filters');
    if (!wrap) return;
    var cats = ['All'].concat(window.GardenData.postCategories());
    wrap.innerHTML = cats.map(function (c) {
      var n = c === 'All' ? window.GardenData.posts.length : window.GardenData.posts.filter(function (p) { return p.category === c; }).length;
      return '<button class="filter-pill' + (c === state.category ? ' active' : '') + '" data-category="' + c + '">' + c + ' (' + n + ')</button>';
    }).join('');

    if (wrap.getAttribute('data-bound') === '1') return;
    wrap.setAttribute('data-bound', '1');
    wrap.addEventListener('click', function (e) {
      var btn = e.target.closest('.filter-pill');
      if (!btn) return;
      state.category = btn.getAttribute('data-category');
      wrap.querySelectorAll('.filter-pill').forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      render();
    });
  }

  function renderFeatured() {
    var el = document.getElementById('featured-post');
    if (!el) return;
    var p = window.GardenData.posts[0];
    el.innerHTML =
      '<a class="featured-post-media" href="blog-details.html?id=' + p.id + '">' +
        '<img src="' + p.image + '" alt="' + p.title + '">' +
      '</a>' +
      '<div class="featured-post-body">' +
        '<span class="featured-flag">✦ Editor\'s pick</span>' +
        '<div class="blog-card-meta"><span>' + icon('calendar') + ' ' + p.date + '</span><span>' + icon('clock') + ' ' + p.readTime + '</span><span>' + icon('user') + ' ' + p.author + '</span></div>' +
        '<h2>' + p.title + '</h2>' +
        '<p>' + p.excerpt + '</p>' +
        '<div><a class="btn btn-pink" href="blog-details.html?id=' + p.id + '">Read the article</a></div>' +
      '</div>';
  }

  document.addEventListener('DOMContentLoaded', function () {
    if (!document.getElementById('blog-grid')) return;

    /* Deep link support: blog.html?q=seasonal */
    var deep = new RegExp('[?&]q=([^&]*)').exec(window.location.search);
    if (deep) {
      state.query = decodeURIComponent(deep[1].replace(/\+/g, ' '));
      var pre = document.getElementById('blog-search');
      if (pre) pre.value = state.query;
    }

    renderFeatured();
    renderPills();
    render();

    var search = document.getElementById('blog-search');
    if (search) {
      search.addEventListener('input', function () {
        state.query = search.value.trim();
        render();
      });
      search.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') { search.value = ''; state.query = ''; render(); }
      });
    }

    var clear = document.getElementById('blog-clear');
    if (clear) {
      clear.addEventListener('click', function () {
        state.query = '';
        state.category = 'All';
        var s = document.getElementById('blog-search');
        if (s) s.value = '';
        renderPills();
        render();
        showToast('Filters cleared — showing every article.');
      });
    }
  });
})();
