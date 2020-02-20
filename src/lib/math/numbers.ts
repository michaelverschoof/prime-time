export function add (augend : number, addend : number) : number {
    return augend + addend;
}

export function subtract (minuend : number, subtrahend : number) : number {
    return minuend - subtrahend;
}

export function multiply (multiplicand : number, multiplier : number) : number {
    return multiplicand * multiplier;
}

export function divide (dividend : number, divisor : number) : number {
    return dividend / divisor;
}

export function difference (start : number, end : number, divisor : number = 1) : number {
    const difference = subtract(start, end);
    const quotient = divide(difference, divisor);

    return Math.sign(quotient) * Math.floor(Math.abs(quotient));
}