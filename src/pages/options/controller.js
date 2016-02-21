let ctrlName = 'optionsCtrl';
let dependencies = [];
let ngModName = `ds.pages.options.${ctrlName}`;

export default ngModName;
export {ctrlName};

class OptionsCtrl {
  constructor($log) {
    $log.log(`${ctrlName} called.`);
  }
}

OptionsCtrl.$inject = ['$log'];

angular
  .module(ngModName, dependencies)
  .controller(ctrlName, OptionsCtrl);
