import PrimeError from '../../error/prime-error';
import { KeyValuePairs, LocaliseOptions } from '../../types';
import * as Day from './formats/day';
import * as Hour from './formats/hour';
import * as Minute from './formats/minute';
import * as Month from './formats/month';
import * as Second from './formats/second';
import * as Weekday from './formats/weekday';
import * as Year from './formats/year';

const localised : LocaliseOptions = {
    ...Year.localised,
    ...Month.localised,
    ...Weekday.localised,
    ...Day.localised,
    ...Hour.localised,
    ...Minute.localised,
    ...Second.localised
};

const customised : KeyValuePairs = {
    ...Year.customised,
    ...Month.customised,
    ...Weekday.customised,
    ...Day.customised,
    ...Hour.customised,
    ...Minute.customised,
    ...Second.customised
};

export function localise (key : string) : KeyValuePairs {
    const search = key.trim();
    if (search in localised) {
        return localised[search];
    }

    throw new PrimeError('Format: "' + search + '" not found');
}
