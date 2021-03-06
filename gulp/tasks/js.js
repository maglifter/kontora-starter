module.exports = function () {
  // Сторонние библиотеки и плагины
  $.gulp.task('js:lib', function () {
    return $.gulp.src([
      'node_modules/jquery/dist/jquery.js',
      // 'src/static/libs/uranium.js/uranium.js'
    ])
      .pipe($.gp.concat('libs.js'))
      .pipe($.gulp.dest('src/js/'));
  });

  // Модули проекта
  $.gulp.task('js:modules', function () {
    return $.gulp.src('src/js/modules/*.js')
      .pipe($.gp.plumber({
        errorHandler: $.gp.notify.onError()
      }))
      .pipe($.gp.concat('modules.js'))
      .pipe($.gulp.dest('src/js/'));
  });

  // Собирает в два одинаковых файла с разным названием
  $.gulp.task('js:dev', function () {
    return $.gulp.src([
      'src/js/libs.js',
      'src/js/modules.js',
      'src/js/main.js'
    ])
      .pipe($.gp.plumber({
        errorHandler: $.gp.notify.onError()
      }))
      .pipe($.gp.concat('scripts.js'))
      .pipe($.gulp.dest('build/static/js/'))
      .pipe($.gp.rename('scripts.min.js'))
      .pipe($.gulp.dest('build/static/js/'));
  });

  // Собирает и минифицирует
  $.gulp.task('js:build', function () {
    return $.gulp.src([
      'src/js/libs.js',
      'src/js/modules.js',
      'src/js/main.js'
    ])
      .pipe($.gp.plumber({
        errorHandler: $.gp.notify.onError()
      }))
      .pipe($.gp.concat('scripts.js'))
      .pipe($.gulp.dest('build/static/js/'))
      .pipe($.gp.uglify())
      .pipe($.gp.rename('scripts.min.js'))
      .pipe($.gulp.dest('build/static/js/'));
  });
};
