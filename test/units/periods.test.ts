import BakingError from '../../src/error/BakingError';
import { PeriodType } from '../../src/lib/units/constants';
import { Periods } from '../../src/lib/units/periods';
import find = Periods.find;

describe('Find periods', () => {

    test('Year', () => {
        const expected = Periods.YEAR;

        let result = find(PeriodType.YEAR);
        expect(result).toEqual(expected);

        result = find('year');
        expect(result).toEqual(expected);

        result = find('years');
        expect(result).toEqual(expected);
    });

    test('Month', () => {
        const expected = Periods.MONTH;

        let result = find(PeriodType.MONTH);
        expect(result).toEqual(expected);

        result = find('month');
        expect(result).toEqual(expected);

        result = find('months');
        expect(result).toEqual(expected);
    });

    test('Week', () => {
        const expected = Periods.WEEK;

        let result = find(PeriodType.WEEK);
        expect(result).toEqual(expected);

        result = find('week');
        expect(result).toEqual(expected);

        result = find('weeks');
        expect(result).toEqual(expected);
    });

    test('Day', () => {
        const expected = Periods.DAY;

        let result = find(PeriodType.DAY);
        expect(result).toEqual(expected);

        result = find('day');
        expect(result).toEqual(expected);

        result = find('days');
        expect(result).toEqual(expected);
    });

    test('Hour', () => {
        const expected = Periods.HOUR;

        let result = find(PeriodType.HOUR);
        expect(result).toEqual(expected);

        result = find('hour');
        expect(result).toEqual(expected);

        result = find('hours');
        expect(result).toEqual(expected);
    });

    test('Minute', () => {
        const expected = Periods.MINUTE;

        let result = find(PeriodType.MINUTE);
        expect(result).toEqual(expected);

        result = find('minute');
        expect(result).toEqual(expected);

        result = find('minutes');
        expect(result).toEqual(expected);
    });

    test('Second', () => {
        const expected = Periods.SECOND;

        let result = find(PeriodType.SECOND);
        expect(result).toEqual(expected);

        result = find('second');
        expect(result).toEqual(expected);

        result = find('seconds');
        expect(result).toEqual(expected);
    });

    test('Millisecond', () => {
        const expected = Periods.MILLISECOND;

        let result = find(PeriodType.MILLISECOND);
        expect(result).toEqual(expected);

        result = find('millisecond');
        expect(result).toEqual(expected);

        result = find('milliseconds');
        expect(result).toEqual(expected);
    });

    test('No value', () => {
        let result = find();
        expect(result).toEqual(Periods.MILLISECOND);
    });

    test('Non-existent value', () => {
        expect(() => { find('non-existent value') }).toThrowError(BakingError);
    });
});