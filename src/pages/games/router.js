import ctrlModName, {ctrlName as controller} from './controller';

let ngModName = 'ds.pages.games.router';
let template = require('./template.jade');
let url = '/games';

export default ngModName;

angular

  .module(ngModName, [
    'ui.router',
    ctrlModName
  ])

  .config(['$stateProvider', ($stateProvider) => {
    $stateProvider
      .state('games', {
        controller,
        controllerAs: 'gamesCtrl',
        template,
        url
      });
  }]);
