import { FormattingOption, FormattingValues, Formats } from '../../types';

const fixed : FormattingOption = { month: FormattingValues.NUMERIC_FIXED };
const flexible : FormattingOption = { month: FormattingValues.NUMERIC_FLEXIBLE };
const long : FormattingOption = { month: FormattingValues.TEXTUAL_LONG };
const short : FormattingOption = { month: FormattingValues.TEXTUAL_SHORT };

const formats : Formats = {
    'month': long,
    'month-long': long,
    'month-short': short,
    'month-number': fixed,
    'month-number-long': fixed,
    'month-number-short': flexible,
    'M': flexible,
    'MM': fixed,
    'MMM': short,
    'MMMM': long
};

export { formats };