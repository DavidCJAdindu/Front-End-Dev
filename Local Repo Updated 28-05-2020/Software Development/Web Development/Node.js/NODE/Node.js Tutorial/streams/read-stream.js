var http = require('http');
var fs = require('fs');

var readStream = fs.createReadStream(__dirname + '/lorem.txt', 'utf8');

readStream.on('data', function(chunk){
  console.log('new chunk received: ');
  console.log(chunk);
});