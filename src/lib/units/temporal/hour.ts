import { Temporal, Timespan } from '../../types';

const Hour : Temporal = {

    aliases: [ Timespan.HOURS, Timespan.HOUR ],
    milliseconds: 3600000,

    parts (timestamp) {
        const date = new Date(timestamp);
        return [
            date.getUTCFullYear(),
            date.getUTCMonth(),
            date.getUTCDate(),
            date.getUTCHours()
        ];
    }
};

export default Hour;
