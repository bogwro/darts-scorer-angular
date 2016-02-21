import ctrlModName, {ctrlName as controller} from './controller';

let ngModName = 'ds.pages.match.settings.router';
let template = require('./template.jade');
let url = '/settings';

export default ngModName;

angular

  .module(ngModName, [
    'ui.router',
    ctrlModName
  ])

  .config(['$stateProvider', ($stateProvider) => {
    $stateProvider
      .state('match.settings', {
        controller,
        controllerAs: 'matchVM',
        template,
        url,
        params: {
          game: null
        }
      });
  }]);
