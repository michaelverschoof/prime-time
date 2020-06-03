import { FormattingOption, FormattingValues, Formats } from '../../types';

const fixed : FormattingOption = { minute: FormattingValues.NUMERIC_FIXED };
const flexible : FormattingOption = { minute: FormattingValues.NUMERIC_FLEXIBLE };

const formats : Formats = {
    'minute': fixed,
    'minute-long': fixed,
    'minute-short': flexible,
    'm': flexible,
    'mm': fixed
};

export { formats };