const loginFormRef = document.querySelector(".login-form");

loginFormRef.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const elementsForm = event.currentTarget.elements;
  const email = elementsForm.email.value;
  const password = elementsForm.password.value;

  if (email === "" || password === "") {
    return alert("Всі поля мають бути заповнені");
  }

  const formData = {
    email,
    password,
  };
  console.log(formData);
  event.currentTarget.reset();
}
