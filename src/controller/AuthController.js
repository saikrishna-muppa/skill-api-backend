// const User = require("../model/User");

// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");

// const register = (req, res, next) => {
//   bcrypt.hash(req.body.password, 10, function (err, hashedPass) {
//     if (err) {
//       res.json({
//         error: err
//       });
//     }
//   });

//   let user = new User({
//     email: req.body.email,
//     password: hashedPass
//   });
//   User.save().then((user) => {
//     res.json({
//       message: "user Added Successfully"
//     });
//   });
//   catch(error => {
//     res.json({
//       message:"an error occured"
//     })
//   })
// };
