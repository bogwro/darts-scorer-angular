import ctrlModName, {ctrlName as controller} from './controller';

let ngModName = 'ds.pages.match.table.router';
let template = require('./template.jade');
let url = '/table';

export default ngModName;

angular

  .module(ngModName, [
    'ui.router',
    ctrlModName
  ])

  .config(['$stateProvider', ($stateProvider) => {
    $stateProvider
      .state('match.table', {
        controller,
        template,
        url
      });
  }]);
