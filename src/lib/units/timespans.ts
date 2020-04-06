import PrimeError from '../../error/prime-error';
import { Timespan } from '../types';
import Day from './timespans/day';
import Hour from './timespans/hour';
import Millisecond from './timespans/millisecond';
import Minute from './timespans/minute';
import Month from './timespans/month';
import Second from './timespans/second';
import Year from './timespans/year';

export const MILLISECOND : Timespan = new Millisecond();
export const SECOND : Timespan = new Second();
export const MINUTE : Timespan = new Minute();
export const HOUR : Timespan = new Hour();
export const DAY : Timespan = new Day();
export const MONTH : Timespan = new Month();
export const YEAR : Timespan = new Year();

const timespans : Timespan[] = [ MILLISECOND, SECOND, MINUTE, HOUR, DAY, MONTH, YEAR ];

export function find (timespan ?: string | Timespan) : Timespan {
    if (!timespan) {
        return MILLISECOND;
    }

    if (typeof timespan === 'string') {
        const alias = timespan.toLowerCase();
        const found = timespans.find(item => item.aliases.includes(alias)) || null;
        if (found !== null) {
            return found;
        }
    }

    // TODO: Create a base object for all timespans to check with instanceof?
    if (typeof timespan === 'object' && 'milliseconds' in timespan) {
        return <Timespan> timespans.find(item => item.milliseconds === timespan.milliseconds);
    }

    throw new PrimeError('The provided unit (' + timespan + ') is not allowed');
}
