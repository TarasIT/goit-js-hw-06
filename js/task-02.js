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

const firstIngredient = document.createElement("li");
firstIngredient.textContent = "Potatoes";
firstIngredient.classList.add("item");

const secondIngredient = document.createElement("li");
secondIngredient.textContent = "Mushrooms";
secondIngredient.classList.add("item");

const thirdIngredient = document.createElement("li");
thirdIngredient.textContent = "Garlic";
thirdIngredient.classList.add("item");

const fourthIngredient = document.createElement("li");
fourthIngredient.textContent = "Tomatos";
fourthIngredient.classList.add("item");

const fifthIngredient = document.createElement("li");
fifthIngredient.textContent = "Herbs";
fifthIngredient.classList.add("item");

const sixthIngredient = document.createElement("li");
sixthIngredient.textContent = "Condiments";
sixthIngredient.classList.add("item");

ingredientsList.append(
  firstIngredient,
  secondIngredient,
  thirdIngredient,
  fourthIngredient,
  fifthIngredient,
  sixthIngredient
);
