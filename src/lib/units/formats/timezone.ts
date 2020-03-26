import { KeyValuePair, LocalisedFormats, LocaliseOptions } from '../../types';

const long : KeyValuePair = { timeZoneName: LocalisedFormats.TEXTUAL_LONG };
const short : KeyValuePair = { timeZoneName: LocalisedFormats.TEXTUAL_SHORT };

export const localised : LocaliseOptions = {
    'timezone': long,
    'timezone-long': long,
    'timezone-short': short,
    'TZ': short,
    'TZZ': long
};
