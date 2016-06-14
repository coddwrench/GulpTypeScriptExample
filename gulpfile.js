var gulp = require('gulp');
var ts = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');

var tsProject = ts.createProject('tsconfig.json');

gulp.task('build', function () {
    var tsResult =
        gulp.src('src/**/*.ts')
            .pipe(sourcemaps.init())
            .pipe(ts(tsProject));
  
    var js = tsResult.js
        .pipe(concat('output.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('build'));

    return js;
});

gulp.task('default', ['build']);

