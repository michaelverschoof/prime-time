import { KeyValuePair, LocaliseOptions } from '../../../types';
import { LocalisedFormats } from '../constants';

const fixed : KeyValuePair = { month: LocalisedFormats.NUMERIC_FIXED };
const flexible : KeyValuePair = { month: LocalisedFormats.NUMERIC_FLEXIBLE };
const long : KeyValuePair = { month: LocalisedFormats.TEXTUAL_LONG };
const short : KeyValuePair = { month: LocalisedFormats.TEXTUAL_SHORT };

export const localised : LocaliseOptions = {
    'month': long,
    'month-long': long,
    'month-short': short,
    'month-number': fixed,
    'month-number-long': fixed,
    'month-number-short': flexible,
    'M': flexible,
    'MM': fixed,
    'MMM': short,
    'MMMM': long
};

