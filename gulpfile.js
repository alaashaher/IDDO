const gulp = require('gulp');
const sass = require('gulp-sass');
const pug = require('gulp-pug');
const watch = require('gulp-watch');
const autoprefixer = require('gulp-autoprefixer');
const connect = require('gulp-connect');
const concat = require('gulp-concat');

gulp.task('sass', function () {
  return gulp.src('Iddo-project/style/index.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
});
gulp.task('pug', () => {
    return gulp.src('Iddo-project/pug/index.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('./'))
        .pipe(connect.reload())
});

gulp.task('watch', () => {
    gulp.watch('Iddo-project/style/*.scss', ['sass']);
    gulp.watch('Iddo-project/pug/*.pug', ['pug']);
});

gulp.task('connect', () => {
    connect.server({
        port: 8000,
        root: './',
        livereload: true
    })
});

gulp.task('default', ['connect', 'watch']);
