var gulp = require('gulp'),
    gutil = require('gulp-util'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    livereload = require('gulp-livereload'),
    lr = require('tiny-lr'),
    server = lr();


var jsSources = [
    'components/scripts/scriptOne.js',
    'components/scripts/scriptTwo.js'
];

gulp.task('js', function() {
    gulp.src(jsSources)
    .pipe(uglify())
    .pipe(concat('script.js'))
    .pipe(gulp.dest('js'));
});


gulp.task('watch', function(){
    var server = livereload();
    gulp.watch(jsSources, ['js']);
    gulp.watch(['js/script.js', '*.html'], function(e){
        server.change(e.path);
    });
});

gulp.task('default', ['js', 'watch']);
