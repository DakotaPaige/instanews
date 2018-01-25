var gulp = require('gulp'); //Load gulp first

//Load the uglify and rename packages
var uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    browserSync = require('browser-sync').create(),
    eslint = require('gulp-eslint');

var reload = browserSync.reload();

gulp.task('lint', function() {
    return gulp.src(['./JS/*.js'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError())
})

//script task to minify, rename and put in build folder
gulp.task('script', gulp.series('lint', function () {
  return gulp.src('./JS/*.js') //What files we want gulp to consume
    .pipe(uglify()) // Calls the uglify function on those files
    .pipe(rename({extname: '.min.js'})) //Rename the uglified file
    .pipe(gulp.dest('./build/js')); //Where are we putting the result
}));

//task to watch when a js file is edited, then run script when it is
gulp.task('watch', function() {
    gulp.watch('js/*.js', gulp.series('script'));
 });

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });

    gulp.watch('./build/js/*.js').on('change', browserSync.reload );
})


// gulp.task('css-watch', function(done) {
//     browserSync.init({
//         server: {
//             baseDir: "./"
//         }
//     });
//     gulp.watch('*.css', function() {
//         browserSync.reload();
//         done();
//     })
// });

//default function that can reference multiple named tasks
gulp.task('default', gulp.parallel('watch', 'browser-sync'));