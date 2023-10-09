// Launch 14 days from now
const launchDate = new Date();
launchDate.setDate(launchDate.getDate() + 14);

const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secsEl = document.getElementById('secs');

const intervalID = setInterval(() => {
  const now = new Date();
  // Time difference
  const MS = launchDate - now;
  const secs = Math.floor(MS / 1000) % 60;
  const mins = Math.floor(MS / 1000 / 60) % 60;
  const hours = Math.floor(MS / 1000 / 60 / 60) % 24;
  const days = Math.floor(MS / 1000 / 60 / 60 / 24);

  updateTimer(daysEl, days);
  updateTimer(hoursEl, hours);
  updateTimer(minsEl, mins);
  updateTimer(secsEl, secs);

  if (days == 0 && hours == 0 && mins == 0 && secs == 0) {
    clearInterval(intervalID);
  }
}, 1000);

function updateTimer(timerEl, value) {
  const nowEls = timerEl.querySelectorAll('.timer-now');
  const nextEls = timerEl.querySelectorAll('.timer-next');

  // If value is updaetd
  if (nowEls[0].textContent != value) {
    const padded = value.toString().padStart(2, '0');

    nextEls.forEach((el) => {
      el.textContent = padded;
    });
    timerEl.classList.add('flip');

    // Wait .9 secs to reset transition
    setTimeout(() => {
      nowEls.forEach((el) => {
        el.textContent = padded;
      });
      timerEl.classList.remove('flip');
    }, 900);
  }
}
