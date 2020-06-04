import { add, difference, scale, subtract } from '../../src/lib/calc/timestamps';
import Day from '../../src/lib/units/timespans/day';
import Hour from '../../src/lib/units/timespans/hour';
import Millisecond from '../../src/lib/units/timespans/millisecond';
import Minute from '../../src/lib/units/timespans/minute';
import Month from '../../src/lib/units/timespans/month';
import Second from '../../src/lib/units/timespans/second';
import Year from '../../src/lib/units/timespans/year';

/**
 * 1986-6-24 12:01:02.003 GMT
 */
const timestamp : number = 519998462003;

describe('Additions', () => {

    test('5 and 2 milliseconds', () => {
        let result = add(timestamp, 5, Millisecond);
        expect(result).toEqual(timestamp + 5);

        result = add(result, 2, 'milliseconds');
        expect(result).toEqual(timestamp + 7);
    });

    test('5 and 2 days', () => {
        let result = add(timestamp, 5, Day);
        expect(result).toEqual(timestamp + 432000000);

        result = add(result, 2, 'days');
        expect(result).toEqual(timestamp + 604800000);
    });

});

describe('Subtractions', () => {

    test('5 and 2 milliseconds', () => {
        let result = subtract(timestamp, 5, Millisecond);
        expect(result).toEqual(timestamp - 5);

        result = subtract(result, 2, 'milliseconds');
        expect(result).toEqual(timestamp - 7);
    });

    test('5 and 2 days', () => {
        let result = subtract(timestamp, 5, Day);
        expect(result).toEqual(timestamp - 432000000);

        result = subtract(result, 2, 'days');
        expect(result).toEqual(timestamp - 604800000);
    });

});

describe('Differences', () => {

    test('Add 5 days', () => {
        const left = timestamp;
        const right = add(timestamp, 5, Day);

        let result = difference(left, right, Day);
        expect(result).toBe(5);

        result = difference(right, left, Day);
        expect(result).toBe(-5);
    });

    test('Subtract 5 days', () => {
        const left = timestamp;
        const right = subtract(timestamp, 5, Day);

        let result = difference(left, right, Day);
        expect(result).toBe(-5);

        result = difference(right, left, Day);
        expect(result).toBe(5);
    });

});

describe('To scale', () => {

    test('To millisecond', () => {
        let result = scale(timestamp, Millisecond);
        expect(result).toBe(timestamp);
    });

    test('To second', () => {
        let result = scale(timestamp, Second);
        expect(result).toBe(519998462000);
    });

    test('To minute', () => {
        let result = scale(timestamp, Minute);
        expect(result).toBe(519998460000);
    });

    test('To hour', () => {
        let result = scale(timestamp, Hour);
        expect(result).toBe(519998400000);
    });

    test('To day', () => {
        let result = scale(timestamp, Day);
        expect(result).toBe(519955200000);
    });

    test('To month', () => {
        let result = scale(timestamp, Month);
        expect(result).toBe(517968000000);
    });

    test('To year', () => {
        let result = scale(timestamp, Year);
        expect(result).toBe(504921600000);
    });

});
