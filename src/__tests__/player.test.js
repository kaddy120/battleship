const { Ship, ShipLength } = require('../ship');
const Gameboard = require('../gameboard');
const { expect, test } = require('@jest/globals');
const { BotPlayer } = require('../player');

test('botPlayer', () => {
  const player1Waters = new Gameboard();
  const botPlayer = new BotPlayer(
    () => player1Waters.getBoard(),
    player1Waters
  );
  botPlayer.shoot((x, y) => player1Waters.receiveAttack(x, y));
  let board = player1Waters.getBoard();
  let shootAt = botPlayer.lastShoot;
  expect(board[shootAt.x][shootAt.y].shoot).not.toBeNull();
});

test('randomly add all ships to botPlayers board', () => {
  const player1Waters = new Gameboard();
  const botWaters = new Gameboard();
  let shipCount = 0;

  // Code smell
  const botPlayer = new BotPlayer(() => player1Waters.getBoard(), botWaters);

  botPlayer.placeShips();
  const board = botWaters.getBoard();
  board.forEach((squares) => {
    squares.forEach((square) => {
      if (square.ship) shipCount++;
    });
  });
  let total = 0;
  for (const [key, value] of Object.entries(ShipLength)) {
    total += value;
  }
  expect(shipCount).toBe(total);
  expect(botWaters._ships.length).toBe(5);
});
