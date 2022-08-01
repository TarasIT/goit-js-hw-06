const displayValue = document.querySelector("#counter > #value");
const decrementCounter = document.querySelector(
  '#counter > button[data-action="decrement"]'
);
const incrementCounter = document.querySelector(
  '#counter > button[data-action="increment"]'
);

let counterValue = 0;

const decreaseValue = () => {
  console.log((displayValue.innerHTML = counterValue -= 1));
};
const increaseValue = () => {
  console.log((displayValue.innerHTML = counterValue += 1));
};

decrementCounter.addEventListener("click", decreaseValue);
incrementCounter.addEventListener("click", increaseValue);
