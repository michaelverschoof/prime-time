import { Timespan } from '../../types';

const Day : Timespan = {

    milliseconds: 86400000,
    aliases: [ 'days', 'day' ],

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