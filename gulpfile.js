"use strict";

var gulp = require('gulp');
var connect = require('gulp-connect'); // run a local dev server
var open = require('gulp-open'); // Open a URL in a web browser

//gulpfile configurations:
var config = {
    port: 9009,
    devBaseUrl: 'http://localhost',
    paths: {
        html: './src/*.html',
        dist: './dist'
    }
}

// start a local developement server
gulp.task('connect', function() {
    connect.server({
        root: ['dist'],
        port: config.port,
        base: config.devBaseUrl,
        livereload: true
    });
})

// go get index.html and open it at this url:
gulp.task('open', ['connect'], function() {
    gulp.src('dist/index.html')
        .pipe(open({ // URI not URL! URL serves up the index.html file instead of localhost:9009, so live reload wont work
            uri: config.devBaseUrl + ':' + config.port + '/'
        }));
});

gulp.task('html', function() { //go get any html files, put them in the destination path (.dist), then finally reload using gulp-connect
    gulp.src(config.paths.html)
        .pipe(gulp.dest(config.paths.dist))
        .pipe(connect.reload());
});

//task to watch files so that every time we make a change, gulp knows about it and it reloads the browser
gulp.task('watch', function() {
    gulp.watch(config.paths.html, ['html']);
});

//default task to make it easy to do all development:
gulp.task('default', ['html', 'open', 'watch']);
