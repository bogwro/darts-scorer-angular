/*global angular*/

import './styles.scss';

import routerModName from './router';

let ngModName = 'ds.pages.match.table.all';
let dependencies = [
  routerModName
];

export default ngModName;

angular.module(ngModName, dependencies);
