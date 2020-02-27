import { Timespan } from '../../../types';

export default class Month implements Timespan {

    readonly milliseconds : number;
    readonly aliases : string[];

    constructor () {
        this.milliseconds = 2629746000;
        this.aliases = [
            'months',
            'month'
        ];
    }

    validate (month : number) : boolean {
        // Month is zero-based for some reason
        return month >= 0 && month <= 11;
    }

    parts (timestamp : number) : number[] {
        const date = new Date(timestamp);
        return [date.getUTCFullYear(), date.getUTCMonth()];
    }

}