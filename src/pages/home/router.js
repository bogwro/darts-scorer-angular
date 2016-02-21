import ctrlModName, {ctrlName as controller} from './controller';

let ngModName = 'ds.pages.home.router';
let template = require('./template.jade');
let url = '/';

export default ngModName;

angular

  .module(ngModName, [
    'ui.router',
    ctrlModName
  ])

  .config(['$stateProvider', ($stateProvider) => {
    $stateProvider
      .state('home', {
        controller,
        template,
        url
      });
  }]);
