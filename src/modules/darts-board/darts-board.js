let ngModName = 'ds.mod.board.directive';
let template = require('./template.jade');

export default ngModName;

angular

  .module(ngModName, [])

  .directive('dartsBoard', ['$log', '$rootScope', function($log, $rootScope) {

    return {
      link,
      replace: true,
      restrict: 'E',
      template
    };

    function link(scope, element) {

      function getNumber(id) {
        return parseInt(id.match(/(\d)+/g), 10) || 0;
      }

      function getMultiplier(id) {
        return /(single)|(double)|(triple)/g.exec(id).findIndex(function(el, idx) { return idx && el; }) || 0;
      }

      function getPoints(id) {
        return getNumber(id) * getMultiplier(id);
      }

      function getFieldSide(id) {
        var isValid = getMultiplier(id) === 1;
        var resultArray;

        if(!isValid) {
          return '';
        }

        resultArray = /(inner)|(outer)/g.exec(id);

        return (['', 'inner', 'outer'][resultArray && resultArray.findIndex(function(el, idx) { return idx && el; }) || 0]) || '';
      }

      function toString(id) {
        return getNumber(id) + ' ' + getFieldSide(id) + ' X ' + getMultiplier(id) + '  =  ' + getPoints(id);
      }

      element.on('click', function(evt) {
        if(evt.target.id) {
          $log.log('clicked on', evt.target.id);
          $log.log(toString(evt.target.id));

          $rootScope.$emit('darts.board.clicked', {
            originalEvent: evt,
            number: getNumber(evt.target.id),
            fieldSide: getFieldSide(evt.target.id),
            multiplier: getMultiplier(evt.target.id)
          });

        }
      });

    }
  }]);
