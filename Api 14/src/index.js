const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const { connectDB } = require("./db/dbconnection");
const routes = require("./routes/v1");
const config = require("./config/config");

// http.createServer(function (req, res) {
//   res.write('Hello http!');
//   res.end();
// }).listen(8080,console.log(`server is running http`));

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use("/v1", routes);

connectDB();

const server = http.createServer(app);

server.listen(config.port, () => {
  console.log("server listning port number 8080!");
});
