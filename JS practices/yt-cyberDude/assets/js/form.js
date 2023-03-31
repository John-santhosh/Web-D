const formEl = document.forms.feedback;
// console.log(formEl.elements);

let { terms } = formEl.elements;

// console.log(terms);
let details = {
  name: "john",
  age: 22,
  add: "asdfqwe",
  gender: "male",
};

// let { age } = details;
// console.log(123);
// console.log([...details]);

// console.log(age);

formEl.addEventListener("submit", (e) => {
  e.preventDefault();

  let formData = new FormData(formEl);
  console.log([...formData]);
});

formEl.addEventListener("formdata", (e) => {
  // console.log(e.formData.entries());
  let formdata = e.formData;
  // console.log([...formdata.entries()]);
  // console.log(formdata);
  // console.log(Array.from(formdata.entries()));
  // console.log([...e.formData]);
  for (var [key, value] of formdata.entries()) {
    console.log(key, value);
  }
});

// console.log();
const nameEl = formEl.elements.fullName;

nameEl.addEventListener("cut", () => {
  console.log("copy prohibited");
  // alert("copy prohibited");
});

// console.log(formEl.elements);

// console.log()
const radioContainer = document.querySelector(".radio-class");

// console.log(radioContainer);

const all = [...formEl];
radioContainer.addEventListener("change", (e) => {
  // console.log("changed");

  console.log(e.target.value);
  if (e.target.dataset.id == "contribution") {
    setTimeout(() => {
      alert("Thanks for contribution");
    }, 1000);
  }
});

const checkSection = document.querySelector(".check-class");
const hobbies = formEl.elements.hobbies;
const hobbyList = [...hobbies];
checkSection.addEventListener("change", (e) => {
  hobbyList.forEach((hby) => console.log(hby.checked));
  // console.log(result);
});
