import Month from '../../../src/lib/units/temporal/month';
import { timestamp } from '../../variables';

test('Get date parts', () => {
    const result = Month.parts(timestamp);
    expect(result).toEqual([ 1986, 5 ]);
});
