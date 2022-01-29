// 1. Create package.json file using 'npm init'

// Run this file using 'node <filename>'
// console.log('Hello from Node.js');

// import 'person' file to be used 
var Person = require('./person');

var person1 = new Person('John Doe', 30);

person1.greeting();
