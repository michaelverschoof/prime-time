import { Timespan, TimeUnit } from '../types';
import * as Timespans from '../units/timespans';
import * as Numbers from './numbers';

function add (timestamp : number, amount : number, unit : string | Timespan) : number {
    const addend = Numbers.multiply(amount, Timespans.find(unit).milliseconds);
    return Numbers.add(timestamp, addend);
}

function subtract (timestamp : number, amount : number, unit : string | Timespan) : number {
    const subtrahend = Numbers.multiply(amount, Timespans.find(unit).milliseconds);
    return Numbers.subtract(timestamp, subtrahend);
}

function difference (left : number, right : number, unit? : string | Timespan) : number {
    const timespan = Timespans.find(unit);

    if (timespan.aliases.includes(TimeUnit.MILLISECOND)) {
        return Numbers.difference(left, right);
    }

    return Numbers.difference(scale(left, timespan), scale(right, timespan), timespan.milliseconds);
}

function scale (timestamp : number, timespan : string | Timespan) : number {
    const parts = Timespans.find(timespan).parts(timestamp);

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
