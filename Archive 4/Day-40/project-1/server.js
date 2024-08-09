const express = require("express");

const app = express();

//http methods
// GET - data get
// POST - data send
// PUT - data update (total)
// PATCH - data update (partial)
// DELETE - data delete

app.get("/hello", (req, res) => {
  res.send("<h1>This is hello route</h1>");
});

app.get("/", (req, res) => {
  res.send("Api is working");
});

app.get("*", (req, res) => {
  res.send("<h1>404 Page not found</h1>");
});

app.listen(4000, () => {
  console.log("Server is up and running");
});
