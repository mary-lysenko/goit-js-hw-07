function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnElem = document.querySelector(".change-color");
const spanElem = document.querySelector(".color");
const bodyElem = document.body;

btnElem.addEventListener("click", () => {
  const randomColor = getRandomHexColor();
  bodyElem.style.backgroundColor = randomColor;
  spanElem.textContent = randomColor;
});
