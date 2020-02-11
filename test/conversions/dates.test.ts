import BakingError from '../../src/error/BakingError';
import { Dates } from '../../src/lib/conversions/dates';
import { PeriodType } from '../../src/lib/units/constants';
import extract = Dates.extract;
import split = Dates.split;
import utc = Dates.utc;

/**
 * 1986-6-24 12:01:02.003 GMT
 */
const timestamp : number = 519998462003;

describe('Extractions', () => {

    test('Providing nothing', () => {
        const now = Date.now();
        const result = extract();
        expect(result).toBeGreaterThanOrEqual(now);
        expect(result).toBeLessThanOrEqual(now + 100);
    });

    test('Providing timestamp', () => {
        const result = extract(timestamp);
        expect(result).toEqual(timestamp);
    });

    test('Providing date', () => {
        const result = extract(new Date(timestamp));
        expect(result).toEqual(timestamp);
    });

    test('Providing valid string', () => {
        const result = extract('1986-6-24 12:01:02.003 GMT');
        expect(result).toEqual(timestamp);
    });

    test('Providing invalid string', () => {
        expect(() => { extract('not-a-date') }).toThrowError(BakingError);
    });
});

describe('Split', () => {
    let date : Date;

    beforeAll(() => {
        date = new Date(timestamp);
    });

    test('Providing year', () => {
        const result = split(date, PeriodType.YEAR);
        expect(result).toEqual([1986]);
    });

    test('Providing month', () => {
        const result = split(date, PeriodType.MONTH);
        expect(result).toEqual([1986, 5]);
    });

    test('Providing week', () => {
        const result = split(date, PeriodType.WEEK);
        expect(result).toEqual([1986, 5, 24]);
    });

    test('Providing day', () => {
        const result = split(date, PeriodType.DAY);
        expect(result).toEqual([1986, 5, 24]);
    });

    test('Providing hour', () => {
        const result = split(date, PeriodType.HOUR);
        expect(result).toEqual([1986, 5, 24, 12]);
    });

    test('Providing minute', () => {
        const result = split(date, PeriodType.MINUTE);
        expect(result).toEqual([1986, 5, 24, 12, 1]);
    });

    test('Providing second', () => {
        const result = split(date, PeriodType.SECOND);
        expect(result).toEqual([1986, 5, 24, 12, 1, 2]);
    });

    test('Providing millisecond', () => {
        const result = split(date, PeriodType.MILLISECOND);
        expect(result).toEqual([1986, 5, 24, 12, 1, 2, 3]);
    });

    test('Providing null', () => {
        const result = split(date, null);
        expect(result).toEqual([1986, 5, 24, 12, 1, 2, 3]);
    });
});

describe('UTC', () => {
    let date : Date;

    beforeAll(() => {
        date = new Date(timestamp);
    });

    test('Providing year', () => {
        const result = utc([1986]);
        expect(result).toBe(504921600000);
    });

    test('Providing month', () => {
        const result = utc([1986, 5]);
        expect(result).toBe(517968000000);
    });

    test('Providing week', () => {
        const result = utc([1986, 5, 24]);
        expect(result).toBe(519955200000);
    });

    test('Providing day', () => {
        const result = utc([1986, 5, 24]);
        expect(result).toBe(519955200000);
    });

    test('Providing hour', () => {
        const result = utc([1986, 5, 24, 12]);
        expect(result).toBe(519998400000);
    });

    test('Providing minute', () => {
        const result = utc([1986, 6, 24, 12, 1]);
        expect(result).toBe(522590460000);
    });

    test('Providing second', () => {
        const result = utc([1986, 6, 24, 12, 1, 2]);
        expect(result).toBe(522590462000);
    });

    test('Providing millisecond', () => {
        const result = utc([1986, 6, 24, 12, 1, 2, 3]);
        expect(result).toBe(522590462003);
    });
});