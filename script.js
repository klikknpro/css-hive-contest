let button;
let body;
let section;

function init() {
  button = document.getElementById("randomId");
  button.addEventListener("click", magic);
}

function magic() {
  body = document.querySelector("body");
  body.classList.toggle("magic-body");

  section = document.querySelector(".welcome");
  section.classList.toggle("magic-section");
}

window.addEventListener("load", init);
