import { FormattingOption, FormattingValues, FormattingOptions } from '../../types';

const fixed : FormattingOption = { day: FormattingValues.NUMERIC_FIXED };
const flexible : FormattingOption = { day: FormattingValues.NUMERIC_FLEXIBLE };

const long : FormattingOption = { weekday: FormattingValues.TEXTUAL_LONG };
const short : FormattingOption = { weekday: FormattingValues.TEXTUAL_SHORT };

const hour12 : FormattingOption = { hour12: true };
const hour24 : FormattingOption = { hour12: false };

export const options : FormattingOptions = {
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
