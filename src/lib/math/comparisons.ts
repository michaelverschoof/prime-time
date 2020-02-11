import { Equations } from './equations';

export namespace Comparisons {

    export function difference (start : number, end : number, divisor ?: number) {
        const difference = Equations.subtract(start, end);
        if (!divisor) {
            return difference;
        }

        const quotient = Equations.divide(difference, divisor);

        // TODO Make this optional?
        return Math.sign(quotient) * Math.floor(Math.abs(quotient));
    }
}