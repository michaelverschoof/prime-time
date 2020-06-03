import { Timespan } from '../../types';

const Month : Timespan = {

    milliseconds: 2629746000,
    aliases: [ 'months', 'month' ],

    parts (timestamp) {
        const date = new Date(timestamp);
        return [
            date.getUTCFullYear(),
            date.getUTCMonth()
        ];
    }
};

export default Month;