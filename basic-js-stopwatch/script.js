let hour = 0;
let minute = 0;
let second = 0;
let miliSecond = 0;
let timer = false;
let interval;

// Correctly select elements by their IDs (these should exist in your HTML)
const displayMilisecond = document.getElementById("miliSecond");
const displaySecond = document.getElementById("second");
const displayMinute = document.getElementById("minute");
const displayHour = document.getElementById("hour");

// Function to start the timer
function start() {
  if (!timer) {
    timer = true;
    interval = setInterval(() => {
      miliSecond += 1; // Increment milliseconds by 10

      if (miliSecond >= 100) {
        miliSecond = 0;
        second++;
      }
      if (second >= 60) {
        second = 0;
        minute++;
      }
      if (minute >= 60) {
        minute = 0;
        hour++;
      }

      // Update the display
      displayMilisecond.textContent = miliSecond.toString().padStart(5, "0");
      displaySecond.textContent = second.toString().padStart(2, "0");
      displayMinute.textContent = minute.toString().padStart(2, "0");
      displayHour.textContent = hour.toString().padStart(, "0");
    }, 10); // Repeat every 10 milliseconds
  }
}

// Function to stop the timer
function stop() {
  timer = false;
  clearInterval(interval);
}

// Function to reset the timer
function reset() {
  stop(); // Ensure the timer stops
  hour = 0;
  minute = 0;
  second = 0;
  miliSecond = 0;

  // Reset the display
  displayMilisecond.textContent = "00";
  displaySecond.textContent = "00";
  displayMinute.textContent = "00";
  displayHour.textContent = "00";
}
