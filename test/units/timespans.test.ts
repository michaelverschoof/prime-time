import PrimeError from '../../src/error/prime-error';
import { find, Timespans } from '../../src/lib/units/timespans';

describe('Find timespan', () => {

    test('Year', () => {
        let result = find(Timespans.YEAR);
        expect(result).toEqual(Timespans.YEAR);

        result = find('year');
        expect(result).toEqual(Timespans.YEAR);
    });

    test('Month', () => {
        let result = find(Timespans.MONTH);
        expect(result).toEqual(Timespans.MONTH);

        result = find('month');
        expect(result).toEqual(Timespans.MONTH);
    });

    test('Day', () => {
        let result = find(Timespans.DAY);
        expect(result).toEqual(Timespans.DAY);

        result = find('day');
        expect(result).toEqual(Timespans.DAY);
    });

    test('Hour', () => {
        let result = find(Timespans.HOUR);
        expect(result).toEqual(Timespans.HOUR);

        result = find('hour');
        expect(result).toEqual(Timespans.HOUR);
    });

    test('Minute', () => {
        let result = find(Timespans.MINUTE);
        expect(result).toEqual(Timespans.MINUTE);

        result = find('minute');
        expect(result).toEqual(Timespans.MINUTE);
    });

    test('Second', () => {
        let result = find(Timespans.SECOND);
        expect(result).toEqual(Timespans.SECOND);

        result = find('second');
        expect(result).toEqual(Timespans.SECOND);
    });

    test('Millisecond', () => {
        let result = find(Timespans.MILLISECOND);
        expect(result).toEqual(Timespans.MILLISECOND);

        result = find('millisecond');
        expect(result).toEqual(Timespans.MILLISECOND);
    });

    test('No value', () => {
        const result = find();
        expect(result).toEqual(Timespans.MILLISECOND);
    });

    test('Non-existent values', () => {
        expect(() => find('non-existent value')).toThrowError(PrimeError);
    });

});
