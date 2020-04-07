import PrimeError from '../../src/error/prime-error';
import { options, type } from '../../src/lib/units/formats';

describe('Timespan', () => {

    test('Year', () => {
        let result = type('year');
        expect(result).toEqual('year');

        result = type('year-long');
        expect(result).toEqual('year');

        result = type('year-short');
        expect(result).toEqual('year');
    });

    test('Non-existent values', () => {
        expect(() => { type('non-existent value') }).toThrowError(PrimeError);
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
