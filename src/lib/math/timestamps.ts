import { Timespan } from '../../types';
import { Dates } from '../conversions/dates';
import { Units } from '../units/units';
import { Math } from './math';

const Timespans = Units.Timespans;

export function add (timestamp : number, amount : number, unit : string | Timespan) : number {
    const addend = Math.Numbers.multiply(amount, Timespans.find(unit).milliseconds);
    return Math.Numbers.add(timestamp, addend);
}

export function subtract (timestamp : number, amount : number, unit : string | Timespan) : number {
    const subtrahend = Math.Numbers.multiply(amount, Timespans.find(unit).milliseconds);
    return Math.Numbers.subtract(timestamp, subtrahend);
}

export function difference (left : number, right : number, unit ?: string | Timespan) : number {
    const timespan = Timespans.find(unit);

    if (timespan === Timespans.MILLISECOND) {
        return left - right;
    }

    const leftParts = Dates.split(new Date(left), timespan);
    const rightParts = Dates.split(new Date(right), timespan);

    return Math.Numbers.difference(Dates.utc(leftParts), Dates.utc(rightParts), timespan.milliseconds);
}