import { Dates } from '../conversions/dates';
import { PeriodType } from '../units/constants';
import { Periods } from '../units/periods';
import { Math } from './math';

export function add (timestamp : number, amount : number, unit : string | PeriodType) : number {
    const addend = Math.Numbers.multiply(amount, Periods.find(unit).milliseconds);
    return Math.Numbers.add(timestamp, addend);
}

export function subtract (timestamp : number, amount : number, unit : string | PeriodType) : number {
    const subtrahend = Math.Numbers.multiply(amount, Periods.find(unit).milliseconds);
    return Math.Numbers.subtract(timestamp, subtrahend);
}

export function difference (left : number, right : number, unit ?: string | PeriodType) : number {
    const period = Periods.find(unit);

    if (period === Periods.MILLISECOND) {
        return left - right;
    }

    const leftParts = Dates.split(new Date(left), period.type);
    const rightParts = Dates.split(new Date(right), period.type);

    return Math.Numbers.difference(Dates.utc(leftParts), Dates.utc(rightParts), period.milliseconds);
}