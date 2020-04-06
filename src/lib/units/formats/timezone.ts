import { FormattingOption, FormattingValues, FormattingOptions } from '../../types';

const long : FormattingOption = { timeZoneName: FormattingValues.TEXTUAL_LONG };
const short : FormattingOption = { timeZoneName: FormattingValues.TEXTUAL_SHORT };

export const options : FormattingOptions = {
    'timezone': long,
    'timezone-long': long,
    'timezone-short': short,
    'TZ': short,
    'TZZ': long
};
