import { FormattingOption, FormattingValues, Formats } from '../../types';

const fixed : FormattingOption = { hour: FormattingValues.NUMERIC_FIXED };
const flexible : FormattingOption = { hour: FormattingValues.NUMERIC_FLEXIBLE };

const formats : Formats = {
    'hour': fixed,
    'hour-long': fixed,
    'hour-short': flexible,
    'H': flexible,
    'HH': fixed
};

export { formats };