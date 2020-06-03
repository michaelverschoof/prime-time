import { FormattingValues, Formats } from '../../types';

const fixed = { minute: FormattingValues.NUMERIC_FIXED };
const flexible = { minute: FormattingValues.NUMERIC_FLEXIBLE };

const formats : Formats = {
    'minute': fixed,
    'minute-long': fixed,
    'minute-short': flexible,
    'm': flexible,
    'mm': fixed
};

export { formats };