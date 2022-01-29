var http = require('http');
var fs = require('fs');

// A simple server that outputs json
var server = http.createServer(function(req, res){
  res.writeHead(200, {'Content-Type': 'application/json'});

  var readStream = fs.createReadStream(__dirname + '/users.json', 'utf8');
  readStream.pipe(res);
  
}).listen(3000, function(){
  console.log('Server Running...');
});



