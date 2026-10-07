/**
 * GARDEN DREAMS • Blog details — dynamic article by ?id=
 * Reads the query string, loads the correct post and renders it.
 */
(function () {
  function param(name) {
    var m = new RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    return m ? decodeURIComponent(m[1].replace(/\+/g, ' ')) : null;
  }

  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function blocks(content) {
    return content.map(function (b) {
      if (b.t === 'p') return '<p>' + esc(b.v) + '</p>';
      if (b.t === 'h2') return '<h2>' + esc(b.v) + '</h2>';
      if (b.t === 'h3') return '<h3>' + esc(b.v) + '</h3>';
      if (b.t === 'quote') return '<blockquote>' + esc(b.v) + '</blockquote>';
      if (b.t === 'note') return '<div class="inline-note">' + esc(b.v) + '</div>';
      if (b.t === 'list') return '<ul>' + b.v.map(function (li) { return '<li>' + esc(li) + '</li>'; }).join('') + '</ul>';
      return '';
    }).join('');
  }

  function notFound() {
    var main = document.getElementById('article-root');
    if (!main) return;
    main.innerHTML =
      '<div class="empty-state">' +
        '<h3>Article not found</h3>' +
        '<p>The journal entry you are looking for may have been moved. Browse the full journal instead.</p>' +
        '<p style="margin-top:18px"><a class="btn btn-pink" href="blog.html">Back to the journal</a></p>' +
      '</div>';
    document.title = 'Article not found • Garden Dreams';
  }

  function render() {
    var id = param('id');
    var post = id ? window.GardenData.getPost(id) : null;
    if (!post) { notFound(); return; }

    document.title = post.title + ' • Garden Dreams Journal';

    /* --- Article column --- */
    var article = document.getElementById('article-content');
    article.innerHTML =
      '<div class="article-hero-media"><img src="' + post.image + '" alt="' + esc(post.title) + '"></div>' +
      '<div class="article-meta-row">' +
        '<span class="article-tag">' + post.category + '</span>' +
        '<span class="blog-card-meta" style="margin:0">' +
          '<span>' + post.date + '</span><span>' + post.readTime + '</span><span>By ' + post.author + '</span>' +
        '</span>' +
      '</div>' +
      '<h1 class="section-heading" style="font-size:clamp(1.8rem,3.4vw,2.7rem);margin-bottom:18px">' + esc(post.title) + '</h1>' +
      '<div class="article-body">' + blocks(post.content) + '</div>' +
      '<div class="tags-row"><span style="font-size:.7rem;letter-spacing:.16em;text-transform:uppercase;font-weight:800;color:var(--text-muted)">Tags</span>' +
        post.tags.map(function (t) { return '<a class="tag-chip" href="blog.html">' + esc(t) + '</a>'; }).join('') +
      '</div>' +
      '<div class="tags-row" style="border-top:none;padding-top:6px">' +
        '<span style="font-size:.7rem;letter-spacing:.16em;text-transform:uppercase;font-weight:800;color:var(--text-muted)">Share</span>' +
        '<div class="share-row">' +
          '<a href="#" aria-label="Share on Facebook"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>' +
          '<a href="#" aria-label="Share on X"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4l16 16M20 4L4 20"/></svg></a>' +
          '<a href="#" aria-label="Share on Pinterest"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="9" x2="12" y2="21"/><path d="M8 12a4 4 0 1 1 8 0c0 4-4 8-8 8"/></svg></a>' +
          '<a href="#" aria-label="Copy link" data-copy-link><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg></a>' +
        '</div>' +
      '</div>';

    /* --- Author box --- */
    document.getElementById('author-box').innerHTML =
      '<img src="' + post.authorAvatar + '" alt="' + esc(post.author) + '">' +
      '<div><h4>' + esc(post.author) + '</h4><div class="author-role">' + esc(post.authorRole) + '</div>' +
      '<p>Writes about seasonal floristry, grower relationships and the small details that make cut flowers last. Part of the Garden Dreams studio team since 2019.</p></div>';

    /* --- Sidebar categories --- */
    var cats = window.GardenData.postCategories();
    document.getElementById('widget-categories').innerHTML = cats.map(function (c) {
      var n = window.GardenData.posts.filter(function (p) { return p.category === c; }).length;
      return '<a href="blog.html"><span>' + c + '</span><span class="cat-count">' + n + '</span></a>';
    }).join('');

    /* --- Sidebar popular posts --- */
    var others = window.GardenData.posts.filter(function (p) { return p.id !== post.id; }).slice(0, 4);
    document.getElementById('widget-popular').innerHTML = others.map(function (p) {
      return '<a class="widget-post" href="blog-details.html?id=' + p.id + '">' +
        '<img src="' + p.image + '" alt="' + esc(p.title) + '">' +
        '<div><h4>' + esc(p.title) + '</h4><span>' + p.readTime + '</span></div></a>';
    }).join('');

    /* --- Related posts --- */
    var related = (post.related || []).map(function (rid) { return window.GardenData.getPost(rid); }).filter(Boolean);
    if (related.length === 0) related = others.slice(0, 3);
    document.getElementById('related-grid').innerHTML = related.map(function (p) {
      return '<article class="blog-card">' +
        '<a class="blog-card-media" href="blog-details.html?id=' + p.id + '">' +
          '<span class="blog-cat-badge">' + p.category + '</span>' +
          '<img src="' + p.image + '" alt="' + esc(p.title) + '" loading="lazy">' +
        '</a>' +
        '<div class="blog-card-body">' +
          '<div class="blog-card-meta"><span>' + p.date + '</span><span>' + p.readTime + '</span></div>' +
          '<h3><a href="blog-details.html?id=' + p.id + '">' + esc(p.title) + '</a></h3>' +
          '<p>' + esc(p.excerpt) + '</p>' +
          '<a class="blog-read-more" href="blog-details.html?id=' + p.id + '">Read article ' +
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>' +
          '</a>' +
        '</div></article>';
    }).join('');

    /* --- Breadcrumb title --- */
    var crumb = document.getElementById('crumb-current');
    if (crumb) crumb.textContent = post.title;

    /* --- Copy link --- */
    var copyBtn = article.querySelector('[data-copy-link]');
    if (copyBtn) {
      copyBtn.addEventListener('click', function (e) {
        e.preventDefault();
        if (navigator.clipboard) {
          navigator.clipboard.writeText(window.location.href).then(function () {
            showToast('Article link copied to clipboard!');
          });
        } else {
          showToast('Copy this URL from your address bar to share.');
        }
      });
    }

    /* --- Share buttons demo action --- */
    document.querySelectorAll('.share-row a:not([data-copy-link])').forEach(function (a) {
      a.addEventListener('click', function (e) {
        e.preventDefault();
        showToast('Share sheet opened — spread the blooms!');
      });
    });
  }

  document.addEventListener('DOMContentLoaded', render);
})();
