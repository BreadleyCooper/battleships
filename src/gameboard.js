// factory function that places ships at coordinates and track attacks

// notes: game grids are 10x10

import { Ship } from "./shipFactory";

const Gameboard = () => {
  const placeShip = () => {
    // function that places a ship, by calling the Ship factory function
  };

  const recieveAttack = (x, y) => {
    // takes pair of coordinates, determines if the attack hit a ship, then sends the hit function
    // to the correct ship
  };

  const missedAttacks = () => {
    // an ?array? of attacks that are missed and can be displayed properly
  }

  const allShipsSunk = () => {
    // function that checks if all ships are sunk or not, and therefore end the game when true
  }
};

export {Gameboard}