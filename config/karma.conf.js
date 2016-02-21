'use strict';

require('./globals');

var fullWebpackConfig = require('./webpack.config');

var webpackConfig = {
  cache: true,
  devtool: 'eval',
  externals: fullWebpackConfig.externals,
  module: fullWebpackConfig.module,
  plugins: fullWebpackConfig.plugins,
  resolve: fullWebpackConfig.resolve,
  eslint: fullWebpackConfig.eslint
};

webpackConfig.eslint.env = {
  mocha: true
};

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: root,


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'chai', 'sinon'],


    // list of files / patterns to load in the browser
    files: [
      'src/unit_test_index.js'
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'src/unit_test_index.js': ['webpack']
    },

    plugins: [
      require('karma-chai'),
      require('karma-chrome-launcher'),
      require('karma-mocha'),
      require('karma-sinon'),
      require('karma-webpack')
    ],

    webpack: webpackConfig,

    webpackMiddleware: {
      noInfo: true
    },

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultanous
    concurrency: Infinity
  })
};
