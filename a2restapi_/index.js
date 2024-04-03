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

model.updateRoundNumbers();

//
// routes
//

// /teams
app.route("/teams/").get(function (req, res) {
  model.getTeams(req, res);
});

// /players
app.route("/players/").get(function (req, res) {
  model.getPlayers(req, res);
});

// /results
app.route("/results/").get(function (req, res) {
  model.getResults(req, res);
});

// /results/ID
app.route("/results/:id?").get(function (req, res) {
  model.getResultById(req, res);
});

// /login
app.route("/login").post(function (req, res) {
  model.login(req, res);
});

var myServer = app.listen(3000, function () {
  console.log("Server listening on port 3000");
});
