import {dartsMatchServiceName} from '../../../modules/match/match';

let ctrlName = 'tableCtrl';
let dependencies = [];
let ngModName = `ds.pages.match.table.${ctrlName}`;

export default ngModName;
export {ctrlName};

class MatchTableCtrl {
  constructor($log, match) {
    this.$log = $log;
    this.match = match;

    this.$log.log(`${ctrlName} called.`);
  }
}

MatchTableCtrl.$inject = ['$log', dartsMatchServiceName];

angular
  .module(ngModName, dependencies)
  .controller(ctrlName, MatchTableCtrl);
