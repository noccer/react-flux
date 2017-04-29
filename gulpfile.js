"use strict";

var gulp = require('gulp');
var connect = require('gulp-connect'); // run a local dev server
var open = require('gulp-open'); // Open a URL in a web browser
var browserify = require('browserify'); // For bundling javascript
var reactify = require('reactify'); // Transforms React JSX to JS
var source = require('vinyl-source-stream') // Use conventional text streams with Gulp
var concat = require('gulp-concat'); // it concatenates files
var lint = require('gulp-eslint'); // lint JS files, including JSX

//gulpfile configurations:
var config = {
    port: 9009,
    devBaseUrl: 'http://localhost',
    paths: {
        html: './src/*.html',
        js: './src/**/*.js',
        images: './src/images/*',
        css: [ // we need these paths because that's where node stores the files for boostrap
            'node_modules/bootstrap/dist/css/bootstrap.min.css',
            'node_modules/boostrap/dist/css/bootstrap-theme.min.css' // boostrap-theme 'pulls it together' ???
        ],
        dist: './dist',
        mainJs: './src/main.js'
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

gulp.task('js', function() {
    browserify(config.paths.mainJs) // using Browserify, passing it the path that we defined above
        .transform(reactify) // we use transform to change any javascript that we get for compiling JSX
        .bundle() // we then want to bundle it all into one single file to reduce http requests
        .on('error', console.error.bind(console)) // we add in .on('error'...) so that if there are any bundling issues, it tells us in the console.
        .pipe(source('bundle.js')) //what we call it
        .pipe(gulp.dest(config.paths.dist + '/scripts')) // define the destination for the bundle that we just defined
        .pipe(connect.reload()) // make sure that we see the latest javascript in the browser
})

gulp.task('css', function() {
    gulp.src(config.paths.css)
        .pipe(concat('bundle.css')) // call it bundle.css, a single bundled css file to save http requests
        .pipe(gulp.dest(config.paths.dist + '/css')); // drop that file in the css directory
});

gulp.task('images', function() {
    gulp.src(config.paths.images)
        .pipe(gulp.dest(config.paths.dist + '/images'))
        .pipe(connect.reload());

    gulp.src('./src/favicon.ico')
        .pipe(gulp.dest(config.paths.dist));
});

gulp.task('lint', function() {
    return gulp.src(config.paths.js)
        .pipe(lint({
            config: 'eslint.config.json'
        }))
        .pipe(lint.format());
})

//task to watch files so that every time we make a change, gulp knows about it and it reloads the browser
gulp.task('watch', function() {
    gulp.watch(config.paths.html, ['html']);
    gulp.watch(config.paths.js, ['js', 'lint']); // watch our latst javascript changes
});

//default task to make it easy to do all development:
gulp.task('default', ['html', 'js', 'css', 'images', 'lint', 'open', 'watch']);
