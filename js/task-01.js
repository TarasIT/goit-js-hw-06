const categoriesCount = document.querySelectorAll("li.item").length;
console.log("Number of categories:", categoriesCount);

// -----------------------Animals

const firstCategoryList =
  document.body.firstElementChild.nextElementSibling.firstElementChild;

const firstCategoryTitle = firstCategoryList.querySelector("h2").textContent;
console.log("Category:", firstCategoryTitle);

const animalsCount = firstCategoryList.querySelectorAll("li").length;
console.log("Elements:", animalsCount);

// -----------------------Products

const secondCategoryList = firstCategoryList.nextElementSibling;

const secondCategoryTitle = secondCategoryList.querySelector("h2").textContent;
console.log("Category:", secondCategoryTitle);

const productsCount = secondCategoryList.querySelectorAll("li").length;
console.log("Elements:", productsCount);

// -----------------------Technologies

const thirdCategoryList = secondCategoryList.nextElementSibling;

const thirdCategoryTitle = thirdCategoryList.querySelector("h2").textContent;
console.log("Category:", thirdCategoryTitle);

const technologiesCount = thirdCategoryList.querySelectorAll("li").length;
console.log("Elements:", technologiesCount);
