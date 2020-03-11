import { KeyValuePairs, LocaliseOptions } from '../../../types';
import { LocalisedFormats } from '../constants';

const fixed : KeyValuePairs = { year: LocalisedFormats.NUMERIC_FIXED };
const flexible : KeyValuePairs = { year: LocalisedFormats.NUMERIC_FLEXIBLE };

export const localised : LocaliseOptions = {
    'year': flexible,
    'year-long': flexible,
    'year-short': fixed
};

export const customised : KeyValuePairs = {};
