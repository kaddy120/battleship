const { Ship, ShipLength } = require('./ship');

class BotPlayer {
  #shotHistory = [];

  #lastShot = {};

  constructor(myWater) {
    /* The problem is that a board has record of the ship position */
    /* this.board = getBoard; */
    this.myWater = myWater;
    this.#lastShot = {
      x: null,
      y: null,
      isHit: false,
    };
    this.#createShotHistoryBoard();
  }

  clearHistory() {
    this.#shotHistory = [];
    this.#createShotHistoryBoard();
  }

  placeShips() {
    const directions = ['x', 'y'];

    Object.entries(ShipLength).forEach((value) => {
      const ship = new Ship(value[1], value[0]);
      const direction = directions[Math.floor(Math.random() * 2)];
      let x;
      let y;
      do {
        x = Math.floor(Math.random() * 10);
        y = Math.floor(Math.random() * 10);
      } while (!this.myWater.addShip(ship, { x, y }, direction));
    });
  }

  #createShotHistoryBoard() {
    const rows = 10;
    const columns = 10;
    for (let i = 0; i < rows; i++) {
      const row = [];
      for (let j = 0; j < columns; j++) {
        row.push(null);
      }
      this.#shotHistory.push(row);
    }
  }

  get lastShot() {
    return this.#lastShot;
  }

  shot(handleShot) {
    let isShotValid = false;
    let x;
    let y;
    const board = this.#shotHistory;
    do {
      x = Math.floor(Math.random() * 10);
      y = Math.floor(Math.random() * 10);
      if (!board[x][y]) {
        isShotValid = true;
        this.#lastShot = {
          x,
          y,
          isHit: handleShot(x, y) === 'x',
        };
        board[x][y] = true;
      }
    } while (!isShotValid);
    this.#shotHistory[x][y] = this.#lastShot.isHit ? 'x' : 'y';
  }
}

exports.BotPlayer = BotPlayer;
