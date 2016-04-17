/*global angular, _*/

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
      template,
      scope: {
        highlightedFields: '='
      }
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

      scope.$watchCollection('highlightedFields', function(fields, oldFields) {
        if (angular.equals(fields, oldFields)) {
          return;
        }

        _.difference(oldFields, fields).forEach((field) => removeHighlight(field));

        fields.forEach((field) => highlight(field));

      });

      function highlight(field) {
        $log.log('highlight', field);
        fieldToElementIds(field).forEach((elementId) => angular.element(document.querySelector(`#${elementId}`)).addClass('highlight'));
      }

      function removeHighlight(field) {
        $log.log('removeHighlight', field);
        fieldToElementIds(field).forEach((elementId) => angular.element(document.querySelector(`#${elementId}`)).removeClass('highlight'));
      }

      function fieldToElementIds(field) {
        let ids = [];
        let matches = /(S|D|T)(\d{1,2})/g.exec(field);
        let str = 'db_';

        if (field === 'SB') {
          ids.push(`${str}25_single`);
        } else if (field === 'DB') {
          ids.push(`${str}25_double`);
        } else {
          str += matches[2];
          if (matches[1] === 'S') {
            str += '_single_';
            ids.push(`${str}inner`, `${str}outer`);
          } else if (matches[1] === 'D') {
            ids.push(`${str}_double`);
          } else {
            ids.push(`${str}_triple`);
          }
        }

        $log.log('fieldToElementIds', ids);

        return ids;
      }

    }
  }]);
