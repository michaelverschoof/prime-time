import Minute from '../../../src/lib/units/timespans/minute';

/**
 * 1986-6-24 12:01:02.003 GMT
 */
const timestamp : number = 519998462003;

const minute = Minute;

test('Get date parts', () => {
    const result = minute.parts(timestamp);
    expect(result).toEqual([ 1986, 5, 24, 12, 1 ]);
});
