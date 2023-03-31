const dogContainer = document.querySelector(".result");
const input = document.querySelector(".hero-inp");
const searchBtn = document.querySelector(".hero-search");
const btn = document.getElementById("hero-chg");
const heroName = document.querySelector(".name");

fetch("https://dog.ceo/api/breeds/image/random")
  .then((res) => res.json())
  .then(function (data) {
    // console.log(data.message);
    // dogContainer.innerHTML = `<img src="${data.message}" />`;
  });
// async function dogTurn()

const superHero = (hero) => {
  fetch(`https://www.superheroapi.com/api.php/2178373372351003/${hero}`)
    .then((response) => response.json())
    .then(function (data) {
      // console.log(data.name);
      // console.log(data.powerstats);
      heroName.textContent = data.name;
      dogContainer.innerHTML = `<img src="${data.image.url}" width=300/>`;
      heroStats(data);
    });
};
//12356
function heroStats(response) {
  let stats = Object.keys(response.powerstats)
    .map((each) => {
      return `<p>${each.toUpperCase()} : ${response.powerstats[each]}</p>`;
    })
    .join("");
  console.log(stats);
  dogContainer.innerHTML += stats;
}
const getSearchHero = (name) => {
  fetch(`https://superheroapi.com/api.php/2178373372351003/search/${name}`)
    .then((response) => response.json())
    .then(function (json) {
      dogContainer.innerHTML = `<img src="${json.results[0].image.url}" width=300/>`;
    });
};

//
searchBtn.addEventListener("click", () => {
  getSearchHero(input.value);
});
//
btn.addEventListener("click", () => {
  let random = Math.floor(Math.random() * 700);
  superHero(random);
});

// setTimeout(() => cons ole.log("john"), 3000);

let myPromise = new Promise(function (resolve, reject) {
  isReady = true;
  setTimeout(() => {
    isReady ? resolve("pay for the soup and leave the tip") : reject("no tip ");
  }, 2000);
});

// console.log(myPromise);

// myPromise
//   .then((resolve) => {
//     console.log(resolve);
//   })
//   .catch((err) => console.log(err));

const getSoup = async () => {
  try {
    const soup = await myPromise;
    console.log(soup);
  } catch (error) {
    console.log(error);
  }
};

// getSoup();

async function apireq() {
  try {
    const url = "https://dog.ceo/api/breeds/image/random";
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

// apireq();

async function postReq() {
  try {
    const url = "https://jsonplaceholder.typicode.com/posts";
    const response = await fetch(url, {
      method: "POST",
      body: new FormData(formEl),
    });

    const data = await response.json();
    console.log(data.id);
  } catch (err) {
    console.log(err);
  }
}

const formEl = document.forms.testForm;

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  // let formData = new FormData(formEl);
  postReq();
});

// formEl.addEventListener("formdata", () => {
//   console.log("form data submitted");

// });
// fetch(
//   "https://api.weatherbit.io/v2.0/current?lat=35.7796&lon=-78.6382&key=02a8a4b3fc4d45868c638f65524d8ffd&include=minutely"
// )
//   .then((response) => response.json())
//   .then((data) => console.log(data));

class Cars {
  constructor(model, color, speed) {
    this.model = model;
    this.color = color;
    this.speed = speed;
  }
}

class Bank {
  constructor(balance) {
    this.balance = balance;
  }

  withdraw(amount) {
    if (this.balance - amount <= 0) {
      alert(`❌ you only have ${this.balance}$`);
      return;
    }
    console.log(this.balance, amount);
    return (this.balance -= amount);
  }
  deposit(amount) {
    return (this.balance += amount);
  }
}

Bank.prototype.test = function () {
  console.log("success");
};
const john = new Bank(0);
console.log(john.balance);

console.log(john.deposit(200));
console.log(john.withdraw(100));

const display = $(".display");
const inputCash = $("input.input");
const deposit = $(".deposit");
const withdraw = $(".withdraw");
const balance = $(".balance");

const person = new Bank(0);
deposit.click(() => {
  if (inputCash.val() == "") {
    console.log(true);
    return;
  }
  person.deposit(parseInt(inputCash.val()));
  display.text(person.balance);
  inputCash.val("");
});

withdraw.click(() => {
  if (inputCash.val() == "") {
    return;
  }
  person.withdraw(parseInt(inputCash.val()));
  display.text(person.balance);
  inputCash.val("");
});

balance.click(() => {
  alert(`your balance : ${person.balance}`);
});
