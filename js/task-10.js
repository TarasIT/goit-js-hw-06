const userNumberInput = document.querySelector("div#controls > input");
const createBoxButton = document.querySelector("div > button[data-create]");
const destroyBoxButton = document.querySelector("div > button[data-destroy]");
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
    initialBoxSizeValue += 10;
    box.style.backgroundColor = getRandomHexColor();
  });

  // ------------SECOND SOLUTION OF BOXES CREATING

  // const newBoxes = [];
  // for (let i = 0; i < amount; i += 1) {
  //   const box = document.createElement("div");
  //   box.style.width = initialBoxSizeValue + "px";
  //   box.style.height = initialBoxSizeValue + "px";
  //   initialBoxSizeValue += 10;
  //   box.style.backgroundColor = getRandomHexColor();
  //   newBoxes.push(box);
  // }
  // boxesCollection.append(...newBoxes);
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
createBoxButton.addEventListener("click", createNewBoxes);
destroyBoxButton.addEventListener("click", destroyBoxes);
