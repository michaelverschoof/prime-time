import PrimeError from '../../error/prime-error';
import { Timespan } from '../types';
import Day from './timespans/day';
import Hour from './timespans/hour';
import Millisecond from './timespans/millisecond';
import Minute from './timespans/minute';
import Month from './timespans/month';
import Second from './timespans/second';
import Year from './timespans/year';

const Timespans = {
    MILLISECOND: Millisecond,
    SECOND: Second,
    MINUTE: Minute,
    HOUR: Hour,
    DAY: Day,
    MONTH: Month,
    YEAR: Year
};

function find (timespan? : string | Timespan) : Timespan {
    if (!timespan) {
        return Timespans.MILLISECOND;
    }

    if (typeof timespan === 'string') {
        const search = timespan.toLowerCase();
        const found = Object.values(Timespans).find(item => item.aliases.includes(search)) || null;
        if (found !== null) {
            return found;
        }
    }

    const found = Object.values(Timespans).find(item => item === timespan) || null;
    if (found !== null) {
        return found;
    }

    throw new PrimeError('The provided unit (' + timespan + ') is not allowed');
}

export { find };
