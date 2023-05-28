const mysql = require('mysql2');

module.exports = (req, res) => {
  
  const sql = "SELECT Users.name, Users.surname, Users.age, Users.national_id, Users.phone_number, Guard.experience, Guard.guard_id FROM Users JOIN Guard ON Users.user_id = Guard.user_id WHERE Guard.status = 'available'";

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
