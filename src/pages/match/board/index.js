import './styles.scss';

import routerModName from './router';
import dartsBoardModName from '../../../modules/darts-board';

let ngModName = 'ds.pages.board.all';

export default ngModName;

angular
  .module(ngModName, [
    routerModName,
    dartsBoardModName
  ]);
