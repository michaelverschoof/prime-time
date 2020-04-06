import { KeyValuePair, LocalisedFormats, LocaliseOptions } from '../../types';

const fixed : KeyValuePair = { day: LocalisedFormats.NUMERIC_FIXED };
const flexible : KeyValuePair = { day: LocalisedFormats.NUMERIC_FLEXIBLE };

const long : KeyValuePair = { weekday: LocalisedFormats.TEXTUAL_LONG };
const short : KeyValuePair = { weekday: LocalisedFormats.TEXTUAL_SHORT };

const twelve : KeyValuePair = { hour12 : true };
const twentyfour : KeyValuePair = { hour12 : false };

export const localised : LocaliseOptions = {
    'day': fixed,
    'day-long': fixed,
    'day-short': flexible,
    'D': flexible,
    'DD': fixed,

    'weekday': long,
    'weekday-long': long,
    'weekday-short': short,
    'WD': short,
    'WDD': long,

    'AMPM': twelve,
    '12-hour': twelve,
    '24-hour': twentyfour
};
