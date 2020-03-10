import PrimeError from '../../src/error/prime-error';
import { localise } from '../../src/lib/units/formats';

describe('Localise', () => {

    test('Year', () => {
        let result = localise('year');
        expect(result).toEqual({year: 'numeric'});

        result = localise('year-long');
        expect(result).toEqual({year: 'numeric'});

        result = localise('year-short');
        expect(result).toEqual({year: '2-digit'});
    });

    test('Month', () => {
        let result = localise('month');
        expect(result).toEqual({month: 'long'});

        result = localise('month-long');
        expect(result).toEqual({month: 'long'});

        result = localise('month-short');
        expect(result).toEqual({month: 'short'});
    });

    test('Weekday', () => {
        let result = localise('weekday');
        expect(result).toEqual({weekday: 'long'});

        result = localise('weekday-long');
        expect(result).toEqual({weekday: 'long'});

        result = localise('weekday-short');
        expect(result).toEqual({weekday: 'short'});
    });

    test('Day', () => {
        let result = localise('day');
        expect(result).toEqual({day: '2-digit'});

        result = localise('day-long');
        expect(result).toEqual({day: '2-digit'});

        result = localise('day-short');
        expect(result).toEqual({day: 'numeric'});
    });

    test('Hour', () => {
        let result = localise('hour');
        expect(result).toEqual({hour: '2-digit'});

        result = localise('hour-long');
        expect(result).toEqual({hour: '2-digit'});

        result = localise('hour-short');
        expect(result).toEqual({hour: 'numeric'});
    });

    test('Minute', () => {
        let result = localise('minute');
        expect(result).toEqual({minute: '2-digit'});

        result = localise('minute-long');
        expect(result).toEqual({minute: '2-digit'});

        result = localise('minute-short');
        expect(result).toEqual({minute: 'numeric'});
    });

    test('Second', () => {
        let result = localise('second');
        expect(result).toEqual({second: '2-digit'});

        result = localise('second-long');
        expect(result).toEqual({second: '2-digit'});

        result = localise('second-short');
        expect(result).toEqual({second: 'numeric'});
    });

    test('Non-existent values', () => {
        expect(() => { localise('non-existent value') }).toThrowError(PrimeError);
    });
});