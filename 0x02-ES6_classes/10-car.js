const _brand = Symbol('brand')
const _motor = Symbol('motor_motor')
const _color = Symbol('color')

export default class Car{
    constructor(brand, motor, color){
        this._brand = brand;
        this._motor = motor;
        this._colo = color;
    }

    cloneCar(){
        return new Car(this[_brand], this[_motor], this[_color]);
    }
}