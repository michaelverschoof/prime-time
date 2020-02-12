import { Comparisons } from './lib/math/comparisons';
import { Equations } from './lib/math/equations';
import { Dates } from './lib/conversions/dates';
import { PeriodType } from './lib/units/constants';
import { Periods } from './lib/units/periods';

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
        const addend = Equations.multiply(amount, Periods.find(unit).milliseconds);
        const sum = Equations.add(this.timestamp, addend);
        return this.update(sum);
    }

    subtract (amount : number, unit : string | PeriodType) : BakeTime {
        const subtrahend = Equations.multiply(amount, Periods.find(unit).milliseconds);
        const difference = Equations.subtract(this.timestamp, subtrahend);
        return this.update(difference);
    }

    difference (other : BakeTime, unit ?: string | PeriodType) : number {
        const period = Periods.find(unit);

        if (period === Periods.MILLISECOND) {
            return this.getTimestamp() - other.getTimestamp();
        }

        const thisParts = Dates.split(this.date, period.type);
        const otherParts = Dates.split(other.date, period.type);

        return Comparisons.difference(Dates.utc(thisParts), Dates.utc(otherParts), period.milliseconds);
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
