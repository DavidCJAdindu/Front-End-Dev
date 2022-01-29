var http = require('http');
var fs = require('fs');

// A simple server that outputs html
var server = http.createServer(function(req, res){
  res.writeHead(200, {'Content-Type': 'text/html'});
  
  var readStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
  readStream.pipe(res);

}).listen(3000, function(){
  console.log('Server Running...');
});
