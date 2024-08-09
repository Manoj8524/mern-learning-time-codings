const http = require("http");
const fs = require("fs");

const server = http.createServer((request, response) => {
  fs.readFile("index.html", (err, data) => {
    if (err) {
      console.log(err);
    }
    response.write(data);
    response.end();
  });
});

server.listen(4000, () => {
  console.log("Server is up and running");
});
