import { FormattingOption, FormattingValues, FormattingOptions } from '../../types';

const fixed : FormattingOption = { hour: FormattingValues.NUMERIC_FIXED };
const flexible : FormattingOption = { hour: FormattingValues.NUMERIC_FLEXIBLE };

export const options : FormattingOptions = {
    'hour': fixed,
    'hour-long': fixed,
    'hour-short': flexible,
    'H': flexible,
    'HH': fixed
};
