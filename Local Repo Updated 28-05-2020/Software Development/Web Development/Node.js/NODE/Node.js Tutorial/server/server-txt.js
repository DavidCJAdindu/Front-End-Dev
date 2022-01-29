var http = require('http');
var fs = require('fs');

// A simple server that outputs text
var server = http.createServer(function(req, res){
  res.writeHead(200, {'Content-Type': 'text/plain'});
  
  var readStream = fs.createReadStream(__dirname + '/lorem.txt', 'utf8');
  readStream.pipe(res);

}).listen(3000, function(){
  console.log('Server Running...');
});
