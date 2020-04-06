import { KeyValuePair, LocaliseOptions } from '../../types';

const fixed : KeyValuePair = { fractionalSecondDigits: 3 };

export const localised : LocaliseOptions = {
    'millisecond': fixed,
    'ms': fixed,
};
