// modules
var express = require('express'); 
var todoController = require('./controllers/todoController');


// set express app
var app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// set up template engine
app.set('view engine', 'ejs');

//static files
app.use('/assets', express.static('./assets'));

// fire controller
todoController(app);

// listen to port
app.listen(3000);
console.log('Todo list is running on port 3000!');