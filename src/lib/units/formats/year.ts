import { KeyValuePair, LocaliseOptions } from '../../../types';
import { LocalisedFormats } from '../constants';

const fixed : KeyValuePair = { year: LocalisedFormats.NUMERIC_FIXED };
const flexible : KeyValuePair = { year: LocalisedFormats.NUMERIC_FLEXIBLE };

export const localised : LocaliseOptions = {
    'year': flexible,
    'year-long': flexible,
    'year-short': fixed,
    'Y': fixed,
    'YY': flexible
};
