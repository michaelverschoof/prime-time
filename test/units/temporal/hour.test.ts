import Hour from '../../../src/lib/units/temporal/hour';
import { timestamp } from '../../variables';

test('Get date parts', () => {
    const result = Hour.parts(timestamp);
    expect(result).toEqual([ 1986, 5, 24, 12 ]);
});
