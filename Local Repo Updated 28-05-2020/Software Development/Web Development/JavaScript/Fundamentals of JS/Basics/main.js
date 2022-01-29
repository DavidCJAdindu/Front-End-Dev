
// print a helo world alert
alert('hello world x');

//print 'hi' to the console
console.log('hi');
// display an error on the console 
console.error('this is an error');
// display a warning on the console 
console.warn('this is a warning');



// -- VARIABLES
// var, let, const are use to assign variables 
// use 'var' to assign variables 

let age = 30;
age = 31

console.log(age);
// will print '31' because let allows you to change variable

const age = 30;
age = 31

console.log(age);
// will print an error, variable is constant cannot be changed



// -- DATA TYPES 
// Numbers, Strings, Boolean, null, undefined

console.log(typeof 'name of variable' 'name'); 
// prints out the variabe type to the console 


// Numbers 
var age = 20;
console.log(age);


// Strings
var name = 'David';
console.log(name);


// Concatenation 
console.log('My name is ' + name + ' and I am ' + age);
// Template Strings 
console.log(`My name is ${name} and I am ${age}`); 

// Print string variables on the console 
var hello = `My name is ${name} and I am ${age}`;
console.log(hello);

var s = 'Hello World';
console.log(s.length); //property used to get the length of a string '11' 
console.log(s.toUpperCase()); //method used to turn string uppercase
console.log(s.toLowerCase()); //method used to turn string lowercase
console.log(s.substring(0, 5)); //method used to get a portion of the string 
console.log(s.substring(0, 5).toUpperCase()); //method used to turn a portion of the string uppercase
console.log(s.substring(0, 5).toLowerCase()); //method used to turn a portion of the string lowercase

// Boolean 
var isCool = true; 
console.log(isCool);

// Null 
var x = null; 
console.log(x);

// Undefined 
var y = undefined; 
console.log(y);



// -- ARRAYS
//variables that hold multiple values 

//how to create an array using a construtor 
var numbers = new Array(1,2,3,4,5);
console.log(numbers);

//how to create an array 
var fruits = ['apples', 'oranges', 'bananas', 'kiwi'];
console.log(fruits);

//in javascript you can have different data types in the same array 
var fruits = ['apples', 'oranges', 'bananas', 'kiwi', '5', '7','true'];
console.log(fruits);

// prints 'bananas' to console, array is printed by index
var fruits = ['apples', 'oranges', 'bananas', 'kiwi'];
console.log(fruits[2]);

//adds to the fruits array '[]' index
fruits[4] = 'grapes';

//array method that pushs a value to the end of the array
fruits.push('mangos');

//array method that unshifts a value to the start of the array
fruits.unshift('strawberries');

//array method that removes the last value
fruits.pop();

//array method to check if a value is an array, 'true' if its an array
console.log(Array.isArray(fruits));

//array method used to find out the index of an array value 
console.log(fruits.indexOf('oranges'));



// -- OBJECTS 
//key value pairs 

//how to create an object 
var person = {
  firstName: 'David',
  lastName: 'Adindu',
  age: 20,

  //you can also add arrays to object
  hobbies: ['Livin','Lavish','Ballin','Crypto'],

  //you can also create embedded objects 
  address: {
    street: 'cruise park drive',
    doorNumber: '215',
    city: 'dublin',
    neighbourhood: 'tyrrelstown'
  }
}

//add properties to the object
person.email = 'da4adindu@gmail.com';

//prints the value in the 'hobbies' array in the peron object 
console.log(person.hobbies[1]);  

//prints out object to console 
console.log(person);;

//prints object literal properties to the console (object.)
console.log(person.firstName);
console.log(person.firstName, person.lastName);

//prints out the embedded object value (object.object)
console.log(person.address.neighbourhood);

//how to pull out a property of an onject 
var { firstName, lastName } = person;
console.log(firstName);
//embedded object
var { firstName, lastName, address:{city}} = person
console.log(city);



// -- ARRAY OBJECTS

//how to create an array of objects
var todoList = [
  {
    id: 1,
    text: 'clean room',
    isCompleted: true
  },

  {
    id: 2,
    text: 'exercise',
    isCompleted: false
  },

  {
    id: 3,
    text: 'code',
    isCompleted: true
  },
];

//print array of objects on the console
//console.log(todoList);

//how to select from array of objects and print to console
//console.log(todoList[1].text);

//converts array object to JSON format 
var todoListJSON = JSON.stringify(todoList);
console.log(todoList);



// -- Loops

// For Loops
// for(assignment of the variable; condition; increment)
for(let i = 0; i < 10; i++){
  console.log(i); //prints out loop
  console.log(`for loop number: ${i}`); //prints out numbers with text
}

// While Loops
var i = 0 
// while(condition){
  increment;
}
while(i < 10) {
  console.log(i); //prints out loop
  console.log(`while loop number: ${i}`); //prints out numbers with text
  i++; //increments loop
}

// -- LOOPING ARRAYS 

for(let i = 0; i < todoList.length; i++){
  console.log(`array for loop number: ${i}`); //prints number of arrays with text
  console.log(todoList[i].text); //prints text in the array by looping
}

// High Order Array Methods - forEach, map, filter

//prints 'text' using forEach method
todoList.forEach(function(todoList){
  console.log(todoList.text);
});

//prints 'text' using map method
var todoText = todoList.map(function(todoList){
  return todoList.text;
});
console.log(todoText);

//prints completed tasks using fiter method
var todoCompleted = todoList.filter(function(todoList){
  return todoList.isCompleted === true;
});
console.log(todoCompleted);



// -- CONDITIONALS 

// Basic if statements 
var x = 4;
var y = 10;

if(x === 10){
  console.log('x is 10');
}
else if(x > 10){
  console.log('x is greater than 10');
}
else{
  console.log('x is less than 10')
}

// using (|| or) , (&& and)
if(x > 5 || y > 10){
  console.log('x is more than 5 or y is more than 10');
}


// Ternary Operator 
var x = 10 ;

//if x id greater than 10 (? than) the condition will be red (: else) it is blue 
var color = x > 10 ? 'red' : 'blue'; 
console.log(color); // will print blue


// Switch Statements 
var color = 'red';

switch(color){
  case 'red':
    console.log('color is red');
    break;
  case 'green':
    console.log('color is green');
    break;
  case 'blue':
    console.log('color is blue');
    break;
  default:
    console.log('color is not available');
}



// -- FUNCTIONS 

//how to define a function
function 'name of function'(parameters){
  //code statements 
}

//how to call a function
'name of function'(parameters)

//simple calculator function
function addNums(num1, num2){
  console.log(num1 + num2)
}

//caling the method
addNums();
//calling the method with values in the parameters 
addNums(5, 5);

//more advanced calculator function
function addNums(num1 = 1, num2 = 1){
  return num1 + num2;
}
console.log(addNums(5, 5));



// --- OBJECT ORIENTED PROGRAMMING 
// How to Construct and Instantiate an Object 
//Constructor function 
function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = dob;

  //how to create a date object 
  this.dob = new Date(dob);

  //creating functions in the object constructor 
  this.getBirthYear = function(){
    return this.dob.getFullYear();
  }
}

//Instantiate object 
var person1 = new Person('Lavish','Livin','2020');
var person2 = new Person('David','Adindu','2000');

//print the object 
console.log(person1); 
//print the object dob value formatted 
console.log(person2.dob); 

//printing the function in the constructor 
console.log(person1.getBirthYear()); 


// Class
//how to create a class 
class 'name of class' {
  constructor(parameters){
    // class variables 
  }
    // class functions 
}

// a person class 
class Person{
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
  }

  getBirthYear() {
    return this.dob.getFullYear();
  }
}















