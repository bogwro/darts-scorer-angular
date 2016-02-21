/*global argv*/

'use strict';

var path = require('path');

global.root = path.join(__dirname, '..');

global.argv = require('minimist')(process.argv.slice(2));
global.gulp = require('gulp');
global.WebpackDevServer = require('webpack-dev-server');
global.webpack = require('webpack');
global.fs = require('fs');
global.path = path;
global.del = require('del');
global.runSequence = require('run-sequence');

global.PORT = argv.port || argv.p || process.env['npm_package_config_port'] || 8080;
global.HOST = argv.host || argv.h || process.env['npm_package_config_host'] || 'localhost';
global.VERSION = argv.version || require('../package.json').version;

global.config = require('./config');
