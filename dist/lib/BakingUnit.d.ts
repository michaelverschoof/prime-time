/**
 * Enum pattern class
 */
export declare class BakingUnit {
    readonly name: string;
    readonly amount: number;
    constructor(name: string, amount: number);
}
export declare namespace BakingUnits {
    const MILLISECONDS: BakingUnit;
    const SECONDS: BakingUnit;
    const MINUTES: BakingUnit;
    const HOURS: BakingUnit;
    const DAYS: BakingUnit;
    const WEEKS: BakingUnit;
    const MONTHS: BakingUnit;
    const YEARS: BakingUnit;
    function find(unit?: string | BakingUnit): BakingUnit;
}
