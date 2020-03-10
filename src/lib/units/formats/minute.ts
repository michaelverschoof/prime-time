import { KeyValuePairs, LocaliseOptions } from '../../../types';
import { LocalisedFormats } from '../constants';

const fixed : KeyValuePairs = { minute: LocalisedFormats.NUMERIC_FIXED };
const flexible : KeyValuePairs = { minute: LocalisedFormats.NUMERIC_FLEXIBLE };

export const localised : LocaliseOptions = {
    'minute': fixed,
    'minute-long': fixed,
    'minute-short': flexible
};

export const customised : KeyValuePairs = {};
