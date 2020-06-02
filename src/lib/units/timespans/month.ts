import { Timespan } from '../../types';

export default class Month implements Timespan {

    readonly milliseconds : number = 2629746000;
    readonly aliases : string[] = [
        'months',
        'month'
    ];

    parts (timestamp : number) : number[] {
        const date = new Date(timestamp);
        return [
            date.getUTCFullYear(),
            date.getUTCMonth()
        ];
    }

}
