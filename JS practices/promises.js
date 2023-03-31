// let myPromise = new Promise(function (resolve, reject) {
//   const a = 5;
//   const b = 7;

//   setTimeout(() => {
//     if (a === b) {
//       resolve("both are equal");
//     } else {
//       reject("Not equal");
//     }
//   }, 2000);
// });

// console.log(myPromise);
// myPromise.then(function (result) {
//   console.log(result);
// });

// myPromise.catch(function (err) {
//   console.log(err);
// });

function placeOrder(drink) {
  return new Promise(function (resolve, reject) {
    if (drink === "coffee") {
      resolve("order for coffee received");
    } else {
      reject("other order rejected");
    }
  });
}
function precessOrder(order) {
  return new Promise(function (resolve) {
    console.log("order is being processed");
    resolve(`${order} is served`);
  });
}

// placeOrder("coffee")
//   .then(function (orderPlaced) {
//     console.log(orderPlaced);
//     let orderIsProcessed = precessOrder(orderPlaced);
//     return orderIsProcessed;
//   })
//   .then(function (processOrder) {
//     console.log(processOrder);
//   });

// for handling promises by a function we can use try catch block
async function serveOrder() {
  try {
    let orderPlaced = await placeOrder("coffee");
    console.log(orderPlaced);
    let processed = await precessOrder(orderPlaced);
    console.log(processed);
  } catch (err) {
    console.log(err);
  }
}
// serveOrder();

//
// fetch("https://fakestoreapi.com/products")
//   .then(function (res) {
//     return res.json();
//   })
//   .then(function (data) {
//     console.log(data);
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

// async function apiJson() {
//   let res = await fetch("https://jsonplaceholder.typicode.com/users");
//   let data = await res.json();

//   let name = data.map((item) => item.name);
//   console.log(name);
// }

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//     // dogContainer +=
//     let name = data
//       .map(
//         (item) =>
//           `<h3>user name : ${item.name}</h3>
//               <p><strong>Email</strong> : ${item.email}</p>
//               <p><strong>Address</strong>: ${item.address.street},${item.address.suite},${item.address.city},latitude and longitude${item.address.geo.lat},${item.address.geo.lng}</p>
//               <p><strong>phone :</strong>${item.phone}</p>
//               <p><strong>Company : </strong> ${item.company.name}</p>
//               <p><strong>Website : </strong> ${item.website}</p>`
//       )
//       .join("");
//     dogContainer.innerHTML = name;
//     // let a =
//   })
//   .catch(function (err) {
//     console.log(err);
//   });
