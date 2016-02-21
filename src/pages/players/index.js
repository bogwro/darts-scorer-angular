import './styles.scss';

import routerModName from './router';

let ngModName = 'ds.pages.players.all';

export default ngModName;

angular
  .module(ngModName, [
    routerModName
  ]);
