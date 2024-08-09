const http = require("http");
const url = require("url");
const fs = require("fs");

const server = http.createServer((request, response) => {
  let q = url.parse(request.url, true);
  let filename = "." + q.pathname + ".html";

  fs.readFile(filename, (err, data) => {
    if (err) {
      response.write("<h1>404 Page not found</h1>");
      return response.end();
    }
    response.write(data);
    response.end();
  });
});

server.listen(4000, () => {
  console.log("server is up and running");
});
