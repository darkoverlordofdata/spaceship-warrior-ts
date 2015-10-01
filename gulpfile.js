/**
 * Expose commands with gulp for use by WebStorm
 *
 */
var gulp = require('gulp');
var shell = require('gulp-shell');

gulp.task('build', shell.task(['npm run build']));
gulp.task('clean', shell.task(['npm run clean']));
gulp.task('closurebuild', shell.task(['npm run closurebuild']));
gulp.task('config', shell.task(['npm run config']));
gulp.task('deploy', shell.task(['npm run deploy']));
gulp.task('jsdoc', shell.task(['npm run jsdoc']));
gulp.task('serve', shell.task(['npm run serve']));
gulp.task('test', shell.task(['npm run test']));

gulp.task('manifest', function() {
  manifest = require('gulp-manifest');

  gulp.src(["build/web/**/*.*"]).pipe(manifest({
    hash: true,
    timestamp: true,
    preferOnline: false,
    network: ['*'],
    filename: 'manifest.appcache',
    exclude: 'manifest.appcache'
  })).pipe(gulp.dest("build/web"))
});

gulp.task('publish', function() {
  var ghPages = require('gulp-gh-pages');
  return gulp.src('./build/web/**/*')
    .pipe(ghPages());
});



