const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.write("<H1>Base URL</H1>");
    res.end();
  } else if (req.url == "/home") {
    res.write("<H1>Home Page</H1>");
    res.end();
  } else {
    res.write("<H1>Doesn't Exist</H1><a href = '/'>Go to Base</a>");
    res.end();
  }

  //   res.writeHead(201, { "content-type": "text/html" });
  //   res.write("<H1>Hello</H1>");
  //   res.end();
});

module.exports = { server };

//http://localhost:7777/
