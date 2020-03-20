import PrimeError from '../../error/prime-error';
import { Units } from '../units';
import DateTimeFormatPart = Intl.DateTimeFormatPart;

const Formatter = Intl.DateTimeFormat;
const regex = /{.*?}/g;

function format (timestamp : number, format ?: string, locale ?: string) : string {
    if (!locale || locale === '' || locale === 'local') {
        locale = navigator.language;
    }

    if (format && regex.test(format)) {
        return customisedFormat(timestamp, format, locale);
    }

    return localisedFormat(timestamp, format, locale);
}

function localisedFormat (timestamp : number, format ?: string, locale ?: string) : string {
    const locales = getLocales(locale);
    const options = getOptions(format?.split(','));

    return Formatter(locales, options).format(timestamp);
}

function customisedFormat (timestamp : number, format : string, locale ?: string) : string {
    const matches = format.match(regex)?.map(item => item.slice(1, -1));
    if (!matches) {
        throw new PrimeError('Format "' + format + '" could not be parsed');
    }

    const locales = getLocales(locale);
    const options = getOptions(matches);
    const formatted = Formatter(locales, options).formatToParts(timestamp).filter((item) => item.type !== 'literal');

    return format.replace(regex, (match) => getFormattedValue(match, formatted));
}

function getFormattedValue (key : string, formatted : DateTimeFormatPart[]) : string {
    const timespan = Units.Formats.timespan(key.slice(1, -1));
    // @ts-ignore
    return formatted.find((item => item.type === timespan)).value;
}

function getOptions (formats ?: string[]) {
    return formats && formats.length > 0
        ? Units.Formats.options(formats)
        : undefined;
}

function getLocales (locale ?: string) {
    return locale ? Formatter.supportedLocalesOf(locale) : undefined;
}

export const Format = {
    format,
    localise : localisedFormat,
    customise: customisedFormat
};
