import { KeyValuePair, LocalisedFormats, LocaliseOptions } from '../../types';

const fixed : KeyValuePair = { day: LocalisedFormats.NUMERIC_FIXED };
const flexible : KeyValuePair = { day: LocalisedFormats.NUMERIC_FLEXIBLE };
const long : KeyValuePair = { weekday: LocalisedFormats.TEXTUAL_LONG };
const short : KeyValuePair = { weekday: LocalisedFormats.TEXTUAL_SHORT };

export const localised : LocaliseOptions = {
    'day': fixed,
    'day-long': fixed,
    'day-short': flexible,
    'weekday': long,
    'weekday-long': long,
    'weekday-short': short,
    'D': flexible,
    'DD': fixed,
    'WD': short,
    'WDD': long
};
