const inputElement = document.querySelector("#name-input");
const outputElement = document.querySelector("#name-output");

inputElement.addEventListener('input', () => {
    if (inputElement.value != "") outputElement.textContent = inputElement.value;
    else outputElement.textContent = "Anonymous";
})