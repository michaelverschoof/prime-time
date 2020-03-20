import { DAY } from '../../../src/lib/units/timespans';
import Day from '../../../src/lib/units/timespans/day';

/**
 * 1986-6-24 12:01:02.003 GMT
 */
const timestamp : number = 519998462003;

const day = new Day();

test('Create', () => {
    expect(day).toEqual(DAY);
});

test('Get date parts', () => {
    let result = day.parts(timestamp);
    expect(result).toEqual([1986, 5, 24]);
});
