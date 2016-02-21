import ctrlModName, {ctrlName as controller} from './controller';

import boardModName from './board';
import tableModName from './table';
import settingsModName from './settings';

let ngModName = 'ds.pages.match.all';
let url = '/match';

export default ngModName;

angular

  .module(ngModName, [
    ctrlModName,
    boardModName,
    tableModName,
    settingsModName
  ])

  .config(['$stateProvider', ($stateProvider) => {
    $stateProvider
      .state('match', {
        abstract: true,
        controller,
        url,
        template: '<ui-view/>'
      });
  }]);
