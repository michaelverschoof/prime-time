import Year from '../../../src/lib/units/timespans/year';

/**
 * 1986-6-24 12:01:02.003 GMT
 */
const timestamp : number = 519998462003;

const year = Year;

test('Get date parts', () => {
    const result = year.parts(timestamp);
    expect(result).toEqual([ 1986 ]);
});
