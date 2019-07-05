var gulp = require('gulp'),
    sass = require('gulp-sass');

gulp.task('scss', function () {
    gulp.src('scss/app.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('css'));
    });

//compile and watch
gulp.task('watch', function() {
    gulp.watch('scss/app.scss', ['scss']);
   });