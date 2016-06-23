var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());

app.use('/products', require('./products-router'));
app.use('/about', require('./about-router'));

var server = app.listen(3000, function () {
  var port = server.address().port;
  console.log("listen on " + port);
});