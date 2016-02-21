import DartsCore from 'darts-scorer-core';

const ngModName = 'ds.services.match';
const dartsMatchServiceName = 'dartsMatch';
const dependencies = [];

export default ngModName;

export {dartsMatchServiceName};

export class Match {

  constructor() {
    this._players = new Map();
    this._game = null;
  }

  start(gameId) {
    this._game = new DartsCore.games[`Darts${gameId}Game`](Array.from(this._players.values()));
  }

  get DartsCore() {
    return DartsCore;
  }

  createPlayer(user) {
    this._players.set(user, new DartsCore.Player(user));
  }

  get game() {
    return this._game;
  }


}

Match.$injector = [];

angular
  .module(ngModName, dependencies)
  .service(dartsMatchServiceName, Match);
