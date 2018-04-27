var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

gulp.task('default', ['copy', 'browserify']);

gulp.task('copy', function () {
    gulp.src('./src/audio/*')
        .pipe(gulp.dest('./dist/audio'));
    gulp.src('./src/images/*')
        .pipe(gulp.dest('./dist/images'));
});

gulp.task('browserify', function () {
    var b = browserify({
        entries: './src/bug_attack.js',
        transform: [babelify]
    });

    return b.bundle()
            .pipe(source('./bug_attack.js'))
            .pipe(gulp.dest('./dist/'));
});

gulp.task('watch', function() {
    gulp.watch('./src/**/*', ['default']);
});
