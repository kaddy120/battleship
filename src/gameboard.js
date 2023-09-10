class Gameboard {
  constructor() {
    /* this._gameboard  */
    this._createdboard();
    this._ships = [];
  }

  addShip(ship, startPosition, direction) {
    if (!this._isPositionAvailable(startPosition, direction, ship.length())) {
      return false;
    }

    const X = startPosition.x;
    const Y = startPosition.y;
    this._ships.push(ship);

    if (direction === 'horizontal') {
      for (let x = X; x < X + ship.length(); x++) {
        this._board[x][Y] = { shoot: null, ship };
      }
    } else if ((direction === 'vertical')) {
      for (let y = Y; y < Y + ship.length(); y++) {
        this._board[X][y] = { shoot: null, ship };
      }
    }
    return true;
  }

  allShipsSunk() {
    let isAllShipSunk = true;
    this._ships.forEach(ship => {
      if(!ship.isSunk()) isAllShipSunk = false;
    })
    return isAllShipSunk;
  }

  _isPositionAvailable(startPosition, direction, length) {
    const X = startPosition.x;
    const Y = startPosition.y;

    if (direction === 'horizontal') {
      if (X + length >= 10) return false;

      for (let x = X; x < X + length; x++) {
        if (this._board[x][Y].ship) return false;
      }
    } else if ((direction === 'vertical')) {
      if (Y + length >= 10) return false;

      for (let y = Y; y < Y + length; y++) {
        if (this._board[X][y].ship) return false;
      }
    }
    return true;
  }

  getBoard = () => this._board;

  receiveAttack(x, y) {
    let square = this._board[x][y];
    if (square.shoot) return -1;

    if (square.ship) {
      square.shoot = 'x';
      square.ship.hit();
      return 'x';
    }
    square.shoot = 'o';
    return square.shoot;
  }

  _createdboard() {
    const rows = 10;
    const columns = 10;
    this._board = [];
    for (let i = 0; i < rows; i++) {
      const row = [];
      for (let j = 0; j < columns; j++) {
        row.push({ shoot: null, ship: null });
      }
      this._board.push(row);
    }
  }
}

module.exports = Gameboard;
