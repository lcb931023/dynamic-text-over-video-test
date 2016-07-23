
var STAGE_WIDTH = 640;
var STAGE_HEIGHT = 360;

var video = document.querySelector('#video');
var marker = document.querySelector('.marker');

var UVToCSS = function(uv) {
  return "translate("+STAGE_WIDTH*uv.x+"px,"+STAGE_HEIGHT*(1-uv.y)+"px)"
}

// var counter = 0;
var duration = 21.1878545211879;
var frameDuration = 0.04170837504171;
var frameCount = positions.length;

var update = function(){
  marker.style.transform = UVToCSS(positions[Math.round(video.currentTime/duration*frameCount)]);
  requestAnimationFrame(update);
}

update();

// setInterval(function(){
//   marker.style.transform = UVToCSS(positions[Math.round(video.currentTime/duration*frameCount)]);
// }, frameDuration * 1000);


video.play();
// var originTime = new Date();
