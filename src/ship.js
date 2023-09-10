const ShipLength = {
  Carrier: 5,
  Battleship: 4,
  Cruiser: 3,
  Submarrine: 3,
  Destroyer: 2,
};

class Ship {
  /*maybe i should add a ship name*/
  constructor(length, name) {
    this._name = name
    this._length = length;
    this._hit = 0;
  }

  get name(){
    return this._name
  }

  length() {
    return this._length;
  }

  hit() {
    this._hit++;
  }

  isSunk() {
    return this._hit >= this._length;
  }
}

exports.Ship = Ship;
exports.ShipLength = ShipLength;
