let countEl = document.getElementById("count-el");

let button = document.getElementById("increment-btn");
let saveBtn = document.getElementById("save-btn");
let saveEl = document.getElementById("save-el");

let count = 0;

button.addEventListener("click", increment);
saveBtn.addEventListener("click", save);

function increment() {
  count += 1;
  countEl.textContent = count;
}

function save() {
  let countDash = count + "-";
  saveEl.textContent += countDash;
  countEl.textContent = 0;
  count = 0;
}





