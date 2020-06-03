import { Timestamps } from './calc';
import * as Format from './format/format';
import { timestamp as from } from './from/from';
import { Timespan } from './types';

export default class PrimeTime {

    private timestamp : number;
    private offset : number;
    private timezone : string;

    constructor (timestamp : number) {
        this.timestamp = timestamp;
        this.offset = 0;
        this.timezone = '';
    }

    /* Transformations */

    add (amount : number, timespan : string | Timespan) : PrimeTime {
        const sum = Timestamps.add(this.timestamp, amount, timespan);
        return this.update(sum);
    }

    subtract (amount : number, timespan : string | Timespan) : PrimeTime {
        const difference = Timestamps.subtract(this.timestamp, amount, timespan);
        return this.update(difference);
    }

    scale (timespan : string | Timespan) : PrimeTime {
        const timestamp = Timestamps.scale(this.timestamp, timespan);
        return this.update(timestamp);
    }

    clone (timespan? : string | Timespan) : PrimeTime {
        const timestamp = timespan ? Timestamps.scale(this.timestamp, timespan) : this.timestamp;
        return from(timestamp);
    }

    update (milliseconds : number) : PrimeTime {
        this.timestamp = milliseconds;
        return this;
    }

    /* Comparisons */

    difference (to : PrimeTime, timespan? : string | Timespan) : number {
        return Timestamps.difference(this.timestamp, to.timestamp, timespan);
    }

    after (other : PrimeTime, timespan? : string | Timespan, inclusivity? : boolean) : boolean {
        return this.difference(other, timespan) <= (inclusivity ? 0 : -1);
    }

    before (other : PrimeTime, timespan? : string | Timespan, inclusivity? : boolean) : boolean {
        return this.difference(other, timespan) >= (inclusivity ? 0 : 1);
    }

    between (from : PrimeTime, to : PrimeTime, timespan ? : string | Timespan, inclusivity ? : boolean) : boolean {
        return this.after(from, timespan, inclusivity) && this.before(to, timespan, inclusivity);
    }

    equals (other : PrimeTime, timespan? : string | Timespan) : boolean {
        return this.difference(other, timespan) === 0;
    }

    /* Formatting */

    format (format? : string, locale? : string) {
        return Format.format(this.timestamp, format, locale);
    }

    localise (format? : string, locale? : string) {
        return Format.localise(this.timestamp, format, locale);
    }

    customise (format : string, locale? : string) {
        return Format.customise(this.timestamp, format, locale);
    }

    /* Getters */

    getTimestamp () : number {
        return this.timestamp;
    }

}