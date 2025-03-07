const express = require("express");

const routes = require("./routes");

const { connectToDb } = require("./db");

const app = express();

app.use(express.json());

app.use("/api/v1", routes);

connectToDb();

app.listen(3000, () => {
  console.log("Server is listening at port 3000");
});
