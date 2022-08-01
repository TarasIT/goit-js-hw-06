const userNameInput = document.querySelector("input#name-input");
const userNameOutput = document.querySelector("span#name-output");

const userNameDisplay = (event) => {
  userNameInput.value !== ""
    ? (userNameOutput.textContent = event.currentTarget.value)
    : (userNameOutput.textContent = "Anonymous");
};
userNameInput.addEventListener("input", userNameDisplay);
