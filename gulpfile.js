/* global gulp */

'use strict';

var fs = require('fs');

require('./config/globals');

fs.readdirSync('./config/gulp/tasks')
  .filter(function (filename) {
    return filename.match(/\.js$/i);
  })
  .map(function (filename) {
    return {
      name: filename.substr(0, filename.length - 3),
      contents: require('./config/gulp/tasks/' + filename)
    };
  })
  .filter(function(file) {
    gulp.task(file.name, file.contents.dependencies, file.contents.task);
  });
