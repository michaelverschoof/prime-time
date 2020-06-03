import { FormattingValues, Formats } from '../../types';

const fixed = { month: FormattingValues.NUMERIC_FIXED };
const flexible = { month: FormattingValues.NUMERIC_FLEXIBLE };
const long = { month: FormattingValues.TEXTUAL_LONG };
const short = { month: FormattingValues.TEXTUAL_SHORT };

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