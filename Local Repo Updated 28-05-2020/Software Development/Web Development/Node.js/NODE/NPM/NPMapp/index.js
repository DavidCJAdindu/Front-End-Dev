var _ = require('lodash');

var numbers = [23, 45, 66, 54, 39, 53];

_.each(numbers, function(number, i){
  console.log(number);
});