import { KeyValuePairs, LocaliseOptions } from '../../../types';
import { LocalisedFormats } from '../constants';

const long : KeyValuePairs = { weekday: LocalisedFormats.TEXTUAL_LONG };
const short : KeyValuePairs = { weekday: LocalisedFormats.TEXTUAL_SHORT };

export const localised : LocaliseOptions = {
    'weekday': long,
    'weekday-long': long,
    'weekday-short': short
};

export const customised : KeyValuePairs = {};
