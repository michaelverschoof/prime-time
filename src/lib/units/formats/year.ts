import { FormattingOption, FormattingValues, Formats } from '../../types';

const fixed : FormattingOption = { year: FormattingValues.NUMERIC_FIXED };
const flexible : FormattingOption = { year: FormattingValues.NUMERIC_FLEXIBLE };

const formats : Formats = {
    'year': flexible,
    'year-long': flexible,
    'year-short': fixed,
    'Y': fixed,
    'YY': flexible
};

export { formats };