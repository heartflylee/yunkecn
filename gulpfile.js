var autoprefixer,
  babel,
  browserSync,
  concat,
  csso,
  del,
  gulp,
  minify,
  plumber,
  replace,
  runSequence,
  sass,
  sourcemaps,
  spriter,
  uglify;

gulp = require('gulp');

minify = require('gulp-minify-css');

sass = require('gulp-sass');

browserSync = require('browser-sync');

del = require('del');

runSequence = require('run-sequence');

concat = require('gulp-concat');

uglify = require('gulp-uglify');

autoprefixer = require('gulp-autoprefixer');

spriter = require('gulp-css-spriter');

plumber = require('gulp-plumber');

csso = require('gulp-csso');

babel = require('gulp-babel');

sourcemaps = require('gulp-sourcemaps');

replace = require('gulp-replace');
var proxy = require('http-proxy-middleware');
gulp.task('default', function(callback) {
  return runSequence(['build'], ['serve', 'watch'], callback);
});

gulp.task('build', function(callback) {
  return runSequence(['sassCss'], callback);
});

gulp.task('sassCss', function() {
  gulp
    .src('./web/css/*.scss')
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(
      autoprefixer({
        browsers: [
          'last 8 versions',
          'Android >= 4.0',
          '> 1%',
          'Firefox >= 20',
          'Firefox ESR',
          'ie 8',
          'IOS 7',
        ],
        cascade: true,
        remove: true,
        add: true,
        flexbox: true,
      })
    )
    .pipe(minify())
    .pipe(replace('}', '}\n'))
    .pipe(sourcemaps.write('.'))
    .pipe(plumber.stop())
    .pipe(gulp.dest('./web/css'));
  return gulp
    .src('./web/js/**/*.scss')
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(
      autoprefixer({
        browsers: [
          'last 8 versions',
          'Android >= 4.0',
          '> 1%',
          'Firefox >= 20',
          'Firefox ESR',
          'ie 8',
          'IOS 7',
        ],
        cascade: true,
        remove: true,
        add: true,
        flexbox: true,
      })
    )
    .pipe(minify())
    .pipe(replace('}', '}\n'))
    .pipe(sourcemaps.write('.'))
    .pipe(plumber.stop())
    .pipe(gulp.dest('./web/js/'));
});

gulp.task('sasstest', function() {
  gulp
    .src('./web/css/test.scss')
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(
      autoprefixer({
        browsers: [
          'last 8 versions',
          'Android >= 4.0',
          '> 1%',
          'Firefox >= 20',
          'Firefox ESR',
          'ie 8',
          'IOS 7',
        ],
        cascade: true,
        remove: true,
        add: true,
        flexbox: true,
      })
    )
    .pipe(minify())
    .pipe(replace('}', '}\n'))
    .pipe(sourcemaps.write('.'))
    .pipe(plumber.stop())
    .pipe(gulp.dest('./web/css'));
});

var proxy1 = proxy(['/proxy'], {
  target: 'http://123.57.222.150',
  // target: 'http://123.57.222.150:8083',
  // target: 'https://www.dianping.com',
  changeOrigin: true,
  pathRewrite: { '^/proxy': '' },
});

gulp.task('serve', function() {
  return browserSync.init({
    server: {
      baseDir: './web',
    },
    port: 7561,
    // https: true,
    middleware: [proxy1],
  });
});

gulp.task('watch', function() {
  return gulp.watch(['./web/css/*.scss'], ['sassCss']);
});

gulp.task('reload', function(callback) {
  return runSequence(['build'], ['reload-browser'], callback);
});

gulp.task('reload-browser', function() {
  return browserSync.reload();
});
