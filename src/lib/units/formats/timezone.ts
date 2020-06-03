import { FormattingOption, FormattingValues, Formats } from '../../types';

const long : FormattingOption = { timeZoneName: FormattingValues.TEXTUAL_LONG };
const short : FormattingOption = { timeZoneName: FormattingValues.TEXTUAL_SHORT };

const formats : Formats = {
    'timezone': long,
    'timezone-long': long,
    'timezone-short': short,
    'TZ': short,
    'TZZ': long
};

export { formats };