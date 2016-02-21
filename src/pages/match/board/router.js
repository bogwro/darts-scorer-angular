import ctrlModName, {ctrlName as controller} from './controller';

let ngModName = 'ds.pages.match.board.router';
let template = require('./template.jade');
let url = '/board';

export default ngModName;

angular

  .module(ngModName, [
    'ui.router',
    ctrlModName
  ])

  .config(['$stateProvider', ($stateProvider) => {
    $stateProvider
      .state('match.board', {
        controller,
        controllerAs: 'boardVM',
        template,
        url
      });
  }]);
