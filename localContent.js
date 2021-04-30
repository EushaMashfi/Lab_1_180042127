const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    fs.readFile("./HTML/index.html", "utf-8", (err, data) => {
      if (err) {
        res.writeHead(404);
        res.write("File not Found!");
      } else {
        res.write(data);
      }
      res.end();
    });
  } else if (req.url == "/about") {
    fs.readFile("./HTML/about.html", "utf-8", (err, data) => {
      if (err) {
        res.writeHead(404);
        res.write("File not Found!");
      } else {
        res.write(data);
      }
      res.end();
    });
  } else if (req.url == "/blog") {
    fs.readFile("./HTML/blog.html", "utf-8", (err, data) => {
      if (err) {
        res.writeHead(404);
        res.write("File not Found!");
      } else {
        res.write(data);
      }
      res.end();
    });
  } else if (req.url == "/contact") {
    fs.readFile("./HTML/contact.html", "utf-8", (err, data) => {
      if (err) {
        res.writeHead(404);
        res.write("File not Found!");
      } else {
        res.write(data);
      }
      res.end();
    });
  } else if (req.url == "/pricing") {
    fs.readFile("./HTML/pricing.html", "utf-8", (err, data) => {
      if (err) {
        res.writeHead(404);
        res.write("File not Found!");
      } else {
        res.write(data);
      }
      res.end();
    });
  } else if (req.url == "/services") {
    fs.readFile("./HTML/services.html", "utf-8", (err, data) => {
      if (err) {
        res.writeHead(404);
        res.write("File not Found!");
      } else {
        res.write(data);
      }
      res.end();
    });
  } else if (req.url == "/work") {
    fs.readFile("./HTML/work.html", "utf-8", (err, data) => {
      if (err) {
        res.writeHead(404);
        res.write("File not Found!");
      } else {
        res.write(data);
      }
      res.end();
    });
  } else if (req.url == "/index") {
    fs.readFile("./HTML/index.html", "utf-8", (err, data) => {
      if (err) {
        res.writeHead(404);
        res.write("File not Found!");
      } else {
        res.write(data);
      }
      res.end();
    });
  } else {
    res.write("<H1>Page Doesn't Exist</H1><a href = '/'>Go to Homepage</a>");
    res.end();
  }
});

module.exports = { server };
