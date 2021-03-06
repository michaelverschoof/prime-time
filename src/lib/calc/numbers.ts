function add (augend : number, addend : number) : number {
    return augend + addend;
}

function subtract (minuend : number, subtrahend : number) : number {
    return minuend - subtrahend;
}

function multiply (multiplicand : number, multiplier : number) : number {
    return multiplicand * multiplier;
}

function divide (dividend : number, divisor : number) : number {
    return dividend / divisor;
}

function difference (left : number, right : number, divisor : number = 1) : number {
    const difference = subtract(right, left);
    const quotient = divide(difference, divisor);
    return quotient >> 0;
}

export {
    add,
    subtract,
    multiply,
    divide,
    difference
};