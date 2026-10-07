/**
 * GARDEN DREAMS • Coming soon — live countdown + launch progress
 */
(function () {
  function pad(n) { return n < 10 ? '0' + n : String(n); }

  document.addEventListener('DOMContentLoaded', function () {
    var boxDays = document.getElementById('cd-days');
    if (!boxDays) return;

    var boxHours = document.getElementById('cd-hours');
    var boxMins = document.getElementById('cd-mins');
    var boxSecs = document.getElementById('cd-secs');

    /* Launch date: 45 days from first visit, persisted so it never jumps */
    var KEY = 'garden_dreams_launch_at';
    var target = null;
    try { target = parseInt(localStorage.getItem(KEY), 10); } catch (e) {}
    if (!target || isNaN(target) || target < Date.now()) {
      target = Date.now() + (45 * 24 * 60 * 60 * 1000);
      try { localStorage.setItem(KEY, String(target)); } catch (e) {}
    }

    function tick() {
      var diff = Math.max(0, target - Date.now());
      var secs = Math.floor(diff / 1000);
      var days = Math.floor(secs / 86400);
      var hours = Math.floor((secs % 86400) / 3600);
      var mins = Math.floor((secs % 3600) / 60);
      var rem = secs % 60;

      if (boxDays) boxDays.textContent = pad(days);
      if (boxHours) boxHours.textContent = pad(hours);
      if (boxMins) boxMins.textContent = pad(mins);
      if (boxSecs) boxSecs.textContent = pad(rem);

      /* progress bar — 45 day campaign, 78% complete baseline */
      var total = 45 * 24 * 60 * 60 * 1000;
      var done = Math.min(100, Math.round(((total - diff) / total) * 100));
      var pct = Math.max(done, 78);
      var fill = document.getElementById('launch-fill');
      var label = document.getElementById('launch-pct');
      if (fill) fill.style.width = pct + '%';
      if (label) label.textContent = pct + '% ready';
    }

    tick();
    setInterval(tick, 1000);
  });
})();
