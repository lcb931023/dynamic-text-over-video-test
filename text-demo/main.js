const characters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', 'x', '#', '%', '&', '-', '+', '_', '?', '/', '\\', '='];

const options = {
  // Initial position
  offset: 0,
  // Timeout between each random character
  timeout: 55,
  // Number of random characters to show
  iterations: 0,
  // Random characters to pick from
  characters: characters
};

// Callback function when resolve completes
function callback(options) {
  console.log("String animation complete", options);
}


var animate = function () {
  resolver.resolve(Object.assign({}, options, {element:document.querySelector('.date')}), aniLocation);
  function aniLocation() {
    resolver.resolve(Object.assign({}, options, {element:document.querySelector('.location')}), aniOperativeTitle);
  }
  function aniOperativeTitle() {
    resolver.resolve(Object.assign({}, options, {element:document.querySelector('.operative-title')}), aniOperativeName);
  }
  function aniOperativeName() {
    resolver.resolve(Object.assign({}, options, {element:document.querySelector('.operative-name')}), aniOperativeArea);
  }
  function aniOperativeArea() {
    resolver.resolve(Object.assign({}, options, {element:document.querySelector('.operative-area')}), aniOrigin);
  }
  function aniOrigin() {
    resolver.resolve(Object.assign({}, options, {element:document.querySelector('.origin')}), aniClearance);
  }
  function aniClearance() {
    resolver.resolve(Object.assign({}, options, {element:document.querySelector('.clearance')}), callback);
  }
}

var gui = new dat.GUI();
gui.add(options, 'offset', 0);
gui.add(options, 'timeout', 0, 100);
gui.add(options, 'iterations', 0, 50);

document.querySelector('.animate').addEventListener('click', animate)
document.querySelector('.reset').addEventListener('click', function(){
  window.location.reload();
})

animate();
