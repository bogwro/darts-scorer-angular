import ctrlModName, {ctrlName as controller} from './controller';

let ngModName = 'ds.pages.players.router';
let template = require('./template.jade');
let url = '/players';

export default ngModName;

angular

  .module(ngModName, [
    'ui.router',
    ctrlModName
  ])

  .config(['$stateProvider', ($stateProvider) => {
    $stateProvider
      .state('players', {
        controller,
        template,
        url
      });
  }]);
