class Gameboard {
  #ships = [];

  #board = [];

  constructor() {
    this.#createdboard();
  }

  addShip(ship, startPosition, direction) {
    if (!this.#isPositionAvailable(startPosition, direction, ship.length())) {
      return false;
    }

    const X = startPosition.x;
    const Y = startPosition.y;

    this.#ships.push(ship);
    if (direction === 'x') {
      for (let x = X; x < X + ship.length(); x++) {
        this.#board[x][Y] = { shoot: null, ship };
      }
    } else if (direction === 'y') {
      for (let y = Y; y < Y + ship.length(); y++) {
        this.#board[X][y] = { shoot: null, ship };
      }
    }
    return true;
  }

  allShipsSunk() {
    let isAllShipSunk = true;
    this.#ships.forEach((ship) => {
      if (!ship.isSunk()) isAllShipSunk = false;
    });
    return isAllShipSunk;
  }

  getBoard = () => this.#board;

  get ships() {
    return this.#ships;
  }

  receiveAttack(x, y) {
    const square = this.#board[x][y];
    if (square.shoot) return -1;

    if (square.ship) {
      square.shoot = 'x';
      square.ship.hit();
      return square.shoot;
    }

    square.shoot = 'o';
    return square.shoot;
  }

  #isPositionAvailable(startPosition, direction, length) {
    const X = startPosition.x;
    const Y = startPosition.y;

    if (direction === 'x') {
      if (X + length >= 10) return false;

      for (let x = X; x < X + length; x++) {
        if (this.#board[x][Y].ship) return false;
      }
    } else if (direction === 'y') {
      if (Y + length >= 10) return false;

      for (let y = Y; y < Y + length; y++) {
        if (this.#board[X][y].ship) return false;
      }
    }
    return true;
  }

  #createdboard() {
    const rows = 10;
    const columns = 10;
    for (let i = 0; i < rows; i++) {
      const row = [];
      for (let j = 0; j < columns; j++) {
        row.push({ shoot: null, ship: null });
      }
      this.#board.push(row);
    }
  }

  clearBoard() {
    this.#ships = [];
    this.#board = [];
    this.#createdboard();
  }
}

module.exports = Gameboard;
