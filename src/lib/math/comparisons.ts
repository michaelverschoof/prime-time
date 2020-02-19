/// <reference path="./mathematics.ts" />

namespace Mathematics.Comparisons {

    import divide = Mathematics.Equations.divide;
    import subtract = Mathematics.Equations.subtract;

    export function difference (start : number, end : number, divisor : number) : number {
        const difference = subtract(start, end);
        const quotient = divide(difference, divisor);

        return Math.sign(quotient) * Math.floor(Math.abs(quotient));
    }
}