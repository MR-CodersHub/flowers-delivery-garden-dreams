/**
 * GARDEN DREAMS • Auth pages — password visibility toggle
 * Binds every .password-toggle button next to a password field.
 */
(function () {
  var EYE = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>';
  var EYE_OFF = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>';

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.password-toggle').forEach(function (btn) {
      var targetId = btn.getAttribute('data-target');
      var input = targetId ? document.getElementById(targetId) : (btn.parentElement ? btn.parentElement.querySelector('input') : null);
      if (!input) return;

      btn.innerHTML = EYE;
      btn.setAttribute('aria-label', 'Show password');

      btn.addEventListener('click', function () {
        var showing = input.type === 'text';
        input.type = showing ? 'password' : 'text';
        btn.innerHTML = showing ? EYE : EYE_OFF;
        btn.setAttribute('aria-label', showing ? 'Show password' : 'Hide password');
      });
    });
  });
})();
