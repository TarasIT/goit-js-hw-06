const textInput = document.querySelector("input#validation-input");
const maxInputLength = Number(textInput.getAttribute("data-length"));
let userInputLength;

const inputLengthCounter = (event) => {
  userInputLength = event.currentTarget.value.length;
  console.log(userInputLength);
};

const validInputLengthChecker = () => {
  userInputLength <= maxInputLength
    ? (textInput.style.borderColor = "#4caf50")
    : (textInput.style.borderColor = "#f44336");
};

textInput.addEventListener("input", inputLengthCounter);
textInput.addEventListener("blur", validInputLengthChecker);
