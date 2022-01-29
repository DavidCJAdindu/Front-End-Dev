var express = require('express');

// Set up an express app
var app = express();

// Set Template Engine
app.set('view engine', 'ejs');

// Middle wear to get css file
app.use('/css', express.static('css'));

/* HTTP Methods
- Get
- Post
- Delete
- Put
*/


/*

// Listen to a port
app.listen(3000);


// Set up route
app.get('/', function(req, res){
  res.send('home page')
});

app.get('/contact', function(req, res){
  res.send('contact page!')
});

*/


/* Route Parameters
app.get('/profile/:name', function(req, res) {
  res.send('You resquested profile id: ' + req.params.name);
});
*/


/* Set route to file

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/lorem', function(req, res){
  res.sendFile(__dirname + '/lorem.txt');
});

*/



