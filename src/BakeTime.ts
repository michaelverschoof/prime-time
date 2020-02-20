import { Dates } from './lib/conversions/dates';
import { PeriodType } from './lib/units/constants';

import { Math } from './lib/math/math';

export function baketime (date ?: number | string | Date | BakeTime) {
    if (date instanceof BakeTime) {
        return date;
    }
    return new BakeTime(Dates.extract(date));
}

export class BakeTime {

    private timestamp : number;
    private readonly date : Date;

    constructor (timestamp : number) {
        this.timestamp = timestamp;
        this.date = new Date(timestamp);
    }

    add (amount : number, unit : string | PeriodType) : BakeTime {
        const sum = Math.Timestamps.add(this.timestamp, amount, unit);
        return this.update(sum);
    }

    subtract (amount : number, unit : string | PeriodType) : BakeTime {
        const difference = Math.Timestamps.subtract(this.timestamp, amount, unit);
        return this.update(difference);
    }

    difference (other : BakeTime, unit ?: string | PeriodType) : number {
        return Math.Timestamps.difference(this.timestamp, other.timestamp, unit)
    }

    after (date : BakeTime, unit ?: string | PeriodType, inclusivity ?: boolean) : boolean {
        return this.difference(date, unit) >= (inclusivity ? 0 : 1);
    }

    before (date : BakeTime, unit ?: string | PeriodType, inclusivity ?: boolean) : boolean {
        return this.difference(date, unit) <= (inclusivity ? 0 : -1);
    }

    between (from : BakeTime, to : BakeTime, unit ?: string | PeriodType, inclusivity ?: boolean) : boolean {
        return this.after(from, unit, inclusivity) && this.before(to, unit, inclusivity);
    }

    equals (date : BakeTime, unit ?: string | PeriodType) : boolean {
        return this.difference(date, unit) === 0;
    }

    update (milliseconds : number) : BakeTime {
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
