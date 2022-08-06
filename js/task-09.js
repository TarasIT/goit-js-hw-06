const colorValue = document.querySelector("span.color");
const colorSwitcher = document.querySelector("button.change-color");
const body = document.body;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function colorManager() {
  const randomColor = getRandomHexColor();
  colorValue.textContent = randomColor;
  body.style.backgroundColor = randomColor;
}

colorSwitcher.addEventListener("click", colorManager);
