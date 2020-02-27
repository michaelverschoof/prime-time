import { Timespan } from '../../../types';

export default class Hour implements Timespan {

    readonly milliseconds : number;
    readonly aliases : string[];

    constructor () {
        this.milliseconds = 3600000;
        this.aliases = [
            'hours',
            'hour'
        ];
    }

    validate (hour : number) : boolean {
        return hour >= 0 && hour <= 23;
    }

    parts (timestamp : number) : number[] {
        const date = new Date(timestamp);
        return [date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours()];
    }

}