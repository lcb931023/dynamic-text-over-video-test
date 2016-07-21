const options = {
  // Initial position
  offset: 0,
  // Timeout between every type
  timeout: 50,
  // element
}


// Callback function when resolve completes
function callback(options) {
  console.log("String animation complete", options);
}



typewriter.write(Object.assign({}, options, {element:document.querySelector('.date')}), callback);
typewriter.write(Object.assign({}, options, {element:document.querySelector('.location')}), callback);
typewriter.write(Object.assign({}, options, {element:document.querySelector('.operative-title')}), callback);
typewriter.write(Object.assign({}, options, {element:document.querySelector('.operative-name')}), callback);
typewriter.write(Object.assign({}, options, {element:document.querySelector('.operative-area')}), callback);
typewriter.write(Object.assign({}, options, {element:document.querySelector('.origin')}), callback);
typewriter.write(Object.assign({}, options, {element:document.querySelector('.clearance')}), callback);
