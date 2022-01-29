// NODE Path Modules - (Core Module)
var path = require('path');

// Basename - gets base file name
console.log(path.basename(__filename)); // output 'path_demo.js'

// Directory name - gets base directory name
console.log(path.dirname(__filename)); // output 'Reference'

// File extension 
console.log(path.extname(__filename)); // output '.js'

// Create path object
console.log(path.parse(__filename)); // outputs file path as an object

// Concatenate paths
console.log(path.join(__dirname, 'test', 'hello.html')); // outputs path with test\hello.html concatenated to the end 

