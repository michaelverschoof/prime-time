import PrimeError from '../../error/prime-error';
import { Formats, FormattingOptions } from '../types';
import * as Day from './formats/day';
import * as Hour from './formats/hour';
import * as Minute from './formats/minute';
import * as Millisecond from './formats/millisecond';
import * as Month from './formats/month';
import * as Second from './formats/second';
import * as Year from './formats/year';
import * as Timezone from './formats/timezone';

const formats : Formats = {
    ...Year.formats,
    ...Month.formats,
    ...Day.formats,
    ...Hour.formats,
    ...Minute.formats,
    ...Second.formats,
    ...Millisecond.formats,
    ...Timezone.formats
};

function option (key : string) : FormattingOptions {
    const search = key.trim();
    if (search in formats) {
        return formats[search];
    }

    throw new PrimeError('Format: "' + search + '" not found');
}

function options (formats : string[]) : FormattingOptions {
    return formats.map(item => item.trim()).reduce(
        (options : FormattingOptions, item : string) => (
            { ...options, ...option(item) }
        ), {}
    );
}

function find (key : string) : string {
    return Object.keys(option(key))[0];
}

export {
    options,
    find
};
