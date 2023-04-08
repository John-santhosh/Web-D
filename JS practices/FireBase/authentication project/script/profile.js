const logoutBtn = document.querySelector(".logout");
let user = localStorage.getItem("currentUser");
let json = localStorage.getItem(user);
let data = JSON.parse(json);
const greet = document.querySelector(".greet");
const updateBtn = document.querySelector(".update");
const input = document.querySelector("input");
const removeBtn = document.querySelector(".deactivate");
const findBtn = document.querySelector(".find");
// console.log(data);

// document.title = `Welcome | ${data.firstName}`;

const greeting = document.querySelector(".greet");
document.addEventListener("DOMContentLoaded", () => {
  // greeting.textContent = `Welcome ${data.firstName}`;
});

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import {
  getAuth,
  signOut,
  onAuthStateChanged,
  deleteUser,
  reauthenticateWithCredential,
} from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js";

import {
  getDatabase,
  set,
  get,
  update,
  ref,
  child,
  onValue,
  remove,
} from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";

// Your web app's Firebase configuration
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase();

let url = new URLSearchParams(location.search);
let { id } = Object.fromEntries(url);
// console.log(id);

let details = ref(db, `users/${id}`);
onValue(details, (snapshot) => {
  console.log(snapshot.val());
  greet.textContent = snapshot.val().username;
});

// 5zR52sTQSZM0yLHM78MuIHt6j4J2
// ref(db, `users/${res.user.uid}`);
console.log(ref(db, `users/${id}`));
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log(auth.currentUser.email);
    console.log(user.uid);
  } else {
    location.href = "login.html";
  }
});

// set(ref(db, `users/${id}`), {
//   secondName: "santhosh",
// });

logoutBtn.addEventListener("click", () => {
  location.href = "login.html";
  signOut(auth);
});

updateBtn.addEventListener("click", () => {
  const content = input.value;
  update(ref(db, `users/${id}`), {
    username: content,
  })
    .then(() => {
      console.log("success updated");
    })
    .catch((err) => {
      console.log("error form update" + err);
    });
});

removeBtn.addEventListener("click", () => {
  if (confirm("Are you sure")) {
    // console.log(true);
    const user = auth.currentUser;
    // console.log(auth.currentUser);

    remove(ref(db, `users/${id}`));
    // To delete a user, the user must have signed in recently
    // const credential = promptForCredentials();
    // reauthenticateWithCredential(user, credential)
    //   .then(() => {
    //     deleteUser(user)
    //       .then(() => {
    //         console.log("userDeleted");
    //       })
    //       .catch((err) => {
    //         console.log(err);
    //       });
    //   })
    //   .catch((err) => {
    //     // An error ocurred
    //     // ...
    //     console.log(err);
    //   });
  }
});

// function promptForCredentials() {
//   return "john123@gmail.com";
// return
// prompt()
// {
//   email: "john123@gmail.com",
//   password: "123456",
// };
// }

// find
findBtn.addEventListener("click", () => {
  const dbref = ref(db);

  get(child(dbref, `users/${input.value}`)).then((snapshot) => {
    console.log(snapshot.val());
    // input.value = ;
    greet.textContent = `username : ${snapshot.val().username} , email ${
      snapshot.val().email
    }`;
  });
});
