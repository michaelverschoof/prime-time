import PrimeError from '../../error/prime-error';
import { Formats, Options } from '../types';
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

function findOption (key : string) : Options {
    const search = key.trim();
    if (search in formats) {
        return formats[search];
    }

    throw new PrimeError('Format: "' + search + '" not found');
}

function findOptions (formats : string[]) : Options {
    return formats.map(item => item.trim()).reduce(
        (options : Options, item : string) => (
            { ...options, ...findOption(item) }
        ), {}
    );
}

function findType (key : string) : string {
    return Object.keys(findOption(key))[0];
}

export {
    findOptions as options,
    findType as type
};
