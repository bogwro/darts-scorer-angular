import homeModName from './home';
import matchModName from './match';
import gameModName from './games';
import playersModName from './players';
import optionsModName from './options';

let ngModName = 'ds.pages.all';

export default ngModName;

angular

  .module(ngModName, [
    homeModName,
    matchModName,
    gameModName,
    playersModName,
    optionsModName
  ])

  .config(['$urlRouterProvider', function($urlRouterProvider) {
    $urlRouterProvider.when('', '/games');
  }]);
