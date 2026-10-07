/**
 * GARDEN DREAMS • Pricing page — billing period toggle
 * Moves the sliding pill and rewrites prices between monthly / annual.
 */
(function () {
  document.addEventListener('DOMContentLoaded', function () {
    var toggle = document.getElementById('billing-toggle');
    if (!toggle) return;

    var pill = toggle.querySelector('.billing-pill');
    var buttons = Array.prototype.slice.call(toggle.querySelectorAll('button'));
    var cards = Array.prototype.slice.call(document.querySelectorAll('.price-card[data-monthly]'));

    function movePill(btn) {
      if (!pill) return;
      pill.style.left = btn.offsetLeft + 'px';
      pill.style.width = btn.offsetWidth + 'px';
    }

    function apply(period) {
      buttons.forEach(function (b) {
        var on = b.getAttribute('data-period') === period;
        b.classList.toggle('active', on);
        if (on) movePill(b);
      });

      cards.forEach(function (card) {
        var amount = card.querySelector('.amount');
        var billed = card.querySelector('.price-billed');
        if (amount) {
          amount.textContent = period === 'annual'
            ? card.getAttribute('data-annual')
            : card.getAttribute('data-monthly');
        }
        if (billed) {
          billed.textContent = period === 'annual'
            ? card.getAttribute('data-annual-note') || 'Billed annually'
            : card.getAttribute('data-monthly-note') || 'Billed monthly';
        }
      });

      showToast(period === 'annual'
        ? 'Annual billing selected — two months free on every plan.'
        : 'Monthly billing selected — cancel any time.');
    }

    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        apply(btn.getAttribute('data-period'));
      });
    });

    /* initial position (after fonts settle) */
    var activeBtn = toggle.querySelector('button.active') || buttons[0];
    requestAnimationFrame(function () { if (activeBtn) movePill(activeBtn); });
    window.addEventListener('resize', function () {
      var current = toggle.querySelector('button.active');
      if (current) movePill(current);
    });
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(function () { if (activeBtn) movePill(activeBtn); });
    }

    /* Highlight plan CTA buttons */
    document.querySelectorAll('.js-choose-plan').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var plan = btn.getAttribute('data-plan');
        showToast('"' + plan + '" selected — redirecting to secure checkout…');
      });
    });
  });
})();
