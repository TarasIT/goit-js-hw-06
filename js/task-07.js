const fontSizeController = document.querySelector("input#font-size-control");
const textChange = document.querySelector("span#text");

const fontSizeChange = () => {
  const currentFontSize = fontSizeController.value.toString() + "px";
  console.log((textChange.style.fontSize = currentFontSize));
};

fontSizeController.addEventListener("input", fontSizeChange);
