import { Temporal, Timespan } from '../../types';

const Minute : Temporal = {

    aliases: [ Timespan.MINUTES, Timespan.MINUTE ],
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