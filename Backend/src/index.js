const cors = require("cors") ;
const express = require("express");
const app = express();
const mysql = require("mysql2");
const bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
const port = 3000;

const connection = mysql.createConnection({
  host: "db.cshack.site",
  port: 3306,
  user: "group10",
  password: "211239241",
  database: "group10",
});

app.use(cors({ origin: ["http://localhost:5173"], credentials: true }));
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});

global.connection = connection;

console.log("Database is connected");

// parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: "application/json" }));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.use(cookieParser());
app.post("/login", require("./routes/login"));
app.post("/register", require("./routes/register"));
app.post("/guardRegis", require("./routes/register_guard"));
app.post("/employRegis", require("./routes/register_employ"));
app.get("/listGuard", require("./routes/list_guard"));
app.get("/employInfo", require("./routes/employ_info"));
app.get("/userProfile", require("./routes/user_profile"));
app.patch("/updateProfile", require("./routes/update_profile"));
app.delete("/deleteProfile", require("./routes/delete_profile"));
