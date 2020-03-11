import { KeyValuePairs } from '../../types';
import { Units } from '../units/units';

const Formatter = Intl.DateTimeFormat;

function parse (format : string) : KeyValuePairs {
    return format.split(',').reduce(
        (options : KeyValuePairs, item : string) => (
            {...options, ...Units.Formats.localise(item)}
        ), {}
    );
}

function localise (timestamp : number, format ?: string, locale ?: string) : string {
    if (!locale || locale === '' || locale === 'local') {
        locale = navigator.language;
    }

    const locales = Formatter.supportedLocalesOf(locale);
    const options = format ? parse(format) : undefined;

    return Formatter(locales, options).format(timestamp);
}

export const Format = {
    localise
};
