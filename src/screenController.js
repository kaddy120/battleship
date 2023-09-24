const GameController = require('./gameController');
const Square = require('./boardSquare');
const SplashScreen = require('./splashScreen');
const shotMarker = require('./components/icons/shotMarker');
const Boards = require('./components/board');
const State = require('./components/gameState');

class ScreenController {
  game = new GameController();

  #botThinking = false;

  constructor() {
    Boards();
    this.player2Squares = document.querySelectorAll('.player-2 .square');
    this.splashScreen = new SplashScreen(this.game);
    this.splashScreen.show();
  }

  play() {
    const { isThinking, thinking } = State();

    this.player2Squares.forEach((square) => {
      square.addEventListener('click', async () => {
        // ensures that player1 cannot play twice when the bot is thinking
        if (isThinking()) return;

        const position = Square.parse(square);
        const shot = this.game.play(position);

        // eslint-disable-next-line no-param-reassign
        square.innerHTML = shotMarker(shot.human.isHit);
        await thinking(800);
        const botShot = shot.bot;

        const botSquareShot = Square.findSquare('player-1', {
          x: botShot.x,
          y: botShot.y,
        });
        botSquareShot.innerHTML = shotMarker(botShot.isHit);
      });
    });
  }
}

module.exports = ScreenController;
