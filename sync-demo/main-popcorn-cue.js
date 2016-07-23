// NOTE cue fires as frequently as we want, but doesn't match actual frames played
// in addition, animation isn't smooth

var STAGE_WIDTH = 640;
var STAGE_HEIGHT = 360;

var pop = Popcorn('#video');
var video = document.querySelector('#video');
var marker = document.querySelector('.marker');

var UVToCSS = function(uv) {
  return "translate("+STAGE_WIDTH*uv.x+"px,"+STAGE_HEIGHT*(1-uv.y)+"px)"
}

// var counter = 0;
var duration = 21.1878545211879;
var frameDuration = 0.04170837504171;
var frameCount = positions.length;
for (var i = 0; i < duration; i+=frameDuration) {
  pop.cue(i, function(i, e){
    // console.log("VIDEO  TIME: " + video.currentTime);
    // var currentTime = new Date();
    // console.log("ACTUAL TIME: " + (currentTime - originTime)/1000);

    // console.log("counter " + counter + " video " + video.currentTime + " DIFF: " + ( counter - video.currentTime ) )

    // console.table([{
    //   "counter": counter,
    //   "video.currentTime": video.currentTime,
    //   "diff": counter - video.currentTime
    // }]);

    marker.style.transform = UVToCSS(positions[Math.round(i/duration*frameCount)]);

    // counter += 1;
  }.bind(null, i));
}

pop.play();
// var originTime = new Date();
