const express = require("express");
const bodyParser = require("body-parser");
// const fs = require("fs");

const app = express();
const https = require("https");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, () => {
  console.log("port started on 3000");
});

app.post("/failure", (req, res) => {
  res.redirect("/");
});
app.get("/", (req, res) => {
  console.log("started");
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", (req, res) => {
  let fName = req.body.fname;
  let lName = req.body.lname;
  let email = req.body.email;

  const data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: fName,
          LNAME: lName,
        },
      },
    ],
  };
  const jsonData = JSON.stringify(data);
  const url = "https://us21.api.mailchimp.com/3.0/lists/6eaf453e95";

  const options = {
    method: "POST",
    auth: "john:9397f565e1e23302d8c6a1459b259a33-us21",
  };
  const request = https.request(url, options, (response) => {
    if (response.statusCode === 200) {
      res.sendFile(__dirname + "/success.html");
    } else {
      res.sendFile(__dirname + "/failure.html");
    }
    response.on("data", (data) => {
      let parsedJson = JSON.parse(data);
      console.log(parsedJson);
    });
  });

  // sending request with options(apikey and method) to mailchimp
  request.write(jsonData);
  request.end();
});
// api key
// 9397f565e1e23302d8c6a1459b259a33-us21

// list key
// 6eaf453e95
