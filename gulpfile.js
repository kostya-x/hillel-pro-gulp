const gulp = require('gulp');
const sass = require('gulp-sass');
const del = require('del');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync');

gulp.task('html', () => {
  return gulp.src('./src/**/*.html')
    .pipe(gulp.dest('build'))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task('style', () => {
  return gulp.src('./src/style/**/*.{css,scss,sass}')
    .pipe(sass())
    .pipe(gulp.dest('./build/css'))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task('js', () => {
  return gulp.src('./src/js/**/*.js')
    .pipe(babel({
      presets: [
        '@babel/preset-env'
      ]
    }))
    .pipe(concat('all.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./build/js'))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task('watch', () => {
  gulp.watch('src/**/*.*', gulp.series('build'));
});

gulp.task('browser-sync', () => {
  browserSync({
    server: {
      baseDir: './build'
    },
    notify: false
  });
});

gulp.task('del', async() => {
  return del.sync('./build');
});

gulp.task('build', gulp.series('del', 'html', 'style', 'js'));
gulp.task('start', gulp.series('del', 'html', 'style', 'js', 'browser-sync', 'watch'));
