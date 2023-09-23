// eslint-disable-next-line import/no-extraneous-dependencies
const { beforeEach, expect, test, describe } = require('@jest/globals');
const { ShipLength } = require('../ship');
const Gameboard = require('../gameboard');
const { BotPlayer } = require('../player');

test('botPlayer', () => {
  const player1Waters = new Gameboard();
  const botPlayer = new BotPlayer(
    () => player1Waters.getBoard(),
    player1Waters
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
  const board = botWaters.getBoard();
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

function countShoots(board) {
  let count = 0;
  board.forEach((squares) => {
    squares.forEach((square) => {
      if (square.shoot) {
        count += 1;
      }
    });
  });
  return count;
}

describe('botPlayer shooting', () => {
  const myWater = new Gameboard();
  const enemyWater = new Gameboard();
  const bot = new BotPlayer(myWater);
  const handleShoot = (x, y) => enemyWater.receiveAttack(x, y);

  beforeEach(() => {
    enemyWater.clearBoard();
    bot.clearHistory();
  });

  test('fire a single shoot', () => {
    bot.shoot(handleShoot);
    const board = enemyWater.getBoard();
    expect(countShoots(board)).toBe(1);
  });

  test('fire shoots to every square in the board', () => {
    for (let i = 0; i < 100; i++) {
      bot.shoot(handleShoot);
    }
    const board = enemyWater.getBoard();
    expect(countShoots(board)).toBe(100);
  });
});
