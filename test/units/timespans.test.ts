import PrimeError from '../../src/error/prime-error';
import { find, Options } from '../../src/lib/units/timespans';

describe('Find timespan', () => {

    test('Year', () => {
        let result = find(Options.YEAR);
        expect(result).toEqual(Options.YEAR);

        result = find('year');
        expect(result).toEqual(Options.YEAR);
    });

    test('Month', () => {
        let result = find(Options.MONTH);
        expect(result).toEqual(Options.MONTH);

        result = find('month');
        expect(result).toEqual(Options.MONTH);
    });

    test('Day', () => {
        let result = find(Options.DAY);
        expect(result).toEqual(Options.DAY);

        result = find('day');
        expect(result).toEqual(Options.DAY);
    });

    test('Hour', () => {
        let result = find(Options.HOUR);
        expect(result).toEqual(Options.HOUR);

        result = find('hour');
        expect(result).toEqual(Options.HOUR);
    });

    test('Minute', () => {
        let result = find(Options.MINUTE);
        expect(result).toEqual(Options.MINUTE);

        result = find('minute');
        expect(result).toEqual(Options.MINUTE);
    });

    test('Second', () => {
        let result = find(Options.SECOND);
        expect(result).toEqual(Options.SECOND);

        result = find('second');
        expect(result).toEqual(Options.SECOND);
    });

    test('Millisecond', () => {
        let result = find(Options.MILLISECOND);
        expect(result).toEqual(Options.MILLISECOND);

        result = find('millisecond');
        expect(result).toEqual(Options.MILLISECOND);
    });

    test('No value', () => {
        const result = find();
        expect(result).toEqual(Options.MILLISECOND);
    });

    test('Non-existent values', () => {
        expect(() => { find('non-existent value') }).toThrowError(PrimeError);
    });

});
