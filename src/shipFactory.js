// Factory function that creates the Ship objects

// notes: Ships are Carrier l=5, Battleship l=4, Cruiser l=3, Submarine l=3, Destroyer l=2

const Ship = (x, y, l) => {
  // initial parameters
  const length = l;
  let hitCounter = 0;

  // hit function that takes a number then marks that position as 'hit'
  const hit = () => hitCounter++;

  // isSunk function that calculates if all positions are 'hit' and change sunk to true
  const isSunk = () => {
    let sunk = false;
    if (hitCounter >= length) {
      sunk = true;

      // if sunk, return true
    } return sunk !== false;
  };
  // returns the hitcounter variable for use outside of this factory
  const getHitCounter = () => hitCounter;

  return {
    length, hit, isSunk, getHitCounter,
  };
};

export { Ship };
