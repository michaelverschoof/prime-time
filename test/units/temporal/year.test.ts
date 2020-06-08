import Year from '../../../src/lib/units/temporal/year';
import { timestamp } from '../../variables';

test('Get date parts', () => {
    const result = Year.parts(timestamp);
    expect(result).toEqual([ 1986 ]);
});
