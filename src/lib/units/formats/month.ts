import { KeyValuePairs, LocaliseOptions } from '../../../types';
import { LocalisedFormats } from '../constants';

const long : KeyValuePairs = { month: LocalisedFormats.TEXTUAL_LONG };
const short : KeyValuePairs = { month: LocalisedFormats.TEXTUAL_SHORT };

export const localised : LocaliseOptions = {
    'month': long,
    'month-long': long,
    'month-short': short
};

export const customised : KeyValuePairs = {};
