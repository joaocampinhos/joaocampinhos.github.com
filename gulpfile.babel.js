import gulp from 'gulp'
import eslint from 'gulp-eslint'
import babel from 'gulp-babel'
import nano from 'cssnano'
import postcss from 'gulp-postcss'
import browserSync from 'browser-sync'
import cssnext from 'postcss-cssnext'
import pimport from 'postcss-import'
import sourcemaps from 'gulp-sourcemaps'

const dist = 'public/'

gulp.task('styles', () => {
  gulp.src('assets/styles/styles.css')
  .pipe(sourcemaps.init())
  .pipe(postcss([
    pimport,
    cssnext
  ]))
  .on('error', (err) => { console.log(err.message) })
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest(dist))
})

gulp.task('scripts', () => {
  gulp.src('assets/scripts/app.js')
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(babel({
    presets: ['es2015']
  }))
  .on('error', (err) => { console.log(err.codeFrame) })
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest(dist))
})

gulp.task('jekyll', (done) => {
  var child = require('child_process').spawn('jekyll', ['build','--drafts'], {cwd: process.cwd()}),
    stderr = ''

    child.stderr.setEncoding('utf8');
    child.stderr.on('data', function (data) {
      stderr += data;
      console.log(data);
      browserSync.notify('<span style="color:red">'+data+'</span>', 10000);
    });

    child.on('close', function(code) {
      if (code===0) browserSync.reload();
      done()
    });
})

gulp.task('serve', ['styles', 'scripts', 'jekyll'], () => {
  browserSync.init({
    server: '_site'
  })
  gulp.watch('assets/styles/**/*.css', ['styles', 'jekyll'])
  gulp.watch('assets/scripts/**/*.js', ['scripts', 'jekyll'])
  gulp.watch(['*.html', '**/*.md', '_includes/*.html', '_layouts/*.html'], ['jekyll'])
})

gulp.task('default', ['serve'])
