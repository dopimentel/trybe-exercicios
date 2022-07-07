// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

function brokenLink(event) {
  event.preventDefault();
}
HREF_LINK.addEventListener('click', brokenLink);

function box(event) {
  event.preventDefault();
}
INPUT_CHECKBOX.addEventListener('click', box);

function text(event) {
  if (event.key !== 'a') {
  event.preventDefault();
  }
}
INPUT_TEXT.addEventListener('keypress', text);

