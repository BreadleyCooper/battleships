import { Ship } from '../shipFactory';

test('has a length', () => {
  const newShip4 = Ship(4);
  expect(newShip4.length).toBe(4);
});

test('isSunk returns true if hitCounter === length', () => {
  const newShip3 = Ship(3);
  newShip3.hit();
  newShip3.hit();
  newShip3.hit();
  newShip3.isSunk();
  expect(newShip3.isSunk()).toBeTruthy();
});

test('isSunk returns false if hitCounter !== length', () => {
  const newShipAlive = Ship(4);
  newShipAlive.hit();
  expect(newShipAlive.isSunk()).toBeFalsy();
});
test('hit counter increments', () => {
  const newShip1 = Ship(4);
  newShip1.hit();
  expect(newShip1.getHitCounter()).toBe(1);
});
