import { FormattingValues, Formats } from '../../types';

const fixed = { day: FormattingValues.NUMERIC_FIXED };
const flexible = { day: FormattingValues.NUMERIC_FLEXIBLE };

const long = { weekday: FormattingValues.TEXTUAL_LONG };
const short = { weekday: FormattingValues.TEXTUAL_SHORT };

const hour12 = { hour12: true };
const hour24 = { hour12: false };

const formats : Formats = {
    'day': fixed,
    'day-long': fixed,
    'day-short': flexible,
    'D': flexible,
    'DD': fixed,

    'weekday': long,
    'weekday-long': long,
    'weekday-short': short,
    'WD': short,
    'WDD': long,

    'AMPM': hour12,
    '12-hour': hour12,
    '24-hour': hour24
};

export { formats };