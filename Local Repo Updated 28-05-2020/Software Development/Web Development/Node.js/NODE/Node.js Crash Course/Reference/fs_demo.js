var fs = require('fs');
var path = require('path');


// Create folder
fs.mkdir(path.join(__dirname, '/test'), {}, function(err) {
  if(err) throw err;
  console.log('folder created...');
}); 


// Create & write to file
fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello World!', function(err) {
  if(err) throw err;
  console.log('file created & written to...');
}); 


// Append a file to another file
fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello World!', function(err) {
  if(err) throw err;
  console.log('file created & written to...');

    // File Append
    fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), ' I love Node.js!', function(err) {
      if(err) throw err;
      console.log('file created & written to...');
    });
  }
); 


// Read file
fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', function(err, data) {
  if(err) throw err;
  console.log(data);
}); 


// Rename a file
fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'helloworld.txt'), function(err) {
  if(err) throw err;
  console.log('file renamed!');
}); 





