import { Temporal, Timespan } from '../../types';

const Day : Temporal = {

    aliases: [ Timespan.DAYS, Timespan.DAY ],
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