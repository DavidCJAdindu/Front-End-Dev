var app = function() {

  var song = document.querySelector('.song');
  var play = document.querySelector('.play');
  var outline =  document.querySelector('.moving-outline circle');
  var video = document.querySelector('.vid-container video');

  // sounds
  var sounds = document.querySelectorAll('.sound-picker button');
  // time display
  var timeDisplay = document.querySelector('.time-display');
  var timeSelect = document.querySelectorAll('.time-select button')
  // get length of outline
  var outlineLength = outline.getTotalLength();
  // duration
  var fakeDuration = 600;

  outline.style.strokeDasharray = outlineLength;
  outline.style.strokeDashoffset = outlineLength;

  //pick diffrent sounds
  sounds.forEach(sound => {
    sound.addEventListener('click', function(){
      song.src = this.getAttribute('data-sound');
      video.src = this.getAttribute('data-video');
      checkPlaying(song);
    })
  });


  // play sound
  play.addEventListener('click', function(){
    checkPlaying(song);
  });


  // select sound duration
  timeSelect.forEach(option => {
    option.addEventListener('click', function(){
      fakeDuration = this.getAttribute('data-time');
      timeDisplay.textContent = `${Math.floor(fakeDuration / 60)} : 
      ${Math.floor(fakeDuration % 60)}`;
    });
  });


  // create a stop & play sound function
  var checkPlaying = song => {
    if(song.paused){
      song.play();
      video.play();
      play.src = 'svg/pause.svg';
    } else {
      song.pause();
      video.pause();
      play.src = 'svg/play.svg'
    }
  }

  // animation
  song.ontimeupdate = function() {
    var currentTime = song.currentTime;
    var elapsed = fakeDuration - currentTime;
    var seconds = Math.floor(elapsed % 60);
    var minutes = Math.floor(elapsed / 60);

    // animate the circle
    var progress = outlineLength - (currentTime / fakeDuration) * outlineLength;
    outline.style.strokeDashoffset = progress;

    // animate the text
    timeDisplay.textContent = `${minutes}:${seconds}`

    if(currentTime >= fakeDuration){
      song.pause();
      song.currentTime = 0;
      play.src = 'svg/play.svg';
      video.pause();
    }
  
  };

  

  


  

};

app();