// factory function that places ships at coordinates and track attacks

// notes: game grids are 10x10.
// each square on the grid will have a number.
// depending on the roation of the ship and it's length, we can say which elements are now ships

import { Ship } from './shipFactory';

const Gameboard = () => {
  // aray of 100, each element represents a square, defaul null.
  const grid = Array(100).fill(null);

  // calculates which positions in the gameboard are taken up
  const determineShipArray = () => {
    // the ships are going to need a grid position array. depending on the length of the ship,
    // it's orientation and the starting grid position.
    // if it is vertical, the ships position array will need to be
    // initial position*10 for each length
  };

  const placeShip = () => {
    // function that places a ship, by calling the Ship factory function
  };

  const recieveAttack = (gridNumber) => {
    // takes gridNumber, compares it to the Ships arrays if the attack number
    // matches the ship gridnumbers, then sends the hit function
    // to the correct ship

    // psuedocode: Given the ships grid position, is that number in the position?.
  };

  const missedAttacks = () => {
    // an ?array? of attacks that are missed and can be displayed properly
  };

  const allShipsSunk = () => {
    // function that checks if all ships are sunk or not, and therefore end the game when true
  };
};

export { Gameboard };
