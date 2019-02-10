'use strict';
var gulp = require('gulp'),
  sass = require('gulp-sass'),
  browserSync = require('browser-sync').create();
sass.compiler = require('node-sass');

function style() {
  return gulp
    .src('app/scss/styles.scss')
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(gulp.dest('app/dist/css'))
    .pipe(browserSync.stream());
}

function reload() {
  browserSync.reload();
  sass.reload();
}

function watch() {
  browserSync.init({
    // You can tell browserSync to use this directory and serve it as a mini-server
    server: {
      baseDir: 'app/dist'
    }
  });
  gulp.watch('app/scss/*.scss', style);
  gulp.watch('*.*', reload);
}

exports.style = style;
exports.watch = watch;
