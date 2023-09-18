class Square {
  static createBoard(player) {
    const playerBoard = document.createElement('div');
    playerBoard.classList.add(player);

    for (let y = 0; y < 10; y++) {
      for (let x = 0; x < 10; x++) {
        const square = document.createElement('div');
        square.dataset.x = x;
        square.dataset.y = y;
        square.dataset.index = y * 10 + x;
        square.classList.add('square');
        square.style.gridRow = `${y + 1}/span 1`;
        square.style.gridColumn = `${x + 1}/span 1`;
        playerBoard.appendChild(square);
      }
    }
    return playerBoard;
  }

  static findSquare(boardClass, position) {
    return document.querySelector(
      `.${boardClass} [data-index="${position.x * position.y}"]`,
    );
  }

  static parse(square) {
    const x = parseInt(square.dataset.x, 10);
    const y = parseInt(square.dataset.y, 10);
    return { x, y };
  }

  static highLightSquares(position, direction, length, handle) {
    const X = position.x;
    const Y = position.y;

    if (direction === 'horizontal') {
      if (X + length > 10) {
        handle(X, Y, 'highlight-error');
        return;
      }
      // eslint-disable-next-line no-plusplus
      for (let x = X; x < X + length && x < 10; x++) {
        handle(x, Y);
      }
    } else if (direction === 'vertical') {
      if (Y + length > 10) {
        handle(X, Y, 'highlight-error');
        return;
      }
      // eslint-disable-next-line no-plusplus
      for (let y = Y; y < Y + length && y < 10; y++) {
        handle(X, y);
      }
    }
  }
}

module.exports = Square;
