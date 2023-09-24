const Square = require('../boardSquare');

function Boards() {
  const content = document.querySelector('#content');
  const waterContainer = document.createElement('div');

  waterContainer.classList.add('water-container');
  waterContainer.appendChild(Square.createBoard('player-1'));
  waterContainer.appendChild(Square.createBoard('player-2'));
  content.appendChild(waterContainer);
}

module.exports = Boards;
