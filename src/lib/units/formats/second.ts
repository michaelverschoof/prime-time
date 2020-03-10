import { KeyValuePairs, LocaliseOptions } from '../../../types';
import { LocalisedFormats } from '../constants';

const fixed : KeyValuePairs = { second: LocalisedFormats.NUMERIC_FIXED };
const flexible : KeyValuePairs = { second: LocalisedFormats.NUMERIC_FLEXIBLE };

export const localised : LocaliseOptions = {
    'second': fixed,
    'second-long': fixed,
    'second-short': flexible
};

export const customised : KeyValuePairs = {};

