const GameController = require('./gameController');

class ScreenController {
  constructor() {
    this.content = document.querySelector('#content');
    this.game = new GameController();

    const waterContainer = document.createElement('div');
    waterContainer.classList.add('water-container');
    waterContainer.appendChild(this.createBoard('player-1'));
    waterContainer.appendChild(this.createBoard('player-2'));
    this.content.appendChild(waterContainer);
  }

  greeting() {
    alert('hello world from a class');
  }

  createBoard(player) {
    const playerBoard = document.createElement('div');
    playerBoard.classList.add(player);

    for (let i = 0; i < 10; i++) {
      const row = document.createElement('div');
      row.setAttribute('id', `row-${i}`);
      for (let j = 0; j < 10; j++) {
        const col = document.createElement('div');
        col.setAttribute('id', `col-${i}`);
        col.classList.add('square');
        row.appendChild(col);
      }
      playerBoard.appendChild(row);
    }
    return playerBoard;
  }
}

module.exports = ScreenController;
