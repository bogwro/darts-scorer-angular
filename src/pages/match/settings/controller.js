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

    this.newUser = {
      name: ''
    };

    this.game = this.match.game || $state.params.game;

    if(!this.game) {
      $state.go('games');
      return this;
    }

    this.gameOptions = {
      startingPoints: (typeof this.game.startingPoints != 'undefined') ? this.game.startingPoints : 501,
      doubleIn: (typeof this.game.doubleIn != 'undefined') ? this.game.doubleIn : false,
      doubleOut: (typeof this.game.doubleOut != 'undefined') ? this.game.doubleOut : true
    };

    this.users = (this.game.players && Array.from(this.game.players).map((player) => player._user)) || [];

  }

  addUser(name) {
    return this.users.push({name});
  }

  removeUser(user) {
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
    this.match.players.clear();
    for(let user of this.users) {
      this.match.createPlayer(user);
    }
    this.match.start(this.game.name || 501, this.gameOptions);
    this.$state.go('match.board');
  }

}

MatchSettingsCtrl.$inject = ['$log', '$state', dartsMatchServiceName];

angular
  .module(ngModName, dependencies)
  .controller(ctrlName, MatchSettingsCtrl);
