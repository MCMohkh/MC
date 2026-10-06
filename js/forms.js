/* MC Joint — form handler.
 * Sends form submissions to a Google Apps Script web app (writes a row to a Google Sheet and
 * notifies by email / WhatsApp / Telegram). See the Apps Script file delivered with this change.
 *
 * Until MC_FORMS_ENDPOINT is set, forms fall back to a normal submit (Netlify Forms).
 */
(function () {
  var MC_FORMS_ENDPOINT = ''; // e.g. 'https://script.google.com/macros/s/AKfycb.../exec'
  var FALLBACK_EMAIL = 'info@mcjoint.in';

  var forms = document.querySelectorAll('form[data-mc-form]');
  if (!forms.length) return;

  Array.prototype.forEach.call(forms, function (form) {
    var opened = Date.now();
    var status = form.querySelector('.form-status');
    var btn = form.querySelector('[type=submit]');
    var btnText = btn ? btn.textContent : '';

    function say(msg, isError) {
      if (!status) return;
      status.hidden = !msg;
      status.textContent = msg || '';
      status.style.color = isError ? '#c00' : '';
    }

    form.addEventListener('submit', function (e) {
      if (!MC_FORMS_ENDPOINT) return; // not configured yet: normal submit
      e.preventDefault();
      if (form.querySelector('[name=bot-field]') && form.querySelector('[name=bot-field]').value) return; // honeypot

      var data = new URLSearchParams();
      new FormData(form).forEach(function (value, key) {
        if (key === 'form-name') return;
        data.append(key, value);
      });
      data.append('form', form.getAttribute('data-mc-form'));
      data.append('page', location.href);
      data.append('elapsed_ms', String(Date.now() - opened));

      if (btn) { btn.disabled = true; btn.textContent = 'Sending…'; }
      say('');

      // Apps Script web apps do not send CORS headers, so use no-cors (fire-and-forget).
      fetch(MC_FORMS_ENDPOINT, { method: 'POST', mode: 'no-cors', body: data })
        .then(function () { location.href = '/thanks.html'; })
        .catch(function () {
          if (btn) { btn.disabled = false; btn.textContent = btnText; }
          say('Sorry, that did not go through. Please try again, or email us at ' + FALLBACK_EMAIL + '.', true);
        });
    });
  });
})();
