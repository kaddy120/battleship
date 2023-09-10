class Player {
  constructor() {}
}

class BotPlayer extends Player {
  constructor(getBoard) {
    super();
    this.board = getBoard;
    this.lastShoot = {
      x: null,
      y: null,
      isHit: false,
    };
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
