const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const app = express();

app.listen(3000, () => {
  console.log("server started on port 3000");
});

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
  // res.send("server is up");
});

app.post("/", (req, res) => {
  let InputValueFromHTML = req.body.cityName;
  const units = "metric";
  apiId = "d4757c7636a66bec48e7538e1249bba2";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${InputValueFromHTML}&appid=${apiId}&units=${units}`;

  https.get(url, function (response) {
    // these "data" is from the api
    response.on("data", function (data) {
      let weatherData = JSON.parse(data);
      console.log(weatherData.name);
      res.write(
        `<h1>temperature in ${weatherData.name} is ${weatherData.main.temp} </h1>`
      );
      res.write(
        `<img src="http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png">`
      );
      res.send();
    });
  });
});
