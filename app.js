"use strict";

var http = require("http");
var app = http.createServer(handler);

// Heroku provides the port in environment variable named `PORT`, 3000 for local development
app.listen(process.env.PORT || 3000);

function handler(req, res) {
  res.writeHead(200, { "Content-Type": "text/plain"});
  res.end("Hello, world!!!");
}
