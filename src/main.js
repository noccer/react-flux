// We're going to use this file to test Browserify is working

// var App will not be global code, it will be in its own module.
var App = console.log("Hello world from Browserify.");

// Browserify is a bundler.
// Browserify uses the commonJS pattern which uses module.exports to define what the file exports.
// it will go through each file and wrap them up in their own context.

module.exports = App;
