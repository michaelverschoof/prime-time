import { FormattingOption, FormattingValues, FormattingOptions } from '../../types';

const fixed : FormattingOption = { second: FormattingValues.NUMERIC_FIXED };
const flexible : FormattingOption = { second: FormattingValues.NUMERIC_FLEXIBLE };

export const options : FormattingOptions = {
    'second': fixed,
    'second-long': fixed,
    'second-short': flexible,
    's': flexible,
    'ss': fixed
};
