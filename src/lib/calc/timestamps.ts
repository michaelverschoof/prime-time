import { Timespan } from '../types';
import * as Temporals from '../units/temporals';
import * as Numbers from './numbers';

function add (timestamp : number, amount : number, unit : string | Timespan) : number {
    const addend = Numbers.multiply(amount, Temporals.find(unit).milliseconds);
    return Numbers.add(timestamp, addend);
}

function subtract (timestamp : number, amount : number, unit : string | Timespan) : number {
    const subtrahend = Numbers.multiply(amount, Temporals.find(unit).milliseconds);
    return Numbers.subtract(timestamp, subtrahend);
}

function difference (left : number, right : number, unit? : string | Timespan) : number {
    const temporal = Temporals.find(unit);

    if (temporal.aliases.includes(Timespan.MILLISECOND)) {
        return Numbers.difference(left, right);
    }

    const alias = temporal.aliases[0];

    return Numbers.difference(scale(left, alias), scale(right, alias), temporal.milliseconds);
}

function scale (timestamp : number, unit : string | Timespan) : number {
    const parts = Temporals.find(unit).parts(timestamp);

    // As ES6's Date.UTC() requires year and month, add it if it's not present
    if (parts.length === 1) {
        parts[1] = 0;
    }

    return Date.UTC(parts[0], parts[1], ...parts.splice(2));
}

export {
    add,
    subtract,
    difference,
    scale
};
