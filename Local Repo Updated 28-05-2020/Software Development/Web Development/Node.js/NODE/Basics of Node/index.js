// To run this, go to your terminal and type in node 'app.js'
console.log('Hello Node.js');


// --- Node Modules ---

/*
>> Node Built in Modules:
- Path (path)
- OS (os) 
- File System (fs) 
- Events (events)
- HTTP (http)


//how to export members of a module
- syntax: module.exports."NAME OF MODULE" = "MEMBER THAT Is BEING EXPORTED" e.g .variables/functions;
module.exports.text = name;

// importing a module
var message = require('./"FILENAME");

E.g. */
// code in a different module called 'practice.js'
function message(text) {
  console.log(text);
}

module.exports.text = message;

// importing a module
var greeting = require('./practice');

greeting.text('hello')


//-->> Node Path Module

// The path module provides utilities for working with file and directory paths. It can be accessed using:
var path = require('path');


//-->> Node OS Module

// The os module provides operating system-related utility methods and properties. It can be accessed using:
var os = require('os');

console.log(os.hostname()); // Returns the host name of the operating system as a string.
console.log(os.totalmem()); // Returns the total amount of system memory in bytes as an integer.
console.log(os.freename()); // Returns the amount of free system memory in bytes as an integer.
console.log(os.uptime()); // Returns the system uptime in number of seconds.
console.log(os.homedir()); // Returns the string path of the current user's home directory.
console.log(os.platform()); // Returns a string identifying the operating system platform. The value is set at compile time.
console.log(os.release()); // Returns the operating system as a string.


//-->> Node File System Module

// The path module provides utilities for working with file and directory paths. It can be accessed using:
var fs = require('fs');

// The fs.writeFile() method replaces the specified file and content if it exists. If the file does not exist, a new file, containing the specified content, will be created:
fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});

// To delete a file with the File System module,  use the fs.unlink() method
fs.unlink('mynewfile2.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});

// To rename a file with the File System module,  use the fs.rename() method.
fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
});



//-->> Node Events Module

// The path module provides utilities for working with file and directory paths. It can be accessed using:
var EventEmitter = require('events');

// THE BASICS OF RAISING & HANDLING EVENTS USING THE EVENT EMITTER CLASS

// Instantiate the EventEmitter class
var emitter = new EventEmitter();

// Register a listener
emitter.on('messageLogged', function(){
  console.log('Listener called');
});

// Raise an event
emitter.emit('messageLogged');


//-->> Node HTTP Module

// The path module provides utilities for working with file and directory paths. It can be accessed using:
var http = require('http');

// A basic server build using HTTP Module
var server = http.createServer(function (req, res) {

  if (req.url === '/') {
    res.write('Home Page');
    res.end();
  }

  if (req.url === '/about') {
    res.write('About Page');
    res.end();
  }

});

server.listen(3000); // localhost 3000
console.log('listening on port 3000...');













