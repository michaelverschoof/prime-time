import PrimeError from '../../src/error/prime-error';
import { Format } from '../../src/lib/format/format';

/**
 * 1986-6-24 12:01:02.003 GMT
 */
const timestamp : number = 519998462003;

const US = 'en-us';
const GB = 'en-gb';
const NL = 'nl-nl';

const FORMAT_LOCALISED_LONG = 'weekday, month-number-short, day, year, hour, minute, second';
const FORMAT_LOCALISED_SHORT = 'WDD, M, DD, YY, HH, mm, ss';
const FORMAT_CUSTOMISED_LONG = '{weekday}, {month} {day}, {year} @ {hour}:{minute}:{second}';
const FORMAT_CUSTOMISED_SHORT = '{WDD}, {MMMM} {DD}, {YY} @ {HH}:{mm}:{ss}';
const FORMAT_WRONG_LONG = 'wrong-format';
const FORMAT_WRONG_SHORT = '{WRONG}';

const RESULT_LOCALISED_US = 'Tuesday, 6/24/1986, 2:01:02 PM';
const RESULT_LOCALISED_GB = 'Tuesday, 24/06/1986, 14:01:02';
const RESULT_LOCALISED_NL = 'dinsdag 24-6-1986 14:01:02';

const RESULT_CUSTOMISED_US = 'Tuesday, June 24, 1986 @ 2:01:02';
const RESULT_CUSTOMISED_GB = 'Tuesday, June 24, 1986 @ 14:01:02';
const RESULT_CUSTOMISED_NL = 'dinsdag, juni 24, 1986 @ 14:01:02';

const RESULT_SHORT_US = '6/24/1986';
const RESULT_SHORT_GB = '24/06/1986';
const RESULT_SHORT_NL = '24-6-1986';

describe('Localise', () => {

    test('Providing timestamp', () => {
        let result = Format.localise(timestamp);
        expect(result).toBe(RESULT_SHORT_US);

        result = Format.localise(1234.56);
        expect(result).toBe('1/1/1970');
    });

    test('Providing timestamp and locale', () => {
        let result = Format.localise(timestamp, undefined, US);
        expect(result).toBe(RESULT_SHORT_US);

        result = Format.localise(timestamp, undefined, GB);
        expect(result).toBe(RESULT_SHORT_GB);

        result = Format.localise(timestamp, undefined, NL);
        expect(result).toBe(RESULT_SHORT_NL);

        result = Format.localise(timestamp, undefined, 'non-existing-locale');
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

    test('Providing timestamp, format and locale', () => {
        let result = Format.localise(timestamp, FORMAT_LOCALISED_LONG, US);
        expect(result).toBe(RESULT_LOCALISED_US);

        result = Format.localise(timestamp, FORMAT_LOCALISED_LONG, GB);
        expect(result).toBe(RESULT_LOCALISED_GB);

        result = Format.localise(timestamp, FORMAT_LOCALISED_LONG, NL);
        expect(result).toBe(RESULT_LOCALISED_NL);

        result = Format.localise(timestamp, FORMAT_LOCALISED_SHORT, US);
        expect(result).toBe(RESULT_LOCALISED_US);

        result = Format.localise(timestamp, FORMAT_LOCALISED_SHORT, GB);
        expect(result).toBe(RESULT_LOCALISED_GB);

        result = Format.localise(timestamp, FORMAT_LOCALISED_SHORT, NL);
        expect(result).toBe(RESULT_LOCALISED_NL);

        expect(() => Format.localise(timestamp, FORMAT_WRONG_LONG, US)).toThrowError(PrimeError);
        expect(() => Format.localise(timestamp, FORMAT_WRONG_LONG, GB)).toThrowError(PrimeError);
        expect(() => Format.localise(timestamp, FORMAT_WRONG_LONG, NL)).toThrowError(PrimeError);
        expect(() => Format.localise(timestamp, FORMAT_WRONG_SHORT, US)).toThrowError(PrimeError);
        expect(() => Format.localise(timestamp, FORMAT_WRONG_SHORT, GB)).toThrowError(PrimeError);
        expect(() => Format.localise(timestamp, FORMAT_WRONG_SHORT, NL)).toThrowError(PrimeError);
    });

});

describe('Customise', () => {

    test('Providing timestamp and format', () => {
        let result = Format.customise(timestamp, FORMAT_CUSTOMISED_LONG);
        expect(result).toBe(RESULT_CUSTOMISED_US);

        result = Format.customise(1234.56, FORMAT_CUSTOMISED_LONG);
        expect(result).toBe('Thursday, January 01, 1970 @ 1:00:01');

        result = Format.customise(timestamp, FORMAT_CUSTOMISED_SHORT);
        expect(result).toBe(RESULT_CUSTOMISED_US);

        result = Format.customise(1234.56, FORMAT_CUSTOMISED_SHORT);
        expect(result).toBe('Thursday, January 01, 1970 @ 1:00:01');

        expect(() => Format.customise(timestamp, FORMAT_WRONG_LONG)).toThrowError(PrimeError);
        expect(() => Format.customise(timestamp, FORMAT_WRONG_SHORT)).toThrowError(PrimeError);
    });

    test('Providing timestamp, format and locale', () => {
        let result = Format.customise(timestamp, FORMAT_CUSTOMISED_LONG, US);
        expect(result).toBe(RESULT_CUSTOMISED_US);

        result = Format.customise(timestamp, FORMAT_CUSTOMISED_LONG, GB);
        expect(result).toBe(RESULT_CUSTOMISED_GB);

        result = Format.customise(timestamp, FORMAT_CUSTOMISED_LONG, NL);
        expect(result).toBe(RESULT_CUSTOMISED_NL);

        result = Format.customise(timestamp, FORMAT_CUSTOMISED_SHORT, US);
        expect(result).toBe(RESULT_CUSTOMISED_US);

        result = Format.customise(timestamp, FORMAT_CUSTOMISED_SHORT, GB);
        expect(result).toBe(RESULT_CUSTOMISED_GB);

        result = Format.customise(timestamp, FORMAT_CUSTOMISED_SHORT, NL);
        expect(result).toBe(RESULT_CUSTOMISED_NL);

        expect(() => Format.customise(timestamp, FORMAT_WRONG_LONG, US)).toThrowError(PrimeError);
        expect(() => Format.customise(timestamp, FORMAT_WRONG_LONG, GB)).toThrowError(PrimeError);
        expect(() => Format.customise(timestamp, FORMAT_WRONG_LONG, NL)).toThrowError(PrimeError);
        expect(() => Format.customise(timestamp, FORMAT_WRONG_SHORT, US)).toThrowError(PrimeError);
        expect(() => Format.customise(timestamp, FORMAT_WRONG_SHORT, GB)).toThrowError(PrimeError);
        expect(() => Format.customise(timestamp, FORMAT_WRONG_SHORT, NL)).toThrowError(PrimeError);
    });

});

describe('Format', () => {

    test('Providing timestamp', () => {
        let result = Format.format(timestamp);
        expect(result).toBe(RESULT_SHORT_US);

        result = Format.format(1234.56);
        expect(result).toBe('1/1/1970');
    });

    test('Providing timestamp and format', () => {
        let result = Format.format(timestamp, FORMAT_LOCALISED_LONG);
        expect(result).toBe(RESULT_LOCALISED_US);

        result = Format.format(timestamp, FORMAT_LOCALISED_SHORT);
        expect(result).toBe(RESULT_LOCALISED_US);

        result = Format.format(timestamp, FORMAT_CUSTOMISED_LONG);
        expect(result).toBe(RESULT_CUSTOMISED_US);

        result = Format.format(timestamp, FORMAT_CUSTOMISED_SHORT);
        expect(result).toBe(RESULT_CUSTOMISED_US);

        expect(() => Format.customise(timestamp, FORMAT_WRONG_LONG)).toThrowError(PrimeError);
        expect(() => Format.customise(timestamp, FORMAT_WRONG_SHORT)).toThrowError(PrimeError);
    });

    test('Providing timestamp and locale', () => {
        let result = Format.format(timestamp, undefined, US);
        expect(result).toBe(RESULT_SHORT_US);

        result = Format.format(timestamp, undefined, GB);
        expect(result).toBe(RESULT_SHORT_GB);

        result = Format.format(timestamp, undefined, NL);
        expect(result).toBe(RESULT_SHORT_NL);

        result = Format.format(timestamp, undefined, 'wrong-locale');
        expect(result).toBe(RESULT_SHORT_US);
    });

    test('Providing timestamp, format and locale', () => {
        let result = Format.format(timestamp, FORMAT_LOCALISED_LONG, US);
        expect(result).toBe(RESULT_LOCALISED_US);

        result = Format.format(timestamp, FORMAT_LOCALISED_LONG, GB);
        expect(result).toBe(RESULT_LOCALISED_GB);

        result = Format.format(timestamp, FORMAT_LOCALISED_LONG, NL);
        expect(result).toBe(RESULT_LOCALISED_NL);

        result = Format.format(timestamp, FORMAT_LOCALISED_SHORT, US);
        expect(result).toBe(RESULT_LOCALISED_US);

        result = Format.format(timestamp, FORMAT_LOCALISED_SHORT, GB);
        expect(result).toBe(RESULT_LOCALISED_GB);

        result = Format.format(timestamp, FORMAT_LOCALISED_SHORT, NL);
        expect(result).toBe(RESULT_LOCALISED_NL);

        result = Format.format(timestamp, FORMAT_CUSTOMISED_LONG, US);
        expect(result).toBe(RESULT_CUSTOMISED_US);

        result = Format.format(timestamp, FORMAT_CUSTOMISED_LONG, GB);
        expect(result).toBe(RESULT_CUSTOMISED_GB);

        result = Format.format(timestamp, FORMAT_CUSTOMISED_LONG, NL);
        expect(result).toBe(RESULT_CUSTOMISED_NL);

        result = Format.format(timestamp, FORMAT_CUSTOMISED_SHORT, US);
        expect(result).toBe(RESULT_CUSTOMISED_US);

        result = Format.format(timestamp, FORMAT_CUSTOMISED_SHORT, GB);
        expect(result).toBe(RESULT_CUSTOMISED_GB);

        result = Format.format(timestamp, FORMAT_CUSTOMISED_SHORT, NL);
        expect(result).toBe(RESULT_CUSTOMISED_NL);

        expect(() => Format.format(timestamp, FORMAT_WRONG_LONG, US)).toThrowError(PrimeError);
        expect(() => Format.format(timestamp, FORMAT_WRONG_LONG, GB)).toThrowError(PrimeError);
        expect(() => Format.format(timestamp, FORMAT_WRONG_LONG, NL)).toThrowError(PrimeError);
        expect(() => Format.format(timestamp, FORMAT_WRONG_SHORT, US)).toThrowError(PrimeError);
        expect(() => Format.format(timestamp, FORMAT_WRONG_SHORT, GB)).toThrowError(PrimeError);
        expect(() => Format.format(timestamp, FORMAT_WRONG_SHORT, NL)).toThrowError(PrimeError);
    });

});
