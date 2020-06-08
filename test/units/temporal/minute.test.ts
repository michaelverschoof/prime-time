import Minute from '../../../src/lib/units/temporal/minute';
import { timestamp } from '../../variables';

test('Get date parts', () => {
    const result = Minute.parts(timestamp);
    expect(result).toEqual([ 1986, 5, 24, 12, 1 ]);
});
