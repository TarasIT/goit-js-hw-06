const categories = document.querySelectorAll("li.item");
console.log("Number of categories:", categories.length);

categories.forEach((category) => {
  const categoryTitle = category.querySelector("h2").textContent;
  console.log("Category:", categoryTitle);
  const elementsAmount = category.querySelectorAll("ul > li").length;
  console.log("Elements:", elementsAmount);
});
