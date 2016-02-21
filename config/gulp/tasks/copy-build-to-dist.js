/*global gulp*/

'use strict';

require('../../globals');

exports.task = function() {
  return gulp.src(['build/**/*'])
    .pipe(gulp.dest('dist'));
};
