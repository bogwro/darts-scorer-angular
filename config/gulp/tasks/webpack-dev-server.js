/*global config HOST PORT webpack WebpackDevServer*/

'use strict';

require('../../globals');

var open = require('open');

exports.task = function(callback) {
  var devConfig = Object.create(config.webpackConfig);
  var compiler;
  var host = HOST || 'localhost';
  var port = PORT || 8080;

  Object.keys(devConfig.entry).forEach(function(key) {
    devConfig.entry[key].unshift('webpack/hot/dev-server', 'webpack-dev-server/client?http://' + host + ':' + port);
  });

  devConfig.plugins.push(new webpack.HotModuleReplacementPlugin());

  devConfig.devtool = 'eval-source-map';
  devConfig.debug = true;
  devConfig.progress = true;

  devConfig.plugins.push(new webpack.HotModuleReplacementPlugin());
  devConfig.plugins.push(new webpack.SourceMapDevToolPlugin({}));

  compiler = webpack(devConfig);

  new WebpackDevServer(compiler, {
    contentBase: devConfig.devServer.contentBase || 'build',
    host,
    hot: true
  }).listen(port, host, function(error) {
    if(error) {
      console.log('ERROR', error.message); // eslint-disable-line
    }

    callback(error);

    setTimeout(function () {
      open('http://' + host + ':' + port);
    }, 1000);
  });

};
