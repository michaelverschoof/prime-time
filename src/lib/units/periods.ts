import BakingError from '../../error/BakingError';
import { PeriodType } from './constants';

interface ReadablePeriod {
    readonly type : PeriodType;
    readonly alias : string;
    readonly milliseconds : number;
}

class Period implements ReadablePeriod {
    readonly type : PeriodType;
    readonly alias : string;
    readonly milliseconds : number;

    constructor (type : PeriodType, alias : string, milliseconds : number) {
        this.type = type;
        this.alias = alias;
        this.milliseconds = milliseconds;
    }
}

export namespace Periods {
    export const MILLISECOND = new Period(PeriodType.MILLISECOND, 'milliseconds', 1);
    export const SECOND = new Period(PeriodType.SECOND, 'seconds', 1000);
    export const MINUTE = new Period(PeriodType.MINUTE, 'minutes', 60000);
    export const HOUR = new Period(PeriodType.HOUR, 'hours', 3600000);
    export const DAY = new Period(PeriodType.DAY, 'days', 86400000);
    export const WEEK = new Period(PeriodType.WEEK, 'weeks', 604800000);
    export const MONTH = new Period(PeriodType.MONTH, 'months', 2629746000);
    export const YEAR = new Period(PeriodType.YEAR, 'years', 31556952000);

    const periods = [ MILLISECOND, SECOND, MINUTE, HOUR, DAY, WEEK, MONTH, YEAR ];

    export function find (unit ?: string | PeriodType) : Period {
        if (!unit) {
            return MILLISECOND;
        }

        const search = unit.toLowerCase();
        const found = periods.find(period => period.type === search || period.alias === search) || null;
        if (found !== null) {
            return found;
        }

        throw new BakingError('The provided unit is not allowed.\r\nAllowed values are: millisecond(s), second(s), minute(s), hour(s), day(s), week(s), month(s), year(s)');
    }
}
