import ctrlModName, {ctrlName as controller} from './controller';

let ngModName = 'ds.pages.options.router';
let template = require('./template.jade');
let url = '/options';

export default ngModName;

angular

  .module(ngModName, [
    'ui.router',
    ctrlModName
  ])

  .config(['$stateProvider', ($stateProvider) => {
    $stateProvider
      .state('options', {
        controller,
        template,
        url
      });
  }]);
