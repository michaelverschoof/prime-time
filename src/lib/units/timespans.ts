import PrimeError from '../../error/prime-error';
import { Timespan } from '../../types';
import Day from './timespans/day';
import Hour from './timespans/hour';
import MilliSecond from './timespans/millisecond';
import Minute from './timespans/minute';
import Month from './timespans/month';
import Second from './timespans/second';
import Year from './timespans/year';

export const MILLISECOND : Timespan = new MilliSecond();
export const SECOND : Timespan = new Second();
export const MINUTE : Timespan = new Minute();
export const HOUR : Timespan = new Hour();
export const DAY : Timespan = new Day();
export const MONTH : Timespan = new Month();
export const YEAR : Timespan = new Year();

const timespans : Timespan[] = [ MILLISECOND, SECOND, MINUTE, HOUR, DAY, MONTH, YEAR ];

export function find (unit ?: string | Timespan) : Timespan {
    if (!unit) {
        return MILLISECOND;
    }

    if (typeof unit === 'string') {
        const search = unit.toLowerCase();
        const found = timespans.find(timespan => timespan.aliases.includes(search)) || null;
        if (found !== null) {
            return found;
        }
    }

    if (typeof unit === 'object' && 'milliseconds' in unit) {
        return <Timespan> timespans.find(timespan => timespan.milliseconds === unit.milliseconds);
    }

    throw new PrimeError('The provided unit (' + unit + ') is not allowed');
}