import { Timespan, TimeUnit } from '../../types';

const Day : Timespan = {

    name: TimeUnit.DAY,
    aliases: [ 'days', 'day' ],
    milliseconds: 86400000,

    parts (timestamp) {
        const date = new Date(timestamp);
        return [
            date.getUTCFullYear(),
            date.getUTCMonth(),
            date.getUTCDate()
        ];
    }
};

export default Day;