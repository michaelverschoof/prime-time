import { FormattingValues, Formats } from '../../types';

const long = { timeZoneName: FormattingValues.TEXTUAL_LONG };
const short = { timeZoneName: FormattingValues.TEXTUAL_SHORT };

const formats : Formats = {
    'timezone': long,
    'timezone-long': long,
    'timezone-short': short,
    'TZ': short,
    'TZZ': long
};

export { formats };