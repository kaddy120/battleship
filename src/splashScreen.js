const Square = require('./boardSquare');
const { shipIcon, shipIconPath } = require('./icon');
const { ShipLength, Ship } = require('./ship');

class SplashScreen {
  direction = 'horizontal';

  shipNames = Object.keys(ShipLength);

  addingShip = 0;

  rotateAxis = document.querySelector('#rotate-axis');

  player1Squares = document.querySelectorAll('.player-1 .square');

  player2Board = document.querySelector('.player-2');

  constructor(game) {
    this.game = game;
    this.rotateAxis.onclick = () => {
      this.direction = this.direction === 'horizontal' ? 'vertical' : 'horizontal';
    };
    this.player2Board.classList.add('hide');
    this.handleAddShip = this.handleAddShip.bind(this);
  }

  show() {
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
        this.player2Board.classList.remove('hide');
        this.player1Squares.forEach((square) => {
          square.removeEventListener('click', this.handleAddShip);
        });
      }
    }
  }
}

module.exports = SplashScreen;
