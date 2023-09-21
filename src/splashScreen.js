const Square = require('./boardSquare');
const { renderIcon } = require('./components/icon');
const { ShipLength, Ship } = require('./ship');

class SplashScreen {
  direction = 'x';

  shipNames = Object.keys(ShipLength);

  shipNumber = 0;

  rotateAxis = document.querySelector('#rotate-axis');

  player1Squares = document.querySelectorAll('.player-1 .square');

  player2Board = document.querySelector('.player-2');

  shipName = document.querySelector('.ship-name');

  constructor(game) {
    this.game = game;
    this.rotateAxis.onclick = () => {
      this.direction = this.direction === 'x' ? 'y' : 'x';
    };
    this.player2Board.classList.add('hide');
    this.handleAddShip = this.handleAddShip.bind(this);
  }

  show() {
    this.player1Squares.forEach((square) => {
      square.addEventListener('mouseover', () => {
        const position = Square.parse(square);
        const name = this.shipNames[this.shipNumber];
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
        const name = this.shipNames[this.shipNumber];
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
    const name = this.shipNames[this.shipNumber];
    this.shipName.innerHTML = name;

    const ship = new Ship(ShipLength[name], name);
    if (this.game.addShip(ship, position, this.direction)) {
      const imgMetadata = {
        length: ShipLength[name],
        position,
        axis: this.direction,
        sunk: ship.isSunk(),
        name,
      };
      const player1Water = document.querySelector('.player-1');
      player1Water.appendChild(renderIcon(imgMetadata));

      // redudently unhilight the squares (of ship length) before shipNumber is incremented
      // below. Because once shipNumber changes, the ship length we can access with this
      // value will also change, resulting in some squares not getting unhilighted in
      // mouseleave eventhandler.
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

      this.shipNumber += 1;

      // after adding all 5 ships, do:
      if (this.shipNumber === 5) {
        // 1. hide and show ui for adding ship and enemy board, respectively.
        document.querySelector('.placing-ship').classList.add('hide');
        this.player2Board.classList.remove('hide');

        // 2. remove click event listner for adding ships in every square.
        this.player1Squares.forEach((square) => {
          square.removeEventListener('click', this.handleAddShip);
        });
      }
    }
  }
}

module.exports = SplashScreen;
