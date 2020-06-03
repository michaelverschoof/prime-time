import Second from '../../../src/lib/units/timespans/second';

/**
 * 1986-6-24 12:01:02.003 GMT
 */
const timestamp : number = 519998462003;

const second = Second;

test('Get date parts', () => {
    const result = second.parts(timestamp);
    expect(result).toEqual([ 1986, 5, 24, 12, 1, 2 ]);
});
