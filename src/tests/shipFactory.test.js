import { Ship } from '../shipFactory';

test('has a length', () => {
  const newShip4 = Ship(4);
  expect(newShip4.length).toBe(4);
});

test('if hit counter === length, sunk is true', () => {
  const newShip3 = Ship(3);
  newShip3.hit();
  newShip3.hit();
  newShip3.hit();
  newShip3.isSunk();
  expect(newShip3.isSunk).toBeTruthy();
});

test('if hit counter !== length, sunk is false', () => {
  const newShip5 = Ship(5);
  newShip5.hit();
  newShip5.hit();
  newShip5.isSunk();
  expect(newShip5.isSunk).toBeFalsy();
});
