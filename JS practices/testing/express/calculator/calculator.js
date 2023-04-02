const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log("started server on port 3000");
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  console.log(req.body.num1);
  let num1 = Number(req.body.num1);
  let num2 = Number(req.body.num2);
  // num1 = Number(num1);
  // num2 = Number(num2);
  let result = num1 + num2;
  // console.log(result);
  res.send("result is " + result);
});

// what happen we an user goes into localhost:3000/bmicalc =>
app.get("/bmicalc", (req, res) => {
  res.sendFile(__dirname + "/bmicalc.html");
});

// what should happen when somebody makes a post request to this route
app.post("/bmicalc", function (req, res) {
  // console.log(req.body.weight);
  // console.log(req.body.height);
  // console.log(
  //   "your BMI is :" + (Number(req.body.weight) + Number(req.body.height))
  // );

  let weight = Number(req.body.weight);
  let height = Number(req.body.height);
  res.send("your BMI is :" + (weight / height) * height);
});
