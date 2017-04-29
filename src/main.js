$ = jQuery = require('jquery'); // nice little trick to say that both $ and jQuery resolve to require('jquery'). We need to require this because boostrap expects jQuery to be in the global namespace.

// var App will not be global code, it will be in its own module.
var App = console.log("Hello world from Browserify.");

// Browserify is a bundler.
// Browserify uses the commonJS pattern which uses module.exports to define what the file exports.
// it will go through each file and wrap them up in their own context.

module.exports = App;
