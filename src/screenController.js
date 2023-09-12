const GameController = require('./gameController');
const { ShipLength } = require('./ship');

const battleship = require('./assets/battleship.svg');
const destroyer = require('./assets/destroyer.svg');
const submarine = require('./assets/submarine.svg');
const patrol = require('./assets/patrol.svg');
const carrier = require('./assets/carrier.svg');

class ScreenController {
  constructor() {
    this.addingShip = 0;
    this.shipNames = Object.keys(ShipLength);

    this.content = document.querySelector('#content');

    this.direction = 'horizontal';
    this.rotateAxis = document.querySelector('#rotate-axis');
    this.rotateAxis.onclick = () => {
      this.direction =
        this.direction === 'horizontal' ? 'vertical' : 'horizontal';
    };

    this.game = new GameController();

    const waterContainer = document.createElement('div');
    waterContainer.classList.add('water-container');
    waterContainer.appendChild(this.createBoard('player-1'));
    waterContainer.appendChild(this.createBoard('player-2'));
    this.content.appendChild(waterContainer);

    this.player1Squares = document.querySelectorAll('.player-1 .square');
  }

  run() {
    this.player1Squares.forEach((square) => {
      square.addEventListener('mouseover', () => {
        const position = this.parseSquare(square);
        const name = this.shipNames[this.addingShip];
        this.highLightSquares(
          position,
          this.direction,
          ShipLength[name],
          (x, y, className = 'highlight') => {
            document
              .querySelector(`.player-1 [data-index="${y * 10 + x}"]`)
              .classList.add(className);
          }
        );
      });

      square.addEventListener('mouseleave', () => {
        const position = this.parseSquare(square);
        const name = this.shipNames[this.addingShip];
        this.highLightSquares(
          position,
          this.direction,
          ShipLength[name],
          (x, y, className = 'highlight') => {
            document
              .querySelector(`.player-1 [data-index="${y * 10 + x}"]`)
              .classList.remove(className);
          }
        );
      });

      square.addEventListener('click', (event) => {
        this.addingShip += 1;
        /* square.style.backgroundImage = `url('${submarine}')`; */
        /* square.style.backgroundSize = 'cover'; */
      });
    });
    //First of all it will allow me to add ships.
  }

  // refactor this function to enable me to add, and remove highight
  // when you enter and leave square
  highLightSquares(position, direction, length, handle) {
    const X = position.x;
    const Y = position.y;

    if (direction === 'horizontal') {
      if (X + length > 10) {
        handle(X, Y, 'highlight-error');
        return;
      }
      for (let x = X; x < X + length && x < 10; x++) {
        handle(x, Y);
      }
    } else if (direction === 'vertical') {
      if (Y + length > 10) {
        handle(X, Y, 'highlight-error');
        return;
      }
      for (let y = Y; y < Y + length && y < 10; y++) {
        handle(X, y);
      }
    }
  }

  parseSquare(square) {
    const x = parseInt(square.dataset.x);
    const y = parseInt(square.dataset.y);
    return { x, y };
  }

  // someEvent listener for the square.
  // when you hover, hightlight number of squares
  // When you click, check if we can add the ship,
  // when you can add it, then add the ship.
  // change the number of scquare that it shows,
  // when you rotate, change number of square hightlighted.

  greeting() {
    alert('hello world from a class');
  }

  addShips() {}

  createBoard(player) {
    const playerBoard = document.createElement('div');
    playerBoard.classList.add(player);

    for (let y = 0; y < 10; y++) {
      for (let x = 0; x < 10; x++) {
        const square = document.createElement('div');
        square.dataset.x = x;
        square.dataset.y = y;
        square.dataset.index = y * 10 + x;
        square.classList.add('square');
        playerBoard.appendChild(square);
      }
    }
    return playerBoard;
  }
}

module.exports = ScreenController;
