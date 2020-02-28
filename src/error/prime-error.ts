export default class PrimeError extends Error {

    constructor (message : string) {
        super(message);
        this.name = this.constructor.name;
        Object.setPrototypeOf(this, PrimeError.prototype);
    }
}