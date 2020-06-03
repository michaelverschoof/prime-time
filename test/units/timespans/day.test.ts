import Day from '../../../src/lib/units/timespans/day';

/**
 * 1986-6-24 12:01:02.003 GMT
 */
const timestamp : number = 519998462003;

const day = Day;

test('Get date parts', () => {
    const result = day.parts(timestamp);
    expect(result).toEqual([1986, 5, 24]);
});
