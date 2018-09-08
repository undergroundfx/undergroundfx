var height = 0;
var timerlength;
var stoploop = 0;
var perctext = document.getElementById('percentage');
var progress = document.getElementById('inside');
var bordercolor = document.getElementById('outside');
var newlengths = document.getElementById('newlengths');
var worklength = document.getElementById('worklength');
var breaklength = document.getElementById('breaklength');
var title = document.getElementById('title');

timerLoop();

function timerLoop() {

  if (stoploop === true) {
    return;
  }

  progress.style.background = 'green';
  bordercolor.style.borderColor = 'green';
  perctext.style.color = 'green';
  title.style.color = 'green';

  progress.style.height = height + '%';
  height += timerlength;

  // round up the percentage and display it	
  perctext.innerHTML = parseInt(progress.style.height) + '%';

  // exit the function when it reaches 100%	
  if (perctext.innerHTML === '100%') {
    var audio = new Audio('http://www.sounddogs.com/previews/108/mp3/1086695_SOUNDDOGS__be.mp3');
    audio.play();
    height = 0;
    breakLoop();
    return;
  }

  setTimeout(timerLoop, 1000);
}

function breakLoop() {

  progress.style.background = 'red';
  bordercolor.style.borderColor = 'red';
  perctext.style.color = 'red';
  title.style.color = 'red';

  progress.style.height = height + '%';
  height += breaklength;

  // round up the percentage and display it	
  perctext.innerHTML = parseInt(progress.style.height) + '%';

  // exit the function when it reaches 100%	
  if (progress.style.height === '100%') {
    var audio = new Audio('http://www.sounddogs.com/previews/108/mp3/1086695_SOUNDDOGS__be.mp3');
    audio.play();
    height = 0;
    timerLoop();
    return;
  }

  setTimeout(breakLoop, 1000);
}

function length() {

  stoploop = true;
  height = 0;

  timerlength = worklength.value;
  breaklength = breaklength.value;

  // make bar increase in proportion to the timer
  timerlength = timerlength * 60;
  timerlength = 100 / timerlength;

  // make bar increase in proportion to the timer
  breaklength = breaklength * 60;
  breaklength = 100 / breaklength;

  timerLoop();
  stoploop = false;
}

newlengths.addEventListener('click', function() {
  length();
});

