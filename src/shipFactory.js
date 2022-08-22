// Factory function that creates the Ship objects

const Ship = (l) => {
  // initial parameters
  const length = l;
  const sunk = true;
  const hitCounter = 0;

  // hit function that takes a number then marks that position as 'hit'
  const hit = (position, hitCounter) => hitCounter++;

  // isSunk function that calculates if all positions are 'hit' and change sunk to true
  const isSunk = (hitCounter) => {
    if (hitCounter === length) {
      return true;
    } return false;
  };
  return { length, hit, isSunk };
};

export { Ship };
