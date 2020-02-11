import BakingError from '../../error/BakingError';
import { PeriodType } from '../units/constants';

export namespace Dates {

    export function extract (date ?: number | string | Date) : number {
        if (!date) {
            return Date.now();
        }

        if (typeof date === 'number') {
            return date;
        }

        if (date instanceof Date) {
            return date.getTime();
        }

        let parsed = Date.parse(date);
        if (isNaN(parsed)) {
            throw new BakingError('The provided date string could not be parsed');
        }

        return parsed;
    }

    export function split (date : Date, period : PeriodType) : number[] {
        const parts = [ date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds(), date.getUTCMilliseconds() ];
        switch (period) {
            case PeriodType.YEAR:
                return parts.slice(0, 1);
            case PeriodType.MONTH:
                return parts.slice(0, 2);
            case PeriodType.WEEK:
            case PeriodType.DAY:
                return parts.slice(0, 3);
            case PeriodType.HOUR:
                return parts.slice(0, 4);
            case PeriodType.MINUTE:
                return parts.slice(0, 5);
            case PeriodType.SECOND:
                return parts.slice(0, 6);
            case PeriodType.MILLISECOND:
            default:
                return parts;
        }
    }

    export function utc (parts : number[]) : number {
        if (parts.length === 1) {
            parts[1] = 0;
        }
        return Date.UTC(parts[0], parts[1], ...parts.splice(2));
    }
}