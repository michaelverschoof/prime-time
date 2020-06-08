import { add, difference, divide, multiply, subtract } from '../../src/lib/calc/numbers';

describe('Additions', () => {

    test('5 plus 2', () => {
        const result = add(5, 2);
        expect(result).toBe(7);
    });

    test('-5 plus -2', () => {
        const result = add(-5, -2);
        expect(result).toBe(-7);
    });

    test('5 plus -2', () => {
        const result = add(5, -2);
        expect(result).toBe(3);
    });

    test('-5 plus 2', () => {
        const result = add(-5, 2);
        expect(result).toBe(-3);
    });
});

describe('Subtractions', () => {

    test('5 minus 2', () => {
        const result = subtract(5, 2);
        expect(result).toBe(3);
    });

    test('-5 minus -2', () => {
        const result = subtract(-5, -2);
        expect(result).toBe(-3);
    });

    test('5 minus -2', () => {
        const result = subtract(5, -2);
        expect(result).toBe(7);
    });

    test('-5 minus 2', () => {
        const result = subtract(-5, 2);
        expect(result).toBe(-7);
    });
});

describe('Multiplications', () => {

    test('5 times 2', () => {
        const result = multiply(5, 2);
        expect(result).toBe(10);
    });

    test('-5 times -2', () => {
        const result = multiply(-5, -2);
        expect(result).toBe(10);
    });

    test('5 times -2', () => {
        const result = multiply(5, -2);
        expect(result).toBe(-10);
    });

    test('-5 times 2', () => {
        const result = multiply(-5, 2);
        expect(result).toBe(-10);
    });
});

describe('Divisions', () => {

    test('5 divided by 2', () => {
        const result = divide(5, 2);
        expect(result).toBe(2.5);
    });

    test('-5 divided by -2', () => {
        const result = divide(-5, -2);
        expect(result).toBe(2.5);
    });

    test('5 divided by -2', () => {
        const result = divide(5, -2);
        expect(result).toBe(-2.5);
    });

    test('-5 divided by 2', () => {
        const result = divide(-5, 2);
        expect(result).toBe(-2.5);
    });
});

describe('Differences', () => {

    describe('Without divisor', () => {

        test('5 differs from 2', () => {
            const result = difference(5, 2);
            expect(result).toBe(-3);
        });

        test('2 differs from 5', () => {
            const result = difference(2, 5);
            expect(result).toBe(3);
        });

        test('-5 differs from -2', () => {
            const result = difference(-5, -2);
            expect(result).toBe(3);
        });

        test('-2 differs from -5', () => {
            const result = difference(-2, -5);
            expect(result).toBe(-3);
        });

        test('5 differs from -2', () => {
            const result = difference(5, -2);
            expect(result).toBe(-7);
        });

        test('-2 differs from 5', () => {
            const result = difference(-2, 5);
            expect(result).toBe(7);
        });

        test('-5 differs from 2', () => {
            const result = difference(-5, 2);
            expect(result).toBe(7);
        });

        test('2 differs from -5', () => {
            const result = difference(2, -5);
            expect(result).toBe(-7);
        });
    });

    describe('With divisor', () => {

        test('5 differs from 2', () => {
            const result = difference(5, 2, 2);
            expect(result).toBe(-1);
        });

        test('2 differs from 5', () => {
            const result = difference(2, 5, 2);
            expect(result).toBe(1);
        });

        test('-5 differs from -2', () => {
            const result = difference(-5, -2, 2);
            expect(result).toBe(1);
        });

        test('-2 differs from -5', () => {
            const result = difference(-2, -5, 2);
            expect(result).toBe(-1);
        });

        test('5 differs from -2', () => {
            const result = difference(5, -2, 5);
            expect(result).toBe(-1);
        });

        test('-2 differs from 5', () => {
            const result = difference(-2, 5, 5);
            expect(result).toBe(1);
        });

        test('-5 differs from 2', () => {
            const result = difference(-5, 2, 5);
            expect(result).toBe(1);
        });

        test('2 differs from -5', () => {
            const result = difference(2, -5, 5);
            expect(result).toBe(-1);
        });
    });
});
