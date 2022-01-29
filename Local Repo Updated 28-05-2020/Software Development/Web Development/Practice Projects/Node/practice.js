
var mongo = require('mongodb');

var MongoClient = require('mongodb').MongoClient, format = require('util').format;

var url = "mongodb://localhost/127.0.0.1:27017";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.write('hello');
  db.close();
});