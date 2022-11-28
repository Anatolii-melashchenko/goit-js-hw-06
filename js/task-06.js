const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener("blur", () => {
  if (inputRef.value.length == inputRef.dataset.length) {
    inputRef.classList.add("valid");
    inputRef.classList.remove("invalid");

    return;
  }
  inputRef.classList.add("invalid");
  inputRef.classList.remove("valid");
});
