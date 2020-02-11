import { BakingUnit } from './BakingUnit';
export declare namespace BakingDates {
    function parse(date?: number | string | Date): number;
    function parts(date: Date, unit: BakingUnit): number[];
}
