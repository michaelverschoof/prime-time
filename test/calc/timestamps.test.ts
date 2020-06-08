import { add, difference, scale, subtract } from '../../src/lib/calc/timestamps';
import { Timespan } from '../../src/lib/types';
import { timestamp } from '../variables';

describe('Additions', () => {

    test('5 and 2 milliseconds', () => {
        let result = add(timestamp, 5, Timespan.MILLISECOND);
        expect(result).toEqual(timestamp + 5);

        result = add(result, 2, 'milliseconds');
        expect(result).toEqual(timestamp + 7);
    });

    test('5 and 2 days', () => {
        let result = add(timestamp, 5, Timespan.DAY);
        expect(result).toEqual(timestamp + 432000000);

        result = add(result, 2, 'days');
        expect(result).toEqual(timestamp + 604800000);
    });
});

describe('Subtractions', () => {

    test('5 and 2 milliseconds', () => {
        let result = subtract(timestamp, 5, Timespan.MILLISECOND);
        expect(result).toEqual(timestamp - 5);

        result = subtract(result, 2, 'milliseconds');
        expect(result).toEqual(timestamp - 7);
    });

    test('5 and 2 days', () => {
        let result = subtract(timestamp, 5, Timespan. DAY);
        expect(result).toEqual(timestamp - 432000000);

        result = subtract(result, 2, 'days');
        expect(result).toEqual(timestamp - 604800000);
    });
});

describe('Differences', () => {

    test('Add 5 days', () => {
        const left = timestamp;
        const right = add(timestamp, 5, Timespan.DAY);

        let result = difference(left, right, Timespan.DAY);
        expect(result).toBe(5);

        result = difference(right, left, Timespan.DAY);
        expect(result).toBe(-5);
    });

    test('Subtract 5 days', () => {
        const left = timestamp;
        const right = subtract(timestamp, 5, Timespan.DAY);

        let result = difference(left, right, Timespan.DAY);
        expect(result).toBe(-5);

        result = difference(right, left, Timespan.DAY);
        expect(result).toBe(5);
    });
});

describe('To scale', () => {

    test('To millisecond', () => {
        let result = scale(timestamp, Timespan.MILLISECOND);
        expect(result).toBe(timestamp);
    });

    test('To second', () => {
        let result = scale(timestamp, Timespan.SECOND);
        expect(result).toBe(519998462000);
    });

    test('To minute', () => {
        let result = scale(timestamp, Timespan.MINUTE);
        expect(result).toBe(519998460000);
    });

    test('To hour', () => {
        let result = scale(timestamp, Timespan.HOUR);
        expect(result).toBe(519998400000);
    });

    test('To day', () => {
        let result = scale(timestamp, Timespan.DAY);
        expect(result).toBe(519955200000);
    });

    test('To month', () => {
        let result = scale(timestamp, Timespan.MONTH);
        expect(result).toBe(517968000000);
    });

    test('To year', () => {
        let result = scale(timestamp, Timespan.YEAR);
        expect(result).toBe(504921600000);
    });
});
