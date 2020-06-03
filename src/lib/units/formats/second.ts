import { FormattingValues, Formats } from '../../types';

const fixed = { second: FormattingValues.NUMERIC_FIXED };
const flexible = { second: FormattingValues.NUMERIC_FLEXIBLE };

const formats : Formats = {
    'second': fixed,
    'second-long': fixed,
    'second-short': flexible,
    's': flexible,
    'ss': fixed
};

export { formats };