const GameController = require('./gameController');
const Square = require('./boardSquare');
const { shipIcon, shipIconPath } = require('./icon');
const { ShipLength, Ship } = require('./ship');

class ScreenController {
  direction = 'horizontal';

  addingShip = 0;

  shipNames = Object.keys(ShipLength);

  content = document.querySelector('#content');

  rotateAxis = document.querySelector('#rotate-axis');

  game = new GameController();

  waterContainer = document.createElement('div');

  constructor() {
    this.waterContainer.classList.add('water-container');
    this.waterContainer.appendChild(Square.createBoard('player-1'));
    this.waterContainer.appendChild(Square.createBoard('player-2'));
    this.content.appendChild(this.waterContainer);

    this.player1Squares = document.querySelectorAll('.player-1 .square');
    this.player2Squares = document.querySelectorAll('.player-2 .square');

    this.rotateAxis.onclick = () => {
      this.direction = this.direction === 'horizontal' ? 'vertical' : 'horizontal';
    };

    this.handleAddShip = this.handleAddShip.bind(this);
  }

  run() {
    this.player1Squares.forEach((square) => {
      square.addEventListener('mouseover', () => {
        const position = Square.parse(square);
        const name = this.shipNames[this.addingShip];
        Square.highLightSquares(
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
        const position = Square.parse(square);
        const name = this.shipNames[this.addingShip];
        Square.highLightSquares(
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

      square.addEventListener('click', this.handleAddShip);
    });
    this.play();
  }

  handleAddShip(event) {
    const position = Square.parse(event.target);
    const name = this.shipNames[this.addingShip];

    const ship = new Ship(ShipLength[name], name);
    if (this.game.addShip(ship, position, this.direction)) {
      const imgMetadata = {
        length: ShipLength[name],
        position,
        direction: this.direction,
        path: shipIconPath[name],
      };
      const player1Water = document.querySelector('.player-1');
      player1Water.appendChild(shipIcon(imgMetadata));
      this.addingShip += 1;

      // remove event listener after adding all ships
      if (this.addingShip === 5) {
        this.play();
        this.player1Squares.forEach((square) => {
          square.removeEventListener('click', this.handleAddShip);
        });
      }
    }
  }

  play() {
    this.player2Squares.forEach((square) => {
      square.addEventListener('click', () => {
        const position = Square.parse(square);
        const shoot = this.game.play(position);
        if (shoot === 'x') {
          square.innerHTML = 'x';
        } else if (shoot === 'o') {
          square.innerHTML = 'o';
        }
      });
    });
  }

  // refactor this function to enable me to add, and remove highight
  // when you enter and leave square
}

module.exports = ScreenController;
