const { BotPlayer } = require('./player');
const Gameboard = require('./gameboard');

// players turns
// Think about calling game controller in the terminal, and
// then start calling the functions by name to play the game.
// randomly place bood ships in position;
//
class GameController {
  player1Water = new Gameboard();

  player2Water = new Gameboard();

  botPlayer = new BotPlayer(() => this.player1Waters.getBoard());

  play(x, y) {
    /* get move from human */
    if (this.player2Water.receiveAttack(x, y) !== -1) {
      this.botPlayer.shoot(this.#handleShoot);
    }
    /* then make a move for a bot */
  }

  #handleShoot = (x, y) => this.player1Waters.receiveAttack(x, y);

  isGameOver = () => this.player2Water.allShipsSunk() || this.player1Water.allShipsSunk();

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
