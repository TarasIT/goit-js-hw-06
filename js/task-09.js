const colorValue = document.querySelector("span.color");
const colorSwitch = document.querySelector("button.change-color");
const body = document.body;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function colorManager() {
  colorValue.textContent = getRandomHexColor();
  body.style.backgroundColor = getRandomHexColor();
}

colorSwitch.addEventListener("click", colorManager);
