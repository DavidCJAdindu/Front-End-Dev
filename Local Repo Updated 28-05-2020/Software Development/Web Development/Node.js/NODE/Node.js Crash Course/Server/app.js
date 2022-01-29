var http = require('http');
var path = require('path');
var fs = require('fs');

var server = http.createServer((req, res) => {
  /*

  // Load index.html file
  if(req.url === '/'){
    fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => { 
      if(err) throw err;
      res.writeHead(200, { 'Content-Type' : 'text/html' })
      res.end(content);
    })
  }

  // Load about.html file
  if(req.url === '/about'){
    fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) => { 
      if(err) throw err;
      res.writeHead(200, { 'Content-Type' : 'text/html' })
      res.end(content);
    })
  }

  // Load api/json file
  if(req.url === '/api/users'){
    var users = [
      { name: 'Bob Smith', age: 40},
      { name: 'John Doe', age: 30}
    ];
    res.writeHead(200, { 'Content-Type' : 'application/json' })
    res.end(JSON.stringify(users));
  }
  */

  // Build file path 
  let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);

  // Extension of file
  var extname = path.extname(filePath);

  // Initial content type
  var contentType = 'text/html';

  //Check extension and set content type
  switch(extname) {
    case '.js':
      contentType = 'text/javascript';
      break;
    case '.css':
      contentType = 'text/css';
      break;
    case '.json':
      contentType = 'text/application.json';
      break;
    case '.png':
      contentType = 'image/png';
      break;
    case '.jpg':
      contentType = 'image/jpg';
      break;
  }

  // Read File
  fs.readFile(filePath, (err, content) => {
    if(err) {
      if(err.code === 'ENOENT'){
        // Page not found
        fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
          res.writeHead(200, { 'Content-Type' : 'text/html' })
          res.end(content, 'utf8');
        })
      } else {
        // Server error
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      // Success
      res.writeHead(200, { 'Content-Type' : contentType })
      res.end(content, 'utf8');
    }
  });

});

var PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));