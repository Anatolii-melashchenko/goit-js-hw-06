const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatoes",
  "Herbs",
  "Condiments",
];

const ingredientsEl = document.querySelector("#ingredients");

const ingList = ingredients.map((ingredient) => {
  const ingredientsListEl = document.createElement("li");

  ingredientsListEl.textContent = ingredient;
  ingredientsListEl.classList.add("item");

  return ingredientsListEl;
});

ingredientsEl.append(...ingList);
