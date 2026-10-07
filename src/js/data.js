/**
 * GARDEN DREAMS • Content Data Store
 * Single source of truth for services & journal articles.
 * service-details.html?id=... and blog-details.html?id=... read from here.
 */
(function () {
  var SERVICES = [
    {
      id: 'seasonal-subscription',
      title: 'Weekly Flower Subscription',
      shortTitle: 'Flower Subscription',
      tag: 'Subscriptions',
      price: 'From $48 / delivery',
      duration: 'Ongoing',
      rating: '4.9 (312 reviews)',
      image: 'https://images.unsplash.com/photo-1527061011665-3652c757a4d4?auto=format&fit=crop&w=900&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1527061011665-3652c757a4d4?auto=format&fit=crop&w=900&q=80',
        'https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=900&q=80',
        'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=900&q=80'
      ],
      excerpt: 'A fresh, hand-arranged seasonal bouquet delivered to your door on the rhythm you choose — cut from local growers that very morning.',
      description: [
        'Our Weekly Flower Subscription is the heart of Garden Dreams. Every delivery is designed around what is naturally blooming this week — never cold-stored imports, never the same arrangement twice.',
        'You pick the size, the rhythm and your delivery day. Our florists handle the rest: sourcing from family growers within 50 miles, arranging by hand in our studio, and delivering in hydration packs so your flowers open slowly and stay glorious for 7–10 days.'
      ],
      features: [
        'Hand-arranged every delivery — never pre-packed',
        'Locally sourced seasonal stems from trusted growers',
        'Free zero-emissions neighbourhood courier',
        'Free ceramic vase with your very first delivery',
        'Pause, skip a week or change your address anytime',
        '7-day freshness guarantee or we replace it free'
      ],
      pricing: [
        { name: 'Petite', price: '$48', period: '/ delivery', blurb: 'A charming small arrangement for desks and bedside tables.', features: ['12–15 stem arrangement', 'Best for small spaces', 'Free local delivery', 'Flower food + care card'], cta: 'Start Petite' },
        { name: 'Classic', price: '$72', period: '/ delivery', blurb: 'Our most-loved size — generous enough for a dining table centrepiece.', features: ['20–24 stem arrangement', 'Most popular size', 'Free local delivery', 'Free ceramic vase (first box)', 'Priority seasonal picks'], cta: 'Start Classic', popular: true },
        { name: 'Grand', price: '$110', period: '/ delivery', blurb: 'A statement arrangement for entryways, studios and open-plan living.', features: ['32–40 stem arrangement', 'Premium focal blooms', 'Free local delivery', 'Free vase + care booklet', 'Dedicated florist notes'], cta: 'Start Grand' }
      ],
      faqs: [
        { q: 'Can I skip a delivery or pause my subscription?', a: 'Absolutely. You can skip, pause or reschedule any delivery up to 48 hours before your dispatch day from your user dashboard — no emails, no phone calls, no penalty.' },
        { q: 'What if I am not home for the delivery?', a: 'Our couriers leave your bouquet in its hydration pack in a shaded, safe spot and send you a photo confirmation by text. If you would rather hand it over, leave a note with a safe-place instruction.' },
        { q: 'Do you cater to allergies or flower preferences?', a: 'Yes. Add your dislikes and must-haves to your profile — for example "no lilies" or "extra eucalyptus" — and your florist will design around them for every delivery.' },
        { q: 'Which days do you deliver?', a: 'We deliver Tuesday through Saturday across the metro area. Choose your preferred day at checkout and change it whenever your week changes.' }
      ],
      related: ['gift-bouquets', 'same-day-delivery', 'corporate-flowers']
    },
    {
      id: 'wedding-florals',
      title: 'Wedding & Event Florals',
      shortTitle: 'Wedding & Events',
      icon: 'heart',
      tag: 'Events',
      price: 'From $850',
      duration: '4–8 weeks lead time',
      rating: '5.0 (96 weddings)',
      image: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=900&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1587556930799-8dca6aef3dc2?auto=format&fit=crop&w=900&q=80',
        'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=900&q=80',
        'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=900&q=80'
      ],
      excerpt: 'Designer-led ceremony and reception florals — from bridal bouquets to full venue installations — built around your story and the season.',
      description: [
        'Your flowers should feel like they grew exactly where you are standing. We design wedding and event florals as one cohesive botanical story: ceremony, reception, wearable flowers and every small detail in between.',
        'Each project begins with a consultation and a mood board built from real seasonal stems. You see your palette, your vessels and your budget before anything is ordered — then our team installs on-site and refreshes everything right before your guests arrive.'
      ],
      features: [
        'One-to-one consultation and custom mood board',
        'Bridal party bouquets, boutonnieres and corsages',
        'Ceremony arches, aisle and altar installations',
        'Reception centrepieces, bud vases and signage florals',
        'On-day installation and pack-down crew',
        'Local, seasonal and dried-material sourcing'
      ],
      pricing: [
        { name: 'Intimate', price: '$850', period: 'starting', blurb: 'Elopements and micro-weddings up to 30 guests.', features: ['Bridal + 2 bouquets', '6 boutonnieres', 'Simple ceremony focal piece', 'Delivery & setup'], cta: 'Enquire' },
        { name: 'Signature', price: '$2,400', period: 'starting', blurb: 'Full ceremony and reception florals for ~100 guests.', features: ['All Intimate inclusions', 'Ceremony arch installation', '12 reception centrepieces', 'Aisle & signing-table styling', 'On-day refresh visit'], cta: 'Enquire', popular: true },
        { name: 'Editorial', price: '$4,800+', period: 'starting', blurb: 'Large-scale venue transformations and multi-day events.', features: ['All Signature inclusions', 'Full venue floral concept', 'Hanging & structural installs', 'Dedicated design lead', 'Two rehearsal/setup days'], cta: 'Enquire' }
      ],
      faqs: [
        { q: 'How far in advance should we book?', a: 'We recommend enquiring 4–8 months ahead for full weddings. Peak Saturdays in May, June, September and October fill a year ahead; micro-weddings can often be accommodated within 4 weeks.' },
        { q: 'Do you have a minimum spend?', a: 'Our floral minimum for weddings is $850 including delivery and installation within the metro area. Travel beyond 40 km is quoted separately.' },
        { q: 'Can you work with our venue\'s restrictions?', a: 'Yes — we regularly work with candle rules, hanging-point limits and heritage surfaces. We confirm every fixing method with your venue before the day.' },
        { q: 'What happens to the flowers after the event?', a: 'We can repurpose ceremony flowers into reception pieces the same day, donate unbranded arrangements to local care homes, or package bouquets for guests to take home.' }
      ],
      related: ['floral-workshops', 'seasonal-subscription', 'gift-bouquets']
    },
    {
      id: 'corporate-flowers',
      title: 'Corporate & Office Flowers',
      shortTitle: 'Corporate Flowers',
      tag: 'Business',
      icon: 'briefcase',
      price: 'From $220 / month',
      duration: 'Weekly or fortnightly',
      rating: '4.8 (74 offices)',
      image: 'https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?auto=format&fit=crop&w=900&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?auto=format&fit=crop&w=900&q=80',
        'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=900&q=80',
        'https://images.unsplash.com/photo-1464982326199-86f32f81b211?auto=format&fit=crop&w=900&q=80'
      ],
      excerpt: 'Recurring lobby, reception and workspace arrangements that make your brand feel alive — installed, rotated and collected by us.',
      description: [
        'First impressions bloom at reception. Our corporate programme places seasonal arrangements where they matter most: the welcome desk, meeting rooms, breakout spaces and executive floors.',
        'We install in hydration vessels, rotate stems on your schedule, and take every spent arrangement away for composting. One monthly invoice, one point of contact, zero admin for your team.'
      ],
      features: [
        'Site visit and placement plan before you commit',
        'Weekly, fortnightly or monthly rotation',
        'Brand-matched palettes and vessel selection',
        'Event and boardroom flowers on request',
        'Compostable breakdown of all spent stems',
        'Single consolidated monthly invoice'
      ],
      pricing: [
        { name: 'Reception', price: '$220', period: '/ month', blurb: 'A statement arrangement for one welcome area.', features: ['1 large arrangement', 'Fortnightly rotation', 'Delivery & collection', 'Vessel included'], cta: 'Request quote' },
        { name: 'Workspace', price: '$460', period: '/ month', blurb: 'Reception plus meeting rooms and breakout zones.', features: ['3–4 arrangements', 'Weekly rotation', 'Event flowers 10% off', 'Vessels included'], cta: 'Request quote', popular: true },
        { name: 'Campus', price: '$980+', period: '/ month', blurb: 'Multi-floor and multi-site programmes.', features: ['Custom arrangement count', 'Weekly rotation', 'Dedicated account florist', 'Quarterly styling review', 'Priority event support'], cta: 'Request quote' }
      ],
      faqs: [
        { q: 'Is there a contract lock-in?', a: 'No. Corporate programmes run on a rolling 30-day agreement — we simply ask for notice before your next scheduled rotation.' },
        { q: 'Do you handle installation and removal?', a: 'Yes. Our team installs, rotates and removes every vessel. Nothing is left for your facilities team to manage.' },
        { q: 'Can you match our brand colours?', a: 'We build palettes around your brand guidelines using seasonal stems — including dried and preserved material for longer-lasting installations.' },
        { q: 'Do you invoice monthly?', a: 'All arrangements on a site are consolidated into one monthly invoice with a detailed placement schedule attached.' }
      ],
      related: ['seasonal-subscription', 'same-day-delivery', 'floral-workshops']
    },
    {
      id: 'same-day-delivery',
      title: 'Same-Day Local Delivery',
      shortTitle: 'Same-Day Delivery',
      tag: 'Logistics',
      icon: 'truck',
      price: 'From $15',
      duration: 'Order before 1:00 PM',
      rating: '4.9 (540 drops)',
      image: 'https://images.unsplash.com/photo-1487070183336-b863922373d4?auto=format&fit=crop&w=900&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1487070183336-b863922373d4?auto=format&fit=crop&w=900&q=80',
        'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=900&q=80',
        'https://images.unsplash.com/photo-1508610048659-a06b669e3321?auto=format&fit=crop&w=900&q=80'
      ],
      excerpt: 'Forgot an anniversary? Order before 1 PM and your bouquet arrives the same afternoon — packed in water, never in a box.',
      description: [
        'Our same-day service is built for the moments that cannot wait. Order any bouquet before 1:00 PM and our couriers deliver it across the metro area the same afternoon, Monday to Saturday.',
        'Every same-day bouquet travels upright in a hydration pack with a hand-written card, a photo confirmation on arrival, and the same 7-day freshness guarantee as our subscriptions.'
      ],
      features: [
        'Order cut-off 1:00 PM for afternoon delivery',
        'Live delivery window confirmation by SMS',
        'Hydration-pack travel — flowers never boxed dry',
        'Hand-written note card included free',
        'Photo confirmation once delivered',
        '7-day freshness guarantee'
      ],
      pricing: [
        { name: 'Standard', price: '$15', period: 'per drop', blurb: 'Afternoon delivery anywhere in the metro area.', features: ['2–5 PM window', 'SMS confirmation', 'Hydration pack', 'Note card included'], cta: 'Send flowers' },
        { name: 'Express', price: '$29', period: 'per drop', blurb: 'Two-hour window of your choice, priority dispatch.', features: ['Choose a 2-hour slot', 'Priority in the courier queue', 'Live courier tracking', 'Photo + signature on arrival'], cta: 'Send flowers', popular: true },
        { name: 'Scheduled', price: '$12', period: 'per drop', blurb: 'Lock in a future date months ahead at the lowest rate.', features: ['Any future date', 'Same care & packaging', 'Free date changes', 'Best value for planned gifting'], cta: 'Schedule delivery' }
      ],
      faqs: [
        { q: 'What areas do you deliver to?', a: 'We cover the entire metro area plus surrounding suburbs within 40 km of the studio. Enter your postcode on the contact page and we will confirm coverage instantly.' },
        { q: 'Can I choose an exact delivery time?', a: 'Standard deliveries arrive in a 2–5 PM window. Express upgrades let you pick any two-hour slot between 9 AM and 7 PM.' },
        { q: 'What if nobody is home?', a: 'We call the recipient first, then follow your safe-place instruction. If no instruction exists, we leave the bouquet in its hydration pack in a shaded spot and text a photo.' },
        { q: 'Do you deliver on Sundays?', a: 'Sunday and public-holiday deliveries are available as an add-on for Express orders placed before 6 PM the day before.' }
      ],
      related: ['gift-bouquets', 'seasonal-subscription', 'wedding-florals']
    },
    {
      id: 'gift-bouquets',
      title: 'Gift Bouquets & Hampers',
      shortTitle: 'Gift Bouquets',
      tag: 'Gifting',
      icon: 'gift',
      price: 'From $55',
      duration: 'Same-day available',
      rating: '4.9 (268 gifts)',
      image: 'https://images.unsplash.com/photo-1508610048659-a06b669e3321?auto=format&fit=crop&w=900&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1508610048659-a06b669e3321?auto=format&fit=crop&w=900&q=80',
        'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=900&q=80',
        'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=900&q=80'
      ],
      excerpt: 'Ready-to-give bouquets, chocolate-and-bloom hampers and letterpress gift cards — wrapped in compostable paper, never plastic.',
      description: [
        'Gifting flowers should feel effortless. Our gift collection pairs hand-tied bouquets with local treats — single-origin chocolate, wildflower honey, small-batch candles — packed in reusable boxes with a letterpress card carrying your words.',
        'Choose a signature design or ask us to build something bespoke around a colour, a memory or a shared joke. Everything ships plastic-free in compostable wrap and recycled tissue.'
      ],
      features: [
        'Hand-tied bouquets from $55',
        'Bloom + treat hampers from $95',
        'Free letterpress gift message card',
        'Plastic-free, compostable wrapping',
        'Anonymous or scheduled gifting options',
        'Same-day dispatch before 1:00 PM'
      ],
      pricing: [
        { name: 'Hand-Tied', price: '$55', period: 'from', blurb: 'A joyful seasonal bunch, ready to give.', features: ['12–16 seasonal stems', 'Compostable wrap', 'Gift message card', 'Same-day available'], cta: 'Choose bouquet' },
        { name: 'Bloom Box', price: '$95', period: 'from', blurb: 'Bouquet paired with local chocolate or honey.', features: ['Full-size bouquet', 'Local treat pairing', 'Keepsake box', 'Priority same-day dispatch'], cta: 'Choose box', popular: true },
        { name: 'Bespoke Hamper', price: '$160+', period: 'from', blurb: 'A curated gift built around your person.', features: ['Custom bouquet design', '3 curated extras', 'Handwritten letterpress note', 'Photo of the finished gift'], cta: 'Brief our florist' }
      ],
      faqs: [
        { q: 'Can I send flowers anonymously?', a: 'Yes. Leave the sender field blank and we will deliver without revealing who they are from — the card will only contain your message.' },
        { q: 'Do you include a price on the delivery?', a: 'Never. Recipients only see the bouquet, the wrap and your card. All invoices go to the buyer by email.' },
        { q: 'Can I schedule a future gifting date?', a: 'Absolutely — pick any date up to six months ahead. We will confirm the design with you 48 hours before dispatch.' },
        { q: 'Are the hampers dietary-friendly?', a: 'Treats are available in vegetarian, vegan, nut-free and gluten-free versions — note your requirement at checkout.' }
      ],
      related: ['same-day-delivery', 'seasonal-subscription', 'wedding-florals']
    },
    {
      id: 'floral-workshops',
      title: 'Floral Arrangement Workshops',
      shortTitle: 'Workshops',
      tag: 'Experience',
      icon: 'sparkles',
      price: 'From $65 / person',
      duration: '2 hour sessions',
      rating: '4.9 (188 students)',
      image: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=900&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=900&q=80',
        'https://images.unsplash.com/photo-1464982326199-86f32f81b211?auto=format&fit=crop&w=900&q=80',
        'https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?auto=format&fit=crop&w=900&q=80'
      ],
      excerpt: 'Two-hour hands-on sessions in our studio where you build a professional arrangement and take it home — all stems and tools included.',
      description: [
        'Learn the mechanics behind the bouquets you see on our pages. In each two-hour workshop our florists teach conditioning, spiral hand-tying, colour balancing and finishing — then you build your own arrangement to take home.',
        'Sessions are capped at ten students so everyone gets individual guidance. Materials, tools, aprons and a glass of something sparkling are all included.'
      ],
      features: [
        'Small classes capped at 10 students',
        'All stems, tools and vessels included',
        'Take your finished arrangement home',
        'Beginner-friendly, no experience needed',
        'Private group and corporate sessions',
        '10% off any bouquet purchased on the day'
      ],
      pricing: [
        { name: 'Single Seat', price: '$65', period: '/ person', blurb: 'One seat in a public weekend workshop.', features: ['2-hour guided session', 'All materials included', 'Arrangement to take home', 'Refreshments'], cta: 'Book a seat' },
        { name: 'Duo', price: '$120', period: '/ 2 people', blurb: 'Two seats together — our most popular gift.', features: ['2 seats in one session', 'All materials included', 'Gift voucher available', 'Refreshments'], cta: 'Book duo', popular: true },
        { name: 'Private Group', price: '$420', period: '/ up to 8', blurb: 'Book the studio for your team or celebration.', features: ['Up to 8 participants', 'Choose your date & theme', 'All materials included', 'Optional add-on grazing board'], cta: 'Enquire' }
      ],
      faqs: [
        { q: 'Do I need any experience?', a: 'None at all. Over half of our students have never held floral shears before — the session starts with the absolute basics.' },
        { q: 'What should I bring?', a: 'Just yourself. We provide aprons, tools, stems and vessels. Wear closed shoes if you can, as studio floors stay cool.' },
        { q: 'Can I buy a workshop as a gift?', a: 'Yes — our vouchers are letterpress printed, valid for twelve months and can be sent digitally or posted in a gift envelope.' },
        { q: 'Are workshops suitable for children?', a: 'Our teen sessions (13+) run monthly with adjusted tools. Children under 13 are welcome in private family sessions with a participating adult.' }
      ],
      related: ['wedding-florals', 'seasonal-subscription', 'gift-bouquets']
    }
  ];

  var POSTS = [
    {
      id: 'seasonal-bloom-guide',
      title: "What's Blooming: A Month-by-Month Seasonal Flower Guide",
      category: 'Seasonal',
      author: 'Elara Whitfield',
      authorRole: 'Head Florist, Garden Dreams',
      authorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      date: 'September 28, 2026',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1200&q=80',
      excerpt: 'Seasonality is the difference between flowers that last a week and flowers that last ten days. Here is what we can actually grow — month by month.',
      tags: ['seasonality', 'local growers', 'bouquets', 'sustainability'],
      content: [
        { t: 'p', v: 'Most bouquets you buy in a supermarket travelled 8,000 kilometres to reach you. Ours travelled less than 50 miles. That single number explains almost everything about how long your flowers last, how they smell, and why they look slightly different every week.' },
        { t: 'h2', v: 'Why seasonality beats a fixed menu' },
        { t: 'p', v: 'A fixed "roses always, tulips always" menu requires cold storage, long-haul freight and chemical ripening. A seasonal menu requires a calendar. When we design around what local growers are actually cutting this week, the stems arrive already adapted to our climate — which is exactly why they open slowly and hold their shape.' },
        { t: 'quote', v: 'A seasonal bouquet is never the same twice — and that is the point. It is a photograph of one week in one place.' },
        { t: 'h2', v: 'What we cut, month by month' },
        { t: 'h3', v: 'Spring (March – May)' },
        { t: 'p', v: 'Tulips, ranunculus, anemones, narcissus and the first sweet peas. Spring stems are thirsty and dynamic — tulips keep growing in the vase, so we design with a little extra headroom.' },
        { t: 'h3', v: 'Summer (June – August)' },
        { t: 'p', v: 'The generosity season: garden roses, dahlias, cosmos, zinnia, scabiosa, cornflowers and trails of jasmine. This is when our arrangements look most like a meadow.' },
        { t: 'h3', v: 'Autumn (September – November)' },
        { t: 'p', v: 'Dahlias reach their peak, joined by chrysanthemums, amaranth, seed pods, wheat and warm-toned roses. Autumn is the most under-rated bouquet season in floristry.' },
        { t: 'h3', v: 'Winter (December – February)' },
        { t: 'p', v: 'Hellebores, paperwhites, amaryllis, evergreen foliage, dried lunaria and preserved ferns. Winter arrangements trade colour for texture — and they last almost twice as long.' },
        { t: 'list', v: ['Buy from a grower or a florist who names their farms', 'Expect the palette to shift weekly in high season', 'Ask for "what cut beautifully this morning?"', 'Let the florist substitute — it usually means fresher'] },
        { t: 'h2', v: 'How to read a bouquet label' },
        { t: 'p', v: 'Ask two questions: where were these grown, and when were they cut? If the answer is "a farm two hours away, yesterday morning", you are holding flowers that will outlast anything flown in. If the answer is vague, they probably travelled in a refrigerated box for a week before they reached the bucket.' },
        { t: 'note', v: 'In our subscription, every delivery includes a small card naming the growers whose stems are in your bouquet that week.' }
      ],
      related: ['flower-care-tips', 'subscription-benefits', 'sustainable-floristry']
    },
    {
      id: 'flower-care-tips',
      title: '10 Expert Tips to Make Your Fresh Bouquets Last Twice as Long',
      category: 'Care',
      author: 'Marcus Thorne',
      authorRole: 'Studio Manager',
      authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      date: 'September 14, 2026',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=900&q=80',
      excerpt: 'The difference between a five-day bouquet and a ten-day bouquet is almost never the flowers — it is the first ten minutes you spend on them.',
      tags: ['flower care', 'tips', 'at home'],
      content: [
        { t: 'p', v: 'Every bouquet we deliver carries a 7-day freshness guarantee. But our customers routinely keep arrangements for ten to fourteen days. The gap is technique, not luck — and almost all of it happens in the first ten minutes.' },
        { t: 'h2', v: 'The first ten minutes' },
        { t: 'list', v: ['Unwrap immediately — never leave flowers in paper overnight', 'Fill a clean vase with cool water and the flower food provided', 'Cut 2 cm off every stem at a 45° angle, under running water or submerged', 'Remove every leaf that will sit below the waterline', 'Let the bouquet drink for an hour before you style it'] },
        { t: 'h2', v: 'Placement matters more than you think' },
        { t: 'p', v: 'Heat, fruit and direct sun are the three things that age a bouquet fastest. Ripening fruit releases ethylene gas, which tells flowers to open and drop. Keep your vase on the opposite side of the room from the fruit bowl.' },
        { t: 'quote', v: 'Cool nights, indirect light, and no bananas. That is the whole secret.' },
        { t: 'h2', v: 'The weekly refresh' },
        { t: 'p', v: 'Every three days, tip out the water, rinse the vase, re-cut the stems and refill with fresh water. You do not need to add more flower food — a clean vase does more than any powder.' },
        { t: 'h3', v: 'Flower-by-flower notes' },
        { t: 'list', v: ['Tulips keep growing — trim them shorter each refresh', 'Garden roses drink heavily; check the water level daily', 'Woody stems like eucalyptus need a fresh vertical split', 'Dried and preserved stems never go in water at all'] },
        { t: 'note', v: 'Subscribers get a printed care booklet with their first delivery — and a WhatsApp line to our florists if anything looks off.' }
      ],
      related: ['seasonal-bloom-guide', 'gifting-flowers-etiquette', 'subscription-benefits']
    },
    {
      id: 'wedding-floral-trends',
      title: '2026 Wedding Floral Trends: Dried Textures & Wild Meadows',
      category: 'Weddings',
      author: 'Chloe Davenport',
      authorRole: 'Event Design Lead',
      authorAvatar: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=900&q=80',
      date: 'August 30, 2026',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1527061011665-3652c757a4d4?auto=format&fit=crop&w=900&q=80',
      excerpt: 'After a decade of identical Pinterest arches, couples are asking for flowers that look grown, not manufactured. Here is what we are installing this season.',
      tags: ['weddings', 'trends', 'event design'],
      content: [
        { t: 'p', v: 'We design around 96 weddings a year, which gives us an unusual read on where wedding floristry is heading. In 2026, three shifts are unmistakable.' },
        { t: 'h2', v: '1. The meadow aisle' },
        { t: 'p', v: 'Rather than a perfectly symmetrical arch, couples are grounding flowers at the base of the aisle and letting them climb — as though the ceremony is happening in a field that happened to bloom that week. It photographs better, costs less in structure, and ages beautifully across a long ceremony.' },
        { t: 'h2', v: '2. Dried and fresh, together' },
        { t: 'p', v: 'Preserved lunaria, bunny tails and bleached ferns now sit beside fresh garden roses. The contrast of textures does the work that colour used to — and dried elements can be prepared weeks ahead, protecting the budget from last-minute price spikes.' },
        { t: 'quote', v: 'The most beautiful 2026 arrangements look slightly unruly, entirely intentional, and impossible to reproduce exactly.' },
        { t: 'h2', v: '3. One vessel, many lives' },
        { t: 'p', v: 'Ceremony flowers are being repurposed into reception pieces the same day instead of being bought twice. Aisle meadows become table runners; the signing arrangement becomes the cake table. It is the single easiest way to cut 20% from a floral budget.' },
        { t: 'list', v: ['Ask your florist for a repurposing plan at the first meeting', 'Budget for installation, not just flowers', 'Choose local seasonal focal blooms for the hero pieces', 'Reserve 5% of budget for day-of substitutions'] },
        { t: 'note', v: 'Our 2026 lookbook is available as a printed booklet — request one through the contact page.' }
      ],
      related: ['seasonal-bloom-guide', 'sustainable-floristry', 'gifting-flowers-etiquette']
    },
    {
      id: 'subscription-benefits',
      title: 'Why a Flower Subscription Beats Occasional Buying',
      category: 'Subscriptions',
      author: 'Elena Vance',
      authorRole: 'Subscriber Experience',
      authorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
      date: 'August 12, 2026',
      readTime: '4 min read',
      image: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=1200&q=80',
      excerpt: 'A bouquet bought in a panic on the way home is a different object from one that arrives every Thursday morning, designed while you slept.',
      tags: ['subscription', 'value', 'routine'],
      content: [
        { t: 'p', v: 'The honest case for a flower subscription is not financial, although it usually works out cheaper per stem. It is about removing the decision entirely.' },
        { t: 'h2', v: '1. The freshest cut, automatically' },
        { t: 'p', v: 'Subscribers are served first from each morning\'s farm deliveries. Occasional buyers see whatever is left after the standing orders are filled — which on a busy Friday can be a lot less interesting.' },
        { t: 'h2', v: '2. Design that changes with you' },
        { t: 'list', v: ['Your florist learns your palette over time', 'Seasonal variety arrives without you choosing it', 'Arrangement size adapts to your vase and space', 'Occasion flowers can be added to any delivery'] },
        { t: 'h2', v: '3. It costs less per stem' },
        { t: 'p', v: 'Standing deliveries let us plan purchases with growers weeks ahead, which is why a Classic subscription at $72 consistently contains more stems than a $90 retail bouquet of the same quality.' },
        { t: 'quote', v: 'I stopped buying flowers "for a treat" — now every week is the treat.' },
        { t: 'h2', v: '4. Perfectly flexible' },
        { t: 'p', v: 'Skip while you travel, double a delivery for a dinner party, switch from weekly to monthly when the season changes. Nothing is locked in, and there is no fee for changing your mind.' },
        { t: 'note', v: 'Try four deliveries with no commitment — cancel any time before your fifth.' }
      ],
      related: ['seasonal-bloom-guide', 'flower-care-tips', 'gifting-flowers-etiquette']
    },
    {
      id: 'gifting-flowers-etiquette',
      title: 'The Art of Gifting Flowers: A Modern Etiquette Guide',
      category: 'Gifting',
      author: 'Priya Anand',
      authorRole: 'Client Care Lead',
      authorAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80',
      date: 'July 26, 2026',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1508610048659-a06b669e3321?auto=format&fit=crop&w=1200&q=80',
      excerpt: 'Red roses to a first date? Lilies to a hospital room? We answer the questions our clients actually ask us every week.',
      tags: ['gifting', 'etiquette', 'occasions'],
      content: [
        { t: 'p', v: 'Flower etiquette used to be a book of rigid rules. In 2026 it is simpler: be thoughtful about the person, the place and the moment — and when in doubt, ask the person who is making the bouquet.' },
        { t: 'h2', v: 'Matching flowers to the relationship' },
        { t: 'list', v: ['New acquaintance: bright, cheerful, unfussy — sunflowers, tulips, gerberas', 'Close friend: their favourite colour, whatever is in season', 'Partner: meaningful over expensive — the flower from your first date', 'Colleague: compact arrangements that fit a desk', 'Sympathy: white, green and soft tones; always confirm funeral customs'] },
        { t: 'h2', v: 'Occasion timing' },
        { t: 'p', v: 'Flowers for a birthday should arrive in the morning. Flowers for an apology should arrive before the conversation, not after. Flowers "just because" are the only category with no rules at all.' },
        { t: 'quote', v: 'The best-timed bouquet arrives while the recipient still believes the day is ordinary.' },
        { t: 'h2', v: 'Things worth avoiding' },
        { t: 'list', v: ['Strongly scented lilies in hospital — they trigger migraines', 'Flowers the recipient is known to be allergic to', 'Price tags, receipts or anything in the box that reveals cost', 'Red roses for someone you have just met — the message is louder than you intend'] },
        { t: 'h2', v: 'Writing the card' },
        { t: 'p', v: 'Two lines beat two paragraphs. Say the specific thing — "for the presentation you nailed on Tuesday" lands far harder than "congratulations on everything".' },
        { t: 'note', v: 'Our letterpress cards fit about 40 words comfortably. If you need more space, we will happily include a folded note.' }
      ],
      related: ['flower-care-tips', 'subscription-benefits', 'wedding-floral-trends']
    },
    {
      id: 'sustainable-floristry',
      title: 'Behind the Wrap: Our Sustainable Floristry Practice',
      category: 'Sustainability',
      author: 'Jonah Reyes',
      authorRole: 'Sourcing & Operations',
      authorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
      date: 'July 5, 2026',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1464982326199-86f32f81b211?auto=format&fit=crop&w=1200&q=80',
      excerpt: 'Floristry has a waste problem. Here is exactly how we source, wrap, deliver and compost — including the parts we have not solved yet.',
      tags: ['sustainability', 'local sourcing', 'zero waste'],
      content: [
        { t: 'p', v: 'Cut flowers are one of the few products where the environmental cost is almost invisible to the buyer. Nobody sees the refrigerated freight, the pesticide residue or the plastic sleeve. We think you should.' },
        { t: 'h2', v: 'Sourcing: 50 miles, mostly' },
        { t: 'p', v: 'Roughly 80% of our stems come from family growers within 50 miles of the studio. The rest are specialty blooms we cannot grow locally — ranunculus in April, for instance — and we name the farm on every delivery card.' },
        { t: 'h2', v: 'Wrapping: no plastic, ever' },
        { t: 'list', v: ['Compostable kraft and recycled tissue only', 'Twine and seed-paper tags instead of tape', 'Reusable hydration boxes for courier runs', 'Vases lent for events, collected and re-used'] },
        { t: 'h2', v: 'Delivery: one van, one loop' },
        { t: 'p', v: 'Our couriers run a single consolidated loop per zone each afternoon rather than individual point-to-point trips, and the final mile is covered by e-bike riders inside the ring road.' },
        { t: 'quote', v: 'We are not a zero-waste business yet. We are a measured-waste business that publishes its numbers.' },
        { t: 'h2', v: 'What we have not solved' },
        { t: 'p', v: 'Refrigeration still uses grid electricity, and some specialty stems still arrive by air freight. We offset both through a regional tree-planting partner, but offsetting is a compensation, not a fix — and we say so.' },
        { t: 'note', v: 'Spent stems from the studio and every office account are composted at our partner farm — around 4 tonnes a year.' }
      ],
      related: ['seasonal-bloom-guide', 'wedding-floral-trends', 'subscription-benefits']
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
