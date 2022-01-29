// soundPickerDiv Elements & Attributes


// Button 4 inside soundPickerDiv 
var timeBtn4 = document.createElement('button'); 
timeBtn4.setAttribute('data-sound', 'sounds/rain.mp3');
timeBtn4.setAttribute('data-video', 'video/rain.mp4');
document.body.appendChild(timeBtn4);
soundPickerDiv.appendChild(timeBtn4);

// img element inside button 4
var img2 = document.createElement('img');
img2.setAttribute('src', 'svg/rain.svg');
img2.setAttribute('alt', 'rain');
document.body.appendChild(img2);
timeBtn4.appendChild(img2);


// Button 5 inside soundPickerDiv 
var timeBtn5 = document.createElement('button'); 
timeBtn5.setAttribute('data-sound', 'sounds/beach.mp3');
timeBtn5.setAttribute('data-video', 'video/beach.mp4');
document.body.appendChild(timeBtn5);
soundPickerDiv.appendChild(timeBtn5);

// img element inside button 5
var img3 = document.createElement('img');
img3.setAttribute('src', 'svg/beach.svg');
img3.setAttribute('alt', 'beach');
document.body.appendChild(img3);
timeBtn5.appendChild(img3);



