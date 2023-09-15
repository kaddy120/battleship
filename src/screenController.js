const GameController = require('./gameController');
const { ShipLength } = require('./ship');

const Carrier = require('./assets/carrier.svg');
const Battleship = require('./assets/battleship.svg');
const Destroyer = require('./assets/destroyer.svg');
const Submarine = require('./assets/submarine.svg');
const Patrol = require('./assets/patrol.svg');

const shipIconPath = {
  Battleship,
  Destroyer,
  Submarine,
  Patrol,
  Carrier,
};

class ScreenController {
  constructor() {
    this.addingShip = 0;
    this.shipNames = Object.keys(ShipLength);

    this.content = document.querySelector('#content');

    this.direction = 'horizontal';
    this.rotateAxis = document.querySelector('#rotate-axis');
    this.rotateAxis.onclick = () => {
      this.direction = this.direction === 'horizontal' ? 'vertical' : 'horizontal';
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
          },
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
          },
        );
      });

      square.addEventListener('click', () => {
        const position = this.parseSquare(square);
        const name = this.shipNames[this.addingShip];
        const imgMetadata = {
          length: ShipLength[name],
          position,
          direction: this.direction,
          path: shipIconPath[name],
        };
        const player1Water = document.querySelector('.player-1');
        player1Water.appendChild(this.shipIcon(imgMetadata));
        this.addingShip += 1;
      });
    });
  }

  // refactor this function to enable me to add, and remove highight
  // when you enter and leave square
  static highLightSquares(position, direction, length, handle) {
    const X = position.x;
    const Y = position.y;

    if (direction === 'horizontal') {
      if (X + length > 10) {
        handle(X, Y, 'highlight-error');
        return;
      }
      // eslint-disable-next-line no-plusplus
      for (let x = X; x < X + length && x < 10; x++) {
        handle(x, Y);
      }
    } else if (direction === 'vertical') {
      if (Y + length > 10) {
        handle(X, Y, 'highlight-error');
        return;
      }
      // eslint-disable-next-line no-plusplus
      for (let y = Y; y < Y + length && y < 10; y++) {
        handle(X, y);
      }
    }
  }

  static parseSquare(square) {
    const x = parseInt(square.dataset.x, 10);
    const y = parseInt(square.dataset.y, 10);
    return { x, y };
  }

  // someEvent listener for the square.
  // when you hover, hightlight number of squares
  // When you click, check if we can add the ship,
  // when you can add it, then add the ship.
  // change the number of scquare that it shows,
  // when you rotate, change number of square hightlighted.

  static shipIcon(metadata) {
    const { x, y } = metadata.position;
    const imgContainer = document.createElement('div');
    const img = new Image();

    img.style.width = '100%';
    img.style.height = '100%';
    img.style.objectFit = 'cover';
    img.src = metadata.path;
    imgContainer.style.zIndex = 2;
    imgContainer.style.gridRow = `${y + 1} /span 1`;
    imgContainer.style.gridColumn = `${x + 1} /span ${metadata.length}`;
    if (metadata.direction === 'vertical') {
      /* TODO: Scale the image correctly when rotated */
      imgContainer.style.gridRow = `${y + 1} /span ${metadata.length}`;
      imgContainer.style.gridColumn = `${x + 1} /span 1`;
      img.style.transform = 'rotate(90deg)';
      /* img.style.height = '60px'; */
      /* img.style.width = '300px'; */
    }
    imgContainer.appendChild(img);
    return imgContainer;
  }

  static createBoard(player) {
    const playerBoard = document.createElement('div');
    playerBoard.classList.add(player);

    for (let y = 0; y < 10; y++) {
      for (let x = 0; x < 10; x++) {
        const square = document.createElement('div');
        square.dataset.x = x;
        square.dataset.y = y;
        square.dataset.index = y * 10 + x;
        square.classList.add('square');
        square.style.gridRow = `${y + 1}/span 1`;
        square.style.gridColumn = `${x + 1}/span 1`;
        playerBoard.appendChild(square);
      }
    }
    return playerBoard;
  }
}

module.exports = ScreenController;
