import { Temporal, Timespan } from '../../types';

const Second : Temporal = {

    aliases: [ Timespan.SECONDS, Timespan.SECOND ],
    milliseconds: 1000,

    parts (timestamp) {
        const date = new Date(timestamp);
        return [
            date.getUTCFullYear(),
            date.getUTCMonth(),
            date.getUTCDate(),
            date.getUTCHours(),
            date.getUTCMinutes(),
            date.getUTCSeconds()
        ];
    }
};

export default Second;
