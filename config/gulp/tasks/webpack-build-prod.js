/*global config path webpack*/

'use strict';

require('../../globals');

exports.task = function(callback) {
  var prodConfig = Object.create(config.webpackConfig);

  prodConfig.devtool = 'source-map';
  prodConfig.debug = false;

  prodConfig.output.path = path.join(root, 'dist');

  prodConfig.plugins.push(new webpack.optimize.UglifyJsPlugin());

  webpack(prodConfig, function(err, stats) {
    if(err) {
      console.error(err); // eslint-disable-line
    }

    console.log(stats.toString({ // eslint-disable-line
      colors: true
    }));

    callback(err);

  });

};
