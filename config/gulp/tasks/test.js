/*global path*/

'use strict';

require('../../globals');

var Server = require('karma').Server;

exports.task = function(callback) {
  new Server({
    singleRun: true,
    configFile: path.join(__dirname, '..', '..', 'karma.conf.js')
  }, callback).start();
};
