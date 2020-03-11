import { Timespan } from '../../../types';

export default class Year implements Timespan {

    readonly milliseconds : number = 31556952000;
    readonly aliases : string[] = [
        'years',
        'year'
    ];

    validate (year : number) : boolean {
        return year >= -9999 && year <= 9999;
    }

    parts (timestamp : number) : number[] {
        const date = new Date(timestamp);
        return [date.getUTCFullYear()];
    }

}
