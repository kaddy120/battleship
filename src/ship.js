/* Code-smell: this is poluting global scope. */
const ShipLength = {
  Carrier: 5,
  Battleship: 4,
  Cruiser: 3,
  Submarine: 3,
  Destroyer: 2,
};

class Ship {
  #name;

  #length;

  #hit;

  constructor(length, name) {
    this.#name = name;
    this.#length = length;
    this.#hit = 0;
  }

  get name() {
    return this.#name;
  }

  length() {
    return this.#length;
  }

  hit() {
    this.#hit += 1;
  }

  isSunk() {
    return this.#hit >= this.#length;
  }
}

exports.Ship = Ship;
exports.ShipLength = ShipLength;
