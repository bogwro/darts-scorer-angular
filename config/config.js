/*global path root*/

'use strict';

require('./globals');

module.exports = {
  webpackConfig: require(path.join(root, 'config', 'webpack.config.js'))
};
