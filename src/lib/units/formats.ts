import PrimeError from '../../error/prime-error';
import * as Day from './formats/day';
import * as Hour from './formats/hour';
import * as Minute from './formats/minute';
import * as Month from './formats/month';
import * as Second from './formats/second';
import * as Year from './formats/year';

export enum LocalisedFormats {
    NUMERIC_FIXED = '2-digit',
    NUMERIC_FLEXIBLE = 'numeric',
    TEXTUAL_LONG = 'long',
    TEXTUAL_SHORT = 'short'
}

export interface KeyValuePair {
    [key : string] : string
}

export interface LocaliseOptions {
    [key : string] : KeyValuePair
}

const localised : LocaliseOptions = {
    ...Year.localised,
    ...Month.localised,
    ...Day.localised,
    ...Hour.localised,
    ...Minute.localised,
    ...Second.localised
};

export function find (key : string) : KeyValuePair {
    const search = key.trim();
    if (search in localised) {
        return localised[search];
    }

    throw new PrimeError('Format: "' + search + '" not found');
}

export function options (formats : string[]) : KeyValuePair {
    return formats.map(item => item.trim()).reduce(
        (options : KeyValuePair, item : string) => (
            { ...options, ...find(item) }
        ), {}
    );
}

export function timespan (key : string) : string {
    return Object.keys(find(key))[0];
}
