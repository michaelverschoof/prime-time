import { YEAR } from '../../../src/lib/units/timespans';
import Year from '../../../src/lib/units/timespans/year';

/**
 * 1986-6-24 12:01:02.003 GMT
 */
const timestamp : number = 519998462003;

const year = new Year();

test('Create', () => {
    expect(year).toEqual(YEAR);
});

test('Validate', () => {
    let result = year.validate(1986);
    expect(result).toBe(true);

    result = year.validate(10000);
    expect(result).toBe(false);
});

test('Get date parts', () => {
    let result = year.parts(timestamp);
    expect(result).toEqual([1986]);
});
