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
      displaySpeed();
    } else {
      seconds--;
    }
  }

  updateTimer();

  const timerInterval = setInterval(updateTimer, 1000);
}
function displaySpeed() {
  var speed = Math.floor(
    document.querySelector("#textbox").value.length / 1.25
  );
  document.querySelector("#speed").innerHTML = speed + "WPM";
  document.querySelector("#restart").style.display = "inline-block";
}
function restart() {
  document.querySelector("#restart").style.display = "none";
  location.reload();
}
