/* Wages App to calculate wages for the week 

// ask user what days of the week they are working 
// turn user input for days of the week into a variable 



// add days of the week into a variable and print 

*/

//var customerName = prompt("Please enter your name", "<name goes here>");

alert('WEEK 1');
var mondayHours = prompt("How many hours did you work on Monday");
var monHours = parseFloat(mondayHours);
var tuesdayHours = prompt("How many hours did you work on Tuesday");
var tuesHours = parseFloat(tuesdayHours);
var wednesHours = prompt("How many hours did you work on Wednesday");
var wedHours = parseFloat(wednesHours);
var thursdayHours = prompt("How many hours did you work on Thursday");
var thurHours = parseFloat(thursdayHours);
var fridayHours = prompt("How many hours did you work on Friday");
var friHours = parseFloat(fridayHours);
var saturdayHours = prompt("How many hours did you work on Saturday");
var satHours = parseFloat(saturdayHours);
var sundayHours = prompt("How many hours did you work on Sunday");
var sunHours = parseFloat(sundayHours);

var hours = monHours + tuesHours + wedHours + thurHours + friHours + satHours + sunHours; 
var totalHours = parseFloat(hours);

alert('WEEK 2');
var mondayHours2 = prompt("How many hours did you work on Monday");
var monHours2 = parseFloat(mondayHours2);
var tuesdayHours2 = prompt("How many hours did you work on Tuesday");
var tuesHours2 = parseFloat(tuesdayHours2);
var wednesHours2 = prompt("How many hours did you work on Wednesday");
var wedHours2 = parseFloat(wednesHours2);
var thursdayHours2 = prompt("How many hours did you work on Thursday");
var thurHours2 = parseFloat(thursdayHours2);
var fridayHours2 = prompt("How many hours did you work on Friday");
var friHours2 = parseFloat(fridayHours2);
var saturdayHours2 = prompt("How many hours did you work on Saturday");
var satHours2 = parseFloat(saturdayHours2);
var sundayHours2 = prompt("How many hours did you work on Sunday");
var sunHours2 = parseFloat(sundayHours2);

var hours2 = monHours2 + tuesHours2 + wedHours2 + thurHours2 + friHours2 + satHours2 + sunHours2; 
var totalHours2 = parseFloat(hours2);

var weekHours = totalHours + totalHours2;
var finalHours = parseFloat(weekHours);

var totalPay = finalHours * 10; 

alert('Your total payday is: €' + totalPay + '\nYour total hours worked this fotnight is: ' + finalHours);