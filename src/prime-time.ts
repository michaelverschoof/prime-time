import * as From from './lib/from/from';
import PrimeTime from './lib/prime-time';
import { Timespan } from './lib/types';

function primetime (value? : number | string | Date | PrimeTime) : PrimeTime {
    return From.anything(value);
}

export { primetime, Timespan };
