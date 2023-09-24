const { ShipLength } = require('../ship');
const Gameboard = require('../gameboard');
const { BotPlayer } = require('../player');

test('botPlayer', () => {
  const player1Waters = new Gameboard();
  const botPlayer = new BotPlayer(
    () => player1Waters.getBoard(),
    player1Waters,
  );
  botPlayer.shot((x, y) => player1Waters.receiveAttack(x, y));
  const board = player1Waters.getBoard();
  const shotAt = botPlayer.lastShot;
  expect(board[shotAt.x][shotAt.y].shot).not.toBeNull();
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
  expect(botWaters.ships).toHaveLength(5);
});

function countShots(board) {
  let count = 0;
  board.forEach((squares) => {
    squares.forEach((square) => {
      if (square.shot) {
        count += 1;
      }
    });
  });
  return count;
}

describe('botPlayer shoting', () => {
  const myWater = new Gameboard();
  const enemyWater = new Gameboard();
  const bot = new BotPlayer(myWater);
  const handleShot = (x, y) => enemyWater.receiveAttack(x, y);

  afterEach(() => {
    enemyWater.clearBoard();
    bot.clearHistory();
  });

  test('fire a single shot', () => {
    bot.shot(handleShot);
    const board = enemyWater.getBoard();
    expect(countShots(board)).toBe(1);
  });

  test('fire shots to every square in the board', () => {
    for (let i = 0; i < 100; i++) {
      bot.shot(handleShot);
    }
    const board = enemyWater.getBoard();
    expect(countShots(board)).toBe(100);
  });
});
