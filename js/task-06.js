const textInput = document.querySelector("input#validation-input");
const validInputLength = Number(textInput.getAttribute("data-length"));
let userInputLength;

const inputLengthCounter = (event) => {
  userInputLength = event.currentTarget.value.length;
};

const validInputLengthChecker = () => {
  userInputLength === validInputLength
    ? (textInput.style.borderColor = "#4caf50")
    : (textInput.style.borderColor = "#f44336");
};

textInput.addEventListener("input", inputLengthCounter);
textInput.addEventListener("blur", validInputLengthChecker);
