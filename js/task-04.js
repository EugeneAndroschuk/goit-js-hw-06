const counterValue = document.querySelector('#value');
let value = Number(counterValue.textContent);

const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');

btnDecrement.addEventListener('click', () => {
    value -= 1;
    counterValue.textContent = value;
    return value;
});

btnIncrement.addEventListener("click", () => {
  value += 1;
  counterValue.textContent = value;
  return value;
});