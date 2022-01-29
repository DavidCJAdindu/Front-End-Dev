var http = require('http');
var fs = require('fs');

// A basic routed server
var server = http.createServer(function(req, res){
  console.log('Request was made: ' + req.url);

  if(req.url === '/home' || req.url === '/'){
    res.writeHead(200, {'Content-Type':'text/html'});
    fs.createReadStream(__dirname + '/index.html').pipe(res);
  } else if(req.url === '/lorem'){
    res.writeHead(200, {'Content-Type':'text/plain'});
    fs.createReadStream(__dirname + '/lorem.txt').pipe(res);
  } else if(req.url === '/users'){
    res.writeHead(200, {'Content-Type':'application/json'});
    fs.createReadStream(__dirname + '/users.json').pipe(res);
  } else {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.write('Page Not Found');
    res.end();
  }

  
}).listen(3000, function(){
  console.log('Server Running...');
});