const { Ship, ShipLength } = require('./ship');

class BotPlayer {
  #shootHistory = [];

  #lastShoot = {};

  constructor(myWater) {
    /* The problem is that a board has record of the ship position */
    /* this.board = getBoard; */
    this.myWater = myWater;
    this.#lastShoot = {
      x: null,
      y: null,
      isHit: false,
    };
    this.#createShootHistoryBoard();
  }

  clearHistory() {
    this.#shootHistory = [];
    this.#createShootHistoryBoard();
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

  #createShootHistoryBoard() {
    const rows = 10;
    const columns = 10;
    for (let i = 0; i < rows; i++) {
      const row = [];
      for (let j = 0; j < columns; j++) {
        row.push(null);
      }
      this.#shootHistory.push(row);
    }
  }

  get lastShoot() {
    return this.#lastShoot;
  }

  shoot(handleShoot) {
    let isShotValid = false;
    let x;
    let y;
    const board = this.#shootHistory;
    do {
      x = Math.floor(Math.random() * 10);
      y = Math.floor(Math.random() * 10);
      if (!board[x][y]) {
        isShotValid = true;
        this.#lastShoot = {
          x,
          y,
          isHit: handleShoot(x, y) === 'x',
        };
        board[x][y] = true;
      }
    } while (!isShotValid);
    this.#shootHistory[x][y] = this.#lastShoot.isHit ? 'x' : 'y';
  }
}

exports.BotPlayer = BotPlayer;
