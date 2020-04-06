import { FormattingOption, FormattingValues, FormattingOptions } from '../../types';

const fixed : FormattingOption = { month: FormattingValues.NUMERIC_FIXED };
const flexible : FormattingOption = { month: FormattingValues.NUMERIC_FLEXIBLE };
const long : FormattingOption = { month: FormattingValues.TEXTUAL_LONG };
const short : FormattingOption = { month: FormattingValues.TEXTUAL_SHORT };

export const options : FormattingOptions = {
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

