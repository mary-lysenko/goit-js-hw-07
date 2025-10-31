const inputElem = document.querySelector("#name-input");
const outputElem = document.querySelector("#name-output");

inputElem.addEventListener("input", () => {
  const nameElem = inputElem.value.trim();

  if (nameElem === "") {
    outputElem.textContent = "Anonymous";
  } else {
    outputElem.textContent = nameElem;
  }
});
