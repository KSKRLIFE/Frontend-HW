const body = document.querySelector("#body");
const input = document.querySelector("#input");
const button = document.querySelector("#button");
let intervalID = null;
let isRunning = false;

function generateRandomColorCode() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const colorCode = `rgb(${r}, ${g}, ${b})`;
  return colorCode;
}
function changeBackgroundColor() {
  const colorCode = generateRandomColorCode();
  body.style.backgroundColor = colorCode;
}

function startBackgroundChange() {
  if (!isRunning) {
    if (input.value) {
      const intervalValue = input.value;
      intervalID = setInterval(changeBackgroundColor, intervalValue * 1000);
      button.textContent = "Stop";
      button.style.backgroundColor = "red";
      isRunning = true;
    } else {
      intervalID = setInterval(changeBackgroundColor, 3000);
      button.textContent = "Stop";
      button.style.backgroundColor = "red";
      isRunning = true;
    }
  } else {
    clearInterval(intervalID);
    button.textContent = "Start";
    button.style.backgroundColor = "blue";
    isRunning = false;
  }
}

button.addEventListener("click", startBackgroundChange);
