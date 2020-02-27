import { HOUR } from '../../../src/lib/units/timespans';
import Hour from '../../../src/lib/units/timespans/hour';

/**
 * 1986-6-24 12:01:02.003 GMT
 */
const timestamp : number = 519998462003;

const hour = new Hour();

test('Create', () => {
    expect(hour).toEqual(HOUR);
});

test('Validate', () => {
    let result = hour.validate(12);
    expect(result).toBe(true);

    result = hour.validate(25);
    expect(result).toBe(false);
});

test('Get date parts', () => {
    let result = hour.parts(timestamp);
    expect(result).toEqual([1986, 5, 24, 12]);
});