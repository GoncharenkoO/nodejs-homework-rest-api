// O5cHJFYflk1ZANAx

const mongoose = require("mongoose");

const { DB_HOST } = process.env;
console.log(DB_HOST);

mongoose
  .connect(DB_HOST)
  .then(() => console.log("Database connect"))
  .catch((error) => console.log(error.message));

// const app = require("./app");

// app.listen(3000, () => {
//   console.log("Server running. Use our API on port: 3000");
// });
