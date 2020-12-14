import { string } from '../../from/from';
import PrimeError from '../../../error/prime-error';
import { customise } from '../../format/format';
import { Timezone } from '../../types';
import Minute from '../temporal/minute';

function get (timestamp : number, timezone : string) : Timezone {
    validate(timezone);

    return {
        region: timezone,
        offset: offset(timestamp, timezone)
    }
}

function offset (timestamp : number, timezone : string) : number {
    const format = '{WD}, {DD} {MMM} {YY} {HH}:{mm}:{ss}';
    const shortTimezone = customise(timestamp, '{TZ}', 'en-US', timezone);
    const inUTC = customise(timestamp, format + ' UTC', 'en-US', timezone);
    const inTimezone = customise(timestamp, format + ' ' + shortTimezone, 'en-US', timezone);

    return -((string(inUTC).getTimestamp() - string(inTimezone).getTimestamp()) / Minute.milliseconds)
}

function validate (timezone : string) : void {
    if (!/^(africa|america|antarctica|asia|atlantic|australia|europe|indian|pacific)\/.{4,}$/.test(timezone.toLowerCase())) {
        throw new PrimeError('Timezone "' + timezone + '" could not be parsed')
    }
}

export { get }