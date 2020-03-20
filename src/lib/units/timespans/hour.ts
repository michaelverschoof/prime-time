import { Timespan } from '../../types';

export default class Hour implements Timespan {

    readonly milliseconds : number = 3600000;
    readonly aliases : string[] = [
        'hours',
        'hour'
    ];

    parts (timestamp : number) : number[] {
        const date = new Date(timestamp);
        return [date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours()];
    }

}
