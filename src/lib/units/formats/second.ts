import { KeyValuePair, LocalisedFormats, LocaliseOptions } from '../formats';

const fixed : KeyValuePair = { second: LocalisedFormats.NUMERIC_FIXED };
const flexible : KeyValuePair = { second: LocalisedFormats.NUMERIC_FLEXIBLE };

export const localised : LocaliseOptions = {
    'second': fixed,
    'second-long': fixed,
    'second-short': flexible,
    's': flexible,
    'ss': fixed
};
