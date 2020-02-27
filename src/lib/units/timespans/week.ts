import { Timespan } from '../../../types';

export default class Week implements Timespan {

    readonly milliseconds : number;
    readonly aliases : string[];

    constructor () {
        this.milliseconds = 604800000;
        this.aliases = [
            'weeks',
            'week'
        ];
    }

    validate (week : number) : boolean {
        return week >= 1 && week <= 53;
    }

    parts (timestamp : number) : number[] {
        const date = new Date(timestamp);
        return [date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()];
    }

}