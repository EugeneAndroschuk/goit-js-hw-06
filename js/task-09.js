function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const spanBgrdColor = document.querySelector(".color");
const btnChangeColor = document.querySelector(".change-color");

btnChangeColor.addEventListener("click", onButtonChangeColor);

function onButtonChangeColor() {
  const newColor = getRandomHexColor();
  spanBgrdColor.textContent = newColor;
  document.body.style.backgroundColor = newColor;
}