var gulp = require('gulp');
var sass = require('gulp-sass');


gulp.task('styles', function() {
    gulp.src('scss/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'));
});
gulp.task("watch", function() {
    gulp.watch('scss/**/*.scss', ["styles"]);
});

