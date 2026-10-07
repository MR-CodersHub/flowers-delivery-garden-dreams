/**
 * GARDEN DREAMS • Botanical Floral Studio
 * Main Application Script
 */

document.addEventListener('DOMContentLoaded', () => {
  initPetals();
  initZipChecker();
  initCategoryFilters();
  initBouquetTabs();
  initSubscriptionCalculator();
  initCartDrawer();
  initQuickViewModal();
  initGiftPreview();
  initScrollReveal();
});

/* ==========================================================================
   3. Floating Drifting Petals Generator
   ========================================================================== */
function initPetals() {
  const container = document.querySelector('.drifting-petals-container');
  if (!container) return;

  const petalCount = 12;
  const petalSVGs = [
    `<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 2C8 6 4 12 6 17C8 22 16 22 18 17C20 12 16 6 12 2Z" fill="currentColor"/></svg>`,
    `<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 3C7 7 5 13 8 18C11 23 18 21 19 16C20 11 17 6 12 3Z" fill="currentColor"/></svg>`,
    `<svg width="15" height="15" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="8" fill="currentColor"/></svg>`
  ];

  for (let i = 0; i < petalCount; i++) {
    const petal = document.createElement('div');
    petal.className = 'drifting-petal';
    petal.innerHTML = petalSVGs[i % petalSVGs.length];
    petal.style.left = `${Math.random() * 95}%`;
    petal.style.top = `${Math.random() * 80}%`;
    petal.style.animationDuration = `${10 + Math.random() * 12}s`;
    petal.style.animationDelay = `${Math.random() * 8}s`;
    petal.style.color = (i % 2 === 0) ? 'var(--primary-pink)' : 'rgba(var(--primary-pink-rgb), 0.6)';
    container.appendChild(petal);
  }
}

/* ==========================================================================
   4. Local Zip Code Delivery Checker
   ========================================================================== */
function initZipChecker() {
  const zipInput = document.getElementById('hero-zip-input');
  const zipBtn = document.getElementById('hero-zip-btn');
  const zipResult = document.getElementById('hero-zip-result');

  if (!zipInput || !zipBtn || !zipResult) return;

  const checkZip = () => {
    const zip = zipInput.value.trim();
    if (!zip || zip.length < 3) {
      zipResult.style.display = 'inline-flex';
      zipResult.style.color = '#D32F2F';
      zipResult.innerHTML = `⚠️ Please enter a valid postal code.`;
      return;
    }

    zipResult.style.display = 'inline-flex';
    zipResult.style.color = 'var(--primary-green)';
    zipResult.innerHTML = `
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
      <strong>Available in ${zip}!</strong> Next free delivery tomorrow morning.
    `;
    showToast(`🌸 Fresh morning delivery available in ${zip}!`);
  };

  zipBtn.addEventListener('click', (e) => {
    e.preventDefault();
    checkZip();
  });

  zipInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      checkZip();
    }
  });
}

/* ==========================================================================
   5. Category Filter Clicking
   ========================================================================== */
function initCategoryFilters() {
  const categoryCards = document.querySelectorAll('.category-card');
  categoryCards.forEach(card => {
    card.addEventListener('click', () => {
      const cat = card.dataset.category;
      showToast(`Browsing ${card.querySelector('.category-title').textContent} collection`);
      
      // Scroll to seasonal bouquets and select matching filter
      const seasonalSec = document.getElementById('seasonal');
      if (seasonalSec) {
        seasonalSec.scrollIntoView({ behavior: 'smooth' });
        // Click matching tab if exists
        const matchingTab = document.querySelector(`.filter-tab[data-filter="${cat}"]`);
        if (matchingTab) {
          matchingTab.click();
        }
      }
    });
  });
}

/* ==========================================================================
   6. Bouquet Filter Tabs
   ========================================================================== */
function initBouquetTabs() {
  const tabs = document.querySelectorAll('.filter-tab');
  const bouquets = document.querySelectorAll('.bouquet-card');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.dataset.filter;
      bouquets.forEach(card => {
        if (filter === 'all' || card.dataset.category === filter) {
          card.style.display = 'flex';
          card.style.animation = 'fadeInUp 0.4s ease forwards';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ==========================================================================
   7. Subscription Plan Interactive Selector
   ========================================================================== */
function initSubscriptionCalculator() {
  const planCards = document.querySelectorAll('.sub-plan-card');
  const ctaBtn = document.getElementById('explore-subscriptions-btn');

  planCards.forEach(card => {
    card.addEventListener('click', () => {
      planCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');

      const freq = card.dataset.frequency;
      const price = card.dataset.price;
      showToast(`Selected ${freq} delivery: ${price}/delivery with free local drop-off.`);
    });
  });

  if (ctaBtn) {
    ctaBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const activeCard = document.querySelector('.sub-plan-card.active');
      const planName = activeCard ? activeCard.querySelector('.plan-frequency').textContent : 'Weekly';
      addToCart({
        name: `${planName} Flower Subscription`,
        price: activeCard ? activeCard.dataset.price : '$48',
        image: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=400&q=80',
        type: 'Subscription Plan'
      });
    });
  }
}

/* ==========================================================================
   8. Mini Cart Drawer & Item State
   ========================================================================== */
let cart = [
  {
    name: 'Spring Meadow Bouquet',
    price: '$55',
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=200&q=80',
    type: 'Seasonal Fresh'
  }
];

function initCartDrawer() {
  const cartBtn = document.getElementById('cart-btn');
  const cartDrawer = document.getElementById('cart-drawer-overlay');
  const closeBtn = document.getElementById('cart-close-btn');

  if (cartBtn && cartDrawer) {
    cartBtn.addEventListener('click', () => {
      renderCart();
      cartDrawer.classList.add('open');
    });
  }

  if (closeBtn && cartDrawer) {
    closeBtn.addEventListener('click', () => {
      cartDrawer.classList.remove('open');
    });
  }

  cartDrawer?.addEventListener('click', (e) => {
    if (e.target === cartDrawer) {
      cartDrawer.classList.remove('open');
    }
  });

  // Attach Add to Cart to bouquet cards
  document.querySelectorAll('.btn-add-cart').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const card = btn.closest('.bouquet-card');
      if (!card) return;
      const name = card.querySelector('.bouquet-name')?.textContent || 'Seasonal Bouquet';
      const price = card.querySelector('.price-current')?.textContent || '$55';
      const image = card.querySelector('img')?.src || '';

      addToCart({ name, price, image, type: 'Hand-Arranged' });
    });
  });

  renderCart();
}

function addToCart(item) {
  cart.push(item);
  renderCart();
  showToast(`Added "${item.name}" to your basket!`);
  const cartDrawer = document.getElementById('cart-drawer-overlay');
  if (cartDrawer) {
    cartDrawer.classList.add('open');
  }
}

function renderCart() {
  const cartList = document.getElementById('cart-items-list');
  const cartCountBadges = document.querySelectorAll('.cart-count');
  const cartSubtotalEl = document.getElementById('cart-subtotal-val');

  if (cartCountBadges) {
    cartCountBadges.forEach(badge => badge.textContent = cart.length);
  }

  if (!cartList) return;

  if (cart.length === 0) {
    cartList.innerHTML = `<div style="text-align: center; padding: 40px 0; color: var(--text-muted);">Your flower basket is empty.<br>Choose a fresh seasonal bouquet to begin!</div>`;
    if (cartSubtotalEl) cartSubtotalEl.textContent = '$0';
    return;
  }

  let total = 0;
  cartList.innerHTML = cart.map((item, idx) => {
    const numPrice = parseInt(item.price.replace('$', '')) || 0;
    total += numPrice;
    return `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}">
        <div class="cart-item-info">
          <div class="cart-item-name">${item.name}</div>
          <div style="font-size: 0.75rem; color: var(--text-muted);">${item.type}</div>
          <div class="cart-item-price">${item.price}</div>
        </div>
        <button onclick="removeFromCart(${idx})" style="color: var(--text-muted); padding: 6px; font-size: 1.1rem;" title="Remove">✕</button>
      </div>
    `;
  }).join('');

  if (cartSubtotalEl) {
    cartSubtotalEl.textContent = `$${total}`;
  }
}

window.removeFromCart = function(index) {
  cart.splice(index, 1);
  renderCart();
  showToast('Item removed from basket');
};

/* ==========================================================================
   9. Quick View Modal
   ========================================================================== */
function initQuickViewModal() {
  const modalOverlay = document.getElementById('quick-view-modal');
  const closeBtn = document.getElementById('modal-close-btn');

  if (!modalOverlay) return;

  document.querySelectorAll('.btn-quick-view').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const card = btn.closest('.bouquet-card');
      if (!card) return;

      const name = card.querySelector('.bouquet-name')?.textContent;
      const category = card.querySelector('.bouquet-badge-tag')?.textContent;
      const desc = card.querySelector('.bouquet-ingredients')?.textContent;
      const price = card.querySelector('.price-current')?.textContent;
      const img = card.querySelector('img')?.src;

      document.getElementById('modal-img').src = img;
      document.getElementById('modal-category').textContent = category;
      document.getElementById('modal-title').textContent = name;
      document.getElementById('modal-desc').textContent = desc;
      document.getElementById('modal-price').textContent = price;

      modalOverlay.classList.add('open');
    });
  });

  closeBtn?.addEventListener('click', () => modalOverlay.classList.remove('open'));
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) modalOverlay.classList.remove('open');
  });

  const modalAddBtn = document.getElementById('modal-add-cart-btn');
  modalAddBtn?.addEventListener('click', () => {
    const name = document.getElementById('modal-title').textContent;
    const price = document.getElementById('modal-price').textContent;
    const image = document.getElementById('modal-img').src;

    addToCart({ name, price, image, type: 'Hand-Arranged' });
    modalOverlay.classList.remove('open');
  });
}

/* ==========================================================================
   10. Gift Subscription Interactive Features
   ========================================================================== */
function initGiftPreview() {
  const giftBtn = document.getElementById('gift-subscription-btn');
  giftBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    addToCart({
      name: 'Gift Flower Subscription (3 Months)',
      price: '$150',
      image: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=400&q=80',
      type: 'Gift Box with Handwritten Note'
    });
    showToast('🎁 Gift subscription configured with custom letterpress note!');
  });
}

/* ==========================================================================
   13. Scroll-Reveal IntersectionObserver
   ========================================================================== */
function initScrollReveal() {
  // Add .reveal class to key sectional elements
  const revealTargets = [
    ...document.querySelectorAll('.bouquet-card'),
    ...document.querySelectorAll('.category-card'),
    ...document.querySelectorAll('.step-card'),
    ...document.querySelectorAll('.why-local-card'),
    ...document.querySelectorAll('.testimonial-card'),
    ...document.querySelectorAll('.sub-plan-card'),
    document.querySelector('.hero-content'),
    document.querySelector('.hero-visual'),
    document.querySelector('.subscription-content'),
    document.querySelector('.gift-text-wrap'),
    document.querySelector('.final-cta-content'),
  ].filter(Boolean);

  // Apply staggered delays within grids
  document.querySelectorAll('.bouquets-grid .bouquet-card').forEach((el, i) => {
    el.classList.add(`reveal-delay-${Math.min(i % 3 + 1, 5)}`);
  });
  document.querySelectorAll('.categories-grid .category-card').forEach((el, i) => {
    el.classList.add(`reveal-delay-${Math.min(i + 1, 5)}`);
  });
  document.querySelectorAll('.steps-wrapper .step-card').forEach((el, i) => {
    el.classList.add(`reveal-delay-${i + 1}`);
  });
  document.querySelectorAll('.why-local-grid .why-local-card').forEach((el, i) => {
    el.classList.add(`reveal-delay-${Math.min(i + 1, 5)}`);
  });
  document.querySelectorAll('.testimonials-grid .testimonial-card').forEach((el, i) => {
    el.classList.add(`reveal-delay-${i + 1}`);
  });

  revealTargets.forEach(el => el.classList.add('reveal'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  revealTargets.forEach(el => observer.observe(el));
}
