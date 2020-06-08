import PrimeError from '../../src/error/prime-error';
import { Timespan } from '../../src/lib/types';
import Day from '../../src/lib/units/temporal/day';
import Hour from '../../src/lib/units/temporal/hour';
import Millisecond from '../../src/lib/units/temporal/millisecond';
import Minute from '../../src/lib/units/temporal/minute';
import Month from '../../src/lib/units/temporal/month';
import Second from '../../src/lib/units/temporal/second';
import Year from '../../src/lib/units/temporal/year';
import { find } from '../../src/lib/units/temporals';

describe('Find timespan', () => {

    test('Year', () => {
        let result = find(Timespan.YEAR);
        expect(result).toEqual(Year);

        result = find('year');
        expect(result).toEqual(Year);
    });

    test('Month', () => {
        let result = find(Timespan.MONTH);
        expect(result).toEqual(Month);

        result = find('month');
        expect(result).toEqual(Month);
    });

    test('Day', () => {
        let result = find(Timespan.DAY);
        expect(result).toEqual(Day);

        result = find('day');
        expect(result).toEqual(Day);
    });

    test('Hour', () => {
        let result = find(Timespan.HOUR);
        expect(result).toEqual(Hour);

        result = find('hour');
        expect(result).toEqual(Hour);
    });

    test('Minute', () => {
        let result = find(Timespan.MINUTE);
        expect(result).toEqual(Minute);

        result = find('minute');
        expect(result).toEqual(Minute);
    });

    test('Second', () => {
        let result = find(Timespan.SECOND);
        expect(result).toEqual(Second);

        result = find('second');
        expect(result).toEqual(Second);
    });

    test('Millisecond', () => {
        let result = find(Timespan.MILLISECOND);
        expect(result).toEqual(Millisecond);

        result = find('millisecond');
        expect(result).toEqual(Millisecond);
    });

    test('No value', () => {
        const result = find();
        expect(result).toEqual(Millisecond);
    });

    test('Non-existent values', () => {
        expect(() => find('non-existent value')).toThrowError(PrimeError);
    });
});
