'use strict';
var gulp = require('gulp'),
  sass = require('gulp-sass');

function style() {
  return gulp
    .src('app/scss/*.scss')
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(gulp.dest('app/css'));
}

function watch() {
  gulp.watch('app/scss/*.scss', style);
}

exports.style = style;
exports.watch = watch;
