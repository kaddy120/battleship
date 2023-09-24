const { BotPlayer } = require('./player');
const Gameboard = require('./gameboard');

class GameController {
  player1Water = new Gameboard();

  player2Water = new Gameboard();

  botPlayer = new BotPlayer(this.player2Water);

  constructor() {
    this.botPlayer.placeShips();
  }

  addShip(ship, startPosition, dir) {
    return this.player1Water.addShip(ship, startPosition, dir);
  }

  play(position) {
    const { x, y } = position;
    /* get move from human */
    const marker = this.player2Water.receiveAttack(x, y);
    if (marker !== -1) {
      this.botPlayer.shot(this.#handleShot);
    }

    return { human: { isHit: marker === 'x' }, bot: this.botPlayer.lastShot };
    /* then make a move for a bot */
  }

  #handleShot = (x, y) => this.player1Water.receiveAttack(x, y);

  isGameOver() {
    return this.player2Water.allShipsSunk() || this.player1Water.allShipsSunk();
  }

  winner() {
    if (this.isGameOver()) {
      if (this.player1Water.allShipsSunk()) return 'player1';
      return 'player2';
    }
    return null;
  }

  /* Code smell: The easist way to restart the game might just
   * be making a new game object, the problem with that will be when
   * you want to keep scores. */
  restart() {
    this.player1Water.clear();
    this.player1Water.clear();
    /*  clear boards, clear bot state */
  }

  /* Code smell: might not need to send back the whole boad but a mapped version
   *  this is solely for tracking back the moves, right.
   * */
  get board1() {
    return this.player1Water;
  }

  get board2() {
    return this.player2Water;
  }
}

module.exports = GameController;
