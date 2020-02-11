import { BakingUnit } from './lib/BakingUnit';
export declare function baketime(date?: number | string | Date | BakeTime): BakeTime;
export declare class BakeTime {
    private timestamp;
    private readonly date;
    constructor(timestamp: number);
    add(amount: number, unit: string | BakingUnit): BakeTime;
    subtract(amount: number, unit: string | BakingUnit): BakeTime;
    diff(other: BakeTime, unit?: string | BakingUnit): number;
    after(date: BakeTime, unit?: string | BakingUnit, equality?: boolean): boolean;
    before(date: BakeTime, unit?: string | BakingUnit, equality?: boolean): boolean;
    getTimestamp(): number;
    getDate(): Date;
    update(milliseconds: number): BakeTime;
    private static multiply;
}
