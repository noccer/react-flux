(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// We're going to use this file to test Browserify is working

// var App will not be global code, it will be in its own module.
var App = console.log("Hello world from Browserify.");

// Browserify is a bundler.
// Browserify uses the commonJS pattern which uses module.exports to define what the file exports.
// it will go through each file and wrap them up in their own context.

module.exports = App;

},{}]},{},[1]);
