var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var ts = require('gulp-typescript');
var mocha = require('gulp-mocha');

gulp.task('default', function() {
  var tsResult = gulp.src('src/**/*.ts')
  .pipe(sourcemaps.init()) // This means sourcemaps will be generated 
  .pipe(ts({ 
    "lib": [
      "dom",
      "es5",
      "scripthost",
      "es2015.promise"
    ],
    "module": "commonjs",
    "outDir": "./dist",
    "target": "es5",
    "noImplicitAny": true,
    "sourceMap": true,
    "strictNullChecks": true
  }));

  return tsResult.js 
  .pipe(sourcemaps.write()) // Now the sourcemaps are added to the .js file 
  .pipe(gulp.dest('dist'));
});