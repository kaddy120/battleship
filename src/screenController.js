const GameController = require('./gameController');
const { ShipLength } = require('./ship');

class ScreenController {
  constructor() {
    this.direction = 'horizontal';
    this.addingShip = 0;
    this.shipNames = Object.keys(ShipLength);

    this.content = document.querySelector('#content');
    this.rotateAxis = document.querySelector('#rotate-axis');
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
      const position = this.parseSquare(square);
      const name = this.shipNames[this.addingShip];

      square.addEventListener('mouseover', (event) => {
        this.highLightSquares(
          position,
          this.direction,
          ShipLength[name],
          (x, y) => {
            document
              .querySelector(`#row-${y} #col-${x}`)
              .classList.add('highlight');
          }
        );
      });

      square.addEventListener('mouseleave', () => {
        this.highLightSquares(
          position,
          this.direction,
          ShipLength[name],
          (x, y) => {
            document
              .querySelector(`#row-${y} #col-${x}`)
              .classList.remove('highlight');
          }
        );
      });

      square.addEventListener('click', (event)=>{

      })
    });
    //First of all it will allow me to add ships.
  }

  // refactor this function to enable me to add, and remove highight
  // when you enter and leave square
  highLightSquares(position, direction, length, handle) {
    const X = position.x;
    const Y = position.y;

    if (direction === 'horizontal') {
      for (let x = X; x < X + length && x < 10; x++) {
        handle(x, Y);
      }
    } else if (direction === 'vertical') {
      for (let y = Y; y < Y + length && y < 10; y++) {
        handle(X, y);
      }
    }
  }

  parseSquare(square) {
    let rowId = square.parentElement.getAttribute('id');
    let colId = square.getAttribute('id');
    const x = parseInt(colId[rowId.length - 1]);
    const y = parseInt(rowId[rowId.length - 1]);
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

  addShips() {
    this.rotateAxis.onclick = () => {
      this.direction =
        this.direction === 'horizontal' ? 'vertical' : 'horizontal';
    };
  }

  createBoard(player) {
    const playerBoard = document.createElement('div');
    playerBoard.classList.add(player);

    for (let i = 0; i < 10; i++) {
      const row = document.createElement('div');
      row.setAttribute('id', `row-${i}`);
      for (let j = 0; j < 10; j++) {
        const col = document.createElement('div');
        col.setAttribute('id', `col-${j}`);
        col.classList.add('square');
        row.appendChild(col);
      }
      playerBoard.appendChild(row);
    }
    return playerBoard;
  }
}

module.exports = ScreenController;
