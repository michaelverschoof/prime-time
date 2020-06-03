import PrimeError from '../src/error/prime-error';
import { Timespans } from '../src/lib/units';
import { primetime, PrimeTime } from '../src/prime-time';

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
            let prime = new PrimeTime(timestamp);
            expect(prime instanceof PrimeTime).toBe(true);
            expect(prime.getTimestamp()).toEqual(timestamp);
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
        });

        test('Providing date', () => {
            const result = primetime(date);
            expect(result instanceof PrimeTime).toBe(true);
            expect(result.getTimestamp()).toEqual(timestamp);
        });

        test('Providing PrimeTime', () => {
            const result = primetime(new PrimeTime(timestamp));
            expect(result instanceof PrimeTime).toBe(true);
            expect(result.getTimestamp()).toEqual(timestamp);
        });

        test('Providing valid string', () => {
            const result = primetime(date.toISOString());
            expect(result instanceof PrimeTime).toBe(true);
            expect(result.getTimestamp()).toEqual(timestamp);
        });

        test('Providing invalid string', () => {
            expect(() => primetime('not-a-date')).toThrowError(PrimeError);
        });

    });

});

describe('Adding time', () => {
    let prime : PrimeTime;

    beforeAll(() => {
        prime = new PrimeTime(timestamp);
    });

    beforeEach(() => {
        prime.update(timestamp);
    });

    test('Milliseconds', () => {
        let result = prime.add(5, Timespans.MILLISECOND).getTimestamp();
        expect(result).toEqual(timestamp + 5);

        result = prime.add(2, 'milliseconds').getTimestamp();
        expect(result).toEqual(timestamp + 7);
    });

    test('Days', () => {
        let result = prime.add(5, Timespans.DAY).getTimestamp();
        expect(result).toEqual(timestamp + 432000000);

        result = prime.add(2, 'days').getTimestamp();
        expect(result).toEqual(timestamp + 604800000);
    });

});

describe('Subtracting time', () => {
    let prime : PrimeTime;

    beforeAll(() => {
        prime = new PrimeTime(timestamp);
    });

    beforeEach(() => {
        prime.update(timestamp);
    });

    test('Milliseconds', () => {
        let result = prime.subtract(5, Timespans.MILLISECOND).getTimestamp();
        expect(result).toEqual(timestamp - 5);

        result = prime.subtract(2, 'milliseconds').getTimestamp();
        expect(result).toEqual(timestamp - 7);
    });

    test('Days', () => {
        let result = prime.subtract(5, Timespans.DAY).getTimestamp();
        expect(result).toEqual(timestamp - 432000000);

        result = prime.subtract(2, 'days').getTimestamp();
        expect(result).toEqual(timestamp - 604800000);
    });

});

describe('Is after', () => {
    let prime : PrimeTime;

    beforeAll(() => {
        prime = new PrimeTime(timestamp);
    });

    test('Without equals', () => {
        const compare = primetime(timestamp).add(2, Timespans.DAY);

        let result = compare.after(prime);
        expect(result).toBe(true);

        result = compare.after(prime, Timespans.MILLISECOND);
        expect(result).toBe(true);

        result = compare.after(prime, Timespans.DAY);
        expect(result).toBe(true);

        result = compare.after(prime, Timespans.MONTH);
        expect(result).toBe(false);
    });

    test('With equals', () => {
        const compare = primetime(timestamp);

        const result = compare.after(prime, Timespans.DAY, true);
        expect(result).toBe(true);
    });

    test('Not after', () => {
        const compare = primetime(timestamp).subtract(1, Timespans.DAY);

        const result = compare.after(prime, Timespans.DAY, true);
        expect(result).toBe(false);
    });

});

describe('Is before', () => {
    let prime : PrimeTime;

    beforeAll(() => {
        prime = new PrimeTime(timestamp);
    });

    test('Without equals', () => {
        const compare = primetime(timestamp).subtract(2, Timespans.DAY);

        let result = compare.before(prime);
        expect(result).toBe(true);

        result = compare.before(prime, Timespans.MILLISECOND);
        expect(result).toBe(true);

        result = compare.before(prime, Timespans.DAY);
        expect(result).toBe(true);

        result = compare.before(prime, Timespans.MONTH);
        expect(result).toBe(false);
    });

    test('With equals', () => {
        const compare = primetime(timestamp);

        const result = compare.before(prime, Timespans.DAY, true);
        expect(result).toBe(true);
    });

    test('Not after', () => {
        const compare = primetime(timestamp).add(1, Timespans.DAY);

        const result = compare.before(prime, Timespans.DAY, true);
        expect(result).toBe(false);
    });

});

describe('Is between', () => {
    let prime : PrimeTime;

    beforeAll(() => {
        prime = new PrimeTime(timestamp);
    });

    test('Without equals', () => {
        const from = primetime(timestamp).subtract(2, Timespans.DAY);
        const to = primetime(timestamp).add(2, Timespans.DAY);

        let result = prime.between(from, to);
        expect(result).toBe(true);

        result = prime.between(from, to, Timespans.MILLISECOND);
        expect(result).toBe(true);

        result = prime.between(from, to, Timespans.DAY);
        expect(result).toBe(true);

        result = prime.between(from, to, Timespans.MONTH);
        expect(result).toBe(false);
    });

    test('With equals', () => {
        const from = primetime(timestamp).subtract(2, Timespans.DAY);
        const to = primetime(timestamp);

        let result = prime.between(from, to, Timespans.MILLISECOND, true);
        expect(result).toBe(true);

        result = prime.between(from, to, Timespans.DAY, true);
        expect(result).toBe(true);
    });

    test('Not between', () => {
        const from = primetime(timestamp).add(1, Timespans.DAY);
        const to = primetime(timestamp).add(2, Timespans.DAY);

        let result = prime.between(from, to);
        expect(result).toBe(false);

        result = prime.between(from, to, Timespans.DAY, true);
        expect(result).toBe(false);
    });

});

describe('Is equal', () => {
    let prime : PrimeTime;

    beforeAll(() => {
        prime = new PrimeTime(timestamp);
    });

    test('5 minute difference', () => {
        const compare = primetime(timestamp).add(5, Timespans.MINUTE);

        let result = compare.equals(prime);
        expect(result).toBe(false);

        result = compare.equals(prime, Timespans.MINUTE);
        expect(result).toBe(false);

        result = compare.equals(prime, Timespans.DAY);
        expect(result).toBe(true);
    });

});

describe('To timespan', () => {
    let prime : PrimeTime;

    beforeAll(() => {
        prime = new PrimeTime(timestamp);
    });

    test('Seconds', () => {
        const result = prime.scale(Timespans.SECOND);
        expect(result.getTimestamp()).toEqual(519998462000);
    });

    test('Minutes', () => {
        const result = prime.scale(Timespans.MINUTE);
        expect(result.getTimestamp()).toEqual(519998460000);
    });

    test('Hours', () => {
        const result = prime.scale(Timespans.HOUR);
        expect(result.getTimestamp()).toEqual(519998400000);
    });

    test('Days', () => {
        const result = prime.scale(Timespans.DAY);
        expect(result.getTimestamp()).toEqual(519955200000);
    });

    test('Months', () => {
        const result = prime.scale(Timespans.MONTH);
        expect(result.getTimestamp()).toEqual(517968000000);
    });

    test('Years', () => {
        const result = prime.scale(Timespans.YEAR);
        expect(result.getTimestamp()).toEqual(504921600000);
    });

});

describe('Clone', () => {
    let prime : PrimeTime;

    beforeAll(() => {
        prime = new PrimeTime(timestamp);
    });

    test('Without timespan', () => {
        const result = prime.clone();
        expect(result).toEqual(prime);
    });

    test('Milliseconds', () => {
        const result = prime.clone(Timespans.MILLISECOND);
        expect(result).toEqual(prime);
    });

    test('Seconds', () => {
        const result = prime.clone(Timespans.SECOND);
        expect(result.getTimestamp()).toEqual(519998462000);
    });

    test('Minutes', () => {
        const result = prime.clone(Timespans.MINUTE);
        expect(result.getTimestamp()).toEqual(519998460000);
    });

    test('Hours', () => {
        const result = prime.clone(Timespans.HOUR);
        expect(result.getTimestamp()).toEqual(519998400000);
    });

    test('Days', () => {
        const result = prime.clone(Timespans.DAY);
        expect(result.getTimestamp()).toEqual(519955200000);
    });

    test('Months', () => {
        const result = prime.clone(Timespans.MONTH);
        expect(result.getTimestamp()).toEqual(517968000000);
    });

    test('Years', () => {
        const result = prime.clone(Timespans.YEAR);
        expect(result.getTimestamp()).toEqual(504921600000);
    });

});

describe('Format', () => {
    let prime : PrimeTime;

    beforeAll(() => {
        prime = new PrimeTime(timestamp);
    });

    test('Without options', () => {
        const result = prime.format();
        expect(result).toBe('6/24/1986');
    });

    test('With format', () => {
        let result = prime.format('weekday, day, month, year, hour, minute, second');
        expect(result).toEqual('Tuesday, June 24, 1986, 12:01:02 PM');

        result = prime.format('WDD, DD, MMMM, YY, H, mm, ss');
        expect(result).toEqual('Tuesday, June 24, 1986, 12:01:02 PM');

        result = prime.format('{weekday}, {month} {day}, {year} @ {hour}:{minute}:{second}');
        expect(result).toBe('Tuesday, June 24, 1986 @ 12:01:02');

        result = prime.format('{WDD}, {MMMM} {DD}, {YY} @ {HH}:{mm}:{ss}');
        expect(result).toBe('Tuesday, June 24, 1986 @ 12:01:02');
    });

    test('With locale', () => {
        let result = prime.format(undefined, 'en-us');
        expect(result).toEqual('6/24/1986');

        result = prime.format(undefined, 'en-gb');
        expect(result).toBe('24/06/1986');

        result = prime.format(undefined, 'nl-nl');
        expect(result).toBe('24-6-1986');
    });

    test('With format and locale)', () => {
        let result = prime.format('weekday, day, month, year, hour, minute, second', 'en-us');
        expect(result).toEqual('Tuesday, June 24, 1986, 12:01:02 PM');

        result = prime.format('WDD, DD, MMMM, YY, H, mm, ss', 'en-us');
        expect(result).toEqual('Tuesday, June 24, 1986, 12:01:02 PM');

        result = prime.format('{weekday}, {month} {day}, {year} @ {hour}:{minute}:{second}', 'en-us');
        expect(result).toBe('Tuesday, June 24, 1986 @ 12:01:02');

        result = prime.format('{WDD}, {MMMM} {DD}, {YY} @ {HH}:{mm}:{ss}', 'en-us');
        expect(result).toBe('Tuesday, June 24, 1986 @ 12:01:02');
    });

});

describe('Localise', () => {
    let prime : PrimeTime;

    beforeAll(() => {
        prime = new PrimeTime(timestamp);
    });

    test('Without options', () => {
        const result = prime.localise();
        expect(result).toBe('6/24/1986');
    });

    test('With format', () => {
        let result = prime.localise('weekday, day, month, year, hour, minute, second');
        expect(result).toEqual('Tuesday, June 24, 1986, 12:01:02 PM');

        result = prime.localise('WDD, DD, MMMM, YY, H, mm, ss');
        expect(result).toEqual('Tuesday, June 24, 1986, 12:01:02 PM');
    });

    test('With locale', () => {
        let result = prime.localise(undefined, 'en-us');
        expect(result).toEqual('6/24/1986');

        result = prime.localise(undefined, 'en-gb');
        expect(result).toBe('24/06/1986');

        result = prime.localise(undefined, 'nl-nl');
        expect(result).toBe('24-6-1986');
    });

    test('With format and locale)', () => {
        let result = prime.localise('weekday, day, month, year, hour, minute, second', 'en-us');
        expect(result).toEqual('Tuesday, June 24, 1986, 12:01:02 PM');

        result = prime.localise('WDD, DD, MMMM, YY, H, mm, ss', 'en-us');
        expect(result).toEqual('Tuesday, June 24, 1986, 12:01:02 PM');
    });

});

describe('Customise', () => {
    let prime : PrimeTime;

    beforeAll(() => {
        prime = new PrimeTime(timestamp);
    });

    test('With format', () => {
        let result = prime.customise('{weekday}, {month} {day}, {year} @ {hour}:{minute}:{second}');
        expect(result).toBe('Tuesday, June 24, 1986 @ 12:01:02');

        result = prime.customise('{WDD}, {MMMM} {DD}, {YY} @ {HH}:{mm}:{ss}');
        expect(result).toBe('Tuesday, June 24, 1986 @ 12:01:02');
    });

    test('With format and locale)', () => {
        let result = prime.customise('{weekday}, {month} {day}, {year} @ {hour}:{minute}:{second}', 'en-us');
        expect(result).toBe('Tuesday, June 24, 1986 @ 12:01:02');

        result = prime.customise('{WDD}, {MMMM} {DD}, {YY} @ {HH}:{mm}:{ss}', 'en-us');
        expect(result).toBe('Tuesday, June 24, 1986 @ 12:01:02');
    });

});
