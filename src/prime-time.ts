import { Dates } from './lib/conversions/dates';
import { Math } from './lib/math/math';
import { Timespan } from './types';

const Timestamps = Math.Timestamps;

export function primetime (date ?: number | string | Date | PrimeTime) {
    if (date instanceof PrimeTime) {
        return date;
    }
    return new PrimeTime(Dates.extract(date));
}

export class PrimeTime {

    private timestamp : number;
    private readonly date : Date;

    constructor (timestamp : number) {
        this.timestamp = timestamp;
        this.date = new Date(timestamp);
    }

    add (amount : number, unit : string | Timespan) : PrimeTime {
        const sum = Timestamps.add(this.timestamp, amount, unit);
        return this.update(sum);
    }

    subtract (amount : number, unit : string | Timespan) : PrimeTime {
        const difference = Timestamps.subtract(this.timestamp, amount, unit);
        return this.update(difference);
    }

    difference (other : PrimeTime, unit ?: string | Timespan) : number {
        return Timestamps.difference(this.timestamp, other.timestamp, unit)
    }

    after (date : PrimeTime, unit ?: string | Timespan, inclusivity ?: boolean) : boolean {
        return this.difference(date, unit) >= (inclusivity ? 0 : 1);
    }

    before (date : PrimeTime, unit ?: string | Timespan, inclusivity ?: boolean) : boolean {
        return this.difference(date, unit) <= (inclusivity ? 0 : -1);
    }

    between (from : PrimeTime, to : PrimeTime, unit ?: string | Timespan, inclusivity ?: boolean) : boolean {
        return this.after(from, unit, inclusivity) && this.before(to, unit, inclusivity);
    }

    equals (date : PrimeTime, unit ?: string | Timespan) : boolean {
        return this.difference(date, unit) === 0;
    }

    update (milliseconds : number) : PrimeTime {
        this.timestamp = milliseconds;
        this.date.setTime(milliseconds);
        return this;
    }

    getTimestamp () : number {
        return this.timestamp;
    }

    getDate () : Date {
        return this.date;
    }
}
