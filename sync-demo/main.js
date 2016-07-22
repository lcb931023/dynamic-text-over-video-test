var pop = Popcorn('#video');
var video = document.querySelector('#video');
// for (var i = 0; i < 32.48; i+=1) {
//   pop.footnote({
//     start: i,
//     end: i+1,
//     text: i,
//     target: 'popcorn-footnote'
//   });
// }
for (var i = 0; i < 32.48; i+=0.1) {
  i = Number(i.toFixed(2));
  pop.footnote({
    start: i,
    end: i+0.1,
    text: Math.floor(i),
    target: 'popcorn-footnote'
  });
}
var counter = 0;
var counterDisplay = document.querySelector('#pleb-footnote');
video.addEventListener('play', function(){
  setInterval(function(){
    counter += 0.1;
    counter = Number(counter.toFixed(2));
    counterDisplay.innerText = Math.floor(counter);
  }, 100);
})

pop.play();
