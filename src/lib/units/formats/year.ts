import { KeyValuePair, LocalisedFormats, LocaliseOptions } from '../../types';

const fixed : KeyValuePair = { year: LocalisedFormats.NUMERIC_FIXED };
const flexible : KeyValuePair = { year: LocalisedFormats.NUMERIC_FLEXIBLE };

export const localised : LocaliseOptions = {
    'year': flexible,
    'year-long': flexible,
    'year-short': fixed,
    'Y': fixed,
    'YY': flexible
};
