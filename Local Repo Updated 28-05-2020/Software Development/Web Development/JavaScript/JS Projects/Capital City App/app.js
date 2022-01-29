// container div
var containerDiv = document.createElement('div'); 
containerDiv.setAttribute('class', 'container mt-5');
document.body.appendChild(containerDiv);

// row div
var rowDiv = document.createElement('div'); 
rowDiv.setAttribute('class', 'row');
document.body.appendChild(rowDiv);
containerDiv.appendChild(rowDiv);

// column div
var colDiv = document.createElement('div'); 
colDiv.setAttribute('class', 'col-md-6 m-auto');
document.body.appendChild(colDiv);
rowDiv.appendChild(colDiv);

// h3
var h3 = document.createElement('h3');
h3.setAttribute('class', 'text-center mb-3');
document.body.appendChild(h3);
colDiv.appendChild(h3);

// font tag
var font = document.createElement('i');
font.setAttribute('class', 'fas fa-globe');
document.body.appendChild(font);
h3.appendChild(font);

// text span
var span = document.createElement('span');
span.textContent = ' Capital City Lookup';
document.body.appendChild(span);
h3.appendChild(span);

// form
var form = document.createElement('div');
form.setAttribute('class', 'form-group');
document.body.appendChild(form);
colDiv.appendChild(form);

// input
var input = document.createElement('input');
input.setAttribute('type', 'text');
input.setAttribute('id', 'search');
input.setAttribute('class', 'form-control form-control-lg');
input.setAttribute('placeholder', 'Enter country name...');
document.body.appendChild(input);
form.appendChild(input);

// data container
var data = document.createElement('div');
data.setAttribute('id', 'match-list');
document.body.appendChild(data);
colDiv.appendChild(data);