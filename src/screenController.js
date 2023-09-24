const GameController = require('./gameController');
const Square = require('./boardSquare');
const SplashScreen = require('./splashScreen');
const shotMarker = require('./components/icons/shotMarker');

class ScreenController {
  content = document.querySelector('#content');

  game = new GameController();

  waterContainer = document.createElement('div');

  #botThinking = false;

  constructor() {
    this.waterContainer.classList.add('water-container');
    this.waterContainer.appendChild(Square.createBoard('player-1'));
    this.waterContainer.appendChild(Square.createBoard('player-2'));
    this.content.appendChild(this.waterContainer);

    this.player2Squares = document.querySelectorAll('.player-2 .square');
    this.splashScreen = new SplashScreen(this.game);
    this.splashScreen.show();
  }

  play() {
    this.player2Squares.forEach((square) => {
      square.addEventListener('click', async () => {
        // ensures that player1 cannot play twice when the bot is thinking
        if (this.#botThinking) return;

        const position = Square.parse(square);
        const shot = this.game.play(position);

        // eslint-disable-next-line no-param-reassign
        square.innerHTML = shotMarker(shot.human.isHit);
        await this.thinking(1000);
        const botShot = shot.bot;

        const botSquareShot = Square.findSquare('player-1', {
          x: botShot.x,
          y: botShot.y,
        });
        botSquareShot.innerHTML = shotMarker(botShot.isHit);
      });
    });
  }

  async thinking(ms) {
    this.#botThinking = true;
    await new Promise((resolve) => {
      setTimeout(() => {
        this.#botThinking = false;
        resolve();
      }, ms);
    });
  }
}

module.exports = ScreenController;
