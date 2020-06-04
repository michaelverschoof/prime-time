import * as From from './lib/from/from';
import PrimeTime from './lib/prime-time';

function primetime (value? : number | string | Date | PrimeTime) : PrimeTime {
    return From.anything(value);
}

export { primetime };
