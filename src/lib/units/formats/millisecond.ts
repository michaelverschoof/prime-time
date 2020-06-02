import { FormattingOption, FormattingOptions } from '../../types';

const fixed : FormattingOption = { fractionalSecondDigits: 3 };

export const options : FormattingOptions = {
    'millisecond': fixed,
    'ms': fixed
};
