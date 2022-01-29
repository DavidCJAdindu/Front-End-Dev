// The DOM 

// - The DOM stands is the Document Object Model. 
// - We can take html/css elements & properties and perform javascript operations on them like put them into variables.

// -- Selectors --
// > Single element
document.getElementById('my-form'); // selects an element by id
document.querySelector('my-form'); // you can select anything using querySelector


// > Multiple element 
document.querySelectorAll('.item'); // used to select all elements with the class 'item'
document.getElementsByClassName('item'); // used to select elements using class name, dont need to specify type of element it is always class
document.getElementsByTagName('li'); // used to select elements with the 'li' tag 

// - You will probably use querySelector & querySelectorAll most of the time. 


// --- DOM Manipulation ---

// turns html '.item' class into a variable
var ul = document.querySelector('.items');
 
// method that removes elements
ul.remove();

// removes last item in the 'ul'
ul.lastElementChild.remove();

// changes the first element content in the 'ul' element
ul.firstElementChild.textContent = 'Hello'; 
// changes the second content in the 'ul' element
ul.children[1].innerText = 'Brad'; 
// changed the type of content in the 'ul' element
ul.lastElementChild.innerHTML = '<h1> HELLO, WORLD <h1>'

// turns html '.btn' class into a variable 
var btn = document.querySelector('.btn');


// CSS - turns btn class red
btn.style.background = 'red'; 

// Event Listener ('the event', 'function that runs when event happens')
btn.addEventListener('click', style.background = 'red');


