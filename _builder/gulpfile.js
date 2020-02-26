const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const babel = require('gulp-babel');

const cssMin = require('gulp-cssmin');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify-es').default;


gulp.task('sass', () =>
  gulp
    .src(['../_src/scss/**/*.scss'])
    .pipe(sass().on('Syntax Error', sass.logError))
    .pipe(gulp.dest('../static/css/'))
);

const srcJs = [
  '../_src/js/vendors/jquery.js',
  '../_src/js/vendors/slick.js',
  '../_src/js/inc/fixed-scroll.js',
  '../_src/js/inc/testimonial.js'
];

gulp.task('js', () =>
  gulp
    .src([...srcJs])
    .pipe(concat('all.js'))
    .pipe(babel({ presets: ['@babel/preset-env'] }))
    .pipe(gulp.dest('../static/js/'))
);

gulp.task('cssmin', () =>
  gulp
    .src('../static/css/all.css')
    .pipe(cssMin())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('../static/css/'))
);

gulp.task('jsmin', () =>
  gulp
    .src('../static/js/all.js')
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('../static/js/'))
);