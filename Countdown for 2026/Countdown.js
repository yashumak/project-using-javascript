// This program create at 11 jan 2025 and Fuck you
const targetDate = new Date("January 1, 2026 00:00:00").getTime();

const countdownInterval = setInterval(() => {
  const now = new Date().getTime();
  const timeLeft = targetDate - now;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;

  if (timeLeft < 0) {
    clearInterval(countdownInterval);
    document.querySelector("#countdown").innerHTML =
      "<h2>Happy New Year 2026!</h2>";
  }
}, 1000);
