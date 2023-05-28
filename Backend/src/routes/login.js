const mysql = require('mysql2');
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken")

module.exports = (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
  
    var sql = mysql.format("SELECT * FROM Users WHERE username = ?", [username]);  
    
    connection.query(sql, async (err, rows) => {
      if (err) {
        return res.json({
          success: false,
          data: null,
          error: err.message,
        });
      }
  
      numRows = rows.length;
      if (numRows == 0) {
        res.json({
          success: false,
          message: "User not found",
        });
      } else {
          // console.log(password, rows[0].hashedPassword);
        const valid = await bcrypt.compare(password, rows[0].hashedPassword);
  
        if (!valid) {  
         return res.json({
            success: false,
            message: "Password is incorrect",
          });
        } 
        const token = jwt.sign(
          {
            data: rows[0].user_id,
          },
          "stupidsecret",
          { expiresIn: "1h" }
        );
        // console.log("login token");
        // console.log(token);
        res.cookie("jwt_token", token);
        res.json({
          success: true,
          message: "Login success",
          user: rows[0],
        });      
      }
    });
  };
 