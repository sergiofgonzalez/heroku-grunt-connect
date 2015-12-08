"use strict";

var path = require("path");
var http = require("http");
var fs = require("fs");

var app = http.createServer(function(req, res) {
  var url = req.url === "/" ? "/index.html" : req.url;
  var filename = path.join(process.cwd(), "build" + url);

  fs.readFile(filename, {encoding: "utf8"}, function(err, html) {
    res.writeHead(200);
    res.end(html);
  });
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("app listening on port:", port);
});
