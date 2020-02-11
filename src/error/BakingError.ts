export default class BakingError extends Error {

    constructor (message : string) {
        super(message);
        this.name = this.constructor.name;
        Object.setPrototypeOf(this, BakingError.prototype);
    }
}