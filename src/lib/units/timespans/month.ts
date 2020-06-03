import { Timespan, TimeUnit } from '../../types';

const Month : Timespan = {

    name: TimeUnit.MONTH,
    aliases: [ 'months', 'month' ],
    milliseconds: 2629746000,

    parts (timestamp) {
        const date = new Date(timestamp);
        return [
            date.getUTCFullYear(),
            date.getUTCMonth()
        ];
    }
};

export default Month;