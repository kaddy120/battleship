const GameController = require('./gameController');

class ScreenController {
  constructor() {
    this.content = document.querySelector('#content')
    this.game = new GameController();
  }

  greeting() {
    console.log('hello world from a class');
  }
}

const screenController = new ScreenController();
