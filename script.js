const toggleBtn = document.getElementById('abtMeButton');
const aboutSection = document.getElementById('abtMeSection');
const toggleBtn2 = document.getElementById('msgButton');
const messageSection = document.getElementById('msgForU');

toggleBtn.addEventListener('click', () => {
  aboutSection.classList.toggle('hidden');

    if (aboutSection.classList.contains('hidden')) {
    toggleBtn.textContent = 'About Me';
  } else {
    toggleBtn.textContent = 'Hide Details';
  }
});

toggleBtn2.addEventListener('click', () => {
  messageSection.classList.toggle('hidden');

  if (messageSection.classList.contains('hidden')) {
    toggleBtn2.textContent = 'Message for You';
  } else {
    toggleBtn2.textContent = 'Hide Message';
  }
});

function updateClock() {
    const now = new Date();

    const timeString = now.toLocaleTimeString();

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = now.toLocaleDateString(undefined, options);

    document.getElementById('time-display').textContent = timeString;
    document.getElementById('date-display').textContent = dateString;
}

updateClock();

setInterval(updateClock, 1000);
