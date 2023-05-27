const express = require("express");
const app = express();
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const port = 3000;

const connection = mysql.createConnection({
  host: "db.cshack.site",
  port: 3306,
  user: "group10",
  password: "211239241",
  database: "group10",
});

connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
   
    console.log('connected as id ' + connection.threadId);
  });

console.log("Database is connected");

// parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: "application/json" }));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});


app.post("/login", (req, res) => {
  // The JSON body
  const payload = req.body;

  connection.query(
    `INSERT INTO users (username) VALUES (?)`, [payload.username], (err, rows) => {
      // Check if cannot find the data in the database then return the e nrror
      if (err) {
        res.json({
          success: false,
          data: null,
          error: err.message,
        });
      } else {
        // Return data to the client if success
        console.log(rows);
        if (rows) {
          res.json({
            success: true,
            data: {
              message: "create success",
            },
          });
        }
      }
    }
  );
});