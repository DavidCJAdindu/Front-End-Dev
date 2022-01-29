var express = require('express');

// body-parser module
var bodyParser = require('body-parser');

// Set up an express app
var app = express();

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// Set Template Engine
app.set('view engine', 'ejs');

// Middle wear to get css file
app.use('/css', express.static('css'));

// Listen to a port
app.listen(3000);


// Set route to file
app.get('/', function(req, res){
  res.render('index');
});

app.get('/contact', function(req, res){
  res.render('contact', {qs: req.query}); // query string
});

app.get('/lorem', function(req, res){
  res.sendFile(__dirname + '/lorem.txt');
});


// Route Params
app.get('/profile/:name', function(req, res) {
  var data = {age: 29, job: 'jr dev', hobbies: ['coding', 'gym', 'toking']};
  res.render('profile', {person: req.params.name, data: data});
});

app.post('/contact', urlencodedParser, function(req, res){
  console.log(req.body);
  res.render('contact-success', {data: req.body}); // query string
});











