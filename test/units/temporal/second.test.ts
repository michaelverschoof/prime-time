import Second from '../../../src/lib/units/temporal/second';
import { timestamp } from '../../variables';

test('Get date parts', () => {
    const result = Second.parts(timestamp);
    expect(result).toEqual([ 1986, 5, 24, 12, 1, 2 ]);
});
