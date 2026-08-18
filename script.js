const toggleBtn = document.getElementById('abtMeButton');
const aboutSection = document.getElementById('abtMeSection');
const toggleBtn2 = document.getElementById('msgButton');
const messageSection = document.getElementById('msgForU');
// Add a click listener to toggle the visibility
toggleBtn.addEventListener('click', () => {
  aboutSection.classList.toggle('hidden');

    if (aboutSection.classList.contains('hidden')) {
    toggleBtn.textContent = 'About Me';
  } else {
    toggleBtn.textContent = 'Hide Details';
  }
});

// Add a click listener to toggle the visibility of the message section
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

    // Format time (e.g., "14:05:09" or "2:05:09 PM" depending on user locale)
    const timeString = now.toLocaleTimeString();

    // Format date (e.g., "Tuesday, August 18, 2026")
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = now.toLocaleDateString(undefined, options);

    // Inject the strings into the HTML components
    document.getElementById('time-display').textContent = timeString;
    document.getElementById('date-display').textContent = dateString;
}

// Run the clock immediately when the page loads
updateClock();

// Refresh the clock every 1000 milliseconds (1 second)
setInterval(updateClock, 1000);
