/*global gulp runSequence*/

'use strict';

require('../../globals');

exports.task = function(callback) {
  runSequence.use(gulp);

  runSequence('clean', 'webpack-build-prod', 'copy-build-to-dist', 'deploy-gh-pages', function(error) {
    if(error) {
      console.log(error.message); // eslint-disable-line
    } else {
      console.log('RELEASE FINISHED SUCCESSFULLY!!!'); // eslint-disable-line
    }
    callback(error);
  })

};
