import { FormattingOption, FormattingValues, FormattingOptions } from '../../types';

const fixed : FormattingOption = { minute: FormattingValues.NUMERIC_FIXED };
const flexible : FormattingOption = { minute: FormattingValues.NUMERIC_FLEXIBLE };

export const options : FormattingOptions = {
    'minute': fixed,
    'minute-long': fixed,
    'minute-short': flexible,
    'm': flexible,
    'mm': fixed
};
