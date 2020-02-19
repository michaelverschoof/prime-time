/// <reference path="./mathematics.ts" />

namespace Mathematics.Equations {

    export function add (augend : number, addend : number) {
        return augend + addend;
    }

    export function subtract (minuend : number, subtrahend : number) {
        return minuend - subtrahend;
    }

    export function multiply (multiplicand : number, multiplier : number) {
        return multiplicand * multiplier;
    }

    export function divide (dividend : number, divisor : number) {
        return dividend / divisor;
    }
}