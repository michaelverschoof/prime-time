import { MINUTE } from '../../../src/lib/units/timespans';
import Minute from '../../../src/lib/units/timespans/minute';

/**
 * 1986-6-24 12:01:02.003 GMT
 */
const timestamp : number = 519998462003;

const minute = new Minute();

test('Create', () => {
    expect(minute).toEqual(MINUTE);
});

test('Get date parts', () => {
    let result = minute.parts(timestamp);
    expect(result).toEqual([1986, 5, 24, 12, 1]);
});
