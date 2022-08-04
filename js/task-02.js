const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");
console.log(ingredientsList);

const ingredientsArr = [];

ingredients.forEach((el) => {
  const ingredientItem = document.createElement("li");
  ingredientItem.classList.add("item");
  ingredientItem.textContent = el;
  ingredientsArr.push(ingredientItem);
});

ingredientsList.append(...ingredientsArr);
