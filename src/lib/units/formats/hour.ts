import { KeyValuePair, LocalisedFormats, LocaliseOptions } from '../formats';

const fixed : KeyValuePair = { hour: LocalisedFormats.NUMERIC_FIXED };
const flexible : KeyValuePair = { hour: LocalisedFormats.NUMERIC_FLEXIBLE };

export const localised : LocaliseOptions = {
    'hour': fixed,
    'hour-long': fixed,
    'hour-short': flexible,
    'H': flexible,
    'HH': fixed
};
