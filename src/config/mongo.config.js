const { default: mongoose } = require("mongoose");
const DB_URL = "mongodb://root:cO1duKagkNC85m1mGNCT3d4N@etna.liara.cloud:30761/note-app?authSource=admin"
const DB_NAME = "admin";
const DB_CONNECT_URL = DB_URL + DB_NAME;

mongoose
  .connect(DB_URL)
  .then(() => console.log("connected to database :)"))
  .catch((err) => console.log(err.message));
