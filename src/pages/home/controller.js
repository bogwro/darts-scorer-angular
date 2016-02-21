let ctrlName = 'homeCtrl';
let dependencies = [];
let ngModName = `ds.pages.home.${ctrlName}`;

export default ngModName;
export {ctrlName};

class HomeCtrl {
  constructor($log) {
    $log.log(`${ctrlName} called.`);
  }
}

HomeCtrl.$inject = ['$log'];

angular
  .module(ngModName, dependencies)
  .controller(ctrlName, HomeCtrl);
