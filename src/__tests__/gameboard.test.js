// eslint-disable-next-line import/no-extraneous-dependencies
const { expect, test } = require('@jest/globals');
const { Ship, ShipLength } = require('../ship');
const Gameboard = require('../gameboard');

test('board is 10x10', () => {
  const gameboard = new Gameboard();
  const board = gameboard.getBoard();
  expect(board.length).toBe(10);
  expect(board[0].length).toBe(10);
});

test('return true when ship is added', () => {
  const gameboard = new Gameboard();

  const startPosition = {
    x: 0,
    y: 0,
  };

  let direction = 'x';
  const length = ShipLength.Battleship;
  const ship = new Ship(length);

  /* add a ship xly */
  expect(gameboard.addShip(ship, startPosition, direction)).toBeTruthy();
  /* add a ship yly */
  startPosition.y = 1;
  direction = 'y';
  expect(gameboard.addShip(ship, startPosition, direction)).toBeTruthy();
});

test('added ship is stored in the board', () => {
  const ship = new Ship(5);
  const direction = 'x';
  const gameboard = new Gameboard();
  expect(gameboard.addShip(ship, { x: 1, y: 2 }, direction)).toBeTruthy();
  const board = gameboard.getBoard();
  expect(board[1][2].ship).toBe(ship);
  expect(board[2][2].ship).toBe(ship);
  expect(board[3][2].ship).toBe(ship);
  expect(board[4][2].ship).toBe(ship);
  expect(board[5][2].ship).toBe(ship);
});

test('return false when adding a ship that is going out of the board', () => {
  const gameboard = new Gameboard();

  const startPosition = {
    x: 5,
    y: 5,
  };

  const length = ShipLength.Carrier; // length is 5
  const ship = new Ship(length);

  expect(gameboard.addShip(ship, startPosition, 'x')).toBeFalsy();
  startPosition.x = 4;
  expect(gameboard.addShip(ship, startPosition, 'y')).toBeFalsy();
});

test('return false when ships are overlaping', () => {
  const gameboard = new Gameboard();

  const startPosition = {
    x: 0,
    y: 0,
  };

  const direction = 'x';
  const length = ShipLength.Battleship;
  const ship = new Ship(length);

  gameboard.addShip(ship, startPosition, direction);
  expect(gameboard.addShip(ship, startPosition, 'y')).toBeFalsy();

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

  const direction = 'x';
  const length = ShipLength.Battleship;
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

  const direction = 'x';
  const ship1 = new Ship(2);
  const ship2 = new Ship(2);

  gameboard.addShip(ship2, { x: 0, y: 0 }, direction);
  gameboard.addShip(ship1, { x: 2, y: 0 }, direction);
  expect(gameboard.allShipsSunk()).toBeFalsy();
});

test('return true if all ships in the board sunk', () => {
  const gameboard = new Gameboard();

  const direction = 'x';
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
