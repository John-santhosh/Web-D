const formEl = document.forms.loginForm;
let email = [...formEl.elements][0]; //selecting email input
let passwd = [...formEl.elements][1]; //selecting passwd input
const alertText = document.querySelector(".alert");
const checkBox = [...formEl.elements][2]; // selecting checkBox

// check button action (password unhide)
checkBox.addEventListener("change", function () {
  if (this.checked) {
    passwd.setAttribute("type", "text");
  } else {
    passwd.setAttribute("type", "password");
  }
});

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js";

import {
  ref,
  onValue,
  getDatabase,
} from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyA5lT_DAs72EwiRvFa_CAJzC3t-rZ3Qv0o",
  authDomain: "project-1-auth-8e5bc.firebaseapp.com",
  projectId: "project-1-auth-8e5bc",
  databaseURL:
    "https://project-1-auth-8e5bc-default-rtdb.asia-southeast1.firebasedatabase.app",
  storageBucket: "project-1-auth-8e5bc.appspot.com",
  messagingSenderId: "53300164413",
  appId: "1:53300164413:web:11432516eda514b6a73754",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase();

// submit events
formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  new FormData(formEl);
});
formEl.addEventListener("formdata", (e) => {
  // converting form values into object
  let formData = Object.fromEntries(e.formData);

  let { email, password } = formData;

  // signInWithEmailAndPassword(auth, email, password)
  signInWithEmailAndPassword(auth, email, password)
    .then((res) => {
      console.log(res.user.uid);

      // reading data from database
      const userDetails = ref(db, `users/${res.user.uid}`);
      onValue(userDetails, (snapshot) => {
        console.log(snapshot.val());
      });
      location.href = `profile.html?id=${res.user.uid}`;
      // insertData(firstName, email, res.user.uid);
    })
    .catch((err) => {
      if (err.code === "auth/invalid-email") {
        alertText.textContent = "Invalid Email!";
        alertError();
      } else if (err.code === "auth/wrong-password") {
        alertText.textContent = "Invalid password!";
        alertError();
      } else if (err.code === "auth/user-not-found") {
        alertText.textContent = "User not found !";
        alertError();
      } else {
        console.log(err);
      }
    });
});
// function insertData(username, email, uid) {
//   set(ref(db, "users/" + uid), {
//     username: username,
//     email: email,
//   })
//     .then(() => {
//       console.log("from insertData() , added successfully");
//     })
//     .catch((err) => {
//       console.log("from insertData() ,", err);
//     });
// }
// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     console.log(user.email);
//   } else {
//     console.log("error");
//   }
// });

function alertError() {
  alertText.classList.add("slide-in");
  setTimeout(() => {
    alertText.classList.remove("slide-in");
  }, 1200);
}
