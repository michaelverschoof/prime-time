import { KeyValuePairs, LocaliseOptions } from '../../../types';
import { LocalisedFormats } from '../constants';

const fixed : KeyValuePairs = { day: LocalisedFormats.NUMERIC_FIXED };
const flexible : KeyValuePairs = { day: LocalisedFormats.NUMERIC_FLEXIBLE };

export const localised : LocaliseOptions = {
    'day': fixed,
    'day-long': fixed,
    'day-short': flexible
};

export const customised : KeyValuePairs = {};
