const mysql = require('mysql2');
var jwt = require("jsonwebtoken");

module.exports = (req, res) => {
  try {
    console.log(req.headers.jwt_token);
    const token = req.headers.jwt_token;
    const decode = jwt.verify(token, "stupidsecret");
    const userId = decode.data;
    console.log(userId);

    connection.query(`SELECT name, surname, age, national_id, phone_number FROM Users WHERE user_id = ?`, userId, (err, rows) => {
      if (err) {
        return res.json({
          success: false,
          data: null,
          error: err.message,
        });
      }

      console.log(rows);
      const user = rows[0];

      // Update the user's profile information
      const updatedUser = {
        ...user,
        name: req.body.name || user.name,
        surname: req.body.surname || user.surname,
        age: req.body.age || user.age,
        national_id: req.body.national_id || user.national_id,
        phone_number: req.body.phone_number || user.phone_number,
      };

      // Update the user's profile in the database
      connection.query('UPDATE Users SET name = ?, surname = ?, age = ?, national_id = ?, phone_number = ? WHERE user_id = ?', [updatedUser.name, updatedUser.surname, updatedUser.age, updatedUser.national_id, updatedUser.phone_number, userId], (err) => {
        if (err) {
          return res.json({
            success: false,
            data: null,
            error: err.message,
          });
        }

        res.json({
          success: true,
          message: 'Profile updated successfully',
          data: updatedUser,
        });
      });
    });
  } catch (error) {    
    return error;
  }
};
