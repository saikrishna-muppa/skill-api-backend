const mongoose = require("mongoose");

const MONGODBURI =
  "mongodb+srv://skill:skill@onlineshopping.jm8uf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const MONGODBURI = "mongodb://localhost/skilllibetryapi";

const InitiateMongoServer = async () => {
  try {
    await mongoose.connect(MONGODBURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("connect to db");
  } catch (err) {
    console.log(err);
    throw err;
  }
};

module.exports = InitiateMongoServer;
