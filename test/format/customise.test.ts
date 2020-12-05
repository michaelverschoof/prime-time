import PrimeError from '../../src/error/prime-error';
import * as Format from '../../src/lib/format/format';
import { Locale, Location, timestamp } from '../variables';
import {
    FORMAT_CUSTOMISED_LONG, FORMAT_CUSTOMISED_SHORT, FORMAT_WRONG_LONG, FORMAT_WRONG_SHORT, RESULT_CUSTOMISED_US,
    RESULT_CUSTOMISED_GB, RESULT_CUSTOMISED_NL, RESULT_CUSTOMISED_NEW_YORK, RESULT_CUSTOMISED_LONDON,
    RESULT_CUSTOMISED_AMSTERDAM
} from './constants';

describe('Customise', () => {

    test('Providing timestamp and format', () => {
        let result = Format.customise(timestamp, FORMAT_CUSTOMISED_LONG);
        expect(result).toBe(RESULT_CUSTOMISED_US);

        result = Format.customise(timestamp, FORMAT_CUSTOMISED_SHORT);
        expect(result).toBe(RESULT_CUSTOMISED_US);

        expect(() => Format.customise(timestamp, FORMAT_WRONG_LONG)).toThrowError(PrimeError);
        expect(() => Format.customise(timestamp, FORMAT_WRONG_SHORT)).toThrowError(PrimeError);
    });

    test('Providing timestamp, format and timezone', () => {
        let result = Format.customise(timestamp, FORMAT_CUSTOMISED_LONG, undefined, Location.NEW_YORK);
        expect(result).toBe(RESULT_CUSTOMISED_NEW_YORK);

        result = Format.customise(timestamp, FORMAT_CUSTOMISED_SHORT, undefined, Location.NEW_YORK);
        expect(result).toBe(RESULT_CUSTOMISED_NEW_YORK);

        expect(() => Format.customise(timestamp, FORMAT_WRONG_LONG)).toThrowError(PrimeError);
        expect(() => Format.customise(timestamp, FORMAT_WRONG_SHORT)).toThrowError(PrimeError);
    });

    test('Providing timestamp, format and locale', () => {
        let result = Format.customise(timestamp, FORMAT_CUSTOMISED_LONG, Locale.US);
        expect(result).toBe(RESULT_CUSTOMISED_US);

        result = Format.customise(timestamp, FORMAT_CUSTOMISED_LONG.replace('.{millisecond}', ''), Locale.GB);
        expect(result).toBe(RESULT_CUSTOMISED_GB);

        result = Format.customise(timestamp, FORMAT_CUSTOMISED_LONG.replace('{AMPM}', ''), Locale.NL);
        expect(result).toBe(RESULT_CUSTOMISED_NL);

        result = Format.customise(timestamp, FORMAT_CUSTOMISED_SHORT, Locale.US);
        expect(result).toBe(RESULT_CUSTOMISED_US);

        result = Format.customise(timestamp, FORMAT_CUSTOMISED_SHORT.replace('.{ms}', ''), Locale.GB);
        expect(result).toBe(RESULT_CUSTOMISED_GB);

        result = Format.customise(timestamp, FORMAT_CUSTOMISED_SHORT.replace('{AMPM}', ''), Locale.NL);
        expect(result).toBe(RESULT_CUSTOMISED_NL);

        expect(() => Format.customise(timestamp, FORMAT_WRONG_LONG, Locale.US)).toThrowError(PrimeError);
        expect(() => Format.customise(timestamp, FORMAT_WRONG_LONG, Locale.GB)).toThrowError(PrimeError);
        expect(() => Format.customise(timestamp, FORMAT_WRONG_LONG, Locale.NL)).toThrowError(PrimeError);
        expect(() => Format.customise(timestamp, FORMAT_WRONG_SHORT, Locale.US)).toThrowError(PrimeError);
        expect(() => Format.customise(timestamp, FORMAT_WRONG_SHORT, Locale.GB)).toThrowError(PrimeError);
        expect(() => Format.customise(timestamp, FORMAT_WRONG_SHORT, Locale.NL)).toThrowError(PrimeError);
    });

    test('Providing timestamp, format, locale and timezone', () => {
        let result = Format.customise(timestamp, FORMAT_CUSTOMISED_LONG, Locale.US, Location.NEW_YORK);
        expect(result).toBe(RESULT_CUSTOMISED_NEW_YORK);

        result = Format.customise(timestamp, FORMAT_CUSTOMISED_LONG.replace('.{millisecond}', ''), Locale.GB, Location.LONDON);
        expect(result).toBe(RESULT_CUSTOMISED_LONDON);

        result = Format.customise(timestamp, FORMAT_CUSTOMISED_LONG.replace('{AMPM}', ''), Locale.NL, Location.AMSTERDAM);
        expect(result).toBe(RESULT_CUSTOMISED_AMSTERDAM);

        result = Format.customise(timestamp, FORMAT_CUSTOMISED_SHORT, Locale.US, Location.NEW_YORK);
        expect(result).toBe(RESULT_CUSTOMISED_NEW_YORK);

        result = Format.customise(timestamp, FORMAT_CUSTOMISED_SHORT.replace('.{ms}', ''), Locale.GB, Location.LONDON);
        expect(result).toBe(RESULT_CUSTOMISED_LONDON);

        result = Format.customise(timestamp, FORMAT_CUSTOMISED_SHORT.replace('{AMPM}', ''), Locale.NL, Location.AMSTERDAM);
        expect(result).toBe(RESULT_CUSTOMISED_AMSTERDAM);

        expect(() => Format.customise(timestamp, FORMAT_WRONG_LONG, Locale.US, Location.NEW_YORK)).toThrowError(PrimeError);
        expect(() => Format.customise(timestamp, FORMAT_WRONG_LONG, Locale.GB, Location.LONDON)).toThrowError(PrimeError);
        expect(() => Format.customise(timestamp, FORMAT_WRONG_LONG, Locale.NL, Location.AMSTERDAM)).toThrowError(PrimeError);
        expect(() => Format.customise(timestamp, FORMAT_WRONG_SHORT, Locale.US, Location.NEW_YORK)).toThrowError(PrimeError);
        expect(() => Format.customise(timestamp, FORMAT_WRONG_SHORT, Locale.GB, Location.LONDON)).toThrowError(PrimeError);
        expect(() => Format.customise(timestamp, FORMAT_WRONG_SHORT, Locale.NL, Location.AMSTERDAM)).toThrowError(PrimeError);
    });
});
