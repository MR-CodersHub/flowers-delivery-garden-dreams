/**
 * GARDEN DREAMS • Client-side form validation & acknowledgement
 * Applies to every <form data-validate="..."> on the site:
 *   contact | newsletter | login | signup | notify | faq | settings
 * Shows inline errors + a success acknowledgement box + a toast.
 */
(function () {
  var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  var MESSAGES = {
    required: 'This field is required.',
    email: 'Please enter a valid email address.',
    min: 'Please use at least {min} characters.',
    match: 'The two values do not match.',
    checked: 'Please accept this to continue.',
    tel: 'Please enter a valid phone number.'
  };

  function msg(type, extra) {
    var m = MESSAGES[type] || MESSAGES.required;
    if (extra) m = m.replace('{min}', extra);
    return m;
  }

  function errorIcon() {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>';
  }

  function successIcon() {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>';
  }

  function getErrorEl(field) {
    var wrap = field.closest('.form-group') || field.closest('.password-wrap') || field.closest('.form-check') || field.parentElement;
    if (!wrap) return null;
    var existing = wrap.querySelector('.field-error');
    if (existing) return existing;
    var el = document.createElement('div');
    el.className = 'field-error';
    el.innerHTML = errorIcon() + '<span></span>';
    wrap.appendChild(el);
    return el;
  }

  function clearError(field) {
    field.classList.remove('is-invalid');
    var wrap = field.closest('.form-group') || field.closest('.password-wrap') || field.closest('.form-check') || field.parentElement;
    if (!wrap) return;
    var el = wrap.querySelector('.field-error');
    if (el) el.remove();
    if (wrap.classList) wrap.classList.remove('is-invalid');
  }

  function showError(field, message) {
    var el = getErrorEl(field);
    field.classList.add('is-invalid');
    var wrap = field.closest('.form-group') || field.closest('.form-check');
    if (wrap && wrap.classList) wrap.classList.add('is-invalid');
    if (el) el.querySelector('span').textContent = message;
  }

  function validateField(field) {
    var value = (field.value || '').trim();

    if (field.type === 'checkbox') {
      if (field.hasAttribute('required') && !field.checked) {
        showError(field, msg('checked'));
        return false;
      }
      clearError(field);
      return true;
    }

    if (field.hasAttribute('required') && !value) {
      showError(field, field.getAttribute('data-error-required') || msg('required'));
      return false;
    }

    if (!value) { clearError(field); return true; }

    if (field.type === 'email' || field.getAttribute('data-rule') === 'email') {
      if (!EMAIL_RE.test(value)) {
        showError(field, field.getAttribute('data-error-email') || msg('email'));
        return false;
      }
    }

    if (field.type === 'tel' || field.getAttribute('data-rule') === 'tel') {
      if (!/^[+()\-.\s\d]{7,20}$/.test(value)) {
        showError(field, msg('tel'));
        return false;
      }
    }

    var min = field.getAttribute('minlength');
    if (min && value.length < parseInt(min, 10)) {
      showError(field, msg('min', min));
      return false;
    }

    var minWords = field.getAttribute('data-min-words');
    if (minWords && value.split(/\s+/).length < parseInt(minWords, 10)) {
      showError(field, msg('min', minWords) + ' (' + minWords + ' words minimum).');
      return false;
    }

    var confirmSel = field.getAttribute('data-confirm');
    if (confirmSel) {
      var target = document.querySelector(confirmSel);
      if (target && value !== target.value) {
        showError(field, msg('match'));
        return false;
      }
    }

    clearError(field);
    return true;
  }

  function successMessages(type) {
    var map = {
      contact: {
        title: 'Message sent — we will reply within one business day.',
        body: 'Thank you for reaching out. A member of our florist team will email you back shortly. For anything urgent, call the studio on (042) 555-0182.'
      },
      newsletter: {
        title: 'You are on the list!',
        body: 'Welcome to the Morning Journal — your 10% off first-order code is on its way to your inbox.'
      },
      login: {
        title: 'Welcome back to Garden Dreams!',
        body: 'You are signed in. Taking you to your dashboard…'
      },
      signup: {
        title: 'Account created successfully!',
        body: 'Your Garden Dreams account is ready. Check your inbox to confirm your email and claim your welcome bouquet credit.'
      },
      notify: {
        title: 'You are on the early-access list!',
        body: 'We will email you the moment the new studio collection launches — no other spam, we promise.'
      },
      faq: {
        title: 'Question received!',
        body: 'Our support florists will answer your question by email within one business day.'
      },
      settings: {
        title: 'Preferences saved!',
        body: 'Your account settings have been updated successfully.'
      },
      generic: {
        title: 'Submitted successfully!',
        body: 'Thank you — your details have been received.'
      }
    };
    return map[type] || map.generic;
  }

  function showFormSuccess(form, type) {
    var existing = form.querySelector('.form-success');
    var data = successMessages(type);
    var html = successIcon() + '<div><strong>' + data.title + '</strong>' + data.body + '</div>';

    if (existing) {
      existing.innerHTML = html;
      existing.classList.add('show');
    } else {
      var box = document.createElement('div');
      box.className = 'form-success show';
      box.setAttribute('role', 'status');
      box.innerHTML = html;
      form.appendChild(box);
    }
    showToast(data.title);
  }

  function initForm(form) {
    var type = form.getAttribute('data-validate') || 'generic';
    var fields = form.querySelectorAll('input, textarea, select');

    fields.forEach(function (field) {
      var evt = field.type === 'checkbox' || field.tagName === 'SELECT' ? 'change' : 'blur';
      field.addEventListener(evt, function () { validateField(field); });
      field.addEventListener('input', function () {
        if (field.classList.contains('is-invalid')) validateField(field);
      });
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var valid = true;
      var firstInvalid = null;
      fields.forEach(function (field) {
        if (!validateField(field)) {
          valid = false;
          if (!firstInvalid) firstInvalid = field;
        }
      });

      if (!valid) {
        if (firstInvalid) {
          firstInvalid.focus();
          firstInvalid.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        showToast('Please fix the highlighted fields and try again.');
        return;
      }

      var btn = form.querySelector('[type="submit"]');
      var original = btn ? btn.innerHTML : '';
      if (btn) {
        btn.disabled = true;
        btn.innerHTML = 'Sending…';
      }

      setTimeout(function () {
        if (btn) {
          btn.disabled = false;
          btn.innerHTML = original;
        }
        showFormSuccess(form, type);
        form.reset();
        fields.forEach(clearError);
      }, 650);
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('form[data-validate]').forEach(initForm);
  });
})();
