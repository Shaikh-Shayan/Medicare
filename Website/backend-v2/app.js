const mongoose = require("mongoose");
const express = require("express");
const apis = require("./Routes/apis.js");
const config = require("./config");

const app = express();

const cors = require("cors");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/api", apis);

mongoose
  .connect(config.CONNECTION_URL, { useNewUrlParser: true })
  .then(() => {
    console.log("Succefully connected with mongodb.");
  })
  .catch((err) => {
    console.log("error with mongodb connection" + err);
  });

app.listen(5000, () => console.log("Server started: port 5000"));
