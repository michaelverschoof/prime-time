import { Temporal, Timespan } from '../../types';

const Millisecond : Temporal = {

    aliases: [ Timespan.MILLISECONDS, Timespan.MILLISECOND ],
    milliseconds: 1,

    parts (timestamp) {
        const date = new Date(timestamp);
        return [
            date.getUTCFullYear(),
            date.getUTCMonth(),
            date.getUTCDate(),
            date.getUTCHours(),
            date.getUTCMinutes(),
            date.getUTCSeconds(),
            date.getUTCMilliseconds()
        ];
    }
};

export default Millisecond;