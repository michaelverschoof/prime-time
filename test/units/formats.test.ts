import PrimeError from '../../src/error/prime-error';
import { find, options, timespan } from '../../src/lib/units/formats';

describe('Find', () => {

    test('Year', () => {
        let result = find('year');
        expect(result).toEqual({ year: 'numeric' });

        result = find('year-long');
        expect(result).toEqual({ year: 'numeric' });

        result = find('year-short');
        expect(result).toEqual({ year: '2-digit' });
    });

    test('Non-existent values', () => {
        expect(() => { find('non-existent value') }).toThrowError(PrimeError);
    });

});

describe('Timespan', () => {

    test('Year', () => {
        let result = timespan('year');
        expect(result).toEqual('year');

        result = timespan('year-long');
        expect(result).toEqual('year');

        result = timespan('year-short');
        expect(result).toEqual('year');
    });

    test('Non-existent values', () => {
        expect(() => { timespan('non-existent value') }).toThrowError(PrimeError);
    });

});

describe('Options', () => {

    test('Localised options', () => {
        let result = options(['year', 'month', 'day']);
        expect(result).toEqual({ year: 'numeric', month: 'long', day: '2-digit' });
    });

    test('Customised options', () => {
        let result = options(['YY', 'MM', 'DD']);
        expect(result).toEqual({ year: 'numeric', month: '2-digit', day: '2-digit' });
    });

});
