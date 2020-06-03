import { FormattingValues, Formats } from '../../types';

const fixed = { year: FormattingValues.NUMERIC_FIXED };
const flexible = { year: FormattingValues.NUMERIC_FLEXIBLE };

const formats : Formats = {
    'year': flexible,
    'year-long': flexible,
    'year-short': fixed,
    'Y': fixed,
    'YY': flexible
};

export { formats };