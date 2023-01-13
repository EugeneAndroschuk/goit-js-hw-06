const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulIngredients = document.querySelector('ul')

const makeUl = ingredients.map(ingredient => {
  const elLi = document.createElement("li");
  elLi.textContent = ingredient;
  elLi.classList.add('item');
  return elLi;
});

ulIngredients.append(...makeUl);