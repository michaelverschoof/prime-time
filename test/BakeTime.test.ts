import { baketime, BakeTime } from '../src/BakeTime';
import BakingError from '../src/error/BakingError';
import { PeriodType } from '../src/lib/units/constants';

/**
 * 1986-6-24 12:01:02.003 GMT
 */
const timestamp : number = 519998462003;

describe('Create BakeTime', () => {
    let date : Date;

    beforeAll(() => {
        date = new Date(timestamp);
    });

    describe('Using constructor', () => {

        test('Providing timestamp', () => {
            let bakeTime = new BakeTime(timestamp);
            expect(bakeTime instanceof BakeTime).toBe(true);
            expect(bakeTime.getTimestamp()).toEqual(timestamp);
            expect(bakeTime.getDate()).toEqual(date);
        });

        test('Providing null', () => {
            let bakeTime = new BakeTime(null);
            expect(bakeTime instanceof BakeTime).toBe(true);
            expect(bakeTime.getTimestamp()).toBeNull();
            expect(bakeTime.getDate()).toEqual(new Date(0));
        });
    });

    describe('Using baketime function', () => {

        test('Providing nothing', () => {
            const now = Date.now();
            const result = baketime();
            expect(result instanceof BakeTime).toBe(true);
            expect(result.getTimestamp()).toBeGreaterThanOrEqual(now);
            expect(result.getTimestamp()).toBeLessThanOrEqual(now + 100);
        });

        test('Providing timestamp', () => {
            const result = baketime(timestamp);
            expect(result instanceof BakeTime).toBe(true);
            expect(result.getTimestamp()).toEqual(timestamp);
            expect(result.getDate()).toEqual(date);
        });

        test('Providing date', () => {
            const result = baketime(date);
            expect(result instanceof BakeTime).toBe(true);
            expect(result.getTimestamp()).toEqual(timestamp);
            expect(result.getDate()).toEqual(date);
        });

        test('Providing BakeTime', () => {
            const result = baketime(new BakeTime(timestamp));
            expect(result instanceof BakeTime).toBe(true);
            expect(result.getTimestamp()).toEqual(timestamp);
            expect(result.getDate()).toEqual(date);
        });

        test('Providing valid string', () => {
            const result = baketime(date.toISOString());
            expect(result instanceof BakeTime).toBe(true);
            expect(result.getTimestamp()).toEqual(timestamp);
            expect(result.getDate()).toEqual(date);
        });

        test('Providing invalid string', () => {
            expect(() => { baketime('not-a-date') }).toThrowError(BakingError);
        });
    });
});

describe('Adding time', () => {
    let baked : BakeTime;

    beforeAll(() => {
        baked = new BakeTime(timestamp);
    });

    beforeEach(() => {
        baked.update(timestamp);
    });

    test('Milliseconds', () => {
        let result = baked.add(5, PeriodType.MILLISECOND).getTimestamp();
        expect(result).toEqual(timestamp + 5);

        result = baked.add(2, 'milliseconds').getTimestamp();
        expect(result).toEqual(timestamp + 7);
    });

    test('Days', () => {
        let result = baked.add(5, PeriodType.DAY).getTimestamp();
        expect(result).toEqual(timestamp + 432000000);

        result = baked.add(2, 'days').getTimestamp();
        expect(result).toEqual(timestamp + 604800000);
    });
});

describe('Subtracting time', () => {
    let baked : BakeTime;

    beforeAll(() => {
        baked = new BakeTime(timestamp);
    });

    beforeEach(() => {
        baked.update(timestamp);
    });

    test('Milliseconds', () => {
        let result = baked.subtract(5, PeriodType.MILLISECOND).getTimestamp();
        expect(result).toEqual(timestamp - 5);

        result = baked.subtract(2, 'milliseconds').getTimestamp();
        expect(result).toEqual(timestamp - 7);
    });

    test('Days', () => {
        let result = baked.subtract(5, PeriodType.DAY).getTimestamp();
        expect(result).toEqual(timestamp - 432000000);

        result = baked.subtract(2, 'days').getTimestamp();
        expect(result).toEqual(timestamp - 604800000);
    });
});


describe('Comparing time', () => {
    let baked : BakeTime;

    beforeAll(() => {
        baked = new BakeTime(timestamp);
    });

    describe('Is after', () => {

        beforeEach(() => {
            baked.update(timestamp);
        });

        test('Without equals', () => {
            const compare = baketime(timestamp).add(2, PeriodType.DAY);

            let result = compare.after(baked);
            expect(result).toBe(true);

            result = compare.after(baked, PeriodType.MILLISECOND);
            expect(result).toBe(true);

            result = compare.after(baked, PeriodType.DAY);
            expect(result).toBe(true);

            result = compare.after(baked, PeriodType.WEEK);
            expect(result).toBe(false);
        });

        test('With equals', () => {
            const compare = baketime(timestamp);

            const result = compare.after(baked, PeriodType.DAY, true);
            expect(result).toBe(true);
        });

        test('Not after', () => {
            const compare = baketime(timestamp).subtract(1, PeriodType.DAY);

            const result = compare.after(baked, PeriodType.DAY, true);
            expect(result).toBe(false);
        });
    });

    describe('Is before', () => {

        beforeEach(() => {
            baked.update(timestamp);
        });

        test('Without equals', () => {
            const compare = baketime(timestamp).subtract(2, PeriodType.DAY);

            let result = compare.before(baked);
            expect(result).toBe(true);

            result = compare.before(baked, PeriodType.MILLISECOND);
            expect(result).toBe(true);

            result = compare.before(baked, PeriodType.DAY);
            expect(result).toBe(true);

            result = compare.before(baked, PeriodType.WEEK);
            expect(result).toBe(false);
        });

        test('With equals', () => {
            const compare = baketime(timestamp);

            const result = compare.before(baked, PeriodType.DAY, true);
            expect(result).toBe(true);
        });

        test('Not after', () => {
            const compare = baketime(timestamp).add(1, PeriodType.DAY);

            const result = compare.before(baked, PeriodType.DAY, true);
            expect(result).toBe(false);
        });
    });
});