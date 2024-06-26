var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
//
var model = require("./model/db.js"); //

var app = express();
app.use(cors());

// serves files in public folder
app.use(express.static("public"));

// NB:: this must be included to get JSON content sent with requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

///////////////////////////////////////////////////////////////////////////////////////////

// Update round
// model.updateRoundNumbers();

//
// routes
//

// /teams GET
app.route("/teams/").get(function (req, res) {
  model.getTeams(req, res);
});

// /players GET
app.route("/players/").get(function (req, res) {
  model.getPlayers(req, res);
});

// /results GET
app.route("/results/").get(function (req, res) {
  model.getResults(req, res);
});

// /results/div GET
app.route("/results/:div?").get(function (req, res) {
  model.getResultByDivision(req, res);
});

// /result/id PUT
app.route("/results/:id?").put(function (req, res) {
  model.updateResult(req, res);
});

// /result/id DELETE
app.route("/results/:id?").delete(function (req, res) {
  model.deleteResult(req, res);
});

// /login POST
app.route("/login").post(function (req, res) {
  model.login(req, res);
});

var myServer = app.listen(3000, function () {
  console.log("Server listening on port 3000");
});
