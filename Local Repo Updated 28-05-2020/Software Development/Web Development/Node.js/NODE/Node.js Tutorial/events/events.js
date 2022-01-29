var events = require('events');
var util = require('util')


// Events Constructor 
var myEmitter = new events.EventEmitter();

// Create Event
myEmitter.on('someEvent', function(message){
  console.log(message);
})

// Emit Event
myEmitter.emit('someEvent', 'An event has occured'); 


/* Example

var Person = function(name) {
  this.name = name;
};

util.inherits(Person, events.EventEmitter);

var james = new Person('james');
var harry = new Person('harry');
var paul = new Person('paul');

var people = [james, harry, paul];

people.forEach(function(person){
  person.on('speak', function(message){
    console.log(person.name + ' said: ' + message);
  });
});

james.emit('speak', 'hey x');
harry.emit('speak', 'whatsup x');
paul.emit('speak', 'yo lol');

*/
