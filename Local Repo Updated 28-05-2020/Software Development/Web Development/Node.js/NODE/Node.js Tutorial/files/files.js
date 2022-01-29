var fs = require('fs');

// Read Files
fs.readFile('readMe.txt', 'utf8', function(err, data){
  console.log('The file says: ' + data);
});


// Create Files
fs.writeFile('lavish.txt', 'Lavish Livin!', function (err) {
  console.log('File Created!');
});


// Write to Files
fs.appendFile('lavish.txt', 'Hello World!', function (err) {
  console.log('Saved!');
});


// Delete Files
fs.unlink('lavish.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});


// Create Directory
fs.mkdir('lavish', function (err) {
  if (err) throw err;
  console.log('Folder Created!');
});


// Delete Directory
fs.rmdir('lavish', function (err) {
  if (err) throw err;
  console.log('Folder Deleted!');
});
