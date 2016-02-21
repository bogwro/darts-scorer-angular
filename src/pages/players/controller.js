let ctrlName = 'playersCtrl';
let dependencies = [];
let ngModName = `ds.pages.players.${ctrlName}`;

export default ngModName;
export {ctrlName};

class GameCtrl {
  constructor($log) {
    $log.log(`${ctrlName} called.`);
  }
}

GameCtrl.$inject = ['$log'];

angular
  .module(ngModName, dependencies)
  .controller(ctrlName, GameCtrl);
