import PrimeError from '../../src/error/prime-error';
import * as Timespans from '../../src/lib/units/timespans';
import Day from '../../src/lib/units/timespans/day';
import Hour from '../../src/lib/units/timespans/hour';
import Millisecond from '../../src/lib/units/timespans/millisecond';
import Minute from '../../src/lib/units/timespans/minute';
import Month from '../../src/lib/units/timespans/month';
import Second from '../../src/lib/units/timespans/second';
import Year from '../../src/lib/units/timespans/year';

describe('Find timespan', () => {

    test('Year', () => {
        let result = Timespans.find(Year);
        expect(result).toEqual(Year);

        result = Timespans.find('year');
        expect(result).toEqual(Year);
    });

    test('Month', () => {
        let result = Timespans.find(Month);
        expect(result).toEqual(Month);

        result = Timespans.find('month');
        expect(result).toEqual(Month);
    });

    test('Day', () => {
        let result = Timespans.find(Day);
        expect(result).toEqual(Day);

        result = Timespans.find('day');
        expect(result).toEqual(Day);
    });

    test('Hour', () => {
        let result = Timespans.find(Hour);
        expect(result).toEqual(Hour);

        result = Timespans.find('hour');
        expect(result).toEqual(Hour);
    });

    test('Minute', () => {
        let result = Timespans.find(Minute);
        expect(result).toEqual(Minute);

        result = Timespans.find('minute');
        expect(result).toEqual(Minute);
    });

    test('Second', () => {
        let result = Timespans.find(Second);
        expect(result).toEqual(Second);

        result = Timespans.find('second');
        expect(result).toEqual(Second);
    });

    test('Millisecond', () => {
        let result = Timespans.find(Millisecond);
        expect(result).toEqual(Millisecond);

        result = Timespans.find('millisecond');
        expect(result).toEqual(Millisecond);
    });

    test('No value', () => {
        const result = Timespans.find();
        expect(result).toEqual(Millisecond);
    });

    test('Non-existent values', () => {
        expect(() => Timespans.find('non-existent value')).toThrowError(PrimeError);
    });

});
