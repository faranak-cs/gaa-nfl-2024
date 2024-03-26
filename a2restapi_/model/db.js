var mysql = require("mysql");

///////////////////////////////////////////////////////////////////////////////////////////

// Setup MySQL connection
// timezone is very NB

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "gaanfl2024",
  timezone: "utc+0",
});

connection.connect(function (err) {
  if (err) throw err;
  console.log(`Sucessfully connected to MySQL database gaaNFL2024`);
});

///////////////////////////////////////////////////////////////////////////////////////////

// GET /teams
exports.getTeams = function (req, res) {
  connection.query(`SELECT * from teams`, function (err, rows, fields) {
    if (err) throw err;

    res.status(200); // OK
    res.send(JSON.stringify(rows));
  });
};

// GET /players
exports.getPlayers = function (req, res) {
  connection.query(`SELECT * from players`, function (err, rows, fields) {
    if (err) throw err;

    res.status(200); // OK
    res.send(JSON.stringify(rows));
  });
};

// GET /results
exports.getResults = function (req, res) {
  connection.query(`SELECT * from results`, function (err, rows, fields) {
    if (err) throw err;

    res.status(200); // OK
    res.send(JSON.stringify(rows));
  });
};

// GET /results/ID
exports.getResultById = function (req, res) {
  connection.query(
    `SELECT * FROM results WHERE division=${req.params.id}`,
    function (err, rows, fields) {
      if (err) throw err;

      res.status(200); // OK
      res.send(JSON.stringify(rows));
    }
  );
};
