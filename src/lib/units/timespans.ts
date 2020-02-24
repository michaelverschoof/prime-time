import BakingError from '../../error/BakingError';
import { Timespan } from '../../types';

export const MILLISECOND : Timespan = { milliseconds: 1, aliases: ['milliseconds', 'millisecond'] };
export const SECOND : Timespan = { milliseconds: 1000, aliases: ['seconds', 'second'] };
export const MINUTE : Timespan = { milliseconds: 60000, aliases: ['minutes', 'minute'] };
export const HOUR : Timespan = { milliseconds: 3600000, aliases: ['hours', 'hour'] };
export const DAY : Timespan = { milliseconds: 86400000, aliases: ['days', 'day'] };
export const WEEK : Timespan = { milliseconds: 604800000, aliases: ['weeks', 'week'] };
export const MONTH : Timespan = { milliseconds: 2629746000, aliases: ['months', 'month'] };
export const YEAR : Timespan = { milliseconds: 31556952000, aliases: ['years', 'year'] };

const timespans : Timespan[] = [ MILLISECOND, SECOND, MINUTE, HOUR, DAY, WEEK, MONTH, YEAR ];

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
        return timespans.find(timespan => timespan.milliseconds === unit.milliseconds);
    }

    throw new BakingError('The provided unit (' + unit + ') is not allowed');
}