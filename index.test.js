const { Ship, ShipLength } = require('./ship');
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
  expect(gameboard.addShip(ship, startPosition, direction)).toBeTruthy()

  /* add a ship vertically*/
  startPosition.y = 1
  direction = 'vertical'
  expect(gameboard.addShip(ship, startPosition, direction)).toBeTruthy()
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

  expect(gameboard.addShip(ship, startPosition, 'horizontal')).toBeFalsy()
  startPosition.x = 4;
  expect(gameboard.addShip(ship, startPosition, 'vertical')).toBeFalsy()
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

  gameboard.addShip(ship, startPosition, direction)
  expect(gameboard.addShip(ship, startPosition, 'vertical')).toBeFalsy()

  startPosition.x += length - 1;
  expect(gameboard.addShip(ship, startPosition,direction)).toBeFalsy()
});

test('return true if received attack hit a Ship', () => {});

test('return false if received attack hit a Ship', () => {});

test('return -1 if attacing a position already attacked', () => {});

test('get a number of opperating ships', () => {});

test('get a number of opperating ships after sunking one', () => {});
