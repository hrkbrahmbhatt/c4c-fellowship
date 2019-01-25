var fs = require("fs");
var express = require("express");
var json = express.Router();
var path = require("path");
var csv = require("fast-csv");
var list = [];

/* Read & Convert Csv File into Json Format*/
var json_data = [];
var read = fs
  .createReadStream(path.join(__dirname, "c4cfellowship.csv"))
  .pipe(csv())
  .on("data", function(data) {
    json_data.push(data);
  })
  .on("end", function(data) {
    console.log("Read finished");
  });

/* API for CSV data in Json */
json.get("/api/jsondatacsv", function(req, res) {
  res.header("Content-Type", "application/json");
  res.send(json_data);
});

/* Using Json File Call */
// json.get("/api/jsondata", function(req, res) {
//   fs.readFile(path.join(__dirname, "c4c.json"), "utf8", (err, data) => {
//     if (err) {
//       reject(err);
//     } else {
//       res.header("Content-Type", "application/json");
//       res.send(JSON.stringify(JSON.parse(data)));
//     }
//   });
// });

module.exports = json;
