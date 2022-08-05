const userNumberInput = document.querySelector("div#controls > input");
const createButton = document.querySelector("div > button[data-create]");
const destroyButton = document.querySelector("div > button[data-destroy]");
const boxesCollection = document.querySelector("div#boxes");
let initialBoxSizeValue = 30;
let userInputValue = 0;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount) {
  boxesCollection.innerHTML = `<div></div>`.repeat(amount);

  const newBoxes = document.querySelectorAll("div#boxes > div");

  [...newBoxes].forEach((box) => {
    box.style.width = initialBoxSizeValue + "px";
    box.style.height = initialBoxSizeValue + "px";
    box.style.backgroundColor = getRandomHexColor();
    initialBoxSizeValue = initialBoxSizeValue + 10;
  });
}

function inputNumber(event) {
  userInputValue = event.currentTarget.value;
}

function createNewBoxes() {
  createBoxes(userInputValue);
}

function destroyBoxes() {
  boxesCollection.innerHTML = "";
}

userNumberInput.addEventListener("input", inputNumber);
createButton.addEventListener("click", createNewBoxes);
destroyButton.addEventListener("click", destroyBoxes);
