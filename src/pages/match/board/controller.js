import {dartsMatchServiceName} from '../../../modules/match/match';

let ctrlName = 'boardCtrl';
let dependencies = [];
let ngModName = `ds.pages.match.board.${ctrlName}`;

export default ngModName;
export {ctrlName};

class BoardCtrl {
  constructor($log, $state, match, $rootScope, $scope) {
    this.$log = $log;
    this.$state = $state;
    this.match = match;
    this.$rootScope = $rootScope;
    this.$scope = $scope;

    this.game = this.match.game;

    this.highlightedFields = [];

    window.game = this.game;

    if(!this.game) {
      this.$state.go('games');
    }

    this.onBoardClickHandle = null;

    this.$log.log(`${ctrlName} called.`);

    this.registerOnBoardClickListener();

  }

  registerOnBoardClickListener() {
    if(!this.onBoardClickHandle) {
      this.onBoardClickHandle = this.$rootScope.$on('darts.board.clicked', this.onBoardClick.bind(this));
    }
  }

  removeOnBoardClickListener() {
    if(this.onBoardClickHandle) {
      this.onBoardClickHandle();
    }
  }

  onBoardClick(evt, data) {
    let {number, multiplier} = data;

    this.$log.log('onBoardClick', data);

    evt.preventDefault();
    evt.stopPropagation();

    this.$scope.$apply(function() {
      this.game.throw(number, multiplier);
    }.bind(this));
  }

  get playerName() {
    return this.game.currentPlayer._user.name;
  }

  get roundNumber() {
    return this.game.currentRoundNumber;
  }

  nextPlayer() {
    if(this.game.currentRound.isDone) {
      this.game.nextPlayer();
    }
  }

  get throws() {
    return Array.from(this.game.currentRound.throws);
  }


  undo() {
    if(this.game.currentRound.size) {
      this.game.currentPlayer.winner = false;
      this.game.currentRound.pop();
    }
  }

  get throwsLeft() {
    return this.game.throwsPerRound - this.game.currentRound.size;
  }

  range() {
    return new Array(this.throwsLeft);
  }

  miss() {
    this.game.throw(0);
  }

  get checkoutHints() {
    let hints = this.game.getCheckoutHint(this.game.currentPlayerTotalPoints, this.throwsLeft);
    let retVal = [];

    if (hints.length) {
      retVal = hints[0];
      this.highlightField(retVal[0].toString());
    } else {
      this.clearFieldHighlighting();
    }

    return retVal;
  }

  highlightField(field) {
    if (this.highlightedFields.indexOf(field) < 0) {
      this.highlightedFields.push(field);
      this.$rootScope.$emit('darts.board.register.highlighting', this.highlightedFields);
    }
  }

  clearFieldHighlighting() {
    this.highlightedFields.length = 0;
  }


}

BoardCtrl.$inject = ['$log', '$state', dartsMatchServiceName, '$rootScope', '$scope'];

angular
  .module(ngModName, dependencies)
  .controller(ctrlName, BoardCtrl);
