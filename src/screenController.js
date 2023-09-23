const GameController = require('./gameController');
const Square = require('./boardSquare');
const SplashScreen = require('./splashScreen');

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
        const shoot = this.game.play(position);
        if (shoot.human.status === 'x') {
          // eslint-disable-next-line no-param-reassign
          square.innerHTML = 'x';
        } else if (shoot.human.status === 'o') {
          // eslint-disable-next-line no-param-reassign
          square.innerHTML = 'o';
        }
        await this.thinking(1000);
        const botShoot = shoot.bot;
        const postion = { x: botShoot.x, y: botShoot.y };
        const botSquareShoot = Square.findSquare('player-1', postion);
        botSquareShoot.innerHTML = botShoot.isHit ? 'x' : 'o';
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
