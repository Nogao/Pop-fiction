var mediaPlayer;
var progressBar;
var mutebtn;
var playerContainer = document.querySelector('.Playercontainer');
var video = document.querySelector('.video');
var Barvolume = document.querySelector('.volumeBar');
var mediaPlayer = document.querySelector('.video')
var progressBar = document.querySelector('.progressBar');
var btnmultifonction = document.querySelector('.play-pause-btn');
var element = document.querySelector('.video');
var btnmute = document.querySelector('.mutebtn');
var textcurtime = document.querySelector('.curtimetexte');
var textdurtime = document.querySelector('.durtimetexte')
var mtnbtn = document.querySelector('.muteimg');


document.addEventListener('DOMContentLoaded',function(){
  initPlayer();

}, false);

function initPlayer() {
  mediaPlayer.addEventListener('timeupdate', updateBar, false);
  progressBar.addEventListener('click', seek);
}

//function pour play/pause la Video

function toggleVideo() {
  if (mediaPlayer.paused || mediaPlayer.endend) {
      btnmultifonction.style.backgroundImage = "url(../img/pausebtn.svg)";
      mediaPlayer.play();

  } else{
    btnmultifonction.style.backgroundImage = "url(../img/playbtn.png)";
    mediaPlayer.pause();
  }
}

//function pour stopper la video

function stopvideo() {
  mediaPlayer.pause();
  mediaPlayer.currentTime = 0;
  btnmultifonction.style.backgroundImage = "url(../img/playbtn.png)";
}

function updateBar (){
  var pourcentage = ((100/ mediaPlayer.duration)* mediaPlayer.currentTime);
  progressBar.value = pourcentage;
  var curmins = Math.floor(video.currentTime / 60);
  var cursecs = Math.floor(video.currentTime - curmins * 60);
  var durmins = Math.floor(video.duration / 60);
  var dursecs = Math.round(video.duration - durmins * 60);
  if (cursecs < 10){
      cursecs = "0"+cursecs;
  }
  if(dursecs < 10){
    dursecs = "0"+dursecs;
  }
  textcurtime.innerHTML = curmins+":"+cursecs;
  textdurtime.innerHTML = durmins+":"+dursecs;
}


function seek(e) {
  var percent = e.offsetX / this.offsetWidth;
  mediaPlayer.currentTime = percent * mediaPlayer.duration;
  progressBar.value = percent / 100;
}

function fullscreen() {
  if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if (element.webkitRequestFullScreen) {
    element.webkitRequestFullScreen();
  }
}

function mute(){
  if (video.muted){
    Barvolume.value = oldvol;
    video.muted = false;
  } else {
    oldvol = Barvolume.value;
    Barvolume.value = 0;
    video.muted = true;
  }
}

function setvolume(){
  video.volume = Barvolume.value / 100;
}

// input volumbe bar
