import { KeyValuePairs, LocaliseOptions } from '../../../types';
import { LocalisedFormats } from '../constants';

const fixed : KeyValuePairs = { hour: LocalisedFormats.NUMERIC_FIXED };
const flexible : KeyValuePairs = { hour: LocalisedFormats.NUMERIC_FLEXIBLE };

export const localised : LocaliseOptions = {
    'hour': fixed,
    'hour-long': fixed,
    'hour-short': flexible
};

export const customised : KeyValuePairs = {};
