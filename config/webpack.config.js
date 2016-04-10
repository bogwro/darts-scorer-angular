/*global VERSION*/

'use strict';

var path = require('path');
var webpack = require('webpack');

var config = {
  context: path.resolve(__dirname, '..'),
  devtool: 'eval',
  devServer: {
    contentBase: path.join(__dirname, '..', 'build')
  },
  entry: {
    bundle: ['./src/bundle.js']
  },
  externals: {
    $: 'jQuery',
    angular: 'angular',
    _: 'underscore'
  },
  output: {
    path: path.resolve(__dirname, '..', 'build'),
    filename: "[name].js"
  },
  extensions: ['', '.js', '.scss', '.css', '.jade'],
  eslint: {
    configFile: './.eslintrc.js'
  },
  sassLoader: {
    sourceMap: true,
    outputStyle: 'expanded',
    includePaths: [
      path.resolve(__dirname, '..', 'src/styles'),
      path.resolve(__dirname, '..', 'build', 'lib'),
      path.resolve(__dirname, '..', 'node_modules'),
      path.resolve(__dirname, '..', 'node_modules/bourbon/app/assets/stylesheets')
    ]
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'eslint',
        exclude: /(node_modules|bower_components)/
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          cacheDirectory: true,
          presets: ['es2015', 'stage-0'],
          plugins: ['transform-strict-mode', 'transform-runtime']
        }
      },
      {
        test: /\.jade$/,
        loader: "jade"
      }, {
        test: /\.css$/,
        loaders: [
          'style',
          'css'
        ]
      }, {
        test: /\.(woff|ttf|eot)$/,
        loader: 'url-loader?prefix=font/'
      }, {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'url?limit=100000',
          //'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      }, {
        test: /\.(scss|sass)$/,
        loaders: ['style', 'css', 'sass']
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      IS_DEV: process.env.NODE_ENV !== 'production',
      IS_PROD: process.env.NODE_ENV === 'production',
      VERSION: JSON.stringify(VERSION)
    })
  ]
};

module.exports = config;
