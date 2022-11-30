function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bgColorRef = document.querySelector(".color");
const changeColorBtnRef = document.querySelector(".change-color");
const bodyRef = document.querySelector("body");

changeColorBtnRef.addEventListener("click", onChangeColor);

function onChangeColor(event) {
  bgColorRef.textContent = getRandomHexColor();
  let newColor = bgColorRef.textContent;
  bodyRef.style.backgroundColor = newColor;
}
