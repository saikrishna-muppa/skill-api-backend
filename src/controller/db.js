const mongoose = require("mongoose");

// const MONGODBURI="mongodb+srv://root:<password>@cluster0.yx0gr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const MONGODBURI = "mongodb://localhost/skilllibetryapi";

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
