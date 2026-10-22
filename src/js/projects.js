/**
 * GARDEN DREAMS • Project portfolio
 * One data source renders both the /projects grid and the homepage
 * featured-project row. Filter buttons are driven by data-status.
 *
 * NOTE ON THE RECORDS: Garden Dreams has not yet supplied its own
 * project archive. The entries below are structured CONCEPT RECORDS that
 * demonstrate the format we document work in. The photography is
 * representative garden imagery, labelled as such on the page — it is not
 * photography of our own completed projects.
 */
(function () {
  var PROJECTS = [
    {
      id: 'riverside-courtyard',
      title: 'Riverside Courtyard Renewal',
      status: 'Completed',
      category: 'Design & Planning',
      location: 'Riverside District',
      year: '2026',
      image: 'https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&w=900&q=80',
      alt: 'Established green planting across a sheltered courtyard garden',
      summary: 'A walled courtyard behind a 1930s house, redrawn as a four-season outdoor room with seating, screening and edible planting.',
      scope: ['Measured site survey and level mapping', 'Layout with seating terrace and circulation', 'Screening and structure planting', 'Seasonal bed scheme across four borders']
    },
    {
      id: 'alder-lane-studio-garden',
      title: 'Alder Lane Studio Garden',
      status: 'Completed',
      category: 'Planting',
      location: 'Riverside District',
      year: '2026',
      image: 'https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?auto=format&fit=crop&w=900&q=80',
      alt: 'Dense green planting filling a sheltered garden bed',
      summary: 'The planting scheme around our own studio: a low, layered palette that keeps colour and structure from January to December.',
      scope: ['Soil improvement across the whole frontage', 'Evergreen structure and multi-stem specimens', 'Long-season perennials and grasses', 'Dripline irrigation on two zones']
    },
    {
      id: 'terraced-hillside-planting',
      title: 'Terraced Hillside Planting',
      status: 'Completed',
      category: 'Planting',
      location: 'Hillside',
      year: '2025',
      image: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=900&q=80',
      alt: 'Open grassy hillside planting in soft evening light',
      summary: 'A steep plot replanted with low-maintenance species that hold the slope, survive the wind and need the least water.',
      scope: ['Slope assessment and erosion risk', 'Terrace planting across three levels', 'Drought-tolerant species selection', 'Annual cut-back programme']
    },
    {
      id: 'walled-herb-kitchen',
      title: 'Walled Herb Kitchen',
      status: 'Completed',
      category: 'Design & Planning',
      location: 'Riverside District',
      year: '2025',
      image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=900&q=80',
      alt: 'Narrow garden path running beside a planted border',
      summary: 'A walled kitchen garden planned for maximum yield in a very small footprint — raised beds, espalier and vertical growing.',
      scope: ['Raised bed layout and access planning', 'Espalier and vertical growing scheme', 'Herbs, soft fruit and cut flowers', 'Compost and watering points']
    },
    {
      id: 'rain-garden-swale',
      title: 'Rain Garden & Swale',
      status: 'Ongoing',
      category: 'Irrigation & Drainage',
      location: 'Riverside District',
      year: '2026',
      image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=900&q=80',
      alt: 'Grass and meadow planting holding rainwater in an open basin',
      summary: 'Redirecting roof and path runoff into a planted basin, replacing hard drainage with a garden that holds water on site.',
      scope: ['Runoff survey and level design', 'Shallow basin and planted swale', 'Overflow route to the existing system', 'First-year monitoring']
    },
    {
      id: 'woodland-edge-restoration',
      title: 'Woodland Edge Restoration',
      status: 'Ongoing',
      category: 'Landscape Build',
      location: 'Woodland Edge',
      year: '2026',
      image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=900&q=80',
      alt: 'Deep green woodland planting in low light',
      summary: 'Clearing invasive growth from a neglected boundary and replanting it with native shrubs and ground cover.',
      scope: ['Clearance and selective removal', 'Native shrub and ground cover planting', 'Deadwood habitat retained', 'Three-year establishment programme']
    },
    {
      id: 'entry-path-hardscape',
      title: 'Entry Path & Steps',
      status: 'Ongoing',
      category: 'Hardscape',
      location: 'Riverside District',
      year: '2025',
      image: 'https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=900&q=80',
      alt: 'Stone setts forming a garden path and steps',
      summary: 'A muddy approach rebuilt as a properly drained stone path, with steps cut to the fall of the land.',
      scope: ['Groundworks and sub-base', 'Drainage falls designed from the survey', 'Natural stone path and steps', 'Edging detail and planting handover']
    },
    {
      id: 'terrace-dining-deck',
      title: 'Terrace Dining Deck',
      status: 'Upcoming',
      category: 'Hardscape',
      location: 'Riverside District',
      year: '2026',
      image: 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&w=900&q=80',
      alt: 'Warm timber decking in a sheltered garden corner',
      summary: 'A raised dining terrace on a sloping plot, with a pergola, planters and lighting set into the build.',
      scope: ['Structural terrace design', 'Retaining and level changes', 'Timber surface and pergola', 'Integrated lighting groundwork']
    },
    {
      id: 'perimeter-hedge-screening',
      title: 'Perimeter Hedge Screening',
      status: 'Upcoming',
      category: 'Planting',
      location: 'Riverside District',
      year: '2026',
      image: 'https://images.unsplash.com/photo-1444392061186-9fc38f84f726?auto=format&fit=crop&w=900&q=80',
      alt: 'Tall yellow-green hedging screening a garden boundary',
      summary: 'Year-round screening on three boundaries, using mixed species so no pest or disease can take the whole hedge.',
      scope: ['Boundary survey and soil testing', 'Mixed evergreen and deciduous hedge', 'Rabbit and gap protection', 'Three-year shaping programme']
    },
    {
      id: 'seasonal-planting-programme',
      title: 'Four-Season Planting Programme',
      status: 'Upcoming',
      category: 'Seasonal Care',
      location: 'Riverside District',
      year: '2026',
      image: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=900&q=80',
      alt: 'Broad green leaves catching light in a shaded planting',
      summary: 'A rolling programme that swaps the seasonal bedding four times a year while the structural planting stays put.',
      scope: ['Spring and summer bedding scheme', 'Autumn bulb and seed sowing', 'Winter structure and cut-back', 'Quarterly written garden report']
    }
  ];

  var STATUSES = ['All', 'Completed', 'Ongoing', 'Upcoming'];

  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function card(p) {
    return '' +
      '<article class="project-card">' +
        '<div class="project-card-media">' +
          '<img src="' + p.image + '" alt="' + esc(p.alt) + '" loading="lazy">' +
          '<span class="project-status status-' + p.status.toLowerCase() + '">' + p.status + '</span>' +
          '<span class="project-record">Concept record</span>' +
        '</div>' +
        '<div class="project-card-body">' +
          '<p class="project-meta"><span>' + esc(p.location) + '</span><span>' + p.year + '</span><span>' + esc(p.category) + '</span></p>' +
          '<h3>' + esc(p.title) + '</h3>' +
          '<p class="project-summary">' + esc(p.summary) + '</p>' +
          '<details class="project-details">' +
            '<summary>Scope of work</summary>' +
            '<ul>' + p.scope.map(function (s) { return '<li>' + esc(s) + '</li>'; }).join('') + '</ul>' +
          '</details>' +
        '</div>' +
      '</article>';
  }

  function featuredCard(p, base) {
    return '' +
      '<article class="project-card project-card-featured">' +
        '<div class="project-card-media">' +
          '<img src="' + p.image + '" alt="' + esc(p.alt) + '" loading="lazy">' +
          '<span class="project-status status-' + p.status.toLowerCase() + '">' + p.status + '</span>' +
          '<span class="project-record">Concept record</span>' +
        '</div>' +
        '<div class="project-card-body">' +
          '<p class="project-meta"><span>' + esc(p.location) + '</span><span>' + p.year + '</span></p>' +
          '<h3>' + esc(p.title) + '</h3>' +
          '<p class="project-summary">' + esc(p.summary) + '</p>' +
          '<a class="btn-arrow" href="' + base + '">View the portfolio' +
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>' +
          '</a>' +
        '</div>' +
      '</article>';
  }

  function renderProjects() {
    var grid = document.getElementById('projects-grid');
    if (!grid) return;

    var state = grid.getAttribute('data-status') || 'All';
    var list = PROJECTS.filter(function (p) {
      return state === 'All' || p.status === state;
    });

    grid.innerHTML = list.length
      ? list.map(card).join('')
      : '<div class="empty-state"><h3>No projects in this stage yet</h3><p>Choose another filter above.</p></div>';

    var count = document.getElementById('projects-count');
    if (count) count.textContent = 'Showing ' + list.length + ' of ' + PROJECTS.length + ' project records';

    var filters = document.getElementById('projects-filters');
    if (filters && !filters.dataset.bound) {
      filters.dataset.bound = '1';
      filters.innerHTML = STATUSES.map(function (s) {
        var n = s === 'All' ? PROJECTS.length : PROJECTS.filter(function (p) { return p.status === s; }).length;
        return '<button class="filter-pill' + (s === state ? ' active' : '') + '" data-status="' + s + '">' + s + ' (' + n + ')</button>';
      }).join('');

      filters.addEventListener('click', function (e) {
        var btn = e.target.closest('.filter-pill');
        if (!btn) return;
        var next = btn.getAttribute('data-status');
        grid.setAttribute('data-status', next);
        filters.querySelectorAll('.filter-pill').forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        renderProjects();
        if (typeof showToast === 'function') {
          showToast(next === 'All' ? 'Showing every project record' : 'Showing ' + next.toLowerCase() + ' project records');
        }
      });
    }
  }

  function renderFeatured() {
    var grid = document.getElementById('featured-projects');
    if (!grid) return;
    var base = grid.getAttribute('data-base') || 'public/pages/projects.html';
    var picks = ['riverside-courtyard', 'alder-lane-studio-garden', 'terrace-dining-deck'];
    var list = picks.map(function (id) {
      for (var i = 0; i < PROJECTS.length; i++) if (PROJECTS[i].id === id) return PROJECTS[i];
      return null;
    }).filter(Boolean);
    grid.innerHTML = list.map(function (p) { return featuredCard(p, base); }).join('');
  }

  document.addEventListener('DOMContentLoaded', function () {
    renderProjects();
    renderFeatured();
  });

  window.GardenProjects = {
    projects: PROJECTS,
    statuses: STATUSES
  };
})();
