// Factory function that creates the Ship objects

const Ship = (l) => {
  // initial parameters
  const length = l;
  let hitCounter = 0;


  // hit function that takes a number then marks that position as 'hit'
  const hit = () => hitCounter++;

  // isSunk function that calculates if all positions are 'hit' and change sunk to true
  const isSunk = () => {
    if (hitCounter >= length) {
      return true;
    } return false;
  };

  const getHitCounter = () => hitCounter;

  return {
    length, hit, isSunk, getHitCounter,
  };
};

export { Ship };
