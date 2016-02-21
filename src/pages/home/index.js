import './styles.scss';

import routerModName from './router';
import dartsVersionModName from '../../modules/darts-version'

let dependencies = [
  routerModName,
  dartsVersionModName
];
let ngModName = 'ds.pages.home.all';

export default ngModName;

angular
  .module(ngModName, dependencies);
