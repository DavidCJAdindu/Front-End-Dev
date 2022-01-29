var http = require('http');
var fs = require('fs');

var readStream = fs.createReadStream(__dirname + '/lorem.txt', 'utf8');
var writeStream = fs.createWriteStream(__dirname + '/writelorem.txt');

readStream.on('data', function(chunk){
  console.log('new chunk received..');
  writeStream.write(chunk, function() {
    console.log('chunk sent!');
  });
  //console.log(chunk);
});