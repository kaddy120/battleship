const { Ship, ShipLength } = require('./ship');

class Player {
  constructor() {}
}

class BotPlayer extends Player {
  constructor(getBoard, myWater) {
    super();
    /* The problem is that a board has record of the ship position*/
    this.board = getBoard;
    this.myWater = myWater;
    this.lastShoot = {
      x: null,
      y: null,
      isHit: false,
    };
  }

  placeShips() {
    const directions = ['horizontal', 'vertical'];
    for (const [key, value] of Object.entries(ShipLength)) {
      const ship = new Ship(value, key);
      const direction = directions[Math.floor(Math.random() * 2)];
      let x, y;
      do {
        x = Math.floor(Math.random() * 10);
        y = Math.floor(Math.random() * 10);
      } while (!this.myWater.addShip(ship, { x, y }, direction));
    }
  }

  shoot(handleShoot) {
    let isShotValid = false;
    do {
      let x = Math.floor(Math.random() * 10);
      let y = Math.floor(Math.random() * 10);
      let board = this.board();
      if (!board[x][y].shoot) {
        isShotValid = true;
        this.lastShoot = {
          x,
          y,
          isHit: handleShoot(x, y) === 'x' ? true : false,
        };
      }
    } while (!isShotValid);
  }
}

exports.BotPlayer = BotPlayer;
exports.Player = Player;
