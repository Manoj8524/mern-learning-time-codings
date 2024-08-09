const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("GET Route is working");
});

app.post("/", (req, res) => {
  res.send("POST Route is working");
});

app.put("/", (req, res) => {
  res.send("PUT Route is working");
});

app.patch("/", (req, res) => {
  res.send("PATCH Route is working");
});

app.delete("/", (req, res) => {
  res.send("DELETE Route is working");
});

app.listen(4000, () => {
  console.log("Server is up and running");
});
