const mongoose = require("mongoose");
require("dotenv").config();
const URL_DB = process.env.URL_DB;
//kết nối đến MongoDB
mongoose
  .connect(URL_DB)
  .then(() => {
    console.log("Mongoose Connected");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = mongoose;
