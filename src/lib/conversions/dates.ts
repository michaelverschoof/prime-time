import BakingError from '../../error/BakingError';
import { Timespan } from '../../types';
import { Units } from '../units/units';

const Timespans = Units.Timespans;

// TODO: Remove namespace
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

    export function split (date : Date, unit : Timespan) : number[] {
        const parts = [ date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds(), date.getUTCMilliseconds() ];
        switch (unit) {
            case Timespans.YEAR:
                return parts.slice(0, 1);
            case Timespans.MONTH:
                return parts.slice(0, 2);
            case Timespans.WEEK:
            case Timespans.DAY:
                return parts.slice(0, 3);
            case Timespans.HOUR:
                return parts.slice(0, 4);
            case Timespans.MINUTE:
                return parts.slice(0, 5);
            case Timespans.SECOND:
                return parts.slice(0, 6);
            case Timespans.MILLISECOND:
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