/*global gulp*/

'use strict';

var ghPages = require('gulp-gh-pages');

/**
 * publish contents to Github pages
 *
 * @example
 * npm run gulp -- deploy-gh-pages
 */
exports.task = function () {
  return gulp.src('./dist/**/*')
    .pipe(ghPages({
      force: true
    }));
};
