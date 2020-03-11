import PrimeError from '../../src/error/prime-error';
import { DAY, find, HOUR, MILLISECOND, MINUTE, MONTH, SECOND, YEAR } from '../../src/lib/units/timespans';

describe('Find timespan', () => {

    test('Year', () => {
        let result = find(YEAR);
        expect(result).toEqual(YEAR);

        result = find('year');
        expect(result).toEqual(YEAR);
    });

    test('Month', () => {
        let result = find(MONTH);
        expect(result).toEqual(MONTH);

        result = find('month');
        expect(result).toEqual(MONTH);
    });

    test('Day', () => {
        let result = find(DAY);
        expect(result).toEqual(DAY);

        result = find('day');
        expect(result).toEqual(DAY);
    });

    test('Hour', () => {
        let result = find(HOUR);
        expect(result).toEqual(HOUR);

        result = find('hour');
        expect(result).toEqual(HOUR);
    });

    test('Minute', () => {
        let result = find(MINUTE);
        expect(result).toEqual(MINUTE);

        result = find('minute');
        expect(result).toEqual(MINUTE);
    });

    test('Second', () => {
        let result = find(SECOND);
        expect(result).toEqual(SECOND);

        result = find('second');
        expect(result).toEqual(SECOND);
    });

    test('Millisecond', () => {
        let result = find(MILLISECOND);
        expect(result).toEqual(MILLISECOND);

        result = find('millisecond');
        expect(result).toEqual(MILLISECOND);
    });

    test('No value', () => {
        let result = find();
        expect(result).toEqual(MILLISECOND);
    });

    test('Non-existent values', () => {
        expect(() => { find('non-existent value') }).toThrowError(PrimeError);
    });

});
