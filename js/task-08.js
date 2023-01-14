const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;

  const emailInput = formElements.email.value;
  const passwordInput = formElements.password.value;

  if (emailInput === "" || passwordInput === "")
    alert("Всі поля повинні бути заповнені");
  else {
    const formData = { emailInput, passwordInput };

    console.log(formData);
    event.currentTarget.reset();
  }
}
