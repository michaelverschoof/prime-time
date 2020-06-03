import { anything as from } from './lib/from/from';
import PrimeTime from './lib/prime-time';
import { Timespans } from './lib/units/timespans'

function primetime (value? : number | string | Date | PrimeTime) : PrimeTime {
    return from(value);
}

export {
    primetime,
    PrimeTime,
    Timespans
};
