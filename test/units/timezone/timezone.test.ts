import PrimeError from '../../../src/error/prime-error';
import { get } from '../../../src/lib/units/timezone/timezone';
import { Location, timestamp } from '../../variables';

describe('Get offset', () => {

    test('With valid timezones', () => {
        let result = get(timestamp, Location.NEW_YORK);
        expect(result.region).toEqual(Location.NEW_YORK);
        expect([ 300, 240 ]).toContainEqual(result.offset);
        expect(result.offset).toEqual(240);

        result = get(timestamp, Location.LONDON);
        expect(result.region).toEqual(Location.LONDON);
        expect([ -60, 0 ]).toContainEqual(result.offset);

        result = get(timestamp, Location.AMSTERDAM);
        expect(result.region).toEqual(Location.AMSTERDAM);
        expect([ -120, -60 ]).toContainEqual(result.offset);
    });

    test('With invalid timezone', () => {
        expect(() => get(timestamp, 'wrong/timestamp')).toThrowError(PrimeError);
    });

    test('With non-existing timezone', () => {
        expect(() => get(timestamp, 'Europe/non_existing')).toThrowError(RangeError);
    });
});