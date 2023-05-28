const mysql = require('mysql2');
var jwt = require("jsonwebtoken")

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
        
        return res.json(user)
     } 
    );
  } catch (error) {
    console.log(error);
    return error;
    // return res.status(401).send({ msg: "Unauthorized" });
  }
};

//     const userProfile = {
//       name: rows[0].name,
//       surname: rows[0].surname,
//       age: rows[0].age,
//       national_id: rows[0].national_id,
//       phone_number: rows[0].phone_number,
//       district: rows[0].district,
//     };

//     res.json({
//       success: true,
//       data: userProfile,
//     });
//   });
// };
