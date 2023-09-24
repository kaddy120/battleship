const Square = require('./boardSquare');
const { renderIcon } = require('./components/icon');
const RotateAxis = require('./components/rotateAxis');
const { ShipLength, Ship } = require('./ship');

class SplashScreen {
  shipNames = Object.keys(ShipLength);

  shipNumber = 0;

  player1Squares = document.querySelectorAll('.player-1 .square');

  player2Board = document.querySelector('.player-2');

  shipName = document.querySelector('.ship-name');

  constructor(game) {
    this.getDirection = RotateAxis();
    this.game = game;
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
          this.getDirection(),
          ShipLength[name],
          (x, y, className = 'highlight') => {
            document
              .querySelector(`.player-1 [data-index="${y * 10 + x}"]`)
              .classList.add(className);
          }
        );
      });

      square.addEventListener('mouseleave', () => {
        const position = Square.parse(square);
        const name = this.shipNames[this.shipNumber];
        Square.highLightSquares(
          position,
          this.getDirection(),
          ShipLength[name],
          (x, y, className = 'highlight') => {
            document
              .querySelector(`.player-1 [data-index="${y * 10 + x}"]`)
              .classList.remove(className);
          }
        );
      });

      square.addEventListener('click', this.handleAddShip);
    });
  }

  handleAddShip(event) {
    const position = Square.parse(event.target);
    let name = this.shipNames[this.shipNumber];
    this.shipName.innerHTML = name;

    const ship = new Ship(ShipLength[name], name);
    if (this.game.addShip(ship, position, this.getDirection())) {
      const imgMetadata = {
        length: ShipLength[name],
        position,
        axis: this.getDirection(),
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
        this.getDirection(),
        ShipLength[name],
        (x, y, className = 'highlight') => {
          document
            .querySelector(`.player-1 [data-index="${y * 10 + x}"]`)
            .classList.remove(className);
        }
      );

      this.shipNumber += 1;

      name = this.shipNames[this.shipNumber];
      this.shipName.innerHTML = name;

      // after adding all 5 ships, do:
      if (this.shipNumber === 5) {
        // 1. hide and show ui for adding ship and enemy board, respectively.
        SplashScreen.hideElement('rotate-axis');
        SplashScreen.hideElement('ship-sunk');

        document.getElementById('game-status').innerHTML = 'player 1 turn';
        this.player2Board.classList.remove('hide');

        // 2. remove click event listner for adding ships in every square.
        this.player1Squares.forEach((square) => {
          square.removeEventListener('click', this.handleAddShip);
        });
      }
    }
  }

  static hideElement(id) {
    document.getElementById(id).classList.add('hide');
  }
}

module.exports = SplashScreen;
