const { default: mongoose } = require("mongoose");
const DB_URL = "mongodb://localhost:27017/javad"
const DB_NAME = "admin";
const DB_CONNECT_URL = DB_URL + DB_NAME;

mongoose
  .connect(DB_URL)
  .then(() => console.log("connected to database :)"))
  .catch((err) => console.log(err.message));
