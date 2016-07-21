const typewriter = {
  write: function resolve(options, callback) {
    const typeString = options.typeString || options.element.getAttribute('data-text');
    const combinedOptions = Object.assign({}, options, {typeString: typeString});

    function doTypewriterEffect(options, callback) {
      const timeout = options.timeout;
      const offset = options.offset;
      const element = options.element;
      const typeString = options.typeString;
      const partialString = typeString.substring(0, offset);

      setTimeout(() => {
        element.textContent = partialString;
        const nextOptions = Object.assign({}, options, {offset: offset + 1});
        if (offset <= typeString.length) {
          doTypewriterEffect(nextOptions, callback);
        }else if (typeof callback === "function") {
          callback(combinedOptions);
        }
      }, timeout);
    }

    doTypewriterEffect(combinedOptions, callback);
  }
}
