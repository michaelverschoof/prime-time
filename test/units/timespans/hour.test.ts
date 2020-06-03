import Hour from '../../../src/lib/units/timespans/hour';

/**
 * 1986-6-24 12:01:02.003 GMT
 */
const timestamp : number = 519998462003;

const hour = Hour;

test('Get date parts', () => {
    const result = hour.parts(timestamp);
    expect(result).toEqual([ 1986, 5, 24, 12 ]);
});
