window.addEventListener('load', init);
//init();


// Globals

// Available Levels
const levels = {
  easy: 30,
  medium: 20,
  hard: 10
};

// To change level
const currentLevel = levels.medium;

let time = currentLevel;
let score = 0;
let isPlaying;

// DOM Elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

var words = [

  //{ club : 'Arsenal' , manager : 'mikel arteta' },
  //{ club : 'Aston Villa' , manager : 'dean smith' },
  //{ club : 'Bournemouth' , manager : 'eddie howe' },
  //{ club : 'Brighton & Hove Albion' , manager : 'graham potter' },
  //{ club : 'Burnley' , manager : 'sean dyche' },
  //{ club : 'Chelsea' , manager : 'frank lampard' },
  //{ club : 'Crystal Palace' , manager : 'roy hodgson' },
  //{ club : 'Everton' , manager : 'carlo ancelotti' },
  //{ club : 'Leicester City' , manager : 'brendan rodgers' },
  //{ club : 'Liverpool' , manager : 'jurgen klopp' },
  //{ club : 'Manchester City' , manager : 'pep guardiola' },
  { club : 'Manchester United' , manager : 'ole' },
  //{ club : 'Newcastle United' , manager : 'steve bruce' },
  //{ club : 'Norwich City' , manager : 'daniel farke' },
  //{ club : 'Sheffield United' , manager : 'chris wilder' },
  //{ club : 'Southampton' , manager : 'ralph hasenhuttl' },
  //{ club : 'Tottenham Hotspur' , manager : 'jose mourinho' },
  //{ club : 'Watford' , manager : 'nigel pearson' },
  { club : 'West Ham United' , manager : 'david' },
  //{ club : 'Wolverhampton Wanderers' , manager : 'nuno espirito santo' }

];

// Initialize Game
function init() {
  // Show number of seconds in UI
  seconds.innerHTML = currentLevel;
  // Load word from array
  currentWord.innerHTML = randomTeam.club;
  // Start matching on word input
  wordInput.addEventListener('input', startMatch);
  // Call countdown every second
  setInterval(countdown, 1000);
  // Check game status
  setInterval(checkStatus, 10);
}


// Start match
function startMatch() {


  if (matchWords()) {
    console.log(randomTeam.club);
    //currentWord.innerHTML = randomTeam.club;
    isPlaying = true;
    message.innerHTML = 'Correct!!!'; 
    time = currentLevel + 1;
    wordInput.value = '';
    score++;
  }

  // If score is -1, display 0
  if (score === -1) {
    scoreDisplay.innerHTML = 0;
  } else {
    scoreDisplay.innerHTML = score;
  }

}




// Generate random array index
var randomTeam = words[Math.floor(Math.random() * words.length)];  


// Pick & show random word
function showWord() { 
  // Output random word
  //currentWord.innerHTML = randomTeam.club;
  //console.log(randomTeam.club);
}

// Match currentWord to wordInput
function matchWords() {
  if (wordInput.value === randomTeam.manager) {
    return true;
  } else {
  message.innerHTML = '';
  return false;
  }
}


// Countdown timer
function countdown() {
  // Make sure time is not run out
  if (time > 0) {
    // Decrement
    time--;
  } else if (time === 0) {
    // Game is over
    isPlaying = false;
  }
  // Show time
  timeDisplay.innerHTML = time;
}

// Check game status
function checkStatus() {
  if (!isPlaying && time === 0) {
    message.innerHTML = 'Game Over!!!';
    score = -1;
  }
}