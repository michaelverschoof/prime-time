import { From } from '../../src/lib/from/from';
import { PrimeTime } from '../../src/prime-time';

/**
 * 1986-6-24 12:01:02.003 GMT
 */
const timestamp : number = 519998462003;

const prime : PrimeTime = new PrimeTime(timestamp);

test('From Date', () => {
    const date = new Date(timestamp);

    const result = From.date(date);
    expect(result).toEqual(prime);
});

test('From timestamp', () => {
    const result = From.timestamp(timestamp);
    expect(result).toEqual(prime);
});

test('From string', () => {
    const result = From.string('1986-6-24 12:01:02.003 GMT');
    expect(result).toEqual(prime);
});

test('From anything', () => {
    const now = Date.now();

    let result = From.anything();
    expect(result instanceof PrimeTime).toBe(true);
    expect(result.getTimestamp()).toBeGreaterThanOrEqual(now);
    expect(result.getTimestamp()).toBeLessThanOrEqual(now + 1000);

    result = From.anything(prime);
    expect(result).toEqual(prime);

    result = From.anything(prime.getDate());
    expect(result).toEqual(prime);

    result = From.anything(prime.getTimestamp());
    expect(result).toEqual(prime);

    result = From.anything('1986-6-24 12:01:02.003 GMT');
    expect(result).toEqual(prime);
});