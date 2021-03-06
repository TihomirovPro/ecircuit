const { src, dest } = require('gulp')
const pug = require('gulp-pug')
const flatten = require('gulp-flatten')
const toaster = require('./toaster')

// markup
function buildMarkup (cb) {
  return src('src/pages/*/*.pug')
    .pipe(toaster('Pug', cb))
    .pipe(pug({ pretty: true }))
    .pipe(flatten())
    .pipe(dest('dist'))
}

module.exports = { buildMarkup }
