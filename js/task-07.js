const fontSizeController = document.querySelector("input#font-size-control");
const textFontSize = document.querySelector("span#text");

const fontSizeChange = () => {
  textFontSize.style.fontSize = fontSizeController.value + "px";
};

fontSizeController.addEventListener("input", fontSizeChange);
