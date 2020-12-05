import PrimeError from '../../src/error/prime-error';
import * as Format from '../../src/lib/format/format';
import { Locale, Location, timestamp } from '../variables';
import {
    FORMAT_LOCALISED_LONG, FORMAT_LOCALISED_SHORT, FORMAT_WRONG_LONG, FORMAT_WRONG_SHORT, RESULT_SHORT_US,
    RESULT_SHORT_GB, RESULT_SHORT_NL, RESULT_LOCALISED_US, RESULT_LOCALISED_GB, RESULT_LOCALISED_NL,
    RESULT_LOCALISED_NEW_YORK, RESULT_LOCALISED_LONDON, RESULT_LOCALISED_AMSTERDAM
} from './constants';

describe('Localise', () => {

    test('Providing timestamp', () => {
        let result = Format.localise(timestamp);
        expect(result).toBe(RESULT_SHORT_US);
    });

    test('Providing timestamp and locale', () => {
        let result = Format.localise(timestamp, undefined, Locale.US);
        expect(result).toBe(RESULT_SHORT_US);

        result = Format.localise(timestamp, undefined, Locale.GB);
        expect(result).toBe(RESULT_SHORT_GB);

        result = Format.localise(timestamp, undefined, Locale.NL);
        expect(result).toBe(RESULT_SHORT_NL);

        result = Format.localise(timestamp, undefined, 'non-existing-locale');
        expect(result).toBe(RESULT_SHORT_US);
    });

    test('Providing timestamp, locale and timezone', () => {
        let result = Format.localise(timestamp, undefined, Locale.US, Location.NEW_YORK);
        expect(result).toBe(RESULT_SHORT_US);

        result = Format.localise(timestamp, undefined, Locale.GB, Location.LONDON);
        expect(result).toBe(RESULT_SHORT_GB);

        result = Format.localise(timestamp, undefined, Locale.NL, Location.AMSTERDAM);
        expect(result).toBe(RESULT_SHORT_NL);

        result = Format.localise(timestamp, undefined, 'non-existing-locale', Location.NEW_YORK);
        expect(result).toBe(RESULT_SHORT_US);
    });

    test('Providing timestamp and format', () => {
        let result = Format.localise(timestamp, FORMAT_LOCALISED_LONG);
        expect(result).toBe(RESULT_LOCALISED_US);

        result = Format.localise(timestamp, FORMAT_LOCALISED_SHORT);
        expect(result).toBe(RESULT_LOCALISED_US);

        expect(() => Format.localise(timestamp, FORMAT_WRONG_LONG)).toThrowError(PrimeError);
        expect(() => Format.localise(timestamp, FORMAT_WRONG_SHORT)).toThrowError(PrimeError);
    });

    test('Providing timestamp, format and timezone', () => {
        let result = Format.localise(timestamp, FORMAT_LOCALISED_LONG, undefined, Location.NEW_YORK);
        expect(result).toBe(RESULT_LOCALISED_NEW_YORK);

        result = Format.localise(timestamp, FORMAT_LOCALISED_SHORT, undefined, Location.NEW_YORK);
        expect(result).toBe(RESULT_LOCALISED_NEW_YORK);

        expect(() => Format.localise(timestamp, FORMAT_WRONG_LONG, undefined, Location.NEW_YORK)).toThrowError(PrimeError);
        expect(() => Format.localise(timestamp, FORMAT_WRONG_SHORT, undefined, Location.NEW_YORK)).toThrowError(PrimeError);
    });

    test('Providing timestamp, format and locale', () => {
        let result = Format.localise(timestamp, FORMAT_LOCALISED_LONG, Locale.US);
        expect(result).toBe(RESULT_LOCALISED_US);

        result = Format.localise(timestamp, FORMAT_LOCALISED_LONG.replace(', millisecond', ''), Locale.GB);
        expect(result).toBe(RESULT_LOCALISED_GB);

        result = Format.localise(timestamp, FORMAT_LOCALISED_LONG, Locale.NL);
        expect(result).toBe(RESULT_LOCALISED_NL);

        result = Format.localise(timestamp, FORMAT_LOCALISED_SHORT, Locale.US);
        expect(result).toBe(RESULT_LOCALISED_US);

        result = Format.localise(timestamp, FORMAT_LOCALISED_SHORT.replace(', ms', ''), Locale.GB);
        expect(result).toBe(RESULT_LOCALISED_GB);

        result = Format.localise(timestamp, FORMAT_LOCALISED_SHORT, Locale.NL);
        expect(result).toBe(RESULT_LOCALISED_NL);

        result = Format.localise(timestamp, FORMAT_LOCALISED_LONG.replace(', second', ''), Locale.GB);
        expect(result).toBe(RESULT_LOCALISED_GB.replace(':02', ''));

        expect(() => Format.localise(timestamp, FORMAT_WRONG_LONG, Locale.US)).toThrowError(PrimeError);
        expect(() => Format.localise(timestamp, FORMAT_WRONG_LONG, Locale.GB)).toThrowError(PrimeError);
        expect(() => Format.localise(timestamp, FORMAT_WRONG_LONG, Locale.NL)).toThrowError(PrimeError);
        expect(() => Format.localise(timestamp, FORMAT_WRONG_SHORT, Locale.US)).toThrowError(PrimeError);
        expect(() => Format.localise(timestamp, FORMAT_WRONG_SHORT, Locale.GB)).toThrowError(PrimeError);
        expect(() => Format.localise(timestamp, FORMAT_WRONG_SHORT, Locale.NL)).toThrowError(PrimeError);
    });

    test('Providing timestamp, format, locale and timezone', () => {
        let result = Format.localise(timestamp, FORMAT_LOCALISED_LONG, Locale.US, Location.NEW_YORK);
        expect(result).toBe(RESULT_LOCALISED_NEW_YORK);

        result = Format.localise(timestamp, FORMAT_LOCALISED_LONG.replace(', millisecond', ''), Locale.GB, Location.LONDON);
        expect(result).toBe(RESULT_LOCALISED_LONDON);

        result = Format.localise(timestamp, FORMAT_LOCALISED_LONG, Locale.NL, Location.AMSTERDAM);
        expect(result).toBe(RESULT_LOCALISED_AMSTERDAM);

        result = Format.localise(timestamp, FORMAT_LOCALISED_SHORT, Locale.US, Location.NEW_YORK);
        expect(result).toBe(RESULT_LOCALISED_NEW_YORK);

        result = Format.localise(timestamp, FORMAT_LOCALISED_SHORT.replace(', ms', ''), Locale.GB, Location.LONDON);
        expect(result).toBe(RESULT_LOCALISED_LONDON);

        result = Format.localise(timestamp, FORMAT_LOCALISED_SHORT, Locale.NL, Location.AMSTERDAM);
        expect(result).toBe(RESULT_LOCALISED_AMSTERDAM);

        expect(() => Format.localise(timestamp, FORMAT_WRONG_LONG, Locale.US, Location.NEW_YORK)).toThrowError(PrimeError);
        expect(() => Format.localise(timestamp, FORMAT_WRONG_LONG, Locale.GB, Location.LONDON)).toThrowError(PrimeError);
        expect(() => Format.localise(timestamp, FORMAT_WRONG_LONG, Locale.NL, Location.AMSTERDAM)).toThrowError(PrimeError);
        expect(() => Format.localise(timestamp, FORMAT_WRONG_SHORT, Locale.US, Location.NEW_YORK)).toThrowError(PrimeError);
        expect(() => Format.localise(timestamp, FORMAT_WRONG_SHORT, Locale.GB, Location.LONDON)).toThrowError(PrimeError);
        expect(() => Format.localise(timestamp, FORMAT_WRONG_SHORT, Locale.NL, Location.AMSTERDAM)).toThrowError(PrimeError);
    });
});
