import {dartsMatchServiceName} from '../../../modules/match/match';

let ctrlName = 'tableCtrl';
let dependencies = [];
let ngModName = `ds.pages.match.table.${ctrlName}`;

export default ngModName;
export {ctrlName};

class MatchTableCtrl {
  constructor($log, $state, match) {
    this.$log = $log;
    this.$state = $state;
    this.match = match;

    this.game = this.match.game;

    this.$log.log(`${ctrlName} called.`);

    if(!this.game) {
      this.$state.go('games');
    }

    this.tableData = this.getData();
  }

  get roundNumber() {
    return this.game.currentRoundNumber;
  }

  getPointsByPlayer(player) {
    return this.game.getPointsByPlayer(player);
  }

  getData() {
    let data = [];

    for(let [player, rounds] of this.game._playerRounds.entries()) {

      let isRoundInProgress = false;
      let totalPoints = this.getPointsByPlayer(player);
      let throws = this.game.throwsByPlayer(player).reduce((prev, curr) => {
        prev.push(curr.number * curr.multiplier);
        return prev;
      }, []);

      rounds = Array.from(rounds.get('rounds').values());

      data.push({
        playerName: player._user.name,
        totalPoints,
        avg: throws.length >= this.game.throwsPerRound ? Math.ceil(rounds.filter((item) => {
            let isDone = item.isDone;
            if (!isDone) {
              isRoundInProgress = true;
            }
            return isDone;
          }).reduce((prev, curr) => prev + this.game.getPointsByRound(curr), 0) / (isRoundInProgress ? this.roundNumber -1 : this.roundNumber)) : 0,
        max: this.calculateMax(rounds)
      });

    }

    return data;
  }

  calculateMax(rounds) {
    let _rounds = rounds.slice();
    let round = _rounds.sort((a, b) => this.game.getPointsByRound(a) - this.game.getPointsByRound(b)).pop();

    return round ? this.game.getPointsByRound(round) : 0;
  }

}

MatchTableCtrl.$inject = ['$log', '$state', dartsMatchServiceName];

angular
  .module(ngModName, dependencies)
  .controller(ctrlName, MatchTableCtrl);
