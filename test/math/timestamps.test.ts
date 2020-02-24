import { add, difference, subtract } from '../../src/lib/math/timestamps';
import { Units } from '../../src/lib/units/units';

const Timespans = Units.Timespans;

/**
 * 1986-6-24 12:01:02.003 GMT
 */
const timestamp : number = 519998462003;

describe('Additions', () => {

    test('5 and 2 milliseconds', () => {
        let result = add(timestamp, 5, Timespans.MILLISECOND);
        expect(result).toEqual(timestamp + 5);

        result = add(result, 2, 'milliseconds');
        expect(result).toEqual(timestamp + 7);
    });

    test('5 and 2 days', () => {
        let result = add(timestamp, 5, Timespans.DAY);
        expect(result).toEqual(timestamp + 432000000);

        result = add(result, 2, 'days');
        expect(result).toEqual(timestamp + 604800000);
    });
});

describe('Subtractions', () => {

    test('5 and 2 milliseconds', () => {
        let result = subtract(timestamp, 5, Timespans.MILLISECOND);
        expect(result).toEqual(timestamp - 5);

        result = subtract(result, 2, 'milliseconds');
        expect(result).toEqual(timestamp - 7);
    });

    test('5 and 2 days', () => {
        let result = subtract(timestamp, 5, Timespans.DAY);
        expect(result).toEqual(timestamp - 432000000);

        result = subtract(result, 2, 'days');
        expect(result).toEqual(timestamp - 604800000);
    });
});

describe('Differences', () => {

    test('Add 5 days', () => {
        const left = timestamp;
        const right = add(timestamp, 5, Timespans.DAY);

        let result = difference(left, right, Timespans.DAY);
        expect(result).toBe(-5);

        result = difference(right, left, Timespans.DAY);
        expect(result).toBe(5);
    });

    test('Subtract 5 days', () => {
        const left = timestamp;
        const right = subtract(timestamp, 5, Timespans.DAY);

        let result = difference(left, right, Timespans.DAY);
        expect(result).toBe(5);

        result = difference(right, left, Timespans.DAY);
        expect(result).toBe(-5);
    });
});