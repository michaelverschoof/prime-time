import PrimeError from '../../error/prime-error';
import { Temporal, Timespan } from '../types';
import Day from './temporal/day';
import Hour from './temporal/hour';
import Millisecond from './temporal/millisecond';
import Minute from './temporal/minute';
import Month from './temporal/month';
import Second from './temporal/second';
import Year from './temporal/year';

const temporals = {
    MILLISECOND: Millisecond,
    SECOND: Second,
    MINUTE: Minute,
    HOUR: Hour,
    DAY: Day,
    MONTH: Month,
    YEAR: Year
};

function find (unit? : string | Timespan) : Temporal {
    if (!unit) {
        return temporals.MILLISECOND;
    }

    const search = unit.toLowerCase();

    if (Object.values(Timespan).some(timespan => timespan === search)) {
        return <Temporal> Object.values(temporals).find(item => item.aliases.includes(search));
    }

    throw new PrimeError('The provided timespan (' + search + ') is not allowed');
}

export { find };
