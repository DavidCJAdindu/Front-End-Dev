// header
var header = document.createElement('header'); 
header.setAttribute('class', 'bg-secondary text-center p-3 mb-5'); 
document.body.appendChild(header);


// h1 inside header
var h1 = document.createElement('h1'); 
h1.textContent = 'Premier League Quiz';
document.body.appendChild(header);
header.appendChild(h1);


// container div
var container = document.createElement('div');
container.setAttribute('class', 'container text-center'); 
document.body.appendChild(container);

// class - 'row' div
var row = document.createElement('div');
row.setAttribute('class', 'row'); 
document.body.append(row);
container.appendChild(row);


// div wrapper
var wrapper = document.createElement('div');
wrapper.setAttribute('class', 'col-md-6 mx-auto'); 
document.body.append(wrapper);
// everything will now go inside this wrapper div created 
row.appendChild(wrapper);


// text after the header
var p = document.createElement('p');
p.setAttribute('class', 'lead'); 
p.textContent = 'Type The Name of The PL Manager, You Have ';
document.body.append(p);
wrapper.appendChild(p);

var span1 = document.createElement('span');
span1.textContent = '20';
span1.setAttribute('class', 'text-success'); 
span1.setAttribute('id', 'seconds'); 
document.body.append(span1);
p.appendChild(span1)

var span = document.createElement('span');
span.textContent = ' Seconds:';
document.body.append(span);
p.appendChild(span)

var h2 = document.createElement('h2');
h2.textContent = 'Club';
h2.setAttribute('class', 'display-2 mb-5 mt-3'); 
h2.setAttribute('id', 'current-word'); 
document.body.append(h2);
wrapper.appendChild(h2);

var input = document.createElement('input');
input.setAttribute('type', 'text');  
input.setAttribute('class', 'form-control form-control-lg'); 
input.setAttribute('placeholder', 'Type PL Manager...');
input.setAttribute('id', 'word-input'); 
input.autofocus = true;
// input.setAttribute('autofocus'); 
document.body.append(input);
wrapper.appendChild(input);

var h4 = document.createElement('h4');
h4.setAttribute('class', 'mt-3'); 
h4.setAttribute('id', 'message'); 
document.body.append(h4);
wrapper.appendChild(h4);


// time & score columns
var row2 = document.createElement('div');
row2.setAttribute('class', 'row mt-5');
document.body.append(row2);
wrapper.appendChild(row2);

//column 1
var column1 = document.createElement('div')
column1.setAttribute('class', 'col-md-6');
document.body.append(column1);
row2.appendChild(column1);

var firsth3 = document.createElement('h3');
firsth3.textContent = 'Time Left: ';
document.body.appendChild(firsth3);
column1.appendChild(firsth3);

var span2 = document.createElement('span');
span2.setAttribute('id', 'time');
span2.textContent = '0';
document.body.appendChild(span2);
firsth3.appendChild(span2);

//column 2
var column2 = document.createElement('div');
column2.setAttribute('class', 'col-md-6');
document.body.append(column2);
row2.appendChild(column2);

var secondh3 = document.createElement('h3');
secondh3.textContent = 'Score: ';
document.body.appendChild(secondh3);
column2.appendChild(secondh3);

var span3 = document.createElement('span');
span3.setAttribute('id', 'score');
span3.textContent = '0';
document.body.appendChild(span3);
secondh3.appendChild(span3);


// instructions
var row3 = document.createElement('div');
row3.setAttribute('class', 'row mt-5');
document.body.append(row3);
wrapper.appendChild(row3);


var centerdiv = document.createElement('div');
centerdiv.setAttribute('class', 'col-md-12');
document.body.append(centerdiv);
row3.appendChild(centerdiv);


var card = document.createElement('div');
card.setAttribute('class', 'card card-body bg-secondary text-white');
document.body.append(card);
centerdiv.appendChild(card);


var h5 = document.createElement('h5');
h5.textContent = 'Instructions';
document.body.append(h5);
card.appendChild(h5);

var p2 = document.createElement('p');
p2.textContent = 'Enter each manager for the premier league club shown. To play again, just type the current manager. Your score will reset';
document.body.append(p2);
card.appendChild(p2);






