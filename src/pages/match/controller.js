let ctrlName = 'matchCtrl';
let dependencies = [];
let ngModName = `ds.pages.match.${ctrlName}`;

export default ngModName;
export {ctrlName};

class MatchCtrl {
  constructor($log) {
    this.$log = $log;
    $log.log(`${ctrlName} called.`);
  }

  playGame(game) {
    this.$log.log(`playGame${game}`);
  }
}

MatchCtrl.$inject = ['$log'];

angular
  .module(ngModName, dependencies)
  .controller(ctrlName, MatchCtrl);
