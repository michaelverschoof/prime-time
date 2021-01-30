import * as Timestamps from './calc/timestamps';
import * as Format from './format/format';
import * as From from './from/from';
import { Timespan } from './types';
import * as Timezone from './units/timezone/timezone';

export default class PrimeTime {

    private timestamp : number;
    private region : string;
    private offset : number;

    constructor (timestamp : number) {
        this.timestamp = timestamp;
        this.region = '';
        this.offset = 0;
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
        const timestamp = timespan
            ? Timestamps.scale(this.timestamp, timespan)
            : this.timestamp;

        return From.timestamp(timestamp);
    }

    update (milliseconds : number) : PrimeTime {
        this.timestamp = milliseconds;
        return this;
    }

    /* Comparisons */

    difference (to : PrimeTime, timespan? : string | Timespan) : number {
        const fromTimestamp = Timestamps.offset(this.timestamp, this.offset);
        const toTimestamp = Timestamps.offset(to.timestamp, to.offset);

        return Timestamps.difference(fromTimestamp, toTimestamp, timespan);
    }

    after (other : PrimeTime, timespan? : string | Timespan, inclusivity? : boolean) : boolean {
        return this.difference(other, timespan) <= (inclusivity ? 0 : -1);
    }

    before (other : PrimeTime, timespan? : string | Timespan, inclusivity? : boolean) : boolean {
        return this.difference(other, timespan) >= (inclusivity ? 0 : 1);
    }

    between (from : PrimeTime, to : PrimeTime, timespan? : string | Timespan, inclusivity? : boolean) : boolean {
        return this.after(from, timespan, inclusivity) && this.before(to, timespan, inclusivity);
    }

    equals (other : PrimeTime, timespan? : string | Timespan) : boolean {
        return this.difference(other, timespan) === 0;
    }

    /* Formatting */

    format (format? : string, locale? : string, timezone? : string) : string {
        const timestamp = Timestamps.offset(this.timestamp, this.offset);

        return Format.format(timestamp, format, locale, timezone);
    }

    localise (format? : string, locale? : string, timezone? : string) : string {
        const timestamp = Timestamps.offset(this.timestamp, this.offset);

        return Format.localise(timestamp, format, locale, timezone);
    }

    customise (format : string, locale? : string, timezone? : string) : string {
        const timestamp = Timestamps.offset(this.timestamp, this.offset);

        return Format.customise(timestamp, format, locale, timezone);
    }

    gmt () : string {
        return Format.gmt(this.timestamp);
    }

    utc () : string {
        return this.gmt();
    }

    /* Timezones */

    timezone (timezone : string) : PrimeTime {
        const zone = Timezone.get(this.timestamp, timezone);
        this.region = zone.region;
        this.offset = zone.offset;

        return this;
    }

    /* Getters */

    getTimestamp () : number {
        return this.timestamp;
    }

}
