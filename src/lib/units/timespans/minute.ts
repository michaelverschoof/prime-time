import { Timespan } from '../../types';

const Minute : Timespan = {

    milliseconds: 60000,
    aliases: [ 'minutes', 'minute' ],

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