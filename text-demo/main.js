const characters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', 'x', '#', '%', '&', '-', '+', '_', '?', '/', '\\', '='];

const options = {
  // Initial position
  offset: 0,
  // Timeout between each random character
  timeout: 5,
  // Number of random characters to show
  iterations: 10,
  // Random characters to pick from
  characters: characters
};

// Callback function when resolve completes
function callback(options) {
  console.log("String animation complete", options);
}



resolver.resolve(Object.assign({}, options, {element:document.querySelector('.date')}), callback);
resolver.resolve(Object.assign({}, options, {element:document.querySelector('.location')}), callback);
resolver.resolve(Object.assign({}, options, {element:document.querySelector('.operative-title')}), callback);
resolver.resolve(Object.assign({}, options, {element:document.querySelector('.operative-name')}), callback);
resolver.resolve(Object.assign({}, options, {element:document.querySelector('.operative-area')}), callback);
resolver.resolve(Object.assign({}, options, {element:document.querySelector('.origin')}), callback);
resolver.resolve(Object.assign({}, options, {element:document.querySelector('.clearance')}), callback);
