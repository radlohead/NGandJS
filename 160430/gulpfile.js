var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var strip = require('gulp-strip-debug');
/*
var sass = require('gulp-sass');
var minifyHtml = require('gulp-minify-html');
*/




gulp.task('uglify', function(){
   return gulp.src('src/**/*.js')
       .pipe(strip())
       .pipe(concat('app.min.js'))
       .pipe(uglify())
       .pipe(gulp.dest('dist'))
});

gulp.task('hello', function(){
    console.log('hello');
});
gulp.task('default', ['hello','uglify','watch'], function(){
    console.log('default');
});

gulp.task('watch', function(){
   gulp.watch('src/app.js', ['uglify', 'hello'])
});
