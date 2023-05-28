const mysql = require('mysql2');
var jwt = require("jsonwebtoken");

module.exports = (req, res) => {
  try {
    console.log(req.headers.jwt_token);
    const token = req.headers.jwt_token;
    const decode = jwt.verify(token, "stupidsecret");
    const userId = decode.data;
    console.log(userId);

    // Delete the user's profile from the database
    connection.query('DELETE FROM Users WHERE user_id = ?', [userId], (err) => {
      if (err) {
        return res.json({
          success: false,
          data: null,
          error: err.message,
        });
      }

      res.json({
        success: true,
        message: 'Profile deleted successfully',
      });
    });
  } catch (error) {
    console.log(error);
    return error;
  }
};
