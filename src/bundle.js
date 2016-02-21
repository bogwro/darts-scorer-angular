/*global IS_DEV*/

import './vendor/ie10-width';

import './styles/styles.scss';

import pagesModName from './pages';

let ngModName = 'darts-scorer';

angular

  .module(ngModName, [
    'ngResource',
    'ngRoute',
    'ngAnimate',
    'ngTouch',
    'ngCookies',
    'ngSanitize',
    pagesModName
  ])

  .config(['$logProvider', '$provide', function($logProvider, $provide){

    $logProvider.debugEnabled(IS_DEV);

    $provide.decorator('$log', ['$delegate', function($delegate) {
      //Original methods
      let origInfo = $delegate.info;
      let origLog = $delegate.log;

      //Override the default behavior
      $delegate.info = function () {
        if($logProvider.debugEnabled()) {
          origInfo.apply(null, arguments);
        }
      };

      //Override the default behavior
      $delegate.log = function () {
        if($logProvider.debugEnabled()) {
          origLog.apply(null, arguments);
        }
      };

      return $delegate;

    }]);

  }]);
