import { FormattingOption, Formats } from '../../types';

const fixed : FormattingOption = { fractionalSecondDigits: 3 };

const formats : Formats = {
    'millisecond': fixed,
    'ms': fixed
};

export { formats };