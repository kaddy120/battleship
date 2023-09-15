const { Ship, ShipLength } = require('./ship');

class BotPlayer {
  constructor(getBoard, myWater) {
    /* The problem is that a board has record of the ship position */
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

    Object.entries(ShipLength).forEach((value) => {
      const ship = new Ship(value[0], value[1]);
      const direction = directions[Math.floor(Math.random() * 2)];
      let x;
      let y;
      do {
        x = Math.floor(Math.random() * 10);
        y = Math.floor(Math.random() * 10);
      } while (!this.myWater.addShip(ship, { x, y }, direction));
    });
  }

  shoot(handleShoot) {
    let isShotValid = false;
    do {
      const x = Math.floor(Math.random() * 10);
      const y = Math.floor(Math.random() * 10);
      const board = this.board();
      if (!board[x][y].shoot) {
        isShotValid = true;
        this.lastShoot = {
          x,
          y,
          isHit: handleShoot(x, y) === 'x',
        };
      }
    } while (!isShotValid);
  }
}

exports.BotPlayer = BotPlayer;
