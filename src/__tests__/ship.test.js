const { Ship, ShipLength } = require('../ship');

/* Ship Object includes
 * - length
 * - number of times hit.
 * - Whether or not they are sunk
 * in addition, position, name
 * */

test('Ship', () => {
  const ship1 = new Ship(ShipLength.Destroyer, 'Destroyer');
  expect(ship1.isSunk()).toBeFalsy();

  ship1.hit();
  expect(ship1.name).toBe('Destroyer');
  /* expect(ship1.getHits()).toBe(1); */
});

test('ship sink if hit as much as ship length', () => {
  const length = ShipLength.Patrol;
  const ship1 = new Ship(length);

  for (let index = 0; index < length; index++) {
    expect(ship1.isSunk()).toBeFalsy();
    ship1.hit();
  }
  expect(ship1.isSunk()).toBeTruthy();
});
