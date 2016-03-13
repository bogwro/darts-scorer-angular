import {dartsMatchServiceName} from '../../../modules/match/match';

let ctrlName = 'settingsCtrl';
let dependencies = [];
let ngModName = `ds.pages.match.settings.${ctrlName}`;

export default ngModName;
export {ctrlName};

class MatchSettingsCtrl {

  constructor($log, $state, match) {
    this.$log = $log;
    this.$state = $state;
    this.match = match;

    this.users = [];

    this.newUser = {
      name: ''
    };

    this.game = $state.params.game;

    if(!this.game) {
      //$state.go('games');
      this.game = {
        name: '501'
      };
    }

    $log.log(`${ctrlName} called.`, this.game);

  }

  addUser(name) {
    this.$log.log('addUser', name);
    return this.users.push({name, toString: function() { return this.name; }});
  }

  removeUser(user) {
    this.$log.log('removeUser', user);
    this.users.splice(this.users.indexOf(user), 1);
  }

  reset(form) {
    if (form) {
      form.$setPristine();
      form.$setUntouched();
    }
    this.newUser.name = '';
  }

  start() {
    this.$log.log('start');
    for(let user of this.users) {
      this.match.createPlayer(user);
    }
    this.match.start(this.game.name);
    this.$log.log(this.match);
    this.$state.go('match.board');
  }

}

MatchSettingsCtrl.$inject = ['$log', '$state', dartsMatchServiceName];

angular
  .module(ngModName, dependencies)
  .controller(ctrlName, MatchSettingsCtrl);
