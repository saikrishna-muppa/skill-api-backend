const express = require("express");

const app = express();
app.listen(process.env.PORT || 3000, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("server running on port 3000");
  }
});
