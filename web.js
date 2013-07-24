var express = require('express');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
  var fs = require('fs');
  file = fs.readFileSync('index.html');
  var buffer = new Buffer(file, "utf-8");
  response.send(buffer.toString('utf-8', 0, buffer.length));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
