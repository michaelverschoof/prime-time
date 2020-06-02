import { Timespan } from '../../types';

export default class Second implements Timespan {

    readonly milliseconds : number = 1000;
    readonly aliases : string[] = [
        'seconds',
        'second'
    ];

    constructor () {
        this.milliseconds = 1000;
        this.aliases = [
            'seconds',
            'second'
        ];
    }

    parts (timestamp : number) : number[] {
        const date = new Date(timestamp);
        return [
            date.getUTCFullYear(),
            date.getUTCMonth(),
            date.getUTCDate(),
            date.getUTCHours(),
            date.getUTCMinutes(),
            date.getUTCSeconds()
        ];
    }

}
