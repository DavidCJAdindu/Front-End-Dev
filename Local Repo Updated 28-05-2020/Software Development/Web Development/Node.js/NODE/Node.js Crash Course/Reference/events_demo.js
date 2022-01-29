var EventEmitter = require('events');

// Create Emitter Class
class MyEmitter extends EventEmitter { }

// Initiate object
var myEmitter = new MyEmitter();

// Event Listener
myEmitter.on('event', function() {
  console.log('Event Fired!')
});

// Initiate Event
myEmitter.emit('event');