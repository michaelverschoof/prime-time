import { add, difference, subtract } from '../../src/lib/math/timestamps';
import { PeriodType } from '../../src/lib/units/constants';

/**
 * 1986-6-24 12:01:02.003 GMT
 */
const timestamp : number = 519998462003;

describe('Additions', () => {

    test('5 and 2 milliseconds', () => {
        let result = add(timestamp, 5, PeriodType.MILLISECOND);
        expect(result).toEqual(timestamp + 5);

        result = add(result, 2, 'milliseconds');
        expect(result).toEqual(timestamp + 7);
    });

    test('5 and 2 days', () => {
        let result = add(timestamp, 5, PeriodType.DAY);
        expect(result).toEqual(timestamp + 432000000);

        result = add(result, 2, 'days');
        expect(result).toEqual(timestamp + 604800000);
    });
});

describe('Subtractions', () => {

    test('5 and 2 milliseconds', () => {
        let result = subtract(timestamp, 5, PeriodType.MILLISECOND);
        expect(result).toEqual(timestamp - 5);

        result = subtract(result, 2, 'milliseconds');
        expect(result).toEqual(timestamp - 7);
    });

    test('5 and 2 days', () => {
        let result = subtract(timestamp, 5, PeriodType.DAY);
        expect(result).toEqual(timestamp - 432000000);

        result = subtract(result, 2, 'days');
        expect(result).toEqual(timestamp - 604800000);
    });
});

describe('Differences', () => {

    test('Add 5 days', () => {
        const left = timestamp;
        const right = add(timestamp, 5, PeriodType.DAY);

        let result = difference(left, right, PeriodType.DAY);
        expect(result).toBe(-5);

        result = difference(right, left, PeriodType.DAY);
        expect(result).toBe(5);
    });

    test('Subtract 5 days', () => {
        const left = timestamp;
        const right = subtract(timestamp, 5, PeriodType.DAY);

        let result = difference(left, right, PeriodType.DAY);
        expect(result).toBe(5);

        result = difference(right, left, PeriodType.DAY);
        expect(result).toBe(-5);
    });
});