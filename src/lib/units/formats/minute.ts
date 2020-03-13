import { KeyValuePair, LocaliseOptions } from '../../../types';
import { LocalisedFormats } from '../constants';

const fixed : KeyValuePair = { minute: LocalisedFormats.NUMERIC_FIXED };
const flexible : KeyValuePair = { minute: LocalisedFormats.NUMERIC_FLEXIBLE };

export const localised : LocaliseOptions = {
    'minute': fixed,
    'minute-long': fixed,
    'minute-short': flexible,
    'm': flexible,
    'mm': fixed
};
