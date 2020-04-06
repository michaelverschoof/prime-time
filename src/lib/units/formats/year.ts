import { FormattingOption, FormattingValues, FormattingOptions } from '../../types';

const fixed : FormattingOption = { year: FormattingValues.NUMERIC_FIXED };
const flexible : FormattingOption = { year: FormattingValues.NUMERIC_FLEXIBLE };

export const options : FormattingOptions = {
    'year': flexible,
    'year-long': flexible,
    'year-short': fixed,
    'Y': fixed,
    'YY': flexible
};
