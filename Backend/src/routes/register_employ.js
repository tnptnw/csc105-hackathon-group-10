const mysql = require('mysql2');

module.exports = (req, res) => {
  const district = req.body.district;
  const userId = parseInt( req.body.userId);

  // console.log(req.body);

  // Check if the user_id value exists in the referenced table
  const checkUserIdSql = mysql.format('SELECT COUNT(*) AS count FROM Users WHERE user_id = ?', [userId]);

  connection.query(checkUserIdSql, (err, result) => {
    if (err) {
      return res.json({
        success: false,
        data: null,
        error: err.message,
      });
    }

    const count = result[0].count;

    if (count === 0) {
      // Invalid user_id value, return an error response
      return res.json({
        success: false,
        message: 'Invalid user_id value',
      });
    }

    // Insert the new record with the provided values
    const insertEmploySql = mysql.format('INSERT INTO employer (district, user_id) VALUES (?, ?)', [district, userId]);

    connection.query(insertEmploySql, (err, result) => {
      if (err) {
        return res.json({
          success: false,
          data: null,
          error: err.message,
        });
      }
      
      const employerId = result.insertId;

      res.json({
        success: true,
        message: 'Registration successful',
        employerId: employerId,
      });
    });
  });
};
