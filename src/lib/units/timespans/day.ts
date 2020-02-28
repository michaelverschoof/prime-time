import { Timespan } from '../../../types';

export default class Day implements Timespan {

    readonly milliseconds : number = 86400000;
    readonly aliases : string[] = [
        'days',
        'day'
    ];

    validate (day : number) : boolean {
        return day >= 1 && day <= 31;
    }

    parts (timestamp : number) : number[] {
        const date = new Date(timestamp);
        return [date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()];
    }

}