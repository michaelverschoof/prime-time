import { Timespan } from '../../../types';

export default class MilliSecond implements Timespan {

    readonly milliseconds : number;
    readonly aliases : string[];

    constructor () {
        this.milliseconds = 1;
        this.aliases = [
            'milliseconds',
            'millisecond'
        ];
    }

    validate (millisecond : number) : boolean {
        return millisecond >= 0 && millisecond <= 999;
    }

    parts (timestamp : number) : number[] {
        const date = new Date(timestamp);
        return [date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds(), date.getUTCMilliseconds()];
    }

}