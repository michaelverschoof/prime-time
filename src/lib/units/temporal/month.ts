import { Temporal, Timespan } from '../../types';

const Month : Temporal = {

    aliases: [ Timespan.MONTHS, Timespan.MONTH ],
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