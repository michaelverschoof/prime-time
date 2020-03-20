import { Timespan } from '../../types';

export default class MilliSecond implements Timespan {

    readonly milliseconds : number = 1;
    readonly aliases : string[] = [
        'milliseconds',
        'millisecond'
    ];

    parts (timestamp : number) : number[] {
        const date = new Date(timestamp);
        return [date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds(), date.getUTCMilliseconds()];
    }

}
