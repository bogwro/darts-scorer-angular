let ctrlName = 'gamesCtrl';
let dependencies = [];
let ngModName = `ds.pages.games.${ctrlName}`;

export default ngModName;
export {ctrlName};

class GamesCtrl {
  constructor($log, $state) {
    this.$log = $log;
    this.$state = $state;

    $log.log(`${ctrlName} called.`);

    this.games = [
      {
        name: '501',
        id: '501'
      },
      {
        name: 'Game A',
        id: 'A'
      },
      {
        name: 'Game B',
        id: 'B'
      },
      {
        name: 'Game C',
        id: 'C'
      }
    ];

  }

  playGame(game) {
    this.$log.log('playGame', game);
    this.$state.go('match.settings', {
      game
    });
  }
}

GamesCtrl.$inject = ['$log', '$state'];

angular
  .module(ngModName, dependencies)
  .controller(ctrlName, GamesCtrl);
