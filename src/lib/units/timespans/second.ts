import { Timespan, TimeUnit } from '../../types';

const Second : Timespan = {

    name: TimeUnit.SECOND,
    aliases: [ 'seconds', 'second' ],
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
