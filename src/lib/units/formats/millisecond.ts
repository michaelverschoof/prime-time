import { Formats } from '../../types';

const fixed = { fractionalSecondDigits: 3 };

const formats : Formats = {
    'millisecond': fixed,
    'ms': fixed
};

export { formats };