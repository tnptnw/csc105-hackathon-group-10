const mysql = require('mysql2');
const bcrypt = require('bcrypt');

module.exports = (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const name = req.body.name;
  const surname = req.body.surname;
  const age = req.body.age;
  const national_id = req.body.national_id;
  const phone_number = req.body.phone_number;

  console.log(req.body);

  // Check if the username already exists
  var checkUsernameSql = mysql.format('SELECT COUNT(*) AS count FROM Users WHERE username = ?', [req.body.username ]);

  connection.query(checkUsernameSql, (err, result) => {
    if (err) {
      return res.json({
        success: false,
        data: null,
        error: err.message,
      });
    }

    const count = result[0].count;

    if (count > 0) {
      // Username already exists, return an error response
      return res.json({
        success: false,
        message: 'Username is already taken',
      });
    }

    // Check if any required field is missing
    if (!username || !password) {
      return res.json({
        success: false,
        message: 'Please provide all the required information',
      });
    }

    // Generate a hash of the password
    bcrypt.hash(password, 10, (err, hashedPassword) => {
      if (err) {
        return res.json({
          success: false,
          message: 'Error hashing password',
        });
      }

      // Insert the new user with the provided username and hashed password
      var insertUserSql = mysql.format('INSERT INTO Users (username, hashedPassword, password , name , surname  , age , national_id , phone_number, profile) VALUES (?, ?, ?, ?, ? , ?, ?, ?, ? )', [
        username, hashedPassword , password ,name , surname , age , national_id , phone_number, ""
    
            ]);

      connection.query(insertUserSql, (err, result) => {
        if (err) {
          return res.json({
            success: false,
            data: null,
            error: err.message,
          });
        }

        const userId = result.insertId;

        res.json({
          success: true,
          message: 'Registration successful',
          userId: userId,
        });
      });
    });
  });
};

