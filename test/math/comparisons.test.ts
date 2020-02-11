import { Comparisons } from '../../src/lib/math/comparisons';
import difference = Comparisons.difference;

describe('Differences', () => {

    describe('Without divisor', () => {

        test('5 differs from 2', () => {
            const result = difference(5, 2);
            expect(result).toBe(3);
        });

        test('-5 differs from -2', () => {
            const result = difference(-5, -2);
            expect(result).toBe(-3);
        });

        test('5 differs from -2', () => {
            const result = difference(5, -2);
            expect(result).toBe(7);
        });

        test('-5 differs from 2', () => {
            const result = difference(-5, 2);
            expect(result).toBe(-7);
        });
    });

    describe('With divisor', () => {

        test('5 differs from 2', () => {
            const result = difference(5, 2, 2);
            expect(result).toBe(1);
        });

        test('-5 differs from -2', () => {
            const result = difference(-5, -2, 2);
            expect(result).toBe(-1);
        });

        test('5 differs from -2', () => {
            const result = difference(5, -2, 5);

            expect(result).toBe(1);
        });

        test('-5 differs from 2', () => {
            const result = difference(-5, 2, 5);
            expect(result).toBe(-1);
        });
    });
});