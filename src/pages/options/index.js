import './styles.scss';

import routerModName from './router';

let ngModName = 'ds.pages.options.all';

export default ngModName;

angular
  .module(ngModName, [
    routerModName
  ]);
