var express = require("express");
var app = express();

app.use(function(req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "*");

  // Request methods you wish to allow
  res.setHeader("Access-Control-Allow-Methods", "GET");

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});

// assign quotes json file to variable
var quotes = require("./quotes.json");

app.get("/", function(req, res) {
  res.json(quotes);
});

app.get("/quote/random", function(req, res) {
  var id = Math.floor(Math.random() * quotes.length);
  var randQuote = quotes[id];
  res.json(randQuote);
});

app.get("/quote/:id", function(req, res) {
  if (quotes.length <= req.params.id || req.params.id < 0) {
    res.statusCode = 404;
    return res.send("Error 404 - Fry Quote Not Found");
  }
  var quote = quotes[req.params.id];
  res.json(quote);
});

app.listen(process.env.PORT || 5000);
