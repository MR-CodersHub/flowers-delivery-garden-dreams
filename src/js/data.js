/**
 * GARDEN DREAMS • Content Data Store
 * Single source of truth for services & journal articles.
 * service-details.html?id=... and blog-details.html?id=... read from here.
 */
(function () {
  var SERVICES = [
    {
      id: 'garden-design-planning',
      title: 'Garden Design & Planning',
      shortTitle: 'Design & Planning',
      tag: 'Design',
      icon: 'compass',
      price: 'Quoted per site',
      duration: '2–6 weeks',
      highlight: 'Since 2019',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80',
        'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=900&q=80',
        'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=900&q=80'
      ],
      excerpt: 'A surveyed layout, planting plan and material schedule drawn around your light, your soil and the way you actually live in the garden.',
      description: [
        'Every project starts on paper before a single plant is lifted. We survey the plot — light, drainage, soil, existing trees and the sightlines you care about — then draw a plan that shows how the garden will work in each season.',
        'You get one drawing to react to, not a wall of options: a scaled layout, a planting schedule with the exact cultivars we intend to use, and a materials list with quantities. Changes are made in the drawing, where they are cheap, rather than on site, where they are not.'
      ],
      features: [
        'Full site survey covering light, slope, drainage and soil',
        'Scaled layout drawn for the way you use the space',
        'Planting schedule with named cultivars and quantities',
        'Materials list with quantities and finish options',
        'One revision round before anything is quoted',
        'Seasonal planting window confirmed before you sign'
      ],
      pricing: [
        { name: 'Site survey', price: 'Quote', period: 'per site', blurb: 'A measured visit with notes on light, soil and what is worth keeping.', features: ['On-site measurement', 'Light and drainage notes', 'Existing tree survey', 'Written summary'], cta: 'Book a survey' },
        { name: 'Design package', price: 'Quote', period: 'per site', blurb: 'The full drawn plan, ready to build from.', features: ['Everything in the site survey', 'Scaled layout drawing', 'Planting schedule', 'Materials list', 'One revision round'], cta: 'Request a design', popular: true },
        { name: 'Design & build', price: 'Quote', period: 'per site', blurb: 'Design, build and planting handled end to end by one team.', features: ['Everything in the design package', 'Groundworks and hardscape', 'Planting and aftercare', 'Seasonal check-ins for a year'], cta: 'Scope a project' }
      ],
      faqs: [
        { q: 'How long does a design take?', a: 'Most garden plans are issued within two to six weeks of the survey, depending on the size of the site and how much hard landscaping it involves. Planting-only projects move faster.' },
        { q: 'Do you work from my existing plans?', a: 'Yes. If you already have a layout from a landscape architect or a previous project, we can build from it, price it and advise where the planting could be improved.' },
        { q: 'What happens if I only want planting?', a: 'That is a perfectly normal project. We can design a planting plan for the beds and borders you already have, without touching paths or structures.' },
        { q: 'Do you include planting for a year?', a: 'Every build includes a settling period where we return to check establishment, replace anything that has not taken and adjust irrigation for the season.' }
      ],
      related: ['landscape-build', 'planting-soft-landscaping', 'hardscape-outdoor-living']
    },
    {
      id: 'landscape-build',
      title: 'Landscape Installation & Build',
      shortTitle: 'Landscape Build',
      tag: 'Build',
      icon: 'tools',
      price: 'Quoted per site',
      duration: '1–6 weeks on site',
      highlight: '12 partner nurseries',
      image: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=900&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=900&q=80',
        'https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=900&q=80',
        'https://images.unsplash.com/photo-1602523961358-f9f03dd557db?auto=format&fit=crop&w=900&q=80'
      ],
      excerpt: 'Groundworks, structures and planting put in by the same crew that drew the plan — with the site kept clean and the schedule kept honest.',
      description: [
        'A build is where a drawing becomes a place. Our own crew handles the groundworks, drainage, structures, edging and planting rather than subcontracting each trade and hoping they talk to each other.',
        'You get a written schedule before we start, a single point of contact on site, and the same crew returning for the settling visits. Materials arrive from our partner nurseries, sorted by the plan, and the site is cleared as we go.'
      ],
      features: [
        'Groundworks, levels and drainage prepared in-house',
        'Structures, edging and paving laid by our own crew',
        'Materials sourced directly from 12 partner nurseries',
        'Written build schedule issued before we start',
        'Site cleared and levelled as each phase completes',
        'Settling visits and replacement planting included'
      ],
      pricing: [
        { name: 'Groundworks', price: 'Quote', period: 'per site', blurb: 'Preparation, levels and drainage ready for planting.', features: ['Site clearance', 'Levels and drainage', 'Sub-base preparation', 'Edge preparation'], cta: 'Scope groundworks' },
        { name: 'Full build', price: 'Quote', period: 'per site', blurb: 'The complete build from bare ground to planted garden.', features: ['Everything in groundworks', 'Structures and hardscape', 'Planting and mulching', 'Settling visits', 'Written schedule'], cta: 'Scope a build', popular: true },
        { name: 'Build & care', price: 'Quote', period: 'per site', blurb: 'The build plus a year of seasonal care and pruning.', features: ['Everything in the full build', 'Seasonal visits', 'Pruning and cut-back', 'Irrigation checks', 'Plant replacements'], cta: 'Discuss ongoing care' }
      ],
      faqs: [
        { q: 'How long does a build take?', a: 'A small planting-only build is usually a matter of days. A full garden with terraces, retaining work and irrigation typically runs one to six weeks on site.' },
        { q: 'Can we stay in the property while you work?', a: 'Yes. We work around occupied homes and keep noisy operations to agreed hours, with access arranged with you in advance.' },
        { q: 'Who buys the plants and materials?', a: 'We do, through our partner nurseries. That means the cultivars in the plan are the cultivars that arrive, and any substitution is agreed with you first.' },
        { q: 'Do you handle waste removal?', a: 'Yes. Green waste and packaging are removed from site as part of the build, and the site is left swept and level.' }
      ],
      related: ['garden-design-planning', 'planting-soft-landscaping', 'seasonal-care-maintenance']
    },
    {
      id: 'planting-soft-landscaping',
      title: 'Planting & Soft Landscaping',
      shortTitle: 'Planting',
      tag: 'Planting',
      icon: 'leaf',
      price: 'Quoted per site',
      duration: 'Seasonal',
      highlight: 'Grown within 90 miles',
      image: 'https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?auto=format&fit=crop&w=900&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?auto=format&fit=crop&w=900&q=80',
        'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=900&q=80',
        'https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&w=900&q=80'
      ],
      excerpt: 'Beds, borders and meadow planting built around the local climate, the soil you actually have and the hours of sun the garden really gets.',
      description: [
        'Soft landscaping is where a plan becomes a garden that changes through the year. We choose plants that suit your soil type, your aspect and the amount of watering you are willing to do — then set them out at the spacing they need to look full in three seasons, not one.',
        'Everything is grown within 90 miles of the studio, which means species that already handle your winters and pests. We plant in the right window for each species, mulch properly, and water in the plants that need it until they are established.'
      ],
      features: [
        'Plants matched to soil type, aspect and sun hours',
        'Species grown within 90 miles of the studio',
        'Spacing set for maturity, so beds fill in properly',
        'Planted in the correct seasonal window',
        'Mulched, watered-in and staked where needed',
        'Replacement guarantee on establishment failure'
      ],
      pricing: [
        { name: 'Border refresh', price: 'Quote', period: 'per site', blurb: 'One or two beds replanted with the season in mind.', features: ['Bed preparation', 'Seasonal species', 'Mulching and feeding', 'Watering-in'], cta: 'Plan a refresh' },
        { name: 'Whole-garden planting', price: 'Quote', period: 'per site', blurb: 'Every bed and border replanted from the drawing.', features: ['Soil improvement', 'Full planting schedule', 'Groundcover and shrubs', 'Mulching', 'Settling visits'], cta: 'Scope planting', popular: true },
        { name: 'Planting & meadow', price: 'Quote', period: 'per site', blurb: 'Formal planting with long-grass meadow edges.', features: ['Everything in whole-garden planting', 'Meadow strip design', 'Native wildflower plug planting', 'First-year mowing plan'], cta: 'Discuss meadow' }
      ],
      faqs: [
        { q: 'Will the garden look good straight away?', a: 'Planting reads thin for the first season and then fills properly. We space plants for maturity, so the space between them closes over as they establish rather than leaving gaps you have to fill later.' },
        { q: 'Do you guarantee the plants?', a: 'Yes. We replace anything that fails to establish within the first growing season at no extra cost, provided the site has been watered as advised.' },
        { q: 'Can you plant low-maintenance varieties?', a: 'Yes, and we recommend them where the site allows. Meadow-style planting, groundcover and drought-tolerant species cut the watering and mowing load considerably.' },
        { q: 'What about existing plants I want to keep?', a: 'We mark and protect them during the survey and work around mature trees and shrubs wherever it is safe to do so.' }
      ],
      related: ['garden-design-planning', 'seasonal-care-maintenance', 'irrigation-drainage']
    },
    {
      id: 'hardscape-outdoor-living',
      title: 'Hardscape & Outdoor Living',
      shortTitle: 'Hardscape',
      tag: 'Hardscape',
      icon: 'patio',
      price: 'Quoted per site',
      duration: '2–8 weeks on site',
      highlight: 'Paths, decks & terraces',
      image: 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&w=900&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&w=900&q=80',
        'https://images.unsplash.com/photo-1617098591651-dd95032bc8bb?auto=format&fit=crop&w=900&q=80',
        'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=80'
      ],
      excerpt: 'Paths, terraces, decks and retaining work built to the land — with drainage designed in from the start, not patched on afterwards.',
      description: [
        'Hardscape is the part of a garden you feel every single day, and the part that fails most often when it is treated as an afterthought. We design levels, falls and drainage before a single stone is ordered.',
        'Paths are set to the width you actually walk, terraces are built on levels that suit the ground rather than fighting it, and retaining work is engineered for the soil you have. Materials are chosen for how they weather in your climate, not how they look on a sample board.'
      ],
      features: [
        'Levels, falls and drainage designed before build',
        'Paths sized for real foot traffic',
        'Retaining and terracing built for local soil',
        'Materials selected for how they weather locally',
        'Edging detail that stops the lawn wandering',
        'Surfaced and jointed to shed water properly'
      ],
      pricing: [
        { name: 'Path & edging', price: 'Quote', period: 'per site', blurb: 'The circulation that makes a garden usable.', features: ['Route survey', 'Sub-base and drainage', 'Paving or gravel finish', 'Edging detail'], cta: 'Plan paths' },
        { name: 'Terrace & deck', price: 'Quote', period: 'per site', blurb: 'An outdoor room built on the land you have.', features: ['Structural design', 'Levels and retaining', 'Surface finish', 'Integrated drainage', 'Access steps'], cta: 'Scope a terrace', popular: true },
        { name: 'Full hardscape', price: 'Quote', period: 'per site', blurb: 'Paths, terrace, retaining and access planned as one scheme.', features: ['Everything in terrace & deck', 'Full circulation plan', 'Retaining throughout', 'Lighting groundwork', 'Planting handover'], cta: 'Scope hardscape' }
      ],
      faqs: [
        { q: 'Do you do building work as well as landscaping?', a: 'We handle landscape-scale hardscape — paths, terraces, decks, steps, low retaining walls and edging. Anything that needs a structural engineer or building regulation sign-off is planned with you and handed to a partner contractor we can brief.' },
        { q: 'How long does a terrace take?', a: 'Two to eight weeks depending on the ground, the levels involved and the weather window. We book earthworks and drainage around dry spells so the ground can actually take the load.' },
        { q: 'Can you work with existing paving?', a: 'Often, yes. We can lift and relay existing stone or brick, which usually looks better and costs less than starting again.' },
        { q: 'Will the surface stay level?', a: 'We set falls deliberately so water moves away from the house, and we compact and joint surfaces to stop them rocking. No surface is dead flat unless the design requires it.' }
      ],
      related: ['garden-design-planning', 'landscape-build', 'irrigation-drainage']
    },
    {
      id: 'seasonal-care-maintenance',
      title: 'Seasonal Care & Maintenance',
      shortTitle: 'Seasonal Care',
      tag: 'Care',
      icon: 'calendar',
      price: 'Quoted per season',
      duration: 'Visits through the year',
      highlight: 'Visits through all four seasons',
      image: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=900&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=900&q=80',
        'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=900&q=80',
        'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=900&q=80'
      ],
      excerpt: 'Pruning, cut-back, feeding, weeding and irrigation checks on a seasonal rhythm — so the garden keeps doing its job after we leave.',
      description: [
        'A garden is not finished on handover. Left alone, most planted schemes need a day of attention every few weeks and a proper cut-back twice a year to stay the shape you paid for.',
        'We offer care on a seasonal rhythm: a spring clear and feed, a summer tidy and irrigation check, an autumn cut-back and leaf clearance, and a winter prune. The same people who built the garden come back to keep it.'
      ],
      features: [
        'Four seasonal visits as standard',
        'Pruning and cut-back to the agreed scheme',
        'Feeding and mulching on the right cycle',
        'Irrigation checks and adjustments',
        'Weeding and leaf clearance',
        'Same crew who built the garden'
      ],
      pricing: [
        { name: 'Seasonal tidy', price: 'Quote', period: 'per visit', blurb: 'One visit to bring the garden back to standard.', features: ['Weeding and deadheading', 'Cut-back and pruning', 'Mulch top-up', 'Irrigation check'], cta: 'Book a visit' },
        { name: 'Full year care', price: 'Quote', period: 'per year', blurb: 'All four seasons, planned around the garden.', features: ['Four seasonal visits', 'Feeding and mulching', 'Pruning and cut-back', 'Plant replacements', 'Written garden report'], cta: 'Enquire about care', popular: true },
        { name: 'Full year & planting', price: 'Quote', period: 'per year', blurb: 'Year-round care with seasonal planting refreshed each year.', features: ['Everything in full year care', 'Seasonal replanting', 'Container refresh', 'Bulb and seed sowing'], cta: 'Enquire about planting' }
      ],
      faqs: [
        { q: 'Do you care for gardens you did not build?', a: 'Yes. We take on existing gardens, starting with a condition assessment and a maintenance plan so the visits are spent where they matter.' },
        { q: 'How often do you visit?', a: 'Four seasonal visits are standard, with additional visits through the growing season if the garden needs them. We agree the rhythm at the start and change it if the garden asks for it.' },
        { q: 'Do you remove the clippings?', a: 'Yes. Green waste is chipped and removed unless you would rather it were used as mulch on site.' },
        { q: 'Can you look after irrigation too?', a: 'Yes — irrigation checks are part of every visit, and controllers can be programmed and maintained as part of the care plan.' }
      ],
      related: ['planting-soft-landscaping', 'garden-design-planning', 'irrigation-drainage']
    },
    {
      id: 'irrigation-drainage',
      title: 'Irrigation & Drainage',
      shortTitle: 'Irrigation & Drainage',
      tag: 'Water',
      icon: 'droplet',
      price: 'Quoted per site',
      duration: '1–3 weeks on site',
      highlight: 'Water-wise by design',
      image: 'https://images.unsplash.com/photo-1444392061186-9fc38f84f726?auto=format&fit=crop&w=900&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1444392061186-9fc38f84f726?auto=format&fit=crop&w=900&q=80',
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80',
        'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=900&q=80'
      ],
      excerpt: 'Drainage that moves water away and irrigation that puts it where plants need it — planned together, so the garden is never fighting the weather.',
      description: [
        'Water is the reason so many gardens fail. Waterlogged soil in winter, bone-dry beds in August, and irrigation that runs whether the plants need it or not — all of it is a planning problem before it is an installation problem.',
        'We survey how water moves across your site, design falls, swales and soakaways where they are needed, and then match an irrigation layout to the planting. Zones are set by need rather than by convenience, and the whole system is set up to be adjusted as the garden changes.'
      ],
      features: [
        'Site drainage surveyed before anything is installed',
        'Falls, swales and soakaways designed into levels',
        'Zones matched to planting needs, not to guesswork',
        'Controllers programmed and handed over with a schedule',
        'Rain and moisture sensors fitted where useful',
        'Annual check included with care plans'
      ],
      pricing: [
        { name: 'Drainage survey', price: 'Quote', period: 'per site', blurb: 'A diagnosis of where the water goes and why.', features: ['Site visit', 'Levels and percolation checks', 'Written findings', 'Recommended fixes'], cta: 'Book a survey' },
        { name: 'Irrigation install', price: 'Quote', period: 'per site', blurb: 'A zoned system that waters the right beds the right amount.', features: ['Zone design', 'Dripline and sprinkler layout', 'Controller programming', 'Moisture sensor', 'Seasonal schedule'], cta: 'Scope irrigation', popular: true },
        { name: 'Water management', price: 'Quote', period: 'per site', blurb: 'Drainage and irrigation designed together as one scheme.', features: ['Everything in irrigation install', 'Ground shaping and swales', 'Soakaway or basin', 'Testing and commissioning', 'First-year checks'], cta: 'Scope water works' }
      ],
      faqs: [
        { q: 'Do I need irrigation if I have a planting plan?', a: 'Some gardens do not. Where the soil holds water and the species suit the site, we will tell you that irrigation is optional rather than selling you a system you do not need.' },
        { q: 'Can you fix a garden that already floods?', a: 'Often, yes. Waterlogging is usually a levels and percolation problem, and both can usually be addressed with regrading, drainage or soil improvement.' },
        { q: 'Who installs it?', a: 'Our own crew, with the controller programmed and handed over with a written schedule showing how to change it through the year.' },
        { q: 'Is it possible to run this on a timer?', a: 'Yes. We can set it to run on a timer, but we usually recommend a moisture or rain sensor so the system stops watering when it is not needed.' }
      ],
      related: ['garden-design-planning', 'hardscape-outdoor-living', 'seasonal-care-maintenance']
    }
  ];

  var POSTS = [
    {
      id: 'planning-year-round-interest',
      title: 'Planning for Year-Round Interest',
      category: 'Design',
      author: 'Maya Okafor',
      authorRole: 'Founder & Lead Designer',
      authorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
      date: 'September 12, 2026',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&w=1200&q=80',
      excerpt: 'A garden does not have to be beautiful in July to be worth building. Here is how we plan for the months nobody photographs.',
      tags: ['planting design', 'structure', 'seasons'],
      content: [
        { t: 'p', v: 'Most planting schemes are designed in the mind of whoever is selling them, at the time of year that makes them look best. That is how you end up with a garden that peaks for six weeks and then flattens out for the other ten months of the year.' },
        { t: 'h2', v: 'Start with structure, not flowers' },
        { t: 'p', v: 'Structure comes first: evergreens, multi-stem trees, grasses and shrubs that hold a shape. These are the bones of the planting, and they carry the garden through winter when everything else has gone over.' },
        { t: 'list', v: ['One evergreen for every three deciduous plants, as a starting point', 'At least two multi-stem specimens for winter silhouette', 'Grasses left standing through February, cut back in March', 'A tree that gives shade in summer and admits light in winter'] },
        { t: 'h2', v: 'Then layer the seasons' },
        { t: 'p', v: 'With the structure in place, the flowering layer becomes a sequence rather than a single moment. Early bulbs, late spring perennials, summer meadow, autumn seed heads, winter bark and berries. Each takes the stage briefly and hands it on.' },
        { t: 'quote', v: 'A garden with a peak is a photograph. A garden with a sequence is a place.' },
        { t: 'h2', v: 'Plant for the garden you will have' },
        { t: 'p', v: 'The most common mistake we see is designing for a garden that no longer exists — the one before the children arrived, the one before the extension, the one at the weekend. Design for the household that is actually here, and for the amount of time you are genuinely willing to spend in the garden.' },
        { t: 'note', v: 'When we plan with clients we write the maintenance time down on the drawing. A scheme that needs a day a week is a different garden from one that needs an hour, and both can be beautiful — but they are not interchangeable.' }
      ],
      related: ['soil-first', 'planting-for-small-spaces']
    },
    {
      id: 'soil-first',
      title: 'Soil First: The Part Everyone Skips',
      category: 'Planting',
      author: 'Elias Brandt',
      authorRole: 'Head Grower Relations',
      authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      date: 'August 28, 2026',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=1200&q=80',
      excerpt: 'You can buy any plant you like. Fixing the soil is what decides whether it stays. A practical guide to what to do before planting.',
      tags: ['soil', 'planting', 'maintenance'],
      content: [
        { t: 'p', v: 'Planting is the cheap, visible part of a garden. The expensive, invisible part is the soil preparation underneath it — and it is the part that decides whether the planting you paid for is still there in year three.' },
        { t: 'h2', v: 'What to check before you plant' },
        { t: 'list', v: ['Dig a hole 30cm deep and feel the bottom — if it is hard pan, roots will not get through it', 'Squeeze a handful of moist soil: if it stays in a solid ball, it is too wet; if it crumbles to dust, it is too dry', 'Look at what is growing nearby — weeds tell you a lot about the soil they are tolerating', 'Check whether water sits after rain; standing water means drainage, not soil, is your first problem'] },
        { t: 'h2', v: 'Improving what is there' },
        { t: 'p', v: 'Most garden soils are neither terrible nor wonderful — they are simply compacted, low in organic matter and starved of air. A layer of well-rotted organic matter worked into the top 30cm of the bed changes more than any fertiliser you can buy afterwards.' },
        { t: 'h2', v: 'Do not dig when it is wet' },
        { t: 'p', v: 'This is the single most common error. Digging wet soil destroys its structure and compacts it further, turning a workable bed into concrete. Wait for the soil to crumble in your hand before you break it open.' },
        { t: 'quote', v: 'Improve the soil and the plants do half the work. Improve the planting and nothing else will save it.' },
        { t: 'note', v: 'We carry our own composted bark and soil improver from local suppliers, and we tell clients honestly when a site needs a full rebuild rather than a mulch on top.' }
      ],
      related: ['planning-year-round-interest', 'watering-well']
    },
    {
      id: 'watering-well',
      title: 'Watering Well: Less Water, Better Garden',
      category: 'Care',
      author: 'Sam Oyelaran',
      authorRole: 'Site & Operations Lead',
      authorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
      date: 'July 17, 2026',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=1200&q=80',
      excerpt: 'Drip lines beat sprinklers, mulch beats both, and a little attention beats a timer on a fortnightly cycle.',
      tags: ['irrigation', 'water', 'maintenance'],
      content: [
        { t: 'p', v: 'Most gardens are over-watered and under-watered at the same time: the lawn gets a quick sprinkle twice a week while the beds, which actually need it, dry out between visits.' },
        { t: 'h2', v: 'Water the soil, not the leaves' },
        { t: 'p', v: 'Drip and soaker lines put water where the roots are, slowly enough that the soil absorbs it instead of running off. Overhead sprinklers evaporate a meaningful share of what they deliver and waste more on paths than on plants.' },
        { t: 'list', v: ['Water deeply and less often, rather than shallowly and often', 'Group plants with similar needs into the same irrigation zone', 'Add 50–70mm of organic mulch to slow evaporation', 'Water early in the morning, not in the middle of the afternoon'] },
        { t: 'h2', v: 'Let the soil tell you' },
        { t: 'p', v: 'Push a finger two knuckles into the soil. If it is cool and damp below the surface, the bed does not need water yet, whatever the schedule says.' },
        { t: 'quote', v: 'A schedule tells the garden when to water. The soil tells you when it actually needs it.' },
        { t: 'note', v: 'New planting needs water for its first season, often more than anyone expects. That is why we water in every plant we install and check it through the settling period.' }
      ],
      related: ['soil-first', 'seasonal-care']
    },
    {
      id: 'designing-small-spaces',
      title: 'Designing Small Spaces Without Shrinking Them',
      category: 'Design',
      author: 'Priya Raman',
      authorRole: 'Landscape Architect',
      authorAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80',
      date: 'June 2, 2026',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1200&q=80',
      excerpt: 'Small gardens fail when everything is pushed to the edges. Height, layering and one confident focal point do the work instead.',
      tags: ['small gardens', 'design', 'planting'],
      content: [
        { t: 'p', v: 'The instinct in a small garden is to leave room — for people, for furniture, for the mower. It is understandable and it is usually wrong. Small gardens feel spacious when they are full, layered and framed, and cramped when every edge is bare.' },
        { t: 'h2', v: 'Use height instead of area' },
        { t: 'p', v: 'A small tree, a wall of climbers, tall grasses at the back of a border — all of these add volume without taking any ground. The trick is to keep the lower planting simple so the eye can travel through it.' },
        { t: 'list', v: ['Keep the middle of the garden open and let the planting frame it', 'Use climbers and wall plants to make vertical surfaces count', 'One strong focal point beats three average features', 'Choose a small tree for the canopy rather than a large shrub for the flower'] },
        { t: 'h2', v: 'Detail beats quantity' },
        { t: 'p', v: 'In a small space, materials are read closely. A good edge detail or a well-made path is visible in a way that a whole bed of similar plants is not.' },
        { t: 'quote', v: 'Small gardens do not need less garden. They need more decision.' },
        { t: 'note', v: 'The most common request we get on small plots is for a seating area. We often push back — a narrow path with a bench at the end usually serves a small garden better than a patio that eats it.' }
      ],
      related: ['planning-year-round-interest', 'hardscape-materials']
    },
    {
      id: 'hardscape-materials',
      title: 'Choosing Materials That Age Well',
      category: 'Build',
      author: 'Elias Brandt',
      authorRole: 'Head Grower Relations',
      authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      date: 'May 9, 2026',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=1200&q=80',
      excerpt: 'Stone, brick and gravel all weather differently. How to pick surfaces for your climate, your soil and your maintenance tolerance.',
      tags: ['hardscape', 'materials', 'build'],
      content: [
        { t: 'p', v: 'A paving sample and a laid path are different products. Colour changes with wet and dry, joints silt up, and the surface that looked flat in the yard is anything but once it is walked on for a year.' },
        { t: 'h2', v: 'Natural stone' },
        { t: 'p', v: 'Stone moves with the seasons and settles where it is laid. It suits traditional gardens and cold climates, and it rewards a little patience in the first year while the bedding settles.' },
        { t: 'h2', v: 'Brick and clay pavers' },
        { t: 'p', v: 'Consistent in colour and easy to lift and relay, which makes brick the pragmatic choice where the ground may move or the layout may change.' },
        { t: 'h2', v: 'Gravel and resin-bound aggregate' },
        { t: 'p', v: 'The cheapest surface per square metre and the easiest to drain. It also needs a proper sub-base and an edging detail, or it migrates into the beds within a season or two.' },
        { t: 'list', v: ['Lay on a compacted sub-base, not on sand alone', 'Specify an edging detail — it is what keeps the surface where you put it', 'Think about how you will weed the beds next to it', 'Ask how the surface behaves in frost and heavy rain'] },
        { t: 'quote', v: 'Every material is a maintenance decision as much as a design decision.' },
        { t: 'note', v: 'We are happy to lay a material you have chosen yourself. We will tell you honestly if we think it is the wrong choice for the site, and why.' }
      ],
      related: ['designing-small-spaces', 'watering-well']
    },
    {
      id: 'seasonal-care',
      title: 'The Garden Year: Four Visits That Do the Work',
      category: 'Care',
      author: 'Maya Okafor',
      authorRole: 'Founder & Lead Designer',
      authorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
      date: 'March 21, 2026',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=1200&q=80',
      excerpt: 'A year of maintenance compressed into four visits — what happens in each season and why the timing matters.',
      tags: ['maintenance', 'seasons', 'pruning'],
      content: [
        { t: 'p', v: 'Care plans look expensive until you compare them with the alternative: hiring a mower and a hedge cutter, buying plants to replace what died, and watching the shape of the garden disappear over three summers.' },
        { t: 'h2', v: 'Spring — clear, cut and feed' },
        { t: 'p', v: 'We remove the winter debris, cut back the late-flowering perennials and grasses, mulch the beds with well-rotted organic matter, and feed the soil rather than the plant. March is the right month because the ground is moist and the growth has not yet started.' },
        { t: 'h2', v: 'Summer — tidy and irrigate' },
        { t: 'p', v: 'Deadheading, weeding and a check on the irrigation system. We also watch for pests and disease early, because a problem caught in June is a job of an hour and a problem caught in August is a job of a day.' },
        { t: 'h2', v: 'Autumn — cut back and clear' },
        { t: 'p', v: 'This is the big one. We cut back the perennials, plant the ground cover, plant bulbs for spring and clear the leaves. Leaving the stems standing through winter is a choice, not neglect — it is how the garden holds its structure until March.' },
        { t: 'h2', v: 'Winter — prune and plan' },
        { t: 'p', v: 'Structural pruning while the plants are dormant and the shape is visible, plus a written plan for what changes in the coming year.' },
        { t: 'quote', v: 'Maintenance is not a bill for keeping the garden alive. It is the thing that keeps the garden being what you designed.' }
      ],
      related: ['watering-well', 'soil-first']
    }
  ];

  window.GardenData = {
    services: SERVICES,
    posts: POSTS,
    getService: function (id) {
      for (var i = 0; i < SERVICES.length; i++) if (SERVICES[i].id === id) return SERVICES[i];
      return null;
    },
    getPost: function (id) {
      for (var i = 0; i < POSTS.length; i++) if (POSTS[i].id === id) return POSTS[i];
      return null;
    },
    serviceCategories: function () {
      var seen = {}, out = [];
      SERVICES.forEach(function (s) { if (!seen[s.tag]) { seen[s.tag] = 1; out.push(s.tag); } });
      return out;
    },
    postCategories: function () {
      var seen = {}, out = [];
      POSTS.forEach(function (p) { if (!seen[p.category]) { seen[p.category] = 1; out.push(p.category); } });
      return out;
    }
  };
})();
