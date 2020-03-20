import { Timespan } from '../../types';

export default class Year implements Timespan {

    readonly milliseconds : number = 31556952000;
    readonly aliases : string[] = [
        'years',
        'year'
    ];

    parts (timestamp : number) : number[] {
        const date = new Date(timestamp);
        return [date.getUTCFullYear()];
    }

}
