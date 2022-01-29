// create outter div with class app
var appDiv = document.createElement('div'); 
appDiv.className = 'app';
// add div to the body
document.body.appendChild(appDiv);


// video-container div 
var vidContainer = document.createElement('div'); 
vidContainer.className = 'vid-container'; 
document.body.appendChild(vidContainer);
appDiv.appendChild(vidContainer);

var vid = document.createElement('video'); 
document.body.appendChild(vid);
vidContainer.appendChild(vid);
vid.loop = true;

var vidSource = document.createElement('source');
vidSource.setAttribute('src', 'video/rain.mp4'); 
vidSource.setAttribute('type', 'video/mp4');
document.body.appendChild(vidSource);
vid.appendChild(vidSource);


// create 3 inner divs within app div
var timeSelectDiv = document.createElement('div'); 
timeSelectDiv.className = 'time-select'; // class time-select

var playerContainerDiv = document.createElement('div'); 
playerContainerDiv.className = 'player-container'; // class player-Container

var soundPickerDiv = document.createElement('div'); 
soundPickerDiv.className = 'sound-picker'; // class time-select


// add 3 inner divs into the outer div app
document.body.appendChild(timeSelectDiv);
appDiv.appendChild(timeSelectDiv);

document.body.appendChild(playerContainerDiv);
appDiv.appendChild(playerContainerDiv);

document.body.appendChild(soundPickerDiv);
appDiv.appendChild(soundPickerDiv);



