const mysql = require('mysql2');

module.exports = (req, res) => {
  
  const sql = "SELECT Users.name, Users.surname, Users.age, Users.national_id, Users.phone_number, employer.district FROM Users JOIN employer ON Users.user_id = employer.user_id ";

  connection.query(sql, (err, rows) => {
    if (err) {
      return res.json({
        success: false,
        data: null,
        error: err.message,
      });
    }

    res.json({
      success: true,
      data: rows,
    });
  });
};