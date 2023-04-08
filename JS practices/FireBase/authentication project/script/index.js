// let passWord = document.querySelector("#pword");
// let confirmPassWord = document.querySelector("#Cpword");
// let errorMsg = document.querySelector(".error");
// let successMsg = document.querySelector(".success");
// let passwordField = document.querySelectorAll('[type="password"]');
// // const alertBox = document.querySelector(".alert");
// let flag = false;
// const body = document.querySelector("body");
// const formEl = document.forms.loginForm;

// formEl.addEventListener("submit", (e) => {
//   // console.log(flag);
//   e.preventDefault();
//   // loginSuccess();

//   new FormData(formEl);
//   // if (false) return;
// });

// formEl.addEventListener("formdata", (e) => {
//   // checking password match
//   // if (flag == false) {
//   //   return;
//   // }

//   // converting form values into object
//   let formData = Object.fromEntries(e.formData);

//   let { firstName, email, confirmPassword: cPassword } = formData;
//   console.log(email, cPassword);
//   console.log(formData);
//   createUserWithEmailAndPassword();
//   // let email = formData.email;

//   // checking for user
//   // if (localStorage.getItem(email)) {
//   //   alertBox.textContent = "Email already exist";
//   //   return;
//   // }

//   // location.href = "login.html";

//   // let inputs = [...formEl.elements];
//   // inputs.forEach((element) => {
//   //   element.value = "";
//   // });

//   // converting object to json
//   // const json = JSON.stringify(formData);

//   // setting values to localStorage
//   // localStorage.setItem(email, json);

//   //
//   // loginSuccess();
// });

// window.addEventListener("load", () => {
//   body.style.transform = "translate(0)";
// });

// function loginSuccess() {
// body.style.transform = "translate(-100%)";
// setTimeout(() => {
//   body.style.transform = "scale(0)";
// }, 3000);
// successMsg.style.transform = "scale(1)";
// setTimeout(() => {
//   successMsg.style.transform = "scale(0)";
// }, 3000);
// }

// checking passwords
// passwordField.forEach((each) => {
//   each.addEventListener("keyup", () => {
//     // console.log(flag);
//     if (passWord.value === "" || confirmPassWord === "") return;
//     passWord.value === confirmPassWord.value ? match() : misMatch();
//   });
// });

// passwd mismatch
function misMatch() {
  flag = false;
  errorMsg.classList.add("error");
  passWord.classList.add("invalid-border");
  confirmPassWord.classList.add("invalid-border");
}

// passwd match
function match() {
  flag = true;
  errorMsg.classList.remove("error");
  passWord.classList.remove("invalid-border");
  confirmPassWord.classList.remove("invalid-border");
}

// <!-- References -->
// <!-- 1.. https://firebase.google.com/docs/web/setup?authuser=0&hl=en#add-sdk-and-initialize -->
// <!-- 2.. https://firebase.google.com/docs/auth/web/password-auth?hl=en&authuser=0 -->

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";

// Create a new account by passing the new user's email address and password to createUserWithEmailAndPassword
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js";

import {
  getDatabase,
  set,
  get,
  update,
  ref,
  child,
} from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";

// ^^^ <ref> ===> put data in with a specific reference and where in the database i want to get data from ..

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5lT_DAs72EwiRvFa_CAJzC3t-rZ3Qv0o",
  authDomain: "project-1-auth-8e5bc.firebaseapp.com",
  databaseURL:
    "https://project-1-auth-8e5bc-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "project-1-auth-8e5bc",
  storageBucket: "project-1-auth-8e5bc.appspot.com",
  messagingSenderId: "53300164413",
  appId: "1:53300164413:web:11432516eda514b6a73754",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getDatabase();

const formEl = document.forms.loginForm;

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  // loginSuccess();
  new FormData(formEl);
});

formEl.addEventListener("formdata", (e) => {
  // converting form values into object
  let formData = Object.fromEntries(e.formData);

  let { firstName, email, confirmPassword: cPassword } = formData;

  // createUserWithEmailAndPassword(auth, email, password)
  createUserWithEmailAndPassword(auth, email, cPassword)
    .then((res) => {
      console.log(res);
      insertData(firstName, email, res.user.uid);
      // console.log(res.user.uid);
      signOut(auth);
      // location.href = "login.html";
    })
    .catch((err) => {
      console.log(err);
    });
});

function insertData(username, email, uid) {
  set(ref(db, "users/" + uid), {
    username: username,
    email: email,
  })
    .then(() => {
      console.log("from insertData() , added successfully");
      location.href = "login.html";
    })
    .catch((err) => {
      console.log("from insertData() ,", err);
    });
}
