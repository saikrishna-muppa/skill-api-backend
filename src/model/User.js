var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
  email: {
    type: String,
    Unique: true,
    Requeried: true
  },
  password: {
    type: String,
    Requeried: true
  }
});
module.exports = mongoose.model("Users", userSchema);
