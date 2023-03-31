let tableEle = document.querySelector("table");
let previousColor;

tableEle.addEventListener("click", (e) => {
  const target = e.target;
  if (target.tagName == "TH") return;
  if (previousColor) {
    previousColor.style.background = "";
  }

  e.target.closest("tr").style.background = "red";

  previousColor = e.target.closest("tr");
  // console.log(previousColor);
});

const donateForm = document.querySelector("#donate-form");
const supportAut = tableEle.nextElementSibling;

document.addEventListener("click", (e) => {
  let id = e.target.dataset.toggleId;
  if (!id) return;

  let form = document.getElementById(id);
  console.log((form.hidden = !form.hidden)); // form.hidden = true/false
});

donateForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const amount = e.target.querySelector("input").value;
  console.log(amount);
  alert(`Thanks for donating ${amount}$`);
});

// document.addEventListener("keyup", (event) => {
//   console.log(event);
//   console.log(event.code === "KeyZ");
//   if (event.key === "KeyZ" && (event.ctrlKey || event.metaKey)) {
//     console.log(true);
//   }
// });

// ball game
const container = document.querySelector(".container");

const ball = container.querySelector(".ball");
container.addEventListener("click", function (e) {
  console.log(e.clientX);
  console.log(e.clientY);
  // console.log(e);
  // console.log(e);
  // console.log(fieldCoords.left);

  ball.style.left = e.clientX - 45;
  ball.style.top = e.clientY - 45;
  // console.log(ball.getBoundingClientRect());
});

ball.addEventListener("click", (e) => {
  // ball.screenX = 176;
  // ball.screenY = 149;
});
