import PrimeError from '../../src/error/prime-error';
import * as Format from '../../src/lib/format/format';

/**
 * 1986-6-24 12:01:02.003 GMT
 */
const timestamp : number = 519998462003;

const US = 'en-us';
const GB = 'en-gb';
const NL = 'nl-nl';

const NEW_YORK = 'America/New_York';
const LONDON = 'Europe/London';
const AMSTERDAM = 'Europe/Amsterdam';

const FORMAT_LOCALISED_LONG = 'weekday, month-number-short, day, year, hour, minute, second, millisecond, timezone';
const FORMAT_LOCALISED_SHORT = 'WDD, M, DD, YY, HH, mm, ss, ms, TZZ';
const FORMAT_CUSTOMISED_LONG = '{weekday}, {month} {day}, {year} @ {hour}:{minute}:{second}.{millisecond} {AMPM} {timezone-short}';
const FORMAT_CUSTOMISED_SHORT = '{WDD}, {MMMM} {DD}, {YY} @ {HH}:{mm}:{ss}.{ms} {AMPM} {TZ}';

const FORMAT_WRONG_LONG = 'wrong-format';
const FORMAT_WRONG_SHORT = '{WRONG}';

const RESULT_SHORT_US = '6/24/1986';
const RESULT_SHORT_GB = '24/06/1986';
const RESULT_SHORT_NL = '24-6-1986';

const RESULT_LOCALISED_US = 'Tuesday, 6/24/1986, 12:01:02.003 PM Coordinated Universal Time';
const RESULT_LOCALISED_GB = 'Tuesday, 24/06/1986, 12:01:02 Coordinated Universal Time';
const RESULT_LOCALISED_NL = 'dinsdag 24-6-1986 12:01:02.003 Gecoördineerde wereldtijd';

const RESULT_LOCALISED_NEW_YORK = 'Tuesday, 6/24/1986, 8:01:02.003 AM Eastern Daylight Time';
const RESULT_LOCALISED_LONDON = 'Tuesday, 24/06/1986, 13:01:02 British Summer Time';
const RESULT_LOCALISED_AMSTERDAM = 'dinsdag 24-6-1986 14:01:02.003 Midden-Europese zomertijd';

const RESULT_CUSTOMISED_US = 'Tuesday, June 24, 1986 @ 12:01:02.003 PM UTC';
const RESULT_CUSTOMISED_GB = 'Tuesday, June 24, 1986 @ 12:01:02 pm UTC';
const RESULT_CUSTOMISED_NL = 'dinsdag, juni 24, 1986 @ 12:01:02.003 UTC';

const RESULT_CUSTOMISED_NEW_YORK = 'Tuesday, June 24, 1986 @ 8:01:02.003 AM EDT';
const RESULT_CUSTOMISED_LONDON = 'Tuesday, June 24, 1986 @ 1:01:02 pm BST';
const RESULT_CUSTOMISED_AMSTERDAM = 'dinsdag, juni 24, 1986 @ 14:01:02.003 CEST';

describe('Localise', () => {

    test('Providing timestamp', () => {
        let result = Format.localise(timestamp);
        expect(result).toBe(RESULT_SHORT_US);
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

    test('Providing timestamp, locale and timezone', () => {
        let result = Format.localise(timestamp, undefined, US, NEW_YORK);
        expect(result).toBe(RESULT_SHORT_US);

        result = Format.localise(timestamp, undefined, GB, LONDON);
        expect(result).toBe(RESULT_SHORT_GB);

        result = Format.localise(timestamp, undefined, NL, AMSTERDAM);
        expect(result).toBe(RESULT_SHORT_NL);

        result = Format.localise(timestamp, undefined, 'non-existing-locale', NEW_YORK);
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
        let result = Format.localise(timestamp, FORMAT_LOCALISED_LONG, undefined, NEW_YORK);
        expect(result).toBe(RESULT_LOCALISED_NEW_YORK);

        result = Format.localise(timestamp, FORMAT_LOCALISED_SHORT, undefined, NEW_YORK);
        expect(result).toBe(RESULT_LOCALISED_NEW_YORK);

        expect(() => Format.localise(timestamp, FORMAT_WRONG_LONG, undefined, NEW_YORK)).toThrowError(PrimeError);
        expect(() => Format.localise(timestamp, FORMAT_WRONG_SHORT, undefined, NEW_YORK)).toThrowError(PrimeError);
    });

    test('Providing timestamp, format and locale', () => {
        let result = Format.localise(timestamp, FORMAT_LOCALISED_LONG, US);
        expect(result).toBe(RESULT_LOCALISED_US);

        result = Format.localise(timestamp, FORMAT_LOCALISED_LONG.replace(', millisecond', ''), GB);
        expect(result).toBe(RESULT_LOCALISED_GB);

        result = Format.localise(timestamp, FORMAT_LOCALISED_LONG, NL);
        expect(result).toBe(RESULT_LOCALISED_NL);

        result = Format.localise(timestamp, FORMAT_LOCALISED_SHORT, US);
        expect(result).toBe(RESULT_LOCALISED_US);

        result = Format.localise(timestamp, FORMAT_LOCALISED_SHORT.replace(', ms', ''), GB);
        expect(result).toBe(RESULT_LOCALISED_GB);

        result = Format.localise(timestamp, FORMAT_LOCALISED_SHORT, NL);
        expect(result).toBe(RESULT_LOCALISED_NL);

        result = Format.localise(timestamp, FORMAT_LOCALISED_LONG.replace(', second', ''), GB);
        expect(result).toBe(RESULT_LOCALISED_GB.replace(':02', ''));

        expect(() => Format.localise(timestamp, FORMAT_WRONG_LONG, US)).toThrowError(PrimeError);
        expect(() => Format.localise(timestamp, FORMAT_WRONG_LONG, GB)).toThrowError(PrimeError);
        expect(() => Format.localise(timestamp, FORMAT_WRONG_LONG, NL)).toThrowError(PrimeError);
        expect(() => Format.localise(timestamp, FORMAT_WRONG_SHORT, US)).toThrowError(PrimeError);
        expect(() => Format.localise(timestamp, FORMAT_WRONG_SHORT, GB)).toThrowError(PrimeError);
        expect(() => Format.localise(timestamp, FORMAT_WRONG_SHORT, NL)).toThrowError(PrimeError);
    });

    test('Providing timestamp, format, locale and timezone', () => {
        let result = Format.localise(timestamp, FORMAT_LOCALISED_LONG, US, NEW_YORK);
        expect(result).toBe(RESULT_LOCALISED_NEW_YORK);

        result = Format.localise(timestamp, FORMAT_LOCALISED_LONG.replace(', millisecond', ''), GB, LONDON);
        expect(result).toBe(RESULT_LOCALISED_LONDON);

        result = Format.localise(timestamp, FORMAT_LOCALISED_LONG, NL, AMSTERDAM);
        expect(result).toBe(RESULT_LOCALISED_AMSTERDAM);

        result = Format.localise(timestamp, FORMAT_LOCALISED_SHORT, US, NEW_YORK);
        expect(result).toBe(RESULT_LOCALISED_NEW_YORK);

        result = Format.localise(timestamp, FORMAT_LOCALISED_SHORT.replace(', ms', ''), GB, LONDON);
        expect(result).toBe(RESULT_LOCALISED_LONDON);

        result = Format.localise(timestamp, FORMAT_LOCALISED_SHORT, NL, AMSTERDAM);
        expect(result).toBe(RESULT_LOCALISED_AMSTERDAM);

        expect(() => Format.localise(timestamp, FORMAT_WRONG_LONG, US, NEW_YORK)).toThrowError(PrimeError);
        expect(() => Format.localise(timestamp, FORMAT_WRONG_LONG, GB, LONDON)).toThrowError(PrimeError);
        expect(() => Format.localise(timestamp, FORMAT_WRONG_LONG, NL, AMSTERDAM)).toThrowError(PrimeError);
        expect(() => Format.localise(timestamp, FORMAT_WRONG_SHORT, US, NEW_YORK)).toThrowError(PrimeError);
        expect(() => Format.localise(timestamp, FORMAT_WRONG_SHORT, GB, LONDON)).toThrowError(PrimeError);
        expect(() => Format.localise(timestamp, FORMAT_WRONG_SHORT, NL, AMSTERDAM)).toThrowError(PrimeError);
    });

});

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
        let result = Format.customise(timestamp, FORMAT_CUSTOMISED_LONG, undefined, NEW_YORK);
        expect(result).toBe(RESULT_CUSTOMISED_NEW_YORK);

        result = Format.customise(timestamp, FORMAT_CUSTOMISED_SHORT, undefined, NEW_YORK);
        expect(result).toBe(RESULT_CUSTOMISED_NEW_YORK);

        expect(() => Format.customise(timestamp, FORMAT_WRONG_LONG)).toThrowError(PrimeError);
        expect(() => Format.customise(timestamp, FORMAT_WRONG_SHORT)).toThrowError(PrimeError);
    });

    test('Providing timestamp, format and locale', () => {
        let result = Format.customise(timestamp, FORMAT_CUSTOMISED_LONG, US);
        expect(result).toBe(RESULT_CUSTOMISED_US);

        result = Format.customise(timestamp, FORMAT_CUSTOMISED_LONG.replace('.{millisecond}', ''), GB);
        expect(result).toBe(RESULT_CUSTOMISED_GB);

        result = Format.customise(timestamp, FORMAT_CUSTOMISED_LONG.replace('{AMPM}', ''), NL);
        expect(result).toBe(RESULT_CUSTOMISED_NL);

        result = Format.customise(timestamp, FORMAT_CUSTOMISED_SHORT, US);
        expect(result).toBe(RESULT_CUSTOMISED_US);

        result = Format.customise(timestamp, FORMAT_CUSTOMISED_SHORT.replace('.{ms}', ''), GB);
        expect(result).toBe(RESULT_CUSTOMISED_GB);

        result = Format.customise(timestamp, FORMAT_CUSTOMISED_SHORT.replace('{AMPM}', ''), NL);
        expect(result).toBe(RESULT_CUSTOMISED_NL);

        expect(() => Format.customise(timestamp, FORMAT_WRONG_LONG, US)).toThrowError(PrimeError);
        expect(() => Format.customise(timestamp, FORMAT_WRONG_LONG, GB)).toThrowError(PrimeError);
        expect(() => Format.customise(timestamp, FORMAT_WRONG_LONG, NL)).toThrowError(PrimeError);
        expect(() => Format.customise(timestamp, FORMAT_WRONG_SHORT, US)).toThrowError(PrimeError);
        expect(() => Format.customise(timestamp, FORMAT_WRONG_SHORT, GB)).toThrowError(PrimeError);
        expect(() => Format.customise(timestamp, FORMAT_WRONG_SHORT, NL)).toThrowError(PrimeError);
    });

    test('Providing timestamp, format, locale and timezone', () => {
        let result = Format.customise(timestamp, FORMAT_CUSTOMISED_LONG, US, NEW_YORK);
        expect(result).toBe(RESULT_CUSTOMISED_NEW_YORK);

        result = Format.customise(timestamp, FORMAT_CUSTOMISED_LONG.replace('.{millisecond}', ''), GB, LONDON);
        expect(result).toBe(RESULT_CUSTOMISED_LONDON);

        result = Format.customise(timestamp, FORMAT_CUSTOMISED_LONG.replace('{AMPM}', ''), NL, AMSTERDAM);
        expect(result).toBe(RESULT_CUSTOMISED_AMSTERDAM);

        result = Format.customise(timestamp, FORMAT_CUSTOMISED_SHORT, US, NEW_YORK);
        expect(result).toBe(RESULT_CUSTOMISED_NEW_YORK);

        result = Format.customise(timestamp, FORMAT_CUSTOMISED_SHORT.replace('.{ms}', ''), GB, LONDON);
        expect(result).toBe(RESULT_CUSTOMISED_LONDON);

        result = Format.customise(timestamp, FORMAT_CUSTOMISED_SHORT.replace('{AMPM}', ''), NL, AMSTERDAM);
        expect(result).toBe(RESULT_CUSTOMISED_AMSTERDAM);

        expect(() => Format.customise(timestamp, FORMAT_WRONG_LONG, US, NEW_YORK)).toThrowError(PrimeError);
        expect(() => Format.customise(timestamp, FORMAT_WRONG_LONG, GB, LONDON)).toThrowError(PrimeError);
        expect(() => Format.customise(timestamp, FORMAT_WRONG_LONG, NL, AMSTERDAM)).toThrowError(PrimeError);
        expect(() => Format.customise(timestamp, FORMAT_WRONG_SHORT, US, NEW_YORK)).toThrowError(PrimeError);
        expect(() => Format.customise(timestamp, FORMAT_WRONG_SHORT, GB, LONDON)).toThrowError(PrimeError);
        expect(() => Format.customise(timestamp, FORMAT_WRONG_SHORT, NL, AMSTERDAM)).toThrowError(PrimeError);
    });

});

describe('Format', () => {

    test('Providing timestamp', () => {
        let result = Format.format(timestamp);
        expect(result).toBe(RESULT_SHORT_US);
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

    test('Providing timestamp, format and timezone', () => {
        let result = Format.format(timestamp, FORMAT_LOCALISED_LONG, undefined, NEW_YORK);
        expect(result).toBe(RESULT_LOCALISED_NEW_YORK);

        result = Format.format(timestamp, FORMAT_LOCALISED_SHORT, undefined, NEW_YORK);
        expect(result).toBe(RESULT_LOCALISED_NEW_YORK);

        result = Format.format(timestamp, FORMAT_CUSTOMISED_LONG, undefined, NEW_YORK);
        expect(result).toBe(RESULT_CUSTOMISED_NEW_YORK);

        result = Format.format(timestamp, FORMAT_CUSTOMISED_SHORT, undefined, NEW_YORK);
        expect(result).toBe(RESULT_CUSTOMISED_NEW_YORK);

        expect(() => Format.customise(timestamp, FORMAT_WRONG_LONG, undefined, NEW_YORK)).toThrowError(PrimeError);
        expect(() => Format.customise(timestamp, FORMAT_WRONG_SHORT, undefined, NEW_YORK)).toThrowError(PrimeError);
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

    test('Providing timestamp, locale and timezone', () => {
        let result = Format.format(timestamp, undefined, US, NEW_YORK);
        expect(result).toBe(RESULT_SHORT_US);

        result = Format.format(timestamp, undefined, GB, LONDON);
        expect(result).toBe(RESULT_SHORT_GB);

        result = Format.format(timestamp, undefined, NL, AMSTERDAM);
        expect(result).toBe(RESULT_SHORT_NL);

        result = Format.format(timestamp, undefined, 'wrong-locale', NEW_YORK);
        expect(result).toBe(RESULT_SHORT_US);
    });

    test('Providing timestamp, format and locale', () => {
        let result = Format.format(timestamp, FORMAT_LOCALISED_LONG, US);
        expect(result).toBe(RESULT_LOCALISED_US);

        result = Format.format(timestamp, FORMAT_LOCALISED_LONG.replace(', millisecond', ''), GB);
        expect(result).toBe(RESULT_LOCALISED_GB);

        result = Format.format(timestamp, FORMAT_LOCALISED_LONG, NL);
        expect(result).toBe(RESULT_LOCALISED_NL);

        result = Format.format(timestamp, FORMAT_LOCALISED_SHORT, US);
        expect(result).toBe(RESULT_LOCALISED_US);

        result = Format.format(timestamp, FORMAT_LOCALISED_SHORT.replace(', ms', ''), GB);
        expect(result).toBe(RESULT_LOCALISED_GB);

        result = Format.format(timestamp, FORMAT_LOCALISED_SHORT, NL);
        expect(result).toBe(RESULT_LOCALISED_NL);

        result = Format.format(timestamp, FORMAT_CUSTOMISED_LONG, US);
        expect(result).toBe(RESULT_CUSTOMISED_US);

        result = Format.format(timestamp, FORMAT_CUSTOMISED_LONG.replace('.{millisecond}', ''), GB);
        expect(result).toBe(RESULT_CUSTOMISED_GB);

        result = Format.format(timestamp, FORMAT_CUSTOMISED_LONG.replace('{AMPM}', ''), NL);
        expect(result).toBe(RESULT_CUSTOMISED_NL);

        result = Format.format(timestamp, FORMAT_CUSTOMISED_SHORT, US);
        expect(result).toBe(RESULT_CUSTOMISED_US);

        result = Format.format(timestamp, FORMAT_CUSTOMISED_SHORT.replace('.{ms}', ''), GB);
        expect(result).toBe(RESULT_CUSTOMISED_GB);

        result = Format.format(timestamp, FORMAT_CUSTOMISED_SHORT.replace('{AMPM}', ''), NL);
        expect(result).toBe(RESULT_CUSTOMISED_NL);

        expect(() => Format.format(timestamp, FORMAT_WRONG_LONG, US)).toThrowError(PrimeError);
        expect(() => Format.format(timestamp, FORMAT_WRONG_LONG, GB)).toThrowError(PrimeError);
        expect(() => Format.format(timestamp, FORMAT_WRONG_LONG, NL)).toThrowError(PrimeError);
        expect(() => Format.format(timestamp, FORMAT_WRONG_SHORT, US)).toThrowError(PrimeError);
        expect(() => Format.format(timestamp, FORMAT_WRONG_SHORT, GB)).toThrowError(PrimeError);
        expect(() => Format.format(timestamp, FORMAT_WRONG_SHORT, NL)).toThrowError(PrimeError);
    });

    test('Providing timestamp, format, locale and timezone', () => {
        let result = Format.format(timestamp, FORMAT_LOCALISED_LONG, US, NEW_YORK);
        expect(result).toBe(RESULT_LOCALISED_NEW_YORK);

        result = Format.format(timestamp, FORMAT_LOCALISED_LONG.replace(', millisecond', ''), GB, LONDON);
        expect(result).toBe(RESULT_LOCALISED_LONDON);

        result = Format.format(timestamp, FORMAT_LOCALISED_LONG.replace('{AMPM}', ''), NL, AMSTERDAM);
        expect(result).toBe(RESULT_LOCALISED_AMSTERDAM);

        result = Format.format(timestamp, FORMAT_LOCALISED_SHORT, US, NEW_YORK);
        expect(result).toBe(RESULT_LOCALISED_NEW_YORK);

        result = Format.format(timestamp, FORMAT_LOCALISED_SHORT.replace(', ms', ''), GB, LONDON);
        expect(result).toBe(RESULT_LOCALISED_LONDON);

        result = Format.format(timestamp, FORMAT_LOCALISED_SHORT.replace('{AMPM}', ''), NL, AMSTERDAM);
        expect(result).toBe(RESULT_LOCALISED_AMSTERDAM);

        result = Format.format(timestamp, FORMAT_CUSTOMISED_LONG, US, NEW_YORK);
        expect(result).toBe(RESULT_CUSTOMISED_NEW_YORK);

        result = Format.format(timestamp, FORMAT_CUSTOMISED_LONG.replace('.{millisecond}', ''), GB, LONDON);
        expect(result).toBe(RESULT_CUSTOMISED_LONDON);

        result = Format.format(timestamp, FORMAT_CUSTOMISED_LONG.replace('{AMPM}', ''), NL, AMSTERDAM);
        expect(result).toBe(RESULT_CUSTOMISED_AMSTERDAM);

        result = Format.format(timestamp, FORMAT_CUSTOMISED_SHORT, US, NEW_YORK);
        expect(result).toBe(RESULT_CUSTOMISED_NEW_YORK);

        result = Format.format(timestamp, FORMAT_CUSTOMISED_SHORT.replace('.{ms}', ''), GB, LONDON);
        expect(result).toBe(RESULT_CUSTOMISED_LONDON);

        result = Format.format(timestamp, FORMAT_CUSTOMISED_SHORT.replace('{AMPM}', ''), NL, AMSTERDAM);
        expect(result).toBe(RESULT_CUSTOMISED_AMSTERDAM);

        expect(() => Format.format(timestamp, FORMAT_WRONG_LONG, US, NEW_YORK)).toThrowError(PrimeError);
        expect(() => Format.format(timestamp, FORMAT_WRONG_LONG, GB, LONDON)).toThrowError(PrimeError);
        expect(() => Format.format(timestamp, FORMAT_WRONG_LONG, NL, AMSTERDAM)).toThrowError(PrimeError);
        expect(() => Format.format(timestamp, FORMAT_WRONG_SHORT, US, NEW_YORK)).toThrowError(PrimeError);
        expect(() => Format.format(timestamp, FORMAT_WRONG_SHORT, GB, LONDON)).toThrowError(PrimeError);
        expect(() => Format.format(timestamp, FORMAT_WRONG_SHORT, NL, AMSTERDAM)).toThrowError(PrimeError);
    });
});
