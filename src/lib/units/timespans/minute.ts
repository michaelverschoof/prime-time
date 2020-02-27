import { Timespan } from '../../../types';

export default class Minute implements Timespan {

    readonly milliseconds : number;
    readonly aliases : string[];

    constructor () {
        this.milliseconds = 60000;
        this.aliases = [
            'minutes',
            'minute'
        ];
    }

    validate (minute : number) : boolean {
        return minute >= 0 && minute <= 59;
    }

    parts (timestamp : number) : number[] {
        const date = new Date(timestamp);
        return [date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes()];
    }

}