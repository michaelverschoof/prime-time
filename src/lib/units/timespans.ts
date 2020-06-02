import PrimeError from '../../error/prime-error';
import { Timespan, TimespanOptions } from '../types';
import Day from './timespans/day';
import Hour from './timespans/hour';
import Millisecond from './timespans/millisecond';
import Minute from './timespans/minute';
import Month from './timespans/month';
import Second from './timespans/second';
import Year from './timespans/year';

const Options : TimespanOptions = {
    MILLISECOND: new Millisecond(),
    SECOND: new Second(),
    MINUTE: new Minute(),
    HOUR: new Hour(),
    DAY: new Day(),
    MONTH: new Month(),
    YEAR: new Year()
};

function find (timespan? : string | Timespan) : Timespan {
    if (!timespan) {
        return Options.MILLISECOND;
    }

    if (typeof timespan === 'string') {
        const alias = timespan.toLowerCase();
        const found = Object.values(Options).find(item => item.aliases.includes(alias)) || null;
        if (found !== null) {
            return found;
        }
    }

    const found = Object.values(Options).find(item => item === timespan) || null;
    if (found !== null) {
        return found;
    }

    throw new PrimeError('The provided unit (' + timespan + ') is not allowed');
}

export {
    find,
    Options
};
