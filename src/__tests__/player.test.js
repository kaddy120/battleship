// eslint-disable-next-line import/no-extraneous-dependencies
const { expect, test } = require('@jest/globals');
const { ShipLength } = require('../ship');
const Gameboard = require('../gameboard');
const { BotPlayer } = require('../player');

test('botPlayer', () => {
  const player1Waters = new Gameboard();
  const botPlayer = new BotPlayer(
    () => player1Waters.getBoard(),
    player1Waters,
  );
  botPlayer.shoot((x, y) => player1Waters.receiveAttack(x, y));
  const board = player1Waters.getBoard();
  const shootAt = botPlayer.lastShoot;
  expect(board[shootAt.x][shootAt.y].shoot).not.toBeNull();
});

test('randomly add all ships to botPlayers board', () => {
  const botWaters = new Gameboard();
  let shipCount = 0;

  const botPlayer = new BotPlayer(botWaters);

  botPlayer.placeShips();
  /* const board = botWaters.getBoard(); */
  const board = botPlayer.myWater.getBoard();
  board.forEach((squares) => {
    squares.forEach((square) => {
      if (square.ship) shipCount += 1;
    });
  });

  let total = 0;
  Object.values(ShipLength).forEach((value) => {
    total += value;
  });

  expect(total).toBe(17);
  expect(shipCount).toBe(total);
  expect(botWaters.ships.length).toBe(5);
});
