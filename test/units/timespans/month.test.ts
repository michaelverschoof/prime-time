import { MONTH } from '../../../src/lib/units/timespans';
import Month from '../../../src/lib/units/timespans/month';

/**
 * 1986-6-24 12:01:02.003 GMT
 */
const timestamp : number = 519998462003;

const month = new Month();

test('Create', () => {
    expect(month).toEqual(MONTH);
});

test('Get date parts', () => {
    let result = month.parts(timestamp);
    expect(result).toEqual([1986, 5]);
});
