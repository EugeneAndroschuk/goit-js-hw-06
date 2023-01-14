const inputControl = document.querySelector("#font-size-control");
const spanText = document.querySelector("#text");

inputControl.addEventListener('input', () => {
    spanText.style.fontSize = `${inputControl.value}px`;
})