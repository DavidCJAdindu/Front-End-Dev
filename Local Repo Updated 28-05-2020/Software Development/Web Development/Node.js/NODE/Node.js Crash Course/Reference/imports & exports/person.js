
var person = {
  name : 'John Doe',
  age : 30
}; 

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greeting() {
    console.log(`Hello, My name is ${this.name} and i am ${this.age}`);
  }
}


// export person object to be used in another file. 
module.exports = person;
module.exports = Person;

