import PrimeError from '../../src/error/prime-error';
import { Format } from '../../src/lib/format/format';

/**
 * 1986-6-24 12:01:02.003 GMT
 */
const timestamp : number = 519998462003;

const US = 'en-us';
const GB = 'en-gb';
const NL = 'nl-nl';

describe('Localise', () => {

    test('Providing timestamp', () => {
        let result = Format.localise(timestamp);
        expect(result).toBe('6/24/1986');

        result = Format.localise(1234.56);
        expect(result).toBe('1/1/1970');
    });

    test('Providing timestamp and locale', () => {
        let result = Format.localise(timestamp, undefined, US);
        expect(result).toBe('6/24/1986');

        result = Format.localise(timestamp, undefined, GB);
        expect(result).toBe('24/06/1986');

        result = Format.localise(timestamp, undefined, NL);
        expect(result).toBe('24-6-1986');

        result = Format.localise(timestamp, undefined, 'non-existing-locale');
        expect(result).toBe('6/24/1986');
    });

    test('Providing timestamp, format and locale', () => {
        let result = Format.localise(timestamp, 'month', US);
        expect(result).toBe('June');

        result = Format.localise(timestamp, 'month-short, year-long', GB);
        expect(result).toBe('Jun 1986');

        result = Format.localise(timestamp, 'weekday, day, month, year', NL);
        expect(result).toBe('dinsdag 24 juni 1986');

        expect(() => { Format.localise(timestamp, 'non-existing-format', NL) }).toThrowError(PrimeError);
    });
});