import { Equations } from '../../src/lib/math/equations';
import add = Equations.add;
import subtract = Equations.subtract;
import multiply = Equations.multiply;
import divide = Equations.divide;

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