gulp = require('gulp')
#fileinclude = require('gulp-file-include')
minify = require('gulp-minify-css')
sass = require('gulp-sass')
browserSync = require('browser-sync')
del = require('del')
runSequence = require('run-sequence')
concat = require('gulp-concat')
uglify = require('gulp-uglify')
autoprefixer = require('gulp-autoprefixer')
spriter = require('gulp-css-spriter')
plumber = require('gulp-plumber')
csso = require('gulp-csso')
babel = require('gulp-babel')
sourcemaps = require("gulp-sourcemaps")
replace = require("gulp-replace")

# 构建任务部分
gulp.task('default', (callback) ->
  runSequence( ['build'], ['serve','watch'], callback)
)

gulp.task('build', (callback) ->
  runSequence( ['sassCss'], callback)
)

#scss预编译设置css样式并合并到style中
gulp.task('sassCss', ->
  gulp.src('./web/css/*.scss')
    .pipe(plumber())
#    .pipe(sass({noCache: true, sourcemapPath: '../../src/scss'}))
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(autoprefixer({
    browsers: ['last 8 versions', 'Android >= 4.0', '> 1%', 'Firefox >= 20', 'Firefox ESR', 'ie 8', 'IOS 7'],
#    browsers: ['last 8 versions','last 5 Explorer versions','last 3 Safari versions','last 5 Chrome versions', 'Android >= 4.0','last 5 Opera versions','last 5 OperaMobile versions','last 5 OperaMini versions','last 5 FirefoxAndroid versions','last 5 ChromeAndroid versions', '> 1%', 'Firefox >= 14', 'Firefox ESR', 'ie 8','ie 7','ie 6', 'IOS 7'],
    cascade: true,
    remove: true,
    add: true,
    flexbox: true
  }))
#    .pipe(csso())
    .pipe(minify())
    .pipe(replace('}','}\n'))
    .pipe(sourcemaps.write("."))
    .pipe(plumber.stop())
    .pipe(gulp.dest('./web/css'))

#
#  gulp.src('./web/css/login.scss')
#    .pipe(plumber())
##    .pipe(sass({noCache: true, sourcemapPath: '../../src/scss'}))
#    .pipe(sourcemaps.init())
#    .pipe(sass())
#    .pipe(autoprefixer({
#    browsers: ['last 8 versions', 'Android >= 4.0', '> 1%', 'Firefox >= 20', 'Firefox ESR', 'ie 8', 'IOS 7'],
##    browsers: ['last 8 versions','last 5 Explorer versions','last 3 Safari versions','last 5 Chrome versions', 'Android >= 4.0','last 5 Opera versions','last 5 OperaMobile versions','last 5 OperaMini versions','last 5 FirefoxAndroid versions','last 5 ChromeAndroid versions', '> 1%', 'Firefox >= 14', 'Firefox ESR', 'ie 8','ie 7','ie 6', 'IOS 7'],
#    cascade: true,
#    remove: true,
#    add: true,
#    flexbox: true
#  }))
##    .pipe(csso())
#    .pipe(minify())
#    .pipe(replace('}','}\n'))
#    .pipe(sourcemaps.write("."))
#    .pipe(plumber.stop())
#    .pipe(gulp.dest('./web/css'))
#
  gulp.src('./web/js/**/*.scss')
    .pipe(plumber())
#    .pipe(sass({noCache: true, sourcemapPath: '../../src/scss'}))
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(autoprefixer({
    browsers: ['last 8 versions', 'Android >= 4.0', '> 1%', 'Firefox >= 20', 'Firefox ESR', 'ie 8', 'IOS 7'],
#    browsers: ['last 8 versions','last 5 Explorer versions','last 3 Safari versions','last 5 Chrome versions', 'Android >= 4.0','last 5 Opera versions','last 5 OperaMobile versions','last 5 OperaMini versions','last 5 FirefoxAndroid versions','last 5 ChromeAndroid versions', '> 1%', 'Firefox >= 14', 'Firefox ESR', 'ie 8','ie 7','ie 6', 'IOS 7'],
    cascade: true,
    remove: true,
    add: true,
    flexbox: true
  }))
#    .pipe(csso())
    .pipe(minify())
    .pipe(replace('}','}\n'))
    .pipe(sourcemaps.write("."))
    .pipe(plumber.stop())
    .pipe(gulp.dest('./web/js/'))
)

gulp.task('serve', ->
  browserSync.init({
    server: {
      baseDir: './web'
    }
    port: 7561
  })
)

gulp.task('watch', ->
  gulp.watch(['./web/css/*.scss'], ['sassCss'])
#  runSequence(['reload-browser'])
)


gulp.task('reload', (callback)->
  runSequence(['build'], ['reload-browser'], callback)
)

gulp.task('reload-browser', ->
  browserSync.reload()
)

