var path = require("path");
var express = require("express");
var api = require("./api");
var bodyParser = require("body-parser");
var port = 3001;

var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});
app.use(bodyParser.json());
app.use("/api", api);

app.listen(port, "localhost", function(err) {
  if (err) {
    return;
  }

  console.log("Listening at http://localhost:" + port);
});
