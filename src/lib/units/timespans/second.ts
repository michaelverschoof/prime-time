import { Timespan } from '../../../types';

export default class Second implements Timespan {

    readonly milliseconds : number;
    readonly aliases : string[];

    constructor () {
        this.milliseconds = 1000;
        this.aliases = [
            'seconds',
            'second'
        ];
    }

    validate (second : number) : boolean {
        return second >= 0 && second <= 59;
    }

    parts (timestamp : number) : number[] {
        const date = new Date(timestamp);
        return [date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds()];
    }

}