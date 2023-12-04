export default class HolbertonClass {
  constructor(size, location) {
    if (typeof size !== 'number' || typeof location !== 'string') {
      throw new Error('Size must be a number and location must be a string');
    }
    this._size = size;
    this._location = location;
  }

  get size() {
    return this._size;
  }

  get location() {
    return this._location;
  }

  valueOf() {
    return this._size;
  }

  toString() {
    return this._location;
  }
}
