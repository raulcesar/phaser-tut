'use strict';
var gulp = require('gulp'),
connect=require('gulp-connect')
;
// gulp.task('connect', plugins.connect.server({
//   root: ['build'],
//   port: 9000,
//   livereload: true
// }));

// gulp.task('connect-dev', plugins.connect.server({
//   root: ['.', 'app'],
//   port: 9000,
//   livereload: true
// }));


gulp.task('connect', function() {
    // content
    connect.server();
});


gulp.task('default', ['connect']);
