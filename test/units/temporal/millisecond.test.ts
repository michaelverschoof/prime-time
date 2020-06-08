import Millisecond from '../../../src/lib/units/temporal/millisecond';
import { timestamp } from '../../variables';

test('Get date parts', () => {
    const result = Millisecond.parts(timestamp);
    expect(result).toEqual([ 1986, 5, 24, 12, 1, 2, 3 ]);
});
