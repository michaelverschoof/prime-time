import { FormattingValues, Formats } from '../../types';

const fixed = { hour: FormattingValues.NUMERIC_FIXED };
const flexible = { hour: FormattingValues.NUMERIC_FLEXIBLE };

const formats : Formats = {
    'hour': fixed,
    'hour-long': fixed,
    'hour-short': flexible,
    'H': flexible,
    'HH': fixed
};

export { formats };