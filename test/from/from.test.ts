import PrimeError from '../../src/error/prime-error';
import * as From from '../../src/lib/from/from';
import PrimeTime from '../../src/lib/prime-time';

/**
 * 1986-6-24 12:01:02.003 GMT
 */
const timestamp : number = 519998462003;

const now = Date.now();

const prime : PrimeTime = new PrimeTime(timestamp);

test('From nothing', () => {
    const result = From.anything();
    expect(result instanceof PrimeTime).toBe(true);
    expect(result.getTimestamp()).toBeGreaterThanOrEqual(now);
    expect(result.getTimestamp()).toBeLessThanOrEqual(now + 1000);
});

test('From Date', () => {
    const result = From.anything(new Date(now));
    expect(result.getTimestamp()).toEqual(now);
});

test('From PrimeTime', () => {
    const result = From.anything(prime);
    expect(result).toEqual(prime);
});

test('From timestamp', () => {
    const result = From.anything(prime.getTimestamp());
    expect(result).toEqual(prime);
});

test('From string', () => {
    const result = From.anything('1986-6-24 12:01:02.003 GMT');
    expect(result).toEqual(prime);
});

test('From invalid value', () => {
    expect(() => From.anything('not a date')).toThrowError(PrimeError);
});