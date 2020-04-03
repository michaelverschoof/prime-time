import PrimeError from '../../error/prime-error';
import { Units } from '../units';
import DateTimeFormatPart = Intl.DateTimeFormatPart;

const Formatter = Intl.DateTimeFormat;
const regex = /{.*?}/g;
const whitespaces = /\s+/g;

function format (timestamp : number, format ?: string, locale ?: string, timezone ?: string) : string {
    if (format && regex.test(format)) {
        return customisedFormat(timestamp, format, locale, timezone);
    }

    return localisedFormat(timestamp, format, locale, timezone);
}

function localisedFormat (timestamp : number, format ?: string, locale ?: string, timezone ?: string) : string {
    const locales = getLocales(locale);
    const options = getOptions(format?.split(','), timezone);

    return Formatter(locales, options).format(timestamp);
}

function customisedFormat (timestamp : number, format : string, locale ?: string, timezone ?: string) : string {
    const matches = format.match(regex)?.map(item => item.slice(1, -1));
    if (!matches) {
        throw new PrimeError('Format "' + format + '" could not be parsed');
    }

    const locales = getLocales(locale);
    const options = getOptions(matches, timezone);
    const formatted = Formatter(locales, options).formatToParts(timestamp).filter((item) => item.type !== 'literal');

    return format.replace(regex, (match) => getFormattedValue(match, formatted)).replace(whitespaces, ' ');
}

function getFormattedValue (key : string, formatted : DateTimeFormatPart[]) : string {
    const timespan = Units.Formats.timespan(key.slice(1, -1));
    const type = timespan === 'hour12' ? 'dayperiod' : timespan;

    // @ts-ignore
    return formatted.find((item => item.type === type)).value;
}

function getOptions (formats ?: string[], timezone ?: string) {
    const options = formats && formats.length > 0
        ? Units.Formats.options(formats)
        : {};
    options.timeZone = timezone || 'UTC';

    return options;
}

function getLocales (locale ?: string) {
    if (!locale || locale === '' || locale === 'local') {
        locale = navigator.language;
    }

    return Formatter.supportedLocalesOf(locale);
}

export const Format = {
    format,
    localise : localisedFormat,
    customise: customisedFormat
};
