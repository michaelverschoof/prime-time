import { Timespan } from '../../../types';

export default class Year implements Timespan {

    readonly milliseconds : number;
    readonly aliases : string[];

    constructor () {
        this.milliseconds =  31556952000;
        this.aliases = [
            'years',
            'year'
        ];
    }

    validate (year : number) : boolean {
        return year >= -9999 && year <= 9999;
    }

    parts (timestamp : number) : number[] {
        const date = new Date(timestamp);
        return [date.getUTCFullYear()];
    }

    leap (year : number) : boolean {
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    }

}