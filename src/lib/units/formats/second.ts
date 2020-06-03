import { FormattingOption, FormattingValues, Formats } from '../../types';

const fixed : FormattingOption = { second: FormattingValues.NUMERIC_FIXED };
const flexible : FormattingOption = { second: FormattingValues.NUMERIC_FLEXIBLE };

const formats : Formats = {
    'second': fixed,
    'second-long': fixed,
    'second-short': flexible,
    's': flexible,
    'ss': fixed
};

export { formats };