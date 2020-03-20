import { Calc } from './lib/calc/calc';
import { Format } from './lib/format/format';
import { From } from './lib/from/from';
import { Timespan } from './types.d';

const Timestamps = Calc.Timestamps;

export function primetime (from ?: number | string | Date | PrimeTime) : PrimeTime {
    return From.anything(from);
}

export class PrimeTime {

    private timestamp : number;

    constructor (timestamp : number) {
        this.timestamp = timestamp;
    }

    add (amount : number, timespan : string | Timespan) : PrimeTime {
        const sum = Timestamps.add(this.timestamp, amount, timespan);
        return this.update(sum);
    }

    subtract (amount : number, timespan : string | Timespan) : PrimeTime {
        const difference = Timestamps.subtract(this.timestamp, amount, timespan);
        return this.update(difference);
    }

    clone (timespan ?: string | Timespan) : PrimeTime {
        const timestamp = timespan ? Timestamps.scale(this.timestamp, timespan) : this.timestamp;
        return From.timestamp(timestamp);
    }

    to (timespan : string | Timespan) : PrimeTime {
        const timestamp = Timestamps.scale(this.timestamp, timespan);
        return this.update(timestamp);
    }

    difference (to : PrimeTime, timespan ?: string | Timespan) : number {
        return Timestamps.difference(this.timestamp, to.timestamp, timespan)
    }

    after (other : PrimeTime, timespan ?: string | Timespan, inclusivity ?: boolean) : boolean {
        return this.difference(other, timespan) <= (inclusivity ? 0 : -1);
    }

    before (other : PrimeTime, timespan ?: string | Timespan, inclusivity ?: boolean) : boolean {
        return this.difference(other, timespan) >= (inclusivity ? 0 : 1);
    }

    between (from : PrimeTime, to : PrimeTime, timespan ?: string | Timespan, inclusivity ?: boolean) : boolean {
        return this.after(from, timespan, inclusivity) && this.before(to, timespan, inclusivity);
    }

    equals (other : PrimeTime, timespan ?: string | Timespan) : boolean {
        return this.difference(other, timespan) === 0;
    }

    leapYear () : boolean {
        return Timestamps.leapYear(this.timestamp);
    }

    format (format ?: string, locale ?: string) {
        return Format.format(this.timestamp, format, locale);
    }

    localise (format ?: string, locale ?: string) {
        return Format.localise(this.timestamp, format, locale);
    }

    customise (format : string, locale ?: string) {
        return Format.customise(this.timestamp, format, locale);
    }

    update (milliseconds : number) : PrimeTime {
        this.timestamp = milliseconds;
        return this;
    }

    getTimestamp () : number {
        return this.timestamp;
    }

}
