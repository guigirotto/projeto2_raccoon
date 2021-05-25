const { src, dest, watch, series} = require('gulp');
const sass = require('gulp-sass');
const prefix = require('gulp-autoprefixer');
const minify = require('gulp-clean-css');
const terser = require('gulp-terser');
const imagemin = require('gulp-imagemin');
const imagewebp = require('gulp-webp');

//compile, prefix, and min scss
function compilescss() {
  return src('style/scss/*.scss') // change to your source directory
    .pipe(sass())
    .pipe(prefix('last 2 versions'))
    .pipe(minify())
    .pipe(dest('style/css')) // change to your final/public directory
};

//optimize and move images
function optimizeimg() {
  return src('src/images/*.{jpg,png}') // change to your source directory
    .pipe(imagemin([
      imagemin.mozjpeg({ quality: 80, progressive: true }),
      imagemin.optipng({ optimizationLevel: 2 }),
    ]))
    .pipe(dest('dist/images')) // change to your final/public directory
};

//optimize and move images
function webpImage() {
  return src('dist/images/*.{jpg,png}') // change to your source directory
    .pipe(imagewebp())
    .pipe(dest('dist/images')) // change to your final/public directory
};


// minify js
function jsmin(){
  return src('/js/*.js') // change to your source directory
    .pipe(terser())
    .pipe(dest('/script')); // change to your final/public directory
}

//watchtask
function watchTask(){
  watch('style/scss/*.scss', compilescss); // change to your source directory
  watch('/js/*.js', jsmin); // change to your source directory
  watch('src/images/*', optimizeimg); // change to your source directory
  watch('dist/images/*.{jpg,png}', webpImage); // change to your source directory
}


// Default Gulp task 
exports.default = series(
  compilescss,
  jsmin,
  optimizeimg,
  webpImage,
  watchTask
);