/*global VERSION*/

let ngModName = 'ds.mod.darts-version.directive';

export default ngModName;

angular

  .module(ngModName, [])

  .directive('dartsVersion', ['$log', function($log) {

    return {
      replace: true,
      restrict: 'E',
      template: `<span>v${VERSION}</span>`,
      link
    };

    function link() {
      $log.log(`Darts version: ${VERSION}`);
    }

  }]);
