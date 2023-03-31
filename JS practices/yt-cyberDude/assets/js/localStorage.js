let localStrInputs = document.querySelector("#local-str");

let value = {};

localStrInputs.addEventListener("submit", function (e) {
  e.preventDefault();
  let name = (fullName = document.getElementById("fname")).value;
  let passWord = (fullName = document.getElementById("pword")).value;

  let user = localStorage.getItem(name);
  let data = JSON.parse(user);
  console.log(data);

  if (!localStorage.getItem(name)) {
    let user = {
      name: name,
      passWord: passWord,
    };

    let json = JSON.stringify(user);
    localStorage.setItem(name, json);
    console.log("user added");
    return;
  }

  if (name == data.name) {
    if (passWord == data.passWord) {
      alert("login successful");
    } else {
      alert("wrong passwd");
    }
  } else {
    alert("wrong user name");
  }
  console.log(name);
});

// localStrInputs.addEventListener("submit", (e) => {
//   e.preventDefault();
//   // console.log(JSON.parse(localStorage[localStorage.key(0)]).fullName);
//   // if (
//   //   value.fullName == JSON.parse(localStorage[localStorage.key(0)]).fullName
//   // ) {
//   //   console.log(true);
//   // } else console.log(false);
//   localStrInputs.querySelectorAll("input").forEach((each) => {
//     value[each.name] = each.value;
//   });
//   // console.log(value);
//   // console.log(value.fullName);
//   localStorage.setItem(value.fullName, JSON.stringify(value));
//   // console.log(JSON.parse(localStorage.key(0)));
// });
