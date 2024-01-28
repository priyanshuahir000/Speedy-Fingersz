document.querySelector("#textbox").addEventListener(
  "input",
  function () {
    startCountdown();
  },
  { once: true }
);
function startCountdown() {
  let seconds = 15;
  const timerDisplay = document.querySelector(".seconds");

  function updateTimer() {
    timerDisplay.textContent = seconds + "s";

    if (seconds === 0) {
      clearInterval(timerInterval);
      timerDisplay.textContent = "Time's up!";
    } else {
      seconds--;
    }
  }

  updateTimer();

  const timerInterval = setInterval(updateTimer, 1000);
}
