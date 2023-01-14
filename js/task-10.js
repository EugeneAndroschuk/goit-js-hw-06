function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector("input");
const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const divOfBoxes = document.querySelector("#boxes");

console.log(btnCreate.textContent);
console.log(btnDestroy.textContent);

btnCreate.addEventListener("click", onBtnCreate);

function createBoxes(amount) {
  const listOfBoxes = [];
  let divWidth = 30;
  let divHeight = 30;

  for (let i = 0; i < amount; i += 1) {
    const divEl = document.createElement("div");
    divEl.style.width = `${divWidth}px`;
    divEl.style.height = `${divHeight}px`;
    divEl.style.backgroundColor = getRandomHexColor();

    listOfBoxes.push(divEl);
    divWidth += 10;
    divHeight += 10;
  }

  divOfBoxes.append(...listOfBoxes);
}

function onBtnCreate() {
  const numberOfBoxes = Number(input.value);
  createBoxes(numberOfBoxes);
}

btnDestroy.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  divOfBoxes.innerHTML = "";
  input.value = "";
}
