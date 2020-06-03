import { Timespan, TimeUnit } from '../../types';

const Minute : Timespan = {

    name: TimeUnit.MINUTE,
    aliases: [ 'minutes', 'minute' ],
    milliseconds: 60000,

    parts (timestamp) {
        const date = new Date(timestamp);
        return [
            date.getUTCFullYear(),
            date.getUTCMonth(),
            date.getUTCDate(),
            date.getUTCHours(),
            date.getUTCMinutes()
        ];
    }
};

export default Minute;