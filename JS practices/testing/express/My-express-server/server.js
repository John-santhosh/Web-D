const express = require("express");
let app = express();

app.get("/", function (request, response) {
  // console.log(request);
  response.send("hello from server");
});

app.get("/about", (req, res) => {
  res.send("This server belongs to John..");
});
app.get("/category1", (req, res) => {
  res.send("This is server category");
});

app.listen(3000, function () {
  console.log("server started on port 3000");
});
