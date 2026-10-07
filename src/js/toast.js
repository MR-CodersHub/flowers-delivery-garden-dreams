/**
 * GARDEN DREAMS • Toast / acknowledgement system
 * Used by every page: forms, filters, cart, toggles.
 */
(function () {
  function ensureToast() {
    var toast = document.getElementById('app-toast');
    if (toast) return toast;

    toast = document.createElement('div');
    toast.id = 'app-toast';
    toast.className = 'toast-notification';
    toast.setAttribute('role', 'status');
    toast.innerHTML =
      '<div class="toast-icon">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20">' +
          '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>' +
        '</svg>' +
      '</div>' +
      '<div class="toast-message"></div>';
    document.body.appendChild(toast);
    return toast;
  }

  window.showToast = function (message) {
    var toast = ensureToast();
    var msgEl = toast.querySelector('.toast-message');
    if (msgEl) msgEl.textContent = message;

    toast.classList.add('show');
    clearTimeout(window.toastTimer);
    window.toastTimer = setTimeout(function () {
      toast.classList.remove('show');
    }, 3500);
  };
})();
