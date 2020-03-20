import { Timespan } from '../../types';

export default class Minute implements Timespan {

    readonly milliseconds : number = 60000;
    readonly aliases : string[] = [
        'minutes',
        'minute'
    ];

    parts (timestamp : number) : number[] {
        const date = new Date(timestamp);
        return [date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes()];
    }

}
