const express = require("express");
const http = require("http");
const path = require("path");
const routes = require("./routes/index");
const api = require("./controllers/api/index");
var app = express();
//all environment
app.set("port", process.env.PORT || 3000);
app.set("view engine", "html");
app.set("views", __dirname + "/views" + "/");

app.use(routes);
app.use(api);
//get route from public directory
app.use(express.static(path.join(__dirname, "public")));
//access files inside src
// app.use(express.static(__dirname + "/src"));

var server = http.createServer(app).listen(app.get("port"), function() {
  console.log("c4c fellowship");
  console.log("Express Server listening on port " + app.get("port"));
});
