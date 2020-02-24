import BakingError from '../src/error/BakingError';
import { Units } from '../src/lib/units/units';
import { primetime, PrimeTime } from '../src/prime-time';

const Timespans = Units.Timespans;

/**
 * 1986-6-24 12:01:02.003 GMT
 */
const timestamp : number = 519998462003;

describe('Create', () => {
    let date : Date;

    beforeAll(() => {
        date = new Date(timestamp);
    });

    describe('Using constructor', () => {

        test('Providing timestamp', () => {
            let primeTime = new PrimeTime(timestamp);
            expect(primeTime instanceof PrimeTime).toBe(true);
            expect(primeTime.getTimestamp()).toEqual(timestamp);
            expect(primeTime.getDate()).toEqual(date);
        });

        test('Providing null', () => {
            let primeTime = new PrimeTime(null);
            expect(primeTime instanceof PrimeTime).toBe(true);
            expect(primeTime.getTimestamp()).toBeNull();
            expect(primeTime.getDate()).toEqual(new Date(0));
        });
    });

    describe('Using function', () => {

        test('Providing nothing', () => {
            const now = Date.now();
            const result = primetime();
            expect(result instanceof PrimeTime).toBe(true);
            expect(result.getTimestamp()).toBeGreaterThanOrEqual(now);
            expect(result.getTimestamp()).toBeLessThanOrEqual(now + 100);
        });

        test('Providing timestamp', () => {
            const result = primetime(timestamp);
            expect(result instanceof PrimeTime).toBe(true);
            expect(result.getTimestamp()).toEqual(timestamp);
            expect(result.getDate()).toEqual(date);
        });

        test('Providing date', () => {
            const result = primetime(date);
            expect(result instanceof PrimeTime).toBe(true);
            expect(result.getTimestamp()).toEqual(timestamp);
            expect(result.getDate()).toEqual(date);
        });

        test('Providing PrimeTime', () => {
            const result = primetime(new PrimeTime(timestamp));
            expect(result instanceof PrimeTime).toBe(true);
            expect(result.getTimestamp()).toEqual(timestamp);
            expect(result.getDate()).toEqual(date);
        });

        test('Providing valid string', () => {
            const result = primetime(date.toISOString());
            expect(result instanceof PrimeTime).toBe(true);
            expect(result.getTimestamp()).toEqual(timestamp);
            expect(result.getDate()).toEqual(date);
        });

        test('Providing invalid string', () => {
            expect(() => { primetime('not-a-date') }).toThrowError(BakingError);
        });
    });
});

describe('Adding time', () => {
    let primeTime : PrimeTime;

    beforeAll(() => {
        primeTime = new PrimeTime(timestamp);
    });

    beforeEach(() => {
        primeTime.update(timestamp);
    });

    test('Milliseconds', () => {
        let result = primeTime.add(5, Timespans.MILLISECOND).getTimestamp();
        expect(result).toEqual(timestamp + 5);

        result = primeTime.add(2, 'milliseconds').getTimestamp();
        expect(result).toEqual(timestamp + 7);
    });

    test('Days', () => {
        let result = primeTime.add(5, Timespans.DAY).getTimestamp();
        expect(result).toEqual(timestamp + 432000000);

        result = primeTime.add(2, 'days').getTimestamp();
        expect(result).toEqual(timestamp + 604800000);
    });
});

describe('Subtracting time', () => {
    let primeTime : PrimeTime;

    beforeAll(() => {
        primeTime = new PrimeTime(timestamp);
    });

    beforeEach(() => {
        primeTime.update(timestamp);
    });

    test('Milliseconds', () => {
        let result = primeTime.subtract(5, Timespans.MILLISECOND).getTimestamp();
        expect(result).toEqual(timestamp - 5);

        result = primeTime.subtract(2, 'milliseconds').getTimestamp();
        expect(result).toEqual(timestamp - 7);
    });

    test('Days', () => {
        let result = primeTime.subtract(5, Timespans.DAY).getTimestamp();
        expect(result).toEqual(timestamp - 432000000);

        result = primeTime.subtract(2, 'days').getTimestamp();
        expect(result).toEqual(timestamp - 604800000);
    });
});

describe('Is after', () => {
    let primeTime : PrimeTime;

    beforeAll(() => {
        primeTime = new PrimeTime(timestamp);
    });

    test('Without equals', () => {
        const compare = primetime(timestamp).add(2, Timespans.DAY);

        let result = compare.after(primeTime);
        expect(result).toBe(true);

        result = compare.after(primeTime, Timespans.MILLISECOND);
        expect(result).toBe(true);

        result = compare.after(primeTime, Timespans.DAY);
        expect(result).toBe(true);

        result = compare.after(primeTime, Timespans.WEEK);
        expect(result).toBe(false);
    });

    test('With equals', () => {
        const compare = primetime(timestamp);

        const result = compare.after(primeTime, Timespans.DAY, true);
        expect(result).toBe(true);
    });

    test('Not after', () => {
        const compare = primetime(timestamp).subtract(1, Timespans.DAY);

        const result = compare.after(primeTime, Timespans.DAY, true);
        expect(result).toBe(false);
    });
});

describe('Is before', () => {
    let primeTime : PrimeTime;

    beforeAll(() => {
        primeTime = new PrimeTime(timestamp);
    });

    test('Without equals', () => {
        const compare = primetime(timestamp).subtract(2, Timespans.DAY);

        let result = compare.before(primeTime);
        expect(result).toBe(true);

        result = compare.before(primeTime, Timespans.MILLISECOND);
        expect(result).toBe(true);

        result = compare.before(primeTime, Timespans.DAY);
        expect(result).toBe(true);

        result = compare.before(primeTime, Timespans.WEEK);
        expect(result).toBe(false);
    });

    test('With equals', () => {
        const compare = primetime(timestamp);

        const result = compare.before(primeTime, Timespans.DAY, true);
        expect(result).toBe(true);
    });

    test('Not after', () => {
        const compare = primetime(timestamp).add(1, Timespans.DAY);

        const result = compare.before(primeTime, Timespans.DAY, true);
        expect(result).toBe(false);
    });
});

describe('Is between', () => {
    let primeTime : PrimeTime;

    beforeAll(() => {
        primeTime = new PrimeTime(timestamp);
    });

    test('Without equals', () => {
        const from = primetime(timestamp).subtract(2, Timespans.DAY);
        const to = primetime(timestamp).add(2, Timespans.DAY);

        let result = primeTime.between(from, to);
        expect(result).toBe(true);

        result = primeTime.between(from, to, Timespans.MILLISECOND);
        expect(result).toBe(true);

        result = primeTime.between(from, to, Timespans.DAY);
        expect(result).toBe(true);

        result = primeTime.between(from, to, Timespans.WEEK);
        expect(result).toBe(false);
    });

    test('With equals', () => {
        const from = primetime(timestamp).subtract(2, Timespans.DAY);
        const to = primetime(timestamp);

        let result = primeTime.between(from, to, Timespans.MILLISECOND, true);
        expect(result).toBe(true);

        result = primeTime.between(from, to, Timespans.DAY, true);
        expect(result).toBe(true);
    });

    test('Not between', () => {
        const from = primetime(timestamp).add(1, Timespans.DAY);
        const to = primetime(timestamp).add(2, Timespans.DAY);

        let result = primeTime.between(from, to);
        expect(result).toBe(false);

        result = primeTime.between(from, to, Timespans.DAY, true);
        expect(result).toBe(false);
    });
});

describe('Is equal', () => {
    let primeTime : PrimeTime;

    beforeAll(() => {
        primeTime = new PrimeTime(timestamp);
    });

    test('5 minute difference', () => {
        const compare = primetime(timestamp).add(5, Timespans.MINUTE);

        let result = compare.equals(primeTime);
        expect(result).toBe(false);

        result = compare.equals(primeTime, Timespans.MINUTE);
        expect(result).toBe(false);

        result = compare.equals(primeTime, Timespans.DAY);
        expect(result).toBe(true);
    });
});