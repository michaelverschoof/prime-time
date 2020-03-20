import { MILLISECOND } from '../../../src/lib/units/timespans';
import Millisecond from '../../../src/lib/units/timespans/millisecond';

/**
 * 1986-6-24 12:01:02.003 GMT
 */
const timestamp : number = 519998462003;

const millisecond = new Millisecond();

test('Create', () => {
    expect(millisecond).toEqual(MILLISECOND);
});

test('Get date parts', () => {
    let result = millisecond.parts(timestamp);
    expect(result).toEqual([1986, 5, 24, 12, 1, 2, 3]);
});
