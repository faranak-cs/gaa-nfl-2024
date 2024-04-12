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
  connection.query(
    `SELECT players.id, players.teamID, players.name, players.squadNumber, players.age, players.matches, teams.name AS teamName 
     FROM players
     JOIN teams
     WHERE players.teamID = teams.id;`,
    function (err, rows, fields) {
      if (err) throw err;

      res.status(200); // OK
      res.send(JSON.stringify(rows));
    }
  );
};

// GET /results
exports.getResults = function (req, res) {
  connection.query(`SELECT * from results`, function (err, rows, fields) {
    if (err) throw err;

    res.status(200); // OK
    res.send(JSON.stringify(rows));
  });
};

// GET /results/divID
exports.getResultByDivision = function (req, res) {
  connection.query(
    `SELECT * FROM results WHERE division=${req.params.div}`,
    function (err, rows, fields) {
      if (err) throw err;

      res.status(200); // OK
      res.send(JSON.stringify(rows));
    }
  );
};

// PUT /results/id
exports.updateResult = function (req, res) {
  const { team1_score, team2_score } = req.body;

  if (team1_score === "") {
    connection.query(
      `UPDATE results SET team2Score = '${team2_score}' WHERE id = ${req.params.id}`,
      function (err, rows, fields) {
        if (err) throw err;

        const result = { team2_score };
        res.status(201); // OK
        res.send(JSON.stringify(result));
      }
    );
  } else if (team2_score === "") {
    connection.query(
      `UPDATE results SET team1Score = '${team1_score}' WHERE id = ${req.params.id}`,
      function (err, rows, fields) {
        if (err) throw err;

        const result = { team1_score };
        res.status(201); // OK
        res.send(JSON.stringify(result));
      }
    );
  } else {
    connection.query(
      `UPDATE results
       SET team1Score = '${team1_score}', team2Score = '${team2_score}'
       WHERE id = ${req.params.id}`,
      function (err, rows, fields) {
        if (err) throw err;

        const result = { team1_score, team2_score };
        res.status(201); // OK
        res.send(JSON.stringify(result));
      }
    );
  }
};

// DELETE /result/id
exports.deleteResult = function (req, res) {
  connection.query(
    `DELETE from results WHERE id=${req.params.id}`,
    function (err, row, fields) {
      if (err) throw err;

      const result = req.params.id;
      res.status(200); //OK
      res.send(JSON.stringify(result));
    }
  );
};

// POST /login
exports.login = function (req, res) {
  const { email, password } = req.body;
  connection.query(
    `SELECT * from users WHERE email='${email}'`,
    function (err, rows, fields) {
      if (err) {
        res.status(401); // Invalid
        res.send("Not found");
      } else {
        if (rows.length > 0) {
          if (password === rows[0].password) {
            const user = { email: rows[0].email };
            res.status(200); //OK
            res.send(JSON.stringify(user));
          } else {
            res.status(401); // Invalid
            res.send("Not found");
          }
        } else {
          res.status(401); // Invalid
          res.send("Not found");
        }
      }
    }
  );
};
