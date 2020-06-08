import Day from '../../../src/lib/units/temporal/day';
import { timestamp } from '../../variables';

test('Get date parts', () => {
    const result = Day.parts(timestamp);
    expect(result).toEqual([1986, 5, 24]);
});
