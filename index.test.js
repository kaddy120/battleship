const { Ship, ShipLength } = require('./ship');
const { BotPlayer } = require('./player');
const { expect, test } = require('@jest/globals');
const Gameboard = require('./gameboard');

/* Ship Object includes
 * - length
 * - number of times hit.
 * - Whether or not they are sunk
 * in addition, position, name
 * */

test('Ship', () => {
  const ship1 = new Ship(ShipLength.Destroyer);
  expect(ship1.isSunk()).toBeFalsy();

  ship1.hit();
  /* expect(ship1.getHits()).toBe(1); */
});

test('ship sink if hit as much as ship length', () => {
  const length = ShipLength.Cruiser;
  const ship1 = new Ship(length);

  for (let index = 0; index < length; index++) {
    expect(ship1.isSunk()).toBeFalsy();
    ship1.hit();
  }
  expect(ship1.isSunk()).toBeTruthy();
});

test('board is 10x10', () => {
  const gameboard = new Gameboard();
  const board = gameboard.getBoard();
  expect(board.length).toBe(10);
  expect(board[0].length).toBe(10);
});

test('return true when ship is added', () => {
  const gameboard = new Gameboard();

  let startPosition = {
    x: 0,
    y: 0,
  };

  let direction = 'horizontal';
  const length = ShipLength.Cruiser;
  const ship = new Ship(length);

  /* add a ship horizontally*/
  expect(gameboard.addShip(ship, startPosition, direction)).toBeTruthy();

  /* add a ship vertically*/
  startPosition.y = 1;
  direction = 'vertical';
  expect(gameboard.addShip(ship, startPosition, direction)).toBeTruthy();
});

test('return false when adding a ship that is going out of the board', () => {
  const gameboard = new Gameboard();

  let startPosition = {
    x: 5,
    y: 5,
  };

  let direction = 'horizontal';
  const length = ShipLength.Carrier; // length is 5
  const ship = new Ship(length);

  expect(gameboard.addShip(ship, startPosition, 'horizontal')).toBeFalsy();
  startPosition.x = 4;
  expect(gameboard.addShip(ship, startPosition, 'vertical')).toBeFalsy();
});

test('return false when ships are overlaping', () => {
  const gameboard = new Gameboard();

  let startPosition = {
    x: 0,
    y: 0,
  };

  let direction = 'horizontal';
  const length = ShipLength.Cruiser;
  const ship = new Ship(length);

  gameboard.addShip(ship, startPosition, direction);
  expect(gameboard.addShip(ship, startPosition, 'vertical')).toBeFalsy();

  startPosition.x += length - 1;
  expect(gameboard.addShip(ship, startPosition, direction)).toBeFalsy();
});

test('return "o" and mark the board with "o" when received attack miss the ship', () => {
  const gameboard = new Gameboard();
  expect(gameboard.receiveAttack(0, 0)).toBe('o');
  const board = gameboard.getBoard();
  expect(board[0][0].shoot).toBe('o');
});

test('return "x" and mark the board with "x" when received attack hits the ship', () => {
  const gameboard = new Gameboard();

  let direction = 'horizontal';
  const length = ShipLength.Cruiser;
  const ship = new Ship(length);

  gameboard.addShip(ship, { x: 0, y: 0 }, direction);

  expect(gameboard.receiveAttack(0, 0)).toBe('x');
  let board = gameboard.getBoard();
  expect(board[0][0].shoot).toBe('x');

  expect(gameboard.receiveAttack(2, 0)).toBe('x');
  board = gameboard.getBoard();
  expect(board[0][0].shoot).toBe('x');
});

test('return -1 when attacking a position already attacked', () => {
  const gameboard = new Gameboard();
  gameboard.receiveAttack(0, 0);
  expect(gameboard.receiveAttack(0, 0)).toBe(-1);
});

test('return false if there are still operating ships on the board', () => {
  const gameboard = new Gameboard();

  let direction = 'horizontal';
  const ship1 = new Ship(2);
  const ship2 = new Ship(2);

  gameboard.addShip(ship2, { x: 0, y: 0 }, direction);
  gameboard.addShip(ship1, { x: 2, y: 0 }, direction);
  expect(gameboard.allShipsSunk()).toBeFalsy();
});

test('return true if all ships in the board sunk', () => {
  const gameboard = new Gameboard();

  let direction = 'horizontal';
  const ship1 = new Ship(2);
  const ship2 = new Ship(2);

  gameboard.addShip(ship1, { x: 0, y: 0 }, direction);
  gameboard.addShip(ship2, { x: 2, y: 0 }, direction);

  gameboard.receiveAttack(0, 0);
  gameboard.receiveAttack(1, 0);
  gameboard.receiveAttack(2, 0);
  gameboard.receiveAttack(3, 0);
  expect(gameboard.allShipsSunk()).toBeTruthy();
});

/* Player
 * remember, there are two boards.
 * player 1 waters,
 * player 2 waters,
 * I can think of player is ship operator,
 * The ship operate in the water.
 * A player is operating the ship fleet.
 * The player should have excess to the position it has     already fired.
 * The player should have it's own interal map that i can use to decide.
 * */

test('botPlayer', () => {
  const player1Waters = new Gameboard();
  const botPlayer = new BotPlayer(() => player1Waters.getBoard());
  botPlayer.shoot((x, y) => player1Waters.receiveAttack(x, y));
  let board = player1Waters.getBoard();
  let shootAt = botPlayer.lastShoot;
  expect(board[shootAt.x][shootAt.y].shoot).not.toBeNull();
});

test('', () => {

})
