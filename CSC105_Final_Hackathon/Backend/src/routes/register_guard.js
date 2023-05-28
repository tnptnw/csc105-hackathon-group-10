const mysql = require('mysql2');

module.exports = (req, res) => {
  const experience = req.body.experience;
  const isBodyguard = req.body.isBodyguard; // Assuming the isBodyguard value is provided as a boolean (true/false)
  const userId = parseInt( req.body.userId); // Assuming the user_id value is provided in the request body

  // res.send(req.body);

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

    // Convert isBodyguard to an integer representation (1 for true, 0 for false)
    const isBodyguardInt = isBodyguard ? 1 : 0;

    // Insert the new record with the provided values
    const insertGuardSql = mysql.format('INSERT INTO Guard (experience, isBodyguard, user_id) VALUES (?, ?, ?)', [experience, isBodyguardInt, userId]);

    connection.query(insertGuardSql, (err, result) => {
      if (err) {
        return res.json({
          success: false,
          data: null,
          error: err.message,
        });
      }

      const guardId = result.insertId;

      res.json({
        success: true,
        message: 'Registration successful',
        guardId: guardId,
      });
    });
  });
};
