const displayValue = document.querySelector("#counter > span#value");
const decrementButton = document.querySelector(
  '#counter > button[data-action="decrement"]'
);
const incrementButton = document.querySelector(
  '#counter > button[data-action="increment"]'
);

let counterValue = 0;

const decreaseValue = () => (displayValue.textContent = counterValue -= 1);
const increaseValue = () => (displayValue.textContent = counterValue += 1);

decrementButton.addEventListener("click", decreaseValue);
incrementButton.addEventListener("click", increaseValue);
