// Inline exports
module.exports.counter = function(arr) {
 return 'There are ' + arr.length + ' elements in this array'; 
};

module.exports.adder = function(num1, num2) {
  return 'The sum of the two numbers is '+ (num1 + num2);
};

module.exports.name = 'John';


/* Internal exports
module.exports.counter = counter;
module.exports.adder = adder;
module.exports.cname = name;
*/



/* Object exports
module.exports = {
  counter: counter,
  adder: adder,
  name: name
};
*/
