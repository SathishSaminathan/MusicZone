var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
    gulp.src('./src/assets/styles/*.scss')
        .pipe(sass())
        .pipe(gulp.dest(function (f) {
            return f.base;
        }))
});

gulp.task('default', ['sass'], function () {
    gulp.watch('./src/assets/styles/*.scss', ['sass']);
})