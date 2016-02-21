/*global angular*/

import './styles.scss';

import routerModName from './router';
import matchModName from '../../../modules/match';

let ngModName = 'ds.pages.match.settings.all';
let dependencies = [
  routerModName,
  matchModName,
  'dndLists'
];

export default ngModName;

angular.module(ngModName, dependencies);
