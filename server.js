var express = require("express");
var path = require("path");
var app = express();
var HTTP_PORT = process.env.PORT || 8080

app.use(express.static(path.join(__dirname, 'build')));


app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(HTTP_PORT, () => {
  console.log("Ready to handle requests on port " + HTTP_PORT);
});