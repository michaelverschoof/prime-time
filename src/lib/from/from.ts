// TODO Tests

import BakingError from '../../error/BakingError';
import { PrimeTime } from '../../prime-time';

function anything (value ?: number | string | Date | PrimeTime) : PrimeTime {
    if (!value) {
        return new PrimeTime(Date.now());
    }

    if (value instanceof PrimeTime) {
        return value.clone();
    }

    if (value instanceof Date) {
        return date(value);
    }

    if (typeof value === 'number') {
        return timestamp(value);
    }

    return string(value);
}

function date (date : Date) : PrimeTime {
    return new PrimeTime(date.getTime());
}

function timestamp (date : number) : PrimeTime {
    return new PrimeTime(date);
}

function string (date : string) : PrimeTime {
    let parsed = Date.parse(date);
    if (isNaN(parsed)) {
        throw new BakingError('The provided date string could not be parsed');
    }

    return new PrimeTime(parsed);
}

export const From = {
    anything,
    date,
    string,
    timestamp
};