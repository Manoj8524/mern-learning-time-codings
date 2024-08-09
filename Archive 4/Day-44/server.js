const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Api is working");
});

app.listen(4000, () => {
  console.log("Server is up and running");
});
