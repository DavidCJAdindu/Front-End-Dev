// playerContainerDiv Elements & Attributes


// audio element
var audio = document.createElement('audio'); 
audio.className = 'song';
document.body.appendChild(audio);
playerContainerDiv.appendChild(audio);


// source element inside audio tag
var source = document.createElement('source');
source.setAttribute('src', 'sounds/rain.mp3');
document.body.appendChild(source);
audio.appendChild(source);

// img element 
var img = document.createElement('img');
img.setAttribute('src', 'svg/play.svg');
img.setAttribute('alt', 'play');
img.className = 'play';
document.body.appendChild(img);
playerContainerDiv.appendChild(img);


// first svg element 
var svg1 = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
svg1.setAttribute('class', 'track-outline');
svg1.setAttribute('width', '453');
svg1.setAttribute('height', '453');
svg1.setAttribute('viewBox', '0 0 453 453');
svg1.setAttribute('fill', 'none');
document.body.appendChild(svg1);
playerContainerDiv.appendChild(svg1);

// circle element inside first svg 
var circle1 = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
circle1.setAttribute('cx', '226.5');
circle1.setAttribute('cy', '226.5');
circle1.setAttribute('r', '216.5');
circle1.setAttribute('stroke', 'white');
circle1.setAttribute('stroke-width', '20');
document.body.appendChild(circle1);
svg1.appendChild(circle1);


// second svg element 
var svg2 = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
svg2.setAttribute('class', 'moving-outline');
svg2.setAttribute('width', '453');
svg2.setAttribute('height', '453');
svg2.setAttribute('viewBox', '0 0 453 453');
svg2.setAttribute('fill', 'none');
document.body.appendChild(svg2);
playerContainerDiv.appendChild(svg2);

// circle element inside second svg 
var circle2 = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
circle2.setAttribute('cx', '226.5');
circle2.setAttribute('cy', '226.5');
circle2.setAttribute('r', '216.5');
circle2.setAttribute('stroke', '#018eba');
circle2.setAttribute('stroke-width', '20');
document.body.appendChild(circle2);
svg2.appendChild(circle2);

/*

// img element 
var img1 = document.createElement('img');
img1.setAttribute('src', 'svg/replay.svg');
img1.setAttribute('alt', 'replay');
document.body.appendChild(img1);
playerContainerDiv.appendChild(img1);

*/

// timer
var time = document.createElement('h3');
time.textContent = '0:00';
time.className = 'time-display';
document.body.appendChild(time);
playerContainerDiv.appendChild(time);


