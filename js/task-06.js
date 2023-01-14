const inputElement = document.querySelector("#validation-input");
const dataLength = Number(inputElement.dataset.length);

inputElement.addEventListener('blur', () => {
    inputElement.classList.remove("valid", "invalid");
    if (inputElement.value.length === dataLength)
    inputElement.classList.add("valid");
    else inputElement.classList.add("invalid");
})