import { Timespan, TimeUnit } from '../../types';

const Millisecond : Timespan = {

    aliases: [ TimeUnit.MILLISECONDS, TimeUnit.MILLISECOND ],
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