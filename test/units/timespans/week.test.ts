import { WEEK } from '../../../src/lib/units/timespans';
import Week from '../../../src/lib/units/timespans/week';

/**
 * 1986-6-24 12:01:02.003 GMT
 */
const timestamp : number = 519998462003;

const week = new Week();

test('Create', () => {
    expect(week).toEqual(WEEK);
});

test('Validate', () => {
    let result = week.validate(30);
    expect(result).toBe(true);

    result = week.validate(55);
    expect(result).toBe(false);
});

test('Get date parts', () => {
    let result = week.parts(timestamp);
    expect(result).toEqual([1986, 5, 24]);
});